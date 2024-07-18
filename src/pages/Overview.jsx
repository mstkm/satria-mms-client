import Sync from '../assets/images/sync.png';
import $ from 'jquery';

const Overview = () => {
    const refresh = () => {
        $("#icon-refresh").addClass("animate-spin");
        setTimeout(() => {
            $("#icon-refresh").removeClass("animate-spin");
        }, 1000);
    }

    return (
        <div className="p-1 font-roboto">
            <nav className="bg-[#e4f4f3] rounded-lg grid grid-cols-3 px-3 py-2">
                <div className="flex justify-start items-center gap-5">
                    <div className="btn btn-sm btn-ghost text-base font-bold hover:bg-white/90">Big Machine</div>
                    <div className="btn btn-sm btn-ghost text-base font-bold hover:bg-white/90">Fabrication</div>
                </div>

                <div className="flex justify-center items-center text-xl font-bold">Machine Monitoring System</div>

                <div className="flex gap-8 justify-end items-center">
                    <div className="flex gap-2 items-center">
                        <div onClick={refresh} id="icon-refresh" className="w-4 h-4 cursor-pointer">
                            <img src={Sync} alt="sync" />
                        </div>
                        <div className="font-bold text-sm">Last Update</div>
                    </div>
                    <div className="text-center text-sm">
                        <div>18 Jul 2024, Thursday</div>
                        <div>11:21 WIB</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Overview;