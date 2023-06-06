
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import { useState,useEffect } from "react";
import Sidebar from "./Components/SideBar";
import hamburger from "./utils/Hamburger_icon.svg.png"
import leftArrow from "./utils/left-arrow.png";
const drawerWidth = 240;

interface MainProps {
  children: React.ReactNode;
  open?: boolean;
}

const Main = (props: MainProps) => {
  const [open, setOpen] = useState(false);

  return (
    <main
      className={`flex-grow px-3 transition duration-200 ease-in-out ${open ? 'ml-0' : `ml-[0px]`
        }`}
    >
      {props.children}
    </main>
  );
};

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
  const [open, setOpen] = useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      handleDrawerClose();
    }
    else{
      handleDrawerOpen();
    }
  }, [window.innerWidth]);

  const AppBar = (props: MainProps) => {
    const [open, setOpen] = useState(true);

    return (
      <header
        className={`transition duration-200 ease-in-out ${open ? `w-full ml-0` : `w-full ml-0`
          }`}
      >
        {props.children}
      </header>
    );
  };
 
  return (
    <div className="App select-none">
      <div className='flex w-full '>
        <div className='sticky bg-white  top-0 h-screen'>
          <br />
          <div
            className={`w-[${drawerWidth}px] flex-shrink-0 bg-white ${open ? 'block' : 'hidden'}`}>
            <div className="mt-0">
              <Sidebar />
            </div>
          </div></div>
        <div className='w-full '>
          <Main open={open}>
            <AppBar>
              <div className='z-50 w-full flex flex-row flex-start fixed shadow-sm shadow-slate-700 top-0 left-0 text-2xl  text-white bg-green-500 font-bold p-4 text-center'>
                <button
                  className="w-[50px] p-2 text-left"
                  onClick={open ? handleDrawerClose : handleDrawerOpen}
                >
                  <img width="25" height="25" src={open ? leftArrow : hamburger} />
                </button>
                <h1 className="text-center">
                  {
                    currentRoute == "/" ? ' Contact Pages' : "Charts and Maps"
                  }
                </h1></div>

            </AppBar>
            <AllRoutes />
          </Main></div></div>
    </div>
  );
}

export default App;
