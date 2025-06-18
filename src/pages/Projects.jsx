function Projects() {
    return(
      <>
        <div class="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
          <p class="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2">UA iGEM - Our Work</p>
          <p class="text-gray-800 text-2xl translate-x-1">How we're moving STEM forward, as individuals and through iGEM</p>
        </div>
        <div class="max-w-full flex flex-wrap justify-around mx-10 my-8 gap-15">
            <div class="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102" onClick={() => window.location.href = "projects/molecularthesaurus"}>
                <img src="mitosis.jpg" class="rounded-4xl border-4 border-black h-135 object-contain"/>
                <div class="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2">
                    <p class="font-bold font-mono">MolecularThesaurus.com</p>
                    <p class="font-mono text-[15px] text-center">Finding bioactive molecular data can be challenging, so we made a cheminformatics/python website tailored to our diverse and experimental needs.</p>
                </div>
            </div>
            <div class="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102" onClick={() => window.location.href = "projects/rustktd"}>
                <img src="dna.jpg" class="rounded-4xl border-4 border-black h-135 object-cover"/>
                <div class="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2 ">
                    <p class="font-bold font-mono">Rust K-mer Trimmer & Deduper</p>
                    <p class="font-mono text-[15px] text-center">Early pandemic detection is crucial. With RustKTD, we're trying to improve software to facilitate faster pre-processing of metagenomic data.</p>
                </div>
            </div>
            <div class="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102" onClick={() => window.location.href =  "projects/2026"}>
                <img src="brains.jpg" class="rounded-4xl border-4 border-black h-135 object-cover"/>
                <div class="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2 ">
                    <p class="font-bold font-mono">2025-2026 iGEM Project</p>
                    <p class="font-mono text-[15px] text-center">TBD! If you have ideas for impactful biotech projects, please let us know. This team is driven, and wants to help you improve the world.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Projects;