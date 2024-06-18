const PEN_PACKET_START = 0xc0;
const PEN_PACKET_END = 0xc1;

const PEN_SERVICE_UUID_16 = 0x19f1;
const PEN_CHARACTERISTICS_WRITE_UUID_16 = 0x2ba0;
const PEN_CHARACTERISTICS_NOTIFICATION_UUID_16 = 0x2ba1;

const PEN_SERVICE_UUID_128 = "4f99f138-9d53-5bfa-9e50-b147491afe68";
const PEN_CHARACTERISTICS_WRITE_UUID_128 =
  "8bc8cc7d-88ca-56b0-af9a-9bf514d0d61a";
const PEN_CHARACTERISTICS_NOTIFICATION_UUID_128 =
  "64cd86b1-2256-5aeb-9f04-2caf6c60ae57";

let bufferArray_first = new Uint8Array(
  [
    0xc0, // start packet
    0x01, // cmd
    0x2a,
    0x00, // length
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00, // connection code
    0x00,
    0x00, // app type
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00, // app version
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00, // protocol version
    0xc1,
  ] // end packet
);

class Smartpen {
  constructor(options) {
    if (options) {
      this.alias = options.alias;
      this.onDeviceListed(options.onDeviceListed);
      this.onConnecting(options.onConnecting);
      this.onConnected(options.onConnected);
      this.onDisconnected(options.onDisconnected);
      this.onDocChanged(options?.onDocChanged);
      this.onPenDown(options.onPenDown);
      this.onPenMove(options.onPenMove);
      this.onPenUp(options.onPenUp);
      this.onPenBattery(options.onPenBattery);
    }
  }

  static init(options) {
    var instance = new Smartpen();
    if (options) {
      instance.alias = options.alias;
      instance.onDeviceListed(options.onDeviceListed);
      instance.onConnecting(options.onConnecting);
      instance.onConnected(options.onConnected);
      instance.onDisconnected(options.onDisconnected);
      instance.onDocChanged(options?.onDocChanged);
      instance.onPenDown(options.onPenDown);
      instance.onPenMove(options.onPenMove);
      instance.onPenUp(options.onPenUp);
    }
    return instance;
  }

  async PenConnect() {
    try {
      //console.log('Requesting any Bluetooth Device...');

      this.device = await navigator.bluetooth.requestDevice({
        filters: [
          { services: [PEN_SERVICE_UUID_16] },
          { services: [PEN_SERVICE_UUID_128] },
          { namePrefix: "Neosmartpen" },
          { namePrefix: "Smartpen" },
        ],
      });

      this.listed();

      var sender = this;
      //console.log('Connecting to GATT Server...');
      this.device.addEventListener("gattserverdisconnected", function () {
        sender.PenDisconnected(sender, this);
      });
      const server = await this.device.gatt.connect();
      this.connecting();

      if (server.device.name == "Smartpen dimo_d") {
        const service = await server.getPrimaryService(PEN_SERVICE_UUID_128);
        this.characteristics_write = await service.getCharacteristic(
          PEN_CHARACTERISTICS_WRITE_UUID_128
        );
        this.characteristics_notify_indicate = await service.getCharacteristic(
          PEN_CHARACTERISTICS_NOTIFICATION_UUID_128
        );
      } else {
        const service = await server.getPrimaryService(PEN_SERVICE_UUID_16);
        this.characteristics_write = await service.getCharacteristic(
          PEN_CHARACTERISTICS_WRITE_UUID_16
        );
        this.characteristics_notify_indicate = await service.getCharacteristic(
          PEN_CHARACTERISTICS_NOTIFICATION_UUID_16
        );
      }

      await this.characteristics_notify_indicate.startNotifications();

      var handleDataChanged = this.handleDataChanged;
      var sender = this;
      this.characteristics_notify_indicate.addEventListener(
        "characteristicvaluechanged",
        function (event) {
          handleDataChanged(sender, event);
        }
      );

      //console.log('BLE Connected...');
      //console.log('BT protocol #1 ->');
      this.characteristics_write.writeValue(bufferArray_first); // request Pen information
    } catch (error) {
      console.log(error);
    }
  } // End of PenConnect

