import { AlertTriangle } from 'lucide-react';

const ApiKeyNotice = () => {
  return (
    <div className="bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-300 p-4 rounded-r-lg mb-8" role="alert">
      <div className="flex">
        <div className="py-1">
          <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
        </div>
        <div>
          <p className="font-bold">API Keys Required</p>
          <p className="text-sm">
            This application requires API keys for OpenWeatherMap and Google Gemini. Please create a `.env` file in the root directory and add your keys:
          </p>
          <code className="block bg-gray-800/50 p-2 rounded-md mt-2 text-sm">
            VITE_OPEN_WEATHER_MAP_API_KEY=your_key_here<br />
            VITE_GEMINI_API_KEY=your_key_here
          </code>
          <p className='text-xs mt-2'>Note: For this demo, widgets are using mock data. Integrating the APIs will enable live data.</p>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyNotice;
