import Assignment from "./Assignment";
import { FaArrowDown } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import './../CSS/Assignments.css'

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [level, setLevel] = useState("all");
  const { user } = useContext(AuthContext);
  // console.log('sdfksdjsdf',user?.email);
  const [currentPage ,setCurrentPage] = useState(0)
  console.log(currentPage);

  //pagination
  const {count} = useLoaderData();
  // console.log(count);
  const assignmentPerPage = 5;
  const numberOfPage = Math.ceil(count / assignmentPerPage);
  // console.log(numberOfPage);
  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i)
  }
  // console.log(pages);




  useEffect(() => {
    fetch(`https://learnify-server-two.vercel.app/assignments?email=${user?.email}&page=${currentPage}&size=${assignmentPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, [user?.email, currentPage]);
  const handelSelect = (e) => {
    e.preventDefault();
    setLevel(e.target.value);
  };

  return (
    <div className=" px-4 md:px-8 lg:px-20 mt-10">
      <Helmet>
        <title>Assignments</title>
      </Helmet>
      <h1 className=" flex justify-center items-center gap-2 text-4xl font-medium text-white text-center my-10">
        {" "}
        Current Assignments{" "}
        <FaArrowDown className=" text-green-300"></FaArrowDown>{" "}
      </h1>
      <div className=" flex justify-end">
        <select
          onChange={handelSelect}
          className="select select-primary block w-3/4 md:w-1/2 lg:w-1/4 px-4  my-5 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        >
          <option disabled>Filter By Difficulty Level</option>
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
      
      {/* pagination */}
      <div className=" text-center mt-10 pagination">
          {
            pages.map(page => <button
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page ? 'selected btn  mx-3 btn-sm' : 'btn mx-3 btn-sm'
              }
              key={page}> {page} </button>)
          }
      </div>
    </div>
  );
};

export default Assignments;
