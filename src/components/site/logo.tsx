import logo from "../../assets/logo.png";

function Logo() {
  return (
    <>
      <div>
        <img
          className="w-[132px] h-[40px]"
          src={logo}
          alt="Pulbox rebranding logo"
        />
      </div>
    </>
  );
}

export default Logo;
