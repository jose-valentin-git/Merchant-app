import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { PartnerDistributionTypeEnum } from "../../model/PartnerDistributionTypeEnum";
import { useGetPartnerList } from "../../hooks/usePartnerHelper";
import ToastUtils from "../../utils/ToastUtils";
import PartnerCard from "./partners/PartnerCard";

const PartnersDialog: React.FC<{
  partnerTypeId: number;
  show: boolean;
  setShow: (param: boolean) => void;
}> = ({ show, setShow, partnerTypeId }) => {
  const { data, error, isError, isFetching, isLoading } =
    useGetPartnerList(partnerTypeId);

  console.log("partneres data", data);
  useEffect(() => {
    if (!show || isLoading || isFetching) return;

    if (isError) {
      ToastUtils.success(error.message);
      setShow(false);
      return;
    }

    if (!data || data.length === 0) {
      ToastUtils.warn("No Partners Mapped here");
      setShow(false);
      return;
    }

    if (
      data.find(
        (value) =>
          value.distributionType === PartnerDistributionTypeEnum.EQUAL ||
          value.distributionType === PartnerDistributionTypeEnum.PERCENTAGE
      ) ||
      data.length === 1
    ) {
      ToastUtils.success("Action Done");
      setShow(false);
      return;
    }

    setShow(true);
  }, [data]);

  return (
    <>
      {data && data.length > 0 && (
        <Modal
          onHide={() => setShow(false)}
          show={show}
          className="fade"
          centered
          size={"lg"}
        >
          <Modal.Header closeButton>
            <Modal.Title key={data && data[0].partnerType}>
              {data && data[0].partnerType}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {data?.map((partner, index) => (
              <div key={index}>{partner.partnerName}</div>
            ))} */}
            <div className="h-100">
              <div>
                {data?.map((partner, index) => (
                  <PartnerCard partner={partner} key={index} />
                ))}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default PartnersDialog;
