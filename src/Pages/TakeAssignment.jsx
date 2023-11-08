import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/Authprovider";
import { Helmet } from "react-helmet-async";

const TakeAssignment = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const submittedBy = user?.email;
  const submitterName = user?.displayName;
  console.log(submitterName);
  const { title, marks, value, description, date, userEmail } = data;
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.pdf?.value;
    const note = form.note?.value;
    const submittedAssignments = {
      pdf,
      note,
      submittedBy,
      submitterName,
      title,
      marks,
      value,
      description,
      date,
      status: "Pending",
      obtainedMarks: "Not Checked",
    };
    // console.log(submittedAssignments);
    // console.log(title, description, marks, date, value);
    fetch("http://localhost:5001/submittedAssignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congratulation",
            text: "Assignment Submitted",
            // footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      });
  };
  return (
    <section className="  dark:bg-gray-900">
      <Helmet>
        <title>Take Assignment</title>
      </Helmet>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <section className=" dark:bg-gray-900">
            <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
              <div className="w-full">
                <div className="lg:max-w-lg">
                  <div className=" flex justify-center items-center my-5 gap-2">
                    <h1 className=" text-4xl text-gray-200 font-semibold">Take </h1>
                  <img className=" w-1/3" src="https://i.ibb.co/PQYKQCS/effort.png" alt="" />
                    <h1 className=" text-4xl text-green-300 font-semibold"> Challenge</h1>
                  </div>
                  <hr />
                  <h1 className="text-3xl mt-4 font-semibold tracking-wide text-gray-200 dark:text-white lg:text-4xl">
                    {title}
                  </h1>

                  <div className="mt-8 space-y-5">
                    <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-green-300"
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
                        className="w-6 h-6 mx-2 text-green-300"
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
                        className="w-6 h-6 mx-2 text-green-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <span className="mx-2">
                        Assignment Created By: {userEmail}
                      </span>
                    </p>
                    <p className="flex items-center -mx-2 text-gray-200 dark:text-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-green-300"
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
{/* 
              <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img
                  className="object-cover w-fit lg:w-full h-fit md:h-full mx-auto rounded-md lg:max-w-2xl"
                  src="https://i.ibb.co/jL0gmL7/oie-q-JRd-T3h6t-Ewk.png"
                  alt="glasses photo"
                />
              </div> */}
            </div>
          </section>

          <div className="p-4 py-6 rounded-lg border dark:bg-gray-800 md:p-8">
            <form onSubmit={handelSubmit}>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                  Submit Your Assignment PDF
                </label>
                <input
                  type="text"
                  name="pdf"
                  required
                  placeholder="assignment.pdf"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#272181] border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-200 dark:text-gray-200">
                  Note
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-[#272181] border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Note"
                  name="note"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F3ADD] rounded-lg hover:bg-[#684BFB] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Submit Assignment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeAssignment;
