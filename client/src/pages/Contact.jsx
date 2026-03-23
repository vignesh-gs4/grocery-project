import React from 'react';
// import { assets } from '../../assets/assets'; // Adjust path based on your folder structure

const Contact = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have a question about your delivery or want to partner with us? Our team is here to help you 24/7.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   {/* Replace with an actual icon if using lucide-react or font-awesome */}
                   <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-medium">Our Warehouse</h3>
                  <p className="text-gray-600 text-sm">123 Fresh Lane, Green Valley, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   <span className="text-xl">📞</span>
                </div>
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-gray-600 text-sm">+1 (555) 000-1234</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-gray-600 text-sm">support@yourgrocery.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={onSubmitHandler} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 outline-none">
                <option>Order Status</option>
                <option>Refund Request</option>
                <option>Delivery Feedback</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;