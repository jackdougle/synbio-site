import AnimWrapper from "../Transition";
import { HashLink } from "react-router-hash-link";

function About() {
    return(
      <AnimWrapper>
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent my-2 mx-6 mr-6">
          <p className="text-[35px] md:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-bold">About Us</p>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Why we're here</p>
          <div className="m-2 text-[20px] font-extralight font-sans text-black">
            <p>The UA SynBio Society (founded 2025) is a new club at the University of Arizona. Our mission is to move medicine and synthetic biology forward through pursuing novel pathways. Our members come from a wide variety of majors and interests, but have a shared goal of finding ways to leverage UA's great research background to build new and impactful technologies.</p>
            <p className="my-2">As a prospective iGEM team, we hope to display our research at the iGEM Grand Jamboree in 2026. Travel, reagents, equipment, and team fees are expensive so donations are much appreciated!</p>
          </div>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">History</p>
          <div className="m-2 mb-4 text-[20px] font-extralight font-sans text-black">
            <p>The University of Arizona has participated in the iGEM competition one time... and that was in 2006. We're trying to build a new team that will last for years to come and leverage UA's great research experience and resources.</p>
            <p className="my-2">The SynBio Society is our effort to create a long-lasting community of UA students focused on synthetic biology and emerging technology in general. We think this will facilitate team building, biological innovation, and international competition participation for years to come.</p>
            <p className="my-2">However, this is a new club and construction has just begun. If you'd like to help, please apply here! We're looking for motivated students curious about any of these roles: ethics, outreach, wet-lab work, computer modeling/simulations, and project management.</p>
            <HashLink smooth to="/contact#apply" className="font-mono font-bold text-lg text text-sky-500 hover:text-sky-300 transition duration-300">Apply &rarr;</HashLink>
            <p className="mt-2">If you're interested in science communication, we'd love to publish your writing in our idea journal! Our idea journal is our initiative to shine light on novel scientific topics, communicate what we learn, and create discussions around synthetic biology and emerging tech at UArizona.</p>
          </div>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Get to know our organizers</p>
        </div>
        <div className="max-w-full flex flex-row flex-wrap justify-around my-4">
          <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="me.png" className="block object-cover h-80 w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Jack Douglass 🌌 Co-founder</p>
                    <p className="font-sans font-light text-[18px] text-center">Jack is a junior studying biology and computer science. He intends to go into pandemic prevention research. In his free time, he loves coding, reading manga, and exploring nature.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="hendrick.jpeg" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Hendrick Read 🦠 Co-founder</p>
                    <p className="font-sans font-light text-[18px] text-center">Hendrick is a third-year majoring in applied biotechnology. He's super interested in tissue engineering, and works as a manufacturing rep for GT Resources. He loves origami!</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="max.png" className="block object-cover h-80 w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Max Chou 💊 Secretary</p>
                    <p className="font-sans font-light text-[18px] text-center">Max is a junior studying medicine & physiology. While not conducting genetics and immunology research in the Schlenke Lab, he loves to read, climb, play videogames, and spend time with his dog.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="leo.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Leo Edgin 🦾 Officer</p>
                    <p className="font-sans font-light text-[18px] text-center">Leo is studying biomedical engineering and biochemistry, with the desire achieve a PhD in tissue engineering. Outside of classes, Leo is making biomedical devices, working on personal projects, or watching movies.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="mac.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Mac Rodriguez 🔬 Optics Lead</p>
                    <p className="font-sans font-light text-[18px] text-center">Mac is a junior studying optical engineering. When he's not doing research in Dongkyun Kang's lab, he's playing basketball, restoring vehicles, or woodworking.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="eva.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Eva Santisteban 🥁 Social Media</p>
                    <p className="font-sans font-light text-[18px] text-center">Eva is a second year studying microbiology and applied biotechnology. When not doing research with the Baltrus lab, she’s slinging coffees at Dutch Bro’s, at a concert or a basketball game, or learning a new recipe!</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="adri.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Adrian De La Pena 🧪 Chemist</p>
                    <p className="font-sans font-light text-[18px] text-center">Adrian is an undergraduate research assistant in Biochemistry and Pharmaceutical Sciences who currently works in peptide drug discovery. He loves climbing and good music.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="dar.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Darius Gharavi 🎥 Journalist</p>
                    <p className="font-sans font-light text-[18px] text-center">Darius is a junior studying neuroscience and cognitive science, with a special interest in political neuroscience. He enjoys long walks, dancing, and drawing in his spare time.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-5 p-4">
                <img src="erin.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Erin Choi 📱 Outreach Manager</p>
                    <p className="font-sans font-light text-[18px] text-center">Erin is pursuing Legal Studies with an Emphasis in Health Law and Policy, and works as a multimedia specialist for UA and Banner Health. In her free time, she loves to make jewelry and explore the chemistry behind perfumery.</p>
                </div>
            </div>
            <div className="flex flex-col w-90 transition duration-200 transform hover:scale-105 rounded-2xl items-center gap-3 p-4">
                <img src="cole.png" className="block h-80 object-cover w-90 border-2 rounded-full" />
                <div className="flex flex-col text-black justify-center items-center">
                    <p className="font-bold font-mono">Cole Dunnett 📚 Generalist</p>
                    <p className="font-sans font-light text-[18px] text-center">Cole is a junior studing neuroscience, MCB, and biochem! In his free time, he likes discovering new music and has a soft spot for Mesa, Arizona’s homegrown punk scene.</p>
                </div>
            </div>
        </div>
      </AnimWrapper>
    )
}

export default About;

