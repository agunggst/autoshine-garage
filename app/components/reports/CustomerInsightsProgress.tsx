export type Insight = {
  id: string;
  label: string;
  value: string;
  percentage: number;
  barColor: string;
};

type CustomerInsightProgressProps = {
  insights: Insight[];
  title?: string;
};

export default function CustomerInsightsProgress({ insights, title = 'Customer Insights' }: CustomerInsightProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {insights.map((insight) => (
            <div key={insight.id}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-600">{insight.label}</span>
                <span className="text-sm font-semibold">{insight.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${insight.barColor} font-semibold h-2 rounded-full`}
                  style={{ width: `${insight.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}