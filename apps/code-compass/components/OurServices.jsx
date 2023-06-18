import { CheckIcon } from '@heroicons/react/20/solid';
import { SectionHeading } from '@/components/SectionHeading';
import { Container } from '@/components/Container';

const features = [
  {
    name: 'Progressive Web Apps (PWAs)',
    description:
      'We specialize in building PWAs which offer the best of web and mobile apps. These can be seamlessly deployed to both Apple and Google stores, ensuring a wider reach.',
  },
  {
    name: 'Simple Web Applications',
    description:
      'For projects that require a more straightforward approach, we craft simple, yet effective web applications tailored to your specific needs.',
  },
  {
    name: 'Comprehensive Web Support',
    description:
      `Whether it's a platform we've developed or an existing one, CodeCompass is here to provide robust support for any web project, ensuring optimal performance and continued growth.`,
  },
  {
    name: 'Performance and User Experience Optimization',
    description: `Our development process emphasizes optimizing performance and user experience, ensuring that your applications are fast, responsive, and delightful to use.`,
  }
];

export function OurServices() {
  return (
    <section
      id="our-services"
      aria-labelledby="our-services-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="our-services-title">
          Our Services
        </SectionHeading>

        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Customized Solutions Tailored for Your Success
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            CodeCompass offers a focused range of services to build and support your web and mobile applications. Our agile team is dedicated to providing streamlined solutions that empower your digital journey.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute top-1 left-0 h-5 w-5 text-orange-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
