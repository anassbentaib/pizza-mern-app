import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Layout, Error, Profile, Admin } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/profile/admin_dashboard" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
