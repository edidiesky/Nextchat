import { Link } from "react-router-dom";
import { onLoginModal, onRegisterModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
const Hero = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store: { auth?: any }) => store.auth);
  
  return (
    <div className="min-h-[550px] bg-[#08090a] py-12 lg:py-24 flex items-center gap-8 justify-center">
      <div className="max-w-custom mx-auto overflow-hidden w-[90%] grid grid-cols-1 gap-8 lg:gap-16">
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-4xl md:text-6xl max-w-[500px] lg:max-w-[1000px] leading-[1] lg:text-7xl text-[#f7f8f8] family2">
            NexChat is a purpose-built tool for planning and building products
          </h2>
          <span className="text-base md:text-2xl font-normal text-[#ffffffb3] max-w-[560px] md:max-w-[700px]">
            Meet the system for modern software development. Streamline issues,
            projects, and product roadmaps.
          </span>
          <div className="flex items-center">
            {currentUser ? (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <span className="">
                  <Link
                    to={"/workspace"}
                    className="text-xs lg:text-base px-4 lg:px-6 py-3 border-[#e7e7e736] border rounded-full text-dark bg-[#fff]"
                  >
                    Go to your workspace
                  </Link>
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-end gap-2 md:gap-4">
                <span className="">
                  <button
                    onClick={() => dispatch(onLoginModal(""))}
                    className="text-xs lg:text-base px-4 lg:px-6 py-3 border-[#e7e7e736] border rounded-full text-dark bg-[#fff]"
                  >
                    Start A Conversation
                  </button>
                </span>
                <button
                  onClick={() => dispatch(onRegisterModal(""))}
                  className="text-xs lg:text-base text-white px-4 lg:px-6 py-3 rounded-full border-[#e7e7e736] border"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full relative">
          <div
            style={{
              backfaceVisibility: "hidden",
              // transformOrigin: "top left",
              // transform:" translateX(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)",
            }}
            className="w-full  bg-[#08090a] inset-0 h-[350px] lg:h-[700px] rounded-[10px]"
          >
            <img
              alt={"Photoimg Descriptioon"}
              src={
                "https://framerusercontent.com/images/B4GigGWKpxUN5I48p86ta7D1XA.png"
              }
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
