import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='4560' preserveAspectRatio='none' viewBox='0 0 1440 4560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3crect width='1440' height='4560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1027%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L1356.89 0L1440 1041.46z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1356.89 0L1440 1041.46L1440 2448.06L1345.3000000000002 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1345.3 0L1440 2448.06L1440 2714.15L1176.75 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1176.75 0L1440 2714.15L1440 3836.09L374.9 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 4560L254.85 4560L0 3448.81z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 3448.81L254.85 4560L617.24 4560L0 3228.25z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 3228.25L617.24 4560L714.26 4560L0 1363.87z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 1363.87L714.26 4560L1012.0699999999999 4560L0 756.7299999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='1440' height='4560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='-54.17%25' y1='82.89%25' x2='154.17%25' y2='17.11%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1027'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(87%2c 55%2c 251%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`
        }}>
            <Navbar></Navbar>
            <div className=" min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;