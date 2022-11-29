import { InstantSearch } from "react-instantsearch-dom";
import { searchClient } from "./typesenseAdapter";
import "instantsearch.css/themes/satellite.css";
import CustomNavbar from "./components/customNavbar/CustomNavbar";
import CustomRoutes from "./routes/customRoutes";

const App = () => {
    return (
        <InstantSearch indexName="business" searchClient={searchClient}>
            <CustomNavbar />
            <CustomRoutes />
        </InstantSearch>
    )
}

export default App
