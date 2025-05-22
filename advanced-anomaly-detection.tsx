import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  AlertTriangle, 
  Target, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  RefreshCw, 
  Settings, 
  Filter, 
  Download, 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  ChevronRight,
  Zap,
  Thermometer,
  Gauge,
  Radio,
  Cpu,
  Server,
  Shield,
  Users,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  LineChart,
  Layers,
  Network,
  Timer,
  Bell,
  BellOff,
  Lightbulb,
  Search,
  Play,
  Pause
} from 'lucide-react';

const AdvancedAnomalyDetection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [activeTab, setActiveTab] = useState('realtime');
  const [refreshing, setRefreshing] = useState(false);
  const [contextMode, setContextMode] = useState(true);

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

  // Real-time anomaly data
  const anomalyMetrics = {
    totalAnomalies: 47,
    activeAnomalies: 12,
    criticalAnomalies: 3,
    falsePositiveRate: 8.2,
    modelAccuracy: 94.3,
    averageConfidence: 87.6
  };

  // Live anomaly scoring data
  const liveAnomalies = [
    {
      id: 'ANM-2025-001',
      equipment: 'Kawasaki Robot #1 - J2',
      sensor: 'Temperature Sensor',
      type: 'Temperature Spike',
      severity: 'critical',
      score: 97.8,
      confidence: 94.2,
      deviation: '+12.3°C',
      baseline: '45.0°C',
      current: '57.3°C',
      detected: '2025-05-21 14:23:45',
      context: 'High production demand + Ambient temp 32°C',
      correlations: ['Robot #2 - Similar pattern', 'Cooling system pressure drop'],
      status: 'active',
      acknowledged: false
    },
    {
      id: 'ANM-2025-002',
      equipment: 'Weld Controller #3',
      sensor: 'Current Monitor',
      type: 'Current Fluctuation',
      severity: 'high',
      score: 89.4,
      confidence: 87.5,
      deviation: '+350A',
      baseline: '8500A',
      current: '8850A',
      detected: '2025-05-21 14:20:12',
      context: 'New part program started 5min ago',
      correlations: ['Power supply voltage variance', 'Line frequency deviation'],
      status: 'investigating',
      acknowledged: true
    },
    {
      id: 'ANM-2025-003',
      equipment: 'Vision System Camera #1',
      sensor: 'Processing Timer',
      type: 'Processing Delay',
      severity: 'medium',
      score: 76.2,
      confidence: 82.1,
      deviation: '+45ms',
      baseline: '200ms',
      current: '245ms',
      detected: '2025-05-21 14:15:30',
      context: 'High inspection complexity on current part',
      correlations: ['Network latency increase', 'CPU utilization spike'],
      status: 'resolved',
      acknowledged: true
    },
    {
      id: 'ANM-2025-004',
      equipment: 'PLC Main Controller',
      sensor: 'Cycle Time Monitor',
      type: 'Timing Variance',
      severity: 'low',
      score: 65.8,
      confidence: 79.3,
      deviation: '+2.1s',
      baseline: '42.0s',
      current: '44.1s',
      detected: '2025-05-21 14:10:15',
      context: 'Manual operator intervention logged',
      correlations: ['Safety system activation', 'Operator response time'],
      status: 'monitoring',
      acknowledged: false
    }
  ];

  // Anomaly clusters
  const anomalyClusters = [
    {
      id: 'CLU-001',
      name: 'Thermal Management Cluster',
      count: 8,
      equipment: ['Robot #1', 'Robot #2', 'Weld Controller #1'],
      pattern: 'Temperature spikes during high-load operations',
      severity: 'high',
      confidence: 91.2,
      rootCause: 'Cooling system degradation',
      recommendation: 'Inspect cooling circuits and replace filters',
      timeline: 'Last 6 hours'
    },
    {
      id: 'CLU-002',
      name: 'Power Quality Cluster',
      count: 5,
      equipment: ['Weld Controller #2', 'Weld Controller #3', 'Power Supply'],
      pattern: 'Current fluctuations correlated with grid voltage',
      severity: 'medium',
      confidence: 85.7,
      rootCause: 'External power grid instability',
      recommendation: 'Contact utility provider, consider UPS upgrade',
      timeline: 'Last 4 hours'
    },
    {
      id: 'CLU-003',
      name: 'Vision Processing Cluster',
      count: 3,
      equipment: ['Vision System #1', 'Vision System #2'],
      pattern: 'Processing delays during complex part inspections',
      severity: 'low',
      confidence: 78.4,
      rootCause: 'Algorithm optimization needed',
      recommendation: 'Update vision processing algorithms',
      timeline: 'Last 2 hours'
    }
  ];

  // Multi-sensor correlation matrix
  const sensorCorrelations = [
    { sensor1: 'Robot J2 Temp', sensor2: 'Cooling Flow', correlation: 0.87, significance: 'high' },
    { sensor1: 'Weld Current', sensor2: 'Line Voltage', correlation: 0.94, significance: 'high' },
    { sensor1: 'Vision Process Time', sensor2: 'CPU Utilization', correlation: 0.76, significance: 'medium' },
    { sensor1: 'Cycle Time', sensor2: 'Operator Response', correlation: 0.68, significance: 'medium' },
    { sensor1: 'Ambient Temp', sensor2: 'Equipment Temp', correlation: 0.82, significance: 'high' },
    { sensor1: 'Vibration Level', sensor2: 'Motor Current', correlation: 0.71, significance: 'medium' }
  ];

  // Context factors
  const contextFactors = {
    production: {
      currentShift: 'Day Shift - Team A',
      productionRate: '95% of target',
      partProgram: 'CAMRY_BODYSIDE_WELD_A v3.2.1',
      operatorExperience: 'Experienced (>2 years)'
    },
    environmental: {
      ambientTemp: '32°C',
      humidity: '45%',
      powerQuality: 'Stable',
      networkLatency: '2.1ms'
    },
    maintenance: {
      lastPM: '2025-05-15',
      nextPM: '2025-06-15',
      recentChanges: 'Filter replacement on 2025-05-18',
      healthScore: '87%'
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'investigating': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'resolved': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'monitoring': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getCorrelationColor = (correlation) => {
    if (correlation > 0.8) return 'text-red-400';
    if (correlation > 0.6) return 'text-yellow-400';
    return 'text-green-400';
  };

  const filteredAnomalies = liveAnomalies.filter(anomaly => {
    return selectedSeverity === 'all' || anomaly.severity === selectedSeverity;
  });

  const renderRealTimeTab = () => (
    <div className="space-y-6">
      {/* Live Anomaly Scoring */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            Live Anomaly Scoring
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Auto-refresh: </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredAnomalies.map((anomaly) => (
            <div key={anomaly.id} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-l-red-500">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{anomaly.equipment}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(anomaly.severity)}`}>
                      <AlertTriangle className="w-3 h-3" />
                      {anomaly.severity.toUpperCase()}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(anomaly.status)}`}>
                      {anomaly.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{anomaly.type} - {anomaly.sensor}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Anomaly Score</p>
                      <p className="text-red-400 font-bold text-lg">{anomaly.score}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Confidence</p>
                      <p className="text-white font-semibold">{anomaly.confidence}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Current/Baseline</p>
                      <p className="text-white font-mono">{anomaly.current}/{anomaly.baseline}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Deviation</p>
                      <p className="text-red-400 font-semibold">{anomaly.deviation}</p>
                    </div>
                  </div>
                  
                  {contextMode && (
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-2 mb-3">
                      <p className="text-blue-400 text-sm font-semibold">Context:</p>
                      <p className="text-blue-300 text-sm">{anomaly.context}</p>
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <p className="text-gray-400 text-sm">Correlations:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {anomaly.correlations.map((correlation, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-xs">
                          {correlation}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <div className="text-right text-sm">
                    <p className="text-gray-400">Detected</p>
                    <p className="text-white">{anomaly.detected}</p>
                  </div>
                  <div className="flex gap-2">
                    {!anomaly.acknowledged && (
                      <button className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded transition-colors" title="Acknowledge">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="Investigate">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors" title="Mark as False Positive">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderClusteringTab = () => (
    <div className="space-y-6">
      {/* Anomaly Clusters */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" />
          Anomaly Clusters
        </h3>
        
        <div className="space-y-4">
          {anomalyClusters.map((cluster) => (
            <div key={cluster.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{cluster.name}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getSeverityColor(cluster.severity)}`}>
                      {cluster.count} anomalies
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{cluster.pattern}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-gray-400">Affected Equipment</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {cluster.equipment.map((eq, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400">Root Cause</p>
                      <p className="text-white">{cluster.rootCause}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Confidence</p>
                      <p className="text-white font-semibold">{cluster.confidence}%</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-900/20 border border-green-500/30 rounded p-2 mb-3">
                    <p className="text-green-400 text-sm font-semibold">Recommendation:</p>
                    <p className="text-green-300 text-sm">{cluster.recommendation}</p>
                  </div>
                </div>
                
                <div className="text-right text-sm ml-4">
                  <p className="text-gray-400">Timeline</p>
                  <p className="text-white">{cluster.timeline}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/30 transition-colors text-sm">
                  Create Work Order
                </button>
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Analyze Pattern
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

  const renderCorrelationTab = () => (
    <div className="space-y-6">
      {/* Multi-Sensor Correlation Matrix */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Network className="w-5 h-5 text-green-400" />
          Multi-Sensor Correlation Matrix
        </h3>
        
        <div className="space-y-3">
          {sensorCorrelations.map((corr, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="text-white font-semibold">{corr.sensor1} ↔ {corr.sensor2}</div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    corr.significance === 'high' ? 'bg-red-900/30 text-red-400' :
                    corr.significance === 'medium' ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-green-900/30 text-green-400'
                  }`}>
                    {corr.significance.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`text-lg font-bold ${getCorrelationColor(corr.correlation)}`}>
                    {corr.correlation.toFixed(2)}
                  </p>
                  <p className="text-gray-400 text-xs">correlation</p>
                </div>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      corr.correlation > 0.8 ? 'bg-red-500' :
                      corr.correlation > 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${corr.correlation * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContextTab = () => (
    <div className="space-y-6">
      {/* Context-Aware Detection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            Production Context
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Current Shift:</span>
              <span className="text-white">{contextFactors.production.currentShift}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Production Rate:</span>
              <span className="text-green-400">{contextFactors.production.productionRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Part Program:</span>
              <span className="text-white font-mono text-sm">{contextFactors.production.partProgram}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Operator Experience:</span>
              <span className="text-green-400">{contextFactors.production.operatorExperience}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-orange-400" />
            Environmental Context
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Ambient Temperature:</span>
              <span className="text-orange-400">{contextFactors.environmental.ambientTemp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Humidity:</span>
              <span className="text-white">{contextFactors.environmental.humidity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Power Quality:</span>
              <span className="text-green-400">{contextFactors.environmental.powerQuality}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network Latency:</span>
              <span className="text-green-400">{contextFactors.environmental.networkLatency}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Maintenance Context
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Last PM:</span>
              <span className="text-white">{contextFactors.maintenance.lastPM}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Next PM:</span>
              <span className="text-yellow-400">{contextFactors.maintenance.nextPM}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Recent Changes:</span>
              <span className="text-white text-sm">{contextFactors.maintenance.recentChanges}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Health Score:</span>
              <span className="text-green-400">{contextFactors.maintenance.healthScore}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'realtime', name: 'Real-time Scoring', icon: Activity },
    { id: 'clustering', name: 'Anomaly Clustering', icon: Layers },
    { id: 'correlation', name: 'Multi-Sensor Correlation', icon: Network },
    { id: 'context', name: 'Context Awareness', icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Analytics</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Predictive</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Advanced Anomaly Detection</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Anomaly Detection
            </h1>
            <p className="text-gray-400 mt-2">AI-powered real-time anomaly detection with contextual intelligence</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Context Mode:</span>
              <button
                onClick={() => setContextMode(!contextMode)}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  contextMode ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                }`}
              >
                {contextMode ? 'ON' : 'OFF'}
              </button>
            </div>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="1h">Last 1 Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
            </select>
            <button
              onClick={handleRefresh}
              className={`p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Anomalies</p>
              <p className="text-2xl font-bold text-white">{anomalyMetrics.totalAnomalies}</p>
            </div>
            <Brain className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active</p>
              <p className="text-2xl font-bold text-red-400">{anomalyMetrics.activeAnomalies}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Critical</p>
              <p className="text-2xl font-bold text-red-400">{anomalyMetrics.criticalAnomalies}</p>
            </div>
            <XCircle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">False Positive Rate</p>
              <p className="text-2xl font-bold text-yellow-400">{anomalyMetrics.falsePositiveRate}%</p>
            </div>
            <ThumbsDown className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Model Accuracy</p>
              <p className="text-2xl font-bold text-green-400">{anomalyMetrics.modelAccuracy}%</p>
            </div>
            <Target className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Confidence</p>
              <p className="text-2xl font-bold text-blue-400">{anomalyMetrics.averageConfidence}%</p>
            </div>
            <CheckCircle className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-gray-400 text-sm">Severity:</span>
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
            className="px-3 py-1 bg-gray-900/50 border border-gray-700/50 rounded text-white focus:outline-none focus:border-blue-500"
          >
            <option value="all">All</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
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
        {activeTab === 'realtime' && renderRealTimeTab()}
        {activeTab === 'clustering' && renderClusteringTab()}
        {activeTab === 'correlation' && renderCorrelationTab()}
        {activeTab === 'context' && renderContextTab()}
      </div>

      {/* False Positive Feedback Panel */}
      <div className="fixed bottom-6 right-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 max-w-sm">
        <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-400" />
          Feedback Learning
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Feedback Collected:</span>
            <span className="text-white">342 cases</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Model Improved:</span>
            <span className="text-green-400">+2.3% accuracy</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Last Training:</span>
            <span className="text-white">2 hours ago</span>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-xs">
            <ThumbsUp className="w-3 h-3 inline mr-1" />
            Good Detection
          </button>
          <button className="flex-1 px-3 py-1 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30 transition-colors text-xs">
            <ThumbsDown className="w-3 h-3 inline mr-1" />
            False Positive
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Active Models: 4
            </span>
            <span className="text-gray-400">
              Processing: 2,347 data points/sec
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

export default AdvancedAnomalyDetection;