import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-black-700">Pricing Plans</h2>
        <p className="mt-4 text-gray-600">
          Flexible plans designed for homes, businesses, and industries.  
          Choose the plan that fits your energy needs.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Starter</h3>
          <p className="mt-2 text-gray-500">For small households</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$29/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 1kW Solar Setup</li>
            <li>✔ Basic Maintenance</li>
            <li>✔ Energy Usage Report</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>

        {/* Professional */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Professional</h3>
          <p className="mt-2 text-gray-500">For families & small businesses</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$99/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 10kW Solar/Wind Setup</li>
            <li>✔ Priority Maintenance</li>
            <li>✔ Free Energy Audit</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700">Enterprise</h3>
          <p className="mt-2 text-gray-500">For industries & corporations</p>
          <p className="text-4xl font-bold text-blue-600 mt-4">$299/mo</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 50kW Hybrid Energy Solution</li>
            <li>✔ Dedicated Energy Manager</li>
            <li>✔ Carbon Footprint Tracking</li>
          </ul>
          <button className="mt-6 bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700">
            Select Plan
          </button>
        </div>
      </section>
    </div>
  );
}

export default Pricing;