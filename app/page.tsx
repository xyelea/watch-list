import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to Watch List
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          consequuntur nisi accusantium assumenda esse sed quam maxime quidem,
          saepe, dicta nemo laboriosam molestiae, eligendi placeat. Omnis dolore
          velit officia, maxime porro nam temporibus sit quos? Error recusandae
          voluptatem architecto odio. Officiis maiores itaque aliquid soluta
          sapiente repellendus tempore nemo similique.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
