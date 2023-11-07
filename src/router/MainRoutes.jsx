import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Assignments from "../Pages/Assignments";
import Register from "../pages/Register";
import CreateAssignment from "../Pages/CreateAssignment";
import MyAssignments from "../Pages/MyAssignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments";
import ViewAssignments from "../Pages/ViewAssignments";
import UpdateAssignments from "../Pages/UpdateAssignments";
import PrivateRoutes from "./PrivateRoutes";


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
            },
            {
                path:'/createAssignments',
                element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path:'/myAssignments',
                element:<MyAssignments></MyAssignments>
            },
            {
                path:'/submittedAssignments',
                element:<SubmittedAssignments></SubmittedAssignments>
            },
            {
                path:'/viewAssignment/:id',
                element:<ViewAssignments></ViewAssignments>,
                loader: () => fetch('http://localhost:5001/assignments')
            },
            {
                path:'/updateAssignment/:id',
                element:<UpdateAssignments></UpdateAssignments>,
                loader: ({params}) => fetch(`http://localhost:5001/assignments/${params.id}`)
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