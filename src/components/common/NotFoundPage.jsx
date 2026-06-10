import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-[#2f7f35] via-[#071b0c] to-[#2f7f35] text-white px-4">
      <h1 className="text-[120px] font-extrabold drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)] animate-pulse sm:text-[180px]">
        404
      </h1>
      <h2 className="mt-6 text-center text-3xl font-bold sm:text-4xl">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 max-w-xl text-center text-white/80 sm:text-lg">
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back home.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-lg bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-white/20 hover:text-[#2f7f35]"
      >
        Go Back Home
      </Link>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <span className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 animate-bounce-slow"></span>
        <span className="absolute top-1/3 right-20 h-32 w-32 rounded-full bg-white/5 animate-bounce-slower"></span>
        <span className="absolute bottom-10 left-1/2 h-24 w-24 rounded-full bg-white/10 animate-bounce-slow"></span>
      </div>
    </div>
  );
};

export default NotFoundPage;
