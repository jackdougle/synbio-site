import "./index.css"
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

function NavBar() {
    return (
      <div className="fixed left-0 top-0 text-white h-screen w-[320px] hidden md:flex flex-col justify-center items-center align-middle bg-gradient-to-br from-green-400 to-blue-300 p-3">
        <div className="text-white h-full w-full flex flex-col justify-between gap-12 p-8 bg-gradient-to-br from-green-500 to-blue-300">
          <div className="text-[40px] font-mono font-bold">
            <Link to="/">
                <img src="/synbio_logo.png" className="scale-115 mb-3 -mt-3 hover:scale-120 transition duration-300" alt="UA SynBio Logo"  />
            </Link>
            <ul className="space-y-4 -ml-2">
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-blue-200" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-200" />
                </svg>
                <Link to="/about" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">About Us</Link>
              </li>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-blue-200" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-200" />
                </svg>
                <Link to="/projects" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Projects</Link>
              </li>
              <div className="flex flex-col -mt-5 ml-6 text-[15px]">
                <Link to="https://github.com/jackdougle/molecular-thesaurus" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Molecular Thesaurus</Link>
                <Link to="https://github.com/jackdougle/nuclease" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Nuclease</Link>
                <Link to="https://alluring-crest-869.notion.site/Project-Ideas-iGEM-2026-27ad4b0ba94c801580faeb5b5ca8dd90" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- iGEM 2025-2026</Link>
              </div>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-blue-200" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-200" />
                </svg>
                <Link to="/contact" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Contact</Link>
              </li>
              <div className="flex flex-col -mt-6 ml-6 text-[15px]">
                <HashLink smooth to="/contact#apply" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Apply</HashLink>
                <HashLink smooth to="/contact#donate" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Donate</HashLink>
              </div>
              <li className="flex">
                <svg className="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" className="fill-blue-400/25" />
                  <circle cx="11" cy="11" r="10.5" className="stroke-blue-200" />
                  <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-800 dark:stroke-blue-200" />
                </svg>
                <Link to="/journal" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Journal</Link>
              </li>
            </ul>
          </div>
          <div>
            <hr className="my-8 w-100px border-(--pattern-fg)" />
            <div className="flex flex-row">
              <p className="-mt-1 text-[27px] font-bold font-mono" onClick={() => window.location.href = '/contact'}>Follow Us</p>
              <img src="/instagram.png" className="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="Instagram" onClick={() => window.location.href = 'https://instagram.com/uaigem/'} />
              <img src="/linkedin.png" className="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="LinkedIn" onClick={() => window.location.href = 'https://linkedin.com/company/uaigem/'} />
            </div>
            <p className="text-xs font-mono justify-start">© UA SynBio Society 2025</p>
          </div>
        </div>
      </div>
    )
}

export default NavBar;