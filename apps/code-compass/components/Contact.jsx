/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm('mlekqpby');
  if (state.succeeded) {
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
          <p>Thanks for contacting! We'll get back to you shortly!</p>
        </Container>
      </section>
    );
  }
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
        <div className="relative isolate bg-white mt-2">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-64}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            />
          </svg>
          <div className="max-w-xl lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Let’s talk about your project
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Ready to bring your digital project to life? Whether you're a startup seeking to make a mark or an established business aiming to enhance your online presence, our agile team is here to transform your ideas into reality.
            </p>
            <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="lg:flex-auto"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Budget
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="budget"
                        name="budget"
                        type="text"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Website
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="url"
                        name="website"
                        id="website"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Let’s talk
                  </button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  By submitting this form, I agree to the{' '}
                  <a
                    href="https://codecompass.org/privacy-policy.html"
                    className="font-semibold text-orange-600"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
