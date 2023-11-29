import React from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import aboutPic from "../../public/images/profile/about2.jpg";
import Skills from "@/components/Skills";
import Process from "@/components/Process";

const about = () => {
  return (
    <>
      <Head>
        <title>ParadigmLabs | About Us</title>
        <meta content="ParadigmLabs - About" property="og:title"></meta>
        <meta
          content="We partner with mission driven entrepreneurs and companies to bring their vision to life."
          property="og:description"
        ></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="We accelerate innovation" className="mb-16" />
          <h2 className="mb-4 text-lg  text-primary ">
            ParadigmLabs is a design studio that specializes in creating brands
            and products for new companies. As a hands-on creative partner,
            we’re big on collaborating and prototyping—two sure signs of our
            roots. We bring together experience from across disciplines to help
            our clients earn their spot in people’s lives.
          </h2>
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Our innovation principles
              </h2>

              <p className="font-medium">
                A tailored approach No two projects are the same, so we never
                treat them as such. This means we plan a specific route through
                LAUNCH based on a sensible risk based approach. That is, does
                completing an activity provide more value than it costs to run?
              </p>
              <p className=" my-4 font-medium">
                A tailored approach No two projects are the same, so we never
                treat them as such. This means we plan a specific route through
                LAUNCH based on a sensible risk based approach. That is, does
                completing an activity provide more value than it costs to run?
              </p>
              <p className="font-medium">
                A tailored approach No two projects are the same, so we never
                treat them as such. This means we plan a specific route through
                LAUNCH based on a sensible risk based approach. That is, does
                completing an activity provide more value than it costs to run?
              </p>
              <p className=" my-4 font-medium">
                A tailored approach No two projects are the same, so we never
                treat them as such. This means we plan a specific route through
                LAUNCH based on a sensible risk based approach. That is, does
                completing an activity provide more value than it costs to run?
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={aboutPic}
                alt="about Us"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-end">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Our working culture
              </h2>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-primary">Be ingenious</span>
                <p className="text-xl font-medium text-dark/75">
                  We’re expert problem-solvers who love finding inventive
                  solutions to even the thorniest challenges.
                </p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-primary">Keep it nimble</span>
                <p className="text-xl font-medium text-dark/75">
                We know how we work best, but we’re not slaves to a methodology. Our process can flex any way it needs, to create a perfect client fit.
                </p>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-2xl font-bold text-primary">Make it spicy</span>
                <p className="text-xl font-medium text-dark/75">
                  The secret sauce of every project. We blend our optimism and
                  curiosity with just a touch of rebellion, to create truly
                  original, provocative and ownable brand identities
                </p>
              </div>
            </div>
          </div>
          <Skills />
          <Process/>
        </Layout>
      </main>
    </>
  );
};

export default about;
