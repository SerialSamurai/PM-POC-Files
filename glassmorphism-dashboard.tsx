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
  Home,
  BookOpen
} from 'lucide-react';

const CyberCard = ({ card }) => {
  const IconComponent = card.icon;

  return (
    <div className="w-48 h-64 cursor-pointer">
      {/* Main Card */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/10 overflow-hidden shadow-2xl">
        
        {/* Cyber Corner Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute top-2.5 left-2.5 w-4 h-4 border-l-2 border-t-2 border-blue-500/30"></span>
          <span className="absolute top-2.5 right-2.5 w-4 h-4 border-r-2 border-t-2 border-blue-500/30"></span>
          <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-l-2 border-b-2 border-blue-500/30"></span>
          <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-r-2 border-b-2 border-blue-500/30"></span>
        </div>

        {/* Content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          {/* Icon */}
          <div className={`p-4 rounded-2xl shadow-lg mb-4 bg-gradient-to-r ${card.color}`}>
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          
          {/* Title */}
          <div className="text-center">
            <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center leading-tight">
              {card.title.toUpperCase()}
            </h3>
            <p className="text-white/50 text-xs tracking-widest uppercase mt-2">
              {card.section}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CyberDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pageCards = [
    // OPERATIONS
    { id: 'equipment-monitoring', title: 'Equipment Monitoring', icon: Cpu, color: 'from-blue-500 to-cyan-500', section: 'OPERATIONS' },
    { id: 'process-control', title: 'Process Control', icon: Activity, color: 'from-blue-500 to-cyan-500', section: 'OPERATIONS' },
    { id: 'robot-systems', title: 'Robot Systems', icon: Radio, color: 'from-blue-500 to-cyan-500', section: 'OPERATIONS' },
    
    // MAINTENANCE
    { id: 'preventive-maintenance', title: 'Preventive Maintenance', icon: Calendar, color: 'from-orange-500 to-red-500', section: 'MAINTENANCE' },
    { id: 'predictive-maintenance', title: 'Predictive Maintenance', icon: Brain, color: 'from-orange-500 to-red-500', section: 'MAINTENANCE' },
    { id: 'work-orders', title: 'Work Orders', icon: FileText, color: 'from-orange-500 to-red-500', section: 'MAINTENANCE' },
    { id: 'documentation', title: 'Documentation', icon: BookOpen, color: 'from-orange-500 to-red-500', section: 'MAINTENANCE' },
    
    // ANALYTICS
    { id: 'performance-analytics', title: 'Performance Analytics', icon: BarChart3, color: 'from-green-500 to-emerald-500', section: 'ANALYTICS' },
    { id: 'predictive-insights', title: 'Predictive Insights', icon: Lightbulb, color: 'from-green-500 to-emerald-500', section: 'ANALYTICS' },
    { id: 'reporting', title: 'Reporting', icon: PieChart, color: 'from-green-500 to-emerald-500', section: 'ANALYTICS' },
    { id: 'data-management', title: 'Data Management', icon: Database, color: 'from-green-500 to-emerald-500', section: 'ANALYTICS' },
    
    // CONFIGURATION
    { id: 'system-settings', title: 'System Settings', icon: Settings, color: 'from-purple-500 to-indigo-500', section: 'CONFIGURATION' },
    { id: 'user-management', title: 'User Management', icon: Users, color: 'from-purple-500 to-indigo-500', section: 'CONFIGURATION' },
    { id: 'device-configuration', title: 'Device Configuration', icon: HardDrive, color: 'from-purple-500 to-indigo-500', section: 'CONFIGURATION' },
    { id: 'integration-settings', title: 'Integration Settings', icon: Network, color: 'from-purple-500 to-indigo-500', section: 'CONFIGURATION' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wider">
                    MTMUS MANUFACTURING INTERFACE
                  </h1>
                  <p className="text-white/60 mt-1 tracking-wide">Advanced Manufacturing Intelligence Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="text-right font-mono">
                  <p className="text-sm font-medium">{currentTime.toLocaleDateString()}</p>
                  <p className="text-lg font-bold text-cyan-400">{currentTime.toLocaleTimeString()}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mb-1"></div>
                  <span className="text-xs text-green-400 font-semibold">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - 4x4 Grid of Cards */}
      <main className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            {pageCards.map((card) => (
              <CyberCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CyberDashboard;