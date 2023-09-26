const ButtonMenu = ({ showNav, setShowNav }) => {
  return (
    <div
      onClick={() => setShowNav(!showNav)}
      className="w-[30px] h-[20px] flex flex-col flex-row hover:cursor-pointer justify-between items-center"
    >
      <span className="bg-white h-[2px] w-full"></span>
      <span className="bg-white h-[2px] w-full"></span>
      <span className="bg-white h-[2px] w-full"></span>
    </div>
  );
};
export default ButtonMenu;
