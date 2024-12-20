import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import WhatsAppButton from "./components/Whatsapp/WhatsappButton";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;
