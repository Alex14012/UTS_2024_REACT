function Article({titleArticle, image, newsArticle}){
    return(
        <>
        <div className="flex flex-col h-screen w-screen items-center justify-start font-Arimo">
            <div>
                <h1 className="text-5xl text-center pb-3 pt-3 text-white">{titleArticle}</h1>
            </div>
            <div>
                <img src={image} alt="" className="w-[950px]" />
            </div>
            <div className="bg-white content-center text-center h-full">
                <p className="pt-8 pb-7 text-lg">{newsArticle}</p>
            </div>
        </div>
        </>
    )
}

export default Article