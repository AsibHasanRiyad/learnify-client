
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

      {/* announcement */}
      <div>
      <header className="">
    <div className="container px-6 py-20 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-200 dark:text-white lg:text-4xl">Spread your <span className="text-green-400">Knowledge</span> with your friends</h1>

                    <p className="mt-3 text-gray-200 dark:text-gray-100">be the first to knows when our <span className="font-medium text-green-400">New Assignment</span> is uploaded</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>

                        <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-green-500">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art"/>
            </div>
        </div>
    </div>
</header>
      </div>
    </div>
  );
};

export default Home;
