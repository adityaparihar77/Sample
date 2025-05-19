import { Phone, MapPin, Globe, Star, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SalonLanding() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-[#333333]">
              Top Notch Salon
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-[#333333] hover:text-[#d4a276] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-[#333333] hover:text-[#d4a276] transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-[#333333] hover:text-[#d4a276] transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d4a276]/30 to-[#e8d9c5]/30"></div>
          
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#333333] mb-4">
              Top Notch Salon
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] mb-6">
              10+ Years of Premium Hairdressing in Denton, TX
            </p>
            <div className="flex items-center justify-center mb-8">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 opacity-50" />
              <span className="ml-2 text-[#666666]">
                4.7 from 150+ happy customers
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19404421805"
                className="flex items-center justify-center gap-2 bg-[#d4a276] text-white px-6 py-3 rounded-md hover:bg-[#c29268] transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=613+Sunset+St,+Denton,+TX+76201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-[#333333] border border-[#d4a276] px-6 py-3 rounded-md hover:bg-[#faf7f2] transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-white text-[#333333] border border-[#d4a276] px-6 py-3 rounded-md hover:bg-[#faf7f2] transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#333333] mb-12">
              About Us
            </h2>
            <p className="text-lg text-[#666666] mb-12 leading-relaxed">
              At Top Notch Salon, we blend style with precision. Whether you're
              refreshing your current look or going for something bold, our
              expert stylists deliver results you'll love.
            </p>

            <div className="bg-[#faf7f2] p-8 rounded-lg border-l-4 border-[#d4a276] shadow-md mb-8 transform transition-all duration-700 hover:shadow-lg">
              <p className="text-xl italic text-[#666666] mb-4">
                "Sandra fixed me up great after my last stylist screwed up my
                hair."
              </p>
              <p className="text-right text-[#d4a276] font-medium">
                — Happy Customer
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-[#faf7f2] p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-[#d4a276]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#d4a276]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#333333] mb-2">
                  Expert Stylists
                </h3>
                <p className="text-[#666666]">
                  Our team has years of experience and ongoing training.
                </p>
              </div>

              <div className="bg-[#faf7f2] p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-[#d4a276]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#d4a276]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#333333] mb-2">
                  Premium Products
                </h3>
                <p className="text-[#666666]">
                  We use only the highest quality products for your hair.
                </p>
              </div>

              <div className="bg-[#faf7f2] p-6 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-[#d4a276]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#d4a276]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#333333] mb-2">
                  Relaxing Environment
                </h3>
                <p className="text-[#666666]">
                  Enjoy a peaceful atmosphere during your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#faf7f2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#333333] mb-16">
            Our Signature Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-[#333333] mb-2">
                  {service.name}
                </h3>
                <p className="text-[#666666] mb-4">{service.description}</p>
                <p className="text-[#d4a276] font-bold">{service.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="tel:+19404421805"
              className="inline-flex items-center justify-center gap-2 bg-[#d4a276] text-white px-8 py-3 rounded-md hover:bg-[#c29268] transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#333333] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">
                Top Notch Salon
              </h3>
              <p className="mb-4 opacity-80">
                Premium hairdressing services in Denton, TX since 2013.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#d4a276] transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#d4a276] transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Hours</h3>
              <ul className="space-y-2 opacity-80">
                <li>Monday - Friday: 9am - 7pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#d4a276]" />
                  613 Sunset St, Denton, TX 76201
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#d4a276]" />
                  +1 940-442-1805
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#d4a276]" />
                  www.topnotchsalon.com
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Newsletter</h3>
              <p className="mb-4 opacity-80">
                Subscribe for special offers and updates.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-[#333333]"
                />
                <button
                  type="submit"
                  className="bg-[#d4a276] px-4 py-2 rounded-r-md hover:bg-[#c29268] transition-colors duration-300"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60">
            <p>
              &copy; {new Date().getFullYear()} Top Notch Salon. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample services data
const services = [
  {
    name: "Women's Haircut & Style",
    description:
      "Precision cut and professional styling to suit your face shape and preferences.",
    price: "From $45"
  },
  {
    name: "Men's Haircut",
    description:
      "Classic or modern styles with attention to detail and personal preferences.",
    price: "From $30"
  },
  {
    name: "Color & Highlights",
    description:
      "Full color, partial or full highlights using premium products.",
    price: "From $75"
  },
  {
    name: "Balayage",
    description: "Hand-painted highlights creating a natural, sun-kissed look.",
    price: "From $120"
  },
  {
    name: "Blowout & Styling",
    description: "Professional blowout with styling for any occasion.",
    price: "From $35"
  },
  {
    name: "Deep Conditioning Treatment",
    description:
      "Intensive treatment to restore moisture and shine to damaged hair.",
    price: "From $25"
  }
]
