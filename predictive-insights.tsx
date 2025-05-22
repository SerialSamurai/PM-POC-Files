import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Wrench, 
  Target, 
  Activity, 
  Clock, 
  ChevronRight,
  Settings,
  Download,
  RefreshCw,
  Eye,
  Filter,
  Calendar,
  Gauge,
  BarChart3,
  LineChart,
  PieChart,
  Cpu,
  Shield,
  Lightbulb,
  ArrowUp,
  ArrowDown,
  Minus,
  Timer,
  Users
} from 'lucide-react';

const PredictiveInsights = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  // ML Models and Predictions Data
  const mlModels = {
    failures: {
      name: 'Equipment Failure Prediction',
      accuracy: 94.2,
      status: 'active',
      lastTraining: '2025-05-20',
      predictions: 23,
      confidence: 87.5
    },
    anomaly: {
      name: 'Anomaly Detection',
      accuracy: 91.8,
      status: 'active',
      lastTraining: '2025-05-19',
      predictions: 156,
      confidence: 92.1
    },
    optimization: {
      name: 'Process Optimization',
      accuracy: 89.4,
      status: 'training',
      lastTraining: '2025-05-21',
      predictions: 8,
      confidence: 85.3
    },
    quality: {
      name: 'Quality Prediction',
      accuracy: 96.1,
      status: 'active',
      lastTraining: '2025-05-18',
      predictions: 45,
      confidence: 94.7
    }
  };

  const anomalies = [
    {
      id: 'ANM-001',
      equipment: 'Kawasaki Robot #1',
      type: 'Temperature Spike',
      severity: 'high',
      confidence: 94.2,
      detected: '2025-05-21 14:23',
      value: 47.8,
      threshold: 45.0,
      status: 'active',
      impact: 'Potential overheating risk'
    },
    {
      id: 'ANM-002',
      equipment: 'Weld Controller #3',
      type: 'Current Fluctuation',
      severity: 'medium',
      confidence: 87.5,
      detected: '2025-05-21 13:45',
      value: 8750,
      threshold: 8500,
      status: 'acknowledged',
      impact: 'Weld quality variation'
    },
    {
      id: 'ANM-003',
      equipment: 'Vision System',
      type: 'Processing Delay',
      severity: 'low',
      confidence: 79.3,
      detected: '2025-05-21 12:15',
      value: 245,
      threshold: 200,
      status: 'resolved',
      impact: 'Inspection cycle time increase'
    }
  ];

  const failurePredictions = [
    {
      id: 'FP-001',
      equipment: 'Kawasaki Robot #2',
      component: 'Joint J2 Motor',
      probability: 78.5,
      timeToFailure: '12-18 days',
      confidence: 91.2,
      riskLevel: 'high',
      recommendedAction: 'Schedule preventive maintenance',
      costImpact: '$15,400',
      trend: 'increasing'
    },
    {
      id: 'FP-002',
      equipment: 'Weld Controller #1',
      component: 'Power Supply Unit',
      probability: 45.2,
      timeToFailure: '30-45 days',
      confidence: 85.7,
      riskLevel: 'medium',
      recommendedAction: 'Monitor closely',
      costImpact: '$8,200',
      trend: 'stable'
    },
    {
      id: 'FP-003',
      equipment: 'Vision Camera',
      component: 'Image Sensor',
      probability: 23.8,
      timeToFailure: '60-90 days',
      confidence: 74.3,
      riskLevel: 'low',
      recommendedAction: 'Continue normal operation',
      costImpact: '$3,500',
      trend: 'decreasing'
    }
  ];

  const optimizations = [
    {
      id: 'OPT-001',
      title: 'Cycle Time Reduction',
      area: 'Body Side Weld Station',
      currentValue: 42.5,
      predictedValue: 39.8,
      improvement: 6.4,
      confidence: 92.1,
      implementation: 'Optimize robot path planning',
      savings: '$2,400/day',
      complexity: 'medium'
    },
    {
      id: 'OPT-002',
      title: 'Energy Consumption',
      area: 'Weld Controllers',
      currentValue: 18.2,
      predictedValue: 15.7,
      improvement: 13.7,
      confidence: 87.4,
      implementation: 'Adjust power profiles during low demand',
      savings: '$180/day',
      complexity: 'low'
    },
    {
      id: 'OPT-003',
      title: 'Quality Improvement',
      area: 'Quarter Panel Station',
      currentValue: 96.1,
      predictedValue: 98.3,
      improvement: 2.3,
      confidence: 89.6,
      implementation: 'Fine-tune weld parameters',
      savings: '$850/day',
      complexity: 'high'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <ArrowUp className="w-4 h-4 text-red-400" />;
      case 'decreasing': return <ArrowDown className="w-4 h-4 text-green-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-yellow-400" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* ML Models Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(mlModels).map(([key, model]) => (
          <div key={key} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
                model.status === 'active' ? 'text-green-400 bg-green-900/20 border-green-500/30' :
                model.status === 'training' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30' :
                'text-gray-400 bg-gray-900/20 border-gray-500/30'
              }`}>
                {model.status.toUpperCase()}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-white mb-2">{model.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Accuracy:</span>
                <span className="text-white font-semibold">{model.accuracy}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Predictions:</span>
                <span className="text-white">{model.predictions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Confidence:</span>
                <span className="text-white">{model.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Active Anomalies
          </h3>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-red-400">{anomalies.filter(a => a.status === 'active').length}</p>
            <p className="text-gray-400 text-sm">Requiring attention</p>
          </div>
          <div className="space-y-2">
            {anomalies.filter(a => a.status === 'active').slice(0, 2).map((anomaly) => (
              <div key={anomaly.id} className="text-sm">
                <p className="text-white font-semibold">{anomaly.equipment}</p>
                <p className="text-gray-400">{anomaly.type} - {anomaly.confidence}% confidence</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-orange-400" />
            Failure Risks
          </h3>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-orange-400">{failurePredictions.filter(f => f.riskLevel === 'high').length}</p>
            <p className="text-gray-400 text-sm">High risk predictions</p>
          </div>
          <div className="space-y-2">
            {failurePredictions.filter(f => f.riskLevel === 'high').map((prediction) => (
              <div key={prediction.id} className="text-sm">
                <p className="text-white font-semibold">{prediction.equipment}</p>
                <p className="text-gray-400">{prediction.component} - {prediction.timeToFailure}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-green-400" />
            Optimization Potential
          </h3>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-green-400">${
              optimizations.reduce((sum, opt) => sum + parseFloat(opt.savings.replace(/[$,\/day]/g, '')), 0).toLocaleString()
            }</p>
            <p className="text-gray-400 text-sm">Daily savings potential</p>
          </div>
          <div className="space-y-2">
            {optimizations.slice(0, 2).map((opt) => (
              <div key={opt.id} className="text-sm">
                <p className="text-white font-semibold">{opt.title}</p>
                <p className="text-gray-400">{opt.improvement}% improvement - {opt.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnomalies = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          Real-time Anomaly Detection
        </h3>
        
        <div className="space-y-4">
          {anomalies.map((anomaly) => (
            <div key={anomaly.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`w-5 h-5 ${
                    anomaly.severity === 'high' ? 'text-red-400' :
                    anomaly.severity === 'medium' ? 'text-yellow-400' : 'text-green-400'
                  }`} />
                  <div>
                    <h4 className="font-semibold text-white">{anomaly.equipment}</h4>
                    <p className="text-gray-400 text-sm">{anomaly.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(anomaly.severity)}`}>
                    {anomaly.severity.toUpperCase()}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
                    anomaly.status === 'active' ? 'text-red-400 bg-red-900/20 border-red-500/30' :
                    anomaly.status === 'acknowledged' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30' :
                    'text-green-400 bg-green-900/20 border-green-500/30'
                  }`}>
                    {anomaly.status.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-400">Detected</p>
                  <p className="text-white">{anomaly.detected}</p>
                </div>
                <div>
                  <p className="text-gray-400">Current Value</p>
                  <p className="text-white font-mono">{anomaly.value}</p>
                </div>
                <div>
                  <p className="text-gray-400">Threshold</p>
                  <p className="text-white font-mono">{anomaly.threshold}</p>
                </div>
                <div>
                  <p className="text-gray-400">Confidence</p>
                  <p className="text-white">{anomaly.confidence}%</p>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-400 text-sm">Impact Assessment:</p>
                <p className="text-white">{anomaly.impact}</p>
              </div>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Investigate
                </button>
                {anomaly.status === 'active' && (
                  <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                    Acknowledge
                  </button>
                )}
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  View History
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPredictions = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-400" />
          Equipment Failure Predictions
        </h3>
        
        <div className="space-y-4">
          {failurePredictions.map((prediction) => (
            <div key={prediction.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Wrench className={`w-5 h-5 ${getRiskColor(prediction.riskLevel)}`} />
                  <div>
                    <h4 className="font-semibold text-white">{prediction.equipment}</h4>
                    <p className="text-gray-400 text-sm">{prediction.component}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
                    prediction.riskLevel === 'high' ? 'text-red-400 bg-red-900/20 border-red-500/30' :
                    prediction.riskLevel === 'medium' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30' :
                    'text-green-400 bg-green-900/20 border-green-500/30'
                  }`}>
                    {prediction.riskLevel.toUpperCase()} RISK
                  </span>
                  {getTrendIcon(prediction.trend)}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-400">Failure Probability</p>
                  <p className={`text-xl font-bold ${getRiskColor(prediction.riskLevel)}`}>{prediction.probability}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Time to Failure</p>
                  <p className="text-white font-semibold">{prediction.timeToFailure}</p>
                </div>
                <div>
                  <p className="text-gray-400">Confidence</p>
                  <p className="text-white">{prediction.confidence}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Cost Impact</p>
                  <p className="text-red-400 font-semibold">{prediction.costImpact}</p>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-400 text-sm">Recommended Action:</p>
                <p className="text-white">{prediction.recommendedAction}</p>
              </div>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/30 transition-colors text-sm">
                  Schedule Maintenance
                </button>
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  View Details
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  Create Work Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOptimization = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Process Optimization Opportunities
        </h3>
        
        <div className="space-y-4">
          {optimizations.map((optimization) => (
            <div key={optimization.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-white">{optimization.title}</h4>
                    <p className="text-gray-400 text-sm">{optimization.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
                    optimization.complexity === 'high' ? 'text-red-400 bg-red-900/20 border-red-500/30' :
                    optimization.complexity === 'medium' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30' :
                    'text-green-400 bg-green-900/20 border-green-500/30'
                  }`}>
                    {optimization.complexity.toUpperCase()} COMPLEXITY
                  </span>
                  <span className="text-green-400 font-bold text-lg">{optimization.savings}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-400">Current Value</p>
                  <p className="text-white font-mono">{optimization.currentValue}</p>
                </div>
                <div>
                  <p className="text-gray-400">Predicted Value</p>
                  <p className="text-green-400 font-mono">{optimization.predictedValue}</p>
                </div>
                <div>
                  <p className="text-gray-400">Improvement</p>
                  <p className="text-green-400 font-semibold">+{optimization.improvement}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Confidence</p>
                  <p className="text-white">{optimization.confidence}%</p>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-400 text-sm">Implementation Strategy:</p>
                <p className="text-white">{optimization.implementation}</p>
              </div>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Implement
                </button>
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Simulate
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  View Analysis
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'anomalies', name: 'Anomaly Detection', icon: AlertTriangle },
    { id: 'predictions', name: 'Failure Predictions', icon: Clock },
    { id: 'optimization', name: 'Optimization', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Analytics</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Predictive Insights</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Predictive Insights Dashboard
            </h1>
            <p className="text-gray-400 mt-2">AI-powered analytics for body weld manufacturing optimization</p>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="1h">Last 1 Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            <button
              onClick={handleRefresh}
              className={`p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'anomalies' && renderAnomalies()}
        {activeTab === 'predictions' && renderPredictions()}
        {activeTab === 'optimization' && renderOptimization()}
      </div>
    </div>
  );
};

export default PredictiveInsights;