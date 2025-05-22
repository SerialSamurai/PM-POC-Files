import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  AlertTriangle, 
  Battery, 
  Cpu, 
  Gauge, 
  MapPin, 
  Play, 
  Pause, 
  Square, 
  Settings, 
  Shield, 
  Thermometer, 
  Zap, 
  Clock,
  TrendingUp,
  Wrench,
  Eye,
  RotateCcw,
  ChevronRight,
  CheckCircle,
  XCircle
} from 'lucide-react';

const KawasakiRobotDetails = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated real-time robot data
  const robotData = {
    id: 'K250-BX200L-001',
    name: 'Kawasaki K250 BX200L',
    location: 'Production Line A - Cell 3',
    status: 'running',
    program: 'WELD_CYCLE_A2',
    cycleTime: 45.2,
    targetCycleTime: 42.0,
    efficiency: 92.8,
    uptime: 98.2,
    position: {
      x: 245.8,
      y: -127.3,
      z: 420.1,
      rx: 12.5,
      ry: -8.3,
      rz: 180.0
    },
    joints: [
      { name: 'J1', angle: 45.2, load: 23.4, temp: 42.1 },
      { name: 'J2', angle: -67.8, load: 31.2, temp: 39.8 },
      { name: 'J3', angle: 90.1, load: 18.7, temp: 41.3 },
      { name: 'J4', angle: 12.5, load: 8.9, temp: 38.2 },
      { name: 'J5', angle: -45.3, load: 12.1, temp: 40.5 },
      { name: 'J6', angle: 0.0, load: 5.2, temp: 37.9 }
    ],
    performance: {
      totalCycles: 15847,
      todayCycles: 234,
      averageSpeed: 85.3,
      powerConsumption: 3.2,
      lastMaintenance: '2025-05-15',
      nextMaintenance: '2025-06-15'
    },
    alarms: [
      { id: 1, level: 'warning', message: 'Joint J2 temperature approaching limit', time: '14:23' },
      { id: 2, level: 'info', message: 'Calibration reminder due in 3 days', time: '12:45' }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'stopped': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'paused': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getJointHealthColor = (temp, load) => {
    if (temp > 45 || load > 80) return 'text-red-400';
    if (temp > 40 || load > 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Operations</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Equipment</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">K250 BX200L</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {robotData.name}
            </h1>
            <p className="text-gray-400 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {robotData.location}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border ${getStatusColor(robotData.status)}`}>
              <Activity className="w-4 h-4" />
              {robotData.status.toUpperCase()}
            </span>
            <div className="flex gap-2">
              <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                <Play className="w-4 h-4" />
              </button>
              <button className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors">
                <Pause className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
                <Square className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Status and Position */}
        <div className="space-y-6">
          
          {/* Current Status */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Current Status
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Active Program:</span>
                <span className="text-white font-mono">{robotData.program}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Cycle Time:</span>
                <span className="text-white">{robotData.cycleTime}s (Target: {robotData.targetCycleTime}s)</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Efficiency:</span>
                <span className="text-green-400 font-semibold">{robotData.efficiency}%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Uptime Today:</span>
                <span className="text-green-400">{robotData.uptime}%</span>
              </div>
            </div>
          </div>

          {/* Position Data */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              Current Position
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">X-Axis</p>
                <p className="text-white font-mono text-lg">{robotData.position.x}mm</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Y-Axis</p>
                <p className="text-white font-mono text-lg">{robotData.position.y}mm</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Z-Axis</p>
                <p className="text-white font-mono text-lg">{robotData.position.z}mm</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Rotation</p>
                <p className="text-white font-mono text-lg">{robotData.position.rz}°</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Performance
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Cycles:</span>
                <span className="text-white font-semibold">{robotData.performance.totalCycles.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Today's Cycles:</span>
                <span className="text-white font-semibold">{robotData.performance.todayCycles}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Avg Speed:</span>
                <span className="text-white">{robotData.performance.averageSpeed}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Power:</span>
                <span className="text-white">{robotData.performance.powerConsumption} kW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Joint Status */}
        <div className="space-y-6">
          
          {/* Joint Health */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              Joint Status
            </h2>
            
            <div className="space-y-4">
              {robotData.joints.map((joint, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{joint.name}</span>
                    <span className={`text-sm ${getJointHealthColor(joint.temp, joint.load)}`}>
                      {joint.temp > 45 || joint.load > 80 ? 'Warning' : 
                       joint.temp > 40 || joint.load > 60 ? 'Caution' : 'Good'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Angle</p>
                      <p className="text-white font-mono">{joint.angle}°</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Load</p>
                      <p className="text-white font-mono">{joint.load}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Temp</p>
                      <p className="text-white font-mono">{joint.temp}°C</p>
                    </div>
                  </div>
                  
                  {/* Load Progress Bar */}
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          joint.load > 80 ? 'bg-red-500' : 
                          joint.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${joint.load}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Alarms and Maintenance */}
        <div className="space-y-6">
          
          {/* Safety Status */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              Safety Systems
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Emergency Stop</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Light Curtains</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Clear</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Door Interlocks</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Secured</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Collision Detection</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Alarms */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              Active Alarms ({robotData.alarms.length})
            </h2>
            
            <div className="space-y-3">
              {robotData.alarms.map((alarm) => (
                <div key={alarm.id} className={`p-3 rounded-lg border ${
                  alarm.level === 'warning' ? 'bg-yellow-900/20 border-yellow-500/30 text-yellow-400' :
                  alarm.level === 'error' ? 'bg-red-900/20 border-red-500/30 text-red-400' :
                  'bg-blue-900/20 border-blue-500/30 text-blue-400'
                }`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-semibold uppercase">{alarm.level}</span>
                    <span className="text-xs opacity-70">{alarm.time}</span>
                  </div>
                  <p className="text-sm">{alarm.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Info */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-400" />
              Maintenance
            </h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Last Service</p>
                <p className="text-white">{robotData.performance.lastMaintenance}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Next Scheduled</p>
                <p className="text-yellow-400">{robotData.performance.nextMaintenance}</p>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm">
                Schedule Maintenance
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
                <Eye className="w-4 h-4" />
                View 3D
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
                <RotateCcw className="w-4 h-4" />
                Home Position
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
                <Settings className="w-4 h-4" />
                Calibrate
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm">
                <Clock className="w-4 h-4" />
                History
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Runtime: {Math.floor(Math.random() * 12 + 1)}h {Math.floor(Math.random() * 60)}m
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KawasakiRobotDetails;