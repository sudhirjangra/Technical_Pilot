// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
// import Blog from "./components/Blog";
import Resources from "./components/Resources";
import Register from "./components/Register"; // Import Register component

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white text-black p-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold">Technical Pilot</h1>
            <div />
            {/* Hamburger Menu for Small Screens */}
            <button
              className="lg:hidden text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

            {/* Navigation Links for Large Screens */}
            <ul className="hidden lg:flex space-x-8 text-md">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              {/* <li>
                <Link to="/contact">Contact</Link>
              </li> */}
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              {/* <li>
                <Link to="/blog">Blog</Link>
              </li> */}
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>

            {/* Register Button */}
            <button
              onClick={() => setShowRegister(true)}
              className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="flex flex-col space-y-4 mt-4 lg:hidden">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" onClick={() => setMenuOpen(false)}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li> */}
              <li>
                <Link to="/faq" onClick={() => setMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li> */}
              <li>
                <Link to="/resources" onClick={() => setMenuOpen(false)}>
                  Resources
                </Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/resources" element={<Resources />} />
        </Routes>

        {/* Register Modal */}
        {showRegister && <Register setShowRegister={setShowRegister} />}
      </div>
    </Router>
  );
};

export default App;
