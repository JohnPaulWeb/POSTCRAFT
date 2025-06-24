import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";


interface SocialMediaProps {
    platform: string;
    username: string;
    icon: React.ReactNode;
    color: string;
}

export default function SocialMedia({ platform, username, icon, color}: SocialMediaProps) {
    return (
        
        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className={cn("p-4 text-white", color)}>
                <div className="flex justify-between items-center">
                    {icon}
                    <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">Connected</span>
                </div>
                <h3 className="text-xl font-bold mt-2">{platform}</h3>
                <p className="text-sm opacity-90">{username}</p>
            </div>

            <div className="p-4 bg-white">
                <div className="flex justify-between text-sm">
                    <div>
                        <p className="font-bold">100</p>
                        <p className="text-gray-500">Friends</p>
                    </div>
                    <div>
                        <p className="font-bold">100</p>
                        <p className="text-gray-500">Followers</p>
                    </div>
                    <div>
                        <p className="font-bold">100</p>
                        <p className="text-gray-500">Post</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}