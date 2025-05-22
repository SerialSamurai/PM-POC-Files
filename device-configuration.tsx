import React, { useState } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Settings, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Zap, 
  Shield, 
  ChevronRight,
  Monitor,
  Cpu,
  Radio,
  Gauge,
  Thermometer,
  Camera,
  Wrench,
  Eye,
  Edit3,
  Trash2,
  Power,
  Activity,
  Calendar,
  HardDrive,
  Network,
  Signal,
  Battery,
  Server
} from 'lucide-react';

const DeviceConfiguration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample device data for body weld department
  const devices = [
    {
      id: 'RBT-K250-001',
      name: 'Kawasaki K250 BX200L #1',
      type: 'Robot Controller',
      category: 'robotic',
      ipAddress: '192.168.1.101',
      status: 'online',
      location: 'Body Side Weld Station',
      firmware: '7.2.1',
      latestFirmware: '7.2.3',
      lastCalibration: '2025-05-15',
      nextCalibration: '2025-06-15',
      communicationProtocol: 'Ethernet/IP',
      port: 44818,
      updateAvailable: true,
      batteryLevel: null,
      temperature: 42.3,
      uptime: '15d 8h 23m'
    },
    {
      id: 'RBT-K250-002',
      name: 'Kawasaki K250 BX200L #2',
      type: 'Robot Controller',
      category: 'robotic',
      ipAddress: '192.168.1.102',
      status: 'online',
      location: 'Roof Panel Weld Station',
      firmware: '7.2.3',
      latestFirmware: '7.2.3',
      lastCalibration: '2025-05-18',
      nextCalibration: '2025-06-18',
      communicationProtocol: 'Ethernet/IP',
      port: 44818,
      updateAvailable: false,
      batteryLevel: null,
      temperature: 39.8,
      uptime: '12d 4h 15m'
    },
    {
      id: 'WLD-CTL-003',
      name: 'Weld Controller Unit #3',
      type: 'Welding Controller',
      category: 'welding',
      ipAddress: '192.168.1.203',
      status: 'online',
      location: 'Quarter Panel Station',
      firmware: '3.1.2',
      latestFirmware: '3.1.4',
      lastCalibration: '2025-05-10',
      nextCalibration: '2025-06-10',
      communicationProtocol: 'Modbus TCP',
      port: 502,
      updateAvailable: true,
      batteryLevel: null,
      temperature: 45.1,
      uptime: '8d 12h 45m'
    },
    {
      id: 'PLC-AB-004',
      name: 'Allen-Bradley PLC',
      type: 'Programmable Logic Controller',
      category: 'control',
      ipAddress: '192.168.1.50',
      status: 'online',
      location: 'Main Control Panel',
      firmware: '32.011',
      latestFirmware: '32.012',
      lastCalibration: '2025-05-01',
      nextCalibration: '2025-08-01',
      communicationProtocol: 'EtherNet/IP',
      port: 44818,
      updateAvailable: true,
      batteryLevel: 85,
      temperature: 38.5,
      uptime: '45d 2h 10m'
    },
    {
      id: 'VIS-CAM-005',
      name: 'Vision Camera System',
      type: 'Vision System',
      category: 'vision',
      ipAddress: '192.168.1.150',
      status: 'warning',
      location: 'Quality Inspection Station',
      firmware: '2.8.1',
      latestFirmware: '2.8.3',
      lastCalibration: '2025-05-20',
      nextCalibration: '2025-06-20',
      communicationProtocol: 'GigE Vision',
      port: 3956,
      updateAvailable: true,
      batteryLevel: null,
      temperature: 41.2,
      uptime: '3d 7h 30m'
    },
    {
      id: 'SEN-TMP-006',
      name: 'Temperature Sensor Array',
      type: 'Temperature Sensor',
      category: 'sensor',
      ipAddress: '192.168.1.180',
      status: 'offline',
      location: 'Weld Zone Monitoring',
      firmware: '1.4.5',
      latestFirmware: '1.4.7',
      lastCalibration: '2025-05-05',
      nextCalibration: '2025-07-05',
      communicationProtocol: 'MQTT',
      port: 1883,
      updateAvailable: true,
      batteryLevel: 45,
      temperature: null,
      uptime: '0d 0h 0m'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'offline': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'warning': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'online': return <CheckCircle className="w-4 h-4" />;
      case 'offline': return <XCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'robotic': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'welding': return <Zap className="w-5 h-5 text-orange-400" />;
      case 'control': return <Monitor className="w-5 h-5 text-purple-400" />;
      case 'vision': return <Camera className="w-5 h-5 text-green-400" />;
      case 'sensor': return <Thermometer className="w-5 h-5 text-red-400" />;
      default: return <Settings className="w-5 h-5 text-gray-400" />;
    }
  };

  const filteredDevices = devices.filter(device => {
    const matchesFilter = filterStatus === 'all' || device.status === filterStatus;
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Devices</p>
              <p className="text-2xl font-bold text-white">{devices.length}</p>
            </div>
            <Server className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Online</p>
              <p className="text-2xl font-bold text-green-400">{devices.filter(d => d.status === 'online').length}</p>
            </div>
            <Wifi className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Updates Available</p>
              <p className="text-2xl font-bold text-yellow-400">{devices.filter(d => d.updateAvailable).length}</p>
            </div>
            <Download className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Calibration Due</p>
              <p className="text-2xl font-bold text-orange-400">2</p>
            </div>
            <Wrench className="w-8 h-8 text-orange-400" />
          </div>
        </div>
      </div>

      {/* Device List */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Device Registry</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add Device
          </button>
        </div>

        <div className="space-y-4">
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {getCategoryIcon(device.category)}
                  <div>
                    <h4 className="font-semibold text-white">{device.name}</h4>
                    <p className="text-gray-400 text-sm">{device.type} • {device.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">IP: {device.ipAddress}</p>
                    <p className="text-gray-400 text-sm">Firmware: {device.firmware}</p>
                  </div>
                  
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(device.status)}`}>
                    {getStatusIcon(device.status)}
                    {device.status.toUpperCase()}
                  </span>
                  
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
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

  const renderCommunication = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Network className="w-5 h-5 text-blue-400" />
          Communication Settings
        </h3>
        
        <div className="space-y-4">
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(device.category)}
                  <div>
                    <h4 className="font-semibold text-white">{device.name}</h4>
                    <p className="text-gray-400 text-sm">{device.location}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(device.status)}`}>
                  {device.status === 'online' ? <Signal className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                  {device.status.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">IP Address</p>
                  <p className="text-white font-mono">{device.ipAddress}</p>
                </div>
                <div>
                  <p className="text-gray-400">Protocol</p>
                  <p className="text-white">{device.communicationProtocol}</p>
                </div>
                <div>
                  <p className="text-gray-400">Port</p>
                  <p className="text-white font-mono">{device.port}</p>
                </div>
                <div>
                  <p className="text-gray-400">Uptime</p>
                  <p className="text-white">{device.uptime}</p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Test Connection
                </button>
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  Configure
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Restart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCalibration = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-orange-400" />
          Calibration Management
        </h3>
        
        <div className="space-y-4">
          {filteredDevices.map((device) => {
            const lastCal = new Date(device.lastCalibration);
            const nextCal = new Date(device.nextCalibration);
            const daysUntilDue = Math.ceil((nextCal - new Date()) / (1000 * 60 * 60 * 24));
            const isOverdue = daysUntilDue < 0;
            const isDueSoon = daysUntilDue <= 7 && daysUntilDue >= 0;
            
            return (
              <div key={device.id} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(device.category)}
                    <div>
                      <h4 className="font-semibold text-white">{device.name}</h4>
                      <p className="text-gray-400 text-sm">{device.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isOverdue && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-red-500/30 bg-red-900/20 text-red-400">
                        <AlertTriangle className="w-3 h-3" />
                        OVERDUE
                      </span>
                    )}
                    {isDueSoon && !isOverdue && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-yellow-500/30 bg-yellow-900/20 text-yellow-400">
                        <Clock className="w-3 h-3" />
                        DUE SOON
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-gray-400">Last Calibration</p>
                    <p className="text-white">{device.lastCalibration}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Next Due</p>
                    <p className={`font-semibold ${isOverdue ? 'text-red-400' : isDueSoon ? 'text-yellow-400' : 'text-white'}`}>
                      {device.nextCalibration}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Days Until Due</p>
                    <p className={`font-semibold ${isOverdue ? 'text-red-400' : isDueSoon ? 'text-yellow-400' : 'text-white'}`}>
                      {isOverdue ? `${Math.abs(daysUntilDue)} days overdue` : `${daysUntilDue} days`}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Temperature</p>
                    <p className="text-white">{device.temperature ? `${device.temperature}°C` : 'N/A'}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                    Start Calibration
                  </button>
                  <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                    View History
                  </button>
                  <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                    Schedule
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderFirmware = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <HardDrive className="w-5 h-5 text-purple-400" />
          Firmware Management
        </h3>
        
        <div className="space-y-4">
          {filteredDevices.map((device) => (
            <div key={device.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {getCategoryIcon(device.category)}
                  <div>
                    <h4 className="font-semibold text-white">{device.name}</h4>
                    <p className="text-gray-400 text-sm">{device.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {device.updateAvailable && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-yellow-500/30 bg-yellow-900/20 text-yellow-400">
                      <Download className="w-3 h-3" />
                      UPDATE AVAILABLE
                    </span>
                  )}
                  {device.batteryLevel && (
                    <div className="flex items-center gap-1">
                      <Battery className={`w-4 h-4 ${device.batteryLevel > 50 ? 'text-green-400' : device.batteryLevel > 20 ? 'text-yellow-400' : 'text-red-400'}`} />
                      <span className="text-sm text-gray-400">{device.batteryLevel}%</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-400">Current Version</p>
                  <p className="text-white font-mono">{device.firmware}</p>
                </div>
                <div>
                  <p className="text-gray-400">Latest Version</p>
                  <p className={`font-mono ${device.updateAvailable ? 'text-yellow-400' : 'text-green-400'}`}>
                    {device.latestFirmware}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Update Status</p>
                  <p className={`font-semibold ${device.updateAvailable ? 'text-yellow-400' : 'text-green-400'}`}>
                    {device.updateAvailable ? 'Available' : 'Up to date'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Last Updated</p>
                  <p className="text-white">2025-05-10</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                {device.updateAvailable && (
                  <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                    Update Firmware
                  </button>
                )}
                <button className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  View Changelog
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  Backup Current
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Schedule Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Monitor },
    { id: 'communication', name: 'Communication', icon: Network },
    { id: 'calibration', name: 'Calibration', icon: Wrench },
    { id: 'firmware', name: 'Firmware', icon: HardDrive }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Configuration</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Device Management</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Device Configuration
            </h1>
            <p className="text-gray-400 mt-2">Manage devices, communication, calibration, and firmware updates</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4" />
              Scan Network
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              Add Device
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search devices, types, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'online', 'offline', 'warning'].map((filter) => (
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
        {activeTab === 'communication' && renderCommunication()}
        {activeTab === 'calibration' && renderCalibration()}
        {activeTab === 'firmware' && renderFirmware()}
      </div>
    </div>
  );
};

export default DeviceConfiguration;