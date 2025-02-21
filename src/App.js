import React, { createContext, useContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarBuyer from "./components/NavbarBuyer";
import NavbarSeller from "./components/NavbarSeller";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import EditGig from "./pages/EditGigPage/EditGig";
import BuyersProjects from "./pages/BuyersHomepage/BuyersProjects";
import BuyersFreelancers from "./pages/BuyersHomepage/BuyersFreelancers";
import Description from "./pages/EditGigPage/Description";
import Messages from "./pages/MessagePage/Messages";
import Settings from "./pages/SettingsPage/Settings";
import AboutUs from "./pages/AboutUs.js/AboutUs";
import ContactUs from "./pages/ContactUs.js/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy.js/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions.js/TermsAndConditions";
import Maintenance from "./pages/Maintenance/Maintenance";
import BillingAndPayment from "./pages/Profile/BillingAndPayment";
import PricingPlan from "./pages/PricingPlan/PricingPlan";
import Gig from "./pages/GigPage/Gig";
import PaymentMethodFilling from "./pages/SettingsPage/PaymentMethodFilling";
import HelpCenter from "./pages/Profile/HelpCenter";
import Orders from "./pages/Business/Orders";
import IndividualOrder from "./components/IndividualOrder";
import Growth from "./pages/Business/Growth";
import TotalEarning from "./pages/Business/TotalEarning";
import Withdrawal from "./pages/Business/Withdrawal";
import LevelOverview from "./pages/Business/LevelOverview";
import SellerProfile from "./pages/Profile/SellerProfile";
import BuyerProfile from "./pages/Profile/BuyerProfile";
// import BuyerProfileSellerPOV from "./components/BuyerProfileSellerPOV";
import SellerJobs from "./pages/Jobs/SellerJobs";
import BuyerJobs from "./pages/Jobs/BuyerJobs";
import Users from "./components/Users";
import ApplyJobsSeller from "./pages/Jobs/ApplyJobsSeller";
import ReferAFriend from "./pages/Profile/ReferAFriend";
import CashFree from "./pages/SettingsPage/CashFree";
import AIChatBot from "./components/AIChatBot";
// import BuyerSidebarSellerPOV from "./components/BuyerSidebarSellerPOV";
import BuyerProfileSellerPOV from "./pages/Profile/BuyerProfileSellerPOV";
import BillingHistory from "./components/BillingHistory";

// Context for Mode
const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "BUYER"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode); // Sync mode with localStorage
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// Wrapper for App with dynamic mode
const AppWithMode = () => {
  const { mode } = useMode();

  // Define Routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          {/* Dynamic Navbar */}
          {mode === "SELLER" ? <NavbarSeller /> : <NavbarBuyer />}
          <Outlet />
          {/* <AskAI/> */}
          <AIChatBot />
          <Footer />
        </div>
      ),
      children: [
        {
          path: "/",
          element: mode === "BUYER" ? <BuyersProjects /> : <SellerDashboard />,
        },
        { path: "/editGig", element: <EditGig /> },
        { path: "/payment", element: <PaymentMethodFilling /> },
        { path: "/description", element: <Description /> },
        { path: "/maintenance", element: <Maintenance /> },
        { path: "/messages", element: <Messages /> },
        { path: "/settings", element: <Settings /> },
        { path: "/buyersfreelancers", element: <BuyersFreelancers /> },
        { path: "/sellerdashboard", element: <SellerDashboard /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/privacypolicy", element: <PrivacyPolicy /> },
        { path: "/termsandconditions", element: <TermsAndConditions /> },
        { path: "/billingAndPayment", element: <BillingAndPayment /> },
        { path: "/billinghistory", element: <BillingHistory /> },
        { path: "/pricingPlan", element: <PricingPlan /> },
        { path: "/gig", element: <Gig /> },
        { path: "/helpcenter", element: <HelpCenter /> },
        { path: "/orders", element: <Orders /> },
        { path: "/individualorder", element: <IndividualOrder /> },
        { path: "/growth", element: <Growth /> },
        { path: "/totalearning", element: <TotalEarning /> },
        { path: "/withdrawal", element: <Withdrawal /> },
        { path: "/leveloverview", element: <LevelOverview /> },
        { path: "/profileSeller", element: <SellerProfile /> },
        { path: "/profileBuyer", element: <BuyerProfile /> },
        { path: "/buyerjob", element: <BuyerJobs /> },
        { path: "/sellerjob", element: <SellerJobs /> },
        { path: "/users", element: <Users /> },
        { path: "/applyjobs", element: <ApplyJobsSeller /> },
        { path: "/referafriend", element: <ReferAFriend /> },
        { path: "/cashfree", element: <CashFree /> },
        { path: "/ai", element: <AIChatBot /> },
        { path: "/sellerPOV", element: <BuyerProfileSellerPOV /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

// Main App Component with ModeProvider
const App = () => {
  return (
    <ModeProvider>
      <AppWithMode />
    </ModeProvider>
  );
};

export default App;
