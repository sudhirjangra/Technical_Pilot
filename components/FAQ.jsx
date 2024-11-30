import React from "react";

const faqData = [
  {
    question: "What is DGCA?",
    answer:
      "The Directorate General of Civil Aviation (DGCA) is the regulatory body for civil aviation in India. It governs all aspects of civil aviation, including pilot training, aircraft certification, and air safety standards.",
  },
  {
    question: "What courses does Technical Pilot offer?",
    answer:
      "We offer DGCA ground classes for the following subjects: Technical General, Navigation, Air Regulations, Meteorology, RTR (Radio Telephony Restricted).",
  },
  {
    question: "Can I take online classes for these subjects?",
    answer:
      "Yes! We provide live, interactive online classes for all subjects. You can learn from the comfort of your home, and we offer flexible timings to suit your schedule.",
  },
  {
    question: "What is the duration of the courses?",
    answer:
      "The duration varies depending on the course and your schedule. However, subjects take between 6 to 10 weeks to complete. We offer flexible learning options to accommodate working professionals.",
  },
  {
    question: "What is the bundle offer?",
    answer:
      "We offer a special bundle deal where you can enroll for all five DGCA subjects at a discounted price of ₹1,60,000 (original price ₹2,10,000). This gives you a savings of ₹50,000!",
  },
  {
    question: "Are the classes suitable for working professionals?",
    answer:
      "Yes! We understand that many of our students are working professionals. We offer customized timings to fit your availability. You tell us when you're free, and we'll schedule your classes accordingly.",
  },
  {
    question: "How many students are in each class?",
    answer:
      "To ensure personalized attention, we keep our batch sizes small — only 5-6 students per batch. This allows for one-on-one interaction and doubt-clearing sessions.",
  },
  {
    question: "How can I register for the courses?",
    answer:
      "You can register through our website by filling out the registration form. Our team will contact you to finalize your enrollment and guide you through the next steps.",
  },
  {
    question: "Do I get career guidance after completing the course?",
    answer:
      "Yes! We offer lifetime career guidance to all our students. Our experienced instructors will help you with insights and advice on career progression in aviation.",
  },
  {
    question: "Do you offer study materials and practice tests?",
    answer:
      "Yes, we provide detailed study materials and practice tests to help you prepare thoroughly for your DGCA exams. Our resources are designed to support your learning and boost your exam performance.",
  },
  {
    question: "How do I contact you for more information?",
    answer:
      "You can reach us via phone at 9991512345 or 9953426586, or email us at contact@technicalpilot.in for any queries or assistance.",
  },
];

const FAQ = () => {
  return (
    <div className="font-sans bg-gradient-to-t from-blue-50 to-white section-animated">
      {/* Header Section */}
      <header className="bg-blue-900 text-white text-center py-16 px-4 shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-opacity-90">
          Find answers to the most common questions about our courses and services.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pulse-animation">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl p-6 border-l-4 border-blue-500 transform hover:-translate-y-2 faq-box"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors duration-300 faq-header">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-lg">{faq.answer}</p>
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

export default FAQ;
