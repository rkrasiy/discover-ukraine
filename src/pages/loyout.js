import { Outlet, NavLink } from "react-router-dom";
import { TrackingTitle, SimpleTitle } from "../components/titles";

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
            <SimpleTitle className="text-white ml-4 mt-4 uppercase font-bold" small>Toukraine</SimpleTitle>
        </header>
        <main>
           <Outlet />
        </main>
        <footer className="h-[60px] bg-contain mt-auto border-slate-700 border-t-4">
        </footer>
    </div>
  )
};

export default Layout;