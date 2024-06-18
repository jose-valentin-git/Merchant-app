import { FC } from "react";
import DropDownSelect from "../pagesutility/DropDownSelect";
import { useFamilyPrescriptionDateFilterStore } from "../../../middleware/filterDateStore";
import FromAndTillDateFilter from "../pagesutility/FromAndTillDateFilter";

const PrescriptionFilter: FC = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="row d-flex align-items-baseline justify-content-center">
            <div className="col">
              <h2 className="text-purple">Patient’s Prescription </h2>
            </div>
            <div className="col">
              <FromAndTillDateFilter
                store={useFamilyPrescriptionDateFilterStore}
              />
            </div>
            <div className="col">
              <DropDownSelect store={useFamilyPrescriptionDateFilterStore} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionFilter;
