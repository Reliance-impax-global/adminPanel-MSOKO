import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Welcome from "./scenes/welcome/Welcome";
import Products from "./scenes/products";
import Reviews from "./scenes/reviews";
import Notification from "./components/Notification";
import MarketingPromotions from "./scenes/marketing";
import CustomerSupport from "./scenes/customerSupport";
import ContentManagement from "./scenes/contentManagement";
import AnalyticsReporting from "./scenes/analytics";
import SalesReportsSection from "./components/SalesReportsSection";
import MonitorEngagementRetention from "./components/MonitorUserEngagementAndRetention";
import PopularProductsCategoriesSection from "./components/PopularProductsCategoriesSection";
import RevenueProfitTrendsSection from "./components/RevenueProfitTrendsSection";
import SellerManagement from "./scenes/sellerManagement";
import MonitorPerformancePage from "./components/MonitorPerformancePage";
import OrderManagementPage from "./scenes/orders";
import ProductManagementPage from "./scenes/productMnagement";
import UserManagement from "./scenes/userMnagement";
import BankDetailsForm from "./scenes/bankDetails";
import BusinessDetailsForm from "./scenes/businessDetails";
import MonitorBussnessDetails from "./scenes/monitorBussnessDetails";
import OnboardingForm from "./scenes/onbording";
import Advertisment from "./scenes/advertising";
import BusinessInsights from "./scenes/businessInsights";
import SecurityAndPrivacy from "./scenes/securityandPrivacy";
import AnalyticsBarChart from "./components/AnalyticsBarChart";
import Register from "./scenes/register/Register";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <div className="content-container">
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notification" element={<Notification />} />
                <Route
                  path="/marketing-promotions"
                  element={<MarketingPromotions />}
                />
                <Route path="/customer-support" element={<CustomerSupport />} />
                <Route
                  path="/content-management"
                  element={<ContentManagement />}
                />
                <Route
                  path="/analytics-reporting"
                  element={<AnalyticsBarChart />}
                />
                <Route
                  path="/sales-reports"
                  element={<SalesReportsSection />}
                />
                <Route
                  path="/user-engagement"
                  element={<MonitorEngagementRetention />}
                />
                <Route
                  path="/revenue-trends"
                  element={<RevenueProfitTrendsSection />}
                />
                <Route
                  path="/popular-products"
                  element={<PopularProductsCategoriesSection />}
                />
                <Route
                  path="/seller-management"
                  element={<SellerManagement />}
                />
                <Route
                  path="/order-management"
                  element={<OrderManagementPage />}
                />
                <Route
                  path="/product-management"
                  element={<ProductManagementPage />}
                />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/bank-details" element={<BankDetailsForm />} />
                <Route
                  path="/business-details"
                  element={<BusinessDetailsForm />}
                />
                <Route
                  path="/monitor-business-details"
                  element={<MonitorBussnessDetails />}
                />
                <Route path="/onboaridng-form" element={<OnboardingForm />} />
                <Route
                  path="/advertising-management"
                  element={<Advertisment />}
                />
                <Route
                  path="/business-insights"
                  element={<BusinessInsights />}
                />
                <Route
                  path="/security-and-privacy"
                  element={<SecurityAndPrivacy />}
                />
                <Route path="/team" element={<Team />} />
                {/* <Route
                  path="/monitor-performance"
                  element={<MonitorPerformancePage />}
                /> */}

                <Route path="/products" element={<Products />} />
                <Route path="/feedback-reviews" element={<Reviews />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
