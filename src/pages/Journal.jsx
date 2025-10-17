import AnimWrapper from "../Transition";

function Journal() {
    return(
      <AnimWrapper>
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
            <p className="text-[35px] md:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2">Idea Journal</p>
            <p className="text-gray-800 text-2xl translate-x-1">Our thoughts on various STEM topics</p>
        </div>
        <div className="max-w-full justify-center items-center">
            <div className="flex flex-col text-[21px] text-white font-mono p-8 rounded-[90px] bg-gradient-to-br from-blue-400 to-green-300 h-150 max-w-full m-20 justify-center text-center">
                <p className="text-[70px] font-bold">This page is under construction!</p>
                <p className="text-2xl">Check back soon :]</p>
            </div>
        </div>
      </AnimWrapper>
    )
}

export default Journal;