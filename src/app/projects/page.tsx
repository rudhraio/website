import Link from "next/link";

function Projects() {
  return (
    <>
      <section className="bg-white solid-shadow mt-12" id="about-me">
        <div className="flex flex-col ">

          <h4 className="text-6xl uppercase">
            Projects
          </h4>
          <p className="text-lg mt-3">

          </p>
        </div>
        <div className="flex gap-x-12 mt-12">
          <div className="border p-3 rounded-lg bg-black text-white">
            <p className="text-5xl mb-3 ">32+ </p>
            <p className="text-xl uppercase">
              Client Project
            </p>
          </div>
          <div className="border-2 p-3 rounded-lg">
            <p className="text-5xl mb-3">8+ </p>
            <p className="text-xl uppercase">
              Personal Project
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-x-3">
            <div>

              <div className="w-64 h-64 bg-slate-300 rounded-lg cursor-pointer"></div>
              <p>
                React Base project
              </p>
            </div>
            <div>

              <div className="w-64 h-64 bg-slate-300 rounded-lg cursor-pointer"></div>
              <p>
                NodeJs Base project
              </p>
            </div>
            <div>

              <div className="w-64 h-64 bg-slate-300 rounded-lg cursor-pointer"></div>
              <p>
                SSH GitHub Action
              </p>
            </div>
            <div className="flex flex-col justify-center items-center px-6 font-medium text-lg  w-64 h-64 bg-slate-300 rounded-lg ">
              <p>
                Wana checkout more projects please visit my GitHub
              </p>
              <Link href="https://github.com/rudhraio" className="text-left mr-auto mt-6 ">
                open github
              </Link>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default Projects;