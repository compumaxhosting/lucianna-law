import React from "react";

const ContactForm = () => {
  const backgroundImage = "/contact-form-bg.png"; // Image path
  return (
    <div
      className="bg-white py-10 lg:py-16 lg:px-10 xl:px-32 relative overflow-hidden"
      aria-labelledby="contact-form" // Aria label for the section
      style={{
        backgroundImage: `url('${backgroundImage}')`, // Or use a string URL
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
      }}
    >
      {/* Decorative Background (Replace with actual image or pattern) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gray-100 opacity-25"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h2
            id="contact-form-heading"
            className="text-3xl lg:text-5xl font-normal mb-6"
          >
            Get Consultation By <br /> Appointment Only
          </h2>
          <p className="text-gray-600">
            Get Appointment for your first legal consultation.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              aria-required="true"
              aria-describedby="firstName-error" //Example using for error.  Error Message can toggle "visually-hidden" classes to manage accessibility and screen readers.
              className="appearance-none border bg-white border-lightBlue rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-mainBlue focus:shadow-outline"
            />
            <p
              id="firstName-error"
              className="mt-2 text-sm text-red-600 hidden"
              aria-live="assertive"
            >
              {" "}
              {/*  Example using. Default hidden. Shown when errors happen, which will automatically alert reader. Toggle `hidden` class for visual.  */}
              First name is required.
            </p>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              aria-required="true"
              aria-describedby="lastName-error"
              className="appearance-none border bg-white border-lightBlue rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-mainBlue focus:shadow-outline"
            />
            <p
              id="lastName-error"
              className="mt-2 text-sm text-red-600 hidden"
              aria-live="assertive"
            >
              Last name is required.
            </p>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Number*
            </label>
            <input
              type="tel"
              id="number"
              aria-required="true"
              aria-describedby="number-error"
              className="appearance-none border bg-white border-lightBlue rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-mainBlue focus:shadow-outline"
            />
            <p
              id="number-error"
              className="mt-2 text-sm text-red-600 hidden"
              aria-live="assertive"
            >
              A valid phone number is required.
            </p>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              aria-required="true"
              aria-describedby="email-error"
              className="appearance-none border bg-white border-lightBlue rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-mainBlue focus:shadow-outline"
            />
            <p
              id="email-error"
              className="mt-2 text-sm text-red-600 hidden"
              aria-live="assertive"
            >
              A valid email is required.
            </p>
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="comment"
              className="block text-gray-700 text-sm font-bold mb-1"
            >
              Comment
            </label>
            <textarea
              id="comment"
              rows={4}
              aria-describedby="comment-instructions" // Tell screen reader it has descriptive help below it
              className="appearance-none border border-lightBlue bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-hidden focus:shadow-outline"
            ></textarea>
            <p id="comment-instructions" className="mt-2 text-sm text-gray-500">
              {" "}
              {/* Help is BELOW the comment and referenced above.*/}
              Please provide any relevant details about your inquiry.
            </p>
          </div>

          {/* Send Message Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-mainBrown text-white font-bold py-4 px-6 rounded focus:outline-hidden focus:shadow-outline hover:bg-mainBlue transition-colors duration-200 cursor-pointer"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
