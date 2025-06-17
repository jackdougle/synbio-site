function About() {
  return (
    <div className="relative grid grid-cols-[320px_auto] min-h-screen w-screen overflow-hidden">
      <div className="fixed left-0 top-0 text-white h-screen w-[320px] flex flex-col justify-center items-center align-middle bg-gradient-to-br from-green-400 to-purple-400 p-3">
        <div className="text-white h-full w-full flex flex-col justify-between gap-12 p-8 bg-gradient-to-br from-green-500 to-purple-400">
          <div className="text-[37px] font-mono font-bold">
            <img src="/logo.png" className="scale-115 mb-5 hover:scale-120 transition duration-300" alt="UA iGEM Logo" onClick={() => window.location.href = "/"} />
            <ul className="space-y-4 -translate-x-1">
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/about'}>About Us</p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/projects'}>Projects</p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/apply'}>Apply</p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/donate'}>Donate</p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/contact'}>Contact</p>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" className="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/journal'}>Journal</p>
              </li>
            </ul>
          </div>
          <div>
            <hr className="my-8 w-100px border-(--pattern-fg)"/>
            <div className="flex flex-row">
              <p className="-my-1 text-[27px] font-bold font-mono" onClick={() => window.location.href = '/contact'}>Follow Us</p>
              <img src="/instagram.png" className="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="Instagram" onClick={() => window.location.href = 'https://instagram.com/uaigem/'}/>
              <img src="/linkedin.png" className="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="LinkedIn" onClick={() => window.location.href = 'https://linkedin.com/company/uaigem/'}/>
            </div>
            <p className="text-xs font-mono justify-start">© UA iGEM 2025</p>
          </div>
        </div>
      </div>
      <div className="col-start-2 overflow-y-scroll bg-white">
        <div className="marquee-content w-full h-[50px] whitespace-nowrap bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 items-center animate-marquee justify-center py-2 text-ellipsis truncate">
          <p className="text-white inline-block font-mono font-bold text-2xl px-5">JUNE 2025 NEOTERIC NEWS: The construction of UA iGEM is underway! We are currently reaching out to Nucleate, UA faculty, and others for support and mentorship.</p>
        </div>
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent mx-6 my-2">
          <p className="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-bold">UA iGEM - Our Team</p>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Why we're here</p>
          <div className="m-2 text-[20px] font-extralight font-sans text-black">
            <p>UA iGEM (founded 2025) is a new club at the University of Arizona. Our mission is to move medicine and synthetic biology forward through pursuing novel pathways. Our members come from a wide variety of majors and interests, but have a shared goal of finding ways to leverage UA's great research background to build new and impactful technologies.</p>
            <p className="my-2">As a prospective iGEM team, we hope to display our research at the Grand Jamboree in 2026. Travel, reagents, equipment, and team fees are expensive so donations are much appreciated!</p>
          </div>
          <p className="text-gray-800 text-2xl translate-x-1 font-bold">Get to know us!</p>
          <div className="max-w-full flex flex-wrap flex-row justify-center m-8 gap-20">
            <div className="flex flex-col max-h-100 max-w-85 bg-gradient-to-br from-green-400 to-purple-300 border-7 border-purple-300 transition duration-200 hover:scale-102 rounded-2xl">
                <img src="jack.png" className="h-135 object-cover max-h-60 border-6 rounded-xl" />
                <div className="flex flex-col text-black h-40 justify-center items-center px-2">
                    <p className="font-bold font-mono">Jack Douglass - Co-founder</p>
                    <p className="font-mono text-[15px] text-center">Jack is sophomore studying biology and computer science. He intends to go into biosecurity research. In his free time, he enjoys exploring nature.</p>
                </div>
            </div>
            <div className="flex flex-col max-h-100 max-w-85 bg-gradient-to-br from-green-400 to-purple-300 border-7 border-purple-300 transition duration-200 hover:scale-102 rounded-2xl">
                <img src="mitosis.png" className="h-135 object-cover max-h-60 border-4 rounded-2xl" />
                <div className="flex flex-col text-black h-40 justify-center items-center px-2">
                    <p className="font-bold font-mono">Hendrick Read - Co-founder</p>
                    <p className="font-mono text-[15px] text-center">Hendrick is sophomore majoring in applied biotechnology.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;