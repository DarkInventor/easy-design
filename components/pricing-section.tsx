import React from 'react'
import { AccordionDemo } from './faq-section'

function PricingSection() {
  return (
    <section className="bg-white py-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Pricing
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Choose the plan that fits your needs and budget.
        </p>
      </div>
      <div className="mt-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {/* Hobby Plan */}
        <div className="bg-[#0000ff]/5 rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                Hobby
              </h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[#0000ff]">
                $9
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /month
                </span>
              </div>
            </div>
            <p className="mt-5 text-lg text-gray-500">
              Perfect for individuals or small teams starting out.
            </p>
          </div>
          <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Access to 50 landing page examples
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Basic design insights and analysis
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Community support
                </p>
              </li>
            </ul>
            <div className="mt-10">
              <button className="bg-[#0000ff] hover:bg-[#0000ff]/80 text-white px-6 py-3 rounded-md w-full">
                Start your Hobby plan
              </button>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#0000ff]/5 rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                Pro
              </h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[#0000ff]">
                $29
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /month
                </span>
              </div>
            </div>
            <p className="mt-5 text-lg text-gray-500">
              Ideal for growing teams and businesses.
            </p>
          </div>
          <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Access to 200 landing page examples
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Advanced design insights and analysis
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Priority support
                </p>
              </li>
            </ul>
            <div className="mt-10">
              <button className="bg-[#0000ff] hover:bg-[#0000ff]/80 text-white px-6 py-3 rounded-md w-full">
                Start your Pro plan
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#0000ff]/5 rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                Enterprise
              </h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[#0000ff]">
                $99
                <span className="ml-1 text-2xl font-medium text-gray-500">
                  /month
                </span>
              </div>
            </div>
            <p className="mt-5 text-lg text-gray-500">
              Best for large organizations and enterprises.
            </p>
          </div>
          <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Unlimited landing page examples
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Custom design insights and analysis
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#0000ff]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">
                  Dedicated account manager
                </p>
              </li>
            </ul>
            <div className="mt-10">
              <button className="bg-[#0000ff] hover:bg-[#0000ff]/80 text-white px-6 py-3 rounded-md w-full">
                Contact us for Enterprise
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          FAQ
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Frequently Asked Questions
        </p>
      </div>
      <AccordionDemo />
    </div>
  </section>
  )
}

export default PricingSection