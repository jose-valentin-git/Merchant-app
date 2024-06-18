import { FC } from "react";

const StatusIndicator: FC = () => {
  return (
    <div
      className="bg-lightgreen rounded-2 p-3 text-center"
      style={{ maxWidth: "10rem" }}
    >
      Pending
    </div>
  );
};

export default StatusIndicator;
