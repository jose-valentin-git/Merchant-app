import { FC } from "react";

const ReferAFriend: FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="row ">
            <div className="col">
              <h2 className="text-purple">Refer A Friend</h2>
            </div>
          </div>
          <div className="continer-fuild justify-content-center">
            <div className="row m-2">
              <div className="row">
                <div className="shadow-lg rounded rounded-3 p-3  d-flex flex-column align-items-center ">
                  <div className="row ">
                    <h4 className="text-purple">
                      Refer "6" doctors and earn either of the below mentioned
                      benefits
                    </h4>
                  </div>
                  <div className="row  mt-4 rounded-3 p-3 bg-palepurple">
                    <div className="col  border-end border-dark d-flex align-items-center justify-content-center">
                      <div className="rounded-3 d-flex align-items-center justify-content-center">
                        <div
                          className="d-flex justify-content-center align-items-center bg-purple rounded-circle p-2"
                          style={{
                            width: "1vmin",
                            height: "1vmin",
                            minWidth: "50px",
                            minHeight: "50px",
                          }}
                        >
                          <span className="text-white fs-2 ">1</span>
                        </div>
                        <div className="ms-4 ">
                          <p className="text-purple fw-bolder">
                            Free WondRx Yearly subscription
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col ms-4 d-flex align-items-center justify-content-center">
                      <div className="rounded-3 d-flex align-items-center justify-content-center ">
                        <div
                          className="d-flex justify-content-center align-items-center bg-purple rounded-circle p-2"
                          style={{
                            width: "1vmin",
                            height: "1vmin",
                            minWidth: "50px",
                            minHeight: "50px",
                          }}
                        >
                          <span className="text-white fs-2">2</span>
                        </div>
                        <div className="ms-4 text-purple fw-bolder ">
                          <p>Get 3000 Rx papers free</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <p>
                      **TnC : Doctors should be newly onboarded onto WondRx
                      platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferAFriend;
