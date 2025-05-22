import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users, 
  Package, 
  TrendingUp, 
  TrendingDown,
  Wrench, 
  Target, 
  Calendar, 
  MapPin, 
  Shield, 
  Zap,
  ChevronRight,
  Filter,
  Search,
  RefreshCw,
  Download,
  Settings,
  Eye,
  Play,
  User,
  Truck,
  Calculator,
  BarChart3,
  Activity,
  Star,
  Award
} from 'lucide-react';

const MaintenanceRecommendations = () => {
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample maintenance recommendations data
  const recommendations = [
    {
      id: 'REC-001',
      equipment: 'Kawasaki Robot #1',
      component: 'Joint J2 Motor',
      location: 'Body Side Weld Station',
      issue: 'Bearing degradation detected',
      priority: 'critical',
      riskScore: 95,
      costImpact: 25400,
      timeToFailure: '5-8 days',
      confidence: 92.5,
      recommendedAction: 'Replace motor assembly',
      estimatedDuration: '4 hours',
      requiredSkills: ['Robotics Technician Level 3', 'Electrical Systems'],
      partsNeeded: [
        { part: 'Motor Assembly JT-2400', qty: 1, available: true, cost: 8500 },
        { part: 'Bearing Kit BK-120', qty: 1, available: true, cost: 350 },
        { part: 'Gasket Set GS-45', qty: 1, available: false, cost: 75, leadTime: '2 days' }
      ],
      bundleOpportunities: ['Calibrate Joint J1', 'Replace Cable Harness'],
      roi: {
        preventionCost: 9200,
        failureCost: 45000,
        savings: 35800,
        roiPercentage: 289
      },
      assignedTechnician: null,
      status: 'pending'
    },
    {
      id: 'REC-002',
      equipment: 'Weld Controller #3',
      component: 'Power Supply Unit',
      location: 'Quarter Panel Station',
      issue: 'Voltage fluctuations increasing',
      priority: 'high',
      riskScore: 78,
      costImpact: 15200,
      timeToFailure: '15-20 days',
      confidence: 87.3,
      recommendedAction: 'Replace capacitor bank',
      estimatedDuration: '3 hours',
      requiredSkills: ['Electrical Technician Level 2', 'Welding Systems'],
      partsNeeded: [
        { part: 'Capacitor Bank CB-850', qty: 1, available: true, cost: 2400 },
        { part: 'Filter Module FM-34', qty: 2, available: true, cost: 180 }
      ],
      bundleOpportunities: ['Clean cooling system', 'Update firmware'],
      roi: {
        preventionCost: 2800,
        failureCost: 18500,
        savings: 15700,
        roiPercentage: 461
      },
      assignedTechnician: 'Mike Johnson',
      status: 'scheduled'
    },
    {
      id: 'REC-003',
      equipment: 'Vision System',
      component: 'Image Sensor Array',
      location: 'Quality Inspection Station',
      issue: 'Processing latency increasing',
      priority: 'medium',
      riskScore: 45,
      costImpact: 8900,
      timeToFailure: '30-45 days',
      confidence: 74.8,
      recommendedAction: 'Clean sensor array and update calibration',
      estimatedDuration: '2 hours',
      requiredSkills: ['Vision Systems Technician', 'Calibration Specialist'],
      partsNeeded: [
        { part: 'Cleaning Kit CK-VS', qty: 1, available: true, cost: 85 },
        { part: 'Calibration Target CT-12', qty: 1, available: true, cost: 120 }
      ],
      bundleOpportunities: ['Replace LED array', 'Update software'],
      roi: {
        preventionCost: 350,
        failureCost: 12000,
        savings: 11650,
        roiPercentage: 3229
      },
      assignedTechnician: 'Sarah Kim',
      status: 'in-progress'
    }
  ];

  // Technician data with skills and availability
  const technicians = [
    {
      id: 'TECH-001',
      name: 'Mike Johnson',
      skills: ['Robotics Technician Level 3', 'Electrical Systems', 'Welding Systems'],
      availability: 'Available',
      currentWorkload: 2,
      maxWorkload: 4,
      efficiency: 95,
      location: 'Building A'
    },
    {
      id: 'TECH-002',
      name: 'Sarah Kim',
      skills: ['Vision Systems Technician', 'Calibration Specialist', 'Software Updates'],
      availability: 'Busy',
      currentWorkload: 3,
      maxWorkload: 3,
      efficiency: 92,
      location: 'Building B'
    },
    {
      id: 'TECH-003',
      name: 'David Rodriguez',
      skills: ['Mechanical Technician Level 2', 'Motor Controls', 'Hydraulic Systems'],
      availability: 'Available',
      currentWorkload: 1,
      maxWorkload: 4,
      efficiency: 88,
      location: 'Building A'
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
      case 'scheduled': return 'text-purple-400 bg-purple-900/20 border-purple-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getRiskLevel = (score) => {
    if (score >= 80) return { level: 'Critical', color: 'text-red-400' };
    if (score >= 60) return { level: 'High', color: 'text-orange-400' };
    if (score >= 40) return { level: 'Medium', color: 'text-yellow-400' };
    return { level: 'Low', color: 'text-green-400' };
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available': return 'text-green-400';
      case 'Busy': return 'text-yellow-400';
      case 'Unavailable': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const filteredRecommendations = recommendations.filter(rec => {
    const matchesPriority = selectedPriority === 'all' || rec.priority === selectedPriority;
    const matchesSearch = rec.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rec.component.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rec.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPriority && matchesSearch;
  });

  // Calculate totals
  const totalSavings = recommendations.reduce((sum, rec) => sum + rec.roi.savings, 0);
  const totalPreventionCost = recommendations.reduce((sum, rec) => sum + rec.roi.preventionCost, 0);
  const avgROI = recommendations.reduce((sum, rec) => sum + rec.roi.roiPercentage, 0) / recommendations.length;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Maintenance</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Predictive</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Recommendations</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Predictive Maintenance Recommendations
            </h1>
            <p className="text-gray-400 mt-2">AI-driven action prioritization and resource optimization</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Play className="w-4 h-4" />
              Execute Selected
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Plan
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Recommendations</p>
              <p className="text-2xl font-bold text-white">{recommendations.length}</p>
            </div>
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Potential Savings</p>
              <p className="text-2xl font-bold text-green-400">${totalSavings.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Investment Required</p>
              <p className="text-2xl font-bold text-yellow-400">${totalPreventionCost.toLocaleString()}</p>
            </div>
            <Calculator className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average ROI</p>
              <p className="text-2xl font-bold text-purple-400">{avgROI.toFixed(0)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search equipment, components, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'critical', 'high', 'medium', 'low'].map((priority) => (
            <button
              key={priority}
              onClick={() => setSelectedPriority(priority)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                selectedPriority === priority
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50'
              }`}
            >
              {priority}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recommendations List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Prioritized Recommendations</h2>
          
          {filteredRecommendations.map((rec) => {
            const riskLevel = getRiskLevel(rec.riskScore);
            const partsAvailable = rec.partsNeeded.every(part => part.available);
            
            return (
              <div key={rec.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{rec.equipment}</h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getPriorityColor(rec.priority)}`}>
                        <AlertTriangle className="w-3 h-3" />
                        {rec.priority.toUpperCase()}
                      </span>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(rec.status)}`}>
                        {rec.status === 'completed' ? <CheckCircle className="w-3 h-3" /> : 
                         rec.status === 'in-progress' ? <Activity className="w-3 h-3" /> : 
                         rec.status === 'scheduled' ? <Calendar className="w-3 h-3" /> : 
                         <Clock className="w-3 h-3" />}
                        {rec.status.toUpperCase().replace('-', ' ')}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-2">{rec.component} • {rec.location}</p>
                    <p className="text-white mb-3">{rec.issue}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-400">Risk Score</p>
                        <p className={`font-bold ${riskLevel.color}`}>{rec.riskScore}/100</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Time to Failure</p>
                        <p className="text-white">{rec.timeToFailure}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Confidence</p>
                        <p className="text-white">{rec.confidence}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400">ROI</p>
                        <p className="text-green-400 font-bold">{rec.roi.roiPercentage}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Details */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-white mb-2">Recommended Action</h4>
                  <p className="text-gray-300 mb-2">{rec.recommendedAction}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>Duration: {rec.estimatedDuration}</span>
                    <span>Skills: {rec.requiredSkills.join(', ')}</span>
                  </div>
                </div>

                {/* Parts & Resources */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Parts Required
                    </h5>
                    <div className="space-y-2">
                      {rec.partsNeeded.map((part, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <div>
                            <p className="text-white">{part.part}</p>
                            <p className="text-gray-400">{part.qty}x - ${part.cost}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {part.available ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-400 text-xs">{part.leadTime}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Resource Assignment
                    </h5>
                    {rec.assignedTechnician ? (
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4 text-blue-400" />
                        <span className="text-white">{rec.assignedTechnician}</span>
                      </div>
                    ) : (
                      <div className="text-sm">
                        <p className="text-gray-400">Available Technicians:</p>
                        {technicians
                          .filter(tech => rec.requiredSkills.some(skill => tech.skills.includes(skill)))
                          .slice(0, 2)
                          .map((tech, index) => (
                            <div key={index} className="flex items-center justify-between mt-1">
                              <span className="text-white">{tech.name}</span>
                              <span className={`text-xs ${getAvailabilityColor(tech.availability)}`}>
                                {tech.availability}
                              </span>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* ROI Analysis */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    ROI Analysis
                  </h5>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Prevention Cost</p>
                      <p className="text-yellow-400 font-semibold">${rec.roi.preventionCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Failure Cost</p>
                      <p className="text-red-400 font-semibold">${rec.roi.failureCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Potential Savings</p>
                      <p className="text-green-400 font-semibold">${rec.roi.savings.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">ROI</p>
                      <p className="text-green-400 font-semibold">{rec.roi.roiPercentage}%</p>
                    </div>
                  </div>
                </div>

                {/* Bundle Opportunities */}
                {rec.bundleOpportunities.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Bundle Opportunities
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {rec.bundleOpportunities.map((opportunity, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                          {opportunity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>ID: {rec.id}</span>
                    <span className={partsAvailable ? 'text-green-400' : 'text-yellow-400'}>
                      Parts: {partsAvailable ? 'Available' : 'Pending'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
                      View Details
                    </button>
                    {rec.status === 'pending' && (
                      <button className="px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
                        Schedule
                      </button>
                    )}
                    <button className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors text-sm">
                      Create Work Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          
          {/* Available Technicians */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              Available Technicians
            </h3>
            
            <div className="space-y-3">
              {technicians.map((tech) => (
                <div key={tech.id} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{tech.name}</span>
                    <span className={`text-sm ${getAvailabilityColor(tech.availability)}`}>
                      {tech.availability}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Workload: {tech.currentWorkload}/{tech.maxWorkload}
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                    <div
                      className={`h-1.5 rounded-full ${
                        tech.currentWorkload >= tech.maxWorkload ? 'bg-red-500' :
                        tech.currentWorkload > tech.maxWorkload * 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(tech.currentWorkload / tech.maxWorkload) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-white">{tech.efficiency}% efficiency</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              Cost Analysis
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Investment</span>
                <span className="text-yellow-400 font-semibold">${totalPreventionCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Potential Savings</span>
                <span className="text-green-400 font-semibold">${totalSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Net Benefit</span>
                <span className="text-green-400 font-bold">${(totalSavings - totalPreventionCost).toLocaleString()}</span>
              </div>
              <div className="pt-2 border-t border-gray-700/50">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Overall ROI</span>
                  <span className="text-green-400 font-bold text-lg">{avgROI.toFixed(0)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceRecommendations;