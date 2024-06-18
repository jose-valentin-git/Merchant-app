import { FC, useEffect } from "react";
import "../../../App.css";
import PatientGrid from "./PatientGrid";
import usePatientDataParamStore from "../../store/patientDataParamsStore";
import FromAndTillDateFilter from "../pagesutility/FromAndTillDateFilter";
import DropDownSelect from "../pagesutility/DropDownSelect";
import { usePatientsDateFilterStore } from "../../../middleware/filterDateStore";

const Patients: FC = () => {
  const { fromDate, tillDate } = usePatientsDateFilterStore();
  const { params, setProccessed, setStartAndEndDate } =
    usePatientDataParamStore();
  useEffect(() => {
    setStartAndEndDate(fromDate, tillDate);
    setProccessed(proccessed === undefined ? true : proccessed);
  }, [fromDate, tillDate]);
  const proccessed = params.proccessed;

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="row justify-content-between">
          <div className="col-auto fs-3 fw-bolder text-purple">Patients</div>
          <div className=" col d-flex justify-content-start align-items-baseline">
            <div className="col ">
              <button
                className={`${
                  proccessed ? "bg-purple text-light" : ""
                } btn text-purple border-purple btn-hover border text-center rounded-3`}
                onClick={() => {
                  setProccessed(true);
                }}
              >
                Processed
              </button>
            </div>
            <div className="col">
              <button
                className={`${
                  !proccessed && "bg-purple text-light"
                } btn text-purple border-purple btn-hover border text-center rounded-3`}
                onClick={() => {
                  setProccessed(false);
                }}
              >
                In Process
              </button>
            </div>
          </div>
          <div className="col  ">
            <FromAndTillDateFilter store={usePatientsDateFilterStore} />
          </div>
          <div className="col">
            <DropDownSelect store={usePatientsDateFilterStore} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PatientGrid showFamilyPrescription={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
