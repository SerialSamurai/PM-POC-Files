import React, { useState, useEffect } from 'react';
import { 
  Network, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Lock, 
  Users, 
  Activity, 
  BarChart3, 
  Cpu, 
  Database, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Settings,
  Eye,
  ChevronRight,
  MapPin,
  Clock,
  Battery,
  Gauge,
  LineChart,
  PieChart,
  Brain,
  Server,
  Wifi,
  WifiOff,
  Key,
  FileText,
  ArrowUpDown,
  Timer
} from 'lucide-react';

const FederatedLearningDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSite, setSelectedSite] = useState(null);
  const [trainingStatus, setTrainingStatus] = useState('active');

  // Toyota North America Sites Data
  const sites = [
    {
      id: 'TNA-001',
      name: 'Georgetown, KY',
      location: 'Kentucky Manufacturing Plant',
      status: 'online',
      vehicles: ['Camry', 'Avalon', 'ES 350'],
      dataPoints: 245680,
      modelAccuracy: 94.2,
      energySavings: 8.4,
      qualityImprovement: 6.7,
      lastSync: '2025-05-21 14:23',
      weldTypes: ['High-Strength Steel', 'Aluminum'],
      privacy: {
        encryption: 'AES-256',
        differential: true,
        compliance: 98.5
      },
      performance: {
        cpuUsage: 45,
        memoryUsage: 62,
        networkLatency: 23
      }
    },
    {
      id: 'TNA-002',
      name: 'Princeton, IN',
      location: 'Indiana Manufacturing Plant',
      status: 'online',
      vehicles: ['Highlander', 'Sequoia', 'Sienna'],
      dataPoints: 189450,
      modelAccuracy: 92.8,
      energySavings: 7.2,
      qualityImprovement: 5.9,
      lastSync: '2025-05-21 14:21',
      weldTypes: ['High-Strength Steel', 'Advanced HSS'],
      privacy: {
        encryption: 'AES-256',
        differential: true,
        compliance: 97.8
      },
      performance: {
        cpuUsage: 52,
        memoryUsage: 58,
        networkLatency: 31
      }
    },
    {
      id: 'TNA-003',
      name: 'San Antonio, TX',
      location: 'Texas Manufacturing Plant',
      status: 'online',
      vehicles: ['Tundra', 'Tacoma'],
      dataPoints: 167320,
      modelAccuracy: 91.5,
      energySavings: 6.8,
      qualityImprovement: 4.3,
      lastSync: '2025-05-21 14:19',
      weldTypes: ['High-Strength Steel', 'Aluminum', 'Advanced HSS'],
      privacy: {
        encryption: 'AES-256',
        differential: true,
        compliance: 99.1
      },
      performance: {
        cpuUsage: 41,
        memoryUsage: 55,
        networkLatency: 18
      }
    },
    {
      id: 'TNA-004',
      name: 'Blue Springs, MS',
      location: 'Mississippi Manufacturing Plant',
      status: 'training',
      vehicles: ['Corolla', 'Corolla Cross'],
      dataPoints: 203890,
      modelAccuracy: 93.7,
      energySavings: 9.1,
      qualityImprovement: 7.2,
      lastSync: '2025-05-21 14:25',
      weldTypes: ['High-Strength Steel', 'Aluminum'],
      privacy: {
        encryption: 'AES-256',
        differential: true,
        compliance: 98.9
      },
      performance: {
        cpuUsage: 78,
        memoryUsage: 84,
        networkLatency: 27
      }
    },
    {
      id: 'TNA-005',
      name: 'Huntsville, AL',
      location: 'Alabama Engine Plant',
      status: 'syncing',
      vehicles: ['Various Engine Components'],
      dataPoints: 98450,
      modelAccuracy: 89.2,
      energySavings: 5.4,
      qualityImprovement: 3.8,
      lastSync: '2025-05-21 14:18',
      weldTypes: ['Aluminum', 'Cast Iron'],
      privacy: {
        encryption: 'AES-256',
        differential: true,
        compliance: 96.7
      },
      performance: {
        cpuUsage: 35,
        memoryUsage: 47,
        networkLatency: 42
      }
    }
  ];

  const globalModel = {
    version: '2.4.1',
    accuracy: 93.1,
    iteration: 1247,
    convergence: 87.3,
    participants: sites.length,
    totalDataPoints: sites.reduce((sum, site) => sum + site.dataPoints, 0),
    avgEnergySavings: 7.4,
    avgQualityImprovement: 5.6,
    trainingTime: '2h 34m',
    nextUpdate: '2025-05-21 16:00'
  };

  const weldingMetrics = {
    totalWelds: 1847692,
    defectReduction: 8.2,
    energyReduced: 156780, // kWh
    carbonSaved: 78.4, // tons CO2
    costSavings: 2340000 // USD
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'training': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'syncing': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'offline': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'training': return <Brain className="w-4 h-4" />;
      case 'syncing': return <RefreshCw className="w-4 h-4 animate-spin" />;
      case 'offline': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const CircularProgress = ({ value, max = 100, size = 80, strokeWidth = 6, color = 'stroke-blue-400' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / max) * circumference;

    return (
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-700"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={color}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{value.toFixed(1)}%</span>
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Global Model Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Global Model</h3>
            <Brain className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircularProgress value={globalModel.accuracy} color="stroke-blue-400" />
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-400">Version {globalModel.version}</p>
            <p className="text-blue-400 font-semibold">Iteration {globalModel.iteration}</p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Participating Sites</h3>
            <Network className="w-6 h-6 text-green-400" />
          </div>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-green-400">{globalModel.participants}</p>
            <p className="text-gray-400 text-sm">Active Contributors</p>
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-400">Total Data Points</p>
            <p className="text-white font-semibold">{globalModel.totalDataPoints.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Energy Impact</h3>
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-yellow-400">{globalModel.avgEnergySavings}%</p>
            <p className="text-gray-400 text-sm">Avg Savings</p>
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-400">CO₂ Reduced</p>
            <p className="text-green-400 font-semibold">{weldingMetrics.carbonSaved} tons</p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Quality Impact</h3>
            <Target className="w-6 h-6 text-purple-400" />
          </div>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-purple-400">{globalModel.avgQualityImprovement}%</p>
            <p className="text-gray-400 text-sm">Avg Improvement</p>
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-400">Defect Reduction</p>
            <p className="text-purple-400 font-semibold">{weldingMetrics.defectReduction}%</p>
          </div>
        </div>
      </div>

      {/* Site Status Map */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          Toyota North America Sites
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {sites.map((site) => (
            <div key={site.id} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <h4 className="font-semibold text-white">{site.name}</h4>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(site.status)}`}>
                  {getStatusIcon(site.status)}
                  {site.status.toUpperCase()}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm mb-3">{site.location}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-400">Model Accuracy</p>
                  <p className="text-white font-semibold">{site.modelAccuracy}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Data Points</p>
                  <p className="text-white">{site.dataPoints.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400">Energy Savings</p>
                  <p className="text-green-400 font-semibold">{site.energySavings}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Quality Improvement</p>
                  <p className="text-purple-400 font-semibold">{site.qualityImprovement}%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Last Sync: {site.lastSync}</span>
                <span>Vehicles: {site.vehicles.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacy = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Privacy & Security Status
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CircularProgress value={98.4} color="stroke-green-400" size={100} />
            </div>
            <h4 className="font-semibold text-white mb-1">Overall Compliance</h4>
            <p className="text-gray-400 text-sm">Security Standards Met</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CircularProgress value={100} color="stroke-blue-400" size={100} />
            </div>
            <h4 className="font-semibold text-white mb-1">Data Encryption</h4>
            <p className="text-gray-400 text-sm">AES-256 Protection</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <CircularProgress value={95.7} color="stroke-purple-400" size={100} />
            </div>
            <h4 className="font-semibold text-white mb-1">Differential Privacy</h4>
            <p className="text-gray-400 text-sm">Noise Calibration Active</p>
          </div>
        </div>

        <div className="space-y-4">
          {sites.map((site) => (
            <div key={site.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-white">{site.name}</h4>
                  <p className="text-gray-400 text-sm">{site.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-semibold">{site.privacy.compliance}% Compliant</span>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Encryption</p>
                  <p className="text-white font-mono">{site.privacy.encryption}</p>
                </div>
                <div>
                  <p className="text-gray-400">Differential Privacy</p>
                  <p className="text-green-400">{site.privacy.differential ? 'Enabled' : 'Disabled'}</p>
                </div>
                <div>
                  <p className="text-gray-400">Network Latency</p>
                  <p className="text-white">{site.performance.networkLatency}ms</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            Training Performance
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Model Convergence</span>
              <span className="text-blue-400 font-semibold">{globalModel.convergence}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${globalModel.convergence}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Training Iterations</span>
              <span className="text-white font-semibold">{globalModel.iteration}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Current Accuracy</span>
              <span className="text-green-400 font-semibold">{globalModel.accuracy}%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Training Time</span>
              <span className="text-white">{globalModel.trainingTime}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            Welding Optimization Results
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Total Welds Processed</span>
                <span className="text-white font-semibold">{weldingMetrics.totalWelds.toLocaleString()}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Energy Saved</span>
                <span className="text-yellow-400 font-semibold">{weldingMetrics.energyReduced.toLocaleString()} kWh</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Cost Savings</span>
                <span className="text-green-400 font-semibold">${weldingMetrics.costSavings.toLocaleString()}</span>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Carbon Footprint Reduction</span>
                <span className="text-green-400 font-semibold">{weldingMetrics.carbonSaved} tons CO₂</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Site Performance Details */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Server className="w-5 h-5 text-orange-400" />
          Site Resource Utilization
        </h3>
        
        <div className="space-y-4">
          {sites.map((site) => (
            <div key={site.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-white">{site.name}</h4>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(site.status)}`}>
                  {getStatusIcon(site.status)}
                  {site.status.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">CPU Usage</span>
                    <span className="text-white text-sm">{site.performance.cpuUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        site.performance.cpuUsage > 70 ? 'bg-red-500' : 
                        site.performance.cpuUsage > 50 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${site.performance.cpuUsage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Memory Usage</span>
                    <span className="text-white text-sm">{site.performance.memoryUsage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        site.performance.memoryUsage > 70 ? 'bg-red-500' : 
                        site.performance.memoryUsage > 50 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${site.performance.memoryUsage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Network Latency</span>
                    <span className="text-white text-sm">{site.performance.networkLatency}ms</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        site.performance.networkLatency > 40 ? 'bg-red-500' : 
                        site.performance.networkLatency > 25 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(site.performance.networkLatency * 2, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Global Overview', icon: Globe },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
    { id: 'performance', name: 'Performance', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Analytics</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Advanced AI</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Federated Learning</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Toyota Federated Learning Platform
            </h1>
            <p className="text-gray-400 mt-2">Secure collaborative AI for resistance welding optimization across North America</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Training Active</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* Training Status Banner */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-blue-400" />
            <div>
              <h3 className="font-semibold text-white">Global Model Training - Iteration {globalModel.iteration}</h3>
              <p className="text-gray-400 text-sm">Next update scheduled for {globalModel.nextUpdate}</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="text-blue-400 font-bold text-lg">{globalModel.accuracy}%</p>
              <p className="text-gray-400 text-xs">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold text-lg">{globalModel.participants}</p>
              <p className="text-gray-400 text-xs">Sites</p>
            </div>
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-lg">{globalModel.trainingTime}</p>
              <p className="text-gray-400 text-xs">Runtime</p>
            </div>
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
        {activeTab === 'privacy' && renderPrivacy()}
        {activeTab === 'performance' && renderPerformance()}
      </div>
    </div>
  );
};

export default FederatedLearningDashboard;