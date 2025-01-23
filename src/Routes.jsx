import { Route, Routes } from "react-router-dom";

//Components

import HomePage from "./components/Homepage";
import AboutPage from "./components/Aboutpage";
import Taskpage from "./components/Taskpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/taskpage" element={<Taskpage />} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Routes>
  );
};
export default AppRoutes;
