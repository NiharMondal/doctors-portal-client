import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import BussinessInfo from '../BussinessInfo/BussinessInfo';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import MBody from '../MBody/MBody';
import Services from '../Services/Services';
import SubSection from '../subSection/SubSection';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';


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