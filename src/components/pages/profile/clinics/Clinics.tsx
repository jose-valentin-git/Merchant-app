import { FC, useState } from "react";
import AddClinicSVG from "../../../../assets/AddClinicSVG";
import AddClinic from "./AddClinic";
import ClinicCard from "./ClinicCard";
import {
  useAddNewClinic,
  useClinicDetails,
} from "../../../../hooks/useClinicDataHelper";
import ToastUtils from "../../../../utils/ToastUtils";
import { AxiosError } from "axios";
import { ClinicDTO } from "../../../../model/ClinicDTO";
import ClinicCardLoader from "../../../loaders/profile/clinics/ClinicCardLoader";
interface ClinicsPops {
  showAddClinic?: boolean;
}
const Clinics: FC<ClinicsPops> = ({ showAddClinic }) => {
  const [show, setshow] = useState(false);
  const { data, refetch, isLoading } = useClinicDetails();

  const handleFormCancel = () => {
    setshow(!show);
  };
  const handleSave = async (clinicData: ClinicDTO) => {
    try {
      await useAddNewClinic(clinicData);
      refetch();
      ToastUtils.success("Clinic Added Succeccfully");
    } catch (e) {
      const err = e as AxiosError;
      ToastUtils.error(err.message);
    }
    setshow(false);
  };

  // This method will check there should be atleast one clinic should be present
  const checkNumberOfClinics = (): boolean => {
    if (data!.length === 1) {
      return false;
    } else if (data!.length > 2) {
      return true;
    }
    return true;
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col g-0">
            {showAddClinic && (
              <div className="row g-0 mt-3">
                <button
                  className="border-0 rounded-1 p-2 bg-purple text-white d-flex align-items-center justify-content-center"
                  onClick={() => {
                    setshow(true);
                  }}
                >
                  <AddClinicSVG />
                  <div className="ms-3">Add clinic</div>
                </button>
              </div>
            )}
            {show && (
              <div className="row">
                <div className="col">
                  <AddClinic
                    refetch={refetch}
                    onSave={handleSave}
                    updateOrAdd={{ title: "Add New Clinic" }}
                    onCancelForm={handleFormCancel}
                  />
                </div>
              </div>
            )}
            <div id="map" className="row ps-2 pe-2">
              {isLoading ? (
                <>
                  <ClinicCardLoader />
                  <ClinicCardLoader />
                  <ClinicCardLoader />
                  <ClinicCardLoader />
                  <ClinicCardLoader />
                </>
              ) : (
                <>
                  {data?.map((dto, index) => (
                    <ClinicCard
                      checkClinic={checkNumberOfClinics}
                      key={index}
                      clinicDataCard={dto}
                      refetch={refetch}
                      isLoading={isLoading}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clinics;
