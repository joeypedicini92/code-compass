import Head from 'next/head'
import { AboutUs } from '../components/AboutUs';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { WhoWeServe } from '../components/WhoWeServe';
import { NavBar } from '../components/NavBar';
import { Pricing } from '../components/Pricing';
import { HowItWorks } from '../components/HowItWorks';
import { MeetOurMentees } from '../components/MeetOurMentees';
import { OurServices } from '../components/OurServices';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          CodeCompass
        </title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="description"
          content="Empower Your Software Development Career with CodeCompass."
        />
      </Head>
      <Hero />
      <WhoWeServe />
      <NavBar />
      <OurServices />
      {/* <MeetOurMentees /> */}
      <HowItWorks />
      <Contact />
      <AboutUs />
      <Footer />
    </>
  )
}
