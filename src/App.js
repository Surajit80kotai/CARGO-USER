import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import Payment from "./pages/Payment";
import Booknow from "./pages/Booknow";
import Orderhistory from "./components/core/profile/Orderhistory";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/payment' element={<Payment />} />
        <Route path='/booknow' element={<Booknow />} />
        <Route path='/orderhistory' element={<Orderhistory />} />
        <Route path='/serchresult' element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
