
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center snap-center px-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl w-full">
        <div className="">
          <img
            src="/port-pro.png"
            alt="@8bitcn"
            className="w-48 md:w-64 pixelated"
          />
        </div>

        <div className="text-primary text-4xl md:text-4xl ">
          <ul className="grid grid-cols-2  gap-y-4">
            <li>Peace :</li>
            <li>Human</li>

            <li>Class :</li>
            <li>Front End</li>

            <li>Age :</li>
            <dd>20</dd>

            <li>Level :</li>
            <li>Junior</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
