import React from "react";

const MapComponent = () => {
  const googleMapsEmbedURL =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48286.86735149399!2d-73.972636!3d40.851478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6e7ec96b7eb%3A0xe034fc37c4b8168e!2s1638%20Center%20Ave%2C%20Fort%20Lee%2C%20NJ%2007024!5e0!3m2!1sen!2sus!4v1741005892832!5m2!1sen!2sus";

  return (
    <div className="bg-mainBlue py-6 lg:py-10 lg:pb-6 flex justify-center">
      <div className="container mx-auto px-4 text-whiteOne">
        <iframe
          src={googleMapsEmbedURL}
          width="100%"
          height="450"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
