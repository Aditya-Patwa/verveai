import { Playfair_Display, Abril_Fatface } from "next/font/google";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet";
import Link from "next/link";

export const playfair_display = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })
export const abril_fatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });


export default function Header() {
    return (
        <header className="absolute z-10 w-screen flex justify-between py-4 px-6 bg-blend-darken">
            <div>
                <a href="/">
                    <h1 className={playfair_display.className + " font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500"}>
                        VerveAI
                    </h1>
                </a>
            </div>
            <div className="hidden md:grid place-content-center">
                <ul className="flex justify-between items-center pl-6">
                    <li className="list-none mx-3">
                        <a href="/" className="font-medium text-slate-300 hover:text-slate-100">Home</a>
                    </li>
                    <li className="list- mx-3">
                        <a href="/" className="font-medium text-slate-300 hover:text-slate-100">Blogs</a>
                    </li>
                    <li className="list-none mx-3">
                        <a href="/" className="font-medium text-slate-300 hover:text-slate-100">Products</a>
                    </li>
                    <li className="list-none mx-3">
                        <a href="/" className="font-medium text-slate-300 hover:text-slate-100">Pricing</a>
                    </li>
                    <li className="list-none mx-3">
                        <a href="/" className="font-medium text-slate-300 hover:text-slate-100">Feedback</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between">
                <a href="/" className="hidden sm:block py-1 px-3 rounded text-white">
                    Create Account
                </a>
                <a href="/" className="hidden sm:block py-1 px-3 rounded text-slate-900 bg-white border border-white hover:text-white hover:bg-slate-900">
                    Login
                </a>

                <Sheet>
                    <SheetTrigger className="grid md:hidden px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </SheetTrigger>
                    {/* @ts-ignore */}
                    <SheetContent>
                        <SheetHeader className="mt-4">
                            <SheetTitle>
                                <a href="/">
                                    <h1 className={playfair_display.className + " font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500"}>
                                        VerveAI
                                    </h1>
                                </a>
                            </SheetTitle>
                            <SheetDescription>
                                The All-in-one AI Suite for Creators.
                            </SheetDescription>
                        </SheetHeader>

                        <SheetFooter>
                            <Link href="/login">
                                Login
                            </Link>
                            
                            <Link href="/login" className="px-3 py-2 bg-black text-white">
                                Create Account
                            </Link>
                        </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
        </header >
    );
}