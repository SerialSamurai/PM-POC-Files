import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Download, 
  Eye, 
  Star, 
  Clock, 
  Wrench, 
  Zap, 
  Camera, 
  Settings, 
  AlertTriangle, 
  CheckCircle,
  Filter,
  Grid,
  List,
  ChevronRight,
  Play,
  Image,
  Video,
  BookOpen,
  HardDrive,
  Cpu,
  Activity,
  RefreshCw,
  Heart,
  Bookmark
} from 'lucide-react';

const MaintenanceDocsRepository = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Document categories with icons and colors
  const categories = [
    { id: 'all', name: 'All Documents', icon: FileText, color: 'text-gray-400', count: 247 },
    { id: 'robot', name: 'Robot Manuals', icon: Cpu, color: 'text-blue-400', count: 45 },
    { id: 'weld', name: 'Welding Equipment', icon: Zap, color: 'text-orange-400', count: 38 },
    { id: 'vision', name: 'Vision Systems', icon: Camera, color: 'text-green-400', count: 23 },
    { id: 'plc', name: 'PLC & Controls', icon: Settings, color: 'text-purple-400', count: 31 },
    { id: 'safety', name: 'Safety Procedures', icon: AlertTriangle, color: 'text-red-400', count: 42 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Wrench, color: 'text-yellow-400', count: 68 }
  ];

  // Sample documents with realistic maintenance content
  const documents = [
    {
      id: 'DOC-001',
      title: 'Kawasaki K250 BX200L Service Manual',
      category: 'robot',
      type: 'manual',
      size: '12.4 MB',
      pages: 156,
      updated: '2025-05-15',
      downloads: 1247,
      rating: 4.8,
      description: 'Complete service and maintenance manual for Kawasaki BX200L robot controller',
      tags: ['robot', 'kawasaki', 'service', 'maintenance'],
      favorite: true,
      urgent: false,
      hasVideo: true,
      equipment: 'K250 BX200L #1-4'
    },
    {
      id: 'DOC-002',
      title: 'Joint Calibration Quick Guide',
      category: 'robot',
      type: 'guide',
      size: '2.1 MB',
      pages: 8,
      updated: '2025-05-20',
      downloads: 892,
      rating: 4.9,
      description: 'Step-by-step joint calibration procedure with troubleshooting tips',
      tags: ['calibration', 'joints', 'quick-start'],
      favorite: true,
      urgent: false,
      hasVideo: true,
      equipment: 'All Kawasaki Robots'
    },
    {
      id: 'DOC-003',
      title: 'Weld Gun Electrode Replacement',
      category: 'weld',
      type: 'procedure',
      size: '4.7 MB',
      pages: 12,
      updated: '2025-05-18',
      downloads: 634,
      rating: 4.6,
      description: 'Electrode replacement procedure with torque specifications and safety warnings',
      tags: ['electrode', 'replacement', 'torque', 'safety'],
      favorite: false,
      urgent: true,
      hasVideo: true,
      equipment: 'Weld Controllers 1-6'
    },
    {
      id: 'DOC-004',
      title: 'Emergency Stop Troubleshooting',
      category: 'safety',
      type: 'troubleshooting',
      size: '1.8 MB',
      pages: 6,
      updated: '2025-05-21',
      downloads: 445,
      rating: 4.7,
      description: 'Common emergency stop issues and resolution steps',
      tags: ['emergency', 'stop', 'troubleshooting', 'safety'],
      favorite: false,
      urgent: true,
      hasVideo: false,
      equipment: 'All Equipment'
    },
    {
      id: 'DOC-005',
      title: 'Vision System Cleaning Protocol',
      category: 'vision',
      type: 'procedure',
      size: '3.2 MB',
      pages: 10,
      updated: '2025-05-17',
      downloads: 278,
      rating: 4.5,
      description: 'Proper cleaning and maintenance of vision cameras and lenses',
      tags: ['vision', 'cleaning', 'cameras', 'maintenance'],
      favorite: true,
      urgent: false,
      hasVideo: true,
      equipment: 'Vision Camera System'
    },
    {
      id: 'DOC-006',
      title: 'PLC Error Code Reference',
      category: 'plc',
      type: 'reference',
      size: '5.9 MB',
      pages: 28,
      updated: '2025-05-12',
      downloads: 1156,
      rating: 4.8,
      description: 'Complete error code reference with causes and solutions',
      tags: ['plc', 'error-codes', 'allen-bradley', 'troubleshooting'],
      favorite: true,
      urgent: false,
      hasVideo: false,
      equipment: 'Allen-Bradley PLC'
    },
    {
      id: 'DOC-007',
      title: 'Preventive Maintenance Checklist',
      category: 'robot',
      type: 'checklist',
      size: '0.8 MB',
      pages: 4,
      updated: '2025-05-19',
      downloads: 723,
      rating: 4.9,
      description: 'Weekly and monthly PM checklist for all robotic equipment',
      tags: ['preventive', 'maintenance', 'checklist', 'pm'],
      favorite: true,
      urgent: false,
      hasVideo: false,
      equipment: 'All Robots'  
    },
    {
      id: 'DOC-008',
      title: 'Hydraulic System Leak Repair',
      category: 'troubleshooting',
      type: 'procedure',
      size: '6.3 MB',
      pages: 18,
      updated: '2025-05-14',
      downloads: 412,
      rating: 4.4,
      description: 'Identifying and repairing hydraulic leaks in robot systems',
      tags: ['hydraulic', 'leak', 'repair', 'seals'],
      favorite: false,
      urgent: true,
      hasVideo: true,
      equipment: 'Hydraulic Press #3'
    }
  ];

  // Recent documents (most recently accessed)
  const recentDocs = documents.slice(0, 4);

  // Most popular documents
  const popularDocs = [...documents].sort((a, b) => b.downloads - a.downloads).slice(0, 4);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'manual': return <BookOpen className="w-4 h-4" />;
      case 'guide': return <FileText className="w-4 h-4" />;
      case 'procedure': return <Wrench className="w-4 h-4" />;
      case 'troubleshooting': return <Wrench className="w-4 h-4" />;
      case 'reference': return <HardDrive className="w-4 h-4" />;
      case 'checklist': return <CheckCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         doc.equipment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesFavorites = !showFavoritesOnly || doc.favorite;
    return matchesSearch && matchesCategory && matchesFavorites;
  });

  const DocumentCard = ({ doc, compact = false }) => (
    <div className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-colors ${compact ? 'flex items-center gap-4' : ''}`}>
      <div className={`flex items-center gap-2 mb-2 ${compact ? 'mb-0 flex-shrink-0' : ''}`}>
        <div className={`p-2 rounded-lg ${categories.find(c => c.id === doc.category)?.color.replace('text-', 'bg-').replace('-400', '-900/20')} border ${categories.find(c => c.id === doc.category)?.color.replace('text-', 'border-').replace('-400', '-500/30')}`}>
          {getTypeIcon(doc.type)}
        </div>
        {doc.urgent && (
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border border-red-500/30 bg-red-900/20 text-red-400">
            <AlertTriangle className="w-3 h-3" />
            URGENT
          </span>
        )}
        {doc.hasVideo && (
          <div className="flex items-center gap-1 text-green-400">
            <Video className="w-3 h-3" />
            <span className="text-xs">Video</span>
          </div>
        )}
      </div>
      
      <div className={compact ? 'flex-grow min-w-0' : ''}>
        <div className="flex items-start justify-between mb-2">
          <h3 className={`font-semibold text-white ${compact ? 'text-sm' : 'text-base'} ${compact ? 'truncate' : ''}`}>
            {doc.title}
          </h3>
          <button 
            className="text-gray-400 hover:text-yellow-400 transition-colors flex-shrink-0 ml-2"
            onClick={() => {/* Toggle favorite */}}
          >
            {doc.favorite ? <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> : <Star className="w-4 h-4" />}
          </button>
        </div>
        
        {!compact && (
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{doc.description}</p>
        )}
        
        <div className={`flex items-center justify-between text-xs text-gray-400 ${compact ? 'flex-wrap gap-2' : ''}`}>
          <div className="flex items-center gap-4">
            <span>{doc.equipment}</span>
            <span>{doc.size}</span>
            <span>{doc.pages} pages</span>
            <span>Updated: {doc.updated}</span>
          </div>
          {!compact && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{doc.rating}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className={`flex gap-2 ${compact ? 'flex-shrink-0' : 'mt-4'}`}>
        <button className="flex items-center gap-1 px-3 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors text-sm">
          <Eye className="w-3 h-3" />
          View
        </button>
        <button className="flex items-center gap-1 px-3 py-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30 transition-colors text-sm">
          <Download className="w-3 h-3" />
          Download
        </button>
      </div>
    </div>
  );

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
              Maintenance Documents
            </h1>
            <p className="text-gray-400 mt-2">Quick access to repair manuals, procedures, and troubleshooting guides</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                showFavoritesOnly ? 'bg-yellow-600 text-white' : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <Star className="w-4 h-4" />
              Favorites Only
            </button>
            <div className="flex bg-gray-900/50 border border-gray-700/50 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'} rounded-l-lg transition-colors`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'} rounded-r-lg transition-colors`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by document name, equipment, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 text-lg"
          />
        </div>
      </div>

      {/* Quick Access Sections */}
      {!searchTerm && selectedCategory === 'all' && !showFavoritesOnly && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Documents */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Recently Accessed
            </h2>
            <div className="space-y-3">
              {recentDocs.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} compact={true} />
              ))}
            </div>
          </div>

          {/* Popular Documents */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-400" />
              Most Popular
            </h2>
            <div className="space-y-3">
              {popularDocs.map((doc) => (
                <DocumentCard key={doc.id} doc={doc} compact={true} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-white">
            {showFavoritesOnly ? 'Favorite Documents' : 
             selectedCategory === 'all' ? 'All Documents' : 
             categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <span className="text-gray-400">
            {filteredDocuments.length} document{filteredDocuments.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Documents Grid/List */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
          : 'space-y-4'
      }`}>
        {filteredDocuments.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} compact={viewMode === 'list'} />
        ))}
      </div>

      {/* No Results */}
      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">No documents found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search terms or category filter</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setShowFavoritesOnly(false);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Quick Actions FAB */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-colors" title="Quick Search">
          <Search className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-colors" title="Emergency Procedures">
          <AlertTriangle className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MaintenanceDocsRepository;