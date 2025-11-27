import { MapPin, Thermometer, Droplet, Wind } from 'lucide-react';

const WeatherWidget = () => {
  const weather = {
    location: 'Kisumu, Kenya',
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 78,
    windSpeed: 12,
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-green-400" />
          <span>{weather.location}</span>
        </div>
        <div className="text-4xl font-bold">{weather.temperature}°C</div>
      </div>
      <p className="text-lg mb-6 text-center font-medium text-yellow-300">{weather.condition}</p>
      <div className="flex justify-around">
        <div className="text-center">
          <Droplet className="h-6 w-6 mx-auto text-blue-400 mb-1" />
          <p className="font-semibold">{weather.humidity}%</p>
          <p className="text-sm text-gray-400">Humidity</p>
        </div>
        <div className="text-center">
          <Wind className="h-6 w-6 mx-auto text-gray-400 mb-1" />
          <p className="font-semibold">{weather.windSpeed} km/h</p>
          <p className="text-sm text-gray-400">Wind</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
