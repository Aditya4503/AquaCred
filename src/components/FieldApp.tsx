import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { 
  Camera, 
  MapPin, 
  Award, 
  Star, 
  Plus, 
  Clock, 
  CheckCircle, 
  Upload,
  Coins,
  Target,
  TrendingUp,
  Wifi,
  WifiOff,
  User,
  Zap,
  Flame,
  Crown,
  Shield,
  Dna,
  Waves,
  Leaf,
  ChevronRight,
  TrendingDown,
  Database,
  Lock,
  Unlock,
  BarChart3,
  Timer,
  Smartphone
} from 'lucide-react';
import { OnboardingFlow } from './OnboardingFlow';

export function FieldApp() {
  const [currentScreen, setCurrentScreen] = useState<'onboarding' | 'dashboard' | 'upload' | 'profile' | 'data-sovereignty'>('onboarding');
  const [isOnline, setIsOnline] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [uploadStep, setUploadStep] = useState(1);
  const [selectedDataType, setSelectedDataType] = useState('');
  const [stakingAmount, setStakingAmount] = useState([1250]);

  const mockUser = {
    name: "Priya Sharma",
    org: "Sundarbans Conservation NGO",
    rScore: 92,
    avatar: "/placeholder-avatar.jpg",
    tokensEarned: 2847,
    dotsBalance: 156,
    level: "Carbon Guardian",
    did: "did:aqua:z6Mkf5rGMoatrSj1f4CyvuHBeXJELe9RPdzo2PKGNCKVtZxP",
    streak: 5
  };

  const challenges = [
    {
      id: 1,
      title: "Upload 5 eDNA samples by Friday",
      progress: 3,
      total: 5,
      reward: "75 DOTs",
      deadline: "2 days left",
      type: "eDNA"
    },
    {
      id: 2,
      title: "Verify mangrove survival in 3 locations",
      progress: 1,
      total: 3,
      reward: "50 OCG",
      deadline: "5 days left",
      type: "mangrove"
    },
    {
      id: 3,
      title: "Complete biodiversity NFT capture",
      progress: 0,
      total: 1,
      reward: "100 OCG + NFT",
      deadline: "1 week left",
      type: "biodiversity"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "eDNA Sample #EDN-2024-001",
      status: "Verified",
      timestamp: "2 hours ago",
      tokens: "+35 DOTs",
      dataType: "eDNA"
    },
    {
      id: 2,
      action: "Mangrove Survival Count",
      status: "Pending",
      timestamp: "5 hours ago",
      tokens: "Pending verification",
      dataType: "mangrove"
    },
    {
      id: 3,
      action: "Biodiversity Photo Capture",
      status: "Verified",
      timestamp: "1 day ago",
      tokens: "+40 OCG",
      dataType: "biodiversity"
    }
  ];

  if (currentScreen === 'onboarding') {
    return (
      <OnboardingFlow onComplete={() => setCurrentScreen('dashboard')} />
    );
  }

  if (currentScreen === 'data-sovereignty') {
    return (
      <div className="min-h-screen bg-background md:max-w-md md:mx-auto md:border-x">
        {/* Data Sovereignty Header */}
        <div className="bg-gradient-to-r from-ocean-deep to-ocean-medium text-white px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('dashboard')} className="text-white hover:bg-white/20">
              ← Back
            </Button>
            <h1 className="font-semibold">Data Sovereignty</h1>
            <div></div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold">Your Data, Your Asset</h2>
            <p className="text-blue-100 text-sm">Community-owned environmental intelligence</p>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* DOTs Balance */}
          <Card className="border-2 border-coral-accent/20 bg-gradient-to-br from-white to-coral-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coins className="mr-2 h-5 w-5 text-coral-accent" />
                Data Ownership Tokens (DOTs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-coral-accent">{mockUser.dotsBalance}</p>
                <p className="text-sm text-muted-foreground">DOTs Balance</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Data Points Contributed</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Licensing Revenue</span>
                  <span className="font-semibold text-green-600">₹2,340</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Community Share</span>
                  <span className="font-semibold">15.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Data Licenses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5 text-green-600" />
                Active Data Licenses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">NCCR Research License</p>
                  <p className="text-xs text-muted-foreground">eDNA & Biodiversity Data</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">₹890/month</p>
                  <p className="text-xs text-muted-foreground">365 days left</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Climate Finance Coalition</p>
                  <p className="text-xs text-muted-foreground">Carbon Monitoring Data</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">₹450/month</p>
                  <p className="text-xs text-muted-foreground">180 days left</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Approve New License Request
              </Button>
            </CardContent>
          </Card>

          {/* Community Revenue Stream */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                Live Revenue Stream
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-purple-800">Real-time earnings visualization</p>
                  <p className="text-xs text-purple-600">Last 30 days: ₹1,340 earned</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-lg font-bold text-green-600">₹89</p>
                  <p className="text-xs text-muted-foreground">Today</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-blue-600">₹567</p>
                  <p className="text-xs text-muted-foreground">This Week</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">₹1,340</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentScreen === 'upload') {
    return (
      <div className="min-h-screen bg-background md:max-w-md md:mx-auto md:border-x">
        {/* Upload Flow Header */}
        <div className="bg-card border-b px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('dashboard')}>
            ← Back
          </Button>
          <div className="text-center">
            <h1 className="font-semibold">Advanced Data Collection</h1>
            <p className="text-xs text-muted-foreground">Step {uploadStep} of 3</p>
          </div>
          <div className="flex items-center space-x-1 text-sm">
            {isOnline ? <Wifi className="h-4 w-4 text-green-500" /> : <WifiOff className="h-4 w-4 text-red-500" />}
            <span className={isOnline ? "text-green-600" : "text-red-600"}>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {uploadStep === 1 && (
            <>
              {/* Data Type Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Select Data Type</CardTitle>
                  <p className="text-sm text-muted-foreground">Choose the type of environmental data you're collecting</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDataType === 'edna' 
                        ? 'border-coral-accent bg-coral-accent/5' 
                        : 'border-border hover:border-coral-accent/50'
                    }`}
                    onClick={() => setSelectedDataType('edna')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Dna className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">eDNA Sample Log</h3>
                        <p className="text-sm text-muted-foreground">Environmental DNA collection for biodiversity tracking</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDataType === 'photo' 
                        ? 'border-coral-accent bg-coral-accent/5' 
                        : 'border-border hover:border-coral-accent/50'
                    }`}
                    onClick={() => setSelectedDataType('photo')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Camera className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Photo/Video Evidence</h3>
                        <p className="text-sm text-muted-foreground">Visual documentation with GPS verification</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedDataType === 'mangrove' 
                        ? 'border-coral-accent bg-coral-accent/5' 
                        : 'border-border hover:border-coral-accent/50'
                    }`}
                    onClick={() => setSelectedDataType('mangrove')}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Leaf className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Mangrove Survival Count</h3>
                        <p className="text-sm text-muted-foreground">Track restoration progress and survival rates</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {selectedDataType && (
                <Button 
                  className="w-full bg-coral-accent hover:bg-coral-accent/90" 
                  onClick={() => setUploadStep(2)}
                >
                  Continue to Data Capture
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </>
          )}

          {uploadStep === 2 && (
            <>
              {/* Enhanced Data Capture */}
              <Card>
                <CardContent className="p-6">
                  <div className="relative bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-4">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1606498889725-2d5b87c4e3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGVETkElMjBzYW1wbGluZ3xlbnwxfHx8fDE3NTkwNjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Data capture interface"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    
                    {/* Enhanced overlay info */}
                    <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-2 rounded-lg text-xs">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-400" />
                        <span>21.9462°N, 88.2673°E</span>
                      </div>
                      <p className="text-green-400 mt-1">GPS: High Accuracy (±2m)</p>
                    </div>
                    
                    <div className="absolute top-2 right-2 bg-black/80 text-white px-3 py-2 rounded-lg text-xs">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-blue-400" />
                        <span>14:32:45 IST</span>
                      </div>
                      <p className="text-blue-400 mt-1">2024-01-15</p>
                    </div>
                    
                    <div className="absolute bottom-2 left-2 bg-black/80 text-white px-3 py-2 rounded-lg text-xs">
                      <p className="text-yellow-400">Sundarbans Core Zone</p>
                      <p className="text-gray-300">Site ID: SUN-001-A</p>
                    </div>

                    {/* Pulsing location indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-coral-accent rounded-full animate-pulse">
                        <div className="w-4 h-4 bg-coral-accent rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-coral-accent hover:bg-coral-accent/90">
                      <Camera className="mr-2 h-4 w-4" />
                      Capture High-Res Photo
                    </Button>
                    
                    <div className="grid grid-cols-4 gap-2">
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Video
                      </Button>
                      <Button variant="outline" size="sm">
                        Flash
                      </Button>
                      <Button variant="outline" size="sm">
                        Grid
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* eDNA Specific Fields */}
              {selectedDataType === 'edna' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Dna className="mr-2 h-5 w-5 text-green-600" />
                      eDNA Sample Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Sample Kit ID</label>
                      <Input placeholder="EDN-2024-001" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Water Temperature (°C)</label>
                      <Input type="number" placeholder="28.5" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">pH Level</label>
                      <Input type="number" step="0.1" placeholder="7.8" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Collection Notes</label>
                      <Textarea placeholder="Water clarity: clear, minimal debris. Collected 500ml at depth of 0.5m..." rows={3} />
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setUploadStep(1)} className="flex-1">
                  Back
                </Button>
                <Button 
                  className="flex-1 bg-coral-accent hover:bg-coral-accent/90" 
                  onClick={() => setUploadStep(3)}
                >
                  Review & Submit
                </Button>
              </div>
            </>
          )}

          {uploadStep === 3 && (
            <>
              {/* Final Review */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Review & Submit to Ledger
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Data Type</p>
                      <p className="font-semibold capitalize">{selectedDataType}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-semibold">Sundarbans Core</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Timestamp</p>
                      <p className="font-semibold">14:32 IST</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">GPS Accuracy</p>
                      <p className="font-semibold text-green-600">High (±2m)</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Rewards Estimation</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Base Reward:</span>
                        <span className="font-semibold">+25 OCG</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data Sovereignty Bonus:</span>
                        <span className="font-semibold">+15 DOTs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>High Accuracy Bonus:</span>
                        <span className="font-semibold">+5 OCG</span>
                      </div>
                      <div className="border-t pt-1 flex justify-between font-semibold">
                        <span>Total Estimated:</span>
                        <span className="text-green-600">+30 OCG, +15 DOTs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-ocean-deep to-ocean-medium hover:from-ocean-medium hover:to-ocean-light text-white">
                  <Upload className="mr-2 h-4 w-4" />
                  Submit to Blockchain Ledger
                </Button>
                
                {!isOnline && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-amber-800">
                      <WifiOff className="h-4 w-4" />
                      <span className="text-sm">Offline: Data encrypted & stored locally, will auto-sync</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  if (currentScreen === 'profile') {
    return (
      <div className="min-h-screen bg-background md:max-w-md md:mx-auto md:border-x">
        {/* Enhanced Profile Header */}
        <div className="bg-gradient-to-r from-ocean-deep to-ocean-medium text-white px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('dashboard')} className="text-white hover:bg-white/20">
              ← Back
            </Button>
            <h1 className="font-semibold">My Profile</h1>
            <div></div>
          </div>
          
          <div className="text-center">
            <div className="relative">
              <Avatar className="h-24 w-24 mx-auto mb-3 border-4 border-white/20">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback><User className="h-10 w-10" /></AvatarFallback>
              </Avatar>
              {/* Animated R-Score ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin mx-auto"
                   style={{width: '96px', height: '96px'}}></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-coral-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                R: {mockUser.rScore}
              </div>
            </div>
            <h2 className="text-xl font-semibold">{mockUser.name}</h2>
            <p className="text-blue-100">{mockUser.org}</p>
            <p className="text-xs text-blue-200 mt-1">DID: {mockUser.did.substring(0, 24)}...</p>
            
            <div className="flex items-center justify-center space-x-4 mt-3">
              <div className="bg-white/20 rounded-full px-3 py-1 flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="text-sm">R-Score: {mockUser.rScore}</span>
                <TrendingUp className="h-4 w-4 text-green-300" />
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1 flex items-center space-x-2">
                <Flame className="h-4 w-4 text-orange-300" />
                <span className="text-sm">{mockUser.streak} day streak</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* R-Score Trend Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-yellow-600" />
                R-Score Breakdown & Trend
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                  <p className="text-sm text-orange-800">30-day upward trend</p>
                  <p className="text-xs text-orange-600">+12 points this month</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Verified Uploads</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Data Accuracy</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Consistency</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Community Impact</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Staking Interface */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Coins className="mr-2 h-5 w-5 text-coral-accent" />
                Token Staking & Earnings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-coral-accent/10 rounded-lg p-3">
                  <p className="text-2xl font-bold text-coral-accent">{stakingAmount[0]}</p>
                  <p className="text-sm text-muted-foreground">OCG Staked</p>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-2xl font-bold text-green-600">{mockUser.dotsBalance}</p>
                  <p className="text-sm text-muted-foreground">DOTs Balance</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Adjust Staking Amount</label>
                <Slider
                  value={stakingAmount}
                  onValueChange={setStakingAmount}
                  min={0}
                  max={3000}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 OCG</span>
                  <span>{stakingAmount[0]} OCG</span>
                  <span>3,000 OCG</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-800 mb-2">Potential Monthly Earnings</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Staking Rewards (15% APY):</span>
                    <span className="font-semibold">~{Math.round(stakingAmount[0] * 0.15 / 12)} OCG</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Data Licensing Revenue:</span>
                    <span className="font-semibold">~₹{Math.round(stakingAmount[0] / 10)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Governance Bonus:</span>
                    <span className="font-semibold">+5% voting power</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-coral-accent hover:bg-coral-accent/90">
                <Lock className="mr-2 h-4 w-4" />
                Stake {stakingAmount[0]} OCG Tokens
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Achievement Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold">First Upload</p>
                  <p className="text-xs text-green-600">Earned</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Dna className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold">eDNA Pioneer</p>
                  <p className="text-xs text-green-600">Earned</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold">Data Sovereign</p>
                  <p className="text-xs text-green-600">Earned</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold">Guardian</p>
                  <p className="text-xs text-orange-600">In Progress</p>
                </div>
                <div className="text-center opacity-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-xs font-semibold">Validator</p>
                  <p className="text-xs text-gray-500">Locked</p>
                </div>
                <div className="text-center opacity-50">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="h-6 w-6 text-gray-400" />
                  </div>
                  <p className="text-xs font-semibold">Master</p>
                  <p className="text-xs text-gray-500">Locked</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background md:max-w-md md:mx-auto md:border-x">
      {/* Enhanced Header with DID */}
      <div className="bg-card border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10 ring-2 ring-coral-accent">
                <AvatarImage src={mockUser.avatar} />
                <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 bg-coral-accent text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {mockUser.rScore}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full h-3 w-3 border-2 border-white"></div>
            </div>
            <div>
              <h2 className="font-semibold">{mockUser.name}</h2>
              <p className="text-sm text-muted-foreground">{mockUser.level}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setCurrentScreen('data-sovereignty')}
              className="text-coral-accent hover:bg-coral-accent/10"
            >
              <Database className="h-4 w-4 mr-1" />
              DOTs
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setCurrentScreen('profile')}
              className="text-primary"
            >
              Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Enhanced Hero Progress Card */}
        <Card className="bg-gradient-to-r from-ocean-deep via-ocean-medium to-aqua-green text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Crown className="mr-2 h-5 w-5 text-yellow-300" />
                Your Data Empire
              </h3>
              <div className="flex items-center space-x-1">
                <Flame className="h-4 w-4 text-orange-300" />
                <span className="text-sm">{mockUser.streak} day streak!</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold flex items-center justify-center">
                  {mockUser.tokensEarned}
                  <Zap className="ml-1 h-5 w-5 text-yellow-300" />
                </p>
                <p className="text-blue-100 text-sm">OCG Tokens</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold flex items-center justify-center">
                  {mockUser.dotsBalance}
                  <Database className="ml-1 h-5 w-5 text-coral-accent" />
                </p>
                <p className="text-blue-100 text-sm">DOTs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">3,500</p>
                <p className="text-blue-100 text-sm">Next Level</p>
              </div>
            </div>
            
            <div className="bg-white/20 rounded-full h-3 w-full mb-2">
              <div className="bg-gradient-to-r from-yellow-300 to-coral-accent rounded-full h-3 w-4/5 flex items-center justify-end pr-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-xs text-blue-200 mb-3">81% to Carbon Guardian Elite</p>
            
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-coral-accent text-white border-0">
                <Crown className="mr-1 h-3 w-3" />
                {mockUser.level}
              </Badge>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-green-300" />
                <span>DID Verified</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Challenges with enhanced rewards */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center">
            <Target className="mr-2 h-5 w-5 text-coral-accent" />
            Active Challenges
          </h3>
          <div className="space-y-3">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-md transition-all hover:border-coral-accent/50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm flex items-center">
                      {challenge.type === 'eDNA' && <Dna className="mr-2 h-4 w-4 text-green-600" />}
                      {challenge.type === 'mangrove' && <Leaf className="mr-2 h-4 w-4 text-emerald-600" />}
                      {challenge.type === 'biodiversity' && <Star className="mr-2 h-4 w-4 text-purple-600" />}
                      {challenge.title}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {challenge.reward}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Progress 
                      value={(challenge.progress / challenge.total) * 100} 
                      className="flex-1 mr-3 h-2" 
                    />
                    <span className="text-xs text-muted-foreground">
                      {challenge.progress}/{challenge.total}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Timer className="mr-1 h-3 w-3" />
                      {challenge.deadline}
                    </p>
                    {challenge.progress === challenge.total && (
                      <Badge className="bg-green-600 text-white text-xs">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Complete
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Recent Activity */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center">
            <BarChart3 className="mr-2 h-5 w-5 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 bg-card rounded-lg border hover:border-coral-accent/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'Verified' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
                  }`}></div>
                  <div className="flex items-center space-x-2">
                    {activity.dataType === 'eDNA' && <Dna className="h-4 w-4 text-green-600" />}
                    {activity.dataType === 'mangrove' && <Leaf className="h-4 w-4 text-emerald-600" />}
                    {activity.dataType === 'biodiversity' && <Camera className="h-4 w-4 text-purple-600" />}
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={activity.status === 'Verified' ? 'default' : 'secondary'}
                    className="text-xs mb-1"
                  >
                    {activity.status}
                  </Badge>
                  <p className="text-xs text-green-600 font-semibold">{activity.tokens}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-6 right-6 md:right-1/2 md:translate-x-1/2 md:bottom-6">
        <Button 
          size="lg" 
          className="h-16 w-16 rounded-full bg-gradient-to-r from-coral-accent to-orange-500 hover:from-orange-500 hover:to-red-500 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => {setCurrentScreen('upload'); setUploadStep(1); setSelectedDataType('');}}
        >
          <Plus className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
}