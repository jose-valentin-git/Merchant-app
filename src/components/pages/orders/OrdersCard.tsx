import { FC, useState } from "react";
import StatusIndicator from "./ordersUtil/StatusIndicator";
import Accordion from "react-bootstrap/Accordion";
const OrdersCard: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row my-2">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="col  d-flex align-items-start flex-column justify-content-center">
                  <p className="fw-bolder text-purple">New Rx Design</p>
                  <div
                    className="text-decoration-underline text-primary"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    123456
                  </div>
                </div>
                <div className="fw-bolder text-purple col d-flex align-items-start flex-column justify-content-center">
                  1
                </div>
                <div className="fw-bolder text-purple col d-flex align-items-start flex-column justify-content-center">
                  ₹ 300
                </div>
                <div className="col d-flex flex-column justify-content-center border-primary">
                  <div className="row">
                    <div className="col">
                      <StatusIndicator />
                    </div>
                  </div>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                  <div className="row  align-items-center">
                    <div className="col-8">
                      <StatusIndicator />
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>Orders related data here</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {/* <ViewPrescription show={show} setShow={setShow} /> */}
      </div>
    </>
  );
};

export default OrdersCard;
