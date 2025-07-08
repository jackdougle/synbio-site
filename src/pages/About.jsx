import AnimWrapper from "../Transition";
import { HashLink } from "react-router-hash-link";

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
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">We're building, now!</p>
          <div className="m-2 mb-4 text-[20px] font-extralight font-sans text-black">
            <p>The University of Arizona has participated in iGEM only one time, and that was in 2006. We're trying to build a new team that will last for years to come and leverage UA's great research experience and resources.</p>
            <p className="my-2">However, this is a new club and construction has just begun. If you'd like to help, please apply here! We're looking for motivated students curious about any of these roles: ethics, outreach, wet-lab work, computer modeling/simulations, and project management.</p>
            <HashLink smooth to="/contact#apply" className="font-mono font-bold text-lg text text-sky-500 hover:text-sky-300 transition duration-300">Apply &rarr;</HashLink>
            <p className="mt-2">If you're interested in science communication, we'd love to publish your writing in our idea journal! Our idea journal is our initiative to shine light on novel scientific topics, communicate what we learn, and create discussions around synthetic biology and emerging tech at UArizona.</p>
          </div>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Get to know us</p>
        </div>
        <div className="max-w-full flex flex-row flex-wrap justify-around my-4 mb-25">
          <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="me.png" className="h-135 object-cover min-h-80 w-80 border-2 rounded-full" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Jack Douglass - Co-founder</p>
                    <p className="font-sans font-light text-[18px] text-center">Jack is a sophomore studying biology and computer science. He intends to go into pandemic prevention research. In his free time, he loves coding, reading manga, and exploring nature.</p>
                </div>
            </div>
            <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="hendrick.jpeg" className="h-135 object-cover min-h-80 w-80 border-2 rounded-full" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Hendrick Read - Co-founder</p>
                    <p className="font-sans font-light text-[18px] text-center">Hendrick is a second year majoring in applied biotechnology. He's super interested in tissue engineering, and works as a manufacturing rep for GT Resources. He loves origami!</p>
                </div>
            </div>
            <div className="flex flex-col max-h-100 w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="mac.png" className="h-135 object-cover min-h-80 w-80 border-2 rounded-full" />
                <div className="flex flex-col text-black h-40 justify-center items-center">
                    <p className="font-bold font-mono">Mac Rodriguez - Optics Lead</p>
                    <p className="font-sans font-light text-[18px] text-center">Mac is a rising junior studying optical engineering. When he's not doing research in Dongkyun Kang's lab, he's woodworking, restoring vehicles, or thrifting across Tucson.</p>
                </div>
            </div>
        </div>
      </AnimWrapper>
    )
}

export default About;

