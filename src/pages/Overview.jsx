const Overview = () => {
    return (
        <div className="p-1 font-roboto">
            <nav className="bg-[#e4f4f3] rounded-lg grid grid-cols-3 px-3 py-2">
                <div className="flex justify-start items-center gap-5">
                    <div className="btn btn-sm btn-ghost text-lg font-bold hover:bg-white/90">Big Machine</div>
                    <div className="btn btn-sm btn-ghost text-lg font-bold hover:bg-white/90">Fabrication</div>
                </div>

                <div className="flex justify-center items-center text-2xl font-bold">Machine Monitoring System</div>

                <div className="flex justify-end items-center">
                    <div>Last Update</div>
                    <div>Icon</div>
                </div>
            </nav>
        </div>
    )
}

export default Overview;