import AnimWrapper from "../Transition";

function About() {
    return(
      <AnimWrapper>
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent my-2 mx-6 mr-6">
          <p className="text-[35px] md:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-bold">UA iGEM - Our Team</p>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Why we're here</p>
          <div className="m-2 text-[20px] font-extralight font-sans text-black">
            <p>UA iGEM (founded 2025) is a new club at the University of Arizona. Our mission is to move medicine and synthetic biology forward through pursuing novel pathways. Our members come from a wide variety of majors and interests, but have a shared goal of finding ways to leverage UA's great research background to build new and impactful technologies.</p>
            <p className="my-2">As a prospective iGEM team, we hope to display our research at the Grand Jamboree in 2026. Travel, reagents, equipment, and team fees are expensive so donations are much appreciated!</p>
          </div>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Get to know us!</p>
        </div>
        <div className="max-w-full flex flex-row flex-wrap justify-around mt-4 mb-25">
          <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="me.png" className="h-135 object-cover min-h-80 w-80 border-4 rounded-[80px]" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Jack Douglass - Co-founder</p>
                    <p className="font-mono text-[15px] text-center">Jack is a sophomore studying biology and computer science. He intends to go into pandemic prevention research. In his free time, he loves coding, reading manga, and exploring nature.</p>
                </div>
            </div>
            <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="hendrick.jpeg" className="h-135 object-cover min-h-80 w-80 border-4 rounded-[80px]" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Hendrick Read - Co-founder</p>
                    <p className="font-mono text-[15px] text-center">Hendrick is a second year majoring in applied biotechnology. He's super interested in tissue engineering, and works as a manufacturing rep for GT Resources. He loves origami!</p>
                </div>
            </div>
            <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="mac.png" className="h-135 object-cover min-h-80 w-80 border-4 rounded-[80px]" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Mac Rodriguez - Optics Lead</p>
                    <p className="font-mono text-[15px] text-center">Mac is a rising junior studying optical engineering. When he's not doing research in Dongkyun Kang's lab, he's woodworking, restoring vehicles, or thrifting across Tucson.</p>
                </div>
            </div>
        </div>
      </AnimWrapper>
    )
}

export default About;

