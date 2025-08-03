"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon } from "lucide-react"
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

    const togglePlatform = (platform: keyof typeof selectedPlatforms) => {
        setSelectedPlatforms({
            ...selectedPlatforms,
            [platform]: !selectedPlatforms[platform],
        })
    }
    return (

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
            <Card className="border-4 border-black rounded-xl p-4 sm:p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                <div className="mb-4">
                    <Textarea placeholder={`Write your ${type} content here...`}
                    className="min-h-[150px] border-2 border-black rounded-xl p-4 text-lg" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <Button variant="outline" className="border-2 border-black rounded-xl font-bold flex gap-2 h-12">
                        <ImageIcon className="h-5 w-5" /> Schedule
                    </Button>
                </div>

                {type === "post" && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Post Feedback</h3>
                        <Tabs defaultValue="filters">
                            <TabsList className="bg-white/50 border-2 border-black rounded-xl p-1 mb-4 w-full">
                             <TabsTrigger value="filters" className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold">
                                Filters
                             </TabsTrigger>
                             <TabsTrigger value="hashtags" className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold">
                                Hashtags
                             </TabsTrigger>
                              <TabsTrigger value="advance" className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white font-bold">
                               Advance
                             </TabsTrigger>
                            </TabsList>
                            <TabsContent value="filters">
                                <div className="space-y-4">
                                    <div>
                                        <Label className="font-bold mb-2 block">Brightness</Label>
                                        <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                    </div>
                                    <div>
                                        <Label className="font-bold mb-2 block">Saturation</Label>
                                        <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="hashtags">
                                <Textarea placeholder="Add here." className="min-h-[100px] border-2 border-black rounded-xl p-4" />
                            </TabsContent>
                            <TabsContent value="advance">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label className="font-bold">Hide Likes</Label>
                                        <Switch />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Label className="font-bold">Turn off Comments</Label>
                                        <Switch />
                                    </div>
                                     <div className="flex items-center justify-between">
                                        <Label className="font-bold">Alt Text</Label>
                                        <Switch />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                )}

                {type === "story" && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Story Settings</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="border-2 border-black rounded-xl font-bold">
                                Add Sticker
                            </Button>
                              <Button variant="outline" className="border-2 border-black rounded-xl font-bold">
                                Add Text
                            </Button>
                              <Button variant="outline" className="border-2 border-black rounded-xl font-bold">
                                Add Sticker
                            </Button>
                              <Button variant="outline" className="border-2 border-black rounded-xl font-bold">
                                Add Sticker
                            </Button>
                        </div>
                    </div>
                )}

                {type === "video" && (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Video Settings</h3>
                    </div>
                )}
            </Card>
        </div>
    )
}