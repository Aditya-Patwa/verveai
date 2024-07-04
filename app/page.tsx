import Header, { playfair_display } from "@/components/custom/Header";
import { abril_fatface } from "@/components/custom/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32 h-screen grid place-content-center">
        <img src="img/pexels-kaip-1341279.jpg" alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
        <div className="px-3">
          <h1 className={abril_fatface.className + " text-center text-6xl sm:text-6xl md:text-8xl text-white"}>
            Unleash Your Creative Spark with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500">
              Verve AI
            </span>
          </h1>
          <h3 className={playfair_display.className + " mt-5 font-bold text-center text-xl md:text-3xl text-slate-400"}>
            Empower your <span className="text-slate-200">vision</span>. Ignite your <span
              className="text-slate-200">potential</span>.
          </h3>
        </div>
        <div className="absolute grid place-content-center inset-x-0 bottom-[10vh] animate-bounce">
          <a href="#products">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
              className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </a>
        </div>
      </main>


      <section>

      </section>

      <section className="w-screen min-h-screen bg-white py-24" id="products">
        <div className="text-center text-black text-5xl sm:text-6xl">
          <h1 className={abril_fatface.className}>Our Products</h1>
        </div>
        <div className="mt-20 px-[7vw] sm:px-10 md:px-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          <div className="rounded p-3 cursor-pointer">
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="py-3 px-2">
              <h1 className="text-xl my-3 font-bold text-zinc-900">Video Captioning</h1>
              <p className="font-normal text-zinc-600">
                Supercharge your videos with Verve AI&apos;s intelligent captioning. Capture every viewer&apos;s attention with accurate captions, reach a wider audience with multilingual support, and boost SEO with keyword-rich text. Unleash the full potential of your videos - effortlessly.
              </p>
            </div>
          </div>

          <div className="rounded p-3 cursor-pointer">
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="py-3 px-2">
              <h1 className="text-xl my-3 font-bold text-zinc-900">Content Writing</h1>
              <p className="font-normal text-zinc-600">
                Supercharge your videos with Verve AI&apos;s intelligent captioning. Capture every viewer&apos;s attention with accurate captions, reach a wider audience with multilingual support, and boost SEO with keyword-rich text. Unleash the full potential of your videos - effortlessly.
              </p>
            </div>
          </div>

          <div className="rounded p-3 cursor-pointer">
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="py-3 px-2">
              <h1 className="text-xl my-3 font-bold text-zinc-900">Audio and Video Dubbing</h1>
              <p className="font-normal text-zinc-600">
                Supercharge your videos with Verve AI&apos;s intelligent captioning. Capture every viewer&apos;s attention with accurate captions, reach a wider audience with multilingual support, and boost SEO with keyword-rich text. Unleash the full potential of your videos - effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-xl py-6">
            and, many more...
          </h1>
        </div>
      </section>


      <section className="w-screen min-h-screen bg-zinc-100 py-24">
        <div className="text-center text-zinc-800 text-5xl sm:text-6xl">
          <h1 className={abril_fatface.className}>Who We Are?</h1>
        </div>

        <div className={playfair_display.className + " font-black text-center px-[7vw] sm:px-12 my-16 text-3xl text-zinc-400"}>
          <p>
            We are <span className={abril_fatface.className + " text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500"}>Verve AI</span>, the creative spark that ignites your potential. <br /> We&apos;re the <span className="text-zinc-700">all-in-one AI suite for creators</span>, offering tools for writing, audio/video editing, captioning, and <span className="text-zinc-700">even multilingual translation.</span>  Focus on your vision,
            <span className="text-zinc-700">we&apos;ll handle the tech.</span>
          </p>
        </div>
      </section>

      <section className="w-screen bg-black py-24">
        <div className="text-center text-zinc-100 text-5xl sm:text-6xl">
          <h1 className={abril_fatface.className}>Pricing</h1>
        </div>

        

        <div className="mt-20 px-[9vw] sm:px-24 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-3 cursor-pointer border border-zinc-500 my-4 bg-slate-50 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Basic</h1>
            </div>

            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$5<span className="font-bold text-4xl">/month</span></h1>
              {/* <h2 className="py-2 font-bold text-xl">
                +$0.075 for every new response.
              </h2> */}
            </div>


            <div className="p-4">
              <ul>
                <li className="list-disc">
                  <h3>
                    10 text articles generation upto 500 words each.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    10 audio file manipulation.
                  </h3>
                </li>
              </ul>
            </div>
          </div> 

          <div className="p-3 cursor-pointer border bg-blue-500 border-blue-500 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-2xl">Professional</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$10<span className="font-bold text-4xl">/month</span></h1>
              {/* <h2 className="py-2 font-bold text-xl">
                +$0.065 for every new response.
              </h2> */}
            </div>
          </div> 

          <div className="p-3 cursor-pointer bg-rose-400 my-4 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Enterprice</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$20<span className="font-bold text-4xl">/month</span></h1>
              {/* <h2 className="py-2 font-bold text-xl">
                +$0.05 for every new response.
              </h2> */}
            </div>
          </div> 

          <div className="p-3 cursor-pointer bg-emerald-300 my-4 px-6 mt-10 md:col-start-2">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Free Trial</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$0<span className="font-bold text-4xl">/month</span></h1>
            </div>
          </div> 
        </div>
      </section>
    </>
  );
}
