const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-12 md:flex-row md:justify-between">
      <div className="md:w-1/2">
        <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">Ramona Jensen</h1>
        <p className="mt-3 text-xl text-gray-400">Frontend Developer | Backend-Student.</p>
        <p className="mt-3 max-w-md text-gray-300">
          I build modern, responsive web applications using React and Tailwind.
        </p>
      </div>
      <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-700">
          <span className="text-gray-500">Photo here?</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
