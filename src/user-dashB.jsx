import { ThemeProvider, CssBaseline, createTheme,} from "@mui/material";
import RootComponent from "./components/root-component";
import RootPage from "./components/root-page";
import '@fontsource/inter'; // If using @fontsource


// import "../app.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./DashBoard/bodyComponents/Home/Home";
import Inventory from "./DashBoard/bodyComponents/Inventory/Inventory";
import Growth from "./DashBoard/bodyComponents/growth/Growth";
import Report from "./DashBoard/bodyComponents/report/Report";
import Setting from "./DashBoard/bodyComponents/Settings/Setting";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: "light",
    },

    typography: {
      fontFamily: "Inter",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${Inter}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    //here we customize our typographi and in the variant prop we can use out myVar value
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/dash" element={<RootComponent />}>
        <Route index element={<RootPage />} />
        <Route path="/dash-home" element={<Home />}></Route>
        <Route path="/dash-inventory" element={<Inventory />}></Route>
        <Route path="/dash-growth" element={<Growth />}></Route>
        <Route path="/dash-reports" element={<Report />}></Route>
        <Route path="/dash-settings" element={<Setting />}></Route>
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
