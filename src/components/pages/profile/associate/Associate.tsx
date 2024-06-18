import { FC, useState } from "react";
import AddClinicSVG from "../../../../assets/AddClinicSVG";
import AssociateCard from "./AssociateCard";
import AddAssociate from "./AddAssociate";
import { useAssociateDetails } from "../../../../hooks/useAssociateDataHelper";
import AssociateCardLoader from "../../../loaders/profile/associate/AssociateCardLoader";

const Associate: FC = () => {
  const [show, setshow] = useState(false);
  const { data, isLoading, refetch } = useAssociateDetails();
  if (isLoading) {
    return (
      <>
        <AssociateCardLoader />
        <AssociateCardLoader />
        <AssociateCardLoader />
        <AssociateCardLoader />
        <AssociateCardLoader />
      </>
    );
  }
  const handleOnCancelButton = () => {
    setshow(!show);
  };

  const refetchData = async () => {
    refetch();
  };

  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="col g-0">
          <div className="row g-0 mt-3 ">
            <button
              className="border-0 btn-hover rounded-1 p-2 bg-purple text-white d-flex  align-items-center justify-content-center "
              onClick={() => {
                setshow(true);
              }}
            >
              <AddClinicSVG />
              <div className="ms-3">Add Asscociate</div>
            </button>
          </div>
          <div className="row ">
            {show && (
              <div className="row">
                <AddAssociate
                  refetchOnAddingAssociate={refetchData}
                  onCancelButton={handleOnCancelButton}
                />
              </div>
            )}
            <div className="col">
              <div className="row">
                <div className="col d-flex ">Name</div>
                <div className="col d-flex ">Phone No</div>
                <div className="col d-flex ">Status</div>
              </div>
              <div className="row rounded">
                <div className="col">
                  {data?.map((associateData, index) => {
                    return (
                      <AssociateCard
                        refetch={refetchData}
                        associateDetails={associateData}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associate;
