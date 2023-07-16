import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQ";
import ProfessorReviewSection from "./components/ProfessorReview";
import Community from "./components/Community";
import Connect from "./components/Connect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/email" element={<Connect />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="/testimonials" element={<Testimonials />}></Route> */}
          {/* <Route path="/faqsection" element={<FAQSection />}></Route> */}
          <Route path="/professorreviewsection" element={<ProfessorReviewSection />}></Route>
        </Routes>
        <Community />
        <Testimonials />
        <FAQSection />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
