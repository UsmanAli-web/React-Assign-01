import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-black-700">Our Services & Pricing</h2>
        <p className="mt-4 text-gray-600">
          Choose the right plan for your clean energy journey. Whether you’re a homeowner,
          a business, or an industry, we’ve got you covered.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Basic Solar Plan</h3>
          <p className="mt-2 text-gray-500">Perfect for small homes</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$49/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 3kW Solar Installation</li>
            <li>✔ Free Energy Audit</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Business Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Business Wind Plan</h3>
          <p className="mt-2 text-gray-500">Best for small businesses</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$199/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 20kW Wind Turbine</li>
            <li>✔ Maintenance Included</li>
            <li>✔ Energy Consulting</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Enterprise green Plan</h3>
          <p className="mt-2 text-gray-500">For industries & corporations</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$499/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 100kW Hybrid Solution</li>
            <li>✔ Carbon Footprint Report</li>
            <li>✔ Dedicated Account Manager</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;