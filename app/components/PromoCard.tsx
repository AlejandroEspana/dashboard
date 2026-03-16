import { FaArrowUp } from "react-icons/fa";

export default function PromoCard() {
  return (
    <div className="bg-indigo-600 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg h-full relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none select-none" style={{background: "url('https://svgshare.com/i/13kA.svg') no-repeat right center/cover"}} />
      <div className="relative z-10">
        <h3 className="text-lg font-bold mb-1">Need More Stats?</h3>
        <p className="text-sm opacity-90">Upgrade to pro for added benefits.</p>
      </div>
      <button className="mt-6 bg-green-400 hover:bg-green-500 text-black px-6 py-2 rounded-lg w-max font-semibold shadow transition-all relative z-10">
        Go Pro Now
      </button>
    </div>
  );
}