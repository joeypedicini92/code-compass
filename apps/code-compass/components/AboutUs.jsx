/*
Hi, I'm Joseph Pedicini, the founder of CodeCompass. My enduring passion for software development has evolved into a mission to empower businesses and individuals with stellar web and mobile applications.

With over a decade of experience in the tech industry, I've been fortunate to work with a diverse spectrum of companies, ranging from agile startups to Fortune 500 giants. My expertise encompasses a plethora of programming languages and technologies including React, Angular, Ember.js, Node.js, Scala, Elixir, Postgres, AWS, Kubernetes, and Auth0.

Throughout my career, I have donned multiple hats, from a Full Stack Application Developer at JPMorgan Chase & Co. to Senior Frontend Engineer at Amazon. This rich journey has imbued me with a profound understanding of what it takes to create impactful software solutions.

At CodeCompass, we understand that each project carries its own set of aspirations and challenges. This is why our services are tailor-made to suit your specific requirements. Whether it’s a cutting-edge Progressive Web App, a simple yet effective web application, or reliable maintenance and support for your existing projects, our small but mighty team is committed to excellence.

What sets CodeCompass apart is not just our technical prowess but also our dedication to the client’s vision. We believe in fostering strong relationships and being partners in your success.

Let CodeCompass navigate you through the ever-evolving digital landscape with precision and commitment.

Join hands with CodeCompass for a seamless and rewarding digital experience.
*/

import Image from 'next/image';
import portrait from '@/images/resources/portrait.jpg';
import { SectionHeading } from '@/components/SectionHeading';
import { Container } from '@/components/Container';

export function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-us-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={portrait}
                alt=""
              />
            </div>
          </div>

            <div className="px-6 lg:contents">
              <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <Container className="!lg:mx-[-3rem] !px-0">
                <SectionHeading number="4" id="about-us-title">
                  About CodeCompass
                </SectionHeading>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Empowering Your Digital Journey with CodeCompass
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                Hi, I'm Joseph Pedicini, the founder of CodeCompass. My enduring passion for software development has evolved into a mission to empower businesses and individuals with stellar web and mobile applications.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  With over a decade of experience in the tech industry, I've been fortunate to work with a diverse spectrum of companies, ranging from agile startups to Fortune 500 giants. My expertise encompasses a plethora of programming languages and technologies including React, Angular, Ember.js, Node.js, Scala, Elixir, Postgres, AWS, Kubernetes, and Auth0.

                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  Throughout my career, I have donned multiple hats, from a Full Stack Application Developer at JPMorgan Chase & Co. to Senior Frontend Engineer at Amazon. This rich journey has imbued me with a profound understanding of what it takes to create impactful software solutions.

                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  At CodeCompass, we understand that each project carries its own set of aspirations and challenges. This is why our services are tailor-made to suit your specific requirements. Whether it’s a cutting-edge Progressive Web App, a simple yet effective web application, or reliable maintenance and support for your existing projects, our small but mighty team is committed to excellence.

                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  What sets CodeCompass apart is not just our technical prowess but also our dedication to the client’s vision. We believe in fostering strong relationships and being partners in your success.

                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  Let CodeCompass navigate you through the ever-evolving digital landscape with precision and commitment.

                  </p>
                </div>
                </Container>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
}
