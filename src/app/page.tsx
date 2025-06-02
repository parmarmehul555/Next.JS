import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-x-52">
      <section className="flex flex-col justify-center items-center min-h-[calc(100vh-120px)] text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm <span className="text-cyan-500"> Mehul Parmar</span></h1>
        <p className="text-xl text-cyan-500 font-bold">Full Stack Developer | Flutter Enthusiast </p>
        <p className="text-md mt-2 text-white/80">Building sleek apps with MERN, MEAN, and Next.js</p>
      </section>
      <div className="h-96 w-96 overflow-hidden"
      style={{
        borderRadius:"29% 71% 70% 30% / 30% 50% 50% 70% "
      }}
      >
        <img 
        className="h-full w-full object-cover"
        src="/assets/Me.jpeg"
        alt="My Image"
        />
      </div>
    </div>
  );
}
