export const SearchComponent = () => {
    return (
        <div class=" relative h-screen flex items-center justify-center">
            <div class="relative bg-black/80 p-6 rounded-2xl flex items-center space-x-4 w-full max-w-xl">
                <input type="text" placeholder="Type Here" class="flex-1 bg-transparent text-white outline-none placeholder-gray-400"/>
                <button class="bg-white text-black py-2 px-4 rounded-full">Find Answers →</button>
            </div>
        </div>
    )
}