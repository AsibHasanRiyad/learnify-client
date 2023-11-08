import { FaArrowDown } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import SubmittedAssignment from "./SubmittedAssignment";
import { AuthContext } from "../providers/Authprovider";
import { Helmet } from "react-helmet-async";

const SubmittedAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("all");
  const {user} = useContext(AuthContext)
  useEffect(() => {
    fetch(`http://localhost:5001/submittedAssignments`,{credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        // setAssignments(data);
        // console.log(data);
        const pendingAssignments = data?.filter(pendingAssignment => pendingAssignment.status === 'Pending')
        setAssignments(pendingAssignments);
      });
  }, [user?.email]);
  const handelSelect = (e) => {
    e.preventDefault();
    setLevel(e.target.value);
  };
  // console.log(assignments);
  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-10">
      <Helmet>
      <title>Submitted Assignments</title>
      </Helmet>
      <h1 className=" flex justify-center items-center gap-2 text-4xl font-medium text-white text-center my-10">
        {" "}
        Submitted Assignments{" "}
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
              <th>Submitted By</th>
              <th>Total Marks</th>
              <th>Status</th>
              <th>Give Marks</th>
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
                  <SubmittedAssignment
                    key={assignment._id}
                    assignment={assignment}
                    assignments={assignments}
                    setAssignments={setAssignments}
                  ></SubmittedAssignment>
                ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedAssignments;