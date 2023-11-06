/* eslint-disable react/prop-types */

const Assignment = ({assignment}) => {
    // console.log(assignment);
    const {title, marks,url, value} = assignment
    return (
      <tr className=" text-white">
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
      <td>
        <h1>{marks}</h1>
      </td>
      <td>
      <button className="btn btn-ghost btn-xs hover:bg-green-500">View Assignments</button>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs hover:bg-green-500">Submit Assignments</button>
      </th>
    </tr>
    );
};

export default Assignment;