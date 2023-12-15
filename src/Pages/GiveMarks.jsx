import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

const GiveMarks = () => {
  const data = useLoaderData();
  const { title, marks, value, date, submitterName, pdf, _id } = data;
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.marks?.value;
    const feedback = form.feedback?.value;
    // if (obtainedMarks > marks) {
    //   return  Swal.fire({
    //     icon: "error",
    //     title: "Invalid",
    //     text: "Marks should not exceed the Total Marks. Please enter a valid score.",
    //     // footer: '<a href="#">Why do I have this issue?</a>'
    //   });
    // }
    const submittedAssignments = {
      obtainedMarks,
      feedback,
      status: "Completed",
    };
    fetch(`http://localhost:5001/submittedAssignments/${_id}`, {
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
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
      <Helmet>
        <title>Give Marks</title>
      </Helmet>

      {/*  */}
      <section className=" dark:bg-gray-900">
        <div className="container flex flex-col px-6 pt-10 pb-5 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-2/3">
            <div className="">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-200 dark:text-white lg:text-4xl">
                {title}
              </h1>

              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="mx-2">Total Marks: {marks} </span>
                </p>

                <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="mx-2">Difficulty Level: {value}</span>
                </p>

                <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="mx-2">Submitted By: {submitterName}</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span className="mx-2">Last Submission Date: {date}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className=" w-full md:w-1/2 mx-auto rounded-md lg:max-w-2xl"
              src="https://i.ibb.co/0XKG3nG/s-Zt-Fglt-Ujm-Zi.png"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>

      {/* pdf viewer */}
      <div className="container px-6 py-5 mx-auto">
        <div className="grid grid-cols-1 gap-12  lg:grid-cols-2">

          {/* form */}
          <div className="p-4 py-6 rounded-lg border border-white dark:bg-gray-800 md:p-8">
            <form onSubmit={handelSubmit}>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                  Marks:
                </label>
                <input
                  type="number"
                  name="marks"
                  required
                  placeholder="123"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-200 bg-transparent border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                  Feedback:
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-200 placeholder-gray-400 bg-transparent border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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

          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "440px",
            }}
          >
            {" "}
            <h1 className=" bg-white text-center text-gray-800 text-xl py-2 font-semibold">
              Assignment Preview
            </h1>
            <Viewer fileUrl={pdf} />;
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiveMarks;
