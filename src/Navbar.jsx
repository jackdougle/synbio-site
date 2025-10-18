import "./index.css"
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";

function NavBar() {
    const [open, setOpen] = useState(false);

    // prevent background scroll when overlay is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      }
    }, [open]);

    const MenuLinks = () => (
      <>
        <div className="text-[40px] font-mono font-bold">
          <Link to="/">
              <img src="/synbio_logo.png" className="scale-115 mb-3 -mt-3 hover:scale-120 transition duration-300 max-w-58" alt="UA SynBio Logo"  />
          </Link>
          <ul className="space-y-4 -ml-2">
            <li className="flex">
              <Link to="/about" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">About Us</Link>
            </li>
            <li className="flex">
              <Link to="/projects" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Projects</Link>
            </li>
            <div className="flex flex-col -mt-5 ml-6 text-[15px]">
              <a href="https://github.com/jackdougle/molecular-thesaurus" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Molecular Thesaurus</a>
              <a href="https://github.com/jackdougle/nuclease" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Nuclease</a>
              <a href="https://alluring-crest-869.notion.site/Project-Ideas-iGEM-2026-27ad4b0ba94c801580faeb5b5ca8dd90" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- iGEM 2025-2026</a>
            </div>
            <li className="flex">
              <Link to="/contact" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Contact</Link>
            </li>
            <div className="flex flex-col -mt-6 ml-6 text-[15px]">
              <HashLink smooth to="/contact#apply" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Apply</HashLink>
              <HashLink smooth to="/contact#donate" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">- Donate</HashLink>
            </div>
            <li className="flex">
              <Link to="/journal" className="ml-4 transition duration-300 hover:translate-x-1 hover:scale-107 hover:text-blue-100">Journal</Link>
            </li>
          </ul>
        </div>
        <div>
          <hr className="my-8 w-100px border-(--pattern-fg)" />
          <div className="flex flex-row">
            <p className="-mt-1 text-[27px] font-bold font-mono" onClick={() => window.location.href = '/contact'}>Follow Us</p>
            <img src="/instagram.png" className="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="Instagram" onClick={() => window.location.href = 'https://instagram.com/uasynbio/'} />
          </div>
          <p className="text-xs font-mono justify-start">© UA SynBio Society 2025</p>
        </div>
      </>
    );

    return (
      <>
        {/* Desktop sidebar (unchanged) */}
        <div className="fixed left-0 top-0 text-white h-screen w-[320px] hidden md:flex flex-col justify-center items-center align-middle bg-gradient-to-r from-green-300 to-blue-400 p-3">
          <div className="text-white h-full w-full flex flex-col justify-between gap-12 p-8 bg-gradient-to-r from-green-400 to-blue-400">
            <MenuLinks />
          </div>
        </div>

        {/* Mobile toggle button (visible on small screens) */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="fixed right-3 top-15 z-50 md:hidden p-2 rounded-md bg-white/90 text-red-400"
        >Menu
        </button>

        {/* Fullscreen overlay menu for mobile */}
        {open && (
          <div className="fixed inset-0 z-40 md:hidden bg-gradient-to-b from-blue-500 to-green-300 text-white p-6 overflow-auto">
            <div className="h-full w-full flex flex-col justify-evenly items-center">
              <div className="mt-6">
                <MenuLinks />
              </div>
              <div className="text-center">
              </div>
            </div>
          </div>
        )}
      </>
    )
}

export default NavBar;