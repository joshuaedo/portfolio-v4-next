export default function Navbar() {
  return (
    <>
      <div
        className={`h-20 w-full bg-black bg-opacity-50 flex p-7 md:p-10 items-center justify-between text-lg fixed z-10`}
      >
        <div className={`inline font-medium cursor-pointer`}>Joshua Edo</div>
        <div className={`inline font-medium`}>MENU+</div>
      </div>
    </>
  );
}
