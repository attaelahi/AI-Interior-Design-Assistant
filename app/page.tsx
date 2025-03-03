import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Compass, Lightbulb, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted className="w-full h-full object-cover opacity-50">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-modern-tv-setup-4925-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Transform Your Space with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Upload a photo of your room and get personalized design concepts in seconds
          </p>
          <Link href="/upload">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
              <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Your Room</h3>
              <p className="text-gray-400">
                Take a photo of your room or upload an existing one. Our AI will analyze the space.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Style</h3>
              <p className="text-gray-400">
                Select from various design styles or mix them to create your perfect aesthetic.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
              <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <Compass className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visualize in 3D & AR</h3>
              <p className="text-gray-400">
                See your new design in 3D and use AR to visualize how it fits in your actual space.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:scale-105 hover:border-purple-500">
              <div className="w-16 h-16 bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shop Your Design</h3>
              <p className="text-gray-400">
                Find and purchase the exact furniture and decor items from your design concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Before & After Transformations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 overflow-hidden rounded-xl border border-gray-800">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      Before
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=600&auto=format&fit=crop"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-md">
                      After
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 bg-gray-900">
                  <h3 className="font-bold">Modern Living Room Makeover</h3>
                  <p className="text-sm text-gray-400">Transformed from traditional to modern minimalist</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 overflow-hidden rounded-xl border border-gray-800">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      Before
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 relative">
                    <div className="absolute top-4 right-4 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-md">
                      After
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 bg-gray-900">
                  <h3 className="font-bold">Cozy Bedroom Redesign</h3>
                  <p className="text-sm text-gray-400">From bland to Scandinavian-inspired comfort</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-950 hover:text-purple-300"
              >
                View More Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who have redesigned their homes with our AI assistant
          </p>
          <Link href="/upload">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg"
            >
              Start Your Design Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

