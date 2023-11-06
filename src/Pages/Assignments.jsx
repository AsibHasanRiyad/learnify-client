import Assignment from "./Assignment";
import { FaArrowDown } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("all");
  const {user} = useContext(AuthContext)
  console.log('sdfksdjsdf',user?.email);
  useEffect(() => {
    fetch("http://localhost:5001/assignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);
  const handelSelect = (e) => {
    e.preventDefault();
    setLevel(e.target.value);
  };
  return (
    <div className=" px-20 mt-10">
      <h1 className=" flex justify-center items-center gap-2 text-4xl font-medium text-white text-center my-10">
        {" "}
        Current Assignments{" "}
        <FaArrowDown className=" text-green-300"></FaArrowDown>{" "}
      </h1>
      <div className=" flex justify-end">
        <select
          onChange={handelSelect}
          className="select select-primary block w-1/4 px-4  my-5 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        >
          <option disabled selected>
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
              <th>Remove</th>
              <th>Name</th>
              <th>Created By</th>
              <th>Marks</th>
              <th>Details</th>
              <th>Update</th>
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
                  <Assignment
                    key={assignment._id}
                    assignment={assignment}
                    assignments={assignments}
                    setAssignments={setAssignments}
                  ></Assignment>
                ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
