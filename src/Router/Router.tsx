import { createBrowserRouter } from "react-router";
import AppLayout from '../components/AppLayout/AppLayout'
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
const router = createBrowserRouter([
      {
        path: '/',
        element : <AppLayout />,
        children: [
             { path: '/',
            element : <Home />
            },
            {
            path: '/home',
            element : <Home />
            },
            {
                path: '/about',
                element : <About />
            },
            {
                path: '/contact',
                element : <Contact />
            },
            {
                path: '/service',
                element : <Services />
            },
                {path: '/pricing',
                element : <Pricing />}
        ]
    }
])

export default router