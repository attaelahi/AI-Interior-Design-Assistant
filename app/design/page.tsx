"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Eye,
  Heart,
  Layers,
  Palette,
  Share2,
  ShoppingBag,
  Sliders,
  Smartphone,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import RoomVisualization from "@/components/room-visualization"

export default function DesignPage() {
  const [loading, setLoading] = useState(true)
  const [activeStyle, setActiveStyle] = useState("modern")
  const [budget, setBudget] = useState([1000])
  const [showSplitView, setShowSplitView] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const styles = [
    { id: "modern", name: "Modern", icon: "🏢" },
    { id: "scandinavian", name: "Scandinavian", icon: "🌲" },
    { id: "industrial", name: "Industrial", icon: "🏭" },
    { id: "minimalist", name: "Minimalist", icon: "⬜" },
    { id: "bohemian", name: "Bohemian", icon: "🌈" },
    { id: "traditional", name: "Traditional", icon: "🏛️" },
    { id: "mid-century", name: "Mid-Century", icon: "🪑" },
    { id: "coastal", name: "Coastal", icon: "🌊" },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/upload">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Design Studio</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <ShoppingBag className="h-4 w-4 mr-2" /> Shop This Room
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-65px)]">
        {/* Sidebar */}
        <div className="w-full lg:w-80 border-r border-gray-800 bg-gray-900 overflow-y-auto">
          <div className="p-4">
            <Tabs defaultValue="styles">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="styles">
                  <Palette className="h-4 w-4 mr-2" /> Styles
                </TabsTrigger>
                <TabsTrigger value="customize">
                  <Sliders className="h-4 w-4 mr-2" /> Customize
                </TabsTrigger>
                <TabsTrigger value="layers">
                  <Layers className="h-4 w-4 mr-2" /> Layers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="styles" className="mt-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Design Styles</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {styles.map((style) => (
                      <button
                        key={style.id}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          activeStyle === style.id
                            ? "border-purple-500 bg-purple-500/10"
                            : "border-gray-800 hover:border-gray-700"
                        }`}
                        onClick={() => setActiveStyle(style.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg mr-2">{style.icon}</span>
                          <span className="text-sm">{style.name}</span>
                          {activeStyle === style.id && <Check className="h-4 w-4 text-purple-500" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Budget Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[1000]}
                      max={5000}
                      step={100}
                      value={budget}
                      onValueChange={setBudget}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>$0</span>
                      <span>${budget[0]}</span>
                      <span>$5,000+</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Room Purpose</h3>
                  <Select defaultValue="living">
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="living">Living & Relaxing</SelectItem>
                      <SelectItem value="working">Working & Studying</SelectItem>
                      <SelectItem value="entertaining">Entertaining Guests</SelectItem>
                      <SelectItem value="multipurpose">Multi-purpose</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Special Requirements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="pet-friendly">Pet Friendly</Label>
                      <Switch id="pet-friendly" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="child-safe">Child Safe</Label>
                      <Switch id="child-safe" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="eco-friendly">Eco Friendly</Label>
                      <Switch id="eco-friendly" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customize" className="mt-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Color Palette</h3>
                  <div className="flex gap-2">
                    {["#F8FAFC", "#94A3B8", "#334155", "#0F172A", "#7C3AED"].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border border-gray-700"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center">
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Style Mix</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Modern</span>
                        <span>70%</span>
                      </div>
                      <Slider defaultValue={[70]} max={100} step={5} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Industrial</span>
                        <span>30%</span>
                      </div>
                      <Slider defaultValue={[30]} max={100} step={5} />
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Add Style
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Lighting</h3>
                  <Select defaultValue="natural">
                    <SelectTrigger>
                      <SelectValue placeholder="Select lighting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="natural">Natural Daylight</SelectItem>
                      <SelectItem value="warm">Warm Evening</SelectItem>
                      <SelectItem value="cool">Cool White</SelectItem>
                      <SelectItem value="ambient">Ambient Mood</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="layers" className="mt-4 space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Furniture & Decor</h3>
                  <div className="space-y-2">
                    {["Sofa", "Coffee Table", "Side Table", "Rug", "Lighting", "Wall Art"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between p-2 border border-gray-800 rounded-lg"
                      >
                        <span>{item}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Materials</h3>
                  <div className="space-y-2">
                    {["Wood", "Metal", "Glass", "Fabric", "Leather"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between p-2 border border-gray-800 rounded-lg"
                      >
                        <span>{item}</span>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Plants & Greenery</h3>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="abundant">Abundant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden relative">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-950">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400">Generating your design...</p>
              </div>
            </div>
          ) : (
            <>
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSplitView(!showSplitView)}
                  className="bg-gray-900/80 backdrop-blur-sm"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showSplitView ? "Hide Original" : "Show Split View"}
                </Button>
              </div>

              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full bg-gray-900/80 backdrop-blur-sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button className="rounded-full bg-purple-600 hover:bg-purple-700">Design 1 of 3</Button>
                <Button variant="outline" size="icon" className="rounded-full bg-gray-900/80 backdrop-blur-sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-4 z-10">
                <Button variant="outline" className="bg-gray-900/80 backdrop-blur-sm">
                  <Smartphone className="h-4 w-4 mr-2" /> View in AR
                </Button>
              </div>

              <RoomVisualization showSplitView={showSplitView} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

