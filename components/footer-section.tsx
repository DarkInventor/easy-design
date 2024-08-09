import { Link } from 'lucide-react'
import React from 'react'

function FooterSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-6 sm:mb-0">
              <Link href="/">
                <span className="text-xl sm:text-2xl italic font-semibold tracking-tighter uppercase">
                  Easy Design
                </span>
              </Link>
            </div>
            <div>
              <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; 2023 Easy UI. All rights reserved.
          </div>
        </div>
  )
}

export default FooterSection