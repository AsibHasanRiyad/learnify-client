/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/Authprovider";

const Assignment = ({ assignment, setAssignments, assignments}) => {
  const { title, marks, url, value, userEmail, _id } = assignment;
  const {user} = useContext(AuthContext);
  // console.log(user?.email);

  //delete
  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed && user?.email === userEmail) {
        fetch(`https://learnify-server-six.vercel.app/assignments/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Assignments has been deleted.",
                icon: "success"
              });
            }
            const remaining = assignments.filter( assignment => assignment._id !== _id);
            console.log(remaining);
            setAssignments(remaining)
          });
      }
      else{
        Swal.fire({
          title: "Unauthorized!",
          text: "The assignment's creator alone can delete it.",
          icon: "error"
        });
      }
    });

  };
  
  return (
    <tr className=" text-white">
      <td onClick={() => handelDelete(_id)}>
        <button className="btn btn-circle btn-outline btn-sm text-gray-300 hover:bg-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24 mr-5">
              <img src={url} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{value}</div>
          </div>
        </div>
      </td>
      <td>{userEmail}</td>
      <td>
        <h1>{marks}</h1>
      </td>
      <td>
        <Link to={`/viewAssignment/${_id}`}>
          <button className="btn btn-ghost btn-sm hover:bg-green-500 ">
            View{" "}
          </button>
        </Link>
      </td>
      <th>
        <Link to={`/updateAssignment/${_id}`}>
        <button className="btn btn-ghost btn-sm hover:bg-green-500">
          Update
        </button>
        </Link>
      </th>
    </tr>
  );
};

export default Assignment;
