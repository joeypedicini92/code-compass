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
                  Your Trusted Mentor in Software Development
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Hi, I&apos;m Joseph Pedicini, the founder of CodeCompass. My
                  passion for software development and mentorship has driven me
                  to create this platform to help aspiring developers achieve
                  their dreams.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    As a software developer with over 10 years of experience, I
                    have worked with a diverse range of companies, from startups
                    to Fortune 500 organizations. My expertise spans multiple
                    programming languages and technologies such as React,
                    Angular, Ember.js, Node.js, Scala, Elixir, Postgres, AWS,
                    Kubernetes, and Auth0.
                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    During my career, I have held various roles, from Full Stack
                    Application Developer at JPMorgan Chase & Co. to Senior
                    Frontend Engineer at Amazon. This has given me a deep
                    understanding of the skills and knowledge required to excel
                    in the software development industry. My background also
                    includes experience in interviewing, hiring, and mentoring
                    new developers, which allows me to provide valuable insights
                    on how to make the transition from student to professional
                    developer.{' '}
                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    As a mentor, my primary focus is on the success and growth
                    of my mentees. I tailor my mentorship approach to each
                    individual&apos;s unique needs and goals, helping them to
                    build the necessary skills and confidence to succeed in the
                    software development industry. My mentees benefit from my
                    wealth of knowledge, practical experience, and commitment to
                    their success.{' '}
                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    By choosing CodeCompass as your mentor, you will receive
                    personalized guidance, support, and encouragement every step
                    of the way on your journey to becoming a skilled and
                    confident software developer.{' '}
                  </p>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    Let CodeCompass be your guiding star towards a successful
                    career in software development.{' '}
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
