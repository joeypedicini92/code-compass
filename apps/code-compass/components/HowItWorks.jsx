import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="how-it-works-title">
          How it Works
        </SectionHeading>
        <div className="bg-white">
      <div className="mx-auto text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personalized Software Development Mentorship</h1>
        <p className="mt-6 text-xl leading-8">
        Unlock your full potential with CodeCompass, your dedicated mentor guiding you towards your dream software development job.
        We tailor our approach to your unique goals, interests, and project ideas, helping you build a solid foundation for your career.
        </p>
        <div className="mt-10 max-w-2xl">
          <p>
          Our personalized mentorship process begins by understanding your unique situation, interests, goals, weekly time investment, and the project you&apos;d like to build.
          We then provide weekly tasks to help you progress on your project while offering various career-oriented services.

          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">1. Individual Assessment:</strong> A thorough evaluation of your current skills, goals, and interests to create a personalized mentorship plan.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">2. Project-based Learning:</strong> Real-world projects tailored to your interests, helping you build a strong portfolio to showcase your skills.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">3. Career Services:</strong> Resume reviews, LinkedIn optimization, interview preparation, job search assistance, and practical tips and tricks.
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Navigating Success with CodeCompass</h2>
          <p className="mt-6">
          At CodeCompass, our mission is to help you navigate the software development industry and reach your career goals. We understand that every individual is unique, and we adapt our mentorship approach to cater to your specific needs and ambitions, ensuring your growth and success in the tech world.
          </p>
        </div>
      </div>
    </div>
      </Container>
    </section>
  )
}
