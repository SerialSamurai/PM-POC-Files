import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Star, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Wrench, 
  Eye, 
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Share2,
  RotateCcw,
  Zap,
  Shield,
  Settings,
  Play,
  Pause,
  Volume2,
  Maximize,
  FileText,
  Camera,
  Target
} from 'lucide-react';

const JointCalibrationGuide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFavorite, setIsFavorite] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const documentMeta = {
    title: 'Joint Calibration Quick Guide',
    documentId: 'DOC-002',
    equipment: 'Kawasaki K250 BX200L (All Units)',
    revision: 'Rev. 3.2',
    lastUpdated: '2025-05-20',
    approvedBy: 'Mike Johnson - Lead Technician',
    estimatedTime: '15-20 minutes',
    difficulty: 'Intermediate',
    safetyLevel: 'Medium Risk'
  };

  const requiredTools = [
    'Teaching Pendant',
    'Digital Torque Wrench (10-50 Nm)',
    'Precision Level',
    'Calibration Block Set',
    'Safety Lock-out Kit',
    'PPE (Safety Glasses, Gloves)'
  ];

  const safetyWarnings = [
    'ALWAYS engage emergency stop before beginning calibration',
    'Ensure robot is in safe position before removing safety barriers',
    'Verify all personnel are clear of robot work envelope',
    'Lock out electrical power during mechanical adjustments'
  ];

  const calibrationSteps = [
    {
      step: 1,
      title: 'Safety Preparation',
      duration: '2-3 min',
      description: 'Prepare robot for calibration by engaging safety systems',
      details: [
        'Press emergency stop button on teach pendant and main control panel',
        'Verify robot status shows "STOPPED" on controller display',
        'Install safety barriers around robot work area',
        'Ensure all personnel are wearing required PPE'
      ],
      warning: 'Do not proceed until all safety checks are complete',
      image: '/api/placeholder/400/250'
    },
    {
      step: 2,
      title: 'Access Calibration Mode',
      duration: '1-2 min',
      description: 'Enter calibration mode through the teach pendant',
      details: [
        'Turn teach pendant key to "TEACH" position',
        'Navigate to: SETUP → CALIBRATION → JOINT CAL',
        'Select "START CALIBRATION" from menu',
        'Confirm robot serial number matches unit being calibrated'
      ],
      warning: null,
      image: '/api/placeholder/400/250'
    },
    {
      step: 3,
      title: 'Position Joint 1 (Base)',
      duration: '3-4 min',
      description: 'Calibrate the base rotation joint to zero position',
      details: [
        'Using teach pendant, jog Joint 1 to approximate zero position',
        'Place precision level on base mounting surface',
        'Fine-tune position until level reads exactly 0.0°',
        'Press "SET J1 ZERO" on calibration screen',
        'Verify green checkmark appears next to J1 status'
      ],
      warning: 'Joint 1 movement affects entire robot reach - move slowly',
      image: '/api/placeholder/400/250'
    },
    {
      step: 4,
      title: 'Calibrate Joints 2-3 (Arm)',
      duration: '4-5 min',
      description: 'Set arm joints to mechanical zero positions',
      details: [
        'Move Joint 2 until upper arm is perfectly horizontal',
        'Use calibration block to verify 90° position accuracy',
        'Press "SET J2 ZERO" when properly positioned',
        'Extend Joint 3 until forearm aligns with calibration marks',
        'Confirm both joints show green calibration status'
      ],
      warning: 'Support arm weight during movement to prevent motor strain',
      image: '/api/placeholder/400/250'
    },
    {
      step: 5,
      title: 'Calibrate Wrist Joints 4-6',
      duration: '3-4 min',
      description: 'Precisely align wrist joints to zero positions',
      details: [
        'Rotate Joint 4 (wrist rotation) to align reference marks',
        'Bend Joint 5 (wrist bend) to 0° using angle gauge',
        'Twist Joint 6 (flange) until mounting holes align vertically',
        'Set zero positions for all three wrist joints',
        'Verify all joint indicators show successful calibration'
      ],
      warning: 'Wrist joints are most sensitive - make micro adjustments only',
      image: '/api/placeholder/400/250'
    },
    {
      step: 6,
      title: 'Verification & Testing',
      duration: '2-3 min',
      description: 'Verify calibration accuracy and save settings',
      details: [
        'Run built-in calibration verification routine',
        'Check that all joints return to true zero when commanded',
        'Verify repeatability by cycling each joint 3 times',
        'Save calibration data to robot controller memory',
        'Record calibration completion in maintenance log'
      ],
      warning: 'If verification fails, repeat calibration for affected joints',
      image: '/api/placeholder/400/250'
    }
  ];

  const troubleshooting = [
    {
      issue: 'Joint won\'t move during calibration',
      causes: ['Emergency stop engaged', 'Motor brake not released', 'Servo drive fault'],
      solutions: ['Verify teach mode is active', 'Check brake release status', 'Reset servo drives']
    },
    {
      issue: 'Calibration values drift after setting',
      causes: ['Mechanical backlash', 'Encoder coupling loose', 'Temperature effects'],
      solutions: ['Approach zero from same direction', 'Check encoder mounting', 'Allow warm-up time']
    },
    {
      issue: 'Controller rejects calibration',
      causes: ['Position out of range', 'Safety system active', 'Previous cal data corrupt'],
      solutions: ['Move to valid position', 'Clear safety faults', 'Reset calibration memory']
    }
  ];

  const relatedDocuments = [
    { title: 'Robot Maintenance Schedule', id: 'DOC-015' },
    { title: 'Encoder Replacement Procedure', id: 'DOC-023' },
    { title: 'Safety System Testing', id: 'DOC-031' },
    { title: 'Teach Pendant Operations', id: 'DOC-008' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900/50 border-b border-gray-700/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-white">{documentMeta.title}</h1>
              <p className="text-gray-400 text-sm">{documentMeta.equipment} • {documentMeta.documentId}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${isFavorite ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
            >
              <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-lg transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-lg transition-colors">
              <Printer className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-900/30 border-r border-gray-700/50 p-6">
          {/* Document Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Document Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Revision:</span>
                <span className="text-white">{documentMeta.revision}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Updated:</span>
                <span className="text-white">{documentMeta.lastUpdated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Est. Time:</span>
                <span className="text-white">{documentMeta.estimatedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Difficulty:</span>
                <span className="text-yellow-400">{documentMeta.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Safety Level:</span>
                <span className="text-orange-400">{documentMeta.safetyLevel}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Progress</h3>
            <div className="space-y-2">
              {calibrationSteps.map((step) => (
                <div 
                  key={step.step}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                    currentStep === step.step ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-gray-800/50'
                  }`}
                  onClick={() => setCurrentStep(step.step)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep > step.step ? 'bg-green-600 text-white' :
                    currentStep === step.step ? 'bg-blue-600 text-white' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {currentStep > step.step ? <CheckCircle className="w-4 h-4" /> : step.step}
                  </div>
                  <span className={`text-sm ${currentStep === step.step ? 'text-white' : 'text-gray-400'}`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Tools */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-400" />
              Required Tools
            </h3>
            <ul className="space-y-1 text-sm text-gray-300">
              {requiredTools.map((tool, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Tutorial */}
          <div className="mb-6">
            <button 
              onClick={() => setShowVideo(!showVideo)}
              className="w-full flex items-center gap-2 p-3 bg-green-600/20 border border-green-500/30 rounded-lg hover:bg-green-600/30 transition-colors"
            >
              <Play className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Watch Video Tutorial</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Safety Warnings */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Safety Warnings
            </h3>
            <ul className="space-y-2">
              {safetyWarnings.map((warning, index) => (
                <li key={index} className="flex items-start gap-2 text-red-300">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  {warning}
                </li>
              ))}
            </ul>
          </div>

          {/* Current Step */}
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {currentStep}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{calibrationSteps[currentStep - 1].title}</h2>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {calibrationSteps[currentStep - 1].duration}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="p-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:text-gray-600 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCurrentStep(Math.min(calibrationSteps.length, currentStep + 1))}
                  disabled={currentStep === calibrationSteps.length}
                  className="p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-600 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-6">{calibrationSteps[currentStep - 1].description}</p>

            {/* Step Image */}
            <div className="mb-6">
              <img 
                src={calibrationSteps[currentStep - 1].image} 
                alt={`Step ${currentStep} illustration`}
                className="w-full max-w-lg mx-auto rounded-lg border border-gray-600"
              />
            </div>

            {/* Detailed Steps */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Detailed Instructions:</h4>
              <ol className="space-y-3">
                {calibrationSteps[currentStep - 1].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Step Warning */}
            {calibrationSteps[currentStep - 1].warning && (
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Warning:</span>
                </div>
                <p className="text-yellow-300 mt-1">{calibrationSteps[currentStep - 1].warning}</p>
              </div>
            )}
          </div>

          {/* Troubleshooting Section */}
          {currentStep === calibrationSteps.length && (
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-orange-400" />
                Troubleshooting
              </h3>
              
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">{item.issue}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Possible Causes:</p>
                        <ul className="list-disc list-inside text-gray-300 text-sm">
                          {item.causes.map((cause, i) => (
                            <li key={i}>{cause}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Solutions:</p>
                        <ul className="list-disc list-inside text-green-300 text-sm">
                          {item.solutions.map((solution, i) => (
                            <li key={i}>{solution}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Documents */}
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Related Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedDocuments.map((doc, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors cursor-pointer">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <div>
                    <p className="text-white font-medium">{doc.title}</p>
                    <p className="text-gray-400 text-xs">{doc.id}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointCalibrationGuide;