import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewAssignments = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  console.log(id, loadedData);
  const data = loadedData.find((data) => data._id === id);
  console.log(data);
  const { title, url, description, userEmail, value, marks, _id } = data;

  return (
    <section className=" min-h-screen mt-20">
      <Helmet>
        <title>View Assignment</title>
      </Helmet>
      <div className="container px-6 pt-10 mx-auto">
        <div className="lg:flex  lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-center items-start gap-5">
              <img className=" max-w-sm rounded" src={url} alt="" />
              <div>
                <p className="mb-6 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-200 uppercase">
                  {title}
                </p>
              </div>
            </div>
            <div className=" pt-5">
              <h3 className="text-gray-300 text-3xl font-semibold">
                Product Description:
              </h3>

              <h1 className=" text-gray-300 text-xl pt-2">{description}</h1>
            </div>
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-white capitalize">Total Marks</h3>

              <p className="block mt-2 font-medium text-gray-200    dark:text-gray-400 ">
                {marks}
              </p>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-white capitalize">Difficulty Level</h3>

              <p className="block mt-2 font-medium text-gray-200    dark:text-gray-400 ">
                {value}
              </p>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-white capitalize">Assignment Created By-</h3>

              <p className="block mt-2 font-medium text-gray-200    dark:text-gray-400 ">
                {userEmail}
              </p>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />
            <Link to={`/takeAssignment/${_id}`}>
              <button className="px-6 py-3 text-sm font-medium tracking-wide text-gray-100 capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Take Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="w-full ">
        <div className="container relative flex flex-col  px-6 mt-10 lg:mt-20 mx-auto">
          <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
              <h1 className="text-4xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                <span className=" text-gray-300">Question</span>

                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-cyan-500 to-green-500">
                  Unclear?
                </span>
              </h1>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-200 dark:text-white md:text-xl">
                Please articulate the perplexity that troubles you, and we will
                embark upon the task of unraveling it with the utmost eloquence
                and meticulous precision
              </p>

              <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <input
                  id="email"
                  type="text"
                  className="px-6 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2"
                  placeholder="Problem Details"
                />

                <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default ViewAssignments;
