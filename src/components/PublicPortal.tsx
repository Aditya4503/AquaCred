import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Leaf, 
  Fish, 
  Users, 
  DollarSign,
  Play,
  Search,
  Shield,
  Link,
  ExternalLink,
  Globe,
  BarChart3,
  Zap,
  Clock,
  Target,
  Award,
  Wallet,
  TrendingDown,
  Dna,
  Star,
  ArrowUpRight,
  CheckCircle,
  Timer,
  Sparkles,
  Camera,
  Database,
  LineChart,
  Pause,
  RotateCcw,
  FastForward,
  X,
  Calculator,
  TrendingUpIcon,
  AlertCircle,
  Loader
} from 'lucide-react';
import { NeoBrutalistChart } from './NeoBrutalistChart';

export function PublicPortal() {
  const [timeSlider, setTimeSlider] = useState([2024]);
  const [selectedProject, setSelectedProject] = useState('sundarbans');
  const [fmoInvestment, setFmoInvestment] = useState([50000]);
  const [selectedTab, setSelectedTab] = useState('finance');
  
  // FMO Investment Modal States
  const [investmentModalOpen, setInvestmentModalOpen] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState([3]);
  const [riskTolerance, setRiskTolerance] = useState('moderate');
  const [isCalculating, setIsCalculating] = useState(false);
  const [investmentResults, setInvestmentResults] = useState(null);
  
  // Time-lapse Modal States
  const [timelapseModalOpen, setTimelapseModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentYear, setCurrentYear] = useState(2022);
  const [playbackSpeed, setPlaybackSpeed] = useState([1]);
  const [timelapseProgress, setTimelapseProgress] = useState(0);

  const projects = {
    sundarbans: {
      name: "Sundarban Mangrove Restoration",
      location: "West Bengal, India",
      area: "2,500 hectares",
      funding: 80,
      startYear: 2022,
      image: "https://images.unsplash.com/photo-1758588700427-137684839185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: {
        carbonSequestered: "15,420",
        jobsCreated: "340",
        biodiversityIncrease: "+25%",
        fishCatchIncrease: "+18%"
      },
      finance: {
        totalValue: "$2.5M",
        fmoTokens: 12500,
        fmoPrice: "$200",
        projectedCredits: 25000,
        currentStage: "ex-ante",
        roi: "18-25%"
      },
      biodiversity: {
        species: 45,
        ednaSamples: 1247,
        nftsIssued: 23,
        newSpecies: 3
      }
    },
    kerala: {
      name: "Kerala Backwater Conservation",
      location: "Kerala, India", 
      area: "1,800 hectares",
      funding: 65,
      startYear: 2023,
      image: "https://images.unsplash.com/photo-1662757171170-30a462b7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2FyYm9uJTIwZWNvc3lzdGVtJTIwb2NlYW58ZW58MXx8fHwxNzU5MDYzOTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: {
        carbonSequestered: "8,560",
        jobsCreated: "180",
        biodiversityIncrease: "+31%",
        fishCatchIncrease: "+22%"
      },
      finance: {
        totalValue: "$1.8M",
        fmoTokens: 9000,
        fmoPrice: "$200",
        projectedCredits: 18000,
        currentStage: "restoration",
        roi: "15-22%"
      },
      biodiversity: {
        species: 38,
        ednaSamples: 892,
        nftsIssued: 17,
        newSpecies: 2
      }
    }
  };

  const project = projects[selectedProject];

  // Investment calculation function
  const calculateInvestment = async () => {
    setIsCalculating(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const amount = parseFloat(investmentAmount) || 0;
    const duration = investmentDuration[0];
    const baseROI = riskTolerance === 'low' ? 0.15 : riskTolerance === 'moderate' ? 0.22 : 0.30;
    const riskMultiplier = riskTolerance === 'low' ? 0.8 : riskTolerance === 'moderate' ? 1.0 : 1.2;
    
    const projectedReturn = amount * (1 + (baseROI * riskMultiplier * duration));
    const totalGain = projectedReturn - amount;
    const annualizedReturn = ((projectedReturn / amount) ** (1/duration) - 1) * 100;
    const tokens = Math.floor(amount / 200); // $200 per FMO token
    const carbonCredits = tokens * 2; // 2 credits per token estimated
    
    setInvestmentResults({
      initialInvestment: amount,
      projectedReturn: projectedReturn,
      totalGain: totalGain,
      annualizedReturn: annualizedReturn,
      tokens: tokens,
      carbonCredits: carbonCredits,
      duration: duration,
      riskLevel: riskTolerance
    });
    
    setIsCalculating(false);
  };

  // Time-lapse animation logic
  useEffect(() => {
    let interval;
    if (isPlaying && timelapseModalOpen) {
      interval = setInterval(() => {
        setCurrentYear(prev => {
          const nextYear = prev + 1;
          if (nextYear > 2024) {
            setIsPlaying(false);
            return 2024;
          }
          return nextYear;
        });
        setTimelapseProgress(prev => {
          const newProgress = ((currentYear - 2022) / (2024 - 2022)) * 100;
          return Math.min(newProgress, 100);
        });
      }, 1000 / playbackSpeed[0]);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timelapseModalOpen, currentYear, playbackSpeed]);

  const resetTimelapse = () => {
    setCurrentYear(2022);
    setTimelapseProgress(0);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const biodiversityNFTs = [
    {
      id: 1,
      name: "Royal Bengal Tiger DNA",
      species: "Panthera tigris",
      rarity: "Legendary",
      samples: 5,
      location: "Sundarbans Core",
      price: "1.5 ETH",
      verified: true,
      image: "https://images.unsplash.com/photo-1551470260-7c6d5a8b7b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWdlciUyMHNuJTIwc3VuZGFyYmFuc3xlbnwxfHx8fDE3NTkwNjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 2,
      name: "Irrawaddy Dolphin DNA",
      species: "Orcaella brevirostris",
      rarity: "Epic",
      samples: 12,
      location: "Sundarbans Marine",
      price: "0.8 ETH",
      verified: true,
      image: "https://images.unsplash.com/photo-1578662019020-aa2c5c3e0c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xwaGluJTIwbWFyaW5lJTIwbGlmZXxlbnwxfHx8fDE3NTkwNjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      id: 3,
      name: "Saltwater Crocodile DNA",
      species: "Crocodylus porosus",
      rarity: "Rare", 
      samples: 8,
      location: "Mangrove Channels",
      price: "0.4 ETH",
      verified: true,
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jb2RpbGUlMjB3aWxkbGlmZXxlbnwxfHx8fDE3NTkwNjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/80 via-ocean-medium/70 to-transparent z-10"></div>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGFtYXpvbiUyMGRyb25lJTIwYWVyaWFsfGVufDF8fHx8MTc1OTA2Mzk0NHww&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Aerial view of mangrove restoration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-6xl font-bold mb-6">
              AquaCredZ
              <span className="block text-3xl font-normal text-blue-200 mt-2">
                National Blue Carbon Registry
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Revolutionary Ex-Ante Finance • Data Sovereignty • Biodiversity NFTs
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Dialog open={investmentModalOpen} onOpenChange={setInvestmentModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-coral-accent hover:bg-coral-accent/90 hover:scale-105 text-white px-8 py-4 transition-all duration-200 cursor-pointer shadow-lg">
                    <Wallet className="mr-2 h-5 w-5" />
                    Invest in FMO Tokens
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-2xl">
                      <Wallet className="mr-3 h-6 w-6 text-coral-accent" />
                      FMO Token Investment Calculator
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {!investmentResults ? (
                      <>
                        {/* Investment Input Form */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="amount">Investment Amount ($)</Label>
                              <Input
                                id="amount"
                                type="number"
                                placeholder="Enter amount"
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(e.target.value)}
                                className="mt-1"
                              />
                            </div>
                            
                            <div>
                              <Label>Investment Duration (Years)</Label>
                              <Slider
                                value={investmentDuration}
                                onValueChange={setInvestmentDuration}
                                min={1}
                                max={10}
                                step={1}
                                className="mt-2"
                              />
                              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                                <span>1 Year</span>
                                <span className="font-semibold">{investmentDuration[0]} Years</span>
                                <span>10 Years</span>
                              </div>
                            </div>
                            
                            <div>
                              <Label>Risk Tolerance</Label>
                              <div className="grid grid-cols-3 gap-2 mt-2">
                                {['low', 'moderate', 'high'].map((risk) => (
                                  <Button
                                    key={risk}
                                    size="sm"
                                    variant={riskTolerance === risk ? 'default' : 'outline'}
                                    onClick={() => setRiskTolerance(risk)}
                                    className="capitalize"
                                  >
                                    {risk}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <Card className="border-2 border-coral-accent/20">
                              <CardHeader>
                                <CardTitle className="text-lg">Current Project: {project.name}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span>FMO Token Price:</span>
                                    <span className="font-semibold">{project.finance.fmoPrice}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Expected ROI:</span>
                                    <span className="font-semibold text-green-600">{project.finance.roi}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Project Stage:</span>
                                    <Badge className="capitalize">{project.finance.currentStage}</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Tokens Available:</span>
                                    <span className="font-semibold">{project.finance.fmoTokens.toLocaleString()}</span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <div className="flex items-center mb-2">
                                <AlertCircle className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-800">Investment Information</span>
                              </div>
                              <p className="text-xs text-blue-600">
                                FMO tokens represent future mitigation outcomes. Investments are subject to project performance and environmental factors.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          onClick={calculateInvestment}
                          disabled={!investmentAmount || isCalculating}
                          className="w-full bg-coral-accent hover:bg-coral-accent/90"
                          size="lg"
                        >
                          {isCalculating ? (
                            <>
                              <Loader className="mr-2 h-4 w-4 animate-spin" />
                              Calculating Returns...
                            </>
                          ) : (
                            <>
                              <Calculator className="mr-2 h-4 w-4" />
                              Calculate Investment Returns
                            </>
                          )}
                        </Button>
                      </>
                    ) : (
                      /* Investment Results Display */
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                      >
                        <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-green-800 mb-2">Investment Analysis Complete</h3>
                          <p className="text-muted-foreground">Based on your investment parameters and current project metrics</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border-2 border-green-200">
                            <CardHeader>
                              <CardTitle className="text-green-800">Investment Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="flex justify-between">
                                <span>Initial Investment:</span>
                                <span className="font-bold">${investmentResults.initialInvestment.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Investment Duration:</span>
                                <span className="font-bold">{investmentResults.duration} years</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Risk Level:</span>
                                <Badge className="capitalize">{investmentResults.riskLevel}</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>FMO Tokens:</span>
                                <span className="font-bold">{investmentResults.tokens.toLocaleString()}</span>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card className="border-2 border-blue-200">
                            <CardHeader>
                              <CardTitle className="text-blue-800">Projected Returns</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                              <div className="flex justify-between">
                                <span>Total Return:</span>
                                <span className="font-bold text-green-600">${investmentResults.projectedReturn.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Net Gain:</span>
                                <span className="font-bold text-green-600">+${investmentResults.totalGain.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Annualized Return:</span>
                                <span className="font-bold text-green-600">{investmentResults.annualizedReturn.toFixed(1)}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Carbon Credits:</span>
                                <span className="font-bold">{investmentResults.carbonCredits.toLocaleString()} tCO₂</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button 
                            onClick={() => {
                              setInvestmentResults(null);
                              setInvestmentAmount('');
                            }}
                            variant="outline"
                            className="flex-1"
                          >
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Recalculate
                          </Button>
                          <Button className="flex-1 bg-coral-accent hover:bg-coral-accent/90">
                            <Zap className="mr-2 h-4 w-4" />
                            Proceed to Investment
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog open={timelapseModalOpen} onOpenChange={setTimelapseModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-ocean-deep hover:scale-105 px-8 py-4 transition-all duration-200 cursor-pointer">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Time-lapse
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-2xl">
                      <Camera className="mr-3 h-6 w-6 text-blue-600" />
                      Ecosystem Time-lapse Visualization
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    {/* Time-lapse Video Area */}
                    <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden">
                      <motion.div
                        key={currentYear}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback 
                          src={project.image}
                          alt={`${project.name} - ${currentYear}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Overlay Information */}
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4 bg-black/80 text-white p-3 rounded-lg">
                        <h4 className="font-semibold">{project.name}</h4>
                        <p className="text-sm">{project.location}</p>
                      </div>
                      
                      <motion.div 
                        className="absolute top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-center"
                        animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                      >
                        <p className="text-3xl font-bold">{currentYear}</p>
                        <p className="text-sm">Current Year</p>
                      </motion.div>
                      
                      {/* Progress Indicator */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/80 text-white p-3 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm">Restoration Progress</span>
                            <span className="text-sm font-semibold">{Math.round(timelapseProgress)}%</span>
                          </div>
                          <Progress value={timelapseProgress} className="mb-2" />
                          <div className="flex justify-between text-xs">
                            <span>2022 (Start)</span>
                            <span>2024 (Current)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Playback Controls</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Button
                              onClick={togglePlayback}
                              className={isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
                            >
                              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </Button>
                            <Button onClick={resetTimelapse} variant="outline">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <div className="flex-1">
                              <Label className="text-sm">Playback Speed</Label>
                              <Slider
                                value={playbackSpeed}
                                onValueChange={setPlaybackSpeed}
                                min={0.5}
                                max={3}
                                step={0.5}
                                className="mt-1"
                              />
                              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>0.5x</span>
                                <span>{playbackSpeed[0]}x</span>
                                <span>3x</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Impact Metrics ({currentYear})</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <motion.div 
                              className="flex justify-between"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <span>Carbon Sequestered:</span>
                              <span className="font-semibold text-green-600">
                                {Math.round((currentYear - 2022) * 5140).toLocaleString()} tCO₂
                              </span>
                            </motion.div>
                            <div className="flex justify-between">
                              <span>Area Restored:</span>
                              <span className="font-semibold">
                                {Math.round((currentYear - 2022) * 625)} hectares
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Jobs Created:</span>
                              <span className="font-semibold">
                                {Math.round((currentYear - 2022) * 85)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Species Detected:</span>
                              <span className="font-semibold">
                                {Math.round(25 + (currentYear - 2022) * 10)}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-300">₹24.5M</p>
                <p className="text-sm text-blue-200">Total Investment</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-300">45,230</p>
                <p className="text-sm text-blue-200">Carbon Credits</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-300">1,247</p>
                <p className="text-sm text-blue-200">eDNA Samples</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-coral-accent">83</p>
                <p className="text-sm text-blue-200">Species Tracked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-14">
              <TabsTrigger value="finance" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>Ex-Ante Finance</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Live Projects</span>
              </TabsTrigger>
              <TabsTrigger value="biodiversity" className="flex items-center space-x-2">
                <Dna className="h-4 w-4" />
                <span>Biodiversity NFTs</span>
              </TabsTrigger>
              <TabsTrigger value="transparency" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Transparency</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          {/* Ex-Ante Finance Tab */}
          <TabsContent value="finance" className="mt-0">
            <div className="space-y-8">
              {/* Project Finance Lifecycle */}
              <Card className="border-2 border-coral-accent/20">
                <CardHeader className="bg-gradient-to-r from-coral-accent/10 to-orange-50">
                  <CardTitle className="flex items-center text-2xl">
                    <Target className="mr-3 h-6 w-6 text-coral-accent" />
                    Project Finance Lifecycle
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Revolutionary outcome-based financing with blockchain transparency
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stage 1: Ex-Ante Finance */}
                    <Card className="border-2 border-green-200 bg-green-50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-green-600 text-white">
                            <Clock className="mr-1 h-3 w-3" />
                            Active Now
                          </Badge>
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                        </div>
                        <CardTitle className="text-lg">Ex-Ante Finance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-green-600">{project.finance.fmoTokens}</p>
                            <p className="text-sm text-muted-foreground">FMO Tokens Available</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Token Price:</span>
                              <span className="font-semibold">{project.finance.fmoPrice}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Projected ROI:</span>
                              <span className="font-semibold text-green-600">{project.finance.roi}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>Expected Credits:</span>
                              <span className="font-semibold">{project.finance.projectedCredits.toLocaleString()}</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <label className="block text-sm font-medium mb-2">Investment Amount ($)</label>
                            <Slider
                              value={fmoInvestment}
                              onValueChange={setFmoInvestment}
                              min={1000}
                              max={100000}
                              step={1000}
                              className="mb-2"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>$1,000</span>
                              <span className="font-semibold">${fmoInvestment[0].toLocaleString()}</span>
                              <span>$100,000</span>
                            </div>
                            
                            <div className="mt-4 p-3 bg-green-100 rounded-lg">
                              <p className="text-sm text-green-800">
                                <strong>Your Potential Return:</strong>
                              </p>
                              <p className="text-lg font-bold text-green-600">
                                ${Math.round(fmoInvestment[0] * 1.22).toLocaleString()} - ${Math.round(fmoInvestment[0] * 1.25).toLocaleString()}
                              </p>
                              <p className="text-xs text-green-600">
                                Expected timeline: 3-5 years
                              </p>
                            </div>
                          </div>
                          
                          <Button className="w-full bg-coral-accent hover:bg-coral-accent/90">
                            <Zap className="mr-2 h-4 w-4" />
                            Acquire FMO Tokens
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Stage 2: Restoration & Growth */}
                    <Card className="border-2 border-blue-200 bg-blue-50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-blue-600 text-white">
                            In Progress
                          </Badge>
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                        </div>
                        <CardTitle className="text-lg">Restoration & Growth</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-blue-600">78%</p>
                            <p className="text-sm text-muted-foreground">Milestones Complete</p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Site preparation complete</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Seedlings planted (85%)</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-blue-600" />
                              <span className="text-sm">Survival monitoring ongoing</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Timer className="h-4 w-4 text-orange-600" />
                              <span className="text-sm">Carbon measurement pending</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <NeoBrutalistChart 
                              title="Growth Progress"
                              value={78}
                              trend="up"
                              data={[65, 70, 74, 78]}
                              color="blue"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Stage 3: Ex-Post Credits */}
                    <Card className="border-2 border-purple-200 bg-purple-50">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-purple-600 text-white">
                            Future
                          </Badge>
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                        </div>
                        <CardTitle className="text-lg">Ex-Post Credits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <p className="text-3xl font-bold text-purple-600">2025</p>
                            <p className="text-sm text-muted-foreground">Expected Credit Issuance</p>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Projected Credits:</span>
                              <span className="font-semibold">{project.finance.projectedCredits.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Market Price:</span>
                              <span className="font-semibold">$45-$55</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Total Value:</span>
                              <span className="font-semibold text-purple-600">$1.1M - $1.4M</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4">
                            <div className="h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                                <p className="text-sm text-purple-800">Credit tokenization</p>
                                <p className="text-xs text-purple-600">Automated distribution</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="mt-0">
            <div className="space-y-8">
              {/* Project Selection */}
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {Object.entries(projects).map(([key, proj]) => (
                  <Card 
                    key={key}
                    className={`min-w-80 cursor-pointer transition-all hover:shadow-lg ${
                      selectedProject === key ? 'ring-2 ring-coral-accent' : ''
                    }`}
                    onClick={() => setSelectedProject(key)}
                  >
                    <CardContent className="p-4">
                      <div className="relative h-32 mb-3">
                        <ImageWithFallback 
                          src={proj.image}
                          alt={proj.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <Badge className={`absolute top-2 right-2 ${
                          proj.finance.currentStage === 'ex-ante' ? 'bg-green-600' : 'bg-blue-600'
                        }`}>
                          {proj.finance.currentStage === 'ex-ante' ? 'Investing' : 'Active'}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1">{proj.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{proj.location}</p>
                      <div className="flex justify-between text-sm">
                        <span>Progress: {proj.funding}%</span>
                        <span>{proj.finance.totalValue}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Living Map Widget */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-blue-600" />
                    Living Satellite Map - {project.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Interactive time-series satellite imagery showing ecosystem transformation
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="relative h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback 
                      src={project.image}
                      alt="Satellite view"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Map overlay info */}
                    <div className="absolute top-4 left-4 bg-black/80 text-white p-3 rounded-lg">
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm">{project.location}</p>
                      <p className="text-sm text-green-400">Area: {project.area}</p>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-black/80 text-white p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold">{timeSlider[0]}</p>
                      <p className="text-sm">Current Year</p>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 text-white p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Timeline</span>
                          <Button 
                            size="sm" 
                            className="bg-coral-accent hover:bg-coral-accent/90"
                            onClick={() => setTimelapseModalOpen(true)}
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Play Time-lapse
                          </Button>
                        </div>
                        <Slider
                          value={timeSlider}
                          onValueChange={setTimeSlider}
                          min={project.startYear}
                          max={2024}
                          step={1}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-xs">
                          <span>{project.startYear}</span>
                          <span>2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics Dashboard */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <NeoBrutalistChart 
                      title="Carbon Sequestered"
                      value={project.metrics.carbonSequestered}
                      trend="up"
                      unit="tCO2"
                      color="green"
                    />
                    <NeoBrutalistChart 
                      title="Jobs Created"
                      value={project.metrics.jobsCreated}
                      trend="up"
                      color="blue"
                    />
                    <NeoBrutalistChart 
                      title="Biodiversity Increase"
                      value={project.metrics.biodiversityIncrease}
                      trend="up"
                      color="purple"
                    />
                    <NeoBrutalistChart 
                      title="Fish Catch Increase"
                      value={project.metrics.fishCatchIncrease}
                      trend="up"
                      color="orange"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Biodiversity NFTs Tab */}
          <TabsContent value="biodiversity" className="mt-0">
            <div className="space-y-8">
              {/* Biodiversity Hub Header */}
              <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Dna className="mr-3 h-6 w-6 text-green-600" />
                    Dynamic Biodiversity Hub
                  </CardTitle>
                  <p className="text-muted-foreground">
                    eDNA-verified biodiversity tracking with collectible NFTs
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">{project.biodiversity.species}</p>
                      <p className="text-sm text-muted-foreground">Species Tracked</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-blue-600">{project.biodiversity.ednaSamples}</p>
                      <p className="text-sm text-muted-foreground">eDNA Samples</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-purple-600">{project.biodiversity.nftsIssued}</p>
                      <p className="text-sm text-muted-foreground">NFTs Issued</p>
                    </div>
                  </div>
                  
                  {/* Biodiversity Lift Chart */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                      Biodiversity Lift (Verified by eDNA)
                    </h4>
                    <div className="h-40 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="h-12 w-12 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-green-800">+{project.biodiversity.newSpecies} new species discovered</p>
                        <p className="text-xs text-green-600">Population increase: {project.metrics.biodiversityIncrease}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Biodiversity NFT Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-purple-600" />
                    Collectible Biodiversity NFTs
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Each NFT represents verified eDNA data for endangered species
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {biodiversityNFTs.map((nft) => (
                      <Card key={nft.id} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                        <div className="relative">
                          <ImageWithFallback 
                            src={nft.image}
                            alt={nft.name}
                            className="w-full h-48 object-cover"
                          />
                          <Badge 
                            className={`absolute top-2 right-2 ${
                              nft.rarity === 'Legendary' ? 'bg-yellow-600' :
                              nft.rarity === 'Epic' ? 'bg-purple-600' : 'bg-blue-600'
                            }`}
                          >
                            {nft.rarity}
                          </Badge>
                          {nft.verified && (
                            <div className="absolute top-2 left-2 bg-green-600 text-white rounded-full p-1">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1">{nft.name}</h4>
                          <p className="text-sm text-muted-foreground italic mb-2">{nft.species}</p>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>eDNA Samples:</span>
                              <span className="font-semibold">{nft.samples}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Location:</span>
                              <span className="font-semibold">{nft.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Current Price:</span>
                              <span className="font-bold text-purple-600">{nft.price}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 mt-4">
                            <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                              <Wallet className="mr-1 h-3 w-3" />
                              Buy NFT
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Database className="mr-1 h-3 w-3" />
                              View Data
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-6">
                    <Button variant="outline" size="lg">
                      <Star className="mr-2 h-4 w-4" />
                      View All Biodiversity NFTs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Transparency Tab */}
          <TabsContent value="transparency" className="mt-0">
            <div className="space-y-8">
              {/* Transparency Dashboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-blue-600" />
                    Blockchain Transparency Dashboard
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Real-time verification and audit trail for all project activities
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <NeoBrutalistChart 
                      title="Total Transactions"
                      value="12,457"
                      trend="up"
                      color="blue"
                    />
                    <NeoBrutalistChart 
                      title="Data Points Verified"
                      value="8,923"
                      trend="up"
                      color="green"
                    />
                    <NeoBrutalistChart 
                      title="Smart Contracts"
                      value="23"
                      trend="stable"
                      color="purple"
                    />
                    <NeoBrutalistChart 
                      title="Community Validators"
                      value="156"
                      trend="up"
                      color="orange"
                    />
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Blockchain Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Link className="mr-2 h-5 w-5 text-green-600" />
                    Recent Blockchain Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        type: "Data Upload",
                        hash: "0x7d2c...8f9a",
                        timestamp: "2 minutes ago",
                        status: "Verified",
                        user: "Priya Sharma"
                      },
                      {
                        type: "FMO Purchase",
                        hash: "0x3e1b...7c4d",
                        timestamp: "15 minutes ago", 
                        status: "Confirmed",
                        user: "Climate Fund XYZ"
                      },
                      {
                        type: "eDNA Verification",
                        hash: "0x9a8c...2e5f",
                        timestamp: "1 hour ago",
                        status: "Verified",
                        user: "NCCR Validator"
                      },
                      {
                        type: "Carbon Credit Mint",
                        hash: "0x5f2d...1b9e",
                        timestamp: "3 hours ago",
                        status: "Minted",
                        user: "System"
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.status === 'Verified' ? 'bg-green-500' :
                            activity.status === 'Confirmed' ? 'bg-blue-500' :
                            activity.status === 'Minted' ? 'bg-purple-500' : 'bg-gray-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-sm">{activity.type}</p>
                            <p className="text-xs text-muted-foreground">by {activity.user}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-mono text-blue-600">{activity.hash}</p>
                          <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-6">
                    <Button variant="outline">
                      <Database className="mr-2 h-4 w-4" />
                      View Full Blockchain Explorer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}