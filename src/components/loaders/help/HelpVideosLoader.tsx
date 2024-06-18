import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HelpVideosLoader = () => {
  const items = Array.from({ length: 16 }, (_, index) => index);
  return (
    <div className="container-fluid mt-3">
      <div className="row w-100 row-cols-md-3  g-4">
        {items.map((index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow position-relative">
              <Skeleton width={398} height={250} />
              <div className="card-overlay">
                {/* Overlay for hiding content on hover */}
                <div className="card-body py-3">
                  {/* Reduce padding to make card body smaller */}
                  <h5 className="card-title">
                    <Skeleton width={300} height={20} />
                  </h5>
                  <p className="card-text">
                    <Skeleton width={50} height={20} />
                    {/* <Skeleton width={10} height={10} /> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpVideosLoader;
