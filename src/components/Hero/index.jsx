import Badge from "../Badges";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-12 md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">Ramona Jensen</h1>
        <div className="mt-4 flex justify-center md:hidden">
          <div className="flex h-48 w-48 overflow-hidden rounded-full bg-gray-700">
            <img
              src="/img/portfolioimage.jpg"
              alt="Ramona Jensen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <p className="mt-3 text-xl text-gray-400">Frontend Developer | Backend Student</p>
        <p className="mt-3 max-w-md text-gray-300">
          I just completed a higher academic degree in Frontend Development and am now starting my
          Backend studies to pursue a Fullstack Developer career. I build modern, responsive web
          applications using React, Tailwind, and a variety of cutting-edge technologies.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge label="HTML" />
          <Badge label="CSS" />
          <Badge label="React" />
          <Badge label="Figma" />
          <Badge label="WordPress" />
          <Badge label="Tailwind" />
          <Badge label="Bootstrap" />
          <Badge label="REST APIs" />
          <Badge label="Vite" />
          <Badge label="JavaScript" />
        </div>
      </div>
      <div className="mt-8 hidden md:flex md:w-1/2 md:justify-center">
        <div className="flex h-48 w-48 overflow-hidden rounded-full bg-gray-700">
          <img
            src="/img/portfolioimage.jpg"
            alt="Ramona Jensen"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
