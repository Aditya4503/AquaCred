import React, { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { FieldApp } from './components/FieldApp';
import { PublicPortal } from './components/PublicPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { Smartphone, Globe, Shield, Waves, Leaf, Link } from 'lucide-react';

export default function App() {
  const [activeInterface, setActiveInterface] = useState<'splash' | 'field' | 'public' | 'admin'>('splash');

  if (activeInterface !== 'splash') {
    return (
      <div className="min-h-screen bg-background">
        {/* Dynamic Navigation Header */}
        <header className="border-b bg-[rgba(255,255,255,0.95)] shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-card/95">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                onClick={() => setActiveInterface('splash')}
              >
                <div className="relative transform hover:scale-110 transition-transform duration-200">
                  <Waves className="h-8 w-8 text-blue-600" />
                  <Leaf className="h-4 w-4 text-green-600 absolute -top-1 -right-1" />
                  <Link className="h-3 w-3 text-orange-500 absolute bottom-0 left-0" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">AquaCred</h1>
                  <p className="text-sm text-muted-foreground">National Blue Carbon Registry</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant={activeInterface === 'field' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveInterface('field')}
                  className={`flex items-center space-x-1 cursor-pointer transition-all duration-200 ${
                    activeInterface === 'field' 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105'
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  <span>Field App</span>
                </Button>
                <Button 
                  variant={activeInterface === 'public' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveInterface('public')}
                  className={`flex items-center space-x-1 cursor-pointer transition-all duration-200 ${
                    activeInterface === 'public' 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'border-green-600 text-green-600 hover:bg-green-50 hover:scale-105'
                  }`}
                >
                  <Globe className="h-4 w-4" />
                  <span>Public Portal</span>
                </Button>
                <Button 
                  variant={activeInterface === 'admin' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveInterface('admin')}
                  className={`flex items-center space-x-1 cursor-pointer transition-all duration-200 ${
                    activeInterface === 'admin' 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'border-orange-500 text-orange-500 hover:bg-orange-50 hover:scale-105'
                  }`}
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setActiveInterface('splash')}
                  className="cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-200"
                >
                  Home
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Interface Content */}
        <main>
          {activeInterface === 'field' && <FieldApp />}
          {activeInterface === 'public' && <PublicPortal />}
          {activeInterface === 'admin' && <AdminDashboard />}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Splash Screen */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Logo and Hero */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative p-4 bg-white rounded-full shadow-lg">
                <Waves className="h-16 w-16 text-blue-600" />
                <Leaf className="h-8 w-8 text-green-600 absolute -top-1 -right-1 bg-white rounded-full p-1" />
                <Link className="h-6 w-6 text-orange-500 absolute bottom-0 left-0 bg-white rounded-full p-1" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-slate-800 mb-4">AquaCred</h1>
            <p className="text-2xl text-slate-600 mb-2">National Blue Carbon Registry & Data Sovereignty Platform</p>
            <p className="text-lg text-slate-500">Your Data, Your Asset • Powering Restoration with Every Upload</p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Field Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Data Sovereignty platform with eDNA monitoring, R-Score gamification, and tokenized rewards for verified ecosystem data
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Public Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ex-Ante Finance portal with FMO tokens, living satellite maps, and tradeable Biodiversity NFTs backed by eDNA data
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Admin Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced verification with spatial indexing, instant geohash audits, and automated data licensing via smart contracts
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Interface Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-700 mb-6">Explore AquaCred Interfaces</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-6 text-lg shadow-lg transform transition-all duration-200 cursor-pointer"
                onClick={() => setActiveInterface('field')}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Field App Demo
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-8 py-6 text-lg shadow-lg transform transition-all duration-200 cursor-pointer"
                onClick={() => setActiveInterface('public')}
              >
                <Globe className="mr-2 h-5 w-5" />
                Public Portal
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white px-8 py-6 text-lg shadow-lg transform transition-all duration-200 cursor-pointer"
                onClick={() => setActiveInterface('admin')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Admin Dashboard
              </Button>
            </div>
          </div>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Data Sovereignty (DOTs)
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Ex-Ante Finance (FMOs)
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              Spatial Indexing
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              eDNA Monitoring
            </Badge>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
              Biodiversity NFTs
            </Badge>
            <Badge variant="secondary" className="bg-pink-100 text-pink-800">
              DID Authentication
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}