import React, { useState } from "react";
import Register from "./Register";

const App = () => {
  const [showRegister, setShowRegister] = useState(false); // Modal state

  const handleEnrollClick = () => {
    setShowRegister(true); // Show the register modal when "Enroll Now" is clicked
  };

  const testimonialsData = [
    {
      name: "YASH",
      score: "83/100",
      session: "4th Session of 2023",
      testimonial:
        "I was lucky to study from Gaurav Sir and can say without a shadow of a doubt, he’s one of the finest aviation instructors I have ever come across. The way he conducts his lessons is direct, fun, and complete – to the point that even some of the more complex topics end up being quite simple to comprehend. His involvement is sincere and the efforts he puts to make his students succeed are resolute.",
      image: "yash.png",
    },
    {
      name: "HARSHITA",
      score: "82/100",
      session: "3rd Session of 2023",
      testimonial:
        "I wanted to take a moment to express my gratitude for the incredible learning experience in GAURAV SIR class. Your teaching style is both engaging and effective, making even complex concepts feel approachable. The way you break down technical topics demonstrates your expertise and genuine passion for the subject.",
      image: "harshita.png",
    },
    {
      name: "T MADHAV",
      score: "90/100",
      session: "2nd Session of 2023",
      testimonial:
        "Gaurav Sir taught me Technical General during my CPL examinations, and his approach to teaching is truly exceptional. He prioritizes understanding the core concepts, making the subject highly engaging and informative.",
      image: "tmadhav.png",
    },
    {
      name: "JOBIN",
      score: "80/100",
      session: "OLODE FC 02 of 2022",
      testimonial:
        "Highly recommend Technical Pilot for someone who wishes to deepen their knowledge on DGCA Subjects especially TECHNICAL GENERAL. The constant guidance of the instructor (Gaurav Sir) and the comprehensive study material helped me clear the paper in my 1st attempt.",
      image: "jobin.png",
    },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Banner Section */}
      <header className="relative">
        <img
          src="cockpit.jpg"
          alt="Pilot Training"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Learn, Think and Fly</h1>
            <p className="text-lg mb-8">
              Learn: Emphasizes quality education and knowledge.
              <br />
              Think: Highlights critical thinking and mastering concepts.
              <br />
              Fly: Represents achieving the ultimate goal—becoming a pilot.
            </p>
            <div className="space-x-4 space-y-2">
              <button
                onClick={handleEnrollClick} // Open the register modal
                className="bg-blue-900 text-white py-3 px-8 rounded-lg text-xl hover:bg-blue-700 transition duration-300"
              >
                Enroll Now
              </button>
              <button className="bg-red-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-red-400 transition duration-300">
                Call Us for Enquiry
              </button>
              <button
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
                className="bg-green-500 text-white py-3 px-8 rounded-lg text-xl hover:bg-green-400 transition duration-300"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Welcome to Technical Pilot! ✈️
          </h2>
          <p className="text-lg mb-8">
            Technical Pilot is your gateway to mastering the essential knowledge
            required to become a successful commercial pilot. We specialize in
            providing comprehensive DGCA Ground Classes designed to equip
            aspiring aviators with a solid foundation in key subjects, ensuring
            success in their pilot training journey.
          </p>
          <p className="text-lg mb-8">
            Our expert instructors, with 7+ years of industry experience and a
            100% DGCA exam pass rate, are committed to delivering high-quality,
            personalized training. Whether you're preparing for Technical
            General, Navigation, Air Regulations, Meteorology, or RTR exams,
            Technical Pilot offers tailored classes, interactive online
            sessions, and lifetime career guidance to help you soar high.
          </p>
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-md shadow-md">
            At Technical Pilot, we don't just prepare you for exams—we build
            future pilots. 🚀
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <h2 className="text-center text-3xl text-blue-900 font-bold mb-8">
          Hear From Our Students
        </h2>
        <div className="testimonial-slider flex gap-8 px-4 w-full">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 flex-shrink-0 w-72 sm:w-96 lg:w-[28%]"
            >
              <div
                className="w-16 h-16 rounded-full bg-gray-300 mb-4 mx-auto"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-gray-800 text-sm">{testimonial.testimonial}</p>
              <p className="mt-4 text-xs text-gray-600">
                - {testimonial.name}, {testimonial.session}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Register Modal */}
      {showRegister && <Register setShowRegister={setShowRegister} />}

      {/* Footer Section */}
      <footer className="text-blue-600 text-center py-6">
        <p>© 2024 Technical Pilot. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.facebook.com"
            className="text-blue-600 hover:text-blue-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com"
            className="text-red-600 hover:text-red-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-blue-600 hover:text-blue-700 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-pink-600 hover:text-pink-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
