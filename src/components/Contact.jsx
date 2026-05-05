import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl w-full border border-[#1a1a1a] bg-[#0f0f0f] p-10 relative overflow-hidden">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-purple-500 text-[10px] tracking-[4px] font-['Arial_Black']">
            // FINAL MISSION
          </p>
          <h2 className="text-white text-7xl tracking-widest">
            CONTACT
          </h2>
          <div className="w-20 h-[3px] bg-purple-500 mt-3"></div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT - CHARACTER */}
          <div className="relative">
            <img
              src="/GTA V.jpeg"
              alt="character"
              className="w-full object-contain opacity-90"
            />
          </div>

          {/* RIGHT - FORM */}
          <div className="flex flex-col gap-6">

            <p className="text-gray-400 text-lg tracking-wide ">
              Ready to build something?
            </p>

            <textarea
              placeholder="Type your message..."
              rows={5}
              className='bg-transparent border border-[#1a1a1a] p-4 text-white outline-none focus:border-purple-500 transition-all font-["Arial_Black"]'
            />

            <button className="border border-purple-500 text-purple-400 py-3 tracking-[3px] hover:bg-purple-500 hover:text-white transition-all">
              SEND MESSAGE →
            </button>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-4 text-xl text-[#585454]">

              <a
                href="https://www.linkedin.com/in/pranav-turkar/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/1963Pranav23414"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="https://github.com/PranavTurkar13"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://leetcode.com/u/Pranav_Turkar/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <SiLeetcode />
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;