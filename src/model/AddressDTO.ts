import { StateCountryDTO } from "./StateCountryDTO";

export interface AddressDTO {
  serverId?: string;
  isDefault?: boolean;
  active: boolean;
  line1: string;
  line2: string;
  landmark: string;
  city: string;
  cityId: number;
  pincode: string;
  lat?: number;
  lng?: number;
  stateCountry?: StateCountryDTO;
  area: string;
  subArea: string;
}
