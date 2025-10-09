import AnimWrapper from "../Transition";
import { Link } from "react-router-dom";

function Projects() {
    return(
      <AnimWrapper>
        <div className="flex flex-col font-mono bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent font-extrabold mx-6 my-2">
          <p className="text-[35px] md:text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2">Our Work</p>
          <p className="text-gray-800 text-2xl translate-x-1">How we're moving STEM forward, as individuals and through iGEM</p>
        </div>
        <div className="max-w-full flex flex-wrap justify-around mx-10 my-8 gap-15">
            <Link to="https://github.com/jackdougle/molecular-thesaurus" className="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102">
                <img src="mitosis.jpg" className="rounded-4xl border-4 border-black h-135 object-cover"/>
                <div className="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2">
                    <p className="font-bold font-mono">MolecularThesaurus.com</p>
                    <p className="font-mono text-[15px] text-center">Finding bioactive molecular data can be challenging, so we made a cheminformatics/python website tailored to our diverse and experimental needs.</p>
                </div>
            </Link>
            <Link to="https://github.com/jackdougle/nuclease" className="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102">
                <img src="dna.jpg" className="rounded-4xl border-4 border-black h-135 object-cover"/>
                <div className="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2 ">
                    <p className="font-bold font-mono">Nuclease</p>
                    <p className="font-mono text-[15px] text-center">Early pandemic detection is crucial. With RustKTD, we're trying to improve software to facilitate faster pre-processing of metagenomic data.</p>
                </div>
            </Link>
            <Link to="https://alluring-crest-869.notion.site/Project-Ideas-iGEM-2026-27ad4b0ba94c801580faeb5b5ca8dd90" className="flex flex-col min-h-100 min-w-85 bg-black rounded-4xl border-5 border-black transition duration-200 hover:scale-102">
                <img src="brains.jpg" className="rounded-4xl border-4 border-black h-135 object-cover"/>
                <div className="flex flex-col text-black border-4 border-black rounded-4xl bg-white h-40 justify-center items-center px-2 ">
                    <p className="font-bold font-mono">2025-2026 iGEM Project</p>
                    <p className="font-mono text-[15px] text-center">TBD! If you have ideas for impactful biotech projects, please let us know. This team is driven, and wants to help you improve the world.</p>
                </div>
            </Link>
        </div>
    </AnimWrapper>
    )
}

export default Projects;