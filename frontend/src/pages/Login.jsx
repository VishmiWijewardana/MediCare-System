import { useState } from "react"
import { Link } from "react-router-dom";
import signimg from "../assest/images/login-animate.gif";



const Login = () => {

  const[ formdata , setFormData] = useState({
    email:'',
    password:'',
  });

  const handleInputChange = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  };

   //   animation
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

  return (
    <>
    <style>{styles}</style>
    <section className="px-5 lg:px-0 py-8">
      <div className="max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
          {/*=========img box======*/}
          <div className="hidden lg:block py-0  rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signimg} alt="" className="w-full rounded-l-lg move-up-down" />
            </figure>
          </div>
        <div className="rounded-l-lg lg:pl-16 py-20">
        <h4 className="text-headingColor text-[22px]"> Sahanya MediCare</h4>
        <h3 className="text-headingColor  text-[22px] leading-9 font-bold md-10">
         <span className="text-primaryColor">Welcome</span> Back

        </h3>
        

        <form className="py-6 md:py-10">
          <div className="mb-5">
            <input type="email" placeholder="Enter Your Email" name="email" value={formdata.email} onChange={handleInputChange}
            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor 
            text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
          </div>

          <div className="mb-5">
            <input type="password" placeholder="Enter Your Password" name="password" value={formdata.password} onChange={handleInputChange}
            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor 
            text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer" required />
          </div>

          <div className="mt-7">
            <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">Don&apos;t have an account? 
          <Link to='/register' className="text-primaryColor font-medium ml-1"> Register </Link>
          </p>
        </form>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login