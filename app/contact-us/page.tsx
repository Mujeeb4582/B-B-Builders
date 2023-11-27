'use client';

// import dynamic from 'next/dynamic';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsappSquare,
} from 'react-icons/fa';

// const GoogleMap = dynamic(() => import('@/components/Map'), {
//   loading: () => <p>Loading Map...</p>,
//   ssr: false, // Disable server-side rendering
// });

const ContactUs = () => {
  const iconStyle = {
    color: '#c86500',
  };
  return (
    <div className="container mx-auto lg:px-24 px-8 py-8 mt-24">
      {/* Contact form */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2 text-[#c86500]">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to us for any inquiries or questions.
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#c86500] text-white p-2 rounded-md hover:bg-[#703b04] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Display the Google Map */}
        {/* <div className="mt-8">
          <GoogleMap />
        </div> */}
      </div>
      {/* Contact information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Address card */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <FaMapMarkerAlt size={24} className="mb-2" style={iconStyle} />
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            B & B Builders 4th Floor 44-E Plaza Fazal-e-Haq Road Blue-Area
            Islamabad
          </p>
        </div>

        {/* Phone card */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="flex mb-2 gap-3">
            <FaWhatsappSquare size={24} style={iconStyle} />
            <FaPhone size={24} style={iconStyle} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">0333-1125174</p>
        </div>

        {/* Email card */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <FaEnvelope size={24} className="mb-2" style={iconStyle} />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-600">ceo@bandbuliders.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
