"use client";

import { Button } from "./ui/button";

export const Section = ({ image, title }: any) => {
  return (
    <div
      className={`${image}  h-[60vh] md:h-full flex-1  bg-center bg-cover flex flex-col items-center justify-between pt-[23vh] pb-5 relative`}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h2 className="text-yellow-500 text-3xl font-bold relative z-10">
        {title}
      </h2>
      <Button className="relative z-10">See More</Button>
    </div>
  );
};

const Rooms = () => {
  return (
    <section className="overflow-hidden">
      <div className="md:flex md:h-[95vh] w-screen  ">
        <Section image="dorm" title="DORMS" />
        <div className="md:flex flex-col flex-1">
          <Section image="apartment" title="APARTMENT ROOMS" />
          <Section image="private" title="PRIVATE ROOMS" />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
