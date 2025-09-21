import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-3xl font-bold text-black-700 text-center">About Us</h2>
        <p className="mt-4 text-gray-700">
          EcoFuture was founded with a mission to make renewable energy
          accessible and affordable for everyone. We believe in powering the
          future without harming the planet.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Our Mission</h3>
        <p className="text-gray-700">
          To provide innovative clean energy solutions that reduce carbon
          emissions and promote sustainability across communities.
        </p>
      </section>

      <section>
        <h3 className="text-2xl text-blue-600 font-semibold mb-4 text-center">Our Team</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="font-bold text-center">Ali Khan</h4>
            <p className='text-center' >CEO & Founder</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="font-bold text-center">Sara Ahmed</h4>
            <p className='text-center'>Chief Engineer</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="font-bold text-center">Imran Malik</h4>
            <p className='text-center'>Research Head</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;