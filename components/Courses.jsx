import React from "react";

// Static course data
const coursesData = [
  {
    title: "Technical General",
    fee: "₹60,000",
    description:
      "Technical General is a core subject in pilot training that covers the fundamental principles of aircraft systems, aerodynamics, and performance. It provides an in-depth understanding of how various aircraft components operate, from engines to electrical systems, and how they interact during flight.",
    importance:
      "Mastering Technical General ensures that aspiring pilots have a solid grasp of aircraft mechanics and systems, crucial for safe and efficient flight operations.",
  },
  {
    title: "Navigation",
    fee: "₹60,000",
    description:
      "Navigation is a crucial subject in pilot training that focuses on the techniques and tools used to guide an aircraft from one point to another. It covers various methods, including visual navigation, radio navigation, and the use of modern technologies like GPS.",
    importance:
      "Mastering Navigation is essential for pilots to safely and accurately navigate through different airspaces, weather conditions, and terrains.",
  },
  {
    title: "Air Regulations",
    fee: "₹30,000",
    description:
      "Air Regulations is a subject that covers the legal framework governing aviation operations. It includes international and national aviation laws, safety standards, air traffic control procedures, and rules that pilots must adhere to during flight operations.",
    importance:
      "Mastering Air Regulations is essential for pilots to ensure they operate within the boundaries of legal and safety guidelines.",
  },
  {
    title: "Meteorology",
    fee: "₹25,000",
    description:
      "Meteorology in pilot training focuses on the study of weather patterns, atmospheric conditions, and how they affect flight operations. It covers topics like cloud formation, wind patterns, temperature variations, visibility, and weather forecasting.",
    importance:
      "Meteorology is crucial for ensuring flight safety by helping pilots anticipate and navigate through changing weather conditions.",
  },
  {
    title: "RTR (Radio Telephony Restricted)",
    fee: "₹35,000",
    description:
      "RTR (Radio Telephony Restricted) is a subject that trains pilots on the proper use of radio communication in aviation. It covers the procedures, terminology, and protocols for communicating with air traffic control (ATC) and other aircraft.",
    importance:
      "Mastering RTR is essential for safe and efficient communication in aviation, ensuring pilots can relay critical information clearly and accurately.",
  },
];

const Courses = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">Courses and Fees</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn the essential subjects for DGCA exams with expert instructors.
          We offer flexible online courses designed for aspiring pilots.
        </p>
      </header>

      {/* Courses Section */}
      <section className="py-12 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-md p-6 hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {course.title}
              </h2>
              <p className="text-sm text-gray-700 mb-3">{course.description}</p>
              <p className="text-lg text-blue-600 font-semibold mb-4">
                Fee: {course.fee}
              </p>
              <p className="text-sm text-gray-600">{course.importance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Bundle Offer */}
      <section className="bg-blue-100 py-10 px-4">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">
            🎯 Special Bundle Offer
          </h2>
          <p className="text-base mb-3">
            Enroll for all subjects at a discounted price of ₹1,60,000
            (originally ₹2,10,000). Save ₹50,000!
          </p>
          <button className="bg-blue-900 text-white py-2 px-6 rounded-lg text-base hover:bg-blue-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-blue-900  text-center py-6">
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

export default Courses;
