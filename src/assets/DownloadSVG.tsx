const DownloadSVG = () => {
  return (
    <svg
      width={44}
      height={44}
      viewBox="0 0 24 24"
      id="download-5"
      data-name="Line Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon line-color bg-purple rounded rounded-2"
    >
      <polyline
        id="secondary"
        points="15 14 12 17 9 14"
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <line
        id="secondary-2"
        data-name="secondary"
        x1={12}
        y1={17}
        x2={12}
        y2={3}
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
      <path
        id="primary"
        d="M4,17v3a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V17"
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};

export default DownloadSVG;
