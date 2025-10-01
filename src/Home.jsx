import React from 'react';

function Home() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex sm:flex-row sm:items-end">
          <span className="text-2xl font-semibold leading-tight">Elite</span>
          <span className="sm:ml-2 text-xs text-gray-500">Addis Ababa, ET</span>
        </div>
        <ul className="hidden md:flex items-center space-x-8 text-2xl font-md">
          <li className="hover:text-yellow-500 cursor-pointer">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer">Suites</li>
          <li className="hover:text-yellow-500 cursor-pointer">Dining</li>
          <li className="hover:text-yellow-500 cursor-pointer">Amenities</li>
        </ul>
        <button className="bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400">
          Book Now
        </button>
      </nav>

      {/* Hero section with margin container */}
      <div className="max-w-8xl mx-auto py-7 px-4 md:px-6">
        <section className="relative h-[500px] overflow-hidden rounded-3xl">
          {/* Background image */}
          <img
            src="/bedroom.png"
            alt="Bedroom"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4 transition-opacity duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Welcome to Hotel Elite
            </h1>
            <p className="max-w-2xl mb-6 text-sm md:text-base text-gray-200">
              Experience modern comfort, luxury and personalised service in the heart of Addis Ababa. Choose your
              perfect room for an unforgettable stay.
            </p>
            {/* Booking form */}
            <div className="bg-white/90 backdrop-blur-md rounded-full flex flex-wrap justify-center items-center px-4 py-2 space-x-0 sm:space-x-4 w-full max-w-2xl">
              <input
                type="text"
                placeholder="Check‑in Date"
                className="flex-grow sm:flex-none sm:w-32 md:w-40 bg-transparent placeholder-gray-500 text-gray-800 px-2 py-2 focus:outline-none"
              />
              <div className="hidden sm:block h-5 w-px bg-gray-300" />
              <input
                type="text"
                placeholder="Check‑out Date"
                className="flex-grow sm:flex-none sm:w-32 md:w-40 bg-transparent placeholder-gray-500 text-gray-800 px-2 py-2 focus:outline-none"
              />
              <div className="hidden sm:block h-5 w-px bg-gray-300" />
              <input
                type="text"
                placeholder="Guests"
                className="flex-grow sm:flex-none sm:w-24 md:w-32 bg-transparent placeholder-gray-500 text-gray-800 px-2 py-2 focus:outline-none"
              />
              <button className="mt-2 sm:mt-0 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400">
                Check Availability
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Explore rooms section */}
      <section className="px-6 md:px-12 py-12">
        {/* Heading and description */}
        <div className="md:flex md:items-start md:justify-between">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            Explore our <br />
            signature rooms
          </h2>
          <p className="max-w-md text-gray-600 text-sm md:text-base md:pl-6">
            From modern Deluxe Rooms to spacious Executive Suites, every stay includes plush bedding, high speed
            Wi‑Fi and stunning views.
          </p>
        </div>
        {/* Image grid */}
        <div className="mt-6 grid gap-6 md:gap-9 lg:grid-cols-2">
          {/* Left: large feature card */}
          <div className="relative w-full h-80 md:h-[34rem] overflow-hidden rounded-2xl">
            <img
              src="/Fountain.jpg"
              alt="Hotel exterior"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Heart icon (now circular) */}
            <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-md cursor-pointer transition-transform duration-300 hover:scale-110">
              <span className="text-xl">♡</span>
            </div>
            {/* Price overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-4 rounded-b-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg md:text-xl font-bold block">Rs. 8,90,000</span>
                  <span className="text-xs md:text-sm">
                    Deluxe King Room • Breakfast, Spa • Waterfront view
                  </span>
                </div>
                <div className="flex space-x-4 text-xs md:text-sm">
                  <div className="flex items-center space-x-1">
                    <span>1</span>
                    <span>bed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>2</span>
                    <span>bath</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>1k</span>
                    <span>sq ft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: nested grid of images */}
          <div className="grid gap-6">
            {/* Top large card */}
            <div className="relative w-full h-64 md:h-56 lg:h-[13rem] overflow-hidden rounded-2xl">
              <img
                src="/swiming.jpg"
                alt="Pool view"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
                <span className="text-sm">♡</span>
              </div>
            </div>
            {/* Bottom row with two small cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative w-full h-40 lg:h-[18rem] overflow-hidden rounded-2xl">
                <img
                  src="/et.png"
                  alt="Garden view"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
                  <span className="text-sm">♡</span>
                </div>
              </div>
              <div className="relative w-full h-40 md:h-[18rem] overflow-hidden rounded-2xl">
                <img
                  src="/get.avif"
                  alt="Luxurious room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
                  <span className="text-sm">♡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities section */}
      <section className="px-6 md:px-12 py-12">
        <div className="md:flex md:justify-between md:items-start">
          {/* Left side: heading, intro, and amenity cards */}
          <div className="md:w-7/12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Fine Dining &amp; Exceptional Amenities
            </h2>
            <p className="max-w-md text-gray-600 text-sm md:text-base mb-6">
              Savor global cuisines at our rooftop restaurant or unwind with cocktails at the lounge. Enjoy spa
              treatments, gym access, and a relaxing poolside experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-1">Lounge</h3>
                <p className="text-gray-500 text-sm">Breakfast, Lunch, Dinner</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-1">Spa</h3>
                <p className="text-gray-500 text-sm">Relax, Rejuvenate</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-1">Fitness</h3>
                <p className="text-gray-500 text-sm">Open 24/7</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-1">Infinity Pool</h3>
                <p className="text-gray-500 text-sm">City skyline view</p>
              </div>
            </div>
          </div>
          {/* Right side: promotional text and image with arrow */}
          <div className="md:w-4/12 mt-8 md:mt-0 flex flex-col">
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Choose from our seasonal offers, weekend escapes, and early bird discounts available year round.
            </p>
            <div className="relative w-full h-52 md:h-64">
              <img
                src="/restorant.avif"
                alt="Exclusive dining experience"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-500 text-black p-3 rounded-full cursor-pointer hover:bg-yellow-400">
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer section */}
      <section className="bg-gray-900 text-gray-100 px-6 md:px-12 py-12 rounded-t-3xl">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Inspired Hospitality</h2>
            <p className="mb-6 text-sm md:text-base text-gray-300 max-w-xl">
              Every guest can create the ultimate stay experience. Powered by hospitality to inspire every step of the
              way.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Hotel Elite</h3>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Designed with care to deliver seamless experiences, Hotel Elite is your home away from home in Addis
              Ababa.
            </p>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Type something..."
                className="flex-grow px-4 py-2 rounded-full text-black placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400">
                Search
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-6">
              <div>
                <h4 className="font-semibold mb-1">Quick Links</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Rooms</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Deluxe</li>
                  <li>Executive</li>
                  <li>Suite</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dining</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Restaurant</li>
                  <li>Lounge</li>
                  <li>Room Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;