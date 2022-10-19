import { Outlet, NavLink } from "react-router-dom";

const Layout = ({children}) => {
 let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="flex flex-col justify-between h-screen">
        <header className="h-[50px]">
            <nav className="p-4">
                <ul className="flex flex-row gap-4">
                    <li>
                        <NavLink end to="/" className="text-white" style={({isActive}) => (isActive ? activeStyle : null)}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="animation" className="text-white" style={({isActive}) => (isActive ? activeStyle : null)}>Animations</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    

        <main>
           <Outlet />
        </main>
        <footer className="h-[50px] bg-contain" style={{backgroundImage: "url(./img2a.svg)"}}>
        </footer>
    </div>
  )
};

export default Layout;