"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, ImageIcon, FileUp, Camera } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setFile(file)
    simulateUpload()
  }

  const simulateUpload = () => {
    setUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            window.location.href = "/design"
          }, 500)
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Upload Your Room</h1>
          <p className="text-gray-400 text-center mb-8">
            Upload a photo of your room to get started with your design transformation
          </p>

          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upload">Upload Photo</TabsTrigger>
              <TabsTrigger value="camera">Take Photo</TabsTrigger>
              <TabsTrigger value="gallery">Sample Rooms</TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <Card className="border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <div
                    className={`border-2 border-dashed rounded-xl p-12 text-center ${dragActive ? "border-purple-500 bg-purple-500/10" : "border-gray-700"} transition-all duration-200`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {!file && !uploading ? (
                      <>
                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Upload className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium mb-2">Drag & Drop Your Room Photo</h3>
                        <p className="text-gray-400 mb-6">Support for JPG, PNG files up to 20MB</p>
                        <input
                          id="file-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                        />
                        <label htmlFor="file-upload">
                          <Button
                            variant="outline"
                            className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
                          >
                            <FileUp className="mr-2 h-4 w-4" /> Browse Files
                          </Button>
                        </label>
                      </>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <ImageIcon className="h-16 w-16 text-purple-400 mb-4" />
                        </div>
                        {file && <p className="text-gray-300">{file.name}</p>}
                        <Progress value={uploadProgress} className="h-2 w-full bg-gray-800" />
                        <p className="text-sm text-gray-400">
                          {uploadProgress < 100 ? "Uploading..." : "Processing your image..."}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      By uploading, you agree to our{" "}
                      <Link href="/terms" className="text-purple-400 hover:underline">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="camera">
              <Card className="border-gray-800 bg-gray-900">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Camera className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Use Your Camera</h3>
                  <p className="text-gray-400 mb-6">Take a photo of your room directly using your device camera</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Open Camera
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gallery">
              <Card className="border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Sample Rooms</h3>
                  <p className="text-gray-400 mb-6">
                    Don't have a photo? Choose one of our sample rooms to see how it works
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="relative group cursor-pointer"
                        onClick={() => (window.location.href = "/design")}
                      >
                        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-200 rounded-lg"></div>
                        <img
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={`Sample room ${item}`}
                          className="rounded-lg border border-gray-800 w-full aspect-square object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs p-1 rounded">
                          Sample Room {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Need help with taking good room photos?</p>
            <Link href="/tips" className="text-purple-400 hover:underline">
              View our photo tips guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

