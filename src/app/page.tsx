export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-64 h-16 bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30"></div>
        <span className="text-white font-semibold z-10">Hola</span>
      </div>
    </div>
  );
}
