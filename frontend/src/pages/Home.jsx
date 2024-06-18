import React from 'react';
import hero from "../assest/images/hero.png";
import finddoctorImg from "../assest/images/finddoctor.jpg";
import findlocationImg from "../assest/images/findlocation.jpg";
import bookappointmentImg from "../assest/images/bookappointment.png";
import featureImg from "../assest/images/aaaaab.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import DoctorList from '../components/Doctors/DoctorList';
// import Footer from '../components/Footer/Footer';
// import Testimonial from '../components/Testimonial/Testimonial';


// Define keyframes for animation
const styles = `
  @keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  .move-up-down, .feature {
    animation: moveUpDown 2s ease-in-out infinite;
  }
`;


const Home = () => {
  return (
    <>
       <style>{styles}</style> 

      {/*=========== Hero Section ===========*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            
            {/*======= Hero Content =========*/}
            <div className="lg:w-[570px]">
              <h1 className="text-[32px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                SAHANYA Medi Care | Your Trusted Healthcare Provider
              </h1>
              <p className="text_para text-justify font-bold">
                Sahanya Medical Institute is a state-of-the-art facility dedicated to providing comprehensive healthcare services with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care tailored to each patient's needs. At Sahanya MediCare, we prioritize your well-being, ensuring a harmonious journey towards optimal health and wellness.
              </p>
              <button className="btn">Request an Appointment</button>
            
              {/*========== Counter ==========*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[30px]">
                <div className="text-center">
                  <h2 className="text-[34px]  leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para  font-semibold">Years Of Experience</p>
                </div>
                <div className="text-center">
                  <h2 className="text-[34px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para font-semibold">Patient Satisfaction</p>
                </div>
                <div className="text-center">
                  <h2 className="text-[34px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para font-semibold">Service</p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] justify-end">
              <img className="w-full move-up-down" src={hero} alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/*=========== Hero Section end ===========*/}
      
      
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto "></div>
            <h2 className="text-center text-[32px]  font-bold ">Providing the best medical services</h2> 
            <p className="text-center text-cyan-950 font-bold">TO TAKE CARE OF YOUR HEALTH </p>
         

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[250px] mt-[30px] lg:mt-[55px]">
            {/*===find doctor====*/}
            <div className="py-[20px] px-3">
              <div className="flex items-center justify-center">
                <img src={finddoctorImg} alt=""/>
              </div>
              
              <div className="mt-[30px]">
                <h2 className="text-[24px] leading-9 text-headingColor font-[700] text-center"> Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-bold font-[400] mt-4 text-center">Discover your ideal healthcare provider with Find a Doctor. Easily search by location, specialty, and insurance, and make informed decisions with detailed profiles and patient reviews.</p>
              
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto 
                flex items-center justify-center group hover:bg-primaryColor hover:bottom-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>

            {/*===find location====*/}
            <div className="py-[20px] px-3">
              <div className="flex items-center justify-center">
                <img src={findlocationImg} alt=""/>
              </div>
              
              <div className="mt-[30px]">
                <h2 className="text-[24px] leading-9 text-headingColor font-[700] text-center"> Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-bold font-[400] mt-4 text-center"> World-class care for everyone.Easily locate businesses, services, and attractions on our website with our 'Find Location' tool. Input your destination and get accurate directions instantly.</p>
              
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:bottom-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>

            {/*===book appointment====*/}
            <div className="py-[20px] px-3">
              <div className="flex items-center justify-center">
                <img src={bookappointmentImg} alt=""/>
              </div>
              
              <div className="mt-[30px]">
                <h2 className="text-[24px] leading-9 text-headingColor font-[700] text-center"> Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-bold font-[400] mt-4 text-center">"Book appointments effortlessly with our online booking feature. Enjoy seamless scheduling, real-time availability, and convenient reminders."</p>
              
                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:bottom-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/*===services====*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text_para text-center  text-cyan-950 font-bold">World-class for everyone. Our health System offers unmatched, expert health care.</p>
          </div>

          <ServicesList/>
        </div>
      </section>

      {/*===features part====*/}
      <section>
        <div className="container ">
          <div className="flex items-center  justify-between flex-col lg:flex-row">

            <div className="xl:w-[670px] ">
              <h2 className="heading">Get the treatment<br/> anytime</h2>

              <ul className="pl-3">
                <li className="text_para">
                  1.Schedule the appointment directly
                </li>
                <li className="text_para">
                  2.Search for your specialist here, and contact their
                </li>
                <li className="text_para">
                  3.Veiw your specialist who are accepting new patients, use the online scheduling tool to select  an appointmenttime.
                </li>
                
              </ul>
              <Link to="/"> 
              <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[557px] flex justify-between mt-[50px] lg:mt-0">
              <img src={featureImg} className="feature" alt="" />
            </div>
          </div>
        </div>
      </section>


      {/* =========== doctor Section =========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center text-cyan-950 font-bold">World-class for everyone. Our health System 
            offers unmatched, expert health care.</p>
          </div>

          <DoctorList/>

        </div>
      </section>

      {/* =========== testimonial =========== */}
     {/* <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center"> What our patients say</h2>
          <p className="text_para text-center">World-class for everyone. Our health System 
            offers unmatched, expert health care.</p>
        </div>
        <Testimonial/>
        
      </div>
     </section> */}
       
    </>
  );
};


export default Home;
