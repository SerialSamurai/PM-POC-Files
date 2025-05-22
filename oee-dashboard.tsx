import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Zap, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  PieChart, 
  Calendar, 
  Filter,
  Download,
  RefreshCw,
  ChevronRight,
  Activity,
  XCircle,
  Gauge,
  Timer,
  Settings,
  Users,
  Wrench
} from 'lucide-react';

const OEEDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [selectedShift, setSelectedShift] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  // Simulate data refresh
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  // Sample OEE data for body weld department
  const oeeData = {
    overall: {
      oee: 84.2,
      availability: 91.5,
      performance: 95.8,
      quality: 96.1,
      target: 85.0
    },
    equipment: [
      {
        id: 'K250-BX200L-001',
        name: 'Kawasaki Robot #1',
        station: 'Body Side Weld',
        oee: 87.3,
        availability: 92.1,
        performance: 96.5,
        quality: 98.2,
        status: 'running',
        currentProgram: 'CAMRY_BODYSIDE_WELD_A',
        cyclesCompleted: 142,
        targetCycles: 160,
        lastDowntime: '2h 15m ago',
        downtimeReason: 'Scheduled Maintenance'
      },
      {
        id: 'K250-BX200L-002',
        name: 'Kawasaki Robot #2',
        station: 'Roof Panel Weld',
        oee: 82.1,
        availability: 89.2,
        performance: 94.8,
        quality: 97.1,
        status: 'running',
        currentProgram: 'CAMRY_ROOF_WELD_B',
        cyclesCompleted: 128,
        targetCycles: 145,
        lastDowntime: '45m ago',
        downtimeReason: 'Material Shortage'
      },
      {
        id: 'K250-BX200L-003',
        name: 'Kawasaki Robot #3',
        station: 'Quarter Panel Weld',
        oee: 79.5,
        availability: 87.3,
        performance: 93.2,
        quality: 97.6,
        status: 'alarm',
        currentProgram: 'RAV4_QUARTER_PANEL_A',
        cyclesCompleted: 98,
        targetCycles: 125,
        lastDowntime: '15m ago',
        downtimeReason: 'Sensor Malfunction'
      },
      {
        id: 'WELD-STN-004',
        name: 'Manual Weld Station #4',
        station: 'Door Frame Assembly',
        oee: 88.9,
        availability: 94.7,
        performance: 96.1,
        quality: 97.7,
        status: 'running',
        currentProgram: 'HIGHLANDER_DOOR_FRAME',
        cyclesCompleted: 156,
        targetCycles: 170,
        lastDowntime: '3h 22m ago',
        downtimeReason: 'Operator Break'
      }
    ],
    losses: {
      availability: [
        { category: 'Planned Downtime', value: 4.2, color: 'bg-blue-500' },
        { category: 'Unplanned Downtime', value: 2.8, color: 'bg-red-500' },
        { category: 'Setup/Changeover', value: 1.5, color: 'bg-orange-500' }
      ],
      performance: [
        { category: 'Minor Stoppages', value: 2.1, color: 'bg-yellow-500' },
        { category: 'Reduced Speed', value: 2.1, color: 'bg-purple-500' }
      ],
      quality: [
        { category: 'Defects/Rework', value: 2.8, color: 'bg-pink-500' },
        { category: 'Startup Rejects', value: 1.1, color: 'bg-indigo-500' }
      ]
    },
    shifts: {
      shift1: { name: '6:00 AM - 2:00 PM', oee: 86.2, availability: 92.1, performance: 96.3, quality: 97.5 },
      shift2: { name: '2:00 PM - 10:00 PM', oee: 83.1, availability: 90.8, performance: 95.1, quality: 96.2 },
      shift3: { name: '10:00 PM - 6:00 AM', oee: 82.9, availability: 90.2, performance: 95.7, quality: 96.1 }
    },
    trends: {
      daily: [
        { date: '05-15', oee: 82.1, availability: 89.2, performance: 94.8, quality: 97.1 },
        { date: '05-16', oee: 83.5, availability: 90.1, performance: 95.2, quality: 97.3 },
        { date: '05-17', oee: 85.2, availability: 91.8, performance: 95.9, quality: 96.8 },
        { date: '05-18', oee: 84.8, availability: 91.2, performance: 95.5, quality: 97.2 },
        { date: '05-19', oee: 86.1, availability: 92.5, performance: 96.1, quality: 97.0 },
        { date: '05-20', oee: 85.4, availability: 91.9, performance: 95.8, quality: 97.1 },
        { date: '05-21', oee: 84.2, availability: 91.5, performance: 95.8, quality: 96.1 }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'alarm': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'stopped': return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getOEEColor = (oee) => {
    if (oee >= 85) return 'text-green-400';
    if (oee >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const CircularProgress = ({ value, max = 100, size = 120, strokeWidth = 8, color = 'stroke-blue-400' }) => {
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
          <span className="text-2xl font-bold text-white">{value.toFixed(1)}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Analytics</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Performance</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">OEE Dashboard</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Overall Equipment Effectiveness
            </h1>
            <p className="text-gray-400 mt-2">Body Weld Department - Real-time Performance Monitoring</p>
          </div>
          
          <div className="flex items-center gap-3">
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <select
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Shifts</option>
              <option value="shift1">Shift 1 (6AM-2PM)</option>
              <option value="shift2">Shift 2 (2PM-10PM)</option>
              <option value="shift3">Shift 3 (10PM-6AM)</option>
            </select>
            <button
              onClick={handleRefresh}
              className={`p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Overall OEE Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Overall OEE</h3>
            <Target className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircularProgress value={oeeData.overall.oee} color="stroke-blue-400" />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Target: {oeeData.overall.target}%</p>
            <p className={`text-sm font-semibold ${oeeData.overall.oee >= oeeData.overall.target ? 'text-green-400' : 'text-red-400'}`}>
              {oeeData.overall.oee >= oeeData.overall.target ? 'Above Target' : 'Below Target'}
            </p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Availability</h3>
            <Clock className="w-6 h-6 text-green-400" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircularProgress value={oeeData.overall.availability} color="stroke-green-400" />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Uptime Performance</p>
            <p className="text-green-400 text-sm font-semibold">Good</p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Performance</h3>
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircularProgress value={oeeData.overall.performance} color="stroke-yellow-400" />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">Speed Efficiency</p>
            <p className="text-yellow-400 text-sm font-semibold">Excellent</p>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Quality</h3>
            <CheckCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex items-center justify-center mb-4">
            <CircularProgress value={oeeData.overall.quality} color="stroke-purple-400" />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">First Pass Yield</p>
            <p className="text-purple-400 text-sm font-semibold">Excellent</p>
          </div>
        </div>
      </div>

      {/* Equipment Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            Equipment Performance
          </h3>
          
          <div className="space-y-4">
            {oeeData.equipment.map((equipment) => (
              <div key={equipment.id} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{equipment.name}</h4>
                    <p className="text-gray-400 text-sm">{equipment.station}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(equipment.status)}`}>
                      {equipment.status === 'running' ? <CheckCircle className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      {equipment.status.toUpperCase()}
                    </span>
                    <span className={`text-lg font-bold ${getOEEColor(equipment.oee)}`}>
                      {equipment.oee}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-gray-400">Availability</p>
                    <p className="text-white font-semibold">{equipment.availability}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Performance</p>
                    <p className="text-white font-semibold">{equipment.performance}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Quality</p>
                    <p className="text-white font-semibold">{equipment.quality}%</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Cycles: {equipment.cyclesCompleted}/{equipment.targetCycles}</span>
                  <span>Last Downtime: {equipment.lastDowntime}</span>
                </div>
                
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(equipment.cyclesCompleted / equipment.targetCycles) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loss Analysis */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-400" />
            Loss Analysis
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Availability Losses</h4>
              <div className="space-y-2">
                {oeeData.losses.availability.map((loss, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${loss.color}`}></div>
                      <span className="text-gray-400 text-sm">{loss.category}</span>
                    </div>
                    <span className="text-white font-semibold">{loss.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Performance Losses</h4>
              <div className="space-y-2">
                {oeeData.losses.performance.map((loss, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${loss.color}`}></div>
                      <span className="text-gray-400 text-sm">{loss.category}</span>
                    </div>
                    <span className="text-white font-semibold">{loss.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Quality Losses</h4>
              <div className="space-y-2">
                {oeeData.losses.quality.map((loss, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${loss.color}`}></div>
                      <span className="text-gray-400 text-sm">{loss.category}</span>
                    </div>
                    <span className="text-white font-semibold">{loss.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shift Comparison */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-green-400" />
          Shift Performance Comparison
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(oeeData.shifts).map(([key, shift]) => (
            <div key={key} className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Shift {key.slice(-1)}</h4>
              <p className="text-gray-400 text-sm mb-4">{shift.name}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">OEE</span>
                  <span className={`font-bold ${getOEEColor(shift.oee)}`}>{shift.oee}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Availability</span>
                  <span className="text-white">{shift.availability}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Performance</span>
                  <span className="text-white">{shift.performance}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Quality</span>
                  <span className="text-white">{shift.quality}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          Action Items & Recommendations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-red-400 mb-3">Critical Issues</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">Robot #3 sensor malfunction causing 12% availability loss</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">Material shortage impacting Robot #2 performance</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-3">Improvement Opportunities</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Optimize changeover time to improve performance by 2%</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Schedule preventive maintenance during planned downtime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OEEDashboard;