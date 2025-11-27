import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/adc98481-33b6-4007-85da-496b21a2913e/agriclime-hero-jm89i17-1764267955733.webp')" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">AgriClime</h1>
        <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl">Climate-Smart Farming, Zero Hunger.</p>
        <p className="mt-2 text-md md:text-lg font-light max-w-2xl">Weather-based farming recommendations and predictions for small-scale food producers.</p>
        <Link
          to="/signup"
          className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
