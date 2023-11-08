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
                <p className="mb-6 text-2xl md:text-3xl lg:text-5xl text-white uppercase">{title}</p>
              </div>
            </div>
            <div className=" pt-5">
              <h3 className="text-green-400 text-4xl capitalize">
                Product Description:
              </h3>

              <h1 className=" text-gray-200 text-xl pt-2">{description}</h1>
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
             <button
                className=" flex  justify-center items-center gap-2 outline rounded py-2 px-4 my-4 text-green-400 outline-green-400 hover:outline-none hover:bg-green-400 hover:text-white transform hover:scale-105 transition duration-600 ease-in "
              >
                Take Assignments
              </button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAssignments;
