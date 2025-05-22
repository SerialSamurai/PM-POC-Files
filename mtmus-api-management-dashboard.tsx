import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Shield, 
  Clock, 
  Server, 
  Globe, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  TrendingDown,
  Zap, 
  Database, 
  Cloud, 
  Settings, 
  Eye, 
  RefreshCw,
  Network,
  Layers,
  Users,
  Key,
  AlertCircle,
  BarChart3,
  Timer,
  Cpu,
  HardDrive,
  Wifi,
  Container,
  Code,
  MessageSquare,
  Radio
} from 'lucide-react';

const APIManagementDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedService, setSelectedService] = useState('ml-inference');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  // Simulated API data for MTMUS system
  const apiOverview = {
    totalAPIs: 24,
    activeServices: 18,
    totalRequests: 2847234,
    requestsPerSecond: 145.7,
    avgResponseTime: 23.4,
    errorRate: 0.12,
    uptime: 99.94,
    securityAlerts: 2
  };

  const services = [
    {
      id: 'ml-inference',
      name: 'ML Inference API',
      type: 'REST',
      status: 'healthy',
      version: 'v2.1.0',
      instances: 4,
      cpu: 34.2,
      memory: 67.8,
      requests: 1247,
      responseTime: 45.2,
      errorRate: 0.05,
      uptime: 99.98,
      endpoint: '/api/v2/ml/predict',
      port: 8080,
      container: 'mtmus-ml-inference',
      lastDeploy: '2025-05-20 09:15'
    },
    {
      id: 'data-pipeline',
      name: 'Data Pipeline API',
      type: 'gRPC',
      status: 'healthy',
      version: 'v1.8.2',
      instances: 3,
      cpu: 28.7,
      memory: 45.3,
      requests: 892,
      responseTime: 12.8,
      errorRate: 0.02,
      uptime: 99.99,
      endpoint: 'grpc://data-pipeline:9090',
      port: 9090,
      container: 'mtmus-data-pipeline',
      lastDeploy: '2025-05-19 14:30'
    },
    {
      id: 'monitoring',
      name: 'Monitoring API',
      type: 'WebSocket',
      status: 'healthy',
      version: 'v1.4.1',
      instances: 2,
      cpu: 15.4,
      memory: 32.1,
      requests: 456,
      responseTime: 8.1,
      errorRate: 0.01,
      uptime: 99.97,
      endpoint: 'ws://monitoring:8081/ws',
      port: 8081,
      container: 'mtmus-monitoring',
      lastDeploy: '2025-05-21 08:45'
    },
    {
      id: 'mqtt-broker',
      name: 'MQTT Broker API',
      type: 'MQTT',
      status: 'warning',
      version: 'v3.1.1',
      instances: 2,
      cpu: 42.1,
      memory: 78.9,
      requests: 2341,
      responseTime: 3.2,
      errorRate: 0.23,
      uptime: 99.85,
      endpoint: 'mqtt://broker:1883',
      port: 1883,
      container: 'mtmus-mqtt-broker',
      lastDeploy: '2025-05-18 16:20'
    },
    {
      id: 'auth-service',
      name: 'Authentication API',
      type: 'REST',
      status: 'healthy',
      version: 'v2.0.3',
      instances: 3,
      cpu: 12.8,
      memory: 28.4,
      requests: 234,
      responseTime: 15.7,
      errorRate: 0.0,
      uptime: 100.0,
      endpoint: '/api/v2/auth',
      port: 8082,
      container: 'mtmus-auth',
      lastDeploy: '2025-05-21 10:00'
    },
    {
      id: 'container-registry',
      name: 'Container Registry API',
      type: 'REST',
      status: 'degraded',
      version: 'v1.2.0',
      instances: 1,
      cpu: 67.3,
      memory: 89.2,
      requests: 45,
      responseTime: 156.4,
      errorRate: 1.24,
      uptime: 98.12,
      endpoint: '/registry/v2',
      port: 5000,
      container: 'mtmus-registry',
      lastDeploy: '2025-05-17 11:30'
    }
  ];

  const networkMetrics = {
    etherCAT: {
      status: 'operational',
      slaves: 47,
      cycleTime: '4ms',
      lostFrames: 0,
      bandwidth: 23.4
    },
    etherNetIP: {
      status: 'operational',
      connections: 18,
      bandwidth: 67.8,
      errors: 2,
      latency: 1.2
    },
    internalNetwork: {
      status: 'operational',
      throughput: '2.1 Gbps',
      latency: '0.8ms',
      packetLoss: 0.001
    }
  };

  const securityStatus = {
    apiKeys: {
      total: 156,
      active: 142,
      expired: 14,
      revokedToday: 3
    },
    rateLimiting: {
      status: 'active',
      blockedRequests: 23,
      throttledRequests: 89
    },
    vulnerabilities: {
      critical: 0,
      high: 1,
      medium: 3,
      low: 7
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'warning': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'degraded': return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getServiceIcon = (type) => {
    switch (type) {
      case 'REST': return <Globe className="w-4 h-4" />;
      case 'gRPC': return <Code className="w-4 h-4" />;
      case 'WebSocket': return <MessageSquare className="w-4 h-4" />;
      case 'MQTT': return <Radio className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            MTMUS API Management
          </h1>
          <p className="text-gray-400 mt-2">Custom airgapped API infrastructure monitoring</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right text-sm">
            <p className="text-gray-400">System Time</p>
            <p className="text-white font-mono">{currentTime.toLocaleTimeString()}</p>
          </div>
          <button 
            onClick={handleRefresh}
            className={`p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total APIs</p>
              <p className="text-2xl font-bold text-white">{apiOverview.totalAPIs}</p>
            </div>
            <Server className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Requests/sec</p>
              <p className="text-2xl font-bold text-green-400">{apiOverview.requestsPerSecond}</p>
            </div>
            <Activity className="w-8 h-8 text-green-400" />
          </div>
        </div>
        
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Response</p>
              <p className="text-2xl font-bold text-yellow-400">{apiOverview.avgResponseTime}ms</p>
            </div>
            <Timer className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Error Rate</p>
              <p className="text-2xl font-bold text-red-400">{apiOverview.errorRate}%</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Services List */}
        <div className="space-y-6">
          
          {/* Services Overview */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              API Services ({services.length})
            </h2>
            
            <div className="space-y-3">
              {services.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedService === service.id 
                      ? 'border-blue-500/50 bg-blue-900/20' 
                      : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getServiceIcon(service.type)}
                      <span className="font-semibold text-white">{service.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                    <div>
                      <p>Version</p>
                      <p className="text-white">{service.version}</p>
                    </div>
                    <div>
                      <p>Instances</p>
                      <p className="text-white">{service.instances}</p>
                    </div>
                    <div>
                      <p>Response</p>
                      <p className="text-white">{service.responseTime}ms</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Status */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Network className="w-5 h-5 text-green-400" />
              Network Status
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">EtherCAT Network</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">{networkMetrics.etherCAT.slaves} slaves</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">EtherNet/IP</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">{networkMetrics.etherNetIP.connections} connections</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Internal Network</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">{networkMetrics.internalNetwork.throughput}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Service Details */}
        <div className="space-y-6">
          
          {/* Selected Service Details */}
          {selectedServiceData && (
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {getServiceIcon(selectedServiceData.type)}
                {selectedServiceData.name}
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Status</p>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-sm ${getStatusColor(selectedServiceData.status)}`}>
                      {selectedServiceData.status === 'healthy' && <CheckCircle className="w-3 h-3" />}
                      {selectedServiceData.status === 'warning' && <AlertTriangle className="w-3 h-3" />}
                      {selectedServiceData.status === 'degraded' && <AlertCircle className="w-3 h-3" />}
                      {selectedServiceData.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Version</p>
                    <p className="text-white font-mono">{selectedServiceData.version}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Endpoint</p>
                    <p className="text-blue-400 font-mono text-sm">{selectedServiceData.endpoint}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Port</p>
                    <p className="text-white font-mono">{selectedServiceData.port}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Instances</p>
                    <p className="text-white font-semibold">{selectedServiceData.instances}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Requests</p>
                    <p className="text-white font-semibold">{selectedServiceData.requests}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Uptime</p>
                    <p className="text-green-400 font-semibold">{selectedServiceData.uptime}%</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resource Usage */}
          {selectedServiceData && (
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                Resource Usage
              </h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">CPU Usage</span>
                    <span className="text-white font-semibold">{selectedServiceData.cpu}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        selectedServiceData.cpu > 80 ? 'bg-red-500' : 
                        selectedServiceData.cpu > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${selectedServiceData.cpu}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Memory Usage</span>
                    <span className="text-white font-semibold">{selectedServiceData.memory}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        selectedServiceData.memory > 80 ? 'bg-red-500' : 
                        selectedServiceData.memory > 60 ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${selectedServiceData.memory}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-700/50">
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-semibold">{selectedServiceData.responseTime}ms</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Error Rate</p>
                    <p className={`font-semibold ${selectedServiceData.errorRate > 1 ? 'text-red-400' : selectedServiceData.errorRate > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {selectedServiceData.errorRate}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Container Info */}
          {selectedServiceData && (
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Container className="w-5 h-5 text-blue-400" />
                Container Details
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Container:</span>
                  <span className="text-white font-mono text-sm">{selectedServiceData.container}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Deploy:</span>
                  <span className="text-white">{selectedServiceData.lastDeploy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Protocol:</span>
                  <span className="text-blue-400">{selectedServiceData.type}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="grid grid-cols-2 gap-3">
                  <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                    View Logs
                  </button>
                  <button className="px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded text-sm transition-colors">
                    Restart Service
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Security & Monitoring */}
        <div className="space-y-6">
          
          {/* Security Status */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Security Status
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Active API Keys</span>
                <span className="text-green-400 font-semibold">{securityStatus.apiKeys.active}/{securityStatus.apiKeys.total}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Rate Limiting</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Blocked Today</span>
                <span className="text-yellow-400 font-semibold">{securityStatus.rateLimiting.blockedRequests}</span>
              </div>
              
              <div className="border-t border-gray-700/50 pt-3">
                <p className="text-gray-400 text-sm mb-2">Vulnerabilities</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <p className="text-red-400 font-bold">{securityStatus.vulnerabilities.critical}</p>
                    <p className="text-gray-500 text-xs">Critical</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-400 font-bold">{securityStatus.vulnerabilities.high}</p>
                    <p className="text-gray-500 text-xs">High</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Health */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              System Health
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">API Gateway</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Healthy</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Load Balancer</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Service Mesh</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Operational</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Container Registry</span>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm">Degraded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Recent Alerts
            </h2>
            
            <div className="space-y-3">
              <div className="p-2 bg-yellow-900/20 border border-yellow-500/30 rounded text-sm">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-yellow-400 font-semibold">WARNING</span>
                  <span className="text-gray-400 text-xs">2m ago</span>
                </div>
                <p className="text-white">MQTT Broker high CPU usage (89%)</p>
              </div>
              
              <div className="p-2 bg-red-900/20 border border-red-500/30 rounded text-sm">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-red-400 font-semibold">ERROR</span>
                  <span className="text-gray-400 text-xs">15m ago</span>
                </div>
                <p className="text-white">Container Registry response timeout</p>
              </div>
              
              <div className="p-2 bg-blue-900/20 border border-blue-500/30 rounded text-sm">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-blue-400 font-semibold">INFO</span>
                  <span className="text-gray-400 text-xs">1h ago</span>
                </div>
                <p className="text-white">ML Inference API scaled to 4 instances</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm">
                <Eye className="w-4 h-4" />
                View API Logs
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm">
                <Key className="w-4 h-4" />
                Manage API Keys
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm">
                <BarChart3 className="w-4 h-4" />
                Analytics Dashboard
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                <Settings className="w-4 h-4" />
                System Config
              </button>
            </div>
          </div>
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
              System Uptime: {apiOverview.uptime}%
            </span>
            <span className="text-gray-400">
              Total Requests: {apiOverview.totalRequests.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIManagementDashboard;