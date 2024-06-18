import { FC } from "react";
import FromAndTillDateFilter from "../pagesutility/FromAndTillDateFilter";
import DropDownSelect from "../pagesutility/DropDownSelect";
import SubmittedRx from "./SubmittedRx";
import { useSubmittedRxDateFilterStore } from "../../../middleware/filterDateStore";

const RxSumbittedBody: FC = () => {
  const {} = useSubmittedRxDateFilterStore();
  return (
    <div className="container-fluid">
      <div className="row mt-3 ">
        <div className="col-3">
          <DropDownSelect store={useSubmittedRxDateFilterStore} />
        </div>
        <div className="col">
          <div className="me-2">
            <FromAndTillDateFilter store={useSubmittedRxDateFilterStore} />
          </div>
        </div>
      </div>
      <div className="row">
        <SubmittedRx />
      </div>
    </div>
  );
};

export default RxSumbittedBody;
