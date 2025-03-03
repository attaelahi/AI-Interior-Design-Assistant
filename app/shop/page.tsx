"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ChevronDown, ExternalLink, Filter, Heart, ShoppingBag, ShoppingCart, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([1000])

  const products = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      price: 499,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      category: "furniture",
    },
    {
      id: 2,
      name: "Minimalist Coffee Table",
      price: 349,
      rating: 4.2,
      image: "/placeholder.svg?height=300&width=300",
      category: "furniture",
    },
    {
      id: 3,
      name: "Geometric Area Rug",
      price: 199,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      category: "decor",
    },
    {
      id: 4,
      name: "Pendant Light Fixture",
      price: 129,
      rating: 4.3,
      image: "/placeholder.svg?height=300&width=300",
      category: "lighting",
    },
    {
      id: 5,
      name: "Abstract Wall Art",
      price: 89,
      rating: 4.1,
      image: "/placeholder.svg?height=300&width=300",
      category: "decor",
    },
    {
      id: 6,
      name: "Decorative Throw Pillows (Set of 2)",
      price: 59,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      category: "decor",
    },
    {
      id: 7,
      name: "Floating Wall Shelf",
      price: 79,
      rating: 4.4,
      image: "/placeholder.svg?height=300&width=300",
      category: "furniture",
    },
    {
      id: 8,
      name: "Indoor Plant with Ceramic Pot",
      price: 45,
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=300",
      category: "decor",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/design">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Shop Your Design</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
              <h2 className="text-lg font-medium mb-4">Filters</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-400">Category</h3>
                  <div className="space-y-1">
                    {["All Items", "Furniture", "Lighting", "Decor", "Textiles", "Storage"].map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category}
                          className="rounded border-gray-700 text-purple-600 focus:ring-purple-600"
                          defaultChecked={category === "All Items"}
                        />
                        <label htmlFor={category} className="ml-2 text-sm">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-400">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[1000]}
                      max={2000}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>$0</span>
                      <span>${priceRange[0]}</span>
                      <span>$2,000+</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-400">Brand</h3>
                  <div className="space-y-1">
                    {["All Brands", "Modern Home", "Scandic Design", "Urban Living", "Eco Furnish"].map((brand) => (
                      <div key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          id={brand}
                          className="rounded border-gray-700 text-purple-600 focus:ring-purple-600"
                          defaultChecked={brand === "All Brands"}
                        />
                        <label htmlFor={brand} className="ml-2 text-sm">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-400">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {["#FFFFFF", "#000000", "#94A3B8", "#7C3AED", "#2563EB", "#16A34A", "#DC2626", "#CA8A04"].map(
                      (color) => (
                        <button
                          key={color}
                          className="w-6 h-6 rounded-full border border-gray-700"
                          style={{ backgroundColor: color }}
                        />
                      ),
                    )}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Products in Your Design (24)</h2>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" /> Filter
                  </Button>

                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Tabs defaultValue="grid">
                  <TabsList className="bg-gray-900">
                    <TabsTrigger value="grid" className="data-[state=active]:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                      </svg>
                    </TabsTrigger>
                    <TabsTrigger value="list" className="data-[state=active]:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="bg-gray-900 mb-6">
                <TabsTrigger value="all">All Items</TabsTrigger>
                <TabsTrigger value="furniture">Furniture</TabsTrigger>
                <TabsTrigger value="lighting">Lighting</TabsTrigger>
                <TabsTrigger value="decor">Decor</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <Card key={product.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                      <div className="relative group">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full aspect-square object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-gray-900/80 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <Button className="bg-white text-black hover:bg-gray-200">Quick View</Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : i < product.rating
                                      ? "fill-yellow-400/50 text-yellow-400"
                                      : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400 ml-1">{product.rating}</span>
                        </div>
                        <div className="mt-2 font-bold">${product.price}</div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                        </Button>
                        <Button variant="outline" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" className="mx-auto">
                    Load More <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="furniture" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {products
                    .filter((p) => p.category === "furniture")
                    .map((product) => (
                      <Card key={product.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <div className="relative group">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-gray-900/80 backdrop-blur-sm"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <Button className="bg-white text-black hover:bg-gray-200">Quick View</Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : i < product.rating
                                        ? "fill-yellow-400/50 text-yellow-400"
                                        : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-400 ml-1">{product.rating}</span>
                          </div>
                          <div className="mt-2 font-bold">${product.price}</div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                          </Button>
                          <Button variant="outline" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="lighting" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {products
                    .filter((p) => p.category === "lighting")
                    .map((product) => (
                      <Card key={product.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <div className="relative group">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-gray-900/80 backdrop-blur-sm"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <Button className="bg-white text-black hover:bg-gray-200">Quick View</Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : i < product.rating
                                        ? "fill-yellow-400/50 text-yellow-400"
                                        : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-400 ml-1">{product.rating}</span>
                          </div>
                          <div className="mt-2 font-bold">${product.price}</div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                          </Button>
                          <Button variant="outline" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="decor" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {products
                    .filter((p) => p.category === "decor")
                    .map((product) => (
                      <Card key={product.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <div className="relative group">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full aspect-square object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="rounded-full bg-gray-900/80 backdrop-blur-sm"
                            >
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <Button className="bg-white text-black hover:bg-gray-200">Quick View</Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : i < product.rating
                                        ? "fill-yellow-400/50 text-yellow-400"
                                        : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-400 ml-1">{product.rating}</span>
                          </div>
                          <div className="mt-2 font-bold">${product.price}</div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
                          </Button>
                          <Button variant="outline" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

