import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Upload, 
  Download, 
  Copy, 
  Edit3, 
  Trash2, 
  FileText, 
  Shield, 
  Clock, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Plus,
  Search,
  Filter,
  Eye,
  Settings,
  Save,
  RotateCcw,
  ChevronRight,
  Code,
  Target,
  Thermometer,
  Activity
} from 'lucide-react';

const RobotProgramManagement = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('programs');

  // Sample program data for body welding applications
  const programs = [
    {
      id: 'BWP_001',
      name: 'CAMRY_BODYSIDE_WELD_A',
      description: 'Toyota Camry body side panel welding sequence',
      vehicleModel: 'Toyota Camry 2025',
      status: 'active',
      version: '3.2.1',
      lastModified: '2025-05-20 14:30',
      author: 'John Martinez',
      cycleTime: 42.5,
      weldPoints: 24,
      parameters: {
        current: 8500,
        voltage: 240,
        pressure: 450,
        weldTime: 16
      },
      safetyZones: 8,
      validated: true,
      deployed: true
    },
    {
      id: 'BWP_002',
      name: 'CAMRY_ROOF_WELD_B',
      description: 'Toyota Camry roof panel welding sequence',
      vehicleModel: 'Toyota Camry 2025',
      status: 'testing',
      version: '2.1.0',
      lastModified: '2025-05-21 09:15',
      author: 'Sarah Kim',
      cycleTime: 38.2,
      weldPoints: 18,
      parameters: {
        current: 7800,
        voltage: 235,
        pressure: 425,
        weldTime: 14
      },
      safetyZones: 6,
      validated: false,
      deployed: false
    },
    {
      id: 'BWP_003',
      name: 'RAV4_QUARTER_PANEL_A',
      description: 'RAV4 quarter panel welding program',
      vehicleModel: 'Toyota RAV4 2025',
      status: 'development',
      version: '1.0.3',
      lastModified: '2025-05-19 16:45',
      author: 'Mike Chen',
      cycleTime: 51.8,
      weldPoints: 32,
      parameters: {
        current: 9200,
        voltage: 245,
        pressure: 475,
        weldTime: 18
      },
      safetyZones: 10,
      validated: false,
      deployed: false
    },
    {
      id: 'BWP_004',
      name: 'HIGHLANDER_DOOR_FRAME',
      description: 'Highlander door frame assembly weld',
      vehicleModel: 'Toyota Highlander 2025',
      status: 'active',
      version: '4.1.2',
      lastModified: '2025-05-18 11:20',
      author: 'Lisa Rodriguez',
      cycleTime: 35.7,
      weldPoints: 16,
      parameters: {
        current: 7500,
        voltage: 230,
        pressure: 400,
        weldTime: 12
      },
      safetyZones: 5,
      validated: true,
      deployed: true
    },
    {
      id: 'BWP_005',
      name: 'GENERIC_BACKUP_HOME',
      description: 'Emergency backup home position program',
      vehicleModel: 'Universal',
      status: 'backup',
      version: '1.0.0',
      lastModified: '2025-05-15 08:00',
      author: 'System',
      cycleTime: 5.0,
      weldPoints: 0,
      parameters: {
        current: 0,
        voltage: 0,
        pressure: 0,
        weldTime: 0
      },
      safetyZones: 1,
      validated: true,
      deployed: true
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'testing': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'development': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'backup': return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'testing': return <Clock className="w-4 h-4" />;
      case 'development': return <Edit3 className="w-4 h-4" />;
      case 'backup': return <Shield className="w-4 h-4" />;
      case 'error': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredPrograms = programs.filter(program => {
    const matchesFilter = filterStatus === 'all' || program.status === filterStatus;
    const matchesSearch = program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Operations</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Robots</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>K250 BX200L</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Programs</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Robot Program Management
            </h1>
            <p className="text-gray-400 mt-2">Kawasaki BX200L - Body Weld Department</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              New Program
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
              <Upload className="w-4 h-4" />
              Import
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Programs</p>
              <p className="text-2xl font-bold text-white">{programs.length}</p>
            </div>
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active</p>
              <p className="text-2xl font-bold text-green-400">{programs.filter(p => p.status === 'active').length}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">In Testing</p>
              <p className="text-2xl font-bold text-yellow-400">{programs.filter(p => p.status === 'testing').length}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Development</p>
              <p className="text-2xl font-bold text-blue-400">{programs.filter(p => p.status === 'development').length}</p>
            </div>
            <Edit3 className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Cycle Time</p>
              <p className="text-2xl font-bold text-white">{(programs.reduce((sum, p) => sum + p.cycleTime, 0) / programs.length).toFixed(1)}s</p>
            </div>
            <Activity className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search programs, vehicle models, descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'testing', 'development', 'backup'].map((filter) => (
            <button
              key={filter}
              onClick={() => setFilterStatus(filter)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                filterStatus === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Programs List */}
      <div className="space-y-4">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white font-mono">{program.name}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(program.status)}`}>
                    {getStatusIcon(program.status)}
                    {program.status.toUpperCase()}
                  </span>
                  {program.validated && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-green-500/30 bg-green-900/20 text-green-400">
                      <CheckCircle className="w-3 h-3" />
                      VALIDATED
                    </span>
                  )}
                  {program.deployed && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-blue-500/30 bg-blue-900/20 text-blue-400">
                      <Zap className="w-3 h-3" />
                      DEPLOYED
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-3">{program.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Vehicle Model</p>
                    <p className="text-white font-semibold">{program.vehicleModel}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Version</p>
                    <p className="text-white font-mono">{program.version}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Cycle Time</p>
                    <p className="text-white">{program.cycleTime}s</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Weld Points</p>
                    <p className="text-white">{program.weldPoints}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors" title="Run Program">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors" title="Edit Program">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors" title="View Details">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors" title="Download">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Welding Parameters */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Welding Parameters</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Current</p>
                  <p className="text-white font-mono">{program.parameters.current}A</p>
                </div>
                <div>
                  <p className="text-gray-400">Voltage</p>
                  <p className="text-white font-mono">{program.parameters.voltage}V</p>
                </div>
                <div>
                  <p className="text-gray-400">Pressure</p>
                  <p className="text-white font-mono">{program.parameters.pressure}N</p>
                </div>
                <div>
                  <p className="text-gray-400">Weld Time</p>
                  <p className="text-white font-mono">{program.parameters.weldTime} cycles</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>ID: {program.id}</span>
                <span>Modified: {program.lastModified}</span>
                <span>Author: {program.author}</span>
                <span>Safety Zones: {program.safetyZones}</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Simulate
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Deploy
                </button>
                <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                  Validate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">No programs found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Quick Actions Panel */}
      <div className="fixed bottom-6 right-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Quick Actions</h4>
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm">
            <Square className="w-4 h-4" />
            Emergency Stop
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors text-sm">
            <RotateCcw className="w-4 h-4" />
            Home Position
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors text-sm">
            <Settings className="w-4 h-4" />
            Robot Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default RobotProgramManagement;