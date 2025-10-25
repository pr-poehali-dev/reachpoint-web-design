import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { 
  AreaChart,
  Area,
  BarChart, 
  Bar, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const realtimeData = [
    { time: '09:00', users: 245, conversions: 12 },
    { time: '10:00', users: 389, conversions: 23 },
    { time: '11:00', users: 456, conversions: 31 },
    { time: '12:00', users: 523, conversions: 42 },
    { time: '13:00', users: 612, conversions: 58 },
    { time: '14:00', users: 734, conversions: 67 },
  ];

  const performanceMetrics = [
    { metric: 'Speed', value: 95 },
    { metric: 'Accuracy', value: 98 },
    { metric: 'Uptime', value: 99.9 },
    { metric: 'Support', value: 97 },
    { metric: 'Security', value: 100 },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Analytics',
      company: 'TechCorp Inc',
      text: 'Reachpoint.ai transformed how we make data-driven decisions. The insights are actionable and the interface is incredibly intuitive.',
      avatar: '👩‍💼',
      logo: 'TC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Data Officer',
      company: 'DataFlow Systems',
      text: 'We reduced our analysis time by 73% and increased prediction accuracy significantly. Best analytics platform we\'ve used.',
      avatar: '👨‍💼',
      logo: 'DF'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Business Intelligence',
      company: 'InnovateLabs',
      text: 'The ROI was evident within the first month. Reachpoint.ai is now central to our strategic planning process.',
      avatar: '👩',
      logo: 'IL'
    }
  ];

  const features = [
    {
      icon: 'TrendingUp',
      title: 'Real-Time Analytics',
      description: 'Monitor your key metrics as they happen with live dashboards that update in milliseconds',
      benefit: 'Make decisions 10x faster'
    },
    {
      icon: 'Brain',
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms detect patterns and predict trends before they happen',
      benefit: '98% prediction accuracy'
    },
    {
      icon: 'Shield',
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC 2 compliance, and role-based access control',
      benefit: '100% data protection'
    },
    {
      icon: 'Zap',
      title: 'Lightning Fast',
      description: 'Process millions of data points in seconds with our optimized infrastructure',
      benefit: 'Sub-second query times'
    },
    {
      icon: 'Users',
      title: 'Team Collaboration',
      description: 'Share insights, create reports, and collaborate seamlessly across your organization',
      benefit: 'Unlimited team members'
    },
    {
      icon: 'BarChart3',
      title: 'Custom Dashboards',
      description: 'Build personalized views with drag-and-drop simplicity and advanced customization',
      benefit: 'Infinite flexibility'
    }
  ];

  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'CloudSync', logo: 'CS' },
    { name: 'AnalyticsPro', logo: 'AP' },
    { name: 'InsightHub', logo: 'IH' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-gray-200/50 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="w-11 h-11 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="absolute -inset-1 bg-[#0D6EFD]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Reachpoint</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0D6EFD] to-[#0052CC] bg-clip-text text-transparent">.ai</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#0D6EFD] transition-colors font-medium text-sm">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-[#0D6EFD] transition-colors font-medium text-sm">Benefits</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0D6EFD] transition-colors font-medium text-sm">Customers</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0D6EFD] transition-colors font-medium text-sm">Pricing</a>
              <Button 
                size="lg"
                className="bg-[#0D6EFD] hover:bg-[#0052CC] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                Request Demo
              </Button>
            </nav>

            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-white">
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#0D6EFD]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-[#0D6EFD]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D6EFD] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D6EFD]"></span>
                </span>
                Trusted by 500+ enterprises worldwide
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-gray-900">
                Data analytics that
                <span className="block bg-gradient-to-r from-[#0D6EFD] via-[#0052CC] to-purple-600 bg-clip-text text-transparent mt-2">
                  drives growth
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Transform raw data into actionable insights with AI-powered analytics. 
                Make smarter decisions faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-[#0D6EFD] hover:bg-[#0052CC] text-lg px-10 py-7 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all group"
                >
                  Request Demo
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-7 border-2 hover:border-[#0D6EFD] hover:text-[#0D6EFD] hover:bg-blue-50/50 transition-all"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600 mt-1">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">&lt;100ms</div>
                  <div className="text-sm text-gray-600 mt-1">Response time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Enterprise clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 rounded-3xl shadow-2xl border border-gray-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Live Analytics Dashboard</h3>
                    <p className="text-sm text-gray-500 mt-1">Real-time performance metrics</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium text-green-700">Live</span>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={realtimeData}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0D6EFD" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#0D6EFD" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} tickLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.98)', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        padding: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#0D6EFD" 
                      fillOpacity={1} 
                      fill="url(#colorUsers)" 
                      strokeWidth={3}
                      dot={{ fill: '#0D6EFD', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="conversions" 
                      stroke="#22C55E" 
                      fillOpacity={1} 
                      fill="url(#colorConversions)" 
                      strokeWidth={3}
                      dot={{ fill: '#22C55E', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#0D6EFD]"></div>
                    <div>
                      <div className="text-xs text-gray-500">Active Users</div>
                      <div className="text-lg font-bold text-gray-900">734</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                    <div>
                      <div className="text-xs text-gray-500">Conversions</div>
                      <div className="text-lg font-bold text-gray-900">67</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl shadow-xl border border-gray-200/50 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Growth Rate</div>
                    <div className="text-2xl font-bold text-green-600">+156%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-sm text-gray-500 font-medium mb-8">TRUSTED BY LEADING COMPANIES</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {clients.map((client, idx) => (
              <div key={idx} className="flex items-center justify-center group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200 group-hover:border-[#0D6EFD] group-hover:shadow-lg transition-all">
                  <span className="text-lg font-bold text-gray-400 group-hover:text-[#0D6EFD] transition-colors">{client.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-[#0D6EFD] mb-6">
              <Icon name="Zap" size={16} />
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to transform how your team works with data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="group p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#0D6EFD]/30 cursor-pointer relative overflow-hidden bg-white"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D6EFD] to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-[#0D6EFD]/10 to-purple-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon name={feature.icon} className="text-[#0D6EFD]" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[#0D6EFD] font-semibold text-sm">
                    <Icon name="CheckCircle2" size={16} />
                    <span>{feature.benefit}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-[#0D6EFD] mb-6">
                <Icon name="Brain" size={16} />
                AI-Powered Intelligence
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Predictive analytics that see the future
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our advanced machine learning models analyze patterns across millions of data points 
                to predict trends and anomalies before they impact your business.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: 'Target', 
                    title: 'Precision Forecasting', 
                    desc: '98% accuracy in trend prediction' 
                  },
                  { 
                    icon: 'Bell', 
                    title: 'Smart Alerts', 
                    desc: 'Get notified of anomalies instantly' 
                  },
                  { 
                    icon: 'Sparkles', 
                    title: 'Auto-Insights', 
                    desc: 'AI discovers hidden opportunities' 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-[#0D6EFD]" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl shadow-2xl border border-gray-200/50">
              <h3 className="font-semibold text-gray-900 text-lg mb-6">Performance Metrics</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={performanceMetrics}>
                  <PolarGrid stroke="#E5E7EB" />
                  <PolarAngleAxis dataKey="metric" stroke="#6B7280" fontSize={12} />
                  <PolarRadiusAxis stroke="#6B7280" fontSize={12} />
                  <Radar 
                    name="Performance" 
                    dataKey="value" 
                    stroke="#0D6EFD" 
                    fill="#0D6EFD" 
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">97.8%</div>
                <div className="text-sm text-gray-600">Average Performance Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-card p-8 rounded-3xl shadow-2xl border border-gray-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900 text-lg">Team Performance</h3>
                  <div className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-medium text-purple-700">
                    Last 6 months
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={[
                    { month: 'Jan', productivity: 65, satisfaction: 72 },
                    { month: 'Feb', productivity: 72, satisfaction: 78 },
                    { month: 'Mar', productivity: 78, satisfaction: 82 },
                    { month: 'Apr', productivity: 85, satisfaction: 88 },
                    { month: 'May', productivity: 91, satisfaction: 92 },
                    { month: 'Jun', productivity: 95, satisfaction: 96 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} />
                    <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.98)', 
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="productivity" 
                      stroke="#0D6EFD" 
                      strokeWidth={3}
                      dot={{ fill: '#0D6EFD', strokeWidth: 2, r: 5 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#A855F7" 
                      strokeWidth={3}
                      dot={{ fill: '#A855F7', strokeWidth: 2, r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#0D6EFD]"></div>
                    <div>
                      <div className="text-xs text-gray-500">Productivity</div>
                      <div className="text-lg font-bold text-gray-900">95%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                      <div className="text-lg font-bold text-gray-900">96%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-sm font-medium text-purple-600 mb-6">
                <Icon name="Users" size={16} />
                Team Collaboration
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Unite your team around data
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Break down silos and foster collaboration with shared dashboards, 
                real-time updates, and intelligent notifications.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: 'MessageSquare', 
                    title: 'Shared Workspaces', 
                    desc: 'Collaborate in real-time on insights' 
                  },
                  { 
                    icon: 'Share2', 
                    title: 'Smart Sharing', 
                    desc: 'Control access with granular permissions' 
                  },
                  { 
                    icon: 'Workflow', 
                    title: 'Automated Reports', 
                    desc: 'Schedule and distribute insights automatically' 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-purple-600" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-[#0D6EFD] mb-6">
              <Icon name="Star" size={16} />
              Customer Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of companies making better decisions with Reachpoint.ai
            </p>
          </div>

          <div className="relative">
            <Card className="p-12 glass-card border border-gray-200/50 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <div className="text-7xl mb-6">{testimonials[activeTestimonial].avatar}</div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>

                <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mb-8 italic">
                  "{testimonials[activeTestimonial].text}"
                </p>
                
                <div>
                  <div className="font-bold text-xl text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600 mt-1">{testimonials[activeTestimonial].role}</div>
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-[#0D6EFD] to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                      {testimonials[activeTestimonial].logo}
                    </div>
                    <span className="text-sm font-semibold text-[#0D6EFD]">{testimonials[activeTestimonial].company}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    activeTestimonial === idx 
                      ? 'bg-[#0D6EFD] w-10 h-3' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-sm font-medium text-green-600 mb-6">
              <Icon name="CheckCircle2" size={16} />
              Security & Compliance
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Enterprise-grade security
            </h2>
            <p className="text-xl text-gray-600">
              Your data is protected with the highest security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Shield', title: 'SOC 2 Certified', desc: 'Type II compliance verified' },
              { icon: 'Lock', title: 'End-to-End Encryption', desc: 'AES-256 encryption at rest' },
              { icon: 'Key', title: 'SSO Integration', desc: 'SAML 2.0 and OAuth 2.0' },
              { icon: 'Server', title: 'Data Residency', desc: 'Choose your data location' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#0052CC] to-purple-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to transform your
            <br />
            analytics workflow?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed">
            Join 500+ companies using Reachpoint.ai to make smarter, faster decisions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-[#0D6EFD] hover:bg-gray-100 text-xl px-14 py-8 shadow-2xl hover:scale-105 transition-all group"
            >
              Request Demo
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-xl px-14 py-8 backdrop-blur-sm"
            >
              <Icon name="Calendar" className="mr-2" size={22} />
              Schedule Call
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Reachpoint</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#0D6EFD] to-purple-400 bg-clip-text text-transparent">.ai</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                Transform your data into actionable insights with AI-powered analytics 
                trusted by 500+ enterprises worldwide.
              </p>
              <div className="flex gap-4">
                {['Linkedin', 'Twitter', 'Github', 'Youtube'].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-11 h-11 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-[#0D6EFD] transition-all hover:scale-110"
                  >
                    <Icon name={social} size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wide">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              &copy; 2024 Reachpoint.ai. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0D6EFD] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#0D6EFD] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#0D6EFD] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
