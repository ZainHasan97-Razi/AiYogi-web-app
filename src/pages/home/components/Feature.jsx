import feature1 from '../../../assets/images/feature-1.png';

const Intuitive = ({name,  desc}) => {
    return (
        <div>
            <h4 className="text-lg text-white font-semibold flex items-center gap-2">
                <span className="text-textred">&#10010;</span> {name}
            </h4>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
    )
}

const Feature = () => {
    return (<>
        <section className="top-1342 py-16 px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white border-b-4 inline-block pb-2">Features</h2>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative">
                    <img src={feature1} alt="Mobile UI" className="w-3xs md:w-3xs" />
                    <div className="absolute inset-0 rounded-full border border-gray-600 animate-pulse"></div>
                </div>
                <div className="max-w-lg">
                    <h3 className="text-textred uppercase text-sm font-medium tracking-[2px]">Features</h3>
                    <h1 className="text-textwhite text-4xl font-bold">Intuitive</h1>
                    <div className="mt-6 space-y-4">
                        <Intuitive name="Feature 1" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>
                        <Intuitive name="Feature 2" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>
                        <Intuitive name="Feature 3" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>

                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Feature;