import "./App.css";

import { Route, Routes } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import ValidateOTP from "./components/validateotp/ValidateOTP";
import SideNavbar from "./components/sidenavbar/SideNavbar";
import Patients from "./components/pages/patients/Patients";
import Orders from "./components/pages/orders/Orders";
import Partners from "./components/pages/partners/Partners";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import InvitePartner from "./components/pages/partners/invite/InvitePartner";
import Help from "./components/pages/help/Help";
import ContactUs from "./components/pages/help/ContactUs";
import HelpVideos from "./components/pages/help/HelpVideos";
import FAQs from "./components/pages/help/FAQs";
import ReferAFriend from "./components/pages/referafriend/ReferAFriend";
import { ToastContainer } from "react-toastify";
import FamilyPrescription from "./components/pages/patients/presciption/FamilyPrescription";
import DashBoard from "./components/pages/dashboard/DashBoard";
import DashboardText from "./components/pages/dashboard/text/DashboardText";
import DashboardGraph from "./components/pages/dashboard/graph/DashboardGraph";
import WhatsNew from "./components/pages/whatsnew/WhatsNew";
import Profile from "./components/pages/profile/Profile";
import Personal from "./components/pages/profile/personal/Personal";
import Clinics from "./components/pages/profile/clinics/Clinics";
import Associate from "./components/pages/profile/associate/Associate";
import AddClinic from "./components/pages/profile/clinics/AddClinic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ROUTES from "./components/routes";
import ActivePartner from "./components/pages/partners/active/ActivePartner";
import PartnersInvited from "./components/pages/partners/invited/PartnersInvited";
import InactivePartners from "./components/pages/partners/inactive/InactivePartners";
import RxSumbittedBody from "./components/pages/rx/RxSumbittedBody";
import HelpVideosLoader from "./components/loaders/help/HelpVideosLoader";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchInterval: false } },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={ROUTES.login} element={<LogIn />} />
          <Route path={ROUTES.otp} element={<ValidateOTP />} />
          <Route element={<SideNavbar />}>
            <Route path={ROUTES.dashboard} element={<DashBoard />}>
              <Route index element={<DashboardText />} />
              <Route path="text" element={<DashboardText />} />
              <Route path="graph" element={<DashboardGraph />} />
            </Route>
            <Route path={ROUTES.patients} element={<Patients />} />
            <Route
              index
              path={ROUTES.familyPrescription}
              element={<FamilyPrescription />}
            />
            {/* <Route path="patients/:id" element={<PatientPrescription />} />
            <Route path="prescription" element={<PatientPrescription />} /> */}
            <Route path="/orders" element={<Orders />} />
            <Route path={ROUTES.partners} element={<Partners />}>
              <Route index element={<PartnersInvited />} />
              <Route path="active" element={<ActivePartner />} />
              <Route path="inactive" element={<InactivePartners />} />
              <Route path="invite" element={<InvitePartner />} />
              <Route path="invited" element={<PartnersInvited />} />
            </Route>
            <Route path="/whatsNew" element={<WhatsNew />} />
            <Route path="help" element={<Help />}>
              <Route index element={<ContactUs />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="helpVideos" element={<HelpVideos />} />
              <Route path="faqs" element={<FAQs />} />
            </Route>
            <Route path="/referAFriend" element={<ReferAFriend />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<Personal />} />
              <Route path="personal" element={<Personal />} />
              <Route path="clinics" element={<Clinics />}>
                <Route path="addClinic" element={<AddClinic />} />
              </Route>
              <Route path="associate" element={<Associate />} />
            </Route>
            <Route path="/rx" element={<RxSumbittedBody />} />
            <Route path="/loader" element={<HelpVideosLoader />} />
          </Route>
        </Routes>
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
