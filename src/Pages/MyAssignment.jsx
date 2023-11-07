/* eslint-disable react/prop-types */

// import { useContext } from "react";
// import { AuthContext } from "../providers/Authprovider";

const MyAssignment = ({ assignment }) => {
  const { title, marks, feedback, obtainedMarks, status } = assignment;
  //   const {user} = useContext(AuthContext);
  // console.log(user?.email);

  return (
    <tr className=" text-white">
      <td>
        <h1>{title}</h1>
      </td>
      <td>
        <h1>{marks}</h1>
      </td>
      <td>
        <h1>{status}</h1>
      </td>
      <th>
        <h1>{obtainedMarks}</h1>
      </th>
      <th>
        <h1>{feedback}</h1>
      </th>
    </tr>
  );
};

export default MyAssignment;
