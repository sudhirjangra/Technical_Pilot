import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-16 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 text-lg font-medium">
            Empowering aspiring aviators with knowledge, expertise, and passion.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Mission and Vision Section with Image */}
        <section className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <img
            src="https://via.placeholder.com/600x400" // Placeholder image
            alt="Our Mission"
            className="rounded-lg shadow-lg w-full lg:w-1/2 transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At Technical Pilot, our mission is to empower aspiring aviators
              with in-depth knowledge and critical skills that go beyond merely clearing exams. We focus on building a strong conceptual foundation in every subject, enabling students to master the intricacies of aviation and tackle real-world challenges with confidence.
            </p>
            <h2 className="text-4xl font-bold text-blue-600 mt-8 mb-4">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              Our vision is to set new standards in aviation education. We aim
              to nurture competent, knowledgeable, and confident pilots who
              excel not only in DGCA examinations but also contribute
              meaningfully to the aviation industry. 🚀✈️
            </p>
          </div>
        </section>

        {/* Team Section with Image */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <img
              src="https://via.placeholder.com/300" // Placeholder image
              alt="Gaurav Bindal"
              className="rounded-full shadow-lg w-64 h-64 transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <div className="bg-white shadow-md rounded-lg p-8 flex-1 transition-transform transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold">Gaurav Bindal</h3>
              <p className="mt-4 text-gray-600">
                Fueled by an unwavering passion for aviation, Gaurav Bindal has
                dedicated over 7 years to training and inspiring future pilots.
                With a Master’s degree in Aeronautical Engineering from Moscow
                Institute of Physics and Technology, he brings unparalleled
                expertise and a 100% success rate in DGCA CPL examinations.
              </p>
              <p className="mt-4 text-gray-600">
                His goal is to shape confident aviators who lead the skies of
                tomorrow with innovation and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Learn from the Comfort of Your Home - Attend live, interactive online classes.",
              "Customized Timings - Flexible schedules for working professionals.",
              "Small Batch Sizes - Only 5-6 students per batch for personalized attention.",
              "Focus on Concept Building - Master subjects, not just clear exams.",
              "Free Lifetime Career Guidance - Continuous mentorship for aviation careers.",
              "Learn from Experts - 7+ Years of Experience and 100% DGCA Pass Rate.",
              "Detailed Study Materials - Comprehensive guides and practice tests.",
              "Interactive Learning Tools - Advanced tools for effective education.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <span className="text-blue-600 text-2xl">✅</span>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Section */}
        <section className="text-center">
          <img
            src="https://via.placeholder.com/800x400" // Placeholder image
            alt="Our Team"
            className="max-w-full h-auto rounded-lg shadow-lg mt-12 transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </section>
      </main>

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
            <i class="fab fa-linkedin-in text-2xl"></i>
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

export default AboutUs;
