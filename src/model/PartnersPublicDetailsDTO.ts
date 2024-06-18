import { AdsDTO } from "./AdsDTO";
import { CityDTO } from "./CityDTO";
import { DoctorSpecialityDTO } from "./DoctorSpecialityDTO";
import { LanguageDTO } from "./LanguageDTO";
import { NormalImmuneVaccinationDTO } from "./NormalImmuneVaccinationDTO";
import { PartnerTypeDTO } from "./PartnerTypeDTO";
import { PatientPartnerTypeDTO } from "./PatientPartnerTypeDTO";
import { SpecialSituationVaccination } from "./SpecialSituationVaccinationDTO";

export interface PartnersPublicDetailsDTO {
  partnerTypeList: PartnerTypeDTO[];
  adsList: AdsDTO[];
  specialityList: DoctorSpecialityDTO[];
  cityList: CityDTO[];
  languageList: LanguageDTO[];
  patientPartnerType: PatientPartnerTypeDTO;
  placesApiKey: string;
  relationshipList: null;
  normalImmuneVaccinationList: NormalImmuneVaccinationDTO[];
  specialSituationVaccinationList: SpecialSituationVaccination[];
  audioSectionMediaData: null;
  charityEConsultationInfoDTOList: null;
  i18NLanguageList: null;
  i18NDTOList: null;
  medicineListDumpUrl: null;
  medicineDumpUrlList: null;
}
