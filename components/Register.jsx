// components/Register.jsx
import React, { useState } from "react";

const Register = ({ setShowRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.phone) newErrors.phone = "Phone Number is required.";
    if (!formData.email) newErrors.email = "Email Address is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (API call or other logic)
      console.log("Form submitted", formData);
      setShowRegister(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2">
        <h2 className="text-xl mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name (as per Aadhar Card)"
            className="block border p-2 mb-4 w-full"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* Date of Birth Field */}
          <input
            type="date"
            name="dob"
            className="block border p-2 mb-4 w-full"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

          {/* Gender Field */}
          <select
            name="gender"
            className="block border p-2 mb-4 w-full"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender}</p>
          )}

          {/* Phone Number Field */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="block border p-2 mb-4 w-full"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          {/* Email Address Field */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="block border p-2 mb-4 w-full"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            disabled={
              !formData.name ||
              !formData.dob ||
              !formData.gender ||
              !formData.phone ||
              !formData.email
            }
          >
            Submit
          </button>
        </form>
        <button
          className="mt-4 text-red-500"
          onClick={() => setShowRegister(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Register;
