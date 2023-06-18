import { SectionHeading } from '@/components/SectionHeading';
import { Container } from '@/components/Container';
import fridgeraiderLogo from '@/images/fridgeraider.png'
import Image from 'next/image';

const projects = [
  {
    name: 'Bonjournl',
    imageUrl:
      'https://bonjournl.com/logos/color1/full/color1-white_logo_transparent_background.png',
    bio: 'Bonjournl is a journaling app that helps you to reflect on your day and to become more mindful.',
    websiteUrl: 'https://bonjournl.com',
  },
  {
    name: 'Fridgeraider',
    imageUrl:
    fridgeraiderLogo,
    bio: 'Fridgeraider is a recipe generator that helps you to use up the ingredients you already have in your fridge.',
    websiteUrl: 'https://app.fridgeraider.org',
  },
];

export function OurProjects() {
  return (
    <section
      id="our-projects"
      aria-labelledby="our-projects-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="our-projects-title">
          Our Projects
        </SectionHeading>
        <div className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 xl:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Projects
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              We're a hands-on team at CodeCompass, deeply committed to making top-notch web and mobile apps. Take a look at the projects we’ve brought to life through hard work and a genuine passion for what we do.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
            >
              {projects.map((project) => (
                <li key={project.name}>
                  <div className="image-wrapper" style={{ width: '300px', height: '200px' }}>
                  <Image
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover"
                    src={project.imageUrl}
                    alt=""
                  />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    <a href={project.websiteUrl}>{project.name}</a>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {project.bio}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
