import Slider from "@/components/room/img-slider";
import { Button } from "@/components/ui/button";

const Details = ({ room }: any) => {
  return (
    <div className="flex-1 bg-white px-2 gap-4  flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl -mb-4 mt-5 z-10 bg-yellow-400 px-8 py-2  font-bold text-red-600 ">
        {room.title}
      </h1>
      <Slider imgUrls={room.imgUrls} />
      <Button className="p-6 w-full text-2xl">Book Now</Button>
      <p className="p-10 text-xl font-semibold">{room.description}</p>
    </div>
  );
};
export default Details;
