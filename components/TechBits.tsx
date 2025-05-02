import Link from "next/link";

const techResources = [
  {
    name: "Brightspace",
    image: "/brightspace.png",
    link: "/techbits/brightspace",
  },
  {
    name: "Codio",
    image: "/codio.png",
    link: "/techbits/codio",
  },
  {
    name: "Crowdmark",
    image: "/crowdmark.png",
    link: "/techbits/crowdmark",
  },
  {
    name: "Moss",
    image: "/moss.png",
    link: "/techbits/moss",
  },
  {
    name: "Git",
    image: "/git.png",
    link: "/techbits/git",
  },
];

export default function TechBits() {
  return (
    <section className="my-12 px-6 max-w-[1225px] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Tech Bits: Educational Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {techResources.map((resource) => (
          <div key={resource.name} className="flex flex-col items-center">
            <Link href={resource.link}>
              <img
                src={resource.image}
                alt={resource.name}
                className="w-28 h-28 object-cover rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
              />
            </Link>
            <h3 className="mt-3 font-semibold">{resource.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
