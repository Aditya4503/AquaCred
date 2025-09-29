import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface NeoBrutalistChartProps {
  title: string;
  value: string | number;
  subtitle: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  data?: number[];
}

export function NeoBrutalistChart({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue, 
  color = 'blue',
  data = []
}: NeoBrutalistChartProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-500',
      border: 'border-blue-600',
      text: 'text-blue-900',
      accent: 'bg-blue-100'
    },
    green: {
      bg: 'bg-green-500',
      border: 'border-green-600',
      text: 'text-green-900',
      accent: 'bg-green-100'
    },
    orange: {
      bg: 'bg-orange-500',
      border: 'border-orange-600',
      text: 'text-orange-900',
      accent: 'bg-orange-100'
    },
    red: {
      bg: 'bg-red-500',
      border: 'border-red-600',
      text: 'text-red-900',
      accent: 'bg-red-100'
    },
    purple: {
      bg: 'bg-purple-500',
      border: 'border-purple-600',
      text: 'text-purple-900',
      accent: 'bg-purple-100'
    }
  };

  const colors = colorClasses[color];

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600 bg-green-100';
      case 'down':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Card className={`border-4 ${colors.border} shadow-lg transform hover:scale-105 transition-transform duration-200`}>
      <CardHeader className={`${colors.bg} text-white -m-px border-b-4 ${colors.border}`}>
        <CardTitle className="text-lg font-black uppercase tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-white">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <p className={`text-4xl font-black ${colors.text} leading-none`}>{value}</p>
            <p className="text-sm text-gray-600 font-bold mt-1">{subtitle}</p>
          </div>
          {trend && trendValue && (
            <Badge className={`${getTrendColor()} border-2 border-current font-bold`}>
              {getTrendIcon()}
              <span className="ml-1">{trendValue}</span>
            </Badge>
          )}
        </div>
        
        {/* Simple bar chart representation */}
        {data.length > 0 && (
          <div className="flex items-end space-x-1 h-16 mt-4">
            {data.map((point, index) => (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} flex-1 transition-all duration-300 hover:opacity-80`}
                style={{ 
                  height: `${Math.max((point / Math.max(...data)) * 100, 10)}%`,
                  minHeight: '8px'
                }}
              />
            ))}
          </div>
        )}
        
        {/* Neo-brutalist accent */}
        <div className={`${colors.accent} border-2 ${colors.border} -mx-2 -mb-2 mt-4 p-2`}>
          <div className={`w-full h-2 ${colors.bg} border ${colors.border}`}></div>
        </div>
      </CardContent>
    </Card>
  );
}

interface MetricGridProps {
  metrics: Array<{
    title: string;
    value: string | number;
    subtitle: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
    data?: number[];
  }>;
}

export function MetricGrid({ metrics }: MetricGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <NeoBrutalistChart key={index} {...metric} />
      ))}
    </div>
  );
}