import React, { useState } from 'react';
import { Search, Filter, Plus, Wrench, Clock, AlertTriangle, CheckCircle, User, Calendar } from 'lucide-react';

const WorkOrdersPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample work order data
  const workOrders = [
    {
      id: 'WO-2025-001',
      title: 'Replace Hydraulic Pump - Line 3',
      equipment: 'Hydraulic Press #3',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'Mike Johnson',
      createdDate: '2025-05-20',
      dueDate: '2025-05-22',
      description: 'Hydraulic pump showing pressure drops. Replace main pump assembly.',
      estimatedHours: 4.5,
      completedHours: 2.0
    },
    {
      id: 'WO-2025-002',
      title: 'Calibrate Temperature Sensors',
      equipment: 'Furnace Control System',
      priority: 'medium',
      status: 'pending',
      assignedTo: 'Sarah Chen',
      createdDate: '2025-05-19',
      dueDate: '2025-05-23',
      description: 'Monthly calibration of temperature sensors in furnace control system.',
      estimatedHours: 2.0,
      completedHours: 0
    },
    {
      id: 'WO-2025-003',
      title: 'Emergency Repair - Conveyor Belt',
      equipment: 'Conveyor System A',
      priority: 'critical',
      status: 'pending',
      assignedTo: 'David Rodriguez',
      createdDate: '2025-05-21',
      dueDate: '2025-05-21',
      description: 'Conveyor belt motor failure causing production stoppage.',
      estimatedHours: 6.0,
      completedHours: 0
    },
    {
      id: 'WO-2025-004',
      title: 'Lubrication Service - Bearings',
      equipment: 'Packaging Machine #2',
      priority: 'low',
      status: 'completed',
      assignedTo: 'Alex Thompson',
      createdDate: '2025-05-18',
      dueDate: '2025-05-20',
      description: 'Routine lubrication of main drive bearings.',
      estimatedHours: 1.5,
      completedHours: 1.5
    },
    {
      id: 'WO-2025-005',
      title: 'Replace Safety Sensors',
      equipment: 'Robot Cell #1',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'Mike Johnson',
      createdDate: '2025-05-20',
      dueDate: '2025-05-22',
      description: 'Safety sensor malfunction detected during routine inspection.',
      estimatedHours: 3.0,
      completedHours: 1.5
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'high': return 'text-orange-400 bg-orange-900/20 border-orange-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'in-progress': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Wrench className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredOrders = workOrders.filter(order => {
    const matchesFilter = selectedFilter === 'all' || order.status === selectedFilter;
    const matchesSearch = order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work Orders
            </h1>
            <p className="text-gray-400 mt-2">Manage maintenance work orders and assignments</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            New Work Order
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Active</p>
                <p className="text-2xl font-bold text-white">{workOrders.filter(wo => wo.status !== 'completed').length}</p>
              </div>
              <Wrench className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Critical</p>
                <p className="text-2xl font-bold text-red-400">{workOrders.filter(wo => wo.priority === 'critical').length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">In Progress</p>
                <p className="text-2xl font-bold text-blue-400">{workOrders.filter(wo => wo.status === 'in-progress').length}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-400">{workOrders.filter(wo => wo.status === 'completed').length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search work orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'pending', 'in-progress', 'completed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                {filter === 'all' ? 'All' : filter.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Work Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">{order.title}</h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getPriorityColor(order.priority)}`}>
                    {order.priority.toUpperCase()}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{order.description}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Wrench className="w-4 h-4" />
                    {order.equipment}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {order.assignedTo}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Due: {order.dueDate}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Progress</p>
                <p className="text-lg font-semibold text-white">
                  {order.completedHours}/{order.estimatedHours}h
                </p>
                <div className="w-24 bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(order.completedHours / order.estimatedHours) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>ID: {order.id}</span>
                <span>Created: {order.createdDate}</span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                  View Details
                </button>
                {order.status === 'pending' && (
                  <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                    Start Work
                  </button>
                )}
                {order.status === 'in-progress' && (
                  <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                    Update Progress
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <Wrench className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">No work orders found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default WorkOrdersPage;