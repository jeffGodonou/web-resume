export default function SectionWrapper({id, children}) {
    return (
        <section id={id} className="min-h-screen flex flex-col justify-center items-center px-6 py-12 scroll-mt-20">
            {children}
        </section>
    );
}