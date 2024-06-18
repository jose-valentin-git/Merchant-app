import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileImageLoader = () => {
  return (
    <div
      style={{
        width: "100%", // Set width to fill the circular boundary
        height: "100%", // Set height to fill the circular boundary
        objectFit: "cover", // Maintain aspect ratio and cover the container
        overflow: "hidden",
        borderRadius: "50%", // Ensure the container is circular
      }}
    >
      <Skeleton circle={true} width={100} height={100} />
    </div>
  );
};

export default ProfileImageLoader;