  handleDataChanged(sender, event) {
    let value = event.target.value;
    let value_length = event.target.value.byteLength;
    let buffer = new Uint8Array(value_length);

    //      var Xwmin = 0;
    //      var Xwmax = 100;
    //      var Ywmin = 0;
    //      var Ywmax = 130;
    //
    //      var Xvmin = 50;
    //      var Xvmax = sender.width - 50;
    //      var Yvmin = 50;
    //      var Yvmax = sender.height -50;
    //
    //      var Sx = (Xvmax - Xvmin)/(Xwmax - Xwmin);
    //      var Sy = (Yvmax - Yvmin)/(Ywmax - Ywmin);

    for (let i = 0; i < value.byteLength; i++) {
      buffer[i] = value.getUint8(i);
    }

    var start = buffer.indexOf(PEN_PACKET_START);
    var end = buffer.indexOf(PEN_PACKET_END);

    // Unescape received packet
    while (start != -1 && end != -1) {
      var curCmdPackage = buffer.slice(start, end + 1);
      var escape = curCmdPackage.indexOf(0x7d);
      var unescapedBuf = new Uint8Array(end + 1);
      var cnt = 0;

      for (var i = 0; i < end + 1; i++) {
        if (curCmdPackage[i] == 0x7d) {
          unescapedBuf[cnt++] = curCmdPackage[i + 1] ^ 0x20;
          i++;
        } else {
          unescapedBuf[cnt++] = curCmdPackage[i];
        }
      }

      buffer = buffer.slice(end + 1, value_length);

      // packet command processing
      if (unescapedBuf[0] == PEN_PACKET_START && unescapedBuf[1] == 0x63) {
        if (unescapedBuf[4] == 0) {
          //PenDown();
          sender.px = 0;
          sender.py = 0;
          sender.writing = true;
        } else {
          if (sender.px > 0 && sender.py > 0) {
            sender.PenUp(sender.px, sender.py);
            sender.writing = false;
            sender.penDownChange = false;
          }
        }
      } else if (
        unescapedBuf[0] == PEN_PACKET_START &&
        unescapedBuf[1] == 0x64
      ) {
        var sectionId = unescapedBuf[7];
        var ownerId = sender.intFromBytes(unescapedBuf, 4, 3);
        var newBookId = sender.intFromBytes(unescapedBuf, 8, 4);
        var newPageId = sender.intFromBytes(unescapedBuf, 12, 4);

        if (sender.bookId != newBookId || sender.pageId != newPageId) {
          sender.bookId = newBookId;
          sender.pageId = newPageId;
          sender.DocChange && sender.DocChange(newBookId, newPageId);
        }

        switch (sender.pageId) {
          // need Page UI paper
          case 100:
            // color
            break;

          case 200:
            // thickness
            break;

          case 300:
            // mode
            break;

          default:
            break;
        }
      } else if (
        unescapedBuf[0] == PEN_PACKET_START &&
        unescapedBuf[1] == 0x65
      ) {
        var timediff = unescapedBuf[4];
        var force = sender.intFromBytes(unescapedBuf, 5, 2);
        var dotX = sender.intFromBytes(unescapedBuf, 7, 2);
        var dotY = sender.intFromBytes(unescapedBuf, 9, 2);
        var dotFx = sender.intFromBytes(unescapedBuf, 11, 1);
        var dotFy = sender.intFromBytes(unescapedBuf, 12, 1);
        var offset = 40;
        //console.log('PenMove force:' + force + ' X:' + dotX + '.' + dotFx + ' Y:' + dotY + '.' + dotFy);

        sender.px = dotX + dotFx * 0.01 * 1;
        sender.py = dotY + dotFy * 0.01 * 1;
        // ncode to mm
        sender.px *= 0.093364;
        sender.py *= 0.093364;

        // 72dpi
        sender.px *= 72;
        sender.py *= 72;

        //y offset
        //py += 80;

        if (window.isRotate) {
          // rotate to Landscape paper
          var x2, y2;
          var x1, y1;
          var x0, y0;

          // center of paper
          x0 = 1200 / 2;
          y0 = 1500 / 2;

          x1 = px;
          y1 = py;

          x2 = x0 + (y1 - y0);
          y2 = y0 - (x1 - x0);

          sender.px = x2 + 100;
          sender.py = y2 - 150;
        }

        if (sender.writing && !sender.penDownChange) {
          sender.penDownChange = true;
          sender.PenDown(sender.px, sender.py, sender.pageId, sender.bookId);
        }

        if (sender.writing) {
          sender.PenMove(sender.px, sender.py, sender.pageId, sender.bookId);
        }
      } // end of pen writing drawing
      else if (unescapedBuf[0] == PEN_PACKET_START && unescapedBuf[1] == 0x81) {
        // response
        var Errcode = unescapedBuf[2];
        //console.log('BT protocol #1 <- ' + 'connection result: ' + Errcode );

        // request pen status
        sender.bufferArray = new Uint8Array([0xc0, 0x04, 0x00, 0x00, 0xc1]);

        //console.log('BT protocol #2 -> ' + 'request pen status');
        sender.characteristics_write.writeValue(sender.bufferArray);
      } else if (
        unescapedBuf[0] == PEN_PACKET_START &&
        unescapedBuf[1] == 0x82
      ) {
        // response check passcode
        var lockErrcode = unescapedBuf[5];
        var retryCount = unescapedBuf[6];
        var maxCount = unescapedBuf[7];

        if (lockErrcode == 1) {
          // passcode OK
          //console.log('BT protocol #3 <- ' + 'passcode OK ');
          //console.log('BT protocol #4 -> request online data');

          // request online
          sender.bufferArray = new Uint8Array([
            0xc0, 0x11, 0x02, 0x00, 0xff, 0xff, 0xc1,
          ]);
          sender.characteristics_write.writeValue(sender.bufferArray);
        } else {
          //console.log('BT protocol #3 <- ' + 'passcode NG' + retryCount + '/'  + maxCount);
          // retry input passcode
          //alert("wrong passcode");

          passcode = prompt("please enter passcode " + (9 - retryCount));

          //console.log('BT protocol #3 -> input passcode ');
          sender.bufferArray = new Uint8Array([
            0xc0, 0x02, 0x10, 0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0xc1,
          ]);

          sender.bufferArray[4] = passcode.charCodeAt(0);
          sender.bufferArray[5] = passcode.charCodeAt(1);
          sender.bufferArray[6] = passcode.charCodeAt(2);
          sender.bufferArray[7] = passcode.charCodeAt(3);

          sender.characteristics_write.writeValue(sender.bufferArray);
        }
      } else if (
        unescapedBuf[0] == PEN_PACKET_START &&
        unescapedBuf[1] == 0x84
      ) {
        // response
        sender.isLocked = unescapedBuf[5];
        var penMemory = unescapedBuf[20];
        var penBattery = unescapedBuf[25];
        console.log(
          "BT protocol #2 <- " +
            "IsLock? " +
            sender.isLocked +
            " memory:" +
            penMemory +
            "%, battery:" +
            penBattery +
            "%"
        );
        sender.PenBattery(penBattery);
        if (sender.isLocked == 1) {
          passcode = prompt("please enter passcode");

          // input passcode
          //console.log('BT protocol #3 -> input passcode ');
          sender.bufferArray = new Uint8Array([
            0xc0, 0x02, 0x10, 0x00, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0xc1,
          ]);

          sender.bufferArray[4] = passcode.charCodeAt(0);
          sender.bufferArray[5] = passcode.charCodeAt(1);
          sender.bufferArray[6] = passcode.charCodeAt(2);
          sender.bufferArray[7] = passcode.charCodeAt(3);
          //console.log("passcode1 :" + bufferArray[4]);
          //console.log("passcode2 :" + bufferArray[5]);
          //console.log("passcode3 :" + bufferArray[6]);
          //console.log("passcode4 :" + bufferArray[7]);
          sender.characteristics_write.writeValue(sender.bufferArray);
        } // unlocked
        else {
          // request online
          //console.log('BT protocol #4 -> request online data');
          sender.bufferArray = new Uint8Array([
            0xc0, 0x11, 0x02, 0x00, 0xff, 0xff, 0xc1,
          ]);
          sender.characteristics_write.writeValue(sender.bufferArray);
        }
      } else if (
        unescapedBuf[0] == PEN_PACKET_START &&
        unescapedBuf[1] == 0x91
      ) {
        //response
        var Errcode = unescapedBuf[2];

        if (Errcode == 0) {
          console.log("Sender", sender);

          sender.PenConnected(sender.device);
          //bScan.innerHTML ="✎ Connected";
          //console.log('BT protocol #4 <- Penconnect');

          //setHoverMode(1);
        } else console.log("BT protocol #4 <- error : " + Errcode);
      }

      start = buffer.indexOf(PEN_PACKET_START);
      end = buffer.indexOf(PEN_PACKET_END);
    }
  }

  PenDisconnect() {
    if (this.device) {
      this.device.gatt.disconnect();
    }
  }

  intFromBytes(data, start, length) {
    var val = 0;
    for (var i = start + length - 1; i >= start; --i) {
      val += data[i];
      if (i > start) {
        val = val << 8;
      }
    }
    return val;
  }

  setHoverMode(val) {
    // testing hover mode
    val &= 0x01;
    bufferArray = new Uint8Array([0xc0, 0x05, 0x02, 0x00, 0x06, val, 0xc1]);
    this.characteristics_write.writeValue(bufferArray);
  }

  PenConnected(dev) {
    this.connected(dev);
  }

  PenDisconnected(sender, dev) {
    sender.disconnected();
  }

  DocChange(newBookId, newPageId) {
    this.docChanged && this.docChanged(newBookId, newPageId);
  }

  PenDown(px, py, pageId, bookId) {
    this.penDown(px, py, pageId, bookId);
  }

  PenMove(px, py, pageId, bookId) {
    this.penMove(px, py, pageId, bookId);
  }

  PenUp(px, py) {
    this.penUp(px, py);
  }

  PenBattery(battery) {
    this.penBattery(battery);
  }

  onDeviceListed(callback) {
    this.listed = callback;
  }

  onConnecting(callback) {
    this.connecting = callback;
  }

  onConnected(callback) {
    this.connected = callback;
  }

  onDisconnected(callback) {
    this.disconnected = callback;
  }

  onDocChanged(callback) {
    this.docChanged = callback;
  }

  onPenDown(callback) {
    this.penDown = callback;
  }

  onPenMove(callback) {
    this.penMove = callback;
  }

  onPenUp(callback) {
    this.penUp = callback;
  }

  onPenBattery(callback) {
    this.penBattery = callback;
  }
}
export default Smartpen;
