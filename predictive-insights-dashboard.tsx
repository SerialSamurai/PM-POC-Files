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
  Users,
  DollarSign,
  Award,
  Database,
  Network,
  Server,
  Layers,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Radio,
  Thermometer,
  Battery,
  Wifi,
  HardDrive,
  MemoryStick,
  MessageSquare,
  Bell,
  BellOff,
  Search,
  Plus
} from 'lucide-react';

const PredictiveInsightsDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [refreshing, setRefreshing] = useState(false);
  const [mlModelsRunning, setMLModelsRunning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  // Overview KPIs
  const overviewMetrics = {
    mlModelsActive: 8,
    predictionAccuracy: 94.7,
    anomaliesDetected: 23,
    failuresPrevented: 12,
    optimizationsSuggested: 15,
    costSavings: 127400,
    dataPoints: 2847234,
    processingSpeed: 1247
  };

  // Machine Learning Models
  const mlModels = [
    {
      id: 'ML-001',
      name: 'Equipment Failure Prediction',
      type: 'Classification',
      status: 'active',
      accuracy: 94.2,
      precision: 91.8,
      recall: 96.1,
      f1Score: 93.9,
      trainingData: '2.3M samples',
      lastTrained: '2025-05-20 08:30',
      nextTraining: '2025-05-27 08:30',
      features: 47,
      predictions: 156,
      confidence: 87.5,
      modelSize: '24.7 MB',
      inferenceTime: '12ms'
    },
    {
      id: 'ML-002',
      name: 'Quality Anomaly Detection',
      type: 'Anomaly Detection',
      status: 'active',
      accuracy: 91.8,
      precision: 89.4,
      recall: 94.2,
      f1Score: 91.7,
      trainingData: '1.8M samples',
      lastTrained: '2025-05-19 14:15',
      nextTraining: '2025-05-26 14:15',
      features: 32,
      predictions: 89,
      confidence: 92.1,
      modelSize: '18.3 MB',
      inferenceTime: '8ms'
    },
    {
      id: 'ML-003',
      name: 'Process Optimization',
      type: 'Regression',
      status: 'training',
      accuracy: 89.4,
      precision: 87.1,
      recall: 91.3,
      f1Score: 89.1,
      trainingData: '3.1M samples',
      lastTrained: '2025-05-18 20:00',
      nextTraining: '2025-05-25 20:00',
      features: 63,
      predictions: 45,
      confidence: 85.3,
      modelSize: '31.2 MB',
      inferenceTime: '15ms'
    },
    {
      id: 'ML-004',
      name: 'Energy Consumption Forecasting',
      type: 'Regression',
      status: 'active',
      accuracy: 96.1,
      precision: 94.8,
      recall: 97.2,
      f1Score: 95.9,
      trainingData: '1.2M samples',
      lastTrained: '2025-05-21 06:00',
      nextTraining: '2025-05-28 06:00',
      features: 28,
      predictions: 78,
      confidence: 94.7,
      modelSize: '15.8 MB',
      inferenceTime: '6ms'
    }
  ];

  // Real-time Anomalies
  const realtimeAnomalies = [
    {
      id: 'ANO-001',
      equipment: 'Kawasaki Robot #1',
      parameter: 'Joint Temperature',
      severity: 'high',
      score: 89.4,
      threshold: 45.0,
      current: 52.3,
      detected: '2025-05-21 14:23:15',
      status: 'active',
      impact: 'Potential overheating risk',
      recommendation: 'Check cooling system'
    },
    {
      id: 'ANO-002',
      equipment: 'Weld Controller #2',
      parameter: 'Current Fluctuation',
      severity: 'medium',
      score: 76.8,
      threshold: 8500,
      current: 9240,
      detected: '2025-05-21 14:18:42',
      status: 'investigating',
      impact: 'Weld quality variation',
      recommendation: 'Inspect power connections'
    },
    {
      id: 'ANO-003',
      equipment: 'Vision System #1',
      parameter: 'Processing Time',
      severity: 'low',
      score: 65.2,
      threshold: 200,
      current: 267,
      detected: '2025-05-21 14:12:08',
      status: 'resolved',
      impact: 'Slight cycle time increase',
      recommendation: 'System resources optimized'
    }
  ];

  // Failure Predictions
  const failurePredictions = [
    {
      id: 'FP-001',
      equipment: 'Kawasaki Robot #2',
      component: 'Joint J2 Motor',
      failureProbability: 78.5,
      timeToFailure: '12-18 days',
      confidence: 91.2,
      severity: 'critical',
      estimatedCost: 15400,
      recommendation: 'Schedule immediate maintenance',
      trending: 'increasing',
      lastMaintenance: '2025-04-15',
      maintenanceHistory: 3,
      indicators: ['Temperature increase', 'Vibration pattern change', 'Current draw anomaly']
    },
    {
      id: 'FP-002',
      equipment: 'Weld Controller #3',
      component: 'Power Supply Unit',
      failureProbability: 45.2,
      timeToFailure: '30-45 days',
      confidence: 85.7,
      severity: 'medium',
      estimatedCost: 8200,
      recommendation: 'Plan maintenance within 2 weeks',
      trending: 'stable',
      lastMaintenance: '2025-03-20',
      maintenanceHistory: 2,
      indicators: ['Voltage regulation issues', 'Temperature variance']
    },
    {
      id: 'FP-003',
      equipment: 'Vision Camera #1',
      component: 'Image Sensor',
      failureProbability: 23.8,
      timeToFailure: '60-90 days',
      confidence: 74.3,
      severity: 'low',
      estimatedCost: 3500,
      recommendation: 'Monitor closely',
      trending: 'decreasing',
      lastMaintenance: '2025-02-10',
      maintenanceHistory: 1,
      indicators: ['Image quality degradation']
    }
  ];

  // Optimization Opportunities
  const optimizationOpportunities = [
    {
      id: 'OPT-001',
      title: 'Robot Path Optimization',
      area: 'Body Side Weld Station',
      type: 'Cycle Time',
      currentValue: 42.5,
      optimizedValue: 39.8,
      improvement: 6.4,
      confidence: 92.1,
      potentialSavings: 2400,
      savingsPeriod: 'daily',
      implementation: 'Update robot program paths',
      complexity: 'medium',
      timeToImplement: '4 hours',
      roi: 340
    },
    {
      id: 'OPT-002',
      title: 'Energy Consumption Reduction',
      area: 'Weld Controllers',
      type: 'Energy',
      currentValue: 18.2,
      optimizedValue: 15.7,
      improvement: 13.7,
      confidence: 87.4,
      potentialSavings: 180,
      savingsPeriod: 'daily',
      implementation: 'Adjust power profiles during low demand',
      complexity: 'low',
      timeToImplement: '2 hours',
      roi: 95
    },
    {
      id: 'OPT-003',
      title: 'Quality Improvement',
      area: 'Quarter Panel Station',
      type: 'Quality',
      currentValue: 96.1,
      optimizedValue: 98.3,
      improvement: 2.3,
      confidence: 89.6,
      potentialSavings: 850,
      savingsPeriod: 'daily',
      implementation: 'Fine-tune weld parameters based on ML insights',
      complexity: 'high',
      timeToImplement: '8 hours',
      roi: 178
    },
    {
      id: 'OPT-004',
      title: 'Maintenance Schedule Optimization',
      area: 'All Equipment',
      type: 'Maintenance',
      currentValue: 15.2,
      optimizedValue: 11.8,
      improvement: 22.4,
      confidence: 94.2,
      potentialSavings: 1200,
      savingsPeriod: 'weekly',
      implementation: 'Predictive maintenance scheduling',
      complexity: 'medium',
      timeToImplement: '12 hours',
      roi: 285
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'training': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'stopped': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
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

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">{overviewMetrics.mlModelsActive}</span>
          </div>
          <p className="text-gray-400 text-sm">Active ML Models</p>
          <p className="text-blue-400 text-xs">All systems operational</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-white">{overviewMetrics.predictionAccuracy}%</span>
          </div>
          <p className="text-gray-400 text-sm">Prediction Accuracy</p>
          <p className="text-green-400 text-xs">+2.1% from last month</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-8 h-8 text-orange-400" />
            <span className="text-2xl font-bold text-white">{overviewMetrics.anomaliesDetected}</span>
          </div>
          <p className="text-gray-400 text-sm">Anomalies Detected</p>
          <p className="text-orange-400 text-xs">3 requiring attention</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-white">${(overviewMetrics.costSavings/1000).toFixed(0)}K</span>
          </div>
          <p className="text-gray-400 text-sm">Cost Savings (YTD)</p>
          <p className="text-green-400 text-xs">ROI: 340%</p>
        </div>
      </div>

      {/* Recent Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Critical Predictions
          </h3>
          <div className="space-y-3">
            {failurePredictions.filter(fp => fp.severity === 'critical').map((prediction) => (
              <div key={prediction.id} className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{prediction.equipment}</h4>
                  <span className="text-red-400 font-bold">{prediction.failureProbability}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{prediction.component}</p>
                <p className="text-red-400 text-sm">{prediction.recommendation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-green-400" />
            Top Optimizations
          </h3>
          <div className="space-y-3">
            {optimizationOpportunities.slice(0, 3).map((opt) => (
              <div key={opt.id} className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{opt.title}</h4>
                  <span className="text-green-400 font-bold">+{opt.improvement}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{opt.area}</p>
                <p className="text-green-400 text-sm">${opt.potentialSavings}/{opt.savingsPeriod} savings</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Performance */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-400" />
          System Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{overviewMetrics.dataPoints.toLocaleString()}</div>
            <p className="text-gray-400 text-sm">Data Points Processed</p>
            <p className="text-blue-400 text-xs">Last 24 hours</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{overviewMetrics.processingSpeed}</div>
            <p className="text-gray-400 text-sm">Points/Second</p>
            <p className="text-green-400 text-xs">Real-time processing</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{overviewMetrics.failuresPrevented}</div>
            <p className="text-gray-400 text-sm">Failures Prevented</p>
            <p className="text-yellow-400 text-xs">This month</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{overviewMetrics.optimizationsSuggested}</div>
            <p className="text-gray-400 text-sm">Optimizations Found</p>
            <p className="text-purple-400 text-xs">Ready to implement</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMLInsightsTab = () => (
    <div className="space-y-6">
      {/* ML Models Overview */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-400" />
            Machine Learning Models
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMLModelsRunning(!mlModelsRunning)}
              className={`p-2 rounded transition-colors ${
                mlModelsRunning ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {mlModelsRunning ? <PlayCircle className="w-4 h-4" /> : <PauseCircle className="w-4 h-4" />}
            </button>
            <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {mlModels.map((model) => (
            <div key={model.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{model.name}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(model.status)}`}>
                      {model.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {model.status === 'training' && <RefreshCw className="w-3 h-3 animate-spin" />}
                      {model.status.toUpperCase()}
                    </span>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {model.type}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Accuracy</p>
                      <p className="text-white font-semibold">{model.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Precision</p>
                      <p className="text-white font-semibold">{model.precision}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Recall</p>
                      <p className="text-white font-semibold">{model.recall}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">F1-Score</p>
                      <p className="text-white font-semibold">{model.f1Score}%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Training Data</p>
                      <p className="text-white">{model.trainingData}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Features</p>
                      <p className="text-white">{model.features}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Model Size</p>
                      <p className="text-white">{model.modelSize}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Inference Time</p>
                      <p className="text-white">{model.inferenceTime}</p>
                    </div>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <p className="text-gray-400 text-sm">Last Trained</p>
                  <p className="text-white text-sm">{model.lastTrained}</p>
                  <p className="text-gray-400 text-sm mt-2">Next Training</p>
                  <p className="text-yellow-400 text-sm">{model.nextTraining}</p>
                </div>
              </div>

              <div className="flex gap-2 pt-3 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  View Details
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Retrain Model
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  Export Model
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  Model Config
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnomalyDetectionTab = () => (
    <div className="space-y-6">
      {/* Real-time Anomalies */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          Real-time Anomaly Detection
        </h3>
        
        <div className="space-y-4">
          {realtimeAnomalies.map((anomaly) => (
            <div key={anomaly.id} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-l-red-500">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{anomaly.equipment}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(anomaly.severity)}`}>
                      <AlertTriangle className="w-3 h-3" />
                      {anomaly.severity.toUpperCase()}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
                      anomaly.status === 'active' ? 'text-red-400 bg-red-900/20 border-red-500/30' :
                      anomaly.status === 'investigating' ? 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30' :
                      'text-green-400 bg-green-900/20 border-green-500/30'
                    }`}>
                      {anomaly.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{anomaly.parameter}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Anomaly Score</p>
                      <p className="text-red-400 font-bold text-lg">{anomaly.score}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Threshold</p>
                      <p className="text-white font-mono">{anomaly.threshold}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Current Value</p>
                      <p className="text-white font-mono">{anomaly.current}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Detected</p>
                      <p className="text-white">{anomaly.detected}</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded p-2 mb-2">
                    <p className="text-blue-400 text-sm font-semibold">Impact:</p>
                    <p className="text-blue-300 text-sm">{anomaly.impact}</p>
                  </div>
                  
                  <div className="bg-green-900/20 border border-green-500/30 rounded p-2">
                    <p className="text-green-400 text-sm font-semibold">Recommendation:</p>
                    <p className="text-green-300 text-sm">{anomaly.recommendation}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="Investigate">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded transition-colors" title="Acknowledge">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors" title="Resolve">
                    <Wrench className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFailurePredictionsTab = () => (
    <div className="space-y-6">
      {/* Failure Predictions */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-400" />
          Equipment Failure Predictions
        </h3>
        
        <div className="space-y-4">
          {failurePredictions.map((prediction) => (
            <div key={prediction.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{prediction.equipment}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(prediction.severity)}`}>
                      {prediction.severity === 'critical' && <XCircle className="w-3 h-3" />}
                      {prediction.severity === 'medium' && <AlertTriangle className="w-3 h-3" />}
                      {prediction.severity === 'low' && <CheckCircle className="w-3 h-3" />}
                      {prediction.severity.toUpperCase()} RISK
                    </span>
                    {getTrendIcon(prediction.trending)}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{prediction.component}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-400">Failure Probability</p>
                      <p className={`text-2xl font-bold ${
                        prediction.severity === 'critical' ? 'text-red-400' :
                        prediction.severity === 'medium' ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {prediction.failureProbability}%
                      </p>
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
                      <p className="text-gray-400">Estimated Cost</p>
                      <p className="text-red-400 font-semibold">${prediction.estimatedCost.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-gray-400 text-sm mb-1">Key Indicators:</p>
                    <div className="flex flex-wrap gap-2">
                      {prediction.indicators.map((indicator, idx) => (
                        <span key={idx} className="px-2 py-1 bg-red-900/30 text-red-300 rounded text-xs">
                          {indicator}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded p-2">
                    <p className="text-orange-400 text-sm font-semibold">Recommendation:</p>
                    <p className="text-orange-300 text-sm">{prediction.recommendation}</p>
                  </div>
                </div>
                
                <div className="text-right ml-4">
                  <p className="text-gray-400 text-sm">Last Maintenance</p>
                  <p className="text-white">{prediction.lastMaintenance}</p>
                  <p className="text-gray-400 text-sm mt-2">History</p>
                  <p className="text-white">{prediction.maintenanceHistory} repairs</p>
                </div>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/30 transition-colors text-sm">
                  Schedule Maintenance
                </button>
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  View Analysis
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Create Work Order
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  History
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOptimizationTab = () => (
    <div className="space-y-6">
      {/* Optimization Opportunities */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Process Optimization Opportunities
        </h3>
        
        <div className="space-y-4">
          {optimizationOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{opportunity.title}</h4>
                    <span className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs">
                      {opportunity.type.toUpperCase()}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      opportunity.complexity === 'high' ? 'bg-red-900/30 text-red-400' :
                      opportunity.complexity === 'medium' ? 'bg-yellow-900/30 text-yellow-400' :
                      'bg-green-900/30 text-green-400'
                    }`}>
                      {opportunity.complexity.toUpperCase()} COMPLEXITY
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{opportunity.area}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-400">Current Value</p>
                      <p className="text-white font-mono">{opportunity.currentValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Optimized Value</p>
                      <p className="text-green-400 font-mono">{opportunity.optimizedValue}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Improvement</p>
                      <p className="text-green-400 font-semibold">+{opportunity.improvement}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Confidence</p>
                      <p className="text-white">{opportunity.confidence}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Potential Savings</p>
                      <p className="text-green-400 font-bold text-lg">
                        ${opportunity.potentialSavings}/{opportunity.savingsPeriod}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">Implementation Time</p>
                      <p className="text-white">{opportunity.timeToImplement}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">ROI</p>
                      <p className="text-green-400 font-semibold">{opportunity.roi}%</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded p-2">
                    <p className="text-blue-400 text-sm font-semibold">Implementation:</p>
                    <p className="text-blue-300 text-sm">{opportunity.implementation}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Implement Now
                </button>
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Run Simulation
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  Schedule Implementation
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  View Details
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
    { id: 'ml-insights', name: 'ML Insights', icon: Brain },
    { id: 'anomaly-detection', name: 'Anomaly Detection', icon: AlertTriangle },
    { id: 'failure-predictions', name: 'Failure Predictions', icon: Clock },
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
            <p className="text-gray-400 mt-2">AI-powered manufacturing intelligence and optimization platform</p>
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
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'ml-insights' && renderMLInsightsTab()}
        {activeTab === 'anomaly-detection' && renderAnomalyDetectionTab()}
        {activeTab === 'failure-predictions' && renderFailurePredictionsTab()}
        {activeTab === 'optimization' && renderOptimizationTab()}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Models Active: {overviewMetrics.mlModelsActive}
            </span>
            <span className="text-gray-400">
              Processing: {overviewMetrics.processingSpeed} pts/sec
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">AI Engine Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveInsightsDashboard;