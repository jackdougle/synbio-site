import "./index.css"

function NavBar() {
    return (
      <div class="fixed left-0 top-0 text-white h-screen w-[320px] flex flex-col justify-center items-center align-middle bg-gradient-to-br from-green-400 to-purple-400 p-3">
        <div class="text-white h-full w-full flex flex-col justify-between gap-12 p-8 bg-gradient-to-br from-green-500 to-purple-400">
          <div class="text-[39px] font-mono font-bold">
            <img src="/logo.png" class="scale-115 mb-5 -mt-3 hover:scale-120 transition duration-200" alt="UA iGEM Logo" onClick={() => window.location.href = "/"} />
            <ul class="space-y-4 -translate-x-1">
              <li class="flex">
                <svg class="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" class="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" class="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" class="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p class="ml-4 transition duration-200 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/about'}>About Us</p>
              </li>
              <li class="flex">
                <svg class="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" class="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" class="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" class="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p class="ml-4 transition duration-200 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/projects'}>Projects</p>
              </li>
              <li class="flex">
                <svg class="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" class="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" class="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" class="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p class="ml-4 transition duration-200 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/donate'}>Donate</p>
              </li>
              <li class="flex">
                <svg class="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" class="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" class="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" class="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p class="ml-4 transition duration-200 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/contact'}>Contact</p>
              </li>
              <li class="flex">
                <svg class="h-[1lh] w-7 shrink-0 " viewBox="0 0 22 22" fill="none" stroke-linecap="square">
                  <circle cx="11" cy="11" r="11" class="fill-purple-400/25"/>
                  <circle cx="11" cy="11" r="10.5" class="stroke-purple-200"/>
                  <path d="M8 11.5L10.5 14L14 8" class="stroke-purple-800 dark:stroke-purple-200"/>
                </svg>
                <p class="ml-4 transition duration-200 hover:translate-x-1 hover:scale-107 hover:text-purple-100" onClick={() => window.location.href = '/journal'}>Journal</p>
              </li>
            </ul>
          </div>
          <div>
            <hr class="my-8 w-100px border-(--pattern-fg)"/>
            <div class="flex flex-row">
              <p class="-mt-1 text-[27px] font-bold font-mono" onClick={() => window.location.href = '/contact'}>Follow Us</p>
              <img src="/instagram.png" class="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="Instagram" onClick={() => window.location.href = 'https://instagram.com/uaigem/'}/>
              <img src="/linkedin.png" class="w-[30px] h-[30px] object-cover ml-3 filter invert transition hover:scale-120" alt="LinkedIn" onClick={() => window.location.href = 'https://linkedin.com/company/uaigem/'}/>
            </div>
            <p class="text-xs font-mono justify-start">© UA iGEM 2025</p>
          </div>
        </div>
      </div>
    )
}

export default NavBar;