import Content from "../components/Content"
import PS1 from "../assets/images/ps1.jpeg"
import hitbox from "../assets/images/hitbox.jpg"
import Brook from "../assets/images/Wingman-xb_1-1010x781.jpg"
import GPU from "../assets/images/Nvidia-GeForce-RTX-4060.jpg"
import Footer from "../components/footer"

function Blogs(){
    return(
        <>
        <Content titleLeft={"Playstation anniversary edition"} subtitleLeft={"everything we know about PS5 pro 30th anniversary"} imagesLeft={PS1} blogsNewsLeft={"/Blogs1"} 
        titleRight={"Hitbox Review"} subtitleRight={"Best Controller For Fighting Games Incoming?"} imagesRight={hitbox} blogsNewsRight={"/Blogs2"}/>

        <Content titleLeft={"Brook"} subtitleLeft={"Brook review for fighting games controller"} imagesLeft={Brook} blogsNewsLeft={"/Blogs3"} 
        titleRight={"Nvidia GeForce RTX 4060 review"} subtitleRight={"the least underwhelming 1080p graphics card"} imagesRight={GPU} blogsNewsRight={"/Blogs4"}/>
        <Footer/>
        </>
    )
}

export default Blogs