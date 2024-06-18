export const API_ENDPOINT = Object.freeze({
  downloadMedia: "/api/mediapath",

  partnersByPartnerTypeId: "/api/doctor-app-website/partner-details",

  patientData: "/api/doctor-app-website/patient-details",
  familyTreeDetails: "/api/doctor-app-website/patient-family-tree",

  sendOTP: "/api/login/otp/init",
  verifyOTP: "/oauth/token",

  dashboard: "/api/dashboard-details",
  dashboardCustomDate: "api/dashboard-details-custom",
  //Doctor
  // below API ENDPOINT is used to
  //  1. get doctors details in profile
  //  2. update doctors details in profile when edited
  doctorDetails: "/api/doctors",
  removeProfilePicture: "api/remove-doctor-profile",
  uploadProfilePicture: "api/add-profile-picture",

  //Associate
  associateDetails: "api/doctor-app-website/mapped-associates",
  addNewAssociate: "api/create-doctor-associate-rel",
  deLinkAssociate: "api/delink-associate",

  //Clinic
  clinicList: "api/doctor-app-website/clinic-list",
  deleteClinic: "api/delete-clinic",
  clinicBasedOnLocation: "/api/doctor-app-website/clinic-based-on-location",
  editClinicDetails: "api/clinics",
  addNewClinic: "api/clinics",
  markAsCurrent: "api/update-clinic",
  clinicDetails: "api/clinic",

  //Presciption
  dayWisePrescription: "api/doctor-app-website/prescriptions-day-wise",
  reSharePrescription: "api/doctor-app-website/re-send-sms",

  //Prescription Related data , audi, video, images
  prescriptionMedia: "api/doctor-app-website/prescription-details",

  //Help
  helpVideos: "api/helpVideos/doctorapp",

  partnerDetails: "api/refer-partner/summary",

  loginDetails: "api/doctor-app-website-login",

  partnersType: "api/partner-public-details",
  inviteAPartner: "api/invite-partner",

  removeInvitedPartner: "api/remove-partner",
  deactivateActivePartners: "api/de-link-partner",
  reactivateInactivePartner: "api/re-link-partner",

  rxTemplate: "/api/doctor-app-website/rx-template",
});
