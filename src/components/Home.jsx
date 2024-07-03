import profile from "../assets/jackmaypic2.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-700 grid sm:grid-cols-2 ">
      <img
        src={profile}
        alt="this is a picture of jack may"
        className="rounded-2xl mx-auto w-2/3"
      ></img>
      <div className="min-h-[100px] items-center content-center text-white">
        <h1 className="text-5xl averia-serif-libre-regular-italic">
          Drum Instructor
        </h1>
        <p className="text-pretty py-4 pt-serif-regular text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          inventore praesentium omnis, rerum facilis consequuntur, provident
          autem excepturi numquam vero quisquam! Blanditiis, minus ab. Obcaecati
          tenetur harum dolore eveniet error.
        </p>
        <button className="bg-gradient-to-b hover:scale-105 duration-200 from-gray-300 to-emerald-500 cursor-pointer rounded-md p-2">
          Book a lesson!
        </button>
      </div>
    </div>
  );
};

export default Home;
