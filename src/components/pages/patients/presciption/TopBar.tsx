import { FC } from "react";
import familyImage from "../../../../assets/familyPatients.png";
import RightArrowButton from "../../../../utils/buttons/RightArrowButton";

const TopBar: FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="row">
            <div className="col">
              <div className="row rounded rounded-4 bg-purple ">
                <div className="d-flex align-items-baseline  justify-content-between">
                  <div>
                    <img src={familyImage} alt="family image" />
                  </div>
                  <div className=" d-flex text-white rounded-pill align-items-baseline justify-content-center">
                    <p>View family members </p>
                    <RightArrowButton
                      fillColor="#FFFFFF"
                      styleWidth="1em"
                      styleBackground="#6C5DD3"
                    />
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

export default TopBar;
