import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const FollowUs = () => {
  return (
    <div className="container max-w-full flex flex-row gap-12">
      <h1 className="text-4xl text-black font-playfair">Follow us on</h1>
      <div className="border-t w-48 mt-6"></div>
      <div className="flex flex-row gap-6 -mt-1">
        <div className="p-3 rounded-full bg-black hover:bg-white transition-all">
          <FaYoutube size={30} className="text-white hover:text-black" />
        </div>
        <div className="p-3 rounded-full bg-black hover:bg-white transition-all">
          <FaInstagram size={30} className="text-white hover:text-black" />
        </div>
        <div className="p-3 rounded-full bg-black hover:bg-white transition-all">
          <FaFacebook size={30} className="text-white hover:text-black" />
        </div>
        <div className="p-3 rounded-full bg-black hover:bg-white transition-all">
          <FaLinkedin size={30} className="text-white hover:text-black" />
        </div>
        <div className="p-3 rounded-full bg-black hover:bg-white transition-all">
          <FaWhatsapp size={30} className="text-white hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
