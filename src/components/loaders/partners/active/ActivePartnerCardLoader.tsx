import { Accordion } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ActivePartnerCardLoader = () => {
  return (
    <div className="container-fluid">
      <div className="rounded-3 border">
        <div className="row p-3">
          <div className="col-2 d-flex flex-column align-items-center  border-left border-end me-2">
            <div className="row">
              <div className="d-flex">
                <Skeleton width={100} height={100} />
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-2 fw-bolder">
              <Skeleton width={200} height={20} />
            </div>
          </div>
          <div className="col">
            <div className="row border-bottom mb-2">
              <div className="col">
                <div className="text-center">
                  <Skeleton width={100} height={20} />
                </div>
                <div className="fw-bolder text-center">
                  <Skeleton width={200} height={20} />
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <Skeleton width={100} height={20} />
                </div>
                <div className="fw-bolder text-center">
                  <Skeleton width={200} height={20} />
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <Skeleton width={100} height={20} />
                </div>
                <div className="fw-bolder text-center">
                  <Skeleton width={200} height={20} />
                </div>
              </div>
              <div className="col">
                <div className="text-center">
                  <Skeleton width={100} height={20} />
                </div>
                <div className="fw-bolder text-center">
                  <Skeleton width={200} height={20} />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <Accordion>
                <Accordion.Item eventKey={"1"} className="border-0">
                  <Accordion.Header>
                    <div className="col-6">
                      <Skeleton width={200} height={20} />

                      <Skeleton width={200} height={20} />
                    </div>
                    <div className="row d-flex align-items-center">
                      <div className="col">
                        <div className="btn border border-0">
                          <Skeleton width={50} height={50} />
                        </div>
                      </div>
                      <div className="col">
                        <div className="btn border border-0">
                          <Skeleton width={50} height={50} />
                        </div>
                      </div>
                      <div className="col">
                        <div className="btn  text-white btn-hover">
                          <Skeleton width={150} height={50} />
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row">
                      <div className="col">
                        <div>
                          <Skeleton width={100} height={20} />
                        </div>
                        <div className="fw-bolder">
                          <Skeleton width={150} height={20} />
                        </div>
                      </div>
                      <div className="col">
                        <Skeleton width={100} height={20} />
                        <div className="fw-bolder">
                          <Skeleton width={150} height={20} />
                        </div>
                      </div>
                      <div className="col">
                        <Skeleton width={100} height={20} />
                        <div className="fw-bolder">
                          <Skeleton width={150} height={20} />
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePartnerCardLoader;
