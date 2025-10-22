import AnimWrapper from "../Transition";

function Placeholder() {
    return(
      <AnimWrapper>
        <div className="max-w-full justify-center items-center">
            <div className="flex flex-col text-[21px] text-white font-mono p-8 rounded-[90px] bg-gradient-to-br from-blue-400 to-green-300 h-150 max-w-full m-20 justify-center text-center">
                <p className="text-[70px] font-bold">This page is under construction!</p>
                <p className="text-2xl">Check back soon :]</p>
            </div>
        </div>
      </AnimWrapper>
    )
}

export default Placeholder;