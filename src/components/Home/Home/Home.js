import React from 'react';
import './Home.css'
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import Header from '../Header/Header';
import MBody from '../MBody/MBody';
import Services from '../Services/Services';
import SubSection from '../subSection/SubSection';

import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../../shared/Footer/Footer';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Doctors from '../Doctors/Doctors';

const Home = () => {
  return (
    <div className="home_wrapper"
      id="home">
      <div className="header_section">
        <Header />
        <MBody />
        <BussinessInfo />
      </div>
      <Services />
      <SubSection />
      <br/>
      <MakeAppointment />
      <Testimonial />
      <Blogs />
      <Doctors/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;