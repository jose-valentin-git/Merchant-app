import { FC } from "react";
import OrdersCard from "./OrdersCard";

const OrdersGrid: FC = () => {
  return (
    <>
      <div className="container-fluid mt-3 g-0 mb-2">
        <div className="shadow rounded-3 p-4">
          <div className="row">
            <div className="row border-bottom border-top p-4 mt-3">
              <div className="col fw-bolder text-start">Item</div>
              <div className="col fw-bolder text-start">Quantity</div>
              <div className="col fw-bolder text-start">TotalPrice</div>
              <div className="col fw-bolder text-start">PaymentStatus</div>
              <div className="col fw-bolder text-start">Delivery status</div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <div>
                  <OrdersCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersGrid;
