import { FC } from "react";
import WhatsNewInfoCard from "./WhatsNewInfoCard";
const WhatsNew: FC = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="row text-purple d-flex align-items-between ">
          <div className="col">
            <h2>What's New</h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <WhatsNewInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
