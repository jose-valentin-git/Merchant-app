import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TextAndGrapRadioButtons: FC = () => {
  const [selectedValue, setValue] = useState("text");
  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("/dashboard/graph")
      ? setValue("graph")
      : setValue("text");
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary-emphasis rounded-2 p-2 bg-gray">
          <div
            onClick={() => setValue("text")}
            className={`col form-check d-flex justify-content-center `}
          >
            <Link className="text-decoration-none text-black" to="text">
              <input
                className="form-check-input"
                type="radio"
                checked={selectedValue === "text"}
                onChange={() => setValue("text")}
              />
              <label
                className="text-center form-check-label"
                htmlFor="flexRadioDefault1"
              >
                Text
              </label>
            </Link>
          </div>
          <div
            onClick={() => setValue("graph")}
            className="col form-check d-flex justify-content-center"
          >
            <Link className="text-decoration-none text-black" to="graph">
              <input
                className="form-check-input"
                type="radio"
                checked={selectedValue === "graph"}
                onChange={() => setValue("graph")}
              />
              <label
                className="text-center form-check-label"
                htmlFor="flexRadioDefault2"
              >
                Graph
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextAndGrapRadioButtons;
