import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Layout,
  Error,
  Profile,
  AdminDashboardLayout,
} from "./pages";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "./constants";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route
            path="/profile/admin_dashboard"
            element={<AdminDashboardLayout />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
