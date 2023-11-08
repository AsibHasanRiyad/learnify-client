import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
  const data = useLoaderData();
  const { title, marks, value, date, submittedBy, pdf, _id } = data;
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.marks?.value;
    const feedback = form.feedback?.value;
    if (obtainedMarks > marks) {
      return  Swal.fire({
        icon: "error",
        title: "Invalid",
        text: "Marks should not exceed the Total Marks. Please enter a valid score.",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    const submittedAssignments = {
      obtainedMarks,
      feedback,
      status: "Completed",
    };
    fetch(`https://learnify-server-six.vercel.app/submittedAssignments/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Congratulation",
            text: "Assignment Checked",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      });
  };
  return (
    <section className="  dark:bg-gray-900">
      <Helmet>
      <title>Give Marks</title>
      </Helmet>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className=" text-white space-y-2">
            <h1 className=" text-3xl">
              {" "}
              Assignment Title:{" "}
              <span className="  text-green-400">{title} </span>
            </h1>
            <h1 className=" text-xl">
              Total Marks: <span className="   text-green-400">{marks} </span>
            </h1>
            <h1 className=" text-xl">
              Difficulty Level:{" "}
              <span className="   text-green-400">{value} </span>
            </h1>
            <h1 className=" text-xl">
              Last Submission Date:{" "}
              <span className="   text-green-400">{date} </span>
            </h1>
            <h1 className=" text-xl">
              Assignment Created By:{" "}
              <span className="   text-green-400">{submittedBy} </span>
            </h1>
            <h1 className=" text-xl">
              Assignment Link:{" "}
              <a href={pdf}>
                <span className=" text-lg text-green-400 underline">
                  Click Here to view Assignment
                </span>
              </a>
            </h1>
          </div>

          <div className="p-4 py-6 rounded-lg bg-white dark:bg-gray-800 md:p-8">
            <form onSubmit={handelSubmit}>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Marks
                </label>
                <input
                  type="number"
                  name="marks"
                  required
                  placeholder="123"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Feedback
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Feedback"
                  name="feedback"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F3ADD] rounded-lg hover:bg-[#684BFB] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Give Marks
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveMarks;