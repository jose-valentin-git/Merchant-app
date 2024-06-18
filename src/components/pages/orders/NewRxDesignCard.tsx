import { FC } from "react";
import Rafiki from "../../../assets/Rafiki";

const NewRxDesignCard: FC = () => {
  return (
    <>
      <div className="col shadow border border-1 rounded-2 p-4 d-flex align-items-center justify-content-around">
        <div>
          <Rafiki />
        </div>
        <div>
          <h1>New Rx Design</h1>
          <h1>Order From Order Now Section</h1>
        </div>
        <button className="btn p-3 border rounded-4 btn-primary">
          orders are here
        </button>
      </div>
    </>
  );
};

export default NewRxDesignCard;
