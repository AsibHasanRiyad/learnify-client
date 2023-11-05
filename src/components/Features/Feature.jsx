/* eslint-disable react/prop-types */

const Feature = ({ feature }) => {
  const { featureName, image } = feature;
  return (
    <div className="relative flex flex-col mt-6 text-white bg-[#4F3ADD] shadow-md  rounded-xl bg-clip-border transform hover:scale-110 transition duration-500 ease-out cursor-pointer">
      <div className="p-6">
        <div className=" flex justify-center">
          <img className=" w-16" src={image} alt="" />
        </div>
        <h5 className="block mb-2 font-sans text-base text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {featureName}
        </h5>
      </div>
      <div className="p-6 pt-0">
        <a
          className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
          href="#"
        >
          {/* <button
            className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
          </button> */}
        </a>
      </div>
    </div>
  );
};

export default Feature;
