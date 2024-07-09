import { abril_fatface } from "./Header"

const faqs = [
    {
        question: "What is VerveAI?",
        answer: "VerveAI is the all-in-one AI suite for creators, offering tools for writing, audio/video editing, captioning, and even multilingual translation. Focus on your vision,we'll handle the tech."
    },
    {
        question: "Is there any time limit for each video?",
        answer: "Yes! Every video has a limit. Free plan has a limit of 2 minutes, 10 minutes for bronze plan, 30 minutes for silver plan and Unlimited for gold plan."
    }
];

export default function FAQs() {
    return (
        <section className="grid place-content-center">
            <div className="py-24 text-center text-zinc-100 text-4xl sm:text-6xl">
                <h1 className={abril_fatface.className}>Frequently asked questions</h1>
            </div>

            <div className="my-16 mt-1 px-10 grid grid-cols-1 sm:grid-cols-2 gap-2 place-content-center">
                {faqs.map((faq) => (
                    <div className="p-4" key={faq.question}>
                        <div className="my-6">
                            <h1 className="text-white font-bold text-lg">{faq.question}</h1>
                        </div>
                        <div>
                            <p className="text-zinc-500">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}