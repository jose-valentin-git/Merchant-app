import { FC } from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner: FC = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-5">
      <Spinner animation="border" variant="primary" role="status" />
    </div>
  );
};

export default LoadingSpinner;
