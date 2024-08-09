"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { AccordionDemo } from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    // Add any other form fields you need
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    closeModal();
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-white/5">
        <div className="relative w-full mx-auto max-w-7xl">
          <div
            className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6"
            x-data="{ open: false }"
          >
            <div className="flex flex-row items-center justify-between text-sm text-black lg:justify-start">
              <Link href="/">
                <div className="inline-flex items-center gap-3">
                  <span className="text-2xl italic font-semibold tracking-tighter uppercase">
                    Easy Design
                  </span>
                </div>
              </Link>
              <button
                className="items-center inline-flex focus:outline-none focus:text-black hover:text-[#0000ff] justify-center md:hidden p-2 text-black"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    className={`${
                      isOpen ? "hidden" : "inline-flex"
                    } stroke-linecap-round stroke-linejoin-round stroke-width-2`}
                  ></path>
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    className={`${
                      !isOpen ? "hidden" : "inline-flex"
                    } stroke-linecap-round stroke-linejoin-round stroke-width-2`}
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0 md:space-x-6 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <Link
                href="#"
                className="py-2 text-sm font-medium text-black hover:text-black/50"
              >
                Blog
              </Link>
              <button
                className="py-2 text-sm font-medium text-black hover:text-black/50"
                onClick={openModal}
              >
                Submit
              </button>
              <Link
                href="#"
                className="active:bg-fuchsia-50 active:text-black bg-[#0000ff]/5 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none group hover:bg-[#0000ff]/5 hover:text-[#0000ff] justify-center px-6 py-2 rounded-full text-[#0000ff] text-sm"
              >
                Landing page roasting &nbsp; →
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Submission Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-black mx-auto flex justify-center text-center items-center mb-5"
                  >
                    Submit Your Design
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className="block text-black font-bold mb-2"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter the title of your design"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="url"
                          className="block text-black font-bold mb-2"
                        >
                          URL
                        </label>
                        <input
                          type="text"
                          id="url"
                          name="url"
                          value={formData.url}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter the URL of your design"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block text-black font-bold mb-2"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter a description of your design"
                          required
                        ></textarea>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="bg-black hover:bg-[#0000ff]/80 text-white px-4 py-2 rounded-md w-full"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center bg-white pb-20">
        <div className="relative items-center w-full px-5 pt-12 mx-auto lg:px-16 max-w-7xl md:px-12 lg:pt-24">
          <div>
            <div>
              <p className="mt-8 text-3xl font-semibold tracking-tighter md:text-7xl text-slate-800">
                Easy UI - <span className="text-[#000ff]">100% free</span>{" "}
                collection of premium next.js website templates
              </p>
            </div>
            <div className="pt-24 pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
              <h3 className="text-base font-medium leading-6 text-gray-900">
                Filters
              </h3>
              <div className="mt-3 sm:ml-4 sm:mt-0">
                <span className="inline-flex rounded-md shadow-sm isolate">
                  <button
                    className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset"
                    type="button"
                    jf-ext-button-ct="desktop"
                  >
                    <svg
                      className="mr-2 icon icon-tabler icon-tabler-device-desktop-analytics"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      height="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                      <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                      <path d="M7 20h10"></path>
                      <path d="M9 16v4"></path>
                      <path d="M15 16v4"></path>
                      <path d="M9 12v-4"></path>
                      <path d="M12 12v-1"></path>
                      <path d="M15 12v-2"></path>
                      <path d="M12 12v-1"></path>
                    </svg>
                    Desktop
                  </button>
                  <button
                    className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset"
                    type="button"
                    jf-ext-button-ct="mobile"
                  >
                    <svg
                      className="mr-2 icon icon-tabler icon-tabler-device-mobile"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      height="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path>
                      <path d="M11 4h2"></path>
                      <path d="M12 17v.01"></path>
                    </svg>
                    Mobile
                  </button>
                  <button
                    className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset"
                    type="button"
                    jf-ext-button-ct="light"
                  >
                    <svg
                      className="mr-2 icon icon-tabler icon-tabler-sun"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      height="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                    </svg>
                    Light
                  </button>
                  <button
                    className="relative inline-flex items-center px-3 py-2 -ml-px text-sm font-medium text-gray-900 bg-white rounded-r-lg focus:z-10 hover:bg-gray-50 ring-1 ring-gray-300 ring-inset"
                    type="button"
                    jf-ext-button-ct="dark"
                  >
                    <svg
                      className="mr-2 icon icon-tabler icon-tabler-moon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      height="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    </svg>
                    Dark
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12 h-[200px] mb-20">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 h-[500px]">
            <div className="border rounded-2xl overflow-hidden">
              <Image
                alt=""
                className="object-cover w-full h-full"
                src="/easy-ui.png"
                layout="responsive"
                width={400}
                height={250} 
              />
            </div>
            <div className="border rounded-2xl overflow-hidden">
              <Image
                alt=""
                className="object-cover w-full h-full"
                src="/easy-shadcn.png"
                layout="responsive"
                width={400}
                height={250} 
              />
            </div>
            <div className="border rounded-2xl overflow-hidden">
              <Image
                alt=""
                className="object-cover w-full h-full"
                src="/easy-retro.png"
                layout="responsive"
                width={400}
                height={250} 
              />
            </div>
            <div className="border rounded-2xl overflow-hidden">
              <Image
                alt=""
                className="object-cover w-full h-full"
                src="/easy-designfast.png"
                layout="responsive"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <PricingSection />

      {/* Footer */}
      <footer className="bg-gray-800 py-10">
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
      </footer>
    </div>
  );
};

export default LandingPage;
