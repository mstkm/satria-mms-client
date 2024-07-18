import $ from 'jquery';
import Header from "../components/Header";

const Machine = () => {
    document.title = "Machine - MMS";

    const reloadData = () => {
        alert("Reload Data");
        $("#icon-refresh").addClass("animate-spin");
        setTimeout(() => {
            $("#icon-refresh").removeClass("animate-spin");
        }, 1000);
    }

    return (
        <div className="p-1 font-roboto">
            <Header onReloadData={reloadData}  />
        </div>
    )
}

export default Machine;