import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Factory, 
  BarChart3, 
  Wrench, 
  Activity, 
  Cpu, 
  Shield, 
  Users, 
  Database, 
  Network, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Gauge, 
  Zap, 
  Target, 
  Brain, 
  ChevronRight,
  Play,
  Pause,
  Square,
  Bell,
  Calendar,
  FileText,
  Eye,
  Download,
  Upload,
  RefreshCw,
  Globe,
  MapPin,
  Radio,
  Thermometer,
  Battery,
  Wifi,
  Server,
  HardDrive,
  MonitorSpeaker,
  Layers,
  LineChart,
  PieChart,
  BarChart,
  Lightbulb,
  Cog,
  Lock,
  Key,
  Mail,
  Phone,
  Star,
  Award,
  Timer,
  DollarSign,
  Package,
  Truck,
  Building,
  Home
} from 'lucide-react';

const GlassmorphismDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeCards, setActiveCards] = useState(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate real-time data updates
  const kpiData = {
    production: {
      efficiency: 94.2,
      uptime: 98.7,
      quality: 96.8,
      throughput: 1247
    },
    maintenance: {
      preventive: 87,
      predictive: 23,
      workOrders: 12,
      compliance: 99.1
    },
    analytics: {
      anomalies: 5,
      predictions: 18,
      reports: 156,
      accuracy: 94.7
    },
    system: {
      plants: 8,
      integrations: 24,
      databases: 12,
      users: 156
    }
  };

  const handleCardClick = (cardId) => {
    setActiveCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    MTMUS Manufacturing Intelligence
                  </h1>
                  <p className="text-white/70 mt-1">Advanced Analytics & Process Control Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="text-right">
                  <p className="text-sm font-medium">{currentTime.toLocaleDateString()}</p>
                  <p className="text-lg font-bold">{currentTime.toLocaleTimeString()}</p>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* KPI Overview */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <Activity className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-green-400 font-bold text-sm">+2.3%</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Production Efficiency</h3>
                <p className="text-3xl font-bold text-white">{kpiData.production.efficiency}%</p>
                <p className="text-white/60 text-sm mt-1">Above target</p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-blue-400 font-bold text-sm">+0.8%</span>
                </div>
                <h3 className="text-white font-semibold mb-2">System Uptime</h3>
                <p className="text-3xl font-bold text-white">{kpiData.production.uptime}%</p>
                <p className="text-white/60 text-sm mt-1">Excellent</p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-purple-400 font-bold text-sm">+1.2%</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Quality Score</h3>
                <p className="text-3xl font-bold text-white">{kpiData.production.quality}%</p>
                <p className="text-white/60 text-sm mt-1">Outstanding</p>
              </div>

              <div className="backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-orange-400 font-bold text-sm">Live</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Throughput</h3>
                <p className="text-3xl font-bold text-white">{kpiData.production.throughput}</p>
                <p className="text-white/60 text-sm mt-1">units/hour</p>
              </div>
            </div>
          </section>

          {/* Main Feature Sections */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* OPERATIONS Section */}
            <div 
              className={`backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 cursor-pointer ${
                activeCards.has('operations') ? 'scale-105 shadow-3xl ring-2 ring-blue-400/50' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick('operations')}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">OPERATIONS</h2>
                  <p className="text-white/70">Live operational control & monitoring</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium text-sm">Equipment</span>
                  </div>
                  <p className="text-2xl font-bold text-white">24</p>
                  <p className="text-green-400 text-xs">All Active</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium text-sm">Processes</span>
                  </div>
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-green-400 text-xs">Optimized</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Radio className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium text-sm">Robots</span>
                  </div>
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-green-400 text-xs">Online</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Equipment Monitoring</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Process Control</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Robot Systems</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>

            {/* MAINTENANCE Section */}
            <div 
              className={`backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 cursor-pointer ${
                activeCards.has('maintenance') ? 'scale-105 shadow-3xl ring-2 ring-orange-400/50' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick('maintenance')}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">MAINTENANCE</h2>
                  <p className="text-white/70">Predictive & preventive maintenance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-orange-400" />
                    <span className="text-white font-medium text-sm">Preventive</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.maintenance.preventive}</p>
                  <p className="text-green-400 text-xs">Scheduled</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium text-sm">Predictive</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.maintenance.predictive}</p>
                  <p className="text-yellow-400 text-xs">Insights</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium text-sm">Work Orders</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.maintenance.workOrders}</p>
                  <p className="text-green-400 text-xs">Active</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Preventive Maintenance</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Predictive Maintenance</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Work Orders</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>

            {/* ANALYTICS Section */}
            <div 
              className={`backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 cursor-pointer ${
                activeCards.has('analytics') ? 'scale-105 shadow-3xl ring-2 ring-green-400/50' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick('analytics')}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">ANALYTICS</h2>
                  <p className="text-white/70">Data intelligence & insights</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span className="text-white font-medium text-sm">Anomalies</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.analytics.anomalies}</p>
                  <p className="text-yellow-400 text-xs">Detected</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium text-sm">Predictions</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.analytics.predictions}</p>
                  <p className="text-green-400 text-xs">Active</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium text-sm">Accuracy</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.analytics.accuracy}%</p>
                  <p className="text-green-400 text-xs">ML Models</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Performance Analytics</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Predictive Insights</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Reporting</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>

            {/* CONFIGURATION Section */}
            <div 
              className={`backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/20 p-8 shadow-2xl transition-all duration-500 cursor-pointer ${
                activeCards.has('configuration') ? 'scale-105 shadow-3xl ring-2 ring-purple-400/50' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick('configuration')}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl shadow-lg">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">CONFIGURATION</h2>
                  <p className="text-white/70">System administration & setup</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium text-sm">Plants</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.system.plants}</p>
                  <p className="text-green-400 text-xs">Active</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Network className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium text-sm">Integrations</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.system.integrations}</p>
                  <p className="text-green-400 text-xs">Connected</p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium text-sm">Users</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{kpiData.system.users}</p>
                  <p className="text-green-400 text-xs">Managed</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">System Settings</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">User Management</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Device Configuration</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions & Status */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Quick Actions */}
            <div className="backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5 text-green-400" />
                  <span className="text-white">Start Production Line</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  <span className="text-white">View Active Alerts</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 backdrop-blur-sm bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Generate Report</span>
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Network</span>
                  </div>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Database</span>
                  </div>
                  <span className="text-green-400 text-sm">Connected</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Backup</span>
                  </div>
                  <span className="text-yellow-400 text-sm">In Progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80">Security</span>
                  </div>
                  <span className="text-green-400 text-sm">Secure</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="backdrop-blur-md bg-gradient-to-br from-white/15 to-white/5 rounded-2xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Robot #3 maintenance completed</p>
                    <p className="text-white/60 text-xs">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">New quality report generated</p>
                    <p className="text-white/60 text-xs">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <p className="text-white text-sm">Temperature alert resolved</p>
                    <p className="text-white/60 text-xs">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default GlassmorphismDashboard;