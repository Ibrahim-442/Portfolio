export default function About() {
  return (
    <section id="About" className="py-24 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

      <div className="lg:col-span-7">

 <div className="flex items-center gap-4 mb-6">
  <span className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400">
    ABOUT ME
  </span>

  <div className="h-px w-14 bg-zinc-800"></div>
</div>

<h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.05]">
 <span className="text-zinc-400"> Hi, I’m </span>
  <span className="block  mt-2">
   Ibrahim Mohamed.
  </span>
</h2>

<div className="flex items-center gap-3 mt-8 mb-8">
  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
  <div className="h-px w-20 bg-zinc-800"></div>
</div>

<div className="max-w-2xl space-y-5">
  <p className="text-zinc-200 text-lg leading-relaxed">
    I’m a Computer Engineering student with a strong interest in software
    development and technology.
  </p>

  <p className="text-zinc-500 text-base leading-relaxed">
    I enjoy solving problems, exploring new technologies, and turning ideas
    into practical software solutions. I’m continuously learning, building
    projects, and developing my skills to grow as a software engineer.
  </p>
</div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10 pt-8 border-t border-zinc-800">

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
              Field
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              Software Development
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
              Background
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              Computer Engineering
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
              Approach
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              Learn · Build · Improve
            </p>
          </div>

        </div>
      </div>

      <div className="lg:col-span-5">

        <div className="relative">
          <div className="absolute -inset-4 bg-teal-400/5 blur-3xl rounded-full"></div>

          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">

            <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800">
              <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-400/70"></span>

              <span className="ml-3 text-xs text-zinc-600 font-mono">
                About-me.js
              </span>
            </div>

            <div className="p-6 sm:p-8 font-mono text-sm leading-8">

              <p className="text-zinc-400">
                // Who am I?
              </p>

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-teal-400">developer</span> = {"{"}
              </p>

              <div className="pl-5">

                <p>
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-green-400">
                    "Ibrahim Mohamed"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-green-400">
                    "Computer Engineering student"
                  </span>
                  ,
                </p>
        
                <p>
                  <span className="text-zinc-400">interest:</span>{" "}
                  <span className="text-green-400">
                    "Software Development"
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-zinc-400">mindset:</span>{" "}
                  <span className="text-green-400">
                    "Always Learning"
                  </span>
                
                </p>

           
              </div>

              <p>{"}"};</p>

              <p className="mt-4">
                <span className="text-purple-400">console</span>.
                <span className="text-blue-400">log</span>(
                <span className="text-green-400">
                  "Keep learning. Keep building."
                </span>
                );
              </p>

              <div className="mt-6 pt-5 border-t border-zinc-800">
                <span className="text-teal-400">➜</span>

                <span className="text-zinc-500 ml-2">
                  Ready to build something great...
                </span>

                <span className="animate-pulse text-teal-400">
                  _
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
  );
}
