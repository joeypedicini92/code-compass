import { CheckIcon } from '@heroicons/react/20/solid';
import { SectionHeading } from '@/components/SectionHeading';
import { Container } from '@/components/Container';

const features = [
  {
    name: 'Personalized Mentorship',
    description:
      'Receive one-on-one guidance tailored to your unique situation, interests, and goals, ensuring you gain the most relevant skills and knowledge to excel in your software development career.',
  },
  {
    name: 'Project Guidance',
    description:
      'Work on practical, real-world projects that align with your interests, allowing you to build a strong portfolio while developing valuable experience and problem-solving skills.',
  },
  {
    name: 'Resume Review',
    description:
      'Enhance your resume with expert feedback and recommendations, making sure it effectively showcases your skills and experiences to catch the attention of potential employers.',
  },
  {
    name: 'LinkedIn Optimization',
    description:
      'Boost your online presence with a professionally-reviewed LinkedIn profile, ensuring it highlights your strengths and achievements while expanding your network within the tech industry.',
  },
  {
    name: 'Interview Preparation',
    description:
      'Master the art of technical and behavioral interviews with mock sessions, personalized feedback, and proven strategies that give you the confidence to succeed.',
  },
  {
    name: 'Job Search Assistance',
    description:
      'Navigate the job market with ease using our personalized support, helping you identify suitable opportunities, apply effectively, and secure the perfect role.',
  },
  {
    name: 'Skill Development',
    description:
      'Stay ahead of the curve by continuously enhancing your software development skills with guidance on the latest tools, frameworks, and industry best practices.',
  },
  {
    name: 'Networking and Industry Insights',
    description:
      'Expand your professional network and stay informed about the latest trends, opportunities, and events in the software development world with valuable tips and resources from CodeCompass.',
  },
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
              Comprehensive support
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              CodeCompass offers an extensive suite of services designed to
              support your growth and success in the software development
              industry. From personalized mentorship to job search assistance,
              our expert guidance equips you with the tools, skills, and
              confidence needed to thrive in your career.
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
