import PatientDataCard from "./PatientDataCard";
// this component will render the patient cards
const PatientDataPaginate = (patient: any) => {
  return (
    <>
      <div>
        {patient.map((patient: any) => (
          <PatientDataCard key={patient.id} patient={patient} />
        ))}
      </div>
    </>
  );
};

export default PatientDataPaginate;
