import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Waves, 
  Leaf, 
  Link, 
  Shield, 
  ChevronRight, 
  ChevronLeft,
  Award,
  Users,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

interface OnboardingFlowProps {
  onComplete: () => void;
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'login'>('splash');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'did' | 'email'>('did');

  const onboardingScreens = [
    {
      title: "Protect & Restore Our Blue Planet",
      subtitle: "Join the global movement to preserve critical coastal ecosystems",
      image: "https://images.unsplash.com/photo-1758588700427-137684839185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGZvcmVzdCUyMGNvYXN0YWwlMjBjb25zZXJ2YXRpb258ZW58MXx8fHwxNzU5MDYzOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Leaf className="h-12 w-12 text-green-500" />
    },
    {
      title: "Your Data Fuels Real Impact & Rewards",
      subtitle: "Earn tokens and build reputation while contributing to ocean conservation",
      image: "https://images.unsplash.com/photo-1758620839849-be53160b9645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwY29tbXVuaXR5JTIwd29ya2luZyUyMGVudmlyb25tZW50YWx8ZW58MXx8fHwxNzU5MDYzOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Award className="h-12 w-12 text-orange-500" />
    },
    {
      title: "Secure & Transparent Monitoring",
      subtitle: "Blockchain technology ensures your contributions are immutable and verified",
      image: "https://images.unsplash.com/photo-1631864032173-c2f015fe3459?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwbmV0d29yayUyMGRpZ2l0YWwlMjBjb25uZWN0aW9ufGVufDF8fHx8MTc1OTA2Mzk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Shield className="h-12 w-12 text-blue-500" />
    }
  ];

  if (currentScreen === 'splash') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-deep via-ocean-medium to-ocean-light flex items-center justify-center relative overflow-hidden">
        {/* Animated waves background */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center text-white">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative mx-auto w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
              <Waves className="h-16 w-16 text-white" />
              <Leaf className="h-8 w-8 text-green-300 absolute -top-2 -right-2 bg-white/20 rounded-full p-1" />
              <Link className="h-6 w-6 text-orange-300 absolute bottom-2 left-2 bg-white/20 rounded-full p-1" />
            </div>
            <h1 className="text-5xl font-bold mb-2">OceanGuard</h1>
            <p className="text-xl opacity-90">Blue Carbon MRV Platform</p>
          </div>

          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-8 py-6"
            onClick={() => setCurrentScreen('onboarding')}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  if (currentScreen === 'onboarding') {
    const currentSlide = onboardingScreens[onboardingStep];
    const isLastSlide = onboardingStep === onboardingScreens.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-blue-50 flex flex-col">
        {/* Progress indicator */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="flex space-x-2">
            {onboardingScreens.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === onboardingStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full">
            {/* Image */}
            <div className="relative mb-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex justify-center mb-4">
                    {currentSlide.icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{currentSlide.title}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{currentSlide.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 pb-8">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => {
                if (onboardingStep > 0) {
                  setOnboardingStep(onboardingStep - 1);
                } else {
                  setCurrentScreen('splash');
                }
              }}
              disabled={onboardingStep === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>

            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentScreen('login')}
                className="text-muted-foreground"
              >
                Skip
              </Button>
              
              <Button 
                onClick={() => {
                  if (isLastSlide) {
                    setCurrentScreen('login');
                  } else {
                    setOnboardingStep(onboardingStep + 1);
                  }
                }}
                className="bg-primary hover:bg-primary/90"
              >
                {isLastSlide ? 'Continue' : 'Next'}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-blue-50 flex items-center justify-center px-6">
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce delay-2000"></div>
        </div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Waves className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to OceanGuard</h1>
            <p className="text-muted-foreground">Secure login to start contributing</p>
          </div>

          {/* Login Method Selector */}
          <div className="flex bg-muted rounded-lg p-1 mb-6">
            <button
              onClick={() => setLoginMethod('did')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                loginMethod === 'did' 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Shield className="h-4 w-4 inline mr-2" />
              Decentralized ID
            </button>
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                loginMethod === 'email' 
                  ? 'bg-white text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              Email/Password
            </button>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {loginMethod === 'did' ? (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Decentralized Identity</label>
                  <Input 
                    placeholder="did:ocean:your-identity"
                    className="bg-white/50"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Your blockchain-verified identity for secure access
                  </p>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-6"
                  onClick={onComplete}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Connect with DID
                </Button>
                <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  <span>Blockchain-secured authentication</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-white/50 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 py-6"
                  onClick={onComplete}
                >
                  Sign In
                </Button>
              </>
            )}
          </div>

          {/* Benefits */}
          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">What you'll get:</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 text-orange-500" />
                <span>Earn tokens for verified data contributions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 text-blue-500" />
                <span>Build reputation through accurate submissions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-3 w-3 text-green-500" />
                <span>Direct impact on ocean conservation efforts</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              New to OceanGuard?{' '}
              <button className="text-primary hover:underline">
                Create Account
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}