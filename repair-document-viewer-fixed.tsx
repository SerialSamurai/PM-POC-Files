import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Printer, 
  Bookmark, 
  MessageSquare, 
  Star, 
  Clock, 
  User, 
  ChevronRight,
  ChevronLeft,
  Eye,
  Share2,
  AlertTriangle,
  Settings,
  ZoomIn,
  ZoomOut,
  ArrowLeft,
  ArrowRight,
  List,
  Tag,
  Building,
  PlusCircle,
  Thermometer,
  Zap,
  Target
} from 'lucide-react';

const RepairDocumentViewer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSection, setCurrentSection] = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Document Information
  const documentInfo = {
    id: 'DOC-001',
    title: 'Kawasaki BX200L Complete Service Manual',
    version: '2.1.3',
    lastUpdated: '2025-05-20',
    author: 'Kawasaki Technical Team',
    pages: 487,
    size: '24.5 MB',
    downloads: 1247,
    rating: 4.8,
    tags: ['Robot', 'Service', 'Maintenance', 'Kawasaki'],
    equipment: 'Kawasaki Robot BX200L',
    partNumber: 'BX200L-MANUAL-2025',
    language: 'English',
    classification: 'Technical Manual',
    accessLevel: 'Technician'
  };

  // Table of Contents
  const tableOfContents = [
    {
      id: 'introduction',
      title: '1. Introduction',
      page: 1,
      subsections: [
        { id: 'safety-precautions', title: '1.1 Safety Precautions', page: 3 },
        { id: 'specifications', title: '1.2 Specifications', page: 8 },
        { id: 'component-overview', title: '1.3 Component Overview', page: 12 }
      ]
    },
    {
      id: 'installation',
      title: '2. Installation & Setup',
      page: 18,
      subsections: [
        { id: 'unpacking', title: '2.1 Unpacking & Inspection', page: 19 },
        { id: 'mounting', title: '2.2 Mounting Procedures', page: 25 },
        { id: 'electrical-connections', title: '2.3 Electrical Connections', page: 32 }
      ]
    },
    {
      id: 'operation',
      title: '3. Operation',
      page: 45,
      subsections: [
        { id: 'startup-procedure', title: '3.1 Startup Procedure', page: 46 },
        { id: 'programming', title: '3.2 Programming Basics', page: 58 },
        { id: 'safety-systems', title: '3.3 Safety Systems', page: 74 }
      ]
    },
    {
      id: 'maintenance',
      title: '4. Preventive Maintenance',
      page: 89,
      subsections: [
        { id: 'daily-checks', title: '4.1 Daily Inspection', page: 90 },
        { id: 'weekly-maintenance', title: '4.2 Weekly Maintenance', page: 98 },
        { id: 'monthly-service', title: '4.3 Monthly Service', page: 112 }
      ]
    },
    {
      id: 'troubleshooting',
      title: '5. Troubleshooting',
      page: 145,
      subsections: [
        { id: 'error-codes', title: '5.1 Error Codes', page: 146 },
        { id: 'mechanical-issues', title: '5.2 Mechanical Issues', page: 167 },
        { id: 'electrical-problems', title: '5.3 Electrical Problems', page: 189 }
      ]
    },
    {
      id: 'parts-replacement',
      title: '6. Parts & Replacement',
      page: 234,
      subsections: [
        { id: 'joint-replacement', title: '6.1 Joint Motor Replacement', page: 235 },
        { id: 'cable-replacement', title: '6.2 Cable Replacement', page: 256 },
        { id: 'calibration', title: '6.3 Calibration Procedures', page: 278 }
      ]
    },
    {
      id: 'appendices',
      title: '7. Appendices',
      page: 345,
      subsections: [
        { id: 'parts-catalog', title: '7.1 Parts Catalog', page: 346 },
        { id: 'wiring-diagrams', title: '7.2 Wiring Diagrams', page: 398 },
        { id: 'technical-support', title: '7.3 Technical Support', page: 456 }
      ]
    }
  ];

  // Sample Document Content
  const documentContent = {
    introduction: {
      title: '1. Introduction',
      content: [
        {
          type: 'warning',
          content: 'Read all safety instructions before operating the Kawasaki BX200L Robot System'
        },
        {
          type: 'heading2',
          content: 'Personal Safety'
        },
        {
          type: 'list',
          content: [
            'Always wear appropriate personal protective equipment (PPE)',
            'Ensure emergency stop systems are functional before operation',
            'Never enter the robot\'s work envelope during operation',
            'Maintain a safe distance of at least 2 meters during automated operation'
          ]
        },
        {
          type: 'heading2',
          content: 'System Safety'
        },
        {
          type: 'list',
          content: [
            'Verify all safety interlocks are properly connected and functional',
            'Check emergency stop circuits before each operation',
            'Ensure proper grounding of all electrical components',
            'Use only Kawasaki-approved replacement parts'
          ]
        },
        {
          type: 'heading2',
          content: 'Specifications'
        },
        {
          type: 'heading3',
          content: 'Physical Specifications'
        },
        {
          type: 'specs',
          content: [
            { label: 'Maximum Reach', value: '1611 mm' },
            { label: 'Payload Capacity', value: '200 kg' },
            { label: 'Repeatability', value: '±0.06 mm' },
            { label: 'Weight', value: '765 kg' },
            { label: 'Mounting', value: 'Floor or ceiling mount' }
          ]
        }
      ]
    },
    troubleshooting: {
      title: '5. Troubleshooting',
      content: [
        {
          type: 'heading2',
          content: 'Error Code Reference'
        },
        {
          type: 'heading3',
          content: 'Critical Errors (E0xxx)'
        },
        {
          type: 'error',
          content: {
            code: 'E0421',
            title: 'Joint 2 Servo Overload',
            cause: 'Motor overheating or excessive load',
            solutions: [
              'Check for mechanical obstructions',
              'Verify payload within specifications',
              'Inspect cooling system operation',
              'Check motor temperature sensor'
            ]
          }
        },
        {
          type: 'error',
          content: {
            code: 'E0434',
            title: 'Position Deviation Error',
            cause: 'Encoder feedback error or mechanical issue',
            solutions: [
              'Perform encoder calibration',
              'Check for mechanical binding',
              'Verify cable connections',
              'Replace encoder if necessary'
            ]
          }
        },
        {
          type: 'heading3',
          content: 'Warning Codes (W1xxx)'
        },
        {
          type: 'error',
          content: {
            code: 'W1205',
            title: 'Temperature Warning',
            cause: 'Operating temperature approaching limits',
            solutions: [
              'Check ambient temperature',
              'Clean cooling fans',
              'Verify ventilation clearances',
              'Reduce cycle speed if necessary'
            ]
          }
        }
      ]
    }
  };

  // Comments/Annotations
  const comments = [
    {
      id: 'C001',
      section: 'troubleshooting',
      author: 'Mike Chen',
      timestamp: '2025-05-20 10:30',
      content: 'Added note about checking cooling system first when encountering E0421 error. This resolved 80% of cases in our experience.',
      type: 'note',
      page: 156
    },
    {
      id: 'C002',
      section: 'introduction',
      author: 'Sarah Kim',
      timestamp: '2025-05-19 14:15',
      content: 'Safety clearance should be 3 meters for high-speed operations, not 2 meters as specified.',
      type: 'correction',
      page: 5
    }
  ];

  const getCurrentContent = () => {
    return documentContent[currentSection] || documentContent.introduction;
  };

  const getCurrentSectionIndex = () => {
    return tableOfContents.findIndex(s => s.id === currentSection);
  };

  const navigateToSection = (direction) => {
    const currentIndex = getCurrentSectionIndex();
    let newIndex;
    
    if (direction === 'next') {
      newIndex = Math.min(currentIndex + 1, tableOfContents.length - 1);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }
    
    setCurrentSection(tableOfContents[newIndex].id);
  };

  const renderContentItem = (item, index) => {
    switch (item.type) {
      case 'warning':
        return (
          <div key={index} className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 my-4">
            <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
              <AlertTriangle className="w-5 h-5" />
              WARNING: {item.content}
            </div>
          </div>
        );
      
      case 'heading2':
        return (
          <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
            {item.content}
          </h2>
        );
      
      case 'heading3':
        return (
          <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">
            {item.content}
          </h3>
        );
      
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-300">
            {item.content.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      
      case 'specs':
        return (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {item.content.map((spec, specIndex) => (
              <div key={specIndex} className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{spec.label}:</span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'error':
        return (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="px-2 py-1 bg-red-600 rounded text-white text-sm font-mono">
                {item.content.code}
              </div>
              <h4 className="font-bold text-white">{item.content.title}</h4>
            </div>
            <p className="text-gray-400 mb-3">
              <strong>Cause:</strong> {item.content.cause}
            </p>
            <div>
              <strong className="text-white">Solutions:</strong>
              <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-300">
                {item.content.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex}>{solution}</li>
                ))}
              </ol>
            </div>
          </div>
        );
      
      default:
        return (
          <p key={index} className="text-gray-300 mb-4">
            {item.content}
          </p>
        );
    }
  };

  const renderTableOfContents = () => (
    <div className="h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-700/50">
        <h3 className="font-semibold text-white mb-2">Table of Contents</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search sections..."
            className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="p-4">
        {tableOfContents.map((section) => (
          <div key={section.id} className="mb-2">
            <button
              onClick={() => setCurrentSection(section.id)}
              className={`w-full text-left p-2 rounded transition-colors ${
                currentSection === section.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{section.title}</span>
                <span className="text-xs text-gray-400">p.{section.page}</span>
              </div>
            </button>
            
            {section.subsections && currentSection === section.id && (
              <div className="ml-4 mt-1 space-y-1">
                {section.subsections.map((subsection) => (
                  <button
                    key={subsection.id}
                    className="w-full text-left p-1 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>{subsection.title}</span>
                      <span>p.{subsection.page}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocumentActions = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setBookmarked(!bookmarked)}
        className={`p-2 rounded transition-colors ${
          bookmarked ? 'bg-yellow-600 text-white' : 'bg-gray-600 hover:bg-gray-700 text-gray-300'
        }`}
        title="Bookmark"
      >
        <Bookmark className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => setShowComments(!showComments)}
        className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors"
        title="Comments"
      >
        <MessageSquare className="w-4 h-4" />
      </button>
      
      <div className="flex items-center gap-1 bg-gray-600 rounded">
        <button
          onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
          className="p-2 hover:bg-gray-700 rounded-l transition-colors"
          disabled={zoomLevel <= 50}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="px-2 text-sm">{zoomLevel}%</span>
        <button
          onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
          className="p-2 hover:bg-gray-700 rounded-r transition-colors"
          disabled={zoomLevel >= 200}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
      
      <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors" title="Print">
        <Printer className="w-4 h-4" />
      </button>
      
      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors" title="Download">
        <Download className="w-4 h-4" />
      </button>
      
      <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors" title="Share">
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  );
  
  const renderCommentsSidebar = () => (
    <div className="w-80 bg-gray-900/50 border-l border-gray-700/50 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-white">Comments & Notes</h3>
          <button className="p-1 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
            <PlusCircle className="w-4 h-4" />
          </button>
        </div>
        <div className="text-sm text-gray-400">
          {comments.length} comments on this document
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800/50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3" />
                </div>
                <span className="text-white text-sm font-medium">{comment.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">p.{comment.page}</span>
                <span className={`w-2 h-2 rounded-full ${
                  comment.type === 'correction' ? 'bg-red-400' : 'bg-blue-400'
                }`}></span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-2">{comment.content}</p>
            <div className="text-xs text-gray-400">{comment.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const currentSectionIndex = getCurrentSectionIndex();
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === tableOfContents.length - 1;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-700/50 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <div>
                <h1 className="text-lg font-bold text-white">{documentInfo.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Version {documentInfo.version}</span>
                  <span>{documentInfo.pages} pages</span>
                  <span>Updated {documentInfo.lastUpdated}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{documentInfo.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {renderDocumentActions()}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-gray-600 hover:bg-gray-700 rounded transition-colors"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar - Table of Contents */}
        {sidebarOpen && (
          <aside className="w-80 bg-gray-900/30 border-r border-gray-700/50">
            {renderTableOfContents()}
          </aside>
        )}

        {/* Document Content */}
        <main className={`flex-1 flex ${showComments ? 'pr-0' : ''}`}>
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-8" style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top left' }}>
              
              {/* Document Header */}
              <div className="mb-8 pb-6 border-b border-gray-700/50">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">{documentInfo.equipment}</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">{getCurrentContent().title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Part Number: {documentInfo.partNumber}</span>
                  <span>Classification: {documentInfo.classification}</span>
                  <span>Access Level: {documentInfo.accessLevel}</span>
                </div>
              </div>

              {/* Document Body */}
              <div className="prose prose-invert max-w-none">
                {getCurrentContent().content.map((item, index) => renderContentItem(item, index))}
              </div>

              {/* Technical Diagrams Section */}
              {currentSection === 'troubleshooting' && (
                <div className="mt-8 p-6 bg-gray-900/30 rounded-lg border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Joint Motor Diagnostic Flow
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Thermometer className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Temperature Check</p>
                      <p className="text-gray-400 text-sm">Normal: 20-60°C</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Current Monitor</p>
                      <p className="text-gray-400 text-sm">Check for spikes</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Position Test</p>
                      <p className="text-gray-400 text-sm">Verify accuracy</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-700/50">
                <button 
                  onClick={() => navigateToSection('prev')}
                  disabled={isFirstSection}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                    isFirstSection 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous Section
                </button>
                <div className="text-gray-400 text-sm">
                  Section {currentSectionIndex + 1} of {tableOfContents.length}
                </div>
                <button 
                  onClick={() => navigateToSection('next')}
                  disabled={isLastSection}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
                    isLastSection 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                >
                  Next Section
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Comments Sidebar */}
        {showComments && renderCommentsSidebar()}
      </div>

      {/* Status Bar */}
      <footer className="bg-gray-900/50 border-t border-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-gray-400">
              Last Viewed: {currentTime.toLocaleTimeString()}
            </span>
            <span className="text-gray-400">
              Downloaded: {documentInfo.downloads} times
            </span>
            <span className="text-gray-400">
              Size: {documentInfo.size}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-400 text-sm">Document Current</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepairDocumentViewer;