import { Outlet } from "react-router-dom";
import { SimpleTitle } from "../components/titles";


const Layout = () => {

  return (
    <div className="flex flex-col h-screen">
        <header className="h-[50px]">
            <SimpleTitle className="text-white ml-4 mt-4 uppercase font-extrabold" mini>Toukraine <img src="./logo-ukraine.png" className="w-10 inline" alt="logotipo"/></SimpleTitle>
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