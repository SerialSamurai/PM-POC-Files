import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Wrench, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  FileText, 
  User, 
  Settings, 
  Plus, 
  Edit, 
  Eye, 
  Download,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  Filter,
  Search,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Clipboard,
  Target,
  BarChart3,
  Activity,
  Timer,
  Bell,
  AlertCircle,
  Zap,

  HardDrive,
  Cpu,
  Thermometer
} from 'lucide-react';

const PreventiveMaintenanceDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState('month');
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // KPI Metrics
  const kpiMetrics = {
    totalTasks: 156,
    completedTasks: 142,
    overdueTasks: 8,
    complianceRate: 94.2,
    plannedDowntime: 12.5,
    costSavings: 45600,
    mtbf: 847,
    technicians: 12
  };

  // Scheduled Maintenance Tasks
  const maintenanceTasks = [
    {
      id: 'PM-2025-001',
      title: 'Kawasaki Robot #1 - Joint Calibration',
      equipment: 'Kawasaki BX200L Station 1',
      type: 'Mechanical',
      priority: 'high',
      status: 'scheduled',
      dueDate: '2025-05-22',
      dueTime: '08:00',
      estimatedDuration: 4,
      assignedTo: 'John Martinez',
      technicianId: 'TECH-001',
      skills: ['Robot Programming', 'Mechanical'],
      compliance: 'ISO 9001',
      lastCompleted: '2025-04-22',
      frequency: 'Monthly',
      parts: ['Calibration Kit', 'Lubricant'],
      tools: ['Teach Pendant', 'Multimeter'],
      cost: 450,
      criticality: 'critical'
    },
    {
      id: 'PM-2025-002',
      title: 'Weld Controller #3 - Filter Replacement',
      equipment: 'Weld Controller Unit 3',
      type: 'Electrical',
      priority: 'medium',
      status: 'in-progress',
      dueDate: '2025-05-21',
      dueTime: '14:00',
      estimatedDuration: 2,
      assignedTo: 'Sarah Kim',
      technicianId: 'TECH-002',
      skills: ['Electrical', 'Welding Systems'],
      compliance: 'OSHA',
      lastCompleted: '2025-02-21',
      frequency: 'Quarterly',
      parts: ['Air Filter', 'Gasket Set'],
      tools: ['Basic Tool Kit'],
      cost: 180,
      criticality: 'medium'
    },
    {
      id: 'PM-2025-003',
      title: 'Vision System - Camera Calibration',
      equipment: 'Vision Camera System #1',
      type: 'Optical',
      priority: 'low',
      status: 'completed',
      dueDate: '2025-05-20',
      dueTime: '10:00',
      estimatedDuration: 1.5,
      assignedTo: 'Mike Chen',
      technicianId: 'TECH-003',
      skills: ['Vision Systems', 'Optics'],
      compliance: 'ISO 14001',
      lastCompleted: '2025-05-20',
      frequency: 'Bi-weekly',
      parts: ['Calibration Target'],
      tools: ['Calibration Software'],
      cost: 120,
      criticality: 'low'
    },
    {
      id: 'PM-2025-004',
      title: 'PLC System - Backup & Health Check',
      equipment: 'Allen-Bradley PLC Main',
      type: 'Software',
      priority: 'high',
      status: 'overdue',
      dueDate: '2025-05-19',
      dueTime: '16:00',
      estimatedDuration: 3,
      assignedTo: 'Lisa Rodriguez',
      technicianId: 'TECH-004',
      skills: ['PLC Programming', 'Controls'],
      compliance: 'Internal Policy',
      lastCompleted: '2025-04-19',
      frequency: 'Monthly',
      parts: ['Memory Card'],
      tools: ['Programming Software', 'Laptop'],
      cost: 200,
      criticality: 'critical'
    },
    {
      id: 'PM-2025-005',
      title: 'Cooling System - Coolant Change',
      equipment: 'Central Cooling Unit',
      type: 'Mechanical',
      priority: 'medium',
      status: 'scheduled',
      dueDate: '2025-05-23',
      dueTime: '12:00',
      estimatedDuration: 6,
      assignedTo: 'David Park',
      technicianId: 'TECH-005',
      skills: ['HVAC', 'Mechanical'],
      compliance: 'Environmental',
      lastCompleted: '2025-03-23',
      frequency: 'Bi-monthly',
      parts: ['Coolant', 'Filter', 'Seals'],
      tools: ['Pump', 'Testing Kit'],
      cost: 800,
      criticality: 'medium'
    }
  ];

  // Technician Data
  const technicians = [
    {
      id: 'TECH-001',
      name: 'John Martinez',
      skills: ['Robot Programming', 'Mechanical', 'Electrical'],
      certifications: ['Kawasaki Certified', 'Safety Level 2'],
      experience: 8,
      rating: 4.8,
      availability: 'available',
      currentTasks: 2,
      phone: '(555) 123-4567',
      email: 'j.martinez@mtmus.com',
      shift: 'Day',
      location: 'Body Shop'
    },
    {
      id: 'TECH-002',
      name: 'Sarah Kim',
      skills: ['Electrical', 'Welding Systems', 'Controls'],
      certifications: ['Electrical Safety', 'Welding Inspector'],
      experience: 6,
      rating: 4.9,
      availability: 'busy',
      currentTasks: 3,
      phone: '(555) 234-5678',
      email: 's.kim@mtmus.com',
      shift: 'Day',
      location: 'Weld Shop'
    },
    {
      id: 'TECH-003',
      name: 'Mike Chen',
      skills: ['Vision Systems', 'Optics', 'Software'],
      certifications: ['Vision Systems Expert', 'Quality Inspector'],
      experience: 5,
      rating: 4.7,
      availability: 'available',
      currentTasks: 1,
      phone: '(555) 345-6789',
      email: 'm.chen@mtmus.com',
      shift: 'Day',
      location: 'Quality Lab'
    },
    {
      id: 'TECH-004',
      name: 'Lisa Rodriguez',
      skills: ['PLC Programming', 'Controls', 'HMI'],
      certifications: ['Rockwell Certified', 'Controls Engineer'],
      experience: 10,
      rating: 4.9,
      availability: 'busy',
      currentTasks: 4,
      phone: '(555) 456-7890',
      email: 'l.rodriguez@mtmus.com',
      shift: 'Day',
      location: 'Control Room'
    },
    {
      id: 'TECH-005',
      name: 'David Park',
      skills: ['HVAC', 'Mechanical', 'Piping'],
      certifications: ['HVAC Certified', 'Mechanical Systems'],
      experience: 12,
      rating: 4.6,
      availability: 'available',
      currentTasks: 2,
      phone: '(555) 567-8901',
      email: 'd.park@mtmus.com',
      shift: 'Day',
      location: 'Utilities'
    }
  ];

  // Compliance tracking
  const complianceData = {
    categories: [
      { name: 'ISO 9001', completed: 45, total: 48, percentage: 93.8, overdue: 3 },
      { name: 'OSHA', completed: 23, total: 25, percentage: 92.0, overdue: 2 },
      { name: 'ISO 14001', completed: 18, total: 19, percentage: 94.7, overdue: 1 },
      { name: 'Internal Policy', completed: 67, total: 72, percentage: 93.1, overdue: 5 },
      { name: 'Environmental', completed: 12, total: 12, percentage: 100.0, overdue: 0 }
    ],
    auditDates: {
      lastAudit: '2025-03-15',
      nextAudit: '2025-06-15',
      findings: 3,
      resolved: 2
    }
  };

  // Resource planning data
  const resourceData = {
    parts: [
      { name: 'Air Filters', inStock: 24, required: 12, cost: 45, supplier: 'FilterCorp' },
      { name: 'Lubricants', inStock: 8, required: 15, cost: 120, supplier: 'LubeTech' },
      { name: 'Seals & Gaskets', inStock: 45, required: 20, cost: 25, supplier: 'SealMaster' },
      { name: 'Calibration Kits', inStock: 3, required: 5, cost: 890, supplier: 'CalibrationPro' },
      { name: 'Memory Cards', inStock: 12, required: 8, cost: 75, supplier: 'TechSupply' }
    ],
    budget: {
      allocated: 125000,
      spent: 89500,
      remaining: 35500,
      projected: 118900
    },
    utilization: {
      technicians: 78.5,
      equipment: 85.2,
      tools: 67.8
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'in-progress': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'scheduled': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'overdue': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'busy': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'offline': return 'text-red-400 bg-red-900/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Upcoming Tasks */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-400" />
          Upcoming Maintenance Tasks
        </h3>
        
        <div className="space-y-4">
          {maintenanceTasks.filter(task => ['scheduled', 'overdue'].includes(task.status)).map((task) => (
            <div key={task.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-white">{task.title}</h4>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(task.status)}`}>
                      {task.status === 'overdue' && <AlertTriangle className="w-3 h-3" />}
                      {task.status === 'scheduled' && <Clock className="w-3 h-3" />}
                      {task.status.toUpperCase()}
                    </span>
                    <span className={`text-sm font-semibold ${getPriorityColor(task.priority)}`}>
                      {task.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{task.equipment}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Due Date</p>
                      <p className="text-white">{task.dueDate} {task.dueTime}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Assigned To</p>
                      <p className="text-white">{task.assignedTo}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p className="text-white">{task.estimatedDuration}h</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Cost</p>
                      <p className="text-white">${task.cost}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                <div className="flex gap-2">
                  {task.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                    Start Task
                  </button>
                  <button className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded hover:bg-yellow-600/30 transition-colors text-sm">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Task Distribution</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Scheduled</span>
              <span className="text-yellow-400 font-semibold">{maintenanceTasks.filter(t => t.status === 'scheduled').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">In Progress</span>
              <span className="text-blue-400 font-semibold">{maintenanceTasks.filter(t => t.status === 'in-progress').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Completed</span>
              <span className="text-green-400 font-semibold">{maintenanceTasks.filter(t => t.status === 'completed').length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Overdue</span>
              <span className="text-red-400 font-semibold">{maintenanceTasks.filter(t => t.status === 'overdue').length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Resource Utilization</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Technicians</span>
                <span className="text-white">{resourceData.utilization.technicians}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${resourceData.utilization.technicians}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Equipment</span>
                <span className="text-white">{resourceData.utilization.equipment}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${resourceData.utilization.equipment}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Tools</span>
                <span className="text-white">{resourceData.utilization.tools}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${resourceData.utilization.tools}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCalendarTab = () => (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-400" />
            Maintenance Calendar
          </h3>
          <div className="flex items-center gap-3">
            <select 
              value={calendarView} 
              onChange={(e) => setCalendarView(e.target.value)}
              className="px-3 py-1 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
            >
              <option value="month">Month View</option>
              <option value="week">Week View</option>
              <option value="day">Day View</option>
            </select>
            <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h4 className="text-xl font-semibold text-white">
            {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h4>
          <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-2 text-center text-gray-400 font-semibold bg-gray-800/50">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {Array.from({ length: 35 }, (_, i) => {
            const date = new Date(2025, 4, i - 10); // May 2025 with padding
            const isCurrentMonth = date.getMonth() === 4;
            const tasksForDay = maintenanceTasks.filter(task => 
              new Date(task.dueDate).toDateString() === date.toDateString()
            );
            
            return (
              <div 
                key={i} 
                className={`p-2 min-h-24 border border-gray-700/50 ${
                  isCurrentMonth ? 'bg-gray-800/30' : 'bg-gray-900/30'
                } hover:bg-gray-700/50 transition-colors cursor-pointer`}
              >
                <div className={`text-sm font-semibold mb-1 ${
                  isCurrentMonth ? 'text-white' : 'text-gray-500'
                }`}>
                  {date.getDate()}
                </div>
                <div className="space-y-1">
                  {tasksForDay.slice(0, 2).map((task) => (
                    <div 
                      key={task.id} 
                      className={`px-1 py-0.5 rounded text-xs truncate ${getStatusColor(task.status)}`}
                      title={task.title}
                    >
                      {task.title.substring(0, 20)}...
                    </div>
                  ))}
                  {tasksForDay.length > 2 && (
                    <div className="text-xs text-gray-400">
                      +{tasksForDay.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderAssignmentsTab = () => (
    <div className="space-y-6">
      {/* Technician Assignments */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-green-400" />
          Technician Assignments
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {technicians.map((tech) => (
            <div key={tech.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 rounded-full p-2">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{tech.name}</h4>
                    <p className="text-gray-400 text-sm">{tech.shift} Shift - {tech.location}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getAvailabilityColor(tech.availability)}`}>
                  {tech.availability.toUpperCase()}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-400">Experience</p>
                  <p className="text-white">{tech.experience} years</p>
                </div>
                <div>
                  <p className="text-gray-400">Rating</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white">{tech.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">Current Tasks</p>
                  <p className="text-white">{tech.currentTasks}</p>
                </div>
                <div>
                  <p className="text-gray-400">Contact</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-gray-400" />
                    <Mail className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-400 text-sm mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {tech.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-3">
                <p className="text-gray-400 text-sm mb-1">Certifications:</p>
                <div className="flex flex-wrap gap-1">
                  {tech.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs">
                      <Award className="w-3 h-3 inline mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  Assign Task
                </button>
                <button className="flex-1 px-3 py-1 bg-gray-600/20 text-gray-400 rounded hover:bg-gray-600/30 transition-colors text-sm">
                  View Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComplianceTab = () => (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Compliance Tracking
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {complianceData.categories.map((category, idx) => (
            <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-white">{category.name}</h4>
                <span className={`text-sm font-bold ${
                  category.percentage >= 95 ? 'text-green-400' :
                  category.percentage >= 90 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {category.percentage.toFixed(1)}%
                </span>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{category.completed}/{category.total}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      category.percentage >= 95 ? 'bg-green-500' :
                      category.percentage >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
              
              {category.overdue > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400">{category.overdue} overdue items</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Audit Information */}
        <div className="bg-gray-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            Audit Status
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Last Audit</p>
              <p className="text-white">{complianceData.auditDates.lastAudit}</p>
            </div>
            <div>
              <p className="text-gray-400">Next Audit</p>
              <p className="text-yellow-400">{complianceData.auditDates.nextAudit}</p>
            </div>
            <div>
              <p className="text-gray-400">Findings</p>
              <p className="text-red-400">{complianceData.auditDates.findings}</p>
            </div>
            <div>
              <p className="text-gray-400">Resolved</p>
              <p className="text-green-400">{complianceData.auditDates.resolved}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResourcesTab = () => (
    <div className="space-y-6">
      {/* Parts Inventory */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-orange-400" />
          Parts Inventory
        </h3>
        
        <div className="space-y-3">
          {resourceData.parts.map((part, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div className="flex-1">
                <h4 className="font-semibold text-white">{part.name}</h4>
                <p className="text-gray-400 text-sm">Supplier: {part.supplier}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-400 text-sm">In Stock</p>
                  <p className={`font-semibold ${
                    part.inStock >= part.required ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {part.inStock}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Required</p>
                  <p className="text-white font-semibold">{part.required}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Unit Cost</p>
                  <p className="text-white font-semibold">${part.cost}</p>
                </div>
              </div>
              <div className="ml-4">
                {part.inStock < part.required && (
                  <button className="px-3 py-1 bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/30 transition-colors text-sm">
                    Order Parts
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            Budget Status
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Allocated</span>
              <span className="text-white font-semibold">${resourceData.budget.allocated.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Spent</span>
              <span className="text-red-400 font-semibold">${resourceData.budget.spent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Remaining</span>
              <span className="text-green-400 font-semibold">${resourceData.budget.remaining.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Projected</span>
              <span className="text-yellow-400 font-semibold">${resourceData.budget.projected.toLocaleString()}</span>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Budget Utilization</span>
                <span className="text-white">{((resourceData.budget.spent / resourceData.budget.allocated) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${(resourceData.budget.spent / resourceData.budget.allocated) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            Cost Savings
          </h3>
          
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-green-400">${kpiMetrics.costSavings.toLocaleString()}</p>
            <p className="text-gray-400 text-sm">Saved this quarter</p>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Prevented Failures</span>
              <span className="text-green-400">$28,400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Reduced Downtime</span>
              <span className="text-green-400">$12,800</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Energy Efficiency</span>
              <span className="text-green-400">$4,400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'calendar', name: 'Calendar', icon: Calendar },
    { id: 'assignments', name: 'Assignments', icon: Users },
    { id: 'compliance', name: 'Compliance', icon: Shield },
    { id: 'resources', name: 'Resources', icon: Package }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Maintenance</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Preventive Maintenance</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Preventive Maintenance
            </h1>
            <p className="text-gray-400 mt-2">Scheduled maintenance management and compliance tracking</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              Schedule Task
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Tasks</p>
              <p className="text-2xl font-bold text-white">{kpiMetrics.totalTasks}</p>
            </div>
            <Clipboard className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Compliance Rate</p>
              <p className="text-2xl font-bold text-green-400">{kpiMetrics.complianceRate}%</p>
            </div>
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">MTBF</p>
              <p className="text-2xl font-bold text-yellow-400">{kpiMetrics.mtbf}h</p>
            </div>
            <Timer className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Cost Savings</p>
              <p className="text-2xl font-bold text-green-400">${(kpiMetrics.costSavings/1000).toFixed(0)}K</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-400" />
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
        {activeTab === 'calendar' && renderCalendarTab()}
        {activeTab === 'assignments' && renderAssignmentsTab()}
        {activeTab === 'compliance' && renderComplianceTab()}
        {activeTab === 'resources' && renderResourcesTab()}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Overdue Tasks: {kpiMetrics.overdueTasks}
            </span>
            <span className="text-gray-400">
              Available Technicians: {technicians.filter(t => t.availability === 'available').length}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreventiveMaintenanceDashboard;