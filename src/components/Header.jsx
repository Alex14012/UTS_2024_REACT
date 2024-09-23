import background from "../assets/images/background.jpg"

function Header(){
    return(
        <>
        <div className="flex justify-center w-full h-80 bg-background bg-no-repeat bg-cover bg-center bg-opacity-0 relative">
            <div className="pt-20 flex flex-col gap-5">
            <h1 className="font-Asteroidbeat text-7xl text-center text-white font">Live☆News</h1>
            <h3 className="text-3xl text-center text-white">Give a quick and live news about technology</h3>
            </div>
        <img src={background} alt="" className="w-full h-full object-cover absolute mix-blend-overlay"/>
        </div>
        </>
    )
}

export default Header