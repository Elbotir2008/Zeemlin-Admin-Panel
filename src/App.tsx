import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Report from "./components/report/Report";
import Directors from "./pages/Directors/Directors";
import Jamoa from "./pages/Jamoa/Jamoa";
import Maktablar from "./pages/Maktablar/Maktablar";
import Oqituvchilar from "./pages/O'qituvchilar/O'qituvchilar";
import Oquvchilar from "./pages/O'quvchilar/O'quvchilar";
import OtaOnalar from "./pages/Ota-Onalar/Ota-onalar";
import Tadbirlar from "./pages/Tadbirlar/Tadbirlar";
import Yordam from "./pages/Yordam/Yordam";
import NotFound from "./components/notFound/NotFound";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notFound" element={<NotFound />} />
              <Route path="/report" element={<Report />} />
              <Route path="/directors" element={<Directors />} />
              <Route path="/jamoa" element={<Jamoa />} />
              <Route path="/maktablar" element={<Maktablar />} />
              <Route path="/o'qituvchilar" element={<Oqituvchilar />} />
              <Route path="/o'quvchilar" element={<Oquvchilar />} />
              <Route path="/otaOnalar" element={<OtaOnalar />} />
              <Route path="/tadbirlar" element={<Tadbirlar />} />
              <Route path="/yordam" element={<Yordam />} />
            </Routes>
            <Aside />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
