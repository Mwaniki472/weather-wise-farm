import WeatherWidget from '../components/dashboard/WeatherWidget';
import ForecastWidget from '../components/dashboard/ForecastWidget';
import RecommendationWidget from '../components/dashboard/RecommendationWidget';
import PredictionWidget from '../components/dashboard/PredictionWidget';
import ApiKeyNotice from '../components/dashboard/ApiKeyNotice';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <ApiKeyNotice />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <WeatherWidget />
            <RecommendationWidget />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <ForecastWidget />
            <PredictionWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
