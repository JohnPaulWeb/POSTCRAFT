"use client"

import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


interface ContentCreatorProps {
    type: "post" | "story" | "video"
}

export default function ContentCreator({ type }: ContentCreatorProps) {
    const [selectedPlatforms, setSelectedPlatforms] = useState({
        instagram: true,
        twitter: true,
        linkedin: false,
        youtube: false,
    })
    return (

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
            <Card className="border-4 border-black rounded-xl p-4 sm:p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="mb-4">
                    <Textarea placeholder={`Write your ${type} content here...`}
                    className="min-h-[150px] border-2 border-black rounded-xl p-4 text-lg" />
                </div>
            </Card>
        </div>
    )
}