function Article({titleArticle, image, newsArticle}){
    return(
        <>
        <div className="flex flex-col h-screen items-center justify-start font-Arimo">
            <div>
                <h1 className="text-5xl min-w-80 max-w-[800px] pt-8 pb-7 text-white">{titleArticle}</h1>
            </div>
            <div>
                <img src={image} alt="" className="w-[950px]" />
            </div>
            <div>
                <p className="min-w-60 max-w-[800px] pt-8 pb-7 text-lg">{newsArticle}</p>
            </div>
        </div>
        </>
    )
}

export default Article