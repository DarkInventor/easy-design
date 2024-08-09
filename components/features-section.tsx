import React from 'react'

function FeaturesSection() {
  return (
    <section className="relative bg-white py-20 mt-20 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Features
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Discover the key features that make our landing page examples
          stand out.
        </p>
      </div>
      <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <div className="relative">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#0000ff]/5 rounded-full inline-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#0000ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Interactive Demos
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Explore interactive demos to see the landing pages in action
              and get inspired.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#0000ff]/5 rounded-full inline-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#0000ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm0 8a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Curated Collection
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Explore a curated collection of high-quality landing page
              examples to spark your creativity.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#0000ff]/5 rounded-full inline-flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#0000ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Detailed Insights
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Get detailed insights and analysis on the design, copy, and
              conversion optimization of the landing pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection