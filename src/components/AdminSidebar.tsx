import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  BarChart3, 
  Shield, 
  Users, 
  Coins, 
  MapPin, 
  FileText,
  AlertTriangle,
  Settings,
  HelpCircle,
  Waves,
  Leaf,
  FileCheck
} from 'lucide-react';

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <BarChart3 className="h-5 w-5" />,
      badge: null
    },
    {
      id: 'verification',
      label: 'Data Verification',
      icon: <Shield className="h-5 w-5" />,
      badge: '128'
    },
    {
      id: 'did-management',
      label: 'User & DID Management',
      icon: <Users className="h-5 w-5" />,
      badge: '7'
    },
    {
      id: 'carbon-credits',
      label: 'Carbon Credit Operations',
      icon: <Coins className="h-5 w-5" />,
      badge: null
    },
    {
      id: 'project-management',
      label: 'Project Management',
      icon: <MapPin className="h-5 w-5" />,
      badge: null
    },
    {
      id: 'disaster',
      label: 'Disaster Tracking',
      icon: <AlertTriangle className="h-5 w-5" />,
      badge: '3'
    },
    {
      id: 'compliance',
      label: 'Compliance & Permits',
      icon: <FileCheck className="h-5 w-5" />,
      badge: '12'
    },
    {
      id: 'analytics',
      label: 'Reports & Analytics',
      icon: <FileText className="h-5 w-5" />,
      badge: null
    }
  ];

  const bottomMenuItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle className="h-5 w-5" />
    }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      {/* <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Waves className="h-8 w-8 text-primary" />
            <Leaf className="h-4 w-4 text-green-600 absolute -top-1 -right-1" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AquaCredZ</h1>
            <p className="text-xs text-muted-foreground">NCCR Admin Portal</p>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="flex-1 py-6">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'default' : 'ghost'}
              className={`w-full justify-start h-auto py-3 px-3 text-left ${
                activeTab === item.id 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <Badge 
                    variant={activeTab === item.id ? 'secondary' : 'outline'}
                    className={`ml-auto ${
                      activeTab === item.id 
                        ? 'bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30' 
                        : 'bg-orange-100 text-orange-800 border-orange-200'
                    }`}
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
            </Button>
          ))}
        </nav>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-200 p-3">
        <nav className="space-y-1">
          {bottomMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start h-auto py-2 px-3 text-left text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => onTabChange(item.id)}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
            </Button>
          ))}
        </nav>
      </div>

      {/* Status Footer */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">System Operational</span>
          </div>
          <p className="text-xs text-gray-500">
            Last sync: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}