import Header, { playfair_display } from "@/components/custom/Header";
import { abril_fatface } from "@/components/custom/Header";
import Usage from "@/components/custom/Usage";
import FAQs from "@/components/custom/FAQs";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

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
            The <span className="text-slate-200">all-in-one AI</span> suite for creators
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
          <div className="p-3 cursor-pointer border text-zinc-900 border-zinc-500 my-4 bg-slate-50 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Bronze</h1>
            </div>

            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$5<span className="text-2xl">/month</span></h1>
            </div>


            <div className="p-4">
              <ul>
                <li className="list-disc">
                  <h3>
                    1 Space.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    30 Article generations upto 5000 words each.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Video Manipulation upto 5 videos.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Up to 10 minutes of video limit.
                  </h3>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 cursor-pointer text-zinc-900 border bg-blue-500 border-blue-500 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-2xl">Silver</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$10<span className="text-2xl">/month</span></h1>
            </div>

            <div className="p-4">
              <ul>
                <li className="list-disc">
                  <h3>
                    Everything in Broze Plan + 
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    3 Spaces.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    50 Article generations.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Unlimited article length.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Video Manipulation upto 10 videos.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Up to 30 minutes of video limit.
                  </h3>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 cursor-pointer text-zinc-900 bg-rose-400 my-4 px-6">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Gold</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>$20<span className="text-2xl">/month</span></h1>
            </div>

            <div className="p-4">
              <ul>
                <li className="list-disc">
                  <h3>
                    Everything in Silver Plan + 
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Unlimited Spaces.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Unlimited Article generations.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Unlimited article length.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Unlimited Video Manipulation.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    No time limit for video.
                  </h3>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-3 cursor-pointer bg-emerald-300 text-zinc-900 my-4 px-6 mt-10 md:col-start-2">
            <div className="py-4">
              <h1 className="text-zinc-900 font-bold text-xl">Free Trial</h1>
            </div>
            <div className="py-4">
              <h1 className={abril_fatface.className + " text-6xl"}>Free</h1>
            </div>

            <div className="p-4">
              <ul>
                <li className="list-disc">
                  <h3>
                    1 Space.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    10 Article generations upto 500 words each.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Video Manipulation upto 1 video.
                  </h3>
                </li>
                <li className="list-disc">
                  <h3>
                    Up to 2 minutes of video limit.
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-zinc-100 text-5xl sm:text-6xl py-10 pt-24">
          <h1 className={abril_fatface.className}>Usage</h1>
        </div>

        <div className="pt-4 grid place-content-center">
          <Usage></Usage>
        </div>
      </section>

      <div className="py-18 bg-zinc-950 grid place-content-center">
        <FAQs />
      </div>

      <footer className="bg-black py-20 px-8 grid grid-cols-1 md:grid-cols-3">
        <div className="md:px-8">
          <h1 className="text-xl font-bold">
            <Link href="/">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500">VerveAI</span>
            </Link>
          </h1>
          <p className="py-4 text-zinc-400">
            The All-in-one AI suite for creators, offering tools for writing, audio/video editing, captioning, and even multilingual translation. Focus on your vision,we'll handle the tech.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-2 px-4">
          <div className="grid md:justify-center">
            <div className="py-2">
              <h1>
                Products
              </h1>
            </div>
            <div className="text-sm">
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Content Writing
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Audio Manipulation
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Audio Transcription
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Video Manipulation
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Video Dubbing
                </Link>
              </div>
            </div>
          </div>
          <div className="grid justify-start px-6">
            <div className="py-2">
              <h1>
                Company
              </h1>
            </div>
            <div className="text-sm">
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Blogs
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Resources
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Privacy Policy
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Terms of Use
                </Link>
              </div>
              <div className="py-1">
                <Link href="/" className="text-zinc-400 hover:text-zinc-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black py-10 flex space-x-5 justify-center text-white">
        <Link href="https://x.com/AdityaPatwa07/" target="_blank" className="text-xs hover:underline underline-offset-4 font-extrabold" prefetch={false}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x w-6 h-6" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </Link>
        <Link href="https://github.com/Aditya-Patwa/" target="_blank" className="text-xs hover:underline underline-offset-4 font-extrabold" prefetch={false}>
          <Github className="w-6 h-6" />
        </Link>
        <Link href="https://linkedin.com/in/adityapatwa07/" target="_blank" className="text-xs hover:underline underline-offset-4 font-extrabold" prefetch={false}>
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link href="mailto:adityapatwa.tech@gmail.com" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </>
  );
}
