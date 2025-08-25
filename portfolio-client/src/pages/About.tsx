import SkillCard from "../components/SkillCard";

export default function About() {
    const data = [
        {
            id: 1,
            title: "Website Design",
            description: "Crafting beautiful, responsive websites that convert visitors into customers.",
            icon: "/design.png"
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Developing intuitive mobile applications for both iOS and Android platforms.",
            icon: "/app.png"
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Building the server-side logic, databases, and infrastructure that power applications.",
            icon: "/db.png"
        },
        {
            id: 4,
            title: "API Integration",
            description: "Connecting different systems and services through custom APIs and third-party integrations.",
            icon: "/app.png"
        },

    ]
  return (
    <div className="mt-10 z-40">
      <header>
        <h2 className="text-xl lg:text-3xl font-semibold mb-4">About Me</h2>
        <p className="leading-7">
          I began my journey as a web developer in 2020, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way.
        </p>
        <p className="my-10 leading-7">
          Now, in my early twenties, 5 years after starting my web development
          journey, I'm building cutting-edge web applications using modern
          technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
          Supabase and much more.
        </p>
      </header>

      <div className="pb-10">
        <h3 className="text-lg lg:text-2xl font-semibold mb-6">Skills & Expertise</h3>

        <div className="grid lg:grid-cols-2 gap-6">
        {data.map((item) => (
            <SkillCard 
                key={item.id}
                title={item.title}
                url={item.icon}
                description={item.description}
            />
        ))}
            
        </div>
      </div>
    </div>
  );
}
