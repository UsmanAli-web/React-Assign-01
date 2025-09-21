import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import BlogSection from '../components/BlogSection/BlofSection';
import Faq from '../components/Faq';
import News from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
       {<Hero/>}
   {<Feature />}
   {<BlogSection />}
   {<Faq />}
   {<News />}
    </div>
  );
}

export default Home;