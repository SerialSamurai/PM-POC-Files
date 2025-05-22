import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Globe, 
  Database, 
  Users, 
  Building, 
  MapPin, 
  Network, 
  Shield, 
  Key, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  RefreshCw, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Download,
  Upload,
  ChevronRight,
  Server,
  Cloud,
  Link,
  Zap,
  Lock,
  Unlock,
  Activity,
  BarChart3,
  Target,
  Cpu,
  HardDrive,
  Wifi,
  Radio,
  Bell,
  BellOff,
  Search,
  Filter,
  Copy,
  Save,
  RotateCcw,
  ExternalLink,
  Layers,
  Code,
  FileText,
  Mail,
  Phone,
  Calendar,
  User,
  Building2,
  Factory,
  TreePine,
  Truck,
  Package
} from 'lucide-react';

const SystemConfigurationDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showPasswords, setShowPasswords] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  // System Overview Metrics
  const systemMetrics = {
    totalPlants: 8,
    activePlants: 7,
    totalIntegrations: 24,
    activeIntegrations: 22,
    databaseConnections: 12,
    activeDatabases: 11,
    totalUsers: 156,
    dataSync: 99.2,
    systemUptime: 99.8,
    lastBackup: '2025-05-21 02:00'
  };

  // Plant Locations (Multi-tenant)
  const plantLocations = [
    {
      id: 'PLANT-001',
      name: 'MTMUS Georgetown',
      location: 'Georgetown, Kentucky, USA',
      timezone: 'America/New_York',
      status: 'active',
      type: 'Manufacturing',
      capacity: 400000,
      employees: 850,
      operatingHours: '24/7',
      established: '1988',
      contact: {
        manager: 'Robert Johnson',
        email: 'r.johnson@mtmus.com',
        phone: '+1 (502) 555-0100'
      },
      systems: {
        erp: 'SAP S/4HANA',
        mes: 'Siemens Opcenter',
        scada: 'GE iFIX',
        databases: 3,
        integrations: 8
      },
      metrics: {
        production: 95.2,
        efficiency: 89.4,
        quality: 98.1,
        uptime: 96.8
      }
    },
    {
      id: 'PLANT-002',
      name: 'MTMUS Princeton',
      location: 'Princeton, Indiana, USA',
      timezone: 'America/Chicago',
      status: 'active',
      type: 'Manufacturing',
      capacity: 350000,
      employees: 720,
      operatingHours: '24/7',
      established: '2006',
      contact: {
        manager: 'Maria Garcia',
        email: 'm.garcia@mtmus.com',
        phone: '+1 (812) 555-0200'
      },
      systems: {
        erp: 'SAP S/4HANA',
        mes: 'Rockwell FactoryTalk',
        scada: 'Wonderware InTouch',
        databases: 2,
        integrations: 6
      },
      metrics: {
        production: 92.8,
        efficiency: 87.2,
        quality: 97.5,
        uptime: 94.3
      }
    },
    {
      id: 'PLANT-003',
      name: 'TMMC Cambridge',
      location: 'Cambridge, Ontario, Canada',
      timezone: 'America/Toronto',
      status: 'active',
      type: 'Manufacturing',
      capacity: 420000,
      employees: 900,
      operatingHours: '24/7',
      established: '1992',
      contact: {
        manager: 'David Chen',
        email: 'd.chen@tmmc.ca',
        phone: '+1 (519) 555-0300'
      },
      systems: {
        erp: 'Oracle Cloud ERP',
        mes: 'Siemens Opcenter',
        scada: 'Schneider Wonderware',
        databases: 4,
        integrations: 9
      },
      metrics: {
        production: 97.1,
        efficiency: 91.6,
        quality: 98.8,
        uptime: 98.2
      }
    },
    {
      id: 'PLANT-004',
      name: 'TMMF Valenciennes',
      location: 'Valenciennes, France',
      timezone: 'Europe/Paris',
      status: 'maintenance',
      type: 'Manufacturing',
      capacity: 280000,
      employees: 650,
      operatingHours: '24/5',
      established: '2001',
      contact: {
        manager: 'Pierre Dubois',
        email: 'p.dubois@tmmf.fr',
        phone: '+33 3 27 55 0400'
      },
      systems: {
        erp: 'SAP S/4HANA',
        mes: 'Dassault DELMIA',
        scada: 'Schneider Citect',
        databases: 3,
        integrations: 5
      },
      metrics: {
        production: 0,
        efficiency: 0,
        quality: 0,
        uptime: 0
      }
    }
  ];

  // Partner Integrations
  const partnerIntegrations = [
    {
      id: 'INT-001',
      name: 'SAP S/4HANA ERP',
      type: 'ERP',
      partner: 'SAP',
      status: 'active',
      version: '2023.FPS02',
      protocol: 'REST API',
      endpoint: 'https://sap.mtmus.com/api/v2',
      authentication: 'OAuth 2.0',
      lastSync: '2025-05-21 14:22:30',
      syncFrequency: '5 minutes',
      dataTypes: ['Production Orders', 'Materials', 'Quality Data'],
      plants: ['PLANT-001', 'PLANT-002', 'PLANT-004'],
      healthScore: 98.5,
      avgResponseTime: 245,
      errorRate: 0.1
    },
    {
      id: 'INT-002',
      name: 'Siemens Opcenter MES',
      type: 'MES',
      partner: 'Siemens',
      status: 'active',
      version: '2023.1',
      protocol: 'OPC UA',
      endpoint: 'opc.tcp://mes.mtmus.com:4840',
      authentication: 'Certificate',
      lastSync: '2025-05-21 14:23:15',
      syncFrequency: 'Real-time',
      dataTypes: ['Work Orders', 'Equipment Status', 'Performance Data'],
      plants: ['PLANT-001', 'PLANT-003'],
      healthScore: 96.2,
      avgResponseTime: 125,
      errorRate: 0.3
    },
    {
      id: 'INT-003',
      name: 'Rockwell FactoryTalk',
      type: 'SCADA',
      partner: 'Rockwell Automation',
      status: 'active',
      version: '13.00',
      protocol: 'CIP',
      endpoint: '192.168.10.100:44818',
      authentication: 'Username/Password',
      lastSync: '2025-05-21 14:23:45',
      syncFrequency: '1 second',
      dataTypes: ['PLC Data', 'Alarms', 'Historian Data'],
      plants: ['PLANT-002'],
      healthScore: 94.7,
      avgResponseTime: 85,
      errorRate: 0.5
    },
    {
      id: 'INT-004',
      name: 'Oracle Cloud ERP',
      type: 'ERP',
      partner: 'Oracle',
      status: 'warning',
      version: '23C',
      protocol: 'REST API',
      endpoint: 'https://oracle.tmmc.ca/api/v1',
      authentication: 'API Key',
      lastSync: '2025-05-21 14:18:20',
      syncFrequency: '10 minutes',
      dataTypes: ['Financial Data', 'Inventory', 'Purchasing'],
      plants: ['PLANT-003'],
      healthScore: 87.3,
      avgResponseTime: 450,
      errorRate: 2.1
    },
    {
      id: 'INT-005',
      name: 'Dassault DELMIA MES',
      type: 'MES',
      partner: 'Dassault Systèmes',
      status: 'error',
      version: '2023x',
      protocol: 'SOAP',
      endpoint: 'https://delmia.tmmf.fr/services',
      authentication: 'SAML',
      lastSync: '2025-05-21 12:45:10',
      syncFrequency: '15 minutes',
      dataTypes: ['Production Planning', 'Resource Management'],
      plants: ['PLANT-004'],
      healthScore: 45.2,
      avgResponseTime: 1200,
      errorRate: 12.5
    },
    {
      id: 'INT-006',
      name: 'Quality Management System',
      type: 'QMS',
      partner: 'InfinityQS',
      status: 'active',
      version: '9.1.2',
      protocol: 'REST API',
      endpoint: 'https://qms.mtmus.com/api',
      authentication: 'Bearer Token',
      lastSync: '2025-05-21 14:23:00',
      syncFrequency: '2 minutes',
      dataTypes: ['Quality Measurements', 'SPC Data', 'Inspection Results'],
      plants: ['PLANT-001', 'PLANT-002', 'PLANT-003'],
      healthScore: 99.1,
      avgResponseTime: 180,
      errorRate: 0.05
    }
  ];

  // Database Connections
  const databaseConnections = [
    {
      id: 'DB-001',
      name: 'Production Database',
      type: 'PostgreSQL',
      version: '15.2',
      host: 'prod-db-cluster.mtmus.com',
      port: 5432,
      database: 'manufacturing_prod',
      status: 'active',
      connectionPool: 25,
      activeConnections: 18,
      maxConnections: 100,
      uptime: 99.9,
      lastBackup: '2025-05-21 02:00:00',
      backupFrequency: 'Daily',
      size: '2.8 TB',
      avgResponseTime: 15,
      plants: ['PLANT-001', 'PLANT-002'],
      replication: 'Master-Slave',
      encryption: 'AES-256'
    },
    {
      id: 'DB-002',
      name: 'Analytics Data Warehouse',
      type: 'ClickHouse',
      version: '23.4',
      host: 'analytics-dw.mtmus.com',
      port: 9000,
      database: 'analytics',
      status: 'active',
      connectionPool: 15,
      activeConnections: 12,
      maxConnections: 50,
      uptime: 99.7,
      lastBackup: '2025-05-21 01:30:00',
      backupFrequency: 'Daily',
      size: '8.5 TB',
      avgResponseTime: 45,
      plants: ['PLANT-001', 'PLANT-002', 'PLANT-003'],
      replication: 'Distributed',
      encryption: 'TLS 1.3'
    },
    {
      id: 'DB-003',
      name: 'Time Series Database',
      type: 'InfluxDB',
      version: '2.7',
      host: 'timeseries.mtmus.com',
      port: 8086,
      database: 'sensor_data',
      status: 'active',
      connectionPool: 40,
      activeConnections: 35,
      maxConnections: 100,
      uptime: 99.8,
      lastBackup: '2025-05-21 03:00:00',
      backupFrequency: 'Hourly',
      size: '450 GB',
      avgResponseTime: 8,
      plants: ['PLANT-001', 'PLANT-002', 'PLANT-003', 'PLANT-004'],
      replication: 'Multi-node',
      encryption: 'AES-256'
    },
    {
      id: 'DB-004',
      name: 'Configuration Database',
      type: 'MongoDB',
      version: '6.0.5',
      host: 'config-db.mtmus.com',
      port: 27017,
      database: 'system_config',
      status: 'warning',
      connectionPool: 10,
      activeConnections: 8,
      maxConnections: 25,
      uptime: 97.2,
      lastBackup: '2025-05-21 02:15:00',
      backupFrequency: 'Daily',
      size: '125 GB',
      avgResponseTime: 25,
      plants: ['PLANT-001', 'PLANT-002', 'PLANT-003', 'PLANT-004'],
      replication: 'Replica Set',
      encryption: 'Field-level'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'warning': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'maintenance': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'inactive': return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getHealthColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const togglePasswordVisibility = (id) => {
    setShowPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Plants</p>
              <p className="text-2xl font-bold text-white">{systemMetrics.activePlants}/{systemMetrics.totalPlants}</p>
            </div>
            <Building className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-green-400 text-xs mt-1">All systems operational</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Integrations</p>
              <p className="text-2xl font-bold text-white">{systemMetrics.activeIntegrations}/{systemMetrics.totalIntegrations}</p>
            </div>
            <Network className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-green-400 text-xs mt-1">2 warnings</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Databases</p>
              <p className="text-2xl font-bold text-white">{systemMetrics.activeDatabases}/{systemMetrics.databaseConnections}</p>
            </div>
            <Database className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-yellow-400 text-xs mt-1">1 performance issue</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">System Uptime</p>
              <p className="text-2xl font-bold text-white">{systemMetrics.systemUptime}%</p>
            </div>
            <Activity className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-green-400 text-xs mt-1">99.8% this month</p>
        </div>
      </div>

      {/* Global Status Map */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          Global Plant Status
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {plantLocations.map((plant) => (
            <div key={plant.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Factory className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold text-white">{plant.name}</h4>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {plant.location}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(plant.status)}`}>
                  {plant.status === 'active' && <CheckCircle className="w-3 h-3" />}
                  {plant.status === 'maintenance' && <Settings className="w-3 h-3" />}
                  {plant.status.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Production</p>
                  <p className="text-white font-semibold">{plant.metrics.production}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Efficiency</p>
                  <p className="text-white font-semibold">{plant.metrics.efficiency}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Quality</p>
                  <p className="text-white font-semibold">{plant.metrics.quality}%</p>
                </div>
                <div>
                  <p className="text-gray-400">Uptime</p>
                  <p className="text-white font-semibold">{plant.metrics.uptime}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          Recent System Activity
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-500/30 rounded">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <div className="flex-1">
              <p className="text-white text-sm">Database backup completed successfully</p>
              <p className="text-gray-400 text-xs">Production Database - 2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            <div className="flex-1">
              <p className="text-white text-sm">Oracle ERP integration experiencing delays</p>
              <p className="text-gray-400 text-xs">TMMC Cambridge - 3 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-500/30 rounded">
            <XCircle className="w-4 h-4 text-red-400" />
            <div className="flex-1">
              <p className="text-white text-sm">DELMIA MES connection failed</p>
              <p className="text-gray-400 text-xs">TMMF Valenciennes - 5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlantsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-400" />
            Plant Locations & Multi-Tenant Configuration
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add Plant
          </button>
        </div>
        
        <div className="space-y-4">
          {plantLocations.map((plant) => (
            <div key={plant.id} className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="w-6 h-6 text-blue-400" />
                    <h4 className="text-xl font-semibold text-white">{plant.name}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(plant.status)}`}>
                      {plant.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {plant.status === 'maintenance' && <Settings className="w-3 h-3" />}
                      {plant.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Location Info</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          {plant.location}
                        </p>
                        <p className="text-gray-400">Timezone: {plant.timezone}</p>
                        <p className="text-gray-400">Established: {plant.established}</p>
                        <p className="text-gray-400">Type: {plant.type}</p>
                        <p className="text-gray-400">Hours: {plant.operatingHours}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Operations</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Capacity: {plant.capacity.toLocaleString()} units/year</p>
                        <p className="text-white">Employees: {plant.employees}</p>
                        <p className="text-white">Databases: {plant.systems.databases}</p>
                        <p className="text-white">Integrations: {plant.systems.integrations}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Contact</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white flex items-center gap-2">
                          <User className="w-3 h-3 text-gray-400" />
                          {plant.contact.manager}
                        </p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <Mail className="w-3 h-3" />
                          {plant.contact.email}
                        </p>
                        <p className="text-gray-400 flex items-center gap-2">
                          <Phone className="w-3 h-3" />
                          {plant.contact.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">System Integration</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">ERP System:</span>
                          <span className="text-white">{plant.systems.erp}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">MES System:</span>
                          <span className="text-white">{plant.systems.mes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">SCADA System:</span>
                          <span className="text-white">{plant.systems.scada}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Performance Metrics</h5>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Production:</span>
                          <span className={`font-semibold ${plant.metrics.production > 90 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {plant.metrics.production}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Efficiency:</span>
                          <span className={`font-semibold ${plant.metrics.efficiency > 85 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {plant.metrics.efficiency}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Quality:</span>
                          <span className={`font-semibold ${plant.metrics.quality > 95 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {plant.metrics.quality}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Uptime:</span>
                          <span className={`font-semibold ${plant.metrics.uptime > 95 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {plant.metrics.uptime}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="View Details">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors" title="Edit Plant">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors" title="Configure">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2 pt-4 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Manage Users
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  System Health
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  Data Migration
                </button>
                <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                  Backup & Restore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Network className="w-5 h-5 text-green-400" />
            Partner Integrations & API Connections
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add Integration
          </button>
        </div>
        
        <div className="space-y-4">
          {partnerIntegrations.map((integration) => (
            <div key={integration.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Network className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold text-white">{integration.name}</h4>
                    <span className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {integration.type}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(integration.status)}`}>
                      {integration.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {integration.status === 'warning' && <AlertTriangle className="w-3 h-3" />}
                      {integration.status === 'error' && <XCircle className="w-3 h-3" />}
                      {integration.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Connection Details</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Partner: {integration.partner}</p>
                        <p className="text-gray-400">Version: {integration.version}</p>
                        <p className="text-gray-400">Protocol: {integration.protocol}</p>
                        <p className="text-gray-400">Auth: {integration.authentication}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Performance</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Health: <span className={getHealthColor(integration.healthScore)}>{integration.healthScore}%</span></p>
                        <p className="text-gray-400">Response: {integration.avgResponseTime}ms</p>
                        <p className="text-gray-400">Error Rate: {integration.errorRate}%</p>
                        <p className="text-gray-400">Sync: {integration.syncFrequency}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Data & Plants</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Last Sync: {integration.lastSync}</p>
                        <p className="text-gray-400">Plants: {integration.plants.length}</p>
                        <div className="mt-2">
                          <p className="text-gray-400 text-xs mb-1">Data Types:</p>
                          <div className="flex flex-wrap gap-1">
                            {integration.dataTypes.map((type, idx) => (
                              <span key={idx} className="px-1 py-0.5 bg-green-900/30 text-green-300 rounded text-xs">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded p-2 mb-3">
                    <p className="text-gray-400 text-xs mb-1">Endpoint:</p>
                    <p className="text-white font-mono text-sm">{integration.endpoint}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="Test Connection">
                    <Zap className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors" title="Configure">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors" title="View Logs">
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Test Connection
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Sync Now
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  View Mapping
                </button>
                <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                  Error Logs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDatabasesTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-yellow-400" />
            Database Connections & Management
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            Add Database
          </button>
        </div>
        
        <div className="space-y-4">
          {databaseConnections.map((db) => (
            <div key={db.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-yellow-400" />
                    <h4 className="font-semibold text-white">{db.name}</h4>
                    <span className="px-2 py-1 bg-yellow-900/30 text-yellow-300 rounded text-xs">
                      {db.type}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(db.status)}`}>
                      {db.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {db.status === 'warning' && <AlertTriangle className="w-3 h-3" />}
                      {db.status === 'error' && <XCircle className="w-3 h-3" />}
                      {db.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Connection</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white font-mono">{db.host}:{db.port}</p>
                        <p className="text-gray-400">DB: {db.database}</p>
                        <p className="text-gray-400">Version: {db.version}</p>
                        <p className="text-gray-400">Size: {db.size}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Performance</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Uptime: {db.uptime}%</p>
                        <p className="text-gray-400">Response: {db.avgResponseTime}ms</p>
                        <p className="text-gray-400">Replication: {db.replication}</p>
                        <p className="text-gray-400">Encryption: {db.encryption}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Connections</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Active: {db.activeConnections}</p>
                        <p className="text-gray-400">Pool: {db.connectionPool}</p>
                        <p className="text-gray-400">Max: {db.maxConnections}</p>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <div 
                            className="bg-yellow-500 h-2 rounded-full" 
                            style={{ width: `${(db.activeConnections / db.maxConnections) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-gray-400 text-sm font-semibold mb-2">Backup</h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-white">Last: {db.lastBackup}</p>
                        <p className="text-gray-400">Frequency: {db.backupFrequency}</p>
                        <p className="text-gray-400">Plants: {db.plants.length}</p>
                        <div className="mt-1">
                          <div className="flex flex-wrap gap-1">
                            {db.plants.slice(0, 2).map((plant, idx) => (
                              <span key={idx} className="px-1 py-0.5 bg-blue-900/30 text-blue-300 rounded text-xs">
                                {plant}
                              </span>
                            ))}
                            {db.plants.length > 2 && (
                              <span className="px-1 py-0.5 bg-gray-700 text-gray-300 rounded text-xs">
                                +{db.plants.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="Test Connection">
                    <Zap className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors" title="Configure">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors" title="Backup Now">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2 pt-3 border-t border-gray-700/50">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Query Console
                </button>
                <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                  Backup Now
                </button>
                <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                  Monitor Performance
                </button>
                <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                  Maintenance Mode
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'System Overview', icon: BarChart3 },
    { id: 'plants', name: 'Plant Locations', icon: Building },
    { id: 'integrations', name: 'Partner Integrations', icon: Network },
    { id: 'databases', name: 'Database Connections', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>System</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Configuration</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              System Configuration
            </h1>
            <p className="text-gray-400 mt-2">Multi-tenant plant management, partner integrations, and database connections</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              className={`p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors ${refreshing ? 'animate-spin' : ''}`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Config
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Settings className="w-4 h-4" />
              System Settings
            </button>
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
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'plants' && renderPlantsTab()}
        {activeTab === 'integrations' && renderIntegrationsTab()}
        {activeTab === 'databases' && renderDatabasesTab()}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Active Plants: {systemMetrics.activePlants}/{systemMetrics.totalPlants}
            </span>
            <span className="text-gray-400">
              System Uptime: {systemMetrics.systemUptime}%
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

export default SystemConfigurationDashboard;