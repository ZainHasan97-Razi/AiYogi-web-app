import feature1 from '../../../assets/images/feature-1.png';

const Intuitive = ({name,  desc}) => {
    return (
        <div>
            <h4 class="text-lg font-semibold flex items-center gap-2">
                <span class="text-red-500">&#10010;</span> {name}
            </h4>
            <p class="text-gray-400 text-sm">{desc}</p>
        </div>
    )
}

const Feature = () => {
    return (
        <>
        <section class="py-16 px-8">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-white border-b-4 inline-block pb-2">Features</h2>
        </div>
        <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="relative">
                <img src={feature1} alt="Mobile UI" class="w-64 md:w-80" />
                <div class="absolute inset-0 rounded-full border border-gray-600 animate-pulse"></div>
            </div>
            <div class="max-w-lg">
                <h3 class="text-red-500 uppercase text-sm font-semibold">Features</h3>
                <h1 class="text-3xl font-bold">Intuitive</h1>
                <div class="mt-6 space-y-4">
                    <Intuitive name="Feature 1" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>
                    <Intuitive name="Feature 2" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>
                    <Intuitive name="Feature 3" desc="Cum Et Convallis Risus Placera Aliquam, Nunc Scelerisque Aliquet."/>

                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Feature;