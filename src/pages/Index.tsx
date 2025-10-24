import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const salesFunnelData = [
    { stage: 'Visitors', value: 10000, conversion: 100 },
    { stage: 'Leads', value: 3500, conversion: 35 },
    { stage: 'Qualified', value: 1200, conversion: 12 },
    { stage: 'Customers', value: 420, conversion: 4.2 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, growth: 12 },
    { month: 'Feb', revenue: 52000, growth: 15.5 },
    { month: 'Mar', revenue: 61000, growth: 17.3 },
    { month: 'Apr', revenue: 71000, growth: 16.4 },
    { month: 'May', revenue: 85000, growth: 19.7 },
    { month: 'Jun', revenue: 98000, growth: 15.3 },
  ];

  const trafficSourceData = [
    { name: 'Organic', value: 4200, color: '#3B82F6' },
    { name: 'Direct', value: 2800, color: '#10B981' },
    { name: 'Referral', value: 1500, color: '#F59E0B' },
    { name: 'Social', value: 1200, color: '#8B5CF6' },
  ];

  const engagementData = [
    { metric: 'Sessions', value: 95, trend: 'up' },
    { metric: 'Avg Duration', value: 82, trend: 'up' },
    { metric: 'Bounce Rate', value: 34, trend: 'down' },
    { metric: 'Retention', value: 78, trend: 'up' },
  ];

  const features = [
    {
      icon: 'TrendingUp',
      title: 'Sales Funnel Analytics',
      description: 'Track every stage of your sales funnel with precision. Identify bottlenecks and optimize conversion rates with real-time data visualization.',
      image: 'funnel'
    },
    {
      icon: 'BarChart3',
      title: 'Revenue Growth Tracking',
      description: 'Monitor your revenue streams across multiple channels. Get actionable insights into what drives your business growth.',
      image: 'revenue'
    },
    {
      icon: 'Users',
      title: 'User Behavior Intelligence',
      description: 'Understand how users interact with your product. Track engagement, retention, and identify power users automatically.',
      image: 'engagement'
    },
  ];

  const benefits = [
    {
      icon: 'Zap',
      title: 'Real-Time Insights',
      description: 'Access live analytics dashboards that update instantly as your business grows'
    },
    {
      icon: 'Target',
      title: 'Data-Driven Decisions',
      description: 'Make confident strategic choices backed by comprehensive analytics and forecasting'
    },
    {
      icon: 'Sparkles',
      title: 'Automated Reports',
      description: 'Get beautiful, actionable reports delivered to your inbox automatically'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'VP of Growth',
      company: 'TechFlow Inc.',
      logo: '🚀',
      quote: 'Reachpoint.ai transformed how we understand our customers. Conversion rates increased by 34% in just 3 months.'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Head of Analytics',
      company: 'DataScale Solutions',
      logo: '📊',
      quote: 'The real-time insights helped us identify and fix critical funnel issues we didn\'t even know existed.'
    },
    {
      name: 'Emma Thompson',
      title: 'CEO',
      company: 'GrowthLabs',
      logo: '💡',
      quote: 'Best analytics platform we\'ve used. The ROI was evident within the first month of implementation.'
    }
  ];

  const clientLogos = ['🏢', '🏭', '🏪', '🏛️', '🏬', '🏦'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <header className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
            <span className="text-xl font-heading font-bold text-foreground">Reachpoint.ai</span>
          </div>
          <Button variant="default" className="hover:scale-105 transition-transform">
            Request Demo
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Analytics Platform for
                <span className="text-primary"> Data-Driven</span> Decisions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform raw data into actionable insights. Track sales funnels, revenue growth, and user behavior in real-time with enterprise-grade analytics.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  <Icon name="Play" className="mr-2" size={18} />
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </div>
            </div>

            <Card className="p-6 glass-dark animate-scale-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-lg">Sales Funnel Overview</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>
                
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={salesFunnelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="stage" stroke="#6b7280" fontSize={12} />
                    <YAxis stroke="#6b7280" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    />
                    <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="glass p-3 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4.2%</div>
                    <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="glass p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">+18.3%</div>
                    <div className="text-xs text-muted-foreground">vs Last Month</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Reachpoint.ai
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful analytics capabilities designed for modern B2B SaaS companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto space-y-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 glass-dark order-2 lg:order-1">
              <h4 className="font-heading font-semibold mb-4">Revenue Analytics</h4>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 5 }} />
                  <Line type="monotone" dataKey="growth" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <div className="space-y-4 order-1 lg:order-2">
              <Icon name={features[1].icon} className="text-primary" size={40} />
              <h2 className="text-3xl font-heading font-bold">{features[1].title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {features[1].description}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Multi-channel revenue tracking across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Predictive forecasting with AI-powered models</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Custom dashboards for every stakeholder</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Icon name={features[0].icon} className="text-primary" size={40} />
              <h2 className="text-3xl font-heading font-bold">{features[0].title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {features[0].description}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">3.2x</div>
                  <div className="text-sm text-muted-foreground">Better Conversion</div>
                </div>
                <div className="glass p-4 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">-42%</div>
                  <div className="text-sm text-muted-foreground">Drop-off Rate</div>
                </div>
              </div>
            </div>

            <Card className="p-8 glass-dark">
              <h4 className="font-heading font-semibold mb-4">Traffic Sources</h4>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={trafficSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {trafficSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 glass-dark order-2 lg:order-1">
              <h4 className="font-heading font-semibold mb-6">User Engagement Metrics</h4>
              <div className="space-y-4">
                {engagementData.map((item, idx) => (
                  <div key={idx} className="glass p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{item.value}%</span>
                        <Icon 
                          name={item.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          className={item.trend === 'up' ? 'text-green-600' : 'text-red-600'} 
                          size={20} 
                        />
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.trend === 'up' ? 'bg-green-600' : 'bg-red-600'}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-4 order-1 lg:order-2">
              <Icon name={features[2].icon} className="text-primary" size={40} />
              <h2 className="text-3xl font-heading font-bold">{features[2].title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {features[2].description}
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Session recordings and heatmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Cohort analysis and retention tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <span>Behavioral segmentation with AI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers say about their experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 glass-dark">
              <div className="text-center space-y-6">
                <div className="text-6xl">{testimonials[activeTestimonial].logo}</div>
                <blockquote className="text-xl text-foreground italic leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-heading font-semibold text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[activeTestimonial].title} at {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-16 flex-wrap">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="text-4xl opacity-60 hover:opacity-100 transition-opacity">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center max-w-3xl space-y-8">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Join hundreds of companies making data-driven decisions with Reachpoint.ai. 
            Get started with a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
              <Icon name="Calendar" className="mr-2" size={18} />
              Request Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
                <span className="text-lg font-heading font-bold text-white">Reachpoint.ai</span>
              </div>
              <p className="text-sm">Enterprise analytics for modern teams</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Reachpoint.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
