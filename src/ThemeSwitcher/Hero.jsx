export default function Hero() {
  return (
    <div className="flex flex-col gap-10 px-30 py-30 justify-center items-center ">
      <h1 className="text-8xl font-bold text-center leading-25">
        your booty (🍑)
        <br /> as a service
      </h1>

      <div className="w-117 text-center">
        <h3 className="text-2xl leading-10">
          The joyful booty app. Schedule time for booty, booty activites, and
          booty contacts!
        </h3>
      </div>

      <div className="bg-gray-500/20 flex flex-col items-center justify-between gap-3 px-2 py-2 w-1/5 rounded-2xl">
        <button className="w-full bg-black text-white py-5 rounded-2xl cursor-pointer">
          Try it now
        </button>
        <p>free for personal use</p>
      </div>
    </div>
  );
}
