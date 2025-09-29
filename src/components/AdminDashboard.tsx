import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText, 
  Users, 
  Coins, 
  MapPin, 
  Filter,
  Search,
  Eye,
  X,
  Shield,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Zap,
  Calendar,
  Globe,
  User,
  Database,
  Layers,
  Satellite,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  History,
  Dna,
  Settings,
  Activity,
  FileCheck,
  XCircle,
  Timer,
  Hash,
  Camera,
  MousePointer,
  ZoomIn,
  RefreshCw,
  Upload,
  Download,
  ExternalLink,
  Lock,
  Unlock,
  PlusCircle,
  Edit,
  Trash2,
  MoreHorizontal,
  CloudUpload,
  Fingerprint,
  Award,
  HelpCircle
} from 'lucide-react';
import { AdminSidebar } from './AdminSidebar';
import { NeoBrutalistChart } from './NeoBrutalistChart';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [hoveredPin, setHoveredPin] = useState<any>(null);
  const [spatialImageIndex, setSpatialImageIndex] = useState(0);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [complianceFilter, setComplianceFilter] = useState('all');

  const pendingSubmissions = [
    {
      id: "SUB001",
      project: "Sundarbans Restoration",
      uploader: "Priya Sharma",
      uploaderScore: 92,
      dataType: "eDNA Sample",
      timestamp: "2 hours ago",
      status: "Pending",
      location: "22.4°N, 88.4°E",
      geohash: "tuz7w8k2",
      accuracy: "±2m",
      notes: "eDNA sample EDN-2024-001 collected at high tide. Water clarity: clear, minimal debris.",
      image: "https://images.unsplash.com/photo-1606498889725-2d5b87c4e3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGVETkElMjBzYW1wbGluZ3xlbnwxfHx8fDE3NTkwNjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=400",
      priority: "high"
    },
    {
      id: "SUB002", 
      project: "Kerala Backwater Conservation",
      uploader: "Raj Kumar",
      uploaderScore: 78,
      dataType: "Mangrove Count",
      timestamp: "5 hours ago",
      status: "Pending",
      location: "9.5°N, 76.3°E",
      geohash: "tut5m9b3",
      accuracy: "±5m",
      notes: "Counted 45 surviving mangrove saplings in designated plot KER-001-B. Growth rate appears normal.",
      image: "https://images.unsplash.com/photo-1758588700427-137684839185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=400",
      priority: "medium"
    },
    {
      id: "SUB003",
      project: "Andaman Marine Protection",
      uploader: "Dr. Sarah Johnson", 
      uploaderScore: 96,
      dataType: "Biodiversity Survey",
      timestamp: "1 day ago",
      status: "Pending",
      location: "11.7°N, 92.7°E",
      geohash: "w3gv38h9",
      accuracy: "±1m",
      notes: "Comprehensive biodiversity survey with underwater photography. 12 species documented including 2 rare coral varieties.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjBiaW9kaXZlcnNpdHl8ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=400",
      priority: "high"
    }
  ];

  // Mock compliance documents data
  const complianceDocuments = [
    {
      id: "DOC001",
      projectName: "Sundarbans Restoration",
      documentType: "No-Objection Certificate",
      issuingAuthority: "West Bengal Forest Department",
      uploadDate: "2024-09-25",
      expiryDate: "2025-09-25",
      status: "Verified",
      blockchainTx: "0x7d4a...8f2c",
      uploader: "Priya Sharma",
      fileSize: "2.4 MB",
      verifiedBy: "Dr. Kumar Singh",
      verificationDate: "2024-09-26"
    },
    {
      id: "DOC002",
      projectName: "Kerala Backwater Conservation",
      documentType: "Environmental Clearance",
      issuingAuthority: "Kerala State Pollution Control Board",
      uploadDate: "2024-09-20",
      expiryDate: "2026-09-20",
      status: "Pending Verification",
      blockchainTx: "0x9b1e...3a7d",
      uploader: "Raj Kumar",
      fileSize: "1.8 MB",
      verifiedBy: null,
      verificationDate: null
    },
    {
      id: "DOC003",
      projectName: "Andaman Marine Protection",
      documentType: "Tribal Consent Resolution",
      issuingAuthority: "Andaman & Nicobar Administration",
      uploadDate: "2024-09-15",
      expiryDate: "2027-09-15",
      status: "Verified",
      blockchainTx: "0x4c8b...9e1f",
      uploader: "Dr. Sarah Johnson",
      fileSize: "3.1 MB",
      verifiedBy: "Dr. Kumar Singh",
      verificationDate: "2024-09-18"
    },
    {
      id: "DOC004",
      projectName: "Goa Coastal Protection",
      documentType: "Local Panchayat Resolution",
      issuingAuthority: "Goa Panchayat Board",
      uploadDate: "2024-09-28",
      expiryDate: "2025-12-31",
      status: "Under Review",
      blockchainTx: "0x2f5d...7c4a",
      uploader: "Maria D'Souza",
      fileSize: "1.2 MB",
      verifiedBy: null,
      verificationDate: null
    }
  ];

  // Mock users data
  const usersData = [
    {
      id: "USR001",
      name: "Priya Sharma",
      email: "priya.sharma@conservation.org",
      role: "Field Coordinator",
      organization: "Sundarbans Conservation NGO",
      rScore: 92,
      didStatus: "Verified",
      joinDate: "2023-01-15",
      lastActive: "2 hours ago",
      totalSubmissions: 245,
      verifiedSubmissions: 238
    },
    {
      id: "USR002",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@marine.research",
      role: "Marine Biologist",
      organization: "Andaman Marine Research Institute",
      rScore: 96,
      didStatus: "Verified",
      joinDate: "2022-08-20",
      lastActive: "1 day ago",
      totalSubmissions: 512,
      verifiedSubmissions: 509
    },
    {
      id: "USR003",
      name: "Raj Kumar",
      email: "raj.kumar@kerala.gov.in",
      role: "Environmental Officer",
      organization: "Kerala Forest Department",
      rScore: 78,
      didStatus: "Pending",
      joinDate: "2024-03-10",
      lastActive: "5 hours ago",
      totalSubmissions: 89,
      verifiedSubmissions: 82
    }
  ];

  // Mock projects data
  const projectsData = [
    {
      id: "PROJ001",
      name: "Sundarbans Restoration",
      location: "West Bengal, India",
      status: "Active",
      healthScore: 89,
      fundingStatus: 75,
      totalFunding: "₹2,50,00,000",
      carbonCredits: 15420,
      areaSize: "1,250 hectares",
      startDate: "2023-01-15",
      coordinator: "Priya Sharma",
      lastUpdate: "2 hours ago"
    },
    {
      id: "PROJ002",
      name: "Kerala Backwater Conservation",
      location: "Kerala, India",
      status: "Active",
      healthScore: 76,
      fundingStatus: 60,
      totalFunding: "₹1,80,00,000",
      carbonCredits: 8900,
      areaSize: "850 hectares",
      startDate: "2023-06-20",
      coordinator: "Raj Kumar",
      lastUpdate: "1 day ago"
    },
    {
      id: "PROJ003",
      name: "Andaman Marine Protection",
      location: "Andaman & Nicobar Islands",
      status: "Planning",
      healthScore: 0,
      fundingStatus: 25,
      totalFunding: "₹3,20,00,000",
      carbonCredits: 0,
      areaSize: "2,100 hectares",
      startDate: "2024-12-01",
      coordinator: "Dr. Sarah Johnson",
      lastUpdate: "3 days ago"
    }
  ];

  // Mock spatial images for disaster tracking
  const spatialImages = [
    {
      date: "2024-01-15",
      type: "Satellite",
      source: "Sentinel-2",
      url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMHZpZXd8ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      date: "2023-12-20",
      type: "Drone",
      source: "Field Survey",
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGFtYXpvbiUyMGRyb25lJTIwYWVyaWFsfGVufDF8fHx8MTc1OTA2Mzk0NHww&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      date: "2023-10-15", 
      type: "Satellite",
      source: "Planet Labs",
      url: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBpbWFnZXJ5JTIwZWFydGh8ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  const recentActions = [
    {
      id: 1,
      action: "Data Verified",
      submission: "SUB045",
      verifier: "Dr. Kumar",
      timestamp: "5 min ago",
      type: "approve"
    },
    {
      id: 2,
      action: "Compliance Document Approved",
      submission: "DOC003",
      verifier: "Dr. Kumar Singh",
      timestamp: "12 min ago", 
      type: "compliance"
    },
    {
      id: 3,
      action: "User Onboarded",
      submission: "Maria D'Souza",
      verifier: "System",
      timestamp: "1 hour ago",
      type: "user"
    }
  ];

  const metrics = [
    {
      title: "Pending Verification",
      value: "128", 
      trend: "up",
      change: "+12 today",
      color: "orange"
    },
    {
      title: "Data Points Verified",
      value: "8,923", 
      trend: "up",
      change: "+234 today",
      color: "green"
    },
    {
      title: "Active Validators",
      value: "12",
      trend: "stable",
      change: "Online now",
      color: "blue"
    },
    {
      title: "Avg Verification Time",
      value: "1.2h",
      trend: "down",
      change: "-0.3h improved",
      color: "purple"
    }
  ];

  const filteredComplianceDocs = complianceFilter === 'all' 
    ? complianceDocuments 
    : complianceDocuments.filter(doc => doc.status.toLowerCase().includes(complianceFilter));

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground flex items-center mb-2">
                <Shield className="mr-3 h-6 w-6 text-coral-accent" />
                AquaCred Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                National Centre for Coastal Research • Real-time monitoring & verification
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <NeoBrutalistChart 
                  key={index}
                  title={metric.title}
                  value={metric.value}
                  trend={metric.trend as 'up' | 'down' | 'stable'}
                  change={metric.change}
                  color={metric.color as 'blue' | 'green' | 'orange' | 'purple'}
                />
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-blue-600" />
                  Recent Verification Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions.map((action) => (
                    <div key={action.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          action.type === 'approve' ? 'bg-green-500' :
                          action.type === 'compliance' ? 'bg-blue-500' :
                          action.type === 'user' ? 'bg-purple-500' : 'bg-red-500'
                        }`}></div>
                        <div>
                          <p className="font-medium text-sm">{action.action}</p>
                          <p className="text-xs text-muted-foreground">{action.submission}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{action.verifier}</p>
                        <p className="text-xs text-muted-foreground">{action.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Data Verification Tab */}
        {activeTab === 'verification' && (
          <div className="h-full flex">
            {/* Left Panel - Submission Queue */}
            <div className="w-1/3 border-r bg-card overflow-y-auto">
              <div className="p-4 border-b bg-gradient-to-r from-coral-accent/10 to-orange-50">
                <h2 className="text-lg font-semibold flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-coral-accent" />
                  Verification Queue
                </h2>
                <p className="text-sm text-muted-foreground">
                  Spatial indexing powered by geohash coordinates
                </p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Input 
                    placeholder="Search submissions..." 
                    className="flex-1"
                  />
                  <Button size="sm" variant="outline">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {pendingSubmissions.map((submission) => (
                    <Card 
                      key={submission.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedSubmission?.id === submission.id 
                          ? 'ring-2 ring-coral-accent bg-coral-accent/5' 
                          : 'hover:border-coral-accent/50'
                      }`}
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                submission.priority === 'high' 
                                  ? 'border-red-400 text-red-600' 
                                  : submission.priority === 'medium'
                                  ? 'border-orange-400 text-orange-600'
                                  : 'border-blue-400 text-blue-600'
                              }`}
                            >
                              {submission.priority} priority
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {submission.dataType}
                            </Badge>
                          </div>
                          <Badge 
                            className={`text-xs ${
                              submission.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {submission.status}
                          </Badge>
                        </div>
                        
                        <h4 className="font-semibold text-sm mb-1">{submission.id}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{submission.project}</p>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{submission.uploader}</span>
                            <Badge variant="outline" className="text-xs ml-1">
                              R-Score: {submission.uploaderScore}
                            </Badge>
                          </div>
                          <span className="text-muted-foreground">{submission.timestamp}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Detailed View */}
            <div className="flex-1 bg-background">
              {selectedSubmission ? (
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-cyan-50">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">Submission Details: {selectedSubmission.id}</h2>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedSubmission(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Project</p>
                        <p className="font-medium">{selectedSubmission.project}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Data Type</p>
                        <p className="font-medium">{selectedSubmission.dataType}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium">{selectedSubmission.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Geohash</p>
                        <p className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{selectedSubmission.geohash}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-6 h-full">
                      {/* Left Column - Image */}
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Camera className="mr-2 h-4 w-4" />
                          Field Documentation
                        </h3>
                        <div className="bg-white rounded-lg border overflow-hidden">
                          <ImageWithFallback 
                            src={selectedSubmission.image}
                            alt="Field documentation"
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>GPS Accuracy:</strong> {selectedSubmission.accuracy}
                            </p>
                            <p className="text-sm">
                              {selectedSubmission.notes}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Verification Tools */}
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center">
                          <Satellite className="mr-2 h-4 w-4" />
                          Spatial Verification
                        </h3>
                        
                        <div className="space-y-4">
                          {/* Historical Imagery */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Historical Satellite Data</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="relative">
                                <ImageWithFallback 
                                  src={spatialImages[spatialImageIndex]?.url}
                                  alt="Satellite imagery"
                                  className="w-full h-32 object-cover rounded"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                  {spatialImages[spatialImageIndex]?.date} • {spatialImages[spatialImageIndex]?.source}
                                </div>
                                <div className="flex justify-between mt-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => setSpatialImageIndex(Math.max(0, spatialImageIndex - 1))}
                                    disabled={spatialImageIndex === 0}
                                  >
                                    <ChevronLeft className="h-4 w-4" />
                                  </Button>
                                  <span className="text-xs text-muted-foreground self-center">
                                    {spatialImageIndex + 1} / {spatialImages.length}
                                  </span>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => setSpatialImageIndex(Math.min(spatialImages.length - 1, spatialImageIndex + 1))}
                                    disabled={spatialImageIndex === spatialImages.length - 1}
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Verification Actions */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm">Verification Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <Button className="w-full bg-green-600 hover:bg-green-700">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve Submission
                              </Button>
                              <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                                <Clock className="mr-2 h-4 w-4" />
                                Request Additional Info
                              </Button>
                              <Button variant="outline" className="w-full border-red-500 text-red-600 hover:bg-red-50">
                                <XCircle className="mr-2 h-4 w-4" />
                                Reject Submission
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Select a Submission
                    </h3>
                    <p className="text-muted-foreground">
                      Choose a submission from the queue to review and verify
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* User & DID Management Tab */}
        {activeTab === 'did-management' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-600" />
                  User & DID Management
                </h1>
                <p className="text-muted-foreground">Manage user accounts and decentralized identities</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Onboard New Organization
              </Button>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Users</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Search users..." className="w-64" />
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>R-Score</TableHead>
                      <TableHead>DID Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.organization}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${
                            user.rScore >= 90 ? 'border-green-500 text-green-700' :
                            user.rScore >= 80 ? 'border-blue-500 text-blue-700' :
                            'border-orange-500 text-orange-700'
                          }`}>
                            {user.rScore}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.didStatus === 'Verified' ? 'default' : 'secondary'}>
                            {user.didStatus === 'Verified' ? (
                              <><Fingerprint className="mr-1 h-3 w-3" /> Verified</>
                            ) : (
                              <><Clock className="mr-1 h-3 w-3" /> Pending</>
                            )}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Carbon Credit Operations Tab */}
        {activeTab === 'carbon-credits' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold flex items-center mb-2">
                <Coins className="mr-3 h-6 w-6 text-green-600" />
                Carbon Credit Operations
              </h1>
              <p className="text-muted-foreground">Manage carbon credit lifecycle and token operations</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Credits Pending</p>
                      <p className="text-2xl font-bold text-orange-600">2,456</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Credits Issued</p>
                      <p className="text-2xl font-bold text-green-600">15,420</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Credits Sold</p>
                      <p className="text-2xl font-bold text-blue-600">12,890</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Market Price</p>
                      <p className="text-2xl font-bold text-purple-600">₹1,250</p>
                    </div>
                    <Coins className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lifecycle Control Panel */}
            <Card className="mb-8 border-2 border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Zap className="mr-2 h-5 w-5" />
                  Lifecycle Authority Panel
                </CardTitle>
                <p className="text-sm text-orange-700">
                  High-security operations require multi-factor authentication
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-16 bg-green-600 hover:bg-green-700">
                    <div className="flex flex-col items-center">
                      <Coins className="h-6 w-6 mb-1" />
                      <span>Execute Credit Minting</span>
                    </div>
                  </Button>
                  <Button className="h-16 bg-red-600 hover:bg-red-700">
                    <div className="flex flex-col items-center">
                      <Trash2 className="h-6 w-6 mb-1" />
                      <span>Execute Token Retirement</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Log */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="mr-2 h-5 w-5" />
                  Transaction Log
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Blockchain</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>TXN001</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-700">Mint</Badge>
                      </TableCell>
                      <TableCell>500 credits</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                      </TableCell>
                      <TableCell>2 hours ago</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          0x7a8b...4f2c
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TXN002</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700">Transfer</Badge>
                      </TableCell>
                      <TableCell>250 credits</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                      </TableCell>
                      <TableCell>5 hours ago</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          0x9c1d...8e7a
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Project Management Tab */}
        {activeTab === 'project-management' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                  Project Management
                </h1>
                <p className="text-muted-foreground">Monitor and manage blue carbon projects</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Project
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {project.location}
                        </p>
                      </div>
                      <Badge variant={
                        project.status === 'Active' ? 'default' :
                        project.status === 'Planning' ? 'secondary' : 'outline'
                      }>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Health Score */}
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Health Score</span>
                          <span className={`font-medium ${
                            project.healthScore >= 80 ? 'text-green-600' :
                            project.healthScore >= 60 ? 'text-orange-600' : 'text-red-600'
                          }`}>
                            {project.healthScore > 0 ? `${project.healthScore}%` : 'N/A'}
                          </span>
                        </div>
                        <Progress value={project.healthScore} className="h-2" />
                      </div>

                      {/* Funding Status */}
                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Funding Progress</span>
                          <span className="font-medium">{project.fundingStatus}%</span>
                        </div>
                        <Progress value={project.fundingStatus} className="h-2" />
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Total Funding</p>
                          <p className="font-medium">{project.totalFunding}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Area Size</p>
                          <p className="font-medium">{project.areaSize}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Carbon Credits</p>
                          <p className="font-medium">{project.carbonCredits > 0 ? project.carbonCredits.toLocaleString() : 'TBD'}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Coordinator</p>
                          <p className="font-medium">{project.coordinator}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-xs text-muted-foreground">
                          Updated {project.lastUpdate}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Disaster Tracking Tab */}
        {activeTab === 'disaster' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold flex items-center mb-2">
                <AlertTriangle className="mr-3 h-6 w-6 text-orange-600" />
                Disaster Tracking & Impact Assessment
              </h1>
              <p className="text-muted-foreground">Monitor environmental threats and assess project impacts</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Weather Alerts */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Active Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <Badge className="bg-red-600">High Risk</Badge>
                        <span className="text-xs text-red-600">2 hours ago</span>
                      </div>
                      <p className="text-sm font-medium">Cyclone Warning</p>
                      <p className="text-xs text-muted-foreground">Bay of Bengal • Affects Sundarbans project</p>
                    </div>
                    
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="border-orange-400 text-orange-600">Medium Risk</Badge>
                        <span className="text-xs text-orange-600">6 hours ago</span>
                      </div>
                      <p className="text-sm font-medium">Heavy Rainfall Alert</p>
                      <p className="text-xs text-muted-foreground">Kerala Backwaters • Monitor water levels</p>
                    </div>

                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="border-yellow-400 text-yellow-600">Low Risk</Badge>
                        <span className="text-xs text-yellow-600">1 day ago</span>
                      </div>
                      <p className="text-sm font-medium">High Tide Advisory</p>
                      <p className="text-xs text-muted-foreground">Andaman Islands • Normal tidal variations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Time-Lapse Viewer */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Satellite className="mr-2 h-5 w-5" />
                    Advanced Time-Lapse Viewer
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Before/After impact assessment with historical imagery
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Before Image */}
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Before Event
                      </h4>
                      <div className="relative">
                        <ImageWithFallback 
                          src={spatialImages[1]?.url}
                          alt="Before disaster"
                          className="w-full h-40 object-cover rounded"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          2023-12-20 • Baseline
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        After Event
                      </h4>
                      <div className="relative">
                        <ImageWithFallback 
                          src={spatialImages[0]?.url}
                          alt="After disaster"
                          className="w-full h-40 object-cover rounded"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          2024-01-15 • Post-Impact
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Controls */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <MousePointer className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <div className="flex-1 h-1 bg-gray-200 rounded relative">
                        <div className="absolute top-0 left-1/3 w-2 h-4 bg-blue-500 rounded-sm -mt-1.5"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">Jan 2024</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Play
                      </Button>
                      <Button variant="outline" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Select defaultValue="1x">
                        <SelectTrigger className="w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0.5x">0.5x</SelectItem>
                          <SelectItem value="1x">1x</SelectItem>
                          <SelectItem value="2x">2x</SelectItem>
                          <SelectItem value="4x">4x</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* NEW: Local Compliance & Permit Log Tab */}
        {activeTab === 'compliance' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <FileCheck className="mr-3 h-6 w-6 text-green-600" />
                  Local Compliance & Permit Log
                </h1>
                <p className="text-muted-foreground">
                  Immutable record of government documents, NOCs, and local resolutions
                </p>
              </div>
              <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <CloudUpload className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Upload Compliance Document</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Document Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="noc">No-Objection Certificate</SelectItem>
                          <SelectItem value="environmental">Environmental Clearance</SelectItem>
                          <SelectItem value="tribal">Tribal Consent Resolution</SelectItem>
                          <SelectItem value="panchayat">Local Panchayat Resolution</SelectItem>
                          <SelectItem value="forest">Forest Department Permit</SelectItem>
                          <SelectItem value="coastal">Coastal Zone Clearance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Project Name</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sundarbans">Sundarbans Restoration</SelectItem>
                          <SelectItem value="kerala">Kerala Backwater Conservation</SelectItem>
                          <SelectItem value="andaman">Andaman Marine Protection</SelectItem>
                          <SelectItem value="goa">Goa Coastal Protection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Issuing Authority</label>
                      <Input placeholder="e.g., West Bengal Forest Department" />
                    </div>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Drag and drop files here, or click to browse
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, JPG up to 10MB
                      </p>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setUploadModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Lock className="mr-2 h-4 w-4" />
                        Upload to Blockchain
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Filter Bar */}
            <Card className="mb-6">
              <CardContent className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input placeholder="Search documents by project, type, or authority..." className="w-full" />
                  </div>
                  <Select value={complianceFilter} onValueChange={setComplianceFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="pending">Pending Verification</SelectItem>
                      <SelectItem value="review">Under Review</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Document Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Compliance Documents ({filteredComplianceDocs.length})</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    <Hash className="h-3 w-3 mr-1" />
                    Blockchain Verified
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Details</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Authority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Dates</TableHead>
                      <TableHead>Blockchain</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredComplianceDocs.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{doc.documentType}</p>
                            <p className="text-sm text-muted-foreground">
                              {doc.fileSize} • Uploaded by {doc.uploader}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>{doc.projectName}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-sm">{doc.issuingAuthority}</p>
                            <p className="text-xs text-muted-foreground">Government Authority</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge variant={
                              doc.status === 'Verified' ? 'default' :
                              doc.status === 'Under Review' ? 'secondary' : 
                              'outline'
                            } className={
                              doc.status === 'Verified' ? 'bg-green-100 text-green-800' :
                              doc.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }>
                              {doc.status === 'Verified' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {doc.status === 'Under Review' && <Clock className="h-3 w-3 mr-1" />}
                              {doc.status === 'Pending Verification' && <Timer className="h-3 w-3 mr-1" />}
                              {doc.status}
                            </Badge>
                            {doc.verifiedBy && (
                              <p className="text-xs text-muted-foreground mt-1">
                                by {doc.verifiedBy}
                              </p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p><strong>Uploaded:</strong> {doc.uploadDate}</p>
                            <p><strong>Expires:</strong> {doc.expiryDate}</p>
                            {doc.verificationDate && (
                              <p className="text-green-600"><strong>Verified:</strong> {doc.verificationDate}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="link" size="sm" className="p-0 h-auto">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            {doc.blockchainTx}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            {doc.status === 'Pending Verification' && (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reports & Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6 text-purple-600" />
                  Reports & Analytics
                </h1>
                <p className="text-muted-foreground">Comprehensive analytics and reporting tools</p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="30days">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                    <SelectItem value="1year">Last year</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Export PDF
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verification Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Total Submissions</span>
                      <span className="font-bold">8,923</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Approved</span>
                      <span className="font-bold text-green-600">8,456 (94.8%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Rejected</span>
                      <span className="font-bold text-red-600">339 (3.8%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pending</span>
                      <span className="font-bold text-orange-600">128 (1.4%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Health Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Healthy Projects</span>
                      <span className="font-bold text-green-600">12 (80%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>At Risk Projects</span>
                      <span className="font-bold text-orange-600">2 (13%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Critical Projects</span>
                      <span className="font-bold text-red-600">1 (7%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average Health Score</span>
                      <span className="font-bold">82.4%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Total Documents</span>
                      <span className="font-bold">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Verified</span>
                      <span className="font-bold text-green-600">34 (72%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Under Review</span>
                      <span className="font-bold text-blue-600">8 (17%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pending</span>
                      <span className="font-bold text-orange-600">5 (11%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Carbon Credit Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Total Credits Issued</span>
                      <span className="font-bold">24,320</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Credits Sold</span>
                      <span className="font-bold text-blue-600">18,450 (76%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Revenue Generated</span>
                      <span className="font-bold text-green-600">₹2,30,62,500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average Price</span>
                      <span className="font-bold">₹1,250/credit</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold flex items-center">
                <Settings className="mr-3 h-6 w-6 text-gray-600" />
                Settings
              </h1>
              <p className="text-muted-foreground">Configure system settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="Dr. Kumar Singh" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="kumar.singh@nccr.gov.in" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Role</label>
                    <Input defaultValue="Lead Verification Officer" disabled />
                  </div>
                  <Button className="w-full">Update Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS Alerts</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Weekly Reports</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Fingerprint className="mr-2 h-4 w-4" />
                    Setup 2FA
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Backup Keys
                  </Button>
                  <Button variant="outline" className="w-full text-red-600 border-red-300 hover:bg-red-50">
                    <XCircle className="mr-2 h-4 w-4" />
                    Revoke Sessions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Help & Support Tab */}
        {activeTab === 'help' && (
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold flex items-center">
                <HelpCircle className="mr-3 h-6 w-6 text-blue-600" />
                Help & Support
              </h1>
              <p className="text-muted-foreground">Get help and support for the AquaCred platform</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-3">
                      <h4 className="font-medium mb-2">How do I verify data submissions?</h4>
                      <p className="text-sm text-muted-foreground">
                        Navigate to the Verification tab, select a submission from the queue, and use the spatial verification tools to cross-reference with satellite imagery.
                      </p>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-medium mb-2">What is the blockchain transaction hash?</h4>
                      <p className="text-sm text-muted-foreground">
                        The transaction hash is a unique identifier that proves a document or verification was recorded on the blockchain for immutable record-keeping.
                      </p>
                    </div>
                    <div className="border-b pb-3">
                      <h4 className="font-medium mb-2">How do I manage carbon credit operations?</h4>
                      <p className="text-sm text-muted-foreground">
                        Use the Carbon Credit Operations tab to mint new credits, track transfers, and retire tokens. All operations require multi-factor authentication.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="Brief description of your issue" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Priority</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="Describe your issue in detail..." rows={4} />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Support Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Platform Version</p>
                    <p className="font-medium">AquaCred v2.1.4</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Update</p>
                    <p className="font-medium">September 28, 2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Support ID</p>
                    <p className="font-medium">NCCR-ADM-2024-001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}