import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  Wrench, 
  Eye, 
  Phone, 
  Camera, 
  Mic, 
  CheckCircle, 
  XCircle, 
  Thermometer, 
  Zap, 
  MapPin, 
  Users, 
  FileText, 
  Package, 
  Play, 
  AlertCircle,
  TrendingUp,
  Settings,
  ChevronRight,
  Battery,
  Wifi,
  MessageCircle
} from 'lucide-react';

const MaintenanceFaultDashboard = () => {
  const [workingOnIt, setWorkingOnIt] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [escalationTimer, setEscalationTimer] = useState(892); // seconds until escalation

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      if (!workingOnIt) {
        setEscalationTimer(prev => Math.max(0, prev - 1));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [workingOnIt]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const faultData = {
    robot: {
      id: 'MTMUS-BW-RB03-BX200L',
      name: 'Kawasaki BX200L Station 3',
      location: 'Body Shop Line A - Cell 3'
    },
    fault: {
      code: 'E0421',
      description: 'Joint 2 Servo Overload',
      time: '14:23:45',
      severity: 'high',
      category: 'mechanical'
    },
    context: {
      robotState: 'Moving to Weld Point 7 of 12',
      program: 'BODY_A_SIDE_PANEL_v2.3',
      cycleStep: 'Approach Position',
      lastGoodCycle: '14:23:22',
      partVin: 'KMHD84TA8KA123456',
      operatorAction: 'None - Auto sequence'
    },
    safety: {
      powerStatus: 'Motors OFF - Safe',
      lockoutStatus: 'Auto-applied',
      teachMode: 'Ready to enable',
      cellAccess: 'SAFE - Enter OK',
      emergencyStops: 'All normal',
      lightCurtains: 'Clear'
    },
    diagnostics: {
      jointTemps: [42, 78, 41, 38, 45, 39], // J2 overheated
      motorCurrents: [2.1, 5.8, 1.9, 1.2, 2.3, 1.1], // J2 high current
      likelyCause: 'J2 cooling system failure',
      confidence: 87
    },
    impact: {
      lineStatus: 'STOPPED',
      carsAffected: 23,
      estimatedDowntime: '45 minutes',
      workAroundAvailable: true,
      productionLoss: '$12,400/hour'
    },
    repair: {
      toolsNeeded: ['Teach pendant', 'Multimeter', 'Cooling system tools'],
      partsLikely: ['Cooling fan K-FAN-2040', 'Thermal sensor'],
      timeEstimate: '30-45 minutes',
      manualSection: 'Ch 7.2.3 - Cooling System',
      lastSimilar: 'RB02 - Same issue 2 weeks ago'
    },
    history: {
      thisWeek: 3,
      lastMonth: 12,
      trend: 'increasing',
      lastRepair: '2025-05-15 - Cleaned vents'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-lg p-4 mb-6 border border-red-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-300 animate-pulse" />
            <div>
              <h1 className="text-xl font-bold text-white">ROBOT FAULT - IMMEDIATE ACTION REQUIRED</h1>
              <p className="text-red-200">{faultData.robot.name} • {faultData.robot.location}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-red-200 text-sm">Escalation in:</p>
            <p className="text-2xl font-bold text-white">{formatTime(escalationTimer)}</p>
          </div>
        </div>
      </div>

      {/* Big Action Button */}
      <div className="mb-6">
        <button
          onClick={() => setWorkingOnIt(!workingOnIt)}
          className={`w-full p-6 rounded-lg text-xl font-bold transition-all ${
            workingOnIt 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
          }`}
        >
          {workingOnIt ? '✓ WORKING ON IT - Escalation Paused' : '🚨 ACKNOWLEDGE - I\'M RESPONDING'}
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Fault Details & Safety */}
        <div className="space-y-6">
          
          {/* Fault Summary */}
          <div className="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              Fault Details
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Code:</span>
                <span className="text-red-400 font-bold">{faultData.fault.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Error:</span>
                <span className="text-white font-semibold">{faultData.fault.description}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time:</span>
                <span className="text-white">{faultData.fault.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Robot State:</span>
                <span className="text-white">{faultData.context.robotState}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Program:</span>
                <span className="text-white font-mono text-sm">{faultData.context.program}</span>
              </div>
            </div>
          </div>

          {/* Safety Status - Critical First */}
          <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-400">
              <Shield className="w-5 h-5" />
              Safety Status - SAFE TO APPROACH
            </h2>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Power Status:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{faultData.safety.powerStatus}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Lockout:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">{faultData.safety.lockoutStatus}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Cell Access:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-bold">{faultData.safety.cellAccess}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Teach Mode:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">{faultData.safety.teachMode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Production Impact */}
          <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-400">
              <TrendingUp className="w-5 h-5" />
              Production Impact
            </h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Line Status:</span>
                <span className="text-red-400 font-bold">{faultData.impact.lineStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cars Affected:</span>
                <span className="text-white font-semibold">{faultData.impact.carsAffected}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Est. Downtime:</span>
                <span className="text-yellow-400 font-semibold">{faultData.impact.estimatedDowntime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cost/Hour:</span>
                <span className="text-red-400 font-bold">{faultData.impact.productionLoss}</span>
              </div>
            </div>
            
            {faultData.impact.workAroundAvailable && (
              <div className="mt-3 p-2 bg-blue-900/30 border border-blue-500/30 rounded">
                <p className="text-blue-400 text-sm">✓ Manual weld station available as backup</p>
              </div>
            )}
          </div>
        </div>

        {/* Middle Column - Diagnostics & Troubleshooting */}
        <div className="space-y-6">
          
          {/* AI-Powered Diagnosis */}
          <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-purple-400">
              <Eye className="w-5 h-5" />
              AI Diagnosis ({faultData.diagnostics.confidence}% confidence)
            </h2>
            
            <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3 mb-3">
              <p className="text-white font-semibold">{faultData.diagnostics.likelyCause}</p>
              <p className="text-purple-300 text-sm mt-1">Check cooling fan operation and thermal sensors</p>
            </div>
            
            <div className="text-sm space-y-2">
              <p className="text-gray-400">Historical Pattern:</p>
              <p className="text-white">• Last 3 faults: same joint, cooling related</p>
              <p className="text-white">• {faultData.repair.lastSimilar}</p>
              <p className="text-yellow-400">• Trend: {faultData.history.trend} frequency</p>
            </div>
          </div>

          {/* Live Diagnostics */}
          <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-400">
              <Thermometer className="w-5 h-5" />
              Live Joint Diagnostics
            </h2>
            
            <div className="space-y-3">
              {faultData.diagnostics.jointTemps.map((temp, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-400">Joint {index + 1}:</span>
                  <div className="flex items-center gap-3">
                    <span className={`font-mono ${temp > 70 ? 'text-red-400 font-bold' : temp > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {temp}°C
                    </span>
                    <span className={`text-xs font-mono ${faultData.diagnostics.motorCurrents[index] > 5 ? 'text-red-400' : 'text-gray-400'}`}>
                      {faultData.diagnostics.motorCurrents[index]}A
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-2 bg-red-900/30 border border-red-500/30 rounded">
              <p className="text-red-400 text-sm font-semibold">⚠ Joint 2: Overtemp + High Current</p>
            </div>
          </div>

          {/* Repair Preparation */}
          <div className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-400">
              <Wrench className="w-5 h-5" />
              What You Need
            </h2>
            
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm mb-1">Tools Required:</p>
                <div className="flex flex-wrap gap-2">
                  {faultData.repair.toolsNeeded.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Likely Parts:</p>
                <div className="flex flex-wrap gap-2">
                  {faultData.repair.partsLikely.map((part, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {part}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Time Estimate:</span>
                <span className="text-white font-semibold">{faultData.repair.timeEstimate}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-400">Manual Section:</span>
                <span className="text-blue-400">{faultData.repair.manualSection}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Actions & Communication */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-white">Quick Actions</h2>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Photo Log</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                <Mic className="w-4 h-4" />
                <span className="text-sm">Voice Note</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call Support</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors">
                <Package className="w-4 h-4" />
                <span className="text-sm">Order Parts</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Manual</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm">PLC Diag</span>
              </button>
            </div>
          </div>

          {/* Communications */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-white">
              <Users className="w-5 h-5" />
              Team Communications
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Production Supervisor:</span>
                <span className="text-green-400">Notified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Quality Team:</span>
                <span className="text-green-400">Notified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Engineering:</span>
                <span className="text-yellow-400">Standby</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Manager Escalation:</span>
                <span className="text-white">{formatTime(escalationTimer)}</span>
              </div>
            </div>
            
            <button className="w-full mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm">
              <MessageCircle className="w-4 h-4 inline mr-2" />
              Send Update
            </button>
          </div>

          {/* System Integration */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-white">System Status</h2>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Main PLC (NX102):</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">RUN</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Safety PLC (NX-SL3500):</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">SAFE</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">HMI Connection:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">EtherCAT Network:</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">OP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Completion Checklist */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3 text-white">Before Restart</h2>
            
            <div className="space-y-2">
              {[
                'Cooling system functional',
                'Joint temperatures normal',
                'Run 3 test cycles',
                'Verify weld quality',
                'Update maintenance log',
                'Clear all alarms'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors font-semibold">
              <Play className="w-4 h-4 inline mr-2" />
              RESTART ROBOT
            </button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Fault Time: {faultData.fault.time}
            </span>
            <span className="text-gray-400">
              Response Time: {((Date.now() - new Date().setHours(14, 23, 45)) / 1000 / 60).toFixed(1)}m
            </span>
            {workingOnIt && (
              <span className="text-green-400 font-semibold">
                ✓ Acknowledged - Working
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">87%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceFaultDashboard;