import { useEffect, useState, useRef } from "react";
import Smartpen from "../../utils/Smartpen";
import { ActionParam } from "../../model/ActionParam";
import { ActionMasterEnum } from "../../model/ActionMasterEnum";
import { ActionFieldMapping } from "../../model/ActionFieldMapping";
import PTPCanvasDialog from "../PTPComponents/PTPCanvasDialog";
import Constants from "../../utils/Constants";
import { getRxPageInfo } from "../../utils/RxPageUtils";
import { toast } from "react-toastify";
import PartnersDialog from "../PTPComponents/PartnersDialog";
import MobileNumberDialog from "../PTPComponents/MobileNumberDialog";
import ToastUtils from "../../utils/ToastUtils";
import PenSVG from "../../assets/PenSVG";
import RxPageInfoDTO from "../../model/RxPageInfoDTO";
import { AxiosError } from "axios";
import HistoryDialog from "../PTPComponents/HistoryDialog";
import ClickImagesModal from "../PTPComponents/images/ClickImagesModal";
import { StrokeData } from "../../model/stroke/StrokeData";

function BluetoothButton() {
  // is pen connected
  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  const [penBattery, setPenBattery] = useState<number | "charging" | null>(
    null
  );

  const mobileNumberInputRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<string>("");
  const audioChunksRef = useRef<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const currentPage = useRef<{ book: number; page: number } | undefined>();

  const scrollDivRef = useRef<HTMLDivElement>(null);
  const currentScrollPosition = useRef<number>(0);

  const [audio, setAudio] = useState<string | undefined>();

  const [penClass, setPenClass] = useState<Smartpen>();

  const [mobileNumberDialog, setMobileDialog] = useState<boolean>(false);

  const [showPTPModal, setShowPTPModal] = useState<boolean>(false);

  const [showVideoDialog, setVideoDialog] = useState<boolean>(false);

  const [showHistoryDialog, setShowHistoryDialog] = useState<boolean>(false);

  const [partnerDialog, setPartnerDialog] = useState<boolean>(false);
  const [record, setRecord] = useState<boolean>(false);

  //Click images modal
  const [showImageModal, setShowImageModal] = useState<boolean>(false);

  // current rx page info - url, actionField
  const rxPageInfoRef = useRef<RxPageInfoDTO>();

  const partnerTypeRef = useRef<number>();

  // canvas reference
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scaleRef = useRef<{ dx: number; dy: number }>({
    dx: 1,
    dy: 1,
  });
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      const message =
        "Are you sure you want to leave? Your changes may not be saved.";
      event.preventDefault(); // Some browsers require this to show the prompt
      event.returnValue = message; // Standard way of showing a custom message
      return message; // For legacy support in some browsers
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const videoMediaIdRef = useRef<number>();

  const strokeDataRef = useRef<StrokeData[]>([]);
  const currentStroke = useRef<StrokeData | null>(null);

  const numberActionFieldMap: Map<string, number> = new Map();
  numberActionFieldMap.set("num_1", 1);
  numberActionFieldMap.set("num_2", 2);
  numberActionFieldMap.set("num_3", 3);
  numberActionFieldMap.set("num_4", 4);
  numberActionFieldMap.set("num_5", 5);
  numberActionFieldMap.set("num_6", 6);
  numberActionFieldMap.set("num_7", 7);
  numberActionFieldMap.set("num_8", 8);
  numberActionFieldMap.set("num_9", 9);
  numberActionFieldMap.set("num_0", 0);

  function getScale(
    imgWidth: number,
    imgHeight: number
  ): { dx: number; dy: number } {
    return {
      dx: imgWidth / Constants.a4Width,
      dy: imgHeight / Constants.a4Height,
    };
  }

  const handleButtonClick = () => {
    isConnected ? penClass?.PenDisconnect() : penClass?.PenConnect();
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (!isConnected) {
      intervalId = setInterval(handleButtonClick, 2000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isConnected]);

  const onPageChangedHandler = (book: number, page: number) => {
    console.log("onDocChangedHandler ---- book :: ", book, " page :: ", page);
    const canvas = canvasRef.current;
    showPTPDialog();

    if (!canvas) {
      return;
    }
    getRxPageInfo(book, page)
      .then((pageInfo) => {
        console.log("page url :: ", pageInfo);
        rxPageInfoRef.current = pageInfo;

        const context = canvas.getContext("2d");
        if (context) {
          context.strokeStyle = "black";
          context.lineWidth = 1;
          contextRef.current = context;
        }

        loadImage(pageInfo.imageUrl, new Image()).then((img) => {
          canvas.width = img.width;
          canvas.height = img.height;
          context?.drawImage(img, 0, 0);

          scaleRef.current = getScale(img.width, img.height);

          contextRef.current = context;
        });
      })
      .catch((e) => {
        const error = e as AxiosError<{ errorMessage: string }>;
        ToastUtils.error(error.response?.data.errorMessage);
        hidePTPDialog();
      });
  };

  const loadImage = (url: string, image: HTMLImageElement) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      image.addEventListener("load", () => {
        resolve(image);
      });
      image.src = url;
      image.onerror = (e) => reject(e);
    });
  };

  // const drawCoodinatesBoxes = (coodinates: number[], _actionField: string) => {
  //   const context = contextRef.current;
  //   if (context) {
  //     let x1 = coodinates[0];
  //     let y1 = coodinates[1];

  //     let x2 = coodinates[2];
  //     let y2 = coodinates[3];

  //     context.strokeStyle = "red";
  //     context.lineWidth = 1;
  //     context.beginPath();
  //     context.moveTo(x1, y1);
  //     context.lineTo(x2, y1);

  //     context.lineTo(x2, y2);
  //     context.lineTo(x1, y2);

  //     context.lineTo(x1, y1);

  //     context.stroke();
  //     context.closePath();

  //     context.strokeStyle = "black";
  //     context.lineWidth = 1;
  //     contextRef.current = context;
  //   }
  // };

  const isPointInsideBox = (x: number, y: number, box: number[]) => {
    let x1 = box[0];
    let y1 = box[1];

    let x2 = box[2];
    let y2 = box[3];
    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
  };

  const getPageAddress = (book: number, page: number) => {
    return `303010${book}0${page}`;
  };

  const onPenDownHandler = async (
    x: number,
    y: number,
    page: number,
    book: number
  ) => {
    currentStroke.current = {
      coordinates: [{ x, y, _time: new Date().getTime() }],
      pageAddress: getPageAddress(book, page),
    };

    if (
      currentPage.current === undefined ||
      currentPage.current.book != book ||
      currentPage.current.page != page
    ) {
      currentPage.current = { book, page };
      onPageChangedHandler(book, page);
    }

    const context = contextRef.current;

    if (!context) {
      return;
    }

    context.closePath();
    context.beginPath();
    const scale = scaleRef.current;
    const drawingX = x * scale.dx;
    const drawingY = y * scale.dy;
    context.moveTo(drawingX, drawingY);
    contextRef.current = context;
  };

  var onPenMoveHandler = (x: number, y: number, page: number, book: number) => {
    if (currentStroke.current) {
      currentStroke.current.coordinates.push({
        x,
        y,
        _time: new Date().getTime(),
      });
    }

    draw(x, y, page, book);
  };

  const closeVideoDialog = () => {
    setVideoDialog(false);
  };

  const markPTPAsDND = () => {
    ToastUtils.success("Marked as DND");
  };

  const addGender = (actionField: ActionFieldMapping) => {
    ToastUtils.success(
      "Patient Marked as " + actionField.fieldName.toUpperCase()
    );
  };

  const openHistoryDialog = () => {
    console.log("Opening history dialog");
    if (mobileNumberRef.current.length !== 10) {
      ToastUtils.error("Enter Mobile Number");
      return;
    }

    setShowHistoryDialog(true);
  };

  const closeHistoryDialog = () => {
    setShowHistoryDialog(false);
  };

  const checkInsideAnyActionField = (x: number, y: number) => {
    const actionField = getActionField(x, y);

    closeMobileNumberDialog();
    closePartnerDialog();
    closeVideoDialog();
    closeHistoryDialog();

    if (!actionField) {
      return;
    }

    // gender
    if (
      actionField.fieldName.toLowerCase() === "male".toLowerCase() ||
      actionField.fieldName.toLowerCase() === "female".toLowerCase()
    ) {
      addGender(actionField);
    }

    //dnd
    if (actionField.fieldName.toLowerCase() === "dnr".toLowerCase()) {
      markPTPAsDND();
    }

    //history
    if (actionField.fieldName.toLowerCase() === "history") {
      openHistoryDialog();
    }

    //stop audio
    if (
      actionField.actionMaster !== ActionMasterEnum.STOP_AUDIO ||
      actionField.actionMaster !== ActionMasterEnum.STOP_AUDIO
    ) {
      record && stopAudioRecording();
    }

    // click images

    switch (actionField.actionMaster) {
      case ActionMasterEnum.PLAY_VIDEO:
        openVideoDialog(actionField.actionParam);
        break;
      case ActionMasterEnum.SEND:
        handlePtpSubmit();
        break;
      case ActionMasterEnum.SHARE_LEAD:
        showPartnerDialog(actionField.actionParam);
        break;
      case ActionMasterEnum.MOBILE_KEYPAD:
        updateMobileNumber(actionField);
        break;
      case ActionMasterEnum.START_AUDIO:
        startAudioRecording();
        break;
      case ActionMasterEnum.STOP_AUDIO:
        stopAudioRecording();
        break;
      case ActionMasterEnum.SHARE_AUDIO:
        record && stopAudioRecording();
        shareAudioRecording();
        break;
      case ActionMasterEnum.SHARE_VIDEO:
        shareVideo(actionField);
        break;
      case ActionMasterEnum.CLICK_IMAGES:
        // TODO - VISHAL add clicked images logic
        setShowImageModal(true);
        break;
      case ActionMasterEnum.VIEW_IMAGES:
        // TODO - VISHAL add logic to view clicked images
        break;
      default:
        break;
    }
  };

  const shareVideo = (actionField: ActionFieldMapping) => {
    actionField.actionParam?.forEach((param) => {
      if (param?.value) {
        ToastUtils.success(param.name + " Video Shared");
      }
    });
  };

  const startAudioRecording = () => {
    if (record) {
      ToastUtils.warn("Audio Recording Already started");
      return;
    }

    setRecord(true);
    ToastUtils.success("Audio Recording Started");
  };

  const stopAudioRecording = () => {
    ToastUtils.success("Audio Recording Stopped");
    setRecord(false);
  };

  const shareAudioRecording = () => {
    record && ToastUtils.success("Audio Recording will be shared");
    setRecord(false);
  };

  const getActionField = (x: number, y: number): ActionFieldMapping | null => {
    const actionFieldMapping = rxPageInfoRef.current?.actionFieldMapping;
    if (!actionFieldMapping) {
      return null;
    }

    const actionField = actionFieldMapping.find((a) => {
      let numberArray = JSON.parse(a.vectorCoordinate) as number[];
      numberArray = numberArray.map((i) => i * 0.1578);
      return isPointInsideBox(x, y, numberArray);
    });

    return actionField || null;
  };

  // const checkInsideAnyActionField = (x: number, y: number) => {
  //   rxPageInfoRef.current?.actionFieldMap?.forEach((value, box) => {
  //     if (
  //       value.actionMaster &&
  //       isPointInsideBox(x, y, box) &&
  //       value.actionMaster === ActionMasterEnum.PLAY_VIDEO
  //     ) {
  //       console.log("opening ActionMasterEnum.PLAY_VIDEO");
  //       openVideoDialog(value.actionParam);
  //     } else {
  //       console.log("Closing ActionMasterEnum.PLAY_VIDEO");
  //       closeVideoDialog();
  //     }

  //     if (
  //       value.actionMaster &&
  //       isPointInsideBox(x, y, box) &&
  //       value.actionMaster === ActionMasterEnum.SEND
  //     ) {
  //       handlePtpSubmit();
  //     }

  //     if (
  //       value.actionMaster &&
  //       isPointInsideBox(x, y, box) &&
  //       value.actionMaster === ActionMasterEnum.SHARE_LEAD
  //     ) {
  //       showPartnerDialog(value.actionParam);
  //     } else {
  //       closePartnerDialog();
  //     }

  //     if (
  //       value.actionMaster &&
  //       isPointInsideBox(x, y, box) &&
  //       value.actionMaster === ActionMasterEnum.MOBILE_KEYPAD
  //     ) {
  //       updateMobileNumber(value);
  //     } else {
  //       closeMobileNumberDialog();
  //     }
  //   });
  // };

  // const checkInsideAnyActionField = (x: number, y: number) => {
  //   rxPageInfoRef.current?.actionFieldMap?.forEach((value, box) => {
  //     if (value.actionMaster && isPointInsideBox(x, y, box)) {
  //       if (value.actionMaster === ActionMasterEnum.PLAY_VIDEO) {
  //         openVideoDialog(value.actionParam);
  //       } else if (value.actionMaster === ActionMasterEnum.SEND) {
  //         handlePtpSubmit();
  //       } else if (value.actionMaster === ActionMasterEnum.SHARE_LEAD) {
  //         showPartnerDialog(value.actionParam);
  //       } else if (value.actionMaster === ActionMasterEnum.MOBILE_KEYPAD) {
  //         toast.success("Number " + value.fieldName);
  //       } else {
  //         toast.success("Action Field --- " + value.actionMaster);
  //       }
  //     }
  //   });
  // };

  const updateMobileNumber = (actionField: ActionFieldMapping) => {
    !mobileNumberDialog && setMobileDialog(true);

    const fieldName = actionField.fieldName;
    if (fieldName === "num_delete") {
      mobileNumberRef.current = mobileNumberRef.current.slice(0, -1);
    } else {
      if (mobileNumberRef.current.length === 10) {
        return;
      }
      console.log(
        "fieldName",
        numberActionFieldMap.get(fieldName),
        mobileNumberRef.current,
        mobileNumberInputRef.current?.value
      );

      mobileNumberRef.current = mobileNumberRef.current.concat(
        numberActionFieldMap.get(fieldName) + ""
      );
      console.log("mobnile number ---", mobileNumberRef.current);
    }

    if (mobileNumberInputRef.current) {
      mobileNumberInputRef.current.value = mobileNumberRef.current;
    }
  };

  const showPartnerDialog = (actionParamList: ActionParam[] | undefined) => {
    actionParamList?.forEach((actionParam) => {
      if (actionParam?.value) {
        openPartnerDialog(actionParam.value?.serverId);
      }
    });
  };

  const openPartnerDialog = (partnerTypeId: number) => {
    partnerTypeRef.current = partnerTypeId;
    setPartnerDialog(true);
  };

  const openVideoDialog = (
    actionParamList: ActionParam[] | undefined | null
  ) => {
    actionParamList?.forEach((actionParam) => {
      if (actionParam?.value) {
        !showVideoDialog && playVideo(actionParam?.value?.serverId);
      }
    });
  };

  const playVideo = (mediaId: number) => {
    videoMediaIdRef.current = mediaId;

    setVideoDialog(true);
  };

  function draw(x: number, y: number, page: number, book: number): void {
    const context = contextRef.current;

    if (!context) {
      return;
    }

    const scale = scaleRef.current;
    const drawingX = x * scale.dx;
    const drawingY = y * scale.dy;
    context.lineTo(drawingX, drawingY);
    // contextRef.current.lineTo(x, y);
    context.stroke();
    contextRef.current = context;
  }

  const closeMobileNumberDialog = () => {
    setMobileDialog(false);
  };

  const closePartnerDialog = () => {
    setPartnerDialog(false);
  };

  var onPenUpHandler = (x: number, y: number) => {
    if (currentStroke.current) {
      currentStroke.current.coordinates.push({
        x,
        y,
        _time: new Date().getTime(),
      });
      strokeDataRef.current.push(currentStroke.current);
      currentStroke.current = null;
    }

    const context = contextRef.current;
    if (!context) {
      return;
    }

    const scale = scaleRef.current;
    const drawingX = x * scale.dx;
    const drawingY = y * scale.dy;

    context.closePath();
    contextRef.current = context;

    scrollTo(drawingY);

    checkInsideAnyActionField(drawingX, drawingY);
  };

  const scrollTo = (yPosition: number) => {
    const scrollToPosi = yPosition - 500;
    scrollDivRef.current?.scrollTo({
      behavior: "instant",
      top: scrollToPosi,
    });
    currentScrollPosition.current = scrollToPosi;
  };

  var onListedHandler = function () {
    console.log(" --- onListedHandler");
    setIsConnected(null);
  };

  var onConnectingHandler = function () {
    console.log(" --- onConnectingHandler");
    setIsConnected(null);
  };

  var onConnectedHandler = function (dev: BluetoothDevice) {
    console.log(" --- onConnectedHandler");
    console.log("device -- ", dev);
    setIsConnected(true);

    toast.success("Pen connected");
    // CookieUtils.setLastPen(dev);
  };

  var onDisconnectedHandler = function () {
    console.log(" --- onDisconnectedHandler");
    setIsConnected(false);
    setPenBattery(null);
    toast.warn("Pen Disconnected");
  };

  const handlePtpSubmit = () => {
    hidePTPDialog();
    toast.success("Prescription Submitted");
  };

  const hidePTPDialog = () => {
    currentPage.current = undefined;
    setShowPTPModal(false);
  };

  const showPTPDialog = () => {
    setShowPTPModal(true);
  };

  const onPenBatteryChange = (penBattery: number) => {
    if (penBattery > 100) {
      setPenBattery("charging");
    } else {
      setPenBattery(penBattery);
    }
  };

  useEffect(() => {
    const pen = new Smartpen({
      // onDocChanged: onPageChangedHandler,
      onPenDown: onPenDownHandler,
      onPenMove: onPenMoveHandler,
      onPenUp: onPenUpHandler,
      onDeviceListed: onListedHandler,
      onConnecting: onConnectingHandler,
      onConnected: onConnectedHandler,
      onDisconnected: onDisconnectedHandler,
      onPenBattery: onPenBatteryChange,
    });

    setPenClass(pen);
  }, []);

  return (
    <>
      {/* <div> */}
      <div className="col d-flex align-items-center justify-content-center">
        <button
          type="button"
          style={{ backgroundColor: isConnected ? "#90EE90" : "#D3D3D3" }}
          className="btn position-relative"
          onClick={handleButtonClick}
        >
          <PenSVG />
          {penBattery !== null && (
            <span className="position-absolute top-100 start-50 translate-middle badge bg-purple btn-outline-primary">
              {penBattery}
            </span>
          )}
        </button>
      </div>
      {/* </div> */}
      {showPTPModal && (
        <PTPCanvasDialog
          show={showPTPModal}
          record={record}
          handlePtpSubmit={handlePtpSubmit}
          canvasRef={canvasRef}
          audio={audio}
          audioChunksRef={audioChunksRef}
          setAudio={setAudio}
          setRecord={setRecord}
          mediaRecorderRef={mediaRecorderRef}
          showVideoDialog={showVideoDialog}
          setVideoDialog={setVideoDialog}
          videoMediaId={videoMediaIdRef.current!}
          modalRef={scrollDivRef}
          onPageChange={onPageChangedHandler}
          currentPage={currentPage}
        />
      )}

      {partnerDialog && (
        <PartnersDialog
          partnerTypeId={partnerTypeRef.current!}
          show={partnerDialog}
          setShow={setPartnerDialog}
        />
      )}

      {mobileNumberDialog && (
        <MobileNumberDialog
          show={mobileNumberDialog}
          setShow={setMobileDialog}
          inputRef={mobileNumberInputRef}
          mobileNumberRef={mobileNumberRef}
        />
      )}

      {showHistoryDialog && (
        <HistoryDialog
          show={showHistoryDialog}
          setShow={setShowHistoryDialog}
          mobileNumberRef={mobileNumberRef}
        />
      )}
      {showImageModal && (
        <ClickImagesModal
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
        />
      )}
    </>
  );
}

export default BluetoothButton;
