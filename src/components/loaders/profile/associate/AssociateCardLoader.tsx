import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const AssociateCardLoader = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row bg-palepurple p-2 rounded-3">
        <div className="col d-flex align-items-center justify-content-start">
          <Skeleton width={150} height={20} />
        </div>
        <div className="col d-flex align-items-center justify-content-start">
          <Skeleton width={150} height={20} />
        </div>
        <div className="col d-flex justify-content-center">
          <div>
            <Skeleton width={150} height={20} />
          </div>
          <div className="col d-flex align-items-center justify-content-end">
            <button className={`btn btn-hover  text-white `}>
              <Skeleton width={150} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateCardLoader;
