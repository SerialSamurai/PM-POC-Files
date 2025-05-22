import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar, 
  Clock, 
  Filter, 
  Settings, 
  Play, 
  Pause, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Share2,
  FileText,
  Users,
  AlertCircle,
  CheckCircle,
  Target,
  Zap,
  Wrench,
  Shield,
  DollarSign,
  Activity,
  Database,
  ChevronDown,
  ChevronRight,
  Grid,
  List,
  Search,
  Copy,
  Save,
  RefreshCw
} from 'lucide-react';

const AnalyticsReportsPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportBuilderOpen, setReportBuilderOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  // Sample data for MTMUS manufacturing reports
  const executiveDashboards = [
    {
      id: 'production-overview',
      name: 'Production Overview',
      description: 'Daily production metrics and KPIs',
      lastUpdated: '2 min ago',
      status: 'active',
      widgets: 6,
      viewers: 12,
      schedule: 'Real-time'
    },
    {
      id: 'quality-metrics',
      name: 'Quality Metrics',
      description: 'Quality control and defect analysis',
      lastUpdated: '5 min ago',
      status: 'active',
      widgets: 4,
      viewers: 8,
      schedule: 'Hourly'
    },
    {
      id: 'maintenance-analytics',
      name: 'Maintenance Analytics',
      description: 'Equipment health and maintenance trends',
      lastUpdated: '15 min ago',
      status: 'active',
      widgets: 5,
      viewers: 6,
      schedule: 'Daily'
    }
  ];

  const customReports = [
    {
      id: 'oee-analysis',
      name: 'OEE Analysis Report',
      type: 'Production',
      description: 'Overall Equipment Effectiveness by line and shift',
      schedule: 'Daily 6:00 AM',
      nextRun: '2025-05-22 06:00',
      status: 'active',
      format: 'PDF + Excel',
      recipients: ['production@mtmus.com', 'manager@mtmus.com'],
      lastRun: '2025-05-21 06:00',
      avgRunTime: '2.3 min'
    },
    {
      id: 'safety-incidents',
      name: 'Safety Incident Summary',
      type: 'Safety',
      description: 'Weekly safety incidents and near-miss reports',
      schedule: 'Weekly Monday 8:00 AM',
      nextRun: '2025-05-26 08:00',
      status: 'active',
      format: 'PDF',
      recipients: ['safety@mtmus.com', 'hr@mtmus.com'],
      lastRun: '2025-05-19 08:00',
      avgRunTime: '1.1 min'
    },
    {
      id: 'cost-analysis',
      name: 'Weekly Cost Analysis',
      type: 'Financial',
      description: 'Production costs, material usage, and waste analysis',
      schedule: 'Weekly Friday 5:00 PM',
      nextRun: '2025-05-23 17:00',
      status: 'paused',
      format: 'Excel',
      recipients: ['finance@mtmus.com', 'operations@mtmus.com'],
      lastRun: '2025-05-16 17:00',
      avgRunTime: '4.7 min'
    },
    {
      id: 'predictive-maintenance',
      name: 'AI Predictive Maintenance',
      type: 'Maintenance',
      description: 'ML-powered equipment failure predictions and recommendations',
      schedule: 'Daily 12:00 PM',
      nextRun: '2025-05-21 12:00',
      status: 'active',
      format: 'PDF + JSON',
      recipients: ['maintenance@mtmus.com', 'engineering@mtmus.com'],
      lastRun: '2025-05-20 12:00',
      avgRunTime: '3.8 min'
    }
  ];

  const reportTemplates = [
    { id: 'production-summary', name: 'Production Summary', category: 'Production', fields: 12 },
    { id: 'quality-control', name: 'Quality Control Report', category: 'Quality', fields: 8 },
    { id: 'equipment-performance', name: 'Equipment Performance', category: 'Maintenance', fields: 15 },
    { id: 'safety-metrics', name: 'Safety Metrics', category: 'Safety', fields: 6 },
    { id: 'energy-consumption', name: 'Energy Consumption', category: 'Environmental', fields: 9 },
    { id: 'labor-efficiency', name: 'Labor Efficiency', category: 'HR', fields: 7 }
  ];

  const exportFormats = [
    { id: 'pdf', name: 'PDF Report', icon: FileText, color: 'text-red-400' },
    { id: 'excel', name: 'Excel Spreadsheet', icon: BarChart3, color: 'text-green-400' },
    { id: 'csv', name: 'CSV Data', icon: Database, color: 'text-blue-400' },
    { id: 'json', name: 'JSON API', icon: Activity, color: 'text-purple-400' }
  ];

  const kpiMetrics = [
    { name: 'Production Efficiency', value: '94.2%', change: '+2.1%', trend: 'up', color: 'green' },
    { name: 'Quality Rate', value: '98.7%', change: '+0.3%', trend: 'up', color: 'green' },
    { name: 'Equipment Uptime', value: '96.8%', change: '-0.8%', trend: 'down', color: 'yellow' },
    { name: 'Safety Score', value: '99.1%', change: '+0.2%', trend: 'up', color: 'green' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'paused': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Production': return 'bg-blue-900/30 text-blue-400';
      case 'Quality': return 'bg-green-900/30 text-green-400';
      case 'Safety': return 'bg-red-900/30 text-red-400';
      case 'Maintenance': return 'bg-purple-900/30 text-purple-400';
      case 'Financial': return 'bg-yellow-900/30 text-yellow-400';
      default: return 'bg-gray-900/30 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Analytics & Reports
          </h1>
          <p className="text-gray-400 mt-2">Manufacturing intelligence and reporting platform</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            onClick={() => setReportBuilderOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Report
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-gray-900/30 p-1 rounded-lg w-fit">
        {[
          { id: 'dashboards', label: 'Executive Dashboards', icon: BarChart3 },
          { id: 'reports', label: 'Custom Reports', icon: FileText },
          { id: 'builder', label: 'Report Builder', icon: Settings },
          { id: 'exports', label: 'Data Exports', icon: Download }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {kpiMetrics.map((metric, index) => (
          <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{metric.name}</p>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : (
                    <TrendingUp className="w-3 h-3 text-yellow-400 rotate-180" />
                  )}
                  <span className={`text-xs ${metric.color === 'green' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                metric.color === 'green' ? 'bg-green-900/30' : 'bg-yellow-900/30'
              }`}>
                <Target className={`w-6 h-6 ${metric.color === 'green' ? 'text-green-400' : 'text-yellow-400'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Based on Active Tab */}
      {activeTab === 'dashboards' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Executive Dashboards</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                {viewMode === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
            {executiveDashboards.map((dashboard) => (
              <div key={dashboard.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{dashboard.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{dashboard.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(dashboard.status)}`}>
                    {dashboard.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">{dashboard.widgets}</p>
                    <p className="text-gray-400 text-xs">Widgets</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{dashboard.viewers}</p>
                    <p className="text-gray-400 text-xs">Viewers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-sm font-semibold">{dashboard.schedule}</p>
                    <p className="text-gray-400 text-xs">Update</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Updated {dashboard.lastUpdated}</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                      <Eye className="w-3 h-3" />
                    </button>
                    <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded text-xs transition-colors">
                      <Edit className="w-3 h-3" />
                    </button>
                    <button className="p-2 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Scheduled Reports ({customReports.length})</h2>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm">
                <option>All Types</option>
                <option>Production</option>
                <option>Safety</option>
                <option>Maintenance</option>
                <option>Financial</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            {customReports.map((report) => (
              <div key={report.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{report.name}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${getTypeColor(report.type)}`}>
                        {report.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{report.description}</p>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Schedule</p>
                        <p className="text-white">{report.schedule}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Next Run</p>
                        <p className="text-white">{report.nextRun}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Format</p>
                        <p className="text-white">{report.format}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Avg Runtime</p>
                        <p className="text-white">{report.avgRunTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-yellow-600 hover:bg-yellow-700 rounded transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'builder' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Report Builder</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Save className="w-4 h-4" />
              Save Report
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Template Selection */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Report Templates</h3>
              <div className="space-y-3">
                {reportTemplates.map((template) => (
                  <div key={template.id} className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{template.name}</p>
                        <p className="text-gray-400 text-sm">{template.category}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{template.fields} fields</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sources */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
              <div className="space-y-3">
                {[
                  { name: 'Production Data', status: 'connected', records: '2.3M' },
                  { name: 'Quality Metrics', status: 'connected', records: '456K' },
                  { name: 'Equipment Logs', status: 'connected', records: '890K' },
                  { name: 'Safety Records', status: 'connected', records: '12K' },
                  { name: 'ML Predictions', status: 'connected', records: '67K' },
                  { name: 'Cost Data', status: 'warning', records: '234K' }
                ].map((source, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${source.status === 'connected' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                      <span className="text-white">{source.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{source.records}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Report Preview */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="space-y-4">
                <div className="h-32 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Chart Preview</p>
                  </div>
                </div>
                <div className="h-20 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <p className="text-gray-400 text-xs">Table Preview</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Estimated Runtime:</span>
                  <span className="text-white">2.1 minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-400">Data Points:</span>
                  <span className="text-white">45,678</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'exports' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Data Export Tools</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Bulk Export
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Export Formats */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Export Formats</h3>
              <div className="grid grid-cols-2 gap-4">
                {exportFormats.map((format) => (
                  <div key={format.id} className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <format.icon className={`w-6 h-6 ${format.color}`} />
                      <span className="font-semibold text-white">{format.name}</span>
                    </div>
                    <button className="w-full mt-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
                      Export
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Exports */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Exports</h3>
              <div className="space-y-3">
                {[
                  { name: 'Production Summary Q1', format: 'PDF', size: '2.3 MB', date: '2 hours ago' },
                  { name: 'Equipment Data Export', format: 'Excel', size: '12.7 MB', date: '5 hours ago' },
                  { name: 'Quality Metrics Raw', format: 'CSV', size: '8.1 MB', date: '1 day ago' },
                  { name: 'ML Predictions API', format: 'JSON', size: '456 KB', date: '2 days ago' }
                ].map((export_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-white">{export_.name}</p>
                      <p className="text-gray-400 text-sm">{export_.format} • {export_.size}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">{export_.date}</span>
                      <button className="p-1 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                        <Download className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Export Configuration */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Export Configuration</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Data Range</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
                  <option>Last 24 Hours</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Custom Range</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Data Type</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
                  <option>All Data</option>
                  <option>Production Only</option>
                  <option>Quality Metrics</option>
                  <option>Equipment Logs</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Format</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm">
                  <option>Excel (.xlsx)</option>
                  <option>CSV (.csv)</option>
                  <option>PDF Report</option>
                  <option>JSON API</option>
                </select>
              </div>
            </div>
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              Generate Export
            </button>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Active Reports: {customReports.filter(r => r.status === 'active').length}
            </span>
            <span className="text-gray-400">
              Total Dashboards: {executiveDashboards.length}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Analytics Engine Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReportsPage;