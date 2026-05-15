const blocks = [
  {
    id: 1,
    title: (
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maintext">
        What is <span className="text-eticgreen">ETICFocus</span>?
      </h2>
    ),
    text: 'ETICFocus is a simple website created by the members of our club. It includes a Pomodoro timer designed to help students (or anyone!) boost their productivity while studying, working, programming, building entrepreneurial projects...( anything really ) more efficiently using the Pomodoro Technique. Take your productivity to the next level with ETICFocus !',
  },
  {
    id: 2,
    title: (
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maintext">
        What is the <span className="text-eticorange">Pomodoro Technique</span>?
      </h2>
    ),
    text: (
      <>
        The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for &apos;tomato&apos;, after the tomato-shaped kitchen timer that Cirillo used as a university student.
        <br />
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          rel="noreferrer"
          className="underline text-eticorange"
        >
          — Wikipedia
        </a>
      </>
    ),
  },
  {
    id: 3,
    title: (
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-maintext">
        What is <span className="text-eticgreen">ETIC</span>?
      </h2>
    ),
    text: 'ETIC is a non-profit student organization founded in 2009 at the Higher National School of Computer Science (formerly INI). Our mission is to inspire, connect, and empower students by bringing them closer to the professional and entrepreneurial world through events, activities, and immersive experiences.',
  },
]

function About() {
  return (
    <section id="about" className="bg-[#FFFCF7] px-4 py-12 sm:px-6 lg:px-12 flex flex-col gap-12">
      {blocks.map((block) => (
        <div key={block.id} className="flex flex-col gap-4">
          {block.title}
          <div className="text-lg sm:text-xl text-maintext max-w-max leading-relaxed">
            {block.text}
          </div>
        </div>
      ))}
    </section>
  )
}

export default About