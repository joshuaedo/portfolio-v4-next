export default function Navbar() {
  return (
    <>
      <div
        className={`h-20 w-full bg-black bg-opacity-50 flex p-4 md:p-10 items-center justify-between text-lg sticky top-0 z-10`}
      >
        <div className={`inline font-medium cursor-pointer`}>Joshua Edo</div>
        <div className={`inline font-medium cursor-pointer`}>MENU+</div>
      </div>
    </>
  );
}
