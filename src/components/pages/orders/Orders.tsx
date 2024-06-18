import { FC, useState } from "react";

import OrdersGrid from "./OrdersGrid";
// import NewRxDesignCard from "./NewRxDesignCard";
interface OrdersProps {
  show?: boolean;
}
const Orders: FC<OrdersProps> = ({
  show = true /*remove this true later on */,
}) => {
  const [activeButton, setActiveButton] = useState<string>("history");

  if (show)
    return (
      <>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="row text-purple">
              <div className="col-2">
                <h2>Orders</h2>
              </div>
              <div className="col-xxl-4 col-md-6 d-flex justify-content-start align-items-baseline ">
                <div className="col">
                  <button
                    className={`${
                      activeButton === "history" ? "bg-purple text-light" : ""
                    } btn text-purple border-purple btn-hover border text-center rounded-3`}
                    onClick={() => {
                      setActiveButton("history");
                    }}
                  >
                    History
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <OrdersGrid />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Orders;
