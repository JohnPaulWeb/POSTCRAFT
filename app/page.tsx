import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Instagram, Linkedin, Menu, Plus, Twitter, Youtube } from "lucide-react";
import MobileNav from "./components/mobile-nav";
import Link from "next/link";
import SocialMedia from "./components/SocialMedia";


export default function Page() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 sm:p-4 md:p-8">
      
      <div className="w-full max-w-7xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">

      <header className="border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md">

      <div className="flex justify-between items-center gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">POSTCRAFT</h1>

        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl border-2 border-black">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-r-4 border-black p-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop ito */}
        <div className="hidden sm:flex items-center gap-3">
          <Button className="bg-black hover:bg-black/80 text-white rounded-b-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Connect Account
          </Button>
          <Button variant="outline" className="rounded-b-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Settings
          </Button>
        </div>
      </div>
      </header>

      <div className="grid md:grid-cols-[280px_1fr] h-[calc(100vh-6rem)]">

        <div className="hidden md:block border-r-4 border-black bg-white/40 p-4">

        <nav className="space-y-2">
          <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 bg-black text-white rounded-xl">Dashboard</Link>
          <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Analytics</Link>
          <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Calendar</Link>
          <Link href="#" className="flex items-center gap-2 text-lg font-bold p-3 hover:bg-black/10 rounded-xl">Messages</Link>

        </nav>
        
        <div className="mt-8">
          <h2 className="space-y-2"></h2>
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

      {/* This is Main Page */}
      <div className="overflow-auto p-4 sm:p-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-black mb-4">Connected Accounts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SocialMedia platform="Instagram" username="@yourband" icon={<Instagram className="h-6 w-6" />} color="bg-gradient-to-br from-purple-500 to-pink-500" />
            <SocialMedia platform="Twitter" username="@yourband" icon={<Twitter className="h-6 w-6" />} color="bg-gradient-to-br from-blue-400 to-blue-600" />
            <SocialMedia platform="LinkedIn" username="@yourband" icon={<Linkedin className="h-6 w-6" />} color="bg-gradient-to-br from-blue-700 to-blue-900" />
            <SocialMedia platform="YouTube" username="@yourband" icon={<Youtube className="h-6 w-6" />} color="bg-gradient-to-br from-red-500 to-red-700" />
            <Button className="h-full min-h-[120px] border-4 border-dashed border-black rounded-xl flex flex-col items-center justify-center gap-2 bg-white/50 hover:bg-white/70">
              <Plus className="h-8 w-8" />
              <span className="font-bold">Add Account</span>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}