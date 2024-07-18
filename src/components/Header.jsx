import { useNavigate } from 'react-router-dom';
import Sync from '../assets/images/sync.png';
import { FiMenu } from "react-icons/fi";

const Header = ({ onReloadData  }) => {
    const navigate = useNavigate();
    const directTo = (page) => {
        navigate(`/satria-mms/${page}`);
    }
    const goToWebportal = () => {
        window.location.href = "https://satria-apps.patria.co.id/satria/welcome";
    }
    
    const handleReload = () => {
        onReloadData();
    }
    
    return (
        <nav className="bg-[#e4f4f3] rounded-lg grid grid-cols-3 px-3 py-2">
            <div className="flex justify-start items-center gap-5">
                <div>
                    <details className="dropdown">
                        <summary className="btn btn-sm btn-ghost text-base font-bold hover:bg-white/90 m-1">Big Machine</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => directTo("overview")}><a>Overview</a></li>
                            <li onClick={() => directTo("machine")}><a>Machine</a></li>
                        </ul>
                    </details>
                </div>
                <div>
                <details className="dropdown">
                        <summary className="btn btn-sm btn-ghost text-base font-bold hover:bg-white/90 m-1">Fabrication</summary>
                        {/* <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul> */}
                    </details>
                </div>
            </div>

            <div className="flex justify-center items-center text-xl font-bold">Machine Monitoring System</div>

            <div className="flex gap-8 justify-end items-center">
                <div className="flex gap-2 items-center">
                    <div onClick={handleReload} id="icon-refresh" className="w-4 h-4 cursor-pointer">
                        <img src={Sync} alt="sync" />
                    </div>
                    <div className="font-bold text-sm">Last Update</div>
                </div>
                <div className="text-center text-sm">
                    <div>18 Jul 2024, Thursday</div>
                    <div>11:21 WIB</div>
                </div>
                <div>
                    <details className="dropdown dropdown-end">
                        <summary className="btn btn-sm btn-ghost px-1 m-1"><FiMenu size={25} /></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => goToWebportal()}><a>Go to Webportal</a></li>
                        </ul>
                    </details>
                </div>
            </div>
        </nav>
    )
}

export default Header;