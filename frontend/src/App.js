import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <AllRoutes />
      </Container>
    </>
  );
}

export default App;
