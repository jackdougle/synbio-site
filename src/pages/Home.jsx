function Home() {
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
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
          <p className="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2">University of Arizona iGEM</p>
          <p className="text-gray-800 text-2xl translate-x-1">Empowering UA Students to move Synthetic Biology Forward</p>
        </div>
        <div className="relative w-full h-[700px] my-10">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <img src="/mole.jpg" className="w-full h-[700px] object-cover" alt="Cell Placeholder Image"/>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="font-sans flex flex-col justify-center text-[21px] px-8">
          <div className="flex flex-col m-4 font-light">
            <p className="text-2xl font-bold font-mono mb-2">What is iGEM?</p>
            <p>The iGEM (International Genetically Engineered Machine) compeition is a prestigious global synthetic biology contest that challenges students to design and build biological systems using standard, interchangeable parts called BioBricks. Teams from around the world work on innovative projects that address real-world issues, ranging from environmental sustainability to healthcare.</p>
            <p className="mt-2">The iGEM competition provides a platform for students to collaborate, learn, and showcase their skills in synthetic biology. It fosters creativity, critical thinking, and teamwork, allowing participants to contribute to the advancement of synthetic biology and its applications.</p>
            <a href="https://competition.igem.org" className="font-mono mt-2 text-lg text-sky-500 hover:text-sky-400 transition duration-300">iGEM's Website &rarr;</a>
          </div>
          <div className="flex flex-col m-4 font-light">
            <p className="text-2xl font-bold font-mono mb-2">What do we do?</p>
            <p>UA iGEM is the University of Arizona's iGEM team. We are a group of undergraduate students from various majors who are passionate about synthetic biology and its potential to solve real-world problems. Our team is dedicated to creating innovative solutions that can make a positive impact on society.</p>
            <p className="mt-2">We work on projects that involve designing and building biological systems using synthetic biology techniques. Our goal is to contribute to the field of synthetic biology and to inspire others to explore its possibilities.</p>
            <a href="/projects" className="font-mono mt-2 text-lg text-sky-500 hover:text-sky-400 transition duration-300">Our work &rarr;</a>
          </div>
          <div className="flex flex-col m-4 font-light">
            <p className="text-2xl font-bold font-mono mb-2">How can you help?</p>
            <p>We are always looking for support and mentorship from the community. If you are interested in helping us with our projects, please reach out to us. We welcome collaboration and are eager to learn from others.</p>
            <p className="mt-2">Additionally, if you would like to support our team financially, we accept donations to help cover the costs of materials, equipment, and travel for the competition.</p>
            <a href="/donate" className="font-mono mt-2 text-lg text text-sky-500 hover:text-sky-400 transition duration-300">Donate &rarr;</a>
          </div>
        </div>
        <div className="relative w-full h-[30px] bg-gradient-to-b from-white to-green-100 justify-start font-mono text-bold p-10 text-white">
        </div>
      </div>
    </div>
  )
}

export default Home