import { margin } from "@mui/system";
import Navbar from "./components/navbar/Navbar";
import Routes from "./routes/Mainroutes";

function App() {
  return (
    <div style={{ marginLeft: "20%" }}>
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
