import React from "react";
import "./App.css"; // Add this file for custom CSS

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

const TestimonialsPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-6">
          People leaders love the Technical Pilot experience
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We provide expert instruction and personalized training to help
          aspiring pilots achieve their aviation dreams.
        </p>
      </header>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <h2 className="text-center text-3xl text-blue-900 font-bold mb-8">
          Hear From Our Students
        </h2>
        <div className="testimonial-slider flex gap-8 px-4 w-full">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-8 flex-shrink-0 w-80 sm:w-96 lg:w-[28%]"
            >
              {/* Image with rounded corners inside the card */}
              <div
                className="w-24 h-24 rounded-full bg-gray-300 mb-6 mx-auto"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-gray-800 text-lg">{testimonial.testimonial}</p>
              <p className="mt-4 text-sm text-gray-600">
                - {testimonial.name}, {testimonial.session}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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

export default TestimonialsPage;
