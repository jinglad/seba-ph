import React from "react";
import { patientStories } from "../../staticData/about";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <div className="flex items-center justify-center h-24 bg-secondary">
          <h1 className="text-4xl text-white font-semibold">What is Seba?</h1>
        </div>
        <section className="mt-5">
          <div>
            <h5 className="text-2xl text-cyan-800 font-semibold">
              Access to World-Class Clinical Expertise Through Innovative
              Digital Technology in a single Platform
            </h5>
            <p className="mt-5">
              When facing a new diagnosis, peace of mind is invaluable. Access
              to a virtual second opinion by SEBA helps patients feel relief and
              move forward with confidence. <br />
              The platform is a visionary joint venture that combines the
              unrivaled clinical expertise of nationwide -leading telehealth
              platform. Through innovative solutions like our Virtual Second
              Opinions, we enable easy, secure access to the highest quality
              medical expertise.
              <br />
              Patient-centric and deeply collaborative, we are passionate about
              realizing the global possibilities of digital health, providing
              advanced solutions that help tame the costs of care while enabling
              patients to achieve better outcomes and peace of mind.
            </p>
          </div>
        </section>
        <section className="mt-5">
          <div className="bg-secondary flex h-24 items-center justify-center">
            <h5 className="text-4xl text-white font-semibold">
              Stories of our patients
            </h5>
          </div>
          <div className="grid mb-1 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            {patientStories?.map((story) => (
              <figure className="flex flex-col items-center justify-center p-8 text-center border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-cyan-800 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="my-4 font-light">{story.description}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div>{story.name}</div>
                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                      {story.patientOf} Survivor
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-white bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
            >
              Show More Stories
            </button>
          </div>
        </section>
        <section>
          <div className="flex mt-10 pr-3">
            <div className="w-1/2">
              <img
                className="object-cover rounded-t-lg w-4/5 h-4/5 mx-auto "
                src="./images/Elder.jpg"
                alt=""
              />
            </div>
            <div className="leading-normal w-1/2 pt-2">
              <h5 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Patient Case | Pediatric Seizures
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                A woman was diagnosed with breast cancer, and her diagnosis was
                confirmed by a pathologist at a major academic center in Boston.
                Her local care team was proceeding with radiation treatment when
                she decided she wanted a second opinion on the approach to her
                treatment. The Clinic collected her medical records and matched
                her with an expert Cleveland Clinic radiation oncologist. Her
                specialist and four additional pathologists concluded that an
                invasive component had been missed, resulting in a diagnosis
                change and revision to her treatment plan. The local treatment
                strategy would have undertreated her true condition and put her
                at risk of cancer spread. Through her second opinion, she
                received clarity on her diagnosis and the correct treatment
                path, greatly improving her ability to fight the cancer. 
              </p>
              <button
                type="button"
                className="text-white bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                See More Cases
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
