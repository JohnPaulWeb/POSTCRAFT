import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";


export default function MobileNav() {
    return (

        <div className="h-full bg-white/40 backdrop:blur-md flex flex-col">
            <div className="p-6 border-b-4 border-black">
                <h2 className="text-2xl font-black">POSTCRAFT</h2>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <nav className="space-y-2 mb-8">
                    <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">
                    Dashboard
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">
                    Analytics
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">
                    Settings
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">
                    Logout
                    </Link>
                </nav>

                <div>
                    <h2 className="text-xl font-black mb-4">Platforms</h2>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                            <Instagram className="h-5 w-5" />
                            Instagram
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                            <Twitter className="h-5 w-5" />
                            Twitter
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                            <Linkedin className="h-5 w-5" />
                            Linkedin
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2 rounded-xl border-2 border-black font-bold">
                            <Youtube className="h-5 w-5" />
                            Youtube
                        </Button>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t-4 border-black">
                <div className="grid grid-cols-2 gap-2">
                    <Button className="bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold">
                     Connect
                    </Button>
                    <Button variant="outline" className="bg-black hover:bg-black/80 text-white rounded-xl border-2 border-black font-bold">
                     Settings
                    </Button>
                </div>
            </div>
        </div>
    )
}