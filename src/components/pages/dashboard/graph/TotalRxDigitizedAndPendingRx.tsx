import { FC, useState } from "react";
import ShowGraphModal from "./ShowGraphModal";
import TotalRxDigitizedView from "./TotalRxDigitizedView";
const TotalRxDigitized: FC = () => {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <>
      <div className="container-fluid g-md-0 text-purple">
        <div className="shadow rounded-3 p-2">
          <div className="row">
            <div className="col d-flex justify-content-end">
              <button
                className="btn btn-hover border-palepurple"
                onClick={() => {
                  setShowGraph(!showGraph);
                }}
              >
                view
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <TotalRxDigitizedView />
            </div>
          </div>
        </div>
      </div>
      <ShowGraphModal
        showGraph={showGraph}
        setShow={setShowGraph}
        childComponent={<TotalRxDigitizedView />}
      ></ShowGraphModal>
    </>
  );
};

export default TotalRxDigitized;
