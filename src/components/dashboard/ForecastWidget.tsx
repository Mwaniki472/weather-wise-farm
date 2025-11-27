import { Cloud, Sun, CloudRain } from 'lucide-react';

const ForecastWidget = () => {
  const forecast = [
    { day: 'Mon', high: 28, low: 20, Icon: Sun },
    { day: 'Tue', high: 26, low: 19, Icon: Cloud },
    { day: 'Wed', high: 25, low: 18, Icon: CloudRain },
    { day: 'Thu', high: 27, low: 20, Icon: Sun },
    { day: 'Fri', high: 29, low: 21, Icon: Sun },
    { day: 'Sat', high: 26, low: 19, Icon: CloudRain },
    { day: 'Sun', high: 28, low: 20, Icon: Cloud },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {forecast.map(({ day, high, low, Icon }) => (
          <div key={day} className="bg-gray-700/50 p-3 rounded-lg flex flex-col items-center">
            <p className="font-semibold text-lg">{day}</p>
            <Icon className="h-8 w-8 text-yellow-300 my-2" />
            <p>{high}°/{low}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWidget;
