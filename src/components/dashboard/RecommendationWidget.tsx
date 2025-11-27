import { Lightbulb } from 'lucide-react';

const RecommendationWidget = () => {
  const recommendation = 'Light showers expected. Consider setting up water harvesting systems. It\'s a good time to plant maize.';

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Lightbulb className="h-6 w-6 text-yellow-400" />
        <span>AI Recommendation</span>
      </h2>
      <p className="text-gray-300">{recommendation}</p>
    </div>
  );
};

export default RecommendationWidget;
