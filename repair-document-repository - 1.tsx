import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  Star, 
  Clock, 
  BookOpen, 
  Wrench, 
  AlertTriangle, 
  CheckCircle, 
  Video, 
  Image, 
  FileVideo, 
  FileImage, 

  ChevronRight,
  Folder,
  FolderOpen,
  Plus,
  Settings,
  Users,
  Share2,
  Tag,
  Calendar,
  User,
  Building,
  Activity,
  TrendingUp,
  RefreshCw,
  ExternalLink,
  Bookmark,
  Archive,
  Lock,
  Unlock,
  Globe,
  Shield,
  Database,
  HardDrive,
  Cpu,
  Radio,
  Thermometer,
  Battery,
  Network
} from 'lucide-react';

const RepairDocumentRepository = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Repository Statistics
  const repoStats = {
    totalDocuments: 1247,
    categories: 12,
    totalViews: 45678,
    recentUploads: 23,
    popularDocs: 156,
    pendingReviews: 8,
    averageRating: 4.6,
    storageUsed: 2.8
  };

  // Document Categories
  const categories = [
    { id: 'all', name: 'All Documents', count: 1247, icon: FileText, color: 'text-blue-400' },
    { id: 'manuals', name: 'Equipment Manuals', count: 234, icon: BookOpen, color: 'text-green-400' },
    { id: 'procedures', name: 'Repair Procedures', count: 189, icon: Wrench, color: 'text-orange-400' },
    { id: 'troubleshooting', name: 'Troubleshooting Guides', count: 156, icon: AlertTriangle, color: 'text-red-400' },
    { id: 'safety', name: 'Safety Documents', count: 98, icon: Shield, color: 'text-purple-400' },
    { id: 'parts', name: 'Parts Catalogs', count: 145, icon: Database, color: 'text-cyan-400' },
    { id: 'videos', name: 'Training Videos', count: 67, icon: Video, color: 'text-pink-400' },
    { id: 'schematics', name: 'Technical Drawings', count: 123, icon: FileImage, color: 'text-yellow-400' },
    { id: 'checklists', name: 'Maintenance Checklists', count: 89, icon: CheckCircle, color: 'text-emerald-400' },
    { id: 'archived', name: 'Archived Documents', count: 146, icon: Archive, color: 'text-gray-400' }
  ];

  // Featured/Recent Documents
  const featuredDocuments = [
    {
      id: 'DOC-001',
      title: 'Kawasaki BX200L Complete Service Manual',
      type: 'pdf',
      category: 'manuals',
      equipment: 'Kawasaki Robot BX200L',
      size: '24.5 MB',
      pages: 487,
      version: '2.1.3',
      lastUpdated: '2025-05-20',
      author: 'Kawasaki Technical Team',
      downloads: 1247,
      rating: 4.8,
      tags: ['Robot', 'Service', 'Maintenance', 'Kawasaki'],
      description: 'Complete service and maintenance manual for Kawasaki BX200L robotic systems including troubleshooting, parts replacement, and calibration procedures.',
      status: 'active',
      accessLevel: 'technician'
    },
    {
      id: 'DOC-002',
      title: 'Weld Controller Emergency Shutdown Procedure',
      type: 'pdf',
      category: 'procedures',
      equipment: 'Weld Controller Unit',
      size: '2.1 MB',
      pages: 12,
      version: '1.0.8',
      lastUpdated: '2025-05-19',
      author: 'Safety Team',
      downloads: 892,
      rating: 4.9,
      tags: ['Safety', 'Emergency', 'Welding', 'Procedure'],
      description: 'Critical safety procedures for emergency shutdown of welding controller systems in case of malfunction or safety hazard.',
      status: 'active',
      accessLevel: 'all'
    },
    {
      id: 'DOC-003',
      title: 'PLC Programming and Diagnostics Guide',
      type: 'pdf',
      category: 'troubleshooting',
      equipment: 'Allen-Bradley PLC',
      size: '15.7 MB',
      pages: 234,
      version: '3.2.1',
      lastUpdated: '2025-05-18',
      author: 'Controls Engineering',
      downloads: 623,
      rating: 4.7,
      tags: ['PLC', 'Programming', 'Diagnostics', 'Controls'],
      description: 'Comprehensive guide for programming, troubleshooting, and maintaining Allen-Bradley PLC systems used in manufacturing processes.',
      status: 'active',
      accessLevel: 'engineer'
    },
    {
      id: 'DOC-004',
      title: 'Vision System Calibration Video Tutorial',
      type: 'video',
      category: 'videos',
      equipment: 'Vision Camera System',
      size: '156 MB',
      duration: '23:45',
      version: '1.0.2',
      lastUpdated: '2025-05-17',
      author: 'Vision Systems Team',
      downloads: 345,
      rating: 4.6,
      tags: ['Vision', 'Calibration', 'Tutorial', 'Video'],
      description: 'Step-by-step video tutorial for calibrating vision camera systems including focus adjustment, lighting setup, and quality validation.',
      status: 'active',
      accessLevel: 'technician'
    },
    {
      id: 'DOC-005',
      title: 'Hydraulic System Pressure Test Checklist',
      type: 'pdf',
      category: 'checklists',
      equipment: 'Hydraulic Systems',
      size: '1.2 MB',
      pages: 6,
      version: '2.0.1',
      lastUpdated: '2025-05-16',
      author: 'Hydraulics Team',
      downloads: 234,
      rating: 4.5,
      tags: ['Hydraulics', 'Testing', 'Checklist', 'Pressure'],
      description: 'Detailed checklist for conducting hydraulic system pressure tests including safety precautions and acceptance criteria.',
      status: 'active',
      accessLevel: 'technician'
    },
    {
      id: 'DOC-006',
      title: 'Conveyor Belt Replacement Parts Catalog',
      type: 'pdf',
      category: 'parts',
      equipment: 'Conveyor Systems',
      size: '8.9 MB',
      pages: 78,
      version: '1.5.4',
      lastUpdated: '2025-05-15',
      author: 'Parts Management',
      downloads: 456,
      rating: 4.4,
      tags: ['Parts', 'Conveyor', 'Catalog', 'Replacement'],
      description: 'Complete parts catalog for conveyor belt systems including part numbers, specifications, and vendor information.',
      status: 'active',
      accessLevel: 'all'
    }
  ];

  // Quick Access Documents
  const quickAccessDocs = [
    { id: 'QA-001', title: 'Emergency Contact List', type: 'pdf', category: 'safety', lastAccessed: '2 hours ago' },
    { id: 'QA-002', title: 'Daily Inspection Checklist', type: 'pdf', category: 'checklists', lastAccessed: '4 hours ago' },
    { id: 'QA-003', title: 'Parts Ordering Form', type: 'pdf', category: 'procedures', lastAccessed: '1 day ago' },
    { id: 'QA-004', title: 'Safety Lockout Procedure', type: 'pdf', category: 'safety', lastAccessed: '2 days ago' },
    { id: 'QA-005', title: 'Robot Calibration Quick Guide', type: 'pdf', category: 'procedures', lastAccessed: '3 days ago' }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-400" />;
      case 'video': return <FileVideo className="w-5 h-5 text-blue-400" />;
      case 'image': return <FileImage className="w-5 h-5 text-green-400" />;
      case 'spreadsheet': return <FileText className="w-5 h-5 text-green-600" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'draft': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'archived': return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
      case 'review': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getAccessLevelColor = (level) => {
    switch (level) {
      case 'all': return 'text-green-400';
      case 'technician': return 'text-blue-400';
      case 'engineer': return 'text-purple-400';
      case 'manager': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const filteredDocuments = featuredDocuments.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Repository Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Documents</p>
              <p className="text-2xl font-bold text-white">{repoStats.totalDocuments.toLocaleString()}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-green-400 text-xs mt-1">+23 this week</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Views</p>
              <p className="text-2xl font-bold text-white">{repoStats.totalViews.toLocaleString()}</p>
            </div>
            <Eye className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-green-400 text-xs mt-1">+1.2K this week</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average Rating</p>
              <p className="text-2xl font-bold text-white">{repoStats.averageRating}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-yellow-400 text-xs mt-1">Excellent quality</p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Storage Used</p>
              <p className="text-2xl font-bold text-white">{repoStats.storageUsed} TB</p>
            </div>
            <HardDrive className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-purple-400 text-xs mt-1">78% capacity</p>
        </div>
      </div>

      {/* Quick Access */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-400" />
          Quick Access
        </h3>
        <div className="space-y-3">
          {quickAccessDocs.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center gap-3">
                {getTypeIcon(doc.type)}
                <div>
                  <h4 className="text-white font-medium">{doc.title}</h4>
                  <p className="text-gray-400 text-sm capitalize">{doc.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">{doc.lastAccessed}</span>
                <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-green-400" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-green-900/20 border border-green-500/30 rounded">
            <Upload className="w-4 h-4 text-green-400" />
            <div className="flex-1">
              <p className="text-white text-sm">New document uploaded: "Hydraulic Pump Maintenance Guide"</p>
              <p className="text-gray-400 text-xs">2 hours ago by Mike Chen</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-900/20 border border-blue-500/30 rounded">
            <Edit className="w-4 h-4 text-blue-400" />
            <div className="flex-1">
              <p className="text-white text-sm">Document updated: "PLC Troubleshooting Guide v3.2.2"</p>
              <p className="text-gray-400 text-xs">5 hours ago by Sarah Kim</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded">
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="flex-1">
              <p className="text-white text-sm">"Robot Safety Manual" received 5-star rating</p>
              <p className="text-gray-400 text-xs">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentsTab = () => (
    <div className="space-y-6">
      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.slice(0, 10).map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-lg border transition-all ${
                selectedCategory === category.id
                  ? 'border-blue-500/50 bg-blue-900/20'
                  : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <IconComponent className={`w-6 h-6 ${category.color}`} />
                <div className="text-center">
                  <p className="text-white font-medium text-sm">{category.name}</p>
                  <p className="text-gray-400 text-xs">{category.count} docs</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Documents List */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            {selectedCategory === 'all' ? 'All Documents' : categories.find(c => c.id === selectedCategory)?.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">{filteredDocuments.length} results</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  {getTypeIcon(doc.type)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-white">{doc.title}</h4>
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(doc.status)}`}>
                        {doc.status.toUpperCase()}
                      </span>
                      <span className={`text-xs font-semibold ${getAccessLevelColor(doc.accessLevel)}`}>
                        {doc.accessLevel.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{doc.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Equipment: {doc.equipment}</span>
                      <span>Version: {doc.version}</span>
                      <span>Size: {doc.size}</span>
                      <span>Downloads: {doc.downloads}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-sm">{doc.rating}</span>
                  </div>
                  <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 hover:bg-green-700 rounded transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                <div className="flex flex-wrap gap-1">
                  {doc.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-gray-400 text-sm">
                  Updated {doc.lastUpdated} by {doc.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUploadTab = () => (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-400" />
          Upload New Document
        </h3>
        
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-white font-semibold mb-2">Drag and drop files here</p>
          <p className="text-gray-400 text-sm mb-4">or click to browse files</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Choose Files
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Document Title</label>
            <input 
              type="text" 
              placeholder="Enter document title..." 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Category</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option>Select category...</option>
              <option>Equipment Manuals</option>
              <option>Repair Procedures</option>
              <option>Troubleshooting Guides</option>
              <option>Safety Documents</option>
              <option>Parts Catalogs</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Equipment</label>
            <input 
              type="text" 
              placeholder="Related equipment..." 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Access Level</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option>All Users</option>
              <option>Technicians</option>
              <option>Engineers</option>
              <option>Managers</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-sm mb-2">Description</label>
            <textarea 
              rows="3" 
              placeholder="Document description..." 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-sm mb-2">Tags (comma separated)</label>
            <input 
              type="text" 
              placeholder="repair, manual, troubleshooting..." 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors">
            Save as Draft
          </button>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
            Upload & Publish
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Activity },
    { id: 'documents', name: 'Document Library', icon: FileText },
    { id: 'upload', name: 'Upload Document', icon: Upload }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Maintenance</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Document Repository</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Repair Document Repository
            </h1>
            <p className="text-gray-400 mt-2">Technical documentation and repair resources library</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
              New Document
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
        {activeTab === 'documents' && renderDocumentsTab()}
        {activeTab === 'upload' && renderUploadTab()}
      </div>

      {/* Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Update: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Total Documents: {repoStats.totalDocuments.toLocaleString()}
            </span>
            <span className="text-gray-400">
              Storage: {repoStats.storageUsed} TB used
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">Repository Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairDocumentRepository;