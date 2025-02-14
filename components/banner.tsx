const Banner = () => {
  return (
    <section className=" flex ">
      <div className="h-[90vh] flex-1 hidden md:flex">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 banner3"></div>
          <div className="flex-1 bg-black text-white  text-lg flex items-center justify-center text-center font-semibold">
            MEET THE FELLOW TRAVELERS
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 banner4"></div>
          <div className="flex-1 banner5"></div>
        </div>
      </div>

      {/* Mobile */}
      <div className="h-[90vh] flex flex-1">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white text-black font-semibold text-lg flex items-center justify-center text-center">
            EXPERIENCE THE AMBIANCE
          </div>
          <div className="flex-1 banner2"></div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 banner1"></div>
          <div className="flex-1    bg-black text-white text-lg flex items-center justify-center text-center font-semibold">
            DISCOVER A NEW SIDE OF KADIKOY
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
