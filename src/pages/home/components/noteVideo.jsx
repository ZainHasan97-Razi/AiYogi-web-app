
const NoteVideo = () => {
    return (<>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center pb-12 pt-20">
            <h2 className="text-4xl font-bold text-white text-center">NOTE: ChatGPT is bouncing voice users out of AiYogi Gurus to mundane ChatGPT. Blue swirl means not AiYogi. White bubble is AiYogi. Use text only.  Green phone below is fine.</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
            <div className="videowrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4LwszQ7208k?si=llz0T9u8zGupAyU1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </>)
}

export default NoteVideo;