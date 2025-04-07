import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="about" className="h-full min-h-[50vh] hero ">
      <div className="flex-col hero-content lg:flex-row-reverse">
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <Image
          src="/general/gtr.jpg"
          width={300}
          height={300}
          alt="about"
          className="max-w-sm border-2 rounded-lg shadow-2xl border-slate-200"
        />
        <div>
          <h1 className="text-5xl font-bold">About Sederhana!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            quos ducimus, rerum voluptates voluptas modi dolore accusantium
            magni vero consequatur, unde at nisi ratione quaerat soluta in.
            Quibusdam, quas! Perferendis!
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
