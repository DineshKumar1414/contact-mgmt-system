import contact from '../utils/contact.png';
import bar from '../utils/maps.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm hover:bg-green-500 focus:bg-green-500 focus-within:bg-green-500 ">
                                <Link
                                    to="/"
                                    className="flex  items-center p-2 space-x-3 rounded-md"
                                >                                    
                                    <span className="hover:text-white focus:text-white focus-within:text-white">Contacts</span>
                                    <img width="20" height="20" src={contact} />
                                </Link>
                            </li>
                            <li className="rounded-sm hover:bg-green-500 focus:bg-green-500 focus-within:bg-green-500 ">
                                <Link
                                    to="/chart-and-maps"
                                    className="flex  items-center p-2 space-x-3 rounded-md">                          
                                    <span className="hover:text-white focus:text-white focus-within:text-white">Charts And Maps</span> 
                                    <img width="20" height="20" src={bar} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}