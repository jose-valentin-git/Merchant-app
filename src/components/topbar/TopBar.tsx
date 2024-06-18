import TopBarButtons from "./topBarButtons/TopBarButtons";
import SearchInput from "./searchbar/SearchInput";
import { FC } from "react";
import doctorProfileStore from "../../middleware/doctorProfileStore";
interface TopBarFc {
  isOpen: boolean;
}
const TopBar: FC<TopBarFc> = ({ isOpen }) => {
  const { doctorData } = doctorProfileStore();
  return (
    <div className="container-fluid mt-2">
      <div className="row d-flex justify-content-between align-items-center">
        <div className={`${isOpen ? "col-3" : "col-4"} g-0`}>
          <SearchInput />
        </div>
        <div className="col  text-center text-purple">
          <div className="fs-1 text-gray">
            Welcome Dr {doctorData?.lastName || "________"}
          </div>
        </div>
        <div className="col w-75">
          <TopBarButtons />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
