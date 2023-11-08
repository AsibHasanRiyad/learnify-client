// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/Authprovider";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  // console.log(data);
  const { title, marks, url, value, description, date, _id, userEmail } = data;
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [level, setLevel] = useState("");
  const handelSelect = (e) => {
    e.preventDefault();
    // setLevel(e.target.value);
    // console.log('CHanginng');
    // console.log(e.target.value);
    setLevel(e.target.value);
  };
  //   console.log(level);
  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const url = form.url.value;
    const date = form.date.value;
    const updatedData = { title, description, marks, url, date, level };
    // console.log(updatedData);
    if (email === userEmail) {
      fetch(`https://learnify-server-six.vercel.app/assignments/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount) {
            Swal.fire({
              icon: "success",
              title: "Congratulation",
              text: "Assignment Updated",
            });
          }
          navigate('/assignments')
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "The assignment's creator alone can Update it",
      });
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <section className=" w-full lg:w-[70vw] p-6 mx-auto bg-transparent rounded-md dark:bg-gray-800">
        <h2 className="text-4xl mb-10 text-center font-semibold text-gray-200 capitalize dark:text-white">
          Update Assignments
        </h2>

        <form onSubmit={handelUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-200 dark:text-gray-200">Title</label>
              <input
                type="text"
                name="title"
                required
                defaultValue={title}
                className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Description
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                required
                className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">Marks</label>
              <input
                name="marks"
                type="number"
                defaultValue={marks}
                required
                className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Thumbnail URL
              </label>
              <input
                name="url"
                type="text"
                defaultValue={url}
                required
                className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Difficulty Level
              </label>
              <select
                onChange={handelSelect}
                required
                defaultValue={value}
                className="select select-primary block w-full px-4  mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled>Choose Difficulty Level</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Due Date
              </label>
              <input
                type="date"
                name="date"
                required
                defaultValue={date}
                className="block w-full px-4 py-3 mt-2 text-gray-600 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-3 leading-5 text-[#4533CF] transition-colors duration-300 transform bg-white rounded-md hover:bg-[#684BFB] hover:text-white focus:outline-none focus:bg-green-400 focus:text-white"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateAssignment;
