import { FC } from "react";
import ExitingNewsSVG from "../../../assets/ExitingNewsSVG";

const WhatsNewInfoCard: FC = () => {
  return (
    <>
      <div className="col rounded-3 bg-palepurple p-2 overflow-hidden g-0">
        <div className="row">
          <div className="d-flex position-relative align-items-center justify-content-around bg-palepurple">
            <svg
              width={751}
              height={240}
              viewBox="0 0 751 240"
              fill="none"
              className="position-absolute top-0 start-0 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M395.597 201.813C644.894 249.378 736.406 314.945 751 341.782C737.265 350.04 707.218 366.556 696.917 366.556C684.04 366.556 493.462 383.897 434.228 388.852C374.994 393.807 266.828 400 235.923 400C211.199 400 24.7415 377.704 -65.3969 366.556L-86 287.281V85.3776L-75.6985 -10H-6.16309C23.8831 40.7855 146.3 154.248 395.597 201.813Z"
                fill="#6C5DD3"
              />
            </svg>
            <div className="top-0 start-0 z-1">
              <ExitingNewsSVG />
            </div>
            <div className="d-flex align-items-center text-purple">
              <h3>We are coming with exciting features very soon!</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNewInfoCard;
