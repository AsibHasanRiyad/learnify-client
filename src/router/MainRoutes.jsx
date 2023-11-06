import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Assignments from "../Pages/Assignments";
import Register from "../pages/Register";
import CreateAssignment from "../Pages/CreateAssignment";
import MyAssignments from "../Pages/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments";


const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/assignments',
                element:<Assignments></Assignments>,
                loader: () => fetch('http://localhost:5001/assignments')
            },
            {
                path:'/createAssignments',
                element:<CreateAssignment></CreateAssignment>
            },
            {
                path:'/myAssignments',
                element:<MyAssignments></MyAssignments>
            },
            {
                path:'/submittedAssignments',
                element:<SubmittedAssignments></SubmittedAssignments>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])

export default MainRoutes;