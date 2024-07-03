import darksky from "../assets/darksky.png";
import meraki from "../assets/Meraki.png";
import pacific from "../assets/pacific crest.png";
import eldorado from "../assets/eldorado.jpeg";
import dbhs from "../assets/dbhs.jpeg";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-gray-700 via-black to-black p-4 items-center content-center">
      <h1 className="text-5xl averia-serif-libre-regular-italic ml-2 text-white underline">
        Expirience
      </h1>
      <div className="content-center items-center bg-white rounded-xl w-1/2">
        <div className="grid grid-cols-2 p-4 content-center items-center ">
          <img src={meraki} alt="" className="rounded-3xl l-1/2 px-10" />
          <p className="text-white content-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id
            accusamus labore dolore officiis consectetur nemo quasi eum
            assumenda. Impedit animi vel dolore aut alias, maxime excepturi
            rerum iste quae!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experience;
