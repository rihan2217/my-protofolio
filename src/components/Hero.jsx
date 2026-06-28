
import ArrowIcon from './ArrowIcon'
import SocialLinks from './SocialLinks'
import RobotAssistant from './RobotAssistant'

export default function Hero() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
  <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">

    {/* MAIN HERO SECTION */}
    <div className="flex-1 flex items-center w-full">
      <div className="max-w-screen-xl mx-auto w-full px-6">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* LEFT TEXT CONTENT */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-['Spartan'] leading-tight">
              Md Rihan
            </h1>

            <p className="text-[#1788ae] text-lg md:text-2xl italic mt-4">
              Full Stack Developer — MERN Stack
            </p>

            <p className="text-[#b8b8b8] mt-6 max-w-xl leading-relaxed text-sm md:text-base mx-auto md:mx-0">
              Passionate about building modern, responsive, and interactive web
              applications using React.js, Java, Node.js, Tailwind CSS, and MERN stack technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start">

              <button
                onClick={() => scrollTo('about')}
                className="bg-gradient-to-r from-[#1595b6] to-[#1f2667] px-7 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(23,136,174,0.35)] relative group"
              >
                About Me

                <ArrowIcon className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 transition-all duration-300" />
              </button>

              <button
                onClick={() => scrollTo('latest-works')}
                className="border border-[#1788ae] px-7 py-3 rounded-xl font-bold hover:bg-[#1788ae]/10 transition-all duration-300"
              >
                My Projects
              </button>

            </div>
          </div>

          {/* RIGHT ROBOT */}
          <div className="flex-1 flex justify-center items-center">

            <div className="scale-[0.9] md:scale-100">
              <RobotAssistant />
              
            </div>
            <SocialLinks/>
          </div>

        </div>
      </div>
    </div>

    {/* BOTTOM SCROLL BUTTON */}
    <div className="flex justify-center pb-10">

      <button
        onClick={() => scrollTo('latest-works')}
        className="relative group"
      >
        <div className="w-[2px] h-16 bg-[#444] mx-auto" />

        <ArrowIcon className="rotate-90 mt-3 group-hover:translate-y-2 transition-all duration-300" />
      </button>

    </div>
  </section>
)
}
