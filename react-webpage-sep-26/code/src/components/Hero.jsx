import React from "react";

function Hero() {
  return (
    <>
      <main className="flex justify-between items-center px-32 h-[50vh] mt-14">
        <section className="flex flex-col space-y-6">
          <h1 className="text-5xl font-bold w-[450px] leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-md font-normal w-[450px] leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            tenetur nihil ipsa ratione autem iure alias reiciendis vitae
            asperiores laudantium.
          </p>
          <div>
            <button className="bg-black text-white py-3 px-24 rounded-md">
              Click Me
            </button>
          </div>
        </section>
        <section>
          <img className="w-[500px]" src="/Illustration.svg" alt="" />
        </section>
      </main>
    </>
  );
}

export default Hero;
