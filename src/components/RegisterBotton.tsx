import { motion } from "framer-motion";
import { VariantsDown, VariantsUp } from "../assets/Motions/HomePageMotion";
import { Link } from "react-router-dom";
const RegisterBotton = () => {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={VariantsDown}
        className=" group text-blue-950 hover:text-white font-Roboto text-[1.1rem]  absolute
       right-[19.5%] top-[10rem] lg:right-[6.5rem] lg:top-[4rem] md:right-[5.2rem] md:top-[1.2rem]
        mx-auto px-3 py-1
        hover:bg-black/60 items-center
          bg-amber-500 rounded-t-full rounded-r-full border-[1px] border-yellow-100 
           hover:border-white duration-300 sm:hidden"
                   
      >
        <Link to="/loginPage" className="flex">
          {/* <FaAnglesDown className="text-white group-hover:text-orange-500 animate- " /> */}
          <div className="h-3 w-3 bg-red-600 rounded-full absolute -top-[2px] right-1
          duration-1000 animate-ping " />
          <span className=" mr-3">Register</span>
          
        </Link>
      </motion.div>
    </>
  );
};

export default RegisterBotton;
