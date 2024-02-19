import Reveal from "../../assets/Reveal";

const About = () => {
  return (
    <div className="flex flex-col w-full  mt-20">
      <h1 className="text-skyblue text-3xl text-css-shadow" id="about">
        About
      </h1>

      <Reveal>
        <h1 className="text-lg text-lightWhite mt-4">
          Animation websites are online platforms that showcase and explore the
          world of animation. These websites cater to a diverse audience,
          including animators, enthusiasts, students, and industry
          professionals.
        </h1>
      </Reveal>
      <Reveal>
        <h1 className="text-lg text-lightWhite">
          Here are some common features and aspects associated with animation
          websites: Animation websites often serve as platforms to showcase
          animated films, shorts, and series. They may feature a diverse range
          of
        </h1>
      </Reveal>

      <Reveal>
        <h1 className="text-lg text-lightWhite">
          animation styles, including 2D, 3D, stop-motion, and moreMany
          animation websites offer tutorials, educational articles, and
          resources to help aspiring animators improve their skills. These
          resources may cover various aspects of the animation process, from
          concept creation to final rendering.
        </h1>
      </Reveal>
    </div>
  );
};

export default About;
