import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div
      className="min-h-[50vh] bg-fixed hero"
      style={{
        backgroundImage: "url(https://picsum.photos/seed/picsum/1020/720)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="text-center hero-content text-neutral-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button link="/">Get Started</Button>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
