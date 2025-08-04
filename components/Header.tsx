"use client";

export default function Header() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <header className="py-10 px-4 text-center bg-zinc-700 shadow-md">
      <h1 className="text-5xl font-extrabold mb-2 text-emerald-400">
        Juan Pablo Villalba Jaramillo
      </h1>
      <p className="text-xl mb-6 text-gray-300">Frontend Developer</p>
      <div className="text-base space-y-1">
        <a
          className="text-gray-300 hover:text-emerald-400 block"
          href="mailto:juanpablovj2030@gmail.com"
        >
          📧 juanpablovj2030@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/juan-pablo-villalba-jaramillo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-emerald-400 block"
        >
          🔗 linkedin.com/in/juan-pablo-villalba-jaramillo
        </a>
      </div>
    </header>
  );
}
