import { AcademicCapIcon, UserGroupIcon, ClipboardDocumentListIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Individuals Seeking Mentorship',
    description:
      'Unlock your potential as a software developer with CodeCompass. Our personalized mentorship program helps you build a strong foundation, sharpen your skills, and develop real-world projects. Whether you\'re an aspiring programmer or an experienced engineer, we provide the guidance and support you need to advance your career.',
    href: 'https://mentorcruise.com/mentor/joeypedicini/',
    icon: AcademicCapIcon,
    text: 'Get in touch with me over at MentorCruise'
  },
  {
    name: 'Recruiters and Managers Seeking Talent',
    description:
      'Find the perfect fit for your developer positions with CodeCompass. We work closely with software engineers of all backgrounds, helping them refine their skills and grow professionally. By partnering with us, you gain access to a network of highly motivated and well-prepared candidates, streamlining your recruitment process and ensuring the right match for your team.',
    href: 'mailto:joey@codecompass.org',
    icon: UserGroupIcon,
    text: 'Send me an email'
  },
  {
    name: 'Businesses Seeking Custom Solutions',
    description:
      'Bring your software projects to life with CodeCompass. We specialize in helping businesses develop and execute high-quality software solutions. Our team of motivated mentees and industry experts can collaborate with your organization to design, build, and deliver custom applications that drive innovation and achieve your business objectives.',
    href: 'mailto:joey@codecompass.org',
    icon: ClipboardDocumentListIcon,
    text: 'Send me an email'
  },
]

export function WhoWeServe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Targeted Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tailored Solutions for Your Unique Needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At CodeCompass, we understand that every individual and organization has distinct goals and challenges.
          That&apos;s why we offer customized mentorship, recruitment, and project development services to cater to the specific requirements of aspiring developers, recruiters, managers, and businesses alike.
          Discover how CodeCompass can help you achieve success in the software development industry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-orange-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} target="_blank" rel="noreferrer" className="text-sm font-semibold leading-6 text-orange-600">
                      {feature.text} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
