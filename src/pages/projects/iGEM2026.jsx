import AnimWrapper from "../../Transition";

function Placeholder() {
    return (
    <AnimWrapper>
      <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent my-2 mx-6 mr-6">
        <p className="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-bold">iGEM Project: 2025-2026</p>
        <p className="text-gray-800 text-2xl translate-x-1 font-bold">TBD - Potential project reports will go here</p>
      </div>
      <div className="max-w-full justify-center items-center">
        <div className="flex flex-col text-[21px] text-white font-mono p-8 rounded-[90px] bg-gradient-to-br from-purple-400 to-green-300 h-150 max-w-full m-20 justify-center text-center">
          <p className="text-[70px] font-bold">This page is under construction!</p>
          <p className="text-2xl">Check back soon :]</p>
        </div>
      </div>
    </AnimWrapper>
    );
}

export default Placeholder;