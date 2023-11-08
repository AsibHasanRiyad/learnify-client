/* eslint-disable react/prop-types */

// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/Authprovider";

const SubmittedAssignment = ({ assignment }) => {
  const { title, marks, submittedBy, _id,status , submitterName} = assignment;
  //   const {user} = useContext(AuthContext);
  // console.log(user?.email);

  return (
    <tr className=" text-white">
      <td>
        <h1>{title}</h1>
      </td>
      <td>
        <h1 className=" text-lg text-gray-200">{submitterName}</h1>
        <h1 className=" text-sm text-gray-400">{submittedBy}</h1>
      </td>
      <td>
        <h1>{marks}</h1>
      </td>
      <td>
        <h1>{status}</h1>
      </td>
      <th>
        <Link to={`/giveMarks/${_id}`}>
          <button className="btn btn-ghost btn-sm hover:bg-green-500">
            Give Marks
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default SubmittedAssignment;
