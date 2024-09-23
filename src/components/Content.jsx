import { Link } from "react-router-dom"

function Content({titleLeft, subtitleLeft, titleRight, subtitleRight, imagesLeft, imagesRight, blogsNewsLeft, blogsNewsRight}){


    return(
        <>
    <div className="flex flex-row mt-2 gap-1">
        
        <div className="w-full overflow-hidden rounded-md">     
            <Link to={blogsNewsLeft}>
                <div className="w-[800px h-[450px] transition bg-no-repeat bg-cover bg-center hover:scale-105 ease-in-out delay-75 duration-500">
                    <div className="w-full bottom-0 transition ease-linear flex flex-col bg-black pt-1"> 
                    <h1 className="pl-6 text-3xl font-medium text-white font-Montserrat">
                      {titleLeft}
                    </h1>
                    <h3 className="pl-6 text-xl text-white font-MontSerrat">
                     {subtitleLeft}
                     </h3>
                 </div>
                 <img src={imagesLeft} alt="" className="size-full"/>
                </div>
            </Link>
        </div>
        <div className="w-full overflow-hidden rounded-md">     
            <Link to={blogsNewsRight}>
            <div className="w-[800px] h-[450px] bg-slate-800 transition bg-no-repeat bg-cover bg-center hover:scale-105 ease-in-out delay-75 duration-500">
                <div className="w-full bottom-0 transition ease-linear flex flex-col bg-black"> 
                 <h1 className="pl-6 text-3xl font-medium text-white font-Montserrat">
                    {titleRight}
                 </h1>
                 <h3 className="pl-6 text-xl text-white font-MontSerrat">
                 {subtitleRight}
                 </h3>
                </div>
                <img src={imagesRight} alt="" className="size-full"/>
        </div>
        </Link>
        </div>
    </div>
        </>
    
    )
}

export default Content