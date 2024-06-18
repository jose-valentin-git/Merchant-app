import { FC } from "react";
interface PartnerTypesProps {
  partnerType?: [];
}
const PartnerTypes: FC<PartnerTypesProps> = ({ partnerType }) => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <select
          className="border-0 p-2 rounded-2"
          name=""
          id=""
          style={{ backgroundColor: "#6C5DD3" }}
        >
          {partnerType?.map((value, index) => {
            return (
              <option
                style={{ backgroundColor: "white" }}
                value="doctor type"
                key={index}
              >
                {value || "---------"}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default PartnerTypes;
