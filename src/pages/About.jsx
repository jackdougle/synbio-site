function About() {
    return(
      <>
        <div class="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mx-6 my-2">
          <p class="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-bold">UA iGEM - Our Team</p>
          <p class="text-gray-800 text-2xl translate-x-1 font-bold">Why we're here</p>
          <div class="m-2 text-[20px] font-extralight font-sans text-black">
            <p>UA iGEM (founded 2025) is a new club at the University of Arizona. Our mission is to move medicine and synthetic biology forward through pursuing novel pathways. Our members come from a wide variety of majors and interests, but have a shared goal of finding ways to leverage UA's great research background to build new and impactful technologies.</p>
            <p class="my-2">As a prospective iGEM team, we hope to display our research at the Grand Jamboree in 2026. Travel, reagents, equipment, and team fees are expensive so donations are much appreciated!</p>
          </div>
          <p class="text-gray-800 text-2xl translate-x-1 font-bold">Get to know us!</p>
          <div class="max-w-full flex flex-row flex-wrap justify-around gap-5 my-6">
            <div class="flex flex-col max-h-100 max-w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="me.png" class="h-135 object-cover min-h-80 rounded-4xl w-80" />
                <div class="flex flex-col text-black h-40 justify-center items-center">
                    <p class="font-bold font-mono">Jack Douglass - Co-founder</p>
                    <p class="font-mono text-[15px] text-center">Jack is sophomore studying biology and computer science. He intends to go into biosecurity research. In his free time, he enjoys exploring nature, playing video games, and coding.</p>
                </div>
            </div>
            <div class="flex flex-col max-h-100 max-w-87 transition duration-200 hover:scale-102 rounded-2xl place-items-center gap-3">
                <img src="rust.jpg" class="h-135 object-cover min-h-80 rounded-4xl w-80" />
                <div class="flex flex-col text-black h-40 justify-center items-center">
                    <p class="font-bold font-mono">Hendrick Read - Co-founder</p>
                    <p class="font-mono text-[15px] text-center">Hendrick is a sophomore majoring in applied biotechnology. He is very cute and smol bean (hendrick wrote this) :3</p>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default About;