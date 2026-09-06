export default function Educ() {
  return (
    <section id="Education" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-4 block">
            EDUCATION & ACADEMICS
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-5">
            Academic Background & Courses
          </h2>

          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
            Building a strong foundation in computer and software engineering
            through academic study and practical training.
          </p>
        </div>

        <div className="relative bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-teal-400/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-400/5 blur-3xl rounded-full"></div>

          <div className="relative flex flex-col md:flex-row gap-10 md:gap-14">
            <div className="md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  University Education
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
                Computer & Software Engineering
              </h3>

              <p className="text-zinc-500 text-sm font-medium pb-3">
                Misr University for Science and Technology
              </p>

              <div className="h-px w-16 bg-teal-400/50 mb-7"></div>

              <p className="text-zinc-400 text-base leading-7">
                I’m currently pursuing a Bachelor's Degree in Computer and
                Software Engineering. Throughout my academic journey, I have
                developed a strong foundation in programming, software
                engineering, problem solving, web development, and artificial
                intelligence.
              </p>
            </div>

            <div className="hidden md:block w-px bg-zinc-800"></div>

            <div className="md:hidden h-px w-full bg-zinc-800"></div>

            <div className="md:w-1/2 text-left">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Professional Training
                </span>
              </div>

              <p className="text-zinc-400 text-base leading-7 mb-8">
                Alongside my university studies, I continuously develop my
                technical skills through professional training and hands-on
                experience.
              </p>

              <div className="relative pl-6 border-l border-zinc-700">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-zinc-950"></div>
                {/* {training} */}

                
                <p className="text-emerald-400 text-sm font-bold mb-2">
                  DevOps — Telecom Egypt
                </p>

                <p className="text-zinc-500 text-xs">June 2026 – July 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
