import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='4560' preserveAspectRatio='none' viewBox='0 0 1440 4560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1752%26quot%3b)' fill='none'%3e%3crect width='1440' height='4560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1753%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L939.03 0L1440 2260.5z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M939.03 0L1440 2260.5L1440 3211.2200000000003L741.29 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M741.29 0L1440 3211.2200000000003L1440 3600.5400000000004L644.3199999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M644.3199999999999 0L1440 3600.5400000000004L1440 4165.42L437.03 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 4560L281.46 4560L0 4402.12z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 4402.12L281.46 4560L513.18 4560L0 1970.3899999999999z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 1970.3899999999999L513.18 4560L664.66 4560L0 1187.35z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 1187.35L664.66 4560L832.3 4560L0 399.67999999999995z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1752'%3e%3crect width='1440' height='4560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-54.17%25' y1='82.89%25' x2='154.17%25' y2='17.11%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1753'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(49%2c 28%2c 155%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        // }}
        className=" h-screen flex justify-center items-center bg-[#07052f]"
      >
        {/* <span className="loading loading-spinner text-white loading-lg"></span> */}
        <img
          className=" w-64"
          src="https://i.ibb.co/WpBbkVY/sad-scared.gif"
          alt=""
        />
      </div>
    );
  }
  return (
    <div
    className=" bg-[#07052f]"
      // style={{
      //   // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='4560' preserveAspectRatio='none' viewBox='0 0 1440 4560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3crect width='1440' height='4560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1027%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L1356.89 0L1440 1041.46z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1356.89 0L1440 1041.46L1440 2448.06L1345.3000000000002 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1345.3 0L1440 2448.06L1440 2714.15L1176.75 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1176.75 0L1440 2714.15L1440 3836.09L374.9 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 4560L254.85 4560L0 3448.81z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 3448.81L254.85 4560L617.24 4560L0 3228.25z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 3228.25L617.24 4560L714.26 4560L0 1363.87z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 1363.87L714.26 4560L1012.0699999999999 4560L0 756.7299999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='1440' height='4560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-54.17%25' y1='82.89%25' x2='154.17%25' y2='17.11%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1027'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(87%2c 55%2c 251%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`

      //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='4560' preserveAspectRatio='none' viewBox='0 0 1440 4560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1752%26quot%3b)' fill='none'%3e%3crect width='1440' height='4560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1753%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L939.03 0L1440 2260.5z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M939.03 0L1440 2260.5L1440 3211.2200000000003L741.29 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M741.29 0L1440 3211.2200000000003L1440 3600.5400000000004L644.3199999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M644.3199999999999 0L1440 3600.5400000000004L1440 4165.42L437.03 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 4560L281.46 4560L0 4402.12z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 4402.12L281.46 4560L513.18 4560L0 1970.3899999999999z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 1970.3899999999999L513.18 4560L664.66 4560L0 1187.35z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 1187.35L664.66 4560L832.3 4560L0 399.67999999999995z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1752'%3e%3crect width='1440' height='4560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-54.17%25' y1='82.89%25' x2='154.17%25' y2='17.11%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1753'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(49%2c 28%2c 155%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,

      //   // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='5060' preserveAspectRatio='none' viewBox='0 0 1440 5060'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1015%26quot%3b)' fill='none'%3e%3crect width='1440' height='5060' x='0' y='0' fill='rgba(10%2c 17%2c 104%2c 1)'%3e%3c/rect%3e%3cpath d='M-252.45 3116.77 a353.57 353.57 0 1 0 707.14 0 a353.57 353.57 0 1 0 -707.14 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1196.67%2c888.649C1271.92%2c891.509%2c1357.556%2c888.792%2c1397.617%2c825.028C1439.348%2c758.606%2c1416.355%2c672.639%2c1373.77%2c606.762C1335.01%2c546.802%2c1268.037%2c516.248%2c1196.67%2c514.17C1120.863%2c511.963%2c1039.487%2c530.696%2c1000.758%2c595.901C961.404%2c662.158%2c977.688%2c746.65%2c1020.548%2c810.695C1058.818%2c867.881%2c1127.91%2c886.035%2c1196.67%2c888.649' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M682.54 2466.17 a362.02 362.02 0 1 0 724.04 0 a362.02 362.02 0 1 0 -724.04 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M356.69 4625.82 a323.79 323.79 0 1 0 647.58 0 a323.79 323.79 0 1 0 -647.58 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M694.7 4066.68 a439.19 439.19 0 1 0 878.38 0 a439.19 439.19 0 1 0 -878.38 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M213.688%2c628.548C344.726%2c635.482%2c484.192%2c590.284%2c547.506%2c475.348C609.255%2c363.254%2c560.335%2c230.192%2c493.119%2c121.288C430.049%2c19.102%2c333.763%2c-64.25%2c213.688%2c-65.504C91.675%2c-66.778%2c-17.545%2c8.258%2c-76.041%2c115.343C-132.194%2c218.14%2c-121.663%2c340.985%2c-64.078%2c442.987C-5.407%2c546.912%2c94.512%2c622.242%2c213.688%2c628.548' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1015'%3e%3crect width='1440' height='5060' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`
      // }}
    >
      <Navbar></Navbar>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
