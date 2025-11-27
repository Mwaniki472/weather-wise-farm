import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { toast } from 'sonner';

const PredictionWidget = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) {
      toast.error('Please enter a question.');
      return;
    }
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setResponse(`Based on the current forecast, the best time to plant your crops is in the next 2-3 days when the soil moisture will be optimal after the expected light rains.`);
      setIsLoading(false);
      setQuery('');
    }, 1500);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-400" />
        <span>Ask AgriClime AI</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., When is the best time to plant..."
            className="flex-grow px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-md transition duration-300 flex items-center justify-center disabled:bg-gray-500"
          >
            {isLoading ? <div className='w-5 h-5 border-t-2 border-white rounded-full animate-spin' /> : <Send className="h-5 w-5" />}
          </button>
        </div>
      </form>
      {response && (
        <div className="mt-6 bg-gray-700/50 p-4 rounded-lg">
          <p className="text-gray-300">{response}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionWidget;
