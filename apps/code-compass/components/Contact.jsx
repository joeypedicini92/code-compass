import {
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';

export function Contact() {
  return (
    <section
      id="get-started"
      aria-label="Get Started"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="get-started-title">
          Get Started
        </SectionHeading>
        <div className="isolate bg-white">
          <div className="mx-auto">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact us today
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Reach out to CodeCompass for personalized guidance and support, whether you&apos;re an aspiring software developer seeking mentorship or a business looking for top talent or project development assistance. We&apos;re dedicated to helping individuals and organizations achieve success in the tech industry.
            </p>
          </div>
          <div className="mx-auto mt-20 space-y-16">
            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600">
                <ChatBubbleLeftRightIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                Individuals Seeking Mentorship
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                If you&apos;re an aspiring software developer looking for personalized guidance and support to help you reach your career goals, CodeCompass is here for you. Send us a message to discuss mentorship options, tailored to your unique needs and aspirations.
                </p>
                <p className="mt-4">
                  <a
                    href="https://mentorcruise.com/mentor/joeypedicini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-orange-600"
                  >
                    Get in touch with me over at MentorCruise <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600">
                <BugAntIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                Recruiters and Managers Seeking Talent
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                At CodeCompass, we&apos;re committed to connecting recruiters and managers with highly skilled and motivated software developers. Get in touch with us to discuss your hiring needs and learn how we can help you find the perfect match for your organization.
                </p>
                <p className="mt-4">
                  <a
                    href="mailto:joey@codecompass.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-orange-600"
                  >
                    Send me an email <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-600">
                <ComputerDesktopIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                Businesses Seeking Custom Solutions
                </h3>
                <p className="mt-2 leading-7 text-gray-600">
                For businesses in search of custom software solutions, CodeCompass is ready to provide expert development services to meet your unique requirements. Contact us to discuss your project specifications and discover how our technical expertise can drive your business forward.
                </p>
                <p className="mt-4">
                  <a
                    href="mailto:joey@codecompass.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-orange-600"
                  >
                    Send me an email <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
