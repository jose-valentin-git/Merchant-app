import { FC } from "react";
import usePatientDataParamStore from "../../store/patientDataParamsStore";

const SearchInput: FC = () => {
  const { setSearchParams } = usePatientDataParamStore();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      setSearchParams(e.currentTarget.value);
    }
  };

  return (
    <>
      <div className="container">
        <div className="col g-0">
          <div role="search">
            <div
              className="search d-flex  align-items-center bg-light p-1 border border-1 rounded-3"
              style={{ height: "60px" }}
            >
              <span className="text-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVR4nO2USwrCQBBE397PSr2OxhsoXkXEhajJxtsoeg6NN/G71ZGBCgQhTjJBFLGgITDVXUNNdeBX0QIiIAauqh0QAs2ywwfAGTAZdQL6ZYbfNWgJtIGKqgOsdHYDej62JDcfvuCNxDkCjSICUermLqzFnRcR2KvJ2uJCIK59+Ny4qKmag1sT11qaG+cCAnUfgVhNNi0udH0sCtVko+jCRtxZEYGmlsgoilkYi3Pw2eq+lsgoioHepCpbkpvbmuCJnpYo61dx0HDjY1OChpZoq/he9T1P2WLKirgwehJZ/EW+yq4pb8LsXYn6HB6EGmSrW6n6egAAAABJRU5ErkJggg==" />
              </span>
              <input
                style={{ height: "50px", width: "40vw" }}
                className="border border-0 input-text-bg border-success"
                type="search"
                maxLength={10}
                placeholder="Search Patients"
                // value={params.searchParam || ""}
                onKeyDown={handleSubmit}
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
