import { FC } from "react";
import useHelpVideosData from "../../../hooks/useHelpVideosDataHelper";
import "../../../App.css";
import HelpVideosLoader from "../../loaders/help/HelpVideosLoader";

const HelpVideos: FC = () => {
  const { data, isLoading } = useHelpVideosData();

  if (isLoading) {
    return (
      <>
        <HelpVideosLoader />;
      </>
    );
  }

  return (
    <div className="container-fluid mt-3 ">
      <div className="row w-100 row-cols-md-3  g-4">
        {isLoading && <HelpVideosLoader />}
        {data?.map((video, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow position-relative">
              <iframe
                className="card-img-top"
                src={`https://www.youtube.com/embed/${video?.youtubeRefId}`}
                title={video.title}
                height={"250vh"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="card-overlay">
                {/* Overlay for hiding content on hover */}
                <div className="card-body py-3">
                  {/* Reduce padding to make card body smaller */}
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">
                    Duration: {video.duration} | Category: {video.category}
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

export default HelpVideos;
