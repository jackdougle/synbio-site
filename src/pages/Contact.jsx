function Contact() {
    return(
      <>
        <div class="flex flex-col mx-6 my-2 text-[20px] font-sans font-light">
          <p class="text-[70px] bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent -my-2 font-extrabold font-mono">UA iGEM - Contact Us</p>
          <p class="text-gray-800 text-2xl translate-x-1 font-extrabold font-mono">Apply here</p>
          <p class="mt-2 mx-2">Thank you for your interest in UA iGEM! Please fill out this form and we'll get back to you as soon as possible.</p>
          <a href="https://competition.igem.org" class="font-mono mx-2 mb-2 text-lg text-sky-500 hover:text-sky-400 transition duration-300">Click me &rarr;</a>
          <p class="text-gray-800 text-2xl translate-x-1 font-extrabold font-mono">Reach out with any questions</p>
          <p class="m-2">UA iGEM is always looking for suggestions, advice, and new ideas to consider. If you have any ideas on how we can improve, or are hosting a research event, we'd love to talk! Also, if you have any questions regarding donations, the application process, or our current research, don't hesitate to reach out.</p>
          <p class="mx-2">Our email: <strong class="text-sky-500 font-mono text-lg">igem@arizona.edu</strong></p><br />
          <div class="grid place-items-center -mt-6 mb-4 font-sans font-extralight">
            <form class="flex flex-col gap-3 w-210 text-black text-[19px]" action="https://formsubmit.co/jackgdouglass@arizona.edu" method="POST">
                <strong class="font-mono font-normal">Name</strong> <input type="text" name="name" class="border-2 border-black rounded-xl p-3 w-full -mt-2 bg-gradient-to-br from-white to-green-50" required />
                <strong class="font-mono font-normal">Email</strong> <input type="email" name="email" class="border-2 border-black rounded-xl p-3 -mt-2 bg-gradient-to-br from-white to-green-50" required />
                <strong class="font-mono font-normal">Message</strong> <textarea type="text" name="message" class="border-2 border-black rounded-xl p-3 min-h-75 -mt-2 bg-gradient-to-br from-white to-green-50" required />
                <input type="submit" value="Send" class="text-white bg-gradient-to-tl from-purple-300 to-green-400 rounded-xl p-3 hover:scale-102 transition duration-300 text-xl mt-1 font-mono" />
            </form>
         </div>
        </div>
      </>
    )
}

export default Contact;