import { AddAssociateDTO } from "../model/AddAssociateDTO";
import { AssociateDTO } from "../model/AssociateDTO";
import { getAPIClient } from "./ApiClient";
import { API_ENDPOINT } from "./ApiEndPoints";
// This method will get All the associates , to display in associate list
const getAssociateDetails = (doctorId: string): Promise<AssociateDTO[]> => {
  return new Promise<AssociateDTO[]>((resolve, reject) => {
    if (!doctorId) return;
    console.log(`Hiting API ${API_ENDPOINT.associateDetails}`);
    getAPIClient()
      .get<AssociateDTO[]>(`${API_ENDPOINT.associateDetails}`, {
        params: {
          doctorId: doctorId,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will add a new associate
const postAssociateDetails = (
  associateDTO: AddAssociateDTO
): Promise<AddAssociateDTO> => {
  return new Promise<AddAssociateDTO>((resolve, reject) => {
    if (!associateDTO) return;
    console.log(`Hiting API ${API_ENDPOINT.addNewAssociate}`);
    getAPIClient()
      .post<AddAssociateDTO>(`${API_ENDPOINT.addNewAssociate}`, associateDTO)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};

// This method will De-activate the active associate
const deactivateAssociate = (
  associateServerId: string
): Promise<AssociateDTO> => {
  return new Promise<AssociateDTO>((resolve, reject) => {
    if (!associateServerId) return;
    console.log(`Hiting API ${API_ENDPOINT.deLinkAssociate}`);
    getAPIClient()
      .post<AssociateDTO>(`${API_ENDPOINT.deLinkAssociate}`, {
        serverId: associateServerId,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });
};
export { getAssociateDetails, postAssociateDetails, deactivateAssociate };
