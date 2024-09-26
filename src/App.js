import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import ContactInfo from "./components/contactInfo";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contactInfo" element={<ContactInfo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
