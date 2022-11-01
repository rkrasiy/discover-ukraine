import { Outlet, NavLink } from "react-router-dom";
import { TrackingTitle, SimpleTitle } from "../components/titles";
import Image from "../components/image";

const Layout = ({children}) => {
 let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="flex flex-col h-screen">
        <header className="h-[50px]">
            {/* <nav className="p-4">
                <ul className="flex flex-row gap-4">
                    <li>
                        <NavLink end to="/" className="text-white" style={({isActive}) => (isActive ? activeStyle : null)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="animation" className="text-white" style={({isActive}) => (isActive ? activeStyle : null)}>Animations</NavLink>
                    </li>
                </ul>
            </nav> */}
            <SimpleTitle className="text-white ml-4 mt-4 uppercase font-extrabold" mini>Toukraine <img src="./logo-ukraine.png" className="w-10 inline" /></SimpleTitle>
        </header>
        <main className="flex-grow flex items-center">
           <Outlet />
        </main>
        <footer className="h-[60px] border-sky-800 border-t-4">
        </footer>
    </div>
  )
};

export default Layout;