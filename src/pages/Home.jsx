import { Grid } from "react-loader-spinner";

const Home = () => {
    const urlOrigin = window.location.origin;
    setTimeout(() => {
        window.location.href = `${urlOrigin}/satria-mms/overview`;
    }, 3000);
    
    return (
        <div className="bg-black/10 h-screen w-screen flex justify-center items-center">
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#0e0e0e"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </div>
    )
}

export default Home;