import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending....");

    emailjs
      .sendForm(
        "service_hbp47fl",
        "template_jb2jogd",
        form.current,
        "PR07K8CX4TXAFdHfO"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Successfully Sent...", { id: toastId });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="bg-transparent pt-6 md:pt-10 lg:pt-20">
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:items-start lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6 ">
            <h1 className=" text-green-400 text-5xl font-bold ">
              Get In Touch
            </h1>
          </div>

          <div className=" lg:w-1/2 lg:mx-6 mt-10 lg:mt-0">
            <div className="w-full px-1 md:px-8 mx-auto overflow-hidden bg-transparent rounded-lg   lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-medium text-gray-200">
                What do you want to ask ?
              </h1>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-200 placeholder-gray-300  bg-transparent rounded-md border     focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    name="from_email"
                    placeholder="Enter your email"
                    className="block w-full px-5 py-3 mt-2 text-gray-200 placeholder-gray-300  bg-transparent rounded-md border     focus:-violet-500  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-base text-gray-200 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-200 placeholder-gray-300  bg-transparent rounded-md border focus:-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  value="Send"
                  className="w-full px-6 py-3 mt-6 text-base font-medium tracking-wide text-white capitalize bg-green-400 rounded-md transform hover:scale-105 transition duration-500 ease-out "
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
