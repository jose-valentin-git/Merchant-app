import { FC } from "react";
import { Thumbnail } from "../patients/presciption/Thumbnail";
import DayWisePrescriptionListDTO from "../../../model/DayWisePrescriptionListDTO";

interface DateWisePrescriptionCardProps {
  data: DayWisePrescriptionListDTO;
}
const DateWisePrescriptionCard: FC<DateWisePrescriptionCardProps> = ({
  data,
}) => {
  return (
    <>
      <div className="cotainer-fluid">
        <div className="my-3 fw-bolder">{data?.date}</div>
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-4 g-2">
            {data?.prescriptionDTOList.map((prescriptionDTO, index) => (
              <div key={index} className="col">
                <Thumbnail prescription={prescriptionDTO} />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className=" border w-50 border-dashed"></div>
        </div>
      </div>
    </>
  );
};

export default DateWisePrescriptionCard;
