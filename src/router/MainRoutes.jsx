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
import TakeAssignment from "../Pages/TakeAssignment";
import GiveMarks from "../Pages/GiveMarks";
import ErrorPage from "../Pages/ErrorPage";


const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/assignments',
                element:<Assignments></Assignments>,
                loader:() => fetch('https://learnify-server-two.vercel.app/assignmentsCount')
            },
            {
                path:'/createAssignments',
                element:<PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path:'/myAssignments',
                element:<PrivateRoutes><MyAssignments></MyAssignments></PrivateRoutes>
            },
            {
                path:'/submittedAssignments',
                element:<PrivateRoutes><SubmittedAssignments></SubmittedAssignments></PrivateRoutes>
            },
            {
                path:'/viewAssignment/:id',
                element:<PrivateRoutes><ViewAssignments></ViewAssignments></PrivateRoutes>,
                loader: () => fetch('https://learnify-server-two.vercel.app/assignments')
            },
            {
                path:'/updateAssignment/:id',
                element:<PrivateRoutes><UpdateAssignments></UpdateAssignments></PrivateRoutes>,
                loader: ({params}) => fetch(`https://learnify-server-two.vercel.app/assignments/${params.id}`)
            },
            {
                path:'/takeAssignment/:id',
                element:<PrivateRoutes><TakeAssignment></TakeAssignment></PrivateRoutes>,
                loader: ({params}) => fetch(`https://learnify-server-two.vercel.app/assignments/${params.id}`)
            },
            {
                path:'/giveMarks/:id',
                element:<PrivateRoutes><GiveMarks></GiveMarks></PrivateRoutes>,
                loader: ({params}) => fetch(`https://learnify-server-two.vercel.app/submittedAssignments/${params.id}`)
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