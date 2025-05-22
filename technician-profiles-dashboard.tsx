import React, { useState, useEffect } from 'react';
import { 
  User, 
  Award, 
  Shield, 
  Zap, 
  Wrench, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  FileText, 
  Calendar, 
  Activity, 
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  Eye,
  Edit,
  Download,
  RefreshCw,
  Users,
  Thermometer,
  Radio,
  HardDrive,
  Gauge,
  Battery,
  Network,
  Camera,
  Lightbulb,

  Headphones,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Building,
  Factory
} from 'lucide-react';

const TechnicianProfilesDashboard = () => {
  const [selectedTechnician, setSelectedTechnician] = useState('seth-graves');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Comprehensive technician profiles
  const technicians = {
    'seth-graves': {
      id: 'TECH-001',
      name: 'Seth Graves',
      title: 'Senior Robotics & Automation Specialist',
      avatar: 'SG',
      experience: 12,
      rating: 4.9,
      availability: 'available',
      shift: 'Day Shift (6:00 AM - 2:00 PM)',
      location: 'Body Shop - Robot Cell 1-4',
      phone: '(256) 555-0147',
      email: 's.graves@mtmus.com',
      radio: 'Channel 3',
      emergencyContact: 'Available 24/7',
      
      // Core Competencies
      primarySkills: [
        'Kawasaki Robot Programming & Calibration',
        'Advanced Path Planning & Optimization',
        'Robot Safety Systems',
        'Teach Pendant Programming',
        'Emergency Robot Recovery'
      ],
      
      // Training & Certifications
      certifications: [
        { name: 'Kawasaki Certified Technician Level 3', issuer: 'Kawasaki Robotics', expiry: '2026-08-15', status: 'active' },
        { name: 'FANUC Robot Programming', issuer: 'FANUC America', expiry: '2025-12-01', status: 'active' },
        { name: 'Robot Safety Certified', issuer: 'RIA (Robotic Industries Association)', expiry: '2025-09-30', status: 'active' },
        { name: 'Arc Welding Robot Specialist', issuer: 'AWS (American Welding Society)', expiry: '2026-03-15', status: 'active' },
        { name: 'Industrial Safety Level 4', issuer: 'MTMUS Safety Dept', expiry: '2025-07-01', status: 'active' }
      ],
      
      // Emergency Response Specializations
      emergencySpecializations: [
        {
          scenario: 'Robot Collision or Crash',
          priority: 'PRIMARY',
          description: 'Expert in collision recovery, axis realignment, and damage assessment',
          responseTime: '< 5 minutes',
          expertise: 'Can quickly assess structural damage, perform emergency calibration, and determine if robot is safe to restart'
        },
        {
          scenario: 'Robot Programming Errors/Runaway',
          priority: 'PRIMARY',
          description: 'Specialist in emergency stops, program debugging, and safe recovery procedures',
          responseTime: '< 3 minutes',
          expertise: 'Can remotely access robot controllers, implement emergency stops, and restore safe operation'
        },
        {
          scenario: 'Weld Quality Failures',
          priority: 'SECONDARY',
          description: 'Can adjust robot paths and weld parameters to restore quality',
          responseTime: '< 10 minutes',
          expertise: 'Deep understanding of weld path optimization and parameter tuning'
        }
      ],
      
      // Recent Training
      recentTraining: [
        { course: 'Advanced Robot Collision Recovery', date: '2025-04-15', hours: 16 },
        { course: 'Predictive Maintenance for Robotics', date: '2025-03-22', hours: 8 },
        { course: 'Emergency Response Protocols', date: '2025-02-10', hours: 4 }
      ],
      
      // Performance Metrics
      performance: {
        responseTime: 4.2, // average minutes
        completionRate: 98.5,
        qualityScore: 96.8,
        safetyRecord: 'Zero incidents in 18 months',
        customerSatisfaction: 4.9,
        tasksCompleted: 342,
        emergencyCallouts: 28
      },
      
      // Background & Experience
      background: {
        yearsAtMTMUS: 8,
        previousExperience: 'Ford Motor Company - Robotics Technician (4 years)',
        education: 'Associate Degree in Industrial Automation - Calhoun Community College',
        specialProjects: [
          'Led robot cell optimization project saving 15% cycle time',
          'Implemented predictive maintenance program for robot fleet',
          'Trained 12 junior technicians on robot safety procedures'
        ]
      }
    },
    
    'will-sutton': {
      id: 'TECH-002',
      name: 'Will Sutton',
      title: 'Master Electrician & Controls Engineer',
      avatar: 'WS',
      experience: 15,
      rating: 4.8,
      availability: 'available',
      shift: 'Afternoon Shift (2:00 PM - 10:00 PM)',
      location: 'Main Electrical Room & Control Panels',
      phone: '(256) 555-0298',
      email: 'w.sutton@mtmus.com',
      radio: 'Channel 1 (Emergency)',
      emergencyContact: 'On-call 24/7 for electrical emergencies',
      
      primarySkills: [
        'Allen-Bradley PLC Programming & Troubleshooting',
        'Industrial Power Systems (480V/220V/110V)',
        'Motor Control Centers & Variable Frequency Drives',
        'Safety System Integration & LOTO Procedures',
        'Emergency Electrical System Recovery'
      ],
      
      certifications: [
        { name: 'Master Electrician License - Alabama', issuer: 'State of Alabama', expiry: '2026-12-31', status: 'active' },
        { name: 'Allen-Bradley Certified Technician', issuer: 'Rockwell Automation', expiry: '2025-11-15', status: 'active' },
        { name: 'Arc Flash Safety Qualified', issuer: 'NFPA 70E', expiry: '2025-08-20', status: 'active' },
        { name: 'Industrial Power Quality Specialist', issuer: 'IEEE', expiry: '2026-01-10', status: 'active' },
        { name: 'OSHA 30-Hour General Industry', issuer: 'OSHA', expiry: 'Lifetime', status: 'active' }
      ],
      
      emergencySpecializations: [
        {
          scenario: 'Power Outages or Electrical Failures',
          priority: 'PRIMARY',
          description: 'Expert in emergency power restoration and electrical system diagnosis',
          responseTime: '< 2 minutes',
          expertise: 'Can quickly isolate faults, restore power to critical systems, and implement temporary solutions'
        },
        {
          scenario: 'PLC System Failures',
          priority: 'PRIMARY',
          description: 'Specialist in PLC troubleshooting, program recovery, and system restoration',
          responseTime: '< 5 minutes',
          expertise: 'Can remotely diagnose PLC issues, restore from backups, and implement emergency bypasses'
        },
        {
          scenario: 'Motor/Drive Failures',
          priority: 'PRIMARY',
          description: 'Expert in motor control systems and variable frequency drive repair',
          responseTime: '< 8 minutes',
          expertise: 'Can quickly swap drives, adjust parameters, and restore motor operations'
        },
        {
          scenario: 'Safety System Malfunctions',
          priority: 'PRIMARY',
          description: 'Certified in safety system troubleshooting and emergency overrides',
          responseTime: '< 3 minutes',
          expertise: 'Can safely bypass failed safety systems while maintaining personnel protection'
        }
      ],
      
      recentTraining: [
        { course: 'Advanced PLC Troubleshooting', date: '2025-04-08', hours: 24 },
        { course: 'Industrial Cybersecurity', date: '2025-03-15', hours: 16 },
        { course: 'Emergency Electrical Response', date: '2025-01-20', hours: 12 }
      ],
      
      performance: {
        responseTime: 3.1,
        completionRate: 99.2,
        qualityScore: 98.1,
        safetyRecord: 'Zero electrical incidents in 24 months',
        customerSatisfaction: 4.8,
        tasksCompleted: 428,
        emergencyCallouts: 45
      },
      
      background: {
        yearsAtMTMUS: 10,
        previousExperience: 'Honda Manufacturing - Senior Electrician (5 years)',
        education: 'Bachelor of Electrical Engineering Technology - University of Alabama Huntsville',
        specialProjects: [
          'Designed and implemented plant-wide power monitoring system',
          'Led electrical safety program reducing incidents by 40%',
          'Upgraded main power distribution improving efficiency by 12%'
        ]
      }
    },
    
    'johnny-jack-drew': {
      id: 'TECH-003',
      name: 'Johnny-Jack Drew',
      title: 'Heavy Mechanical Systems & Hydraulics Expert',
      avatar: 'JJD',
      experience: 18,
      rating: 4.7,
      availability: 'available',
      shift: 'Night Shift (10:00 PM - 6:00 AM)',
      location: 'Press Shop & Heavy Equipment Bay',
      phone: '(256) 555-0369',
      email: 'jj.drew@mtmus.com',
      radio: 'Channel 2',
      emergencyContact: 'Primary night shift emergency responder',
      
      primarySkills: [
        'Hydraulic & Pneumatic System Repair',
        'Heavy Press & Stamping Equipment',
        'Industrial Cooling & HVAC Systems',
        'Precision Mechanical Alignment',
        'Emergency Equipment Recovery & Rigging'
      ],
      
      certifications: [
        { name: 'Certified Fluid Power Hydraulic Specialist', issuer: 'IFPS (International Fluid Power Society)', expiry: '2025-10-30', status: 'active' },
        { name: 'Industrial Millwright Certification', issuer: 'NCCER', expiry: '2026-05-15', status: 'active' },
        { name: 'Crane Operator License (25 Ton)', issuer: 'NCCCO', expiry: '2025-09-12', status: 'active' },
        { name: 'Precision Alignment Specialist', issuer: 'Ludeca Training', expiry: '2025-12-01', status: 'active' },
        { name: 'Industrial Refrigeration Technician', issuer: 'RETA', expiry: '2026-02-28', status: 'active' }
      ],
      
      emergencySpecializations: [
        {
          scenario: 'Hydraulic System Failures/Leaks',
          priority: 'PRIMARY',
          description: 'Expert in emergency hydraulic repairs and pressure system isolation',
          responseTime: '< 7 minutes',
          expertise: 'Can quickly isolate leaks, perform emergency repairs, and restore hydraulic pressure to critical systems'
        },
        {
          scenario: 'Press/Stamping Equipment Jams',
          priority: 'PRIMARY',
          description: 'Specialist in heavy equipment recovery and die/tooling extraction',
          responseTime: '< 10 minutes',
          expertise: 'Can safely extract jammed parts, assess die damage, and restore press operations'
        },
        {
          scenario: 'Cooling System Failures',
          priority: 'PRIMARY',
          description: 'Expert in industrial cooling systems and emergency temperature control',
          responseTime: '< 15 minutes',
          expertise: 'Can implement emergency cooling measures and restore temperature-critical processes'
        },
        {
          scenario: 'Heavy Equipment Breakdowns',
          priority: 'PRIMARY',
          description: 'Specialist in mechanical system diagnosis and emergency repairs',
          responseTime: '< 12 minutes',
          expertise: 'Can perform field repairs, coordinate heavy lifting, and restore mechanical operations'
        }
      ],
      
      recentTraining: [
        { course: 'Advanced Hydraulic Troubleshooting', date: '2025-03-28', hours: 20 },
        { course: 'Heavy Equipment Safety & Recovery', date: '2025-02-14', hours: 16 },
        { course: 'Precision Mechanical Alignment', date: '2025-01-10', hours: 12 }
      ],
      
      performance: {
        responseTime: 6.8,
        completionRate: 96.3,
        qualityScore: 97.4,
        safetyRecord: 'Zero lost-time incidents in 36 months',
        customerSatisfaction: 4.7,
        tasksCompleted: 296,
        emergencyCallouts: 38
      },
      
      background: {
        yearsAtMTMUS: 12,
        previousExperience: 'US Steel - Heavy Equipment Mechanic (6 years)',
        education: 'Industrial Maintenance Technology Certificate - Wallace State Community College',
        specialProjects: [
          'Redesigned hydraulic filtration system reducing contamination by 60%',
          'Led press modernization project improving throughput by 18%',
          'Developed predictive maintenance program for heavy equipment'
        ]
      }
    }
  };

  const selectedTech = technicians[selectedTechnician];

  const getCertificationStatus = (cert) => {
    const expiryDate = new Date(cert.expiry);
    const today = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilExpiry < 0) return { color: 'text-red-400 bg-red-900/20 border-red-500/30', status: 'EXPIRED' };
    if (daysUntilExpiry < 30) return { color: 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30', status: 'EXPIRING' };
    return { color: 'text-green-400 bg-green-900/20 border-green-500/30', status: 'ACTIVE' };
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'PRIMARY': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'SECONDARY': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-start gap-6">
          <div className="bg-blue-600 rounded-full p-4 text-2xl font-bold text-white min-w-20 h-20 flex items-center justify-center">
            {selectedTech.avatar}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{selectedTech.name}</h2>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm border border-green-500/30 bg-green-900/20 text-green-400">
                <CheckCircle className="w-4 h-4" />
                {selectedTech.availability.toUpperCase()}
              </span>
            </div>
            <p className="text-xl text-gray-300 mb-4">{selectedTech.title}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-white">{selectedTech.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-white">{selectedTech.shift}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-white">{selectedTech.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-gray-400" />
                <span className="text-white">{selectedTech.radio}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-white">{selectedTech.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400">{selectedTech.emergencyContact}</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-xl font-bold text-white">{selectedTech.rating}</span>
            </div>
            <p className="text-gray-400 text-sm">{selectedTech.experience} years experience</p>
            <p className="text-gray-400 text-sm">{selectedTech.background.yearsAtMTMUS} years at MTMUS</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg Response Time</p>
              <p className="text-2xl font-bold text-green-400">{selectedTech.performance.responseTime}m</p>
            </div>
            <Clock className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-blue-400">{selectedTech.performance.completionRate}%</p>
            </div>
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Quality Score</p>
              <p className="text-2xl font-bold text-purple-400">{selectedTech.performance.qualityScore}%</p>
            </div>
            <Award className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Tasks Completed</p>
              <p className="text-2xl font-bold text-yellow-400">{selectedTech.performance.tasksCompleted}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Primary Skills */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-400" />
          Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {selectedTech.primarySkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background & Experience */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-green-400" />
          Background & Experience
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 font-semibold">Education</p>
            <p className="text-white">{selectedTech.background.education}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Previous Experience</p>
            <p className="text-white">{selectedTech.background.previousExperience}</p>
          </div>
          <div>
            <p className="text-gray-400 font-semibold">Special Projects</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              {selectedTech.background.specialProjects.map((project, idx) => (
                <li key={idx} className="text-white">{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmergencyTab = () => (
    <div className="space-y-6">
      {/* Emergency Contact Card */}
      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          Emergency Response Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-gray-400 text-sm">Emergency Contact</p>
            <p className="text-white font-semibold">{selectedTech.phone}</p>
            <p className="text-red-400">{selectedTech.emergencyContact}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Radio Channel</p>
            <p className="text-white font-semibold">{selectedTech.radio}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Emergency Callouts</p>
            <p className="text-white font-semibold">{selectedTech.performance.emergencyCallouts} this year</p>
          </div>
        </div>
      </div>

      {/* Emergency Specializations */}
      <div className="space-y-4">
        {selectedTech.emergencySpecializations.map((spec, idx) => (
          <div key={idx} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-white">{spec.scenario}</h4>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getPriorityColor(spec.priority)}`}>
                    {spec.priority} RESPONDER
                  </span>
                </div>
                <p className="text-gray-300 mb-3">{spec.description}</p>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                  <p className="text-blue-400 text-sm font-semibold">Expertise:</p>
                  <p className="text-blue-300 text-sm">{spec.expertise}</p>
                </div>
              </div>
              
              <div className="text-right ml-4">
                <p className="text-gray-400 text-sm">Response Time</p>
                <p className="text-xl font-bold text-green-400">{spec.responseTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Record */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-400" />
          Safety Record
        </h3>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-400 mb-2">{selectedTech.performance.safetyRecord}</p>
          <p className="text-gray-400">Outstanding safety performance</p>
        </div>
      </div>
    </div>
  );

  const renderCertificationsTab = () => (
    <div className="space-y-6">
      {/* Certifications List */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-400" />
          Professional Certifications
        </h3>
        
        <div className="space-y-4">
          {selectedTech.certifications.map((cert, idx) => {
            const status = getCertificationStatus(cert);
            return (
              <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">Issued by: {cert.issuer}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${status.color}`}>
                    {status.status}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Expiry Date:</span>
                  <span className="text-white">{cert.expiry}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Training */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-400" />
          Recent Training
        </h3>
        
        <div className="space-y-3">
          {selectedTech.recentTraining.map((training, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
              <div>
                <h4 className="font-semibold text-white">{training.course}</h4>
                <p className="text-gray-400 text-sm">{training.date}</p>
              </div>
              <span className="text-blue-400 font-semibold">{training.hours} hours</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: User },
    { id: 'emergency', name: 'Emergency Response', icon: AlertTriangle },
    { id: 'certifications', name: 'Certifications', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Maintenance</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Team</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Technician Profiles</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Maintenance Technician Profiles
            </h1>
            <p className="text-gray-400 mt-2">Detailed profiles, specializations, and emergency response capabilities</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              Emergency Contact
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export Profiles
            </button>
          </div>
        </div>
      </div>

      {/* Technician Selection */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-1">
          {Object.entries(technicians).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setSelectedTechnician(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${
                selectedTechnician === key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <div className={`rounded-full p-2 text-sm font-bold ${
                selectedTechnician === key ? 'bg-white text-blue-600' : 'bg-gray-600 text-white'
              }`}>
                {tech.avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold">{tech.name}</p>
                <p className="text-sm opacity-75">{tech.title.split(' & ')[0]}</p>
              </div>
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
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'emergency' && renderEmergencyTab()}
        {activeTab === 'certifications' && renderCertificationsTab()}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Profile Updated: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Emergency Status: {selectedTech.availability}
            </span>
            <span className="text-gray-400">
              Response Time: {selectedTech.performance.responseTime}min avg
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Active & Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianProfilesDashboard;