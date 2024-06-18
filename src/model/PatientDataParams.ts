// import Pagination from "../../../utils/Pagination";
export interface PatientDataParams {
  doctorId?: string;
  limit?: number | null;
  offset?: number | null;
  searchParam?: string | null;
  startDate?: string | null | undefined;
  endDate?: string | null | undefined;
  proccessed?: boolean;
}
