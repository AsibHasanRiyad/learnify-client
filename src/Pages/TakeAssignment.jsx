import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/Authprovider";

const TakeAssignment = () => {
  const data = useLoaderData();
  const {user} = useContext(AuthContext);
  const submittedBy = user?.email
  const { title, marks, value, description, date, userEmail } = data;
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.pdf?.value;
    const note = form.note?.value;
    const submittedAssignments = {
        pdf, note, submittedBy, title, marks, value, description, date
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
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className=" text-white space-y-2">
            <h1 className=" text-3xl">
              {" "}
              Assignment Title:{" "}
              <span className="  underline text-green-400">{title} </span>
            </h1>
            <h1 className=" text-xl">
              Total Marks:{" "}
              <span className="  underline text-green-400">{marks} </span>
            </h1>
            <h1 className=" text-xl">
              Difficulty Level:{" "}
              <span className="  underline text-green-400">{value} </span>
            </h1>
            <h1 className=" text-xl">
              Last Submission Date:{" "}
              <span className="  underline text-green-400">{date} </span>
            </h1>
            <h1 className=" text-xl">
              Assignment Created By:{" "}
              <span className="  underline text-green-400">{userEmail} </span>
            </h1>
            <h1 className=" text-xl">
              Instruction:{" "}
              <span className=" text-gray-200 text-base">{description} </span>
            </h1>
          </div>

          <div className="p-4 py-6 rounded-lg bg-white dark:bg-gray-800 md:p-8">
            <form onSubmit={handelSubmit}>
              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Submit Your Assignment PDF
                </label>
                <input
                  type="text"
                  name="pdf"
                  required
                  placeholder="assignment.pdf"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Note
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Note"
                  name="note"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#4F3ADD] rounded-lg hover:bg-[#684BFB] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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
