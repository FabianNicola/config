import {Home, TopHeader} from "./components";
import { Layout } from "./components/layout/Layout";
import { RouteProvider } from "./providers/routeProvider/RouteProvider";
import { MantineProvider, MantineThemeProvider } from "@mantine/core";

function App() {
  return ( 
    <MantineProvider>
      <MantineThemeProvider>
          <RouteProvider />
      </MantineThemeProvider>
    </MantineProvider>
  );
}

export default App;