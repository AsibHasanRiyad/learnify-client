import { useState } from "react";

const CreateAssignment = () => {
    const [value, setValue] = useState('')
    const handelSelect = e =>{
        e.preventDefault();
        setValue(e.target.value)
        
    }
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const url = form.url.value;
    const date = form.date.value;
    console.log(title, description, marks, url, date, value);
  };
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <section className=" w-[70vw] p-6 mx-auto bg-transparent rounded-md dark:bg-gray-800">
        <h2 className="text-4xl mb-10 text-center font-semibold text-gray-200 capitalize dark:text-white">
          Create Assignments
        </h2>

        <form onSubmit={handelSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-200 dark:text-gray-200">Title</label>
              <input
                type="text"
                name="title"
                className="block w-full px-4 py-3 mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Description
              </label>
              <input
                type="text"
                name="description"
                className="block w-full px-4 py-3 mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">Marks</label>
              <input
                name="marks"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Thumbnail URL
              </label>
              <input
                name="url"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-200 dark:text-gray-200">
                Difficulty Level
              </label>
              <select onChange={handelSelect} className="select select-primary block w-full px-4  mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                <option disabled selected >
                  Choose Difficulty Level
                </option>
                <option value="easy">Easy</option>
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
                className="block w-full px-4 py-3 mt-2 text-gray-200 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-3 leading-5 text-[#4533CF] transition-colors duration-300 transform bg-white rounded-md hover:bg-[#4533CF] hover:text-white focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateAssignment;
