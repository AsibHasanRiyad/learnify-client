
import { Helmet } from "react-helmet-async";
import Faq from "../components/Faq";
import Features from "../components/Features/Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className=" flex items-center flex-col md:flex-row gap-4 lg:gap-10 w-full px-4 md:px-14 lg:px-20 mt-10">
        <div className=" flex-1 space-y-3">
          <h1 className=" text-4xl lg:text-6xl font-semibold text-gray-100 ">
            Join Learnify {" "}
          </h1>
          <h1 className=" text-4xl lg:text-6xl font-semibold text-gray-100 ">
            Boost your <span className=" text-green-400">performance</span>
          </h1>
      <div className="pt-4">
      <button className=" btn btn-outline text-white ">
            Explore More
          </button>
      </div>
        </div>
        <div className=" w-full lg:w-[40vw]">
          <img src="https://i.ibb.co/jL0gmL7/oie-q-JRd-T3h6t-Ewk.png" alt="" />
        </div>
      </div>

      <Features></Features>

      <Faq></Faq>
    </div>
  );
};

export default Home;
