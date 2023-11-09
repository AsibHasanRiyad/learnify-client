import { FaArrowDown } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import MyAssignment from "./MyAssignment";
import { Helmet } from "react-helmet-async";

const MyAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("all");
  const {user} = useContext(AuthContext)
  useEffect(() => {
    fetch(`https://learnify-server-six.vercel.app/submittedAssignments?submittedBy=${user?.email}`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, [user?.email]);
  const handelSelect = (e) => {
    e.preventDefault();
    setLevel(e.target.value);
  };
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-10">
      <Helmet>
        <title>My Assignment</title>
      </Helmet>
      <h1 className=" flex justify-center items-center gap-2 text-4xl font-medium text-white text-center my-10">
        {" "}
        My Assignments{" "}
        <FaArrowDown className=" text-green-300"></FaArrowDown>{" "}
      </h1>
      <div className=" flex justify-end">
        <select
          onChange={handelSelect}
          className="select select-primary block w-3/4 md:w-1/2 lg:w-1/4 px-4  my-5 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        >
          <option disabled>
            Filter By Difficulty Level
          </option>
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className=" text-green-400 text-lg">
              <th>Title</th>
              <th>Total Marks</th>
              <th>Status</th>
              <th>Obtained Marks</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            <>
              {assignments
                .filter((assignment) => {
                  if (assignment.value === level) {
                    return assignment.value;
                  } else if (level === "all") {
                    return assignment;
                  }
                })
                .map((assignment) => (
                  <MyAssignment
                    key={assignment._id}
                    assignment={assignment}
                    assignments={assignments}
                    setAssignments={setAssignments}
                  ></MyAssignment>
                ))}
            </>
          </tbody>
        </table>
      </div>
      <div className=" flex items-center justify-center mt-4 lg:mt-20">
        <img className=" w-full md:w-1/3 h-fit" src="https://i.ibb.co/C8b8gr0/FAGNpl2-HV150.png" alt="" />
      </div>
    </div>
  );
};

export default MyAssignments;