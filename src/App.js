
import './App.css'
import HomePage from './HomePage/HomePage';
import Footer from './ReservationPage/Footer';
import Header from './ReservationPage/Header';
import BookingPage from './ReservationPage/ReservationPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
