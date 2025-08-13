import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import SectionWrapper from '../components/SectionWrapper';
import ArrowDown from '../components/ArrowDown';


export default function Home() {
    return (
        <>
            <Head>
                <title>My Resume</title>
                <meta name="description" content="Resume of Jeff Godonou" />
            </Head>
            
            <Header />

            <SectionWrapper id="About">
                <About />
                <ArrowDown to="Experience" />
            </SectionWrapper>

            <SectionWrapper id="Experience">
                <Experience />
                <ArrowDown to="Projects" />
            </SectionWrapper>

            <SectionWrapper id="Projects">
                <Projects />
                <ArrowDown to="Skills" />
            </SectionWrapper>

            <SectionWrapper id="Skills">
                <Skills />
                <ArrowDown to="Contact" />
            </SectionWrapper>

            <SectionWrapper id="Contact">
                <Contact />
            </SectionWrapper>

        </>
    );
}