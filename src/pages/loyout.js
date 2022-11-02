import { Outlet } from "react-router-dom";
import { SimpleTitle } from "../components/titles";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
        <header className="h-[50px] fixed left-0 top-0 w-screen">
            <SimpleTitle className="text-white ml-4 mt-4 uppercase font-extrabold" mini>Toukaine<img src="./logo-ukraine.png" className="w-10 inline" alt="Ukraine logo"/></SimpleTitle>
        </header>
        <main className="flex-grow flex items-center">
           <Outlet />
        </main>
        <footer className="border-sky-800 lg:border-t-4 border-t-2 fixed left-0 bottom-0 w-screen">
            <img src="./icons/ukraine-pattern.png" alt="ukraine pattern" className="w-full" />
        </footer>
    </div>
  )
};

export default Layout;