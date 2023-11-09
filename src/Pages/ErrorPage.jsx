
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
              <main>
            <div
             style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='4560' preserveAspectRatio='none' viewBox='0 0 1440 4560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1752%26quot%3b)' fill='none'%3e%3crect width='1440' height='4560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1753%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L939.03 0L1440 2260.5z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M939.03 0L1440 2260.5L1440 3211.2200000000003L741.29 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M741.29 0L1440 3211.2200000000003L1440 3600.5400000000004L644.3199999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M644.3199999999999 0L1440 3600.5400000000004L1440 4165.42L437.03 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 4560L281.46 4560L0 4402.12z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 4402.12L281.46 4560L513.18 4560L0 1970.3899999999999z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 1970.3899999999999L513.18 4560L664.66 4560L0 1187.35z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 1187.35L664.66 4560L832.3 4560L0 399.67999999999995z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1752'%3e%3crect width='1440' height='4560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-54.17%25' y1='82.89%25' x2='154.17%25' y2='17.11%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1753'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(49%2c 28%2c 155%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
              }}
            className=" mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <div className=' flex items-center justify-center'>
                        <img className=' w-1/2' src="https://i.ibb.co/WpBbkVY/sad-scared.gif" alt="" />
                    </div>
                    <hr />
                    <h3 className="text-gray-200 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-100 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-100">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <NavLink to={'/'} href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            Go back to Home
                        </NavLink>
                        <a href="javascript:void(0)" className="block py-2 px-4 text-gray-200 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </a>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
};

export default ErrorPage;