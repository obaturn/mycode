import { createBrowserRouter } from "react-router-dom";
import Apps from './Components/Apps.jsx'

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Apps />
    }

])


export default routes