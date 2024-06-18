import { FC, useEffect, useState } from "react";
interface NetworkInformation {
  readonly downlink: number;
  readonly uplink: number;
}

const InternetSpeed: FC = () => {
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);

  useEffect(() => {
    // Check if the browser supports the Navigator API
    if ("connection" in navigator) {
      const connection = navigator.connection as NetworkInformation;
      const downloadSpeedMbps = connection.downlink; // Download speed in Mbps
      const uploadSpeedMbps = connection.uplink; // Upload speed in Mbps

      // Set the internet speeds
      setDownloadSpeed(downloadSpeedMbps);
      setUploadSpeed(uploadSpeedMbps);
    } else {
      console.error("Navigator API not supported");
    }
  }, []);

  return (
    <div>
      <p className="fw-bolder">Internet Speed</p>
      <p>
        Download Speed:{" "}
        {downloadSpeed
          ? `${downloadSpeed} Mbps`
          : "download speed is not available"}
      </p>
      <p>
        Upload Speed:{" "}
        {uploadSpeed ? `${uploadSpeed} Mbps` : "Upload speed not available"}
      </p>
    </div>
  );
};

export default InternetSpeed;
