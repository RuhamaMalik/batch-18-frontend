import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Form from "../components/Form";


const router = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
           index:true,
            element:<Home/>
        },{
            path:'forgot-password',
            element:<ForgotPassword/>
        
        },{
            path:'reset-password',
            element:<ResetPassword/>
        },{
            path:'auth',
            element:<Form/>
        }
    ]
}
]);


export default router;