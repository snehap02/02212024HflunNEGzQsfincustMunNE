import React, { createContext, useContext, useState, useEffect } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarBuyer from "./components/NavbarBuyer";
import NavbarSeller from "./components/NavbarSeller";
import SellerDashboard from "./pages/SellerDashboard/SellerDashboard";
import BuyersProjects from "./pages/BuyersHomepage/BuyersProjects";
import BuyersFreelancers from "./pages/BuyersHomepage/BuyersFreelancers";
import AboutUs from "./pages/AboutUs.js/AboutUs";
import ContactUs from "./pages/ContactUs.js/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy.js/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions.js/TermsAndConditions";
import Maintenance from "./pages/Maintenance/Maintenance";
import Gig from "./pages/GigPage/Gig";
import SellerProfile from "./pages/Profile/SellerProfile";
import BuyerProfile from "./pages/Profile/BuyerProfile";
import Users from "./components/Users";
import AIChatBot from "./components/AIChatBot";
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
  const appRouter = createHashRouter([
    {
      path: "/",
      element: (
        <div>
          {/* Dynamic Navbar */}
          {mode === "SELLER" ? <NavbarSeller /> : <NavbarBuyer />}
          <Outlet />
          <Footer />
        </div>
      ),
      children: [
        { path: "/", element: mode === "BUYER" ? <BuyersProjects /> : <SellerDashboard /> },
        { path: "/maintenance", element: <Maintenance /> },
        { path: "/buyersfreelancers", element: <BuyersFreelancers /> },
        { path: "/sellerdashboard", element: <SellerDashboard /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/privacypolicy", element: <PrivacyPolicy /> },
        { path: "/termsandconditions", element: <TermsAndConditions /> },
        { path: "/billinghistory", element: <BillingHistory /> },
        { path: "/gig", element: <Gig /> },
        { path: "/profileSeller", element: <SellerProfile /> },
        { path: "/profileBuyer", element: <BuyerProfile /> },
        { path: "/users", element: <Users /> },
        { path: "/ai", element: <AIChatBot /> },
        { path: "/sellerPOV", element: <BuyerProfileSellerPOV /> },
        { path: "*", element: <Maintenance /> }, // Catch-all for 404 pages
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
