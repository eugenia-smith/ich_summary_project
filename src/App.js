import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/contacts" element={}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
