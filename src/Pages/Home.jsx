import Faq from "../components/Faq";


const Home = () => {
    return (
        <div>
            <div className=" flex items-center flex-col md:flex-row gap-4 lg:gap-10 w-full px-4 lg:px-20 mt-10">
            <div className=" flex-1">
                <h1 className=" text-4xl lg:text-6xl font-semibold text-gray-100 ">Join Learnify <br /> <span className=" ">Share  Assignments</span> <br /> Boost your   <span className=" text-green-400">performance</span> </h1>
                <button className=" btn btn-outline text-white mt-5">Explore More </button>
            </div>
            <div className=" w-full lg:w-[40vw]">
                <img src="https://i.ibb.co/jL0gmL7/oie-q-JRd-T3h6t-Ewk.png" alt="" />
            </div>
        </div>

        <Faq></Faq>
        </div>
    );
};

export default Home;