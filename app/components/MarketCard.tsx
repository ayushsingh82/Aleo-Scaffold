interface MarketOption {
  label: string;
  yesPercent: number;
  noPercent: number;
}

interface MarketCardProps {
  title: string;
  category?: string;
  options: MarketOption[];
  volume: string;
  volumePeriod?: "daily" | "monthly";
  icon?: string;
}

export default function MarketCard({ 
  title, 
  category, 
  options, 
  volume, 
  volumePeriod = "monthly",
  icon 
}: MarketCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <div>
            {category && (
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {category}
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-900 mt-1">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {options.map((option, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">{option.label}</span>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    {option.yesPercent}%
                  </div>
                  <div className="text-xs text-gray-500">Yes</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">
                    {option.noPercent}%
                  </div>
                  <div className="text-xs text-gray-500">No</div>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-green-500 h-full transition-all"
                style={{ width: `${option.yesPercent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{volume}</span> Vol.
        </div>
        <div className="text-xs text-gray-400 capitalize">{volumePeriod}</div>
      </div>
    </div>
  );
}
