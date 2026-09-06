import { useRef, useState } from "react";

export default function Cont() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/xvkoqqzz", {
        method: "POST",
        body: new FormData(formRef.current),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formRef.current.reset();

        setSent(true);

        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="Contact" className="py-20 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
        

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Let's Get In Touch
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Have a question, want to discuss an opportunity, or just want to say
            hello? Feel free to send me a message.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-zinc-900/60 border border-teal-400/40 rounded-3xl p-6 sm:p-10 space-y-5 shadow-2xl backdrop-blur-md"
            >
              <h3 className="text-xl font-bold font-display text-white mb-6">
                Send Me A Message
              </h3>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-5 py-3.5 bg-zinc-950 border border-zinc-800 text-white rounded-2xl placeholder-zinc-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-teal-400 text-black font-bold text-sm uppercase tracking-wider py-4 rounded-2xl hover:bg-zinc-200 hover:-translate-y-0.5 transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Message"}
                
              </button>
            </form>

            {sent && (
              <div className="fixed top-6 right-6 z-50">
                <div className="bg-zinc-900 border border-teal-400/50 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-xl">✓</span>

                    <div>
                      <p className="font-bold">Message Sent!</p>

                      <p className="text-sm text-zinc-400">
                        Your message has been sent successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
