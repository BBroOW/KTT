import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/x.svg";

const Footer = () => {
  return (
    <div className=" w-full  bottom-0">
      <div className="md flex flex-col justify-center bg-dark-green w-full h-[250px] ">
        <div className="flex flex-row w-full justify-between mt-10 font-body text-white">
          <h1 className="ml-[100px]">Telefon: 62 00 08 80</h1>
          <h1>Åpningstider: Mandag–fredag kl. 08.00–15.30</h1>
          <h1 className="mr-[100px]">E-post: Send e-post</h1>
        </div>
        <div className="flex relative flex-row w-full justify-between mt-20">
          <a href="https://www.facebook.com/HamarKTT">
            <img src={facebook} className="h-[50px] w-[50px] ml-[300px]" />
          </a>
          <a href="https://www.youtube.com/channel/UCkQQ1XxUdAFzZkzvXaOxhqQ">
            <img src={youtube} className="h-[50px] w-[50px]" />
          </a>
          <a href="https://twitter.com/KTT86310759">
            <img src={twitter} className="h-[50px] w-[50px] mr-[300px]" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
