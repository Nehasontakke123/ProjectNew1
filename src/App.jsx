import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import JewelleryRepair from './pages/JewelleryRepair'; // import your new page for repair form
import VideoStream from "./components/VideoStream";
import Notifications from "./components/Notifications";
import ExchangeForm from "./components/ExchangeForm";


function App() {
  return (
<>

      <Navbar />
      {/* <Notifications/> */}
      <Routes>
        {/* Define Routes for Different Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/jewellery-repair" element={<JewelleryRepair />} /> {/* Route for repair request page */}
        <Route path="/video" element={<VideoStream />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/exchange" element={< ExchangeForm/>} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
