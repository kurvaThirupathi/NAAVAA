import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/naavaa_logo.png";

const NavItem = ({to,label,end = false,activePaths = [],}) => {

    return (

        <NavLink
            to={to}
            end={end}

            className={({ isActive }) => {

                const currentPath = window.location.pathname;
                const customActive =
                    activePaths.some(
                        (path) =>
                            currentPath.startsWith(path)
                    );
                const active = isActive || customActive;
                return active ? "text-[#002147] text-[14px]  bg-white px-2.5 py-2 rounded-sm": "text-white text-[14px] hover:bg-white hover:rounded-sm hover:text-[#002147] transition px-2.5 py-2 ";

            }}>{label}</NavLink>

    );
};

const Header = () => {

    return (
        <header>
            {/* <div className="relative z-[999]  px-0">
                <div className="w-full mx-auto fixed top-0">
                    <div className="flex justify-between items-center mx-10 mt-2">
                        <div>
                            <img src={logo} width={80} height={80} alt="naavaa" />
                        </div>
                        <div className="">
                            <Link to="/login" className="bg-gradient-to-b from-white from-0% to-[#d7e1d8] to-100% tracking-[-0.14px] text-[#263238] z-[2] rounded-[52px] px-[23px] py-[13px] text-[14px] font-medium transition-all duration-[400ms] relative hover:text-white before:content-['']
    before:bg-[#011c1a] before:opacity-0 before:invisible before:-z-[1]
    before:rounded-[52px] before:w-full before:h-full before:transition-all before:duration-[400ms] before:absolute before:top-0 before:left-0 hover:before:opacity-100 hover:before:visible">Login</Link>
                        </div>

                    </div>

                </div>
            </div> */}
             <div className="flex bg-[#002147] items-center justify-between">
              <div className="text-[13px] font-medium px-6 py-3 text-white flex gap-2 items-center justify-center">
                    <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                    </svg> +91 95050 60683
                </div>
                <div className="px-6 py-3">
                    <Link to="/login" className="text-[13px] font-md px-3 py-2 !tex-white bg-white rounded-sm opacity-50 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Login</Link>
                </div>

        </div> 
           
            <nav className="absolute left-0 top-14 z-50 w-[98%] mx-auto">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <div className="ms-4">
                            <Link to="/"><img src={logo} width={60} height={60} alt="naavaa" /></Link>
                    </div>
                    <div className="flex items-center ">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden  justify-between items-center  lg:flex lg:w-auto" id="mobile-menu-2">
                        <ul className="flex flex-col  font-medium lg:flex-row lg:space-x-6 lg:mt-0 text-sm">
                            <li>
                                <NavItem to="/" label="Home" end />
                            </li>
                            <li>
                               {/* <NavItem to="/alumni" label="Alumni" /> */}
                               <NavLink to="/alumni" onClick={(e) => e.preventDefault()} className="text-white text-[14px] opacity-50 cursor-not-allowed px-2.5 py-2">Alumni</NavLink>
                            </li>
                            <li>
                                <NavItem to="/events" label="Events" />
                            </li>
                            <li>
                                {/* <NavItem to="/stories" label="Stories" activePaths={[ "/story/" ]}/> */}
                                <NavItem to="/stories" label="Stories"/>
                            </li>
                            <li>
                               <NavItem to="/gallery" label="Gallery"/>
                            </li>
                            <li>
                                <NavItem to="/notice-board" label="Notice Board"/>
                            </li>
                            <li>
                                <NavItem to="/contact" label="Contact Us" />
                            </li>
                        </ul>
                        </div>
                </div>
                  
            </nav>
        </header>
       

    );
};





export default Header;