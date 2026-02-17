import logo from "../../assets/logo.png";

function Logo() {
  return (
    <>
      <img
        className="w-[132px] h-[40px] max-md:w-[119px] max-md:h-[36px]"
        src={logo}
        alt="Pulbox rebranding logo"
      />
    </>
  );
}

export default Logo;
