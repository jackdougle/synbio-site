function Home() {
    return(
      <>
        <div class="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
          <p class="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2">University of Arizona iGEM</p>
          <p class="text-gray-800 text-2xl translate-x-1">Empowering UA Students to move Synthetic Biology Forward</p>
        </div>
        <div class="relative w-full h-[700px] my-10">
          <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
          <img src="/mole.jpg" class="w-full h-[700px] object-cover" alt="Cell Placeholder Image"/>
          <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div class="font-sans flex flex-col justify-center text-[21px] px-8 gap-3">
          <div class="flex flex-col m-4 font-light">
            <p class="text-2xl font-bold font-mono mb-2">What is iGEM?</p>
            <p>The iGEM (International Genetically Engineered Machine) compeition is a prestigious global synthetic biology contest that challenges students to design and build biological systems using standard, interchangeable parts called BioBricks. Teams from around the world work on innovative projects that address real-world issues, ranging from environmental sustainability to healthcare.</p>
            <p class="mt-2">The iGEM competition provides a platform for students to collaborate, learn, and showcase their skills in synthetic biology. It fosters creativity, critical thinking, and teamwork, allowing participants to contribute to the advancement of synthetic biology and its applications.</p>
            <a href="https://competition.igem.org" class="font-mono mt-2 text-lg text-sky-500 hover:text-sky-400 transition duration-300">iGEM's Website &rarr;</a>
          </div>
          <div class="flex flex-col m-4 font-light">
            <p class="text-2xl font-bold font-mono mb-2">What do we do?</p>
            <p>UA iGEM is the University of Arizona's iGEM team. We are a group of undergraduate students from various majors who are passionate about synthetic biology and its potential to solve real-world problems. Our team is dedicated to creating innovative solutions that can make a positive impact on society.</p>
            <p class="mt-2">We work on projects that involve designing and building biological systems using synthetic biology techniques. Our goal is to contribute to the field of synthetic biology and to inspire others to explore its possibilities.</p>
            <a href="/projects" class="font-mono mt-2 text-lg text-sky-500 hover:text-sky-400 transition duration-300" viewTransition>Our work &rarr;</a>
          </div>
          <div class="flex flex-col m-4 font-light">
            <p class="text-2xl font-bold font-mono mb-2">How can you help?</p>
            <p>We are always looking for support and mentorship from the community. If you are interested in helping us with our projects, please reach out to us. We welcome collaboration and are eager to learn from others.</p>
            <p class="mt-2">Additionally, if you would like to support our team financially, we accept donations to help cover the costs of materials, equipment, and travel for the competition.</p>
            <a href="/donate" class="font-mono mt-2 text-lg text text-sky-500 hover:text-sky-400 transition duration-300 mb-10">Donate &rarr;</a>
          </div>
        </div>
      </>
    )
}

export default Home;