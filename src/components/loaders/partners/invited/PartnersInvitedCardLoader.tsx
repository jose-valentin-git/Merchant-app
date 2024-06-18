import { Accordion } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PartnersInvitedCardLoader = () => {
  return (
    <div className="container-fluid">
      <div className="border rounded-3 mb-3">
        <div className="row p-3">
          <div className="col-2 d-flex flex-column align-items-center justify-content-center border-left">
            <div className="row">
              <div className="d-flex">
                <Skeleton width={100} height={100} />
              </div>
            </div>
            <div className="row d-flex align-items-center justify-content-center mt-2 fw-bolder">
              <Skeleton width={200} height={20} />
            </div>
          </div>
          <div className="col m-1">
            <Accordion>
              <Accordion.Item eventKey="0" className="border-0">
                <Accordion.Header>
                  {/* Entre code is here */}
                  <div className="col-2 d-flex justify-items-center">
                    <div className="d-flex align-items-start justify-content-center flex-column">
                      <Skeleton width={100} height={20} />
                      <h5>
                        <Skeleton width={150} height={20} />
                      </h5>
                    </div>
                  </div>
                  <div className="col d-flex justify-items-center">
                    <div className="d-flex align-items-start justify-content-center flex-column">
                      {/*  invited -> pending to be accepted
                  on boarded -> pending to be mapped */}
                      <Skeleton width={100} height={20} />

                      <h5>
                        <Skeleton width={150} height={20} />
                      </h5>
                    </div>
                  </div>
                  <div className="col d-flex align-items-center">
                    <div className="col">
                      <div className="row d-flex align-items-center">
                        <div className="col-2">
                          <div className="btn border border-0">
                            <Skeleton width={50} height={50} />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="btn border border-0">
                            <Skeleton width={50} height={50} />
                          </div>
                        </div>
                        <div className="col">
                          <div className="btn border border-0 ">
                            <Skeleton width={50} height={50} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {/* Email and othre things are here */}

                  <div className="row g-0">
                    <div>
                      <div className="d-flex align-items-center justify-content-around">
                        <Skeleton width={100} height={20} />
                        <Skeleton width={100} height={20} />
                      </div>
                      <div className="d-flex align-items-center justify-content-around">
                        <div className="fw-bolder">
                          <Skeleton width={200} height={20} />
                        </div>
                        <div className="fw-bolder">
                          <Skeleton width={200} height={20} />
                        </div>
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
  );
};

export default PartnersInvitedCardLoader;
