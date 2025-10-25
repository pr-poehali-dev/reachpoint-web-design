import { useState } from 'react';
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
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [recruitersCount, setRecruitersCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(80000);

  const analyticsData = [
    { month: 'Янв', candidates: 45, interviews: 12, hires: 3 },
    { month: 'Фев', candidates: 62, interviews: 18, hires: 5 },
    { month: 'Мар', candidates: 78, interviews: 24, hires: 7 },
    { month: 'Апр', candidates: 95, interviews: 32, hires: 9 },
    { month: 'Май', candidates: 112, interviews: 38, hires: 12 },
    { month: 'Июн', candidates: 134, interviews: 45, hires: 15 },
  ];

  const efficiencyData = [
    { name: 'До', value: 23, color: '#EF4444' },
    { name: 'После', value: 1, color: '#22C55E' },
  ];

  const performanceData = [
    { week: 'Нед 1', efficiency: 45 },
    { week: 'Нед 2', efficiency: 58 },
    { week: 'Нед 3', efficiency: 72 },
    { week: 'Нед 4', efficiency: 89 },
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      role: 'Директор по персоналу',
      company: 'TechStart',
      text: 'ReachPoint сократил время на скрининг кандидатов на 70%. Теперь наша команда фокусируется на действительно важных интервью, а не на рутине.',
      avatar: '👨‍💼'
    },
    {
      name: 'Мария Соколова',
      role: 'Head of Recruitment',
      company: 'InnovateCorp',
      text: 'Динамические тесты - это прорыв. Кандидаты получают персонализированный опыт, а мы - только релевантные резюме.',
      avatar: '👩‍💼'
    },
    {
      name: 'Дмитрий Волков',
      role: 'CEO',
      company: 'HireHub Agency',
      text: 'За первый квартал экономия составила более 400 тысяч рублей. ROI окупился за 2 месяца.',
      avatar: '🧑‍💼'
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Автоматизация скрининга',
      description: 'ИИ проверяет кандидатов по вашим критериям и оставляет только релевантных',
      benefit: '29 дней экономии в год на рекрутера'
    },
    {
      icon: 'Target',
      title: 'Динамические тесты',
      description: 'Вопросы адаптируются под резюме и требования вакансии автоматически',
      benefit: '6x больше релевантных кандидатов'
    },
    {
      icon: 'Shield',
      title: 'Защита клиентской базы',
      description: 'Централизованное хранилище с ролями доступа при смене сотрудников',
      benefit: '100% безопасность данных'
    },
    {
      icon: 'Clock',
      title: 'Быстрый старт',
      description: 'Настройка системы занимает всего 7 минут, без обучения',
      benefit: 'Запуск в день покупки'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика процессов',
      description: 'Прозрачность воронки подбора с понятными базовыми отчетами',
      benefit: 'На 30% быстрее закрытие вакансий'
    },
    {
      icon: 'Users',
      title: 'Командная работа',
      description: 'Все рекрутеры работают в единой системе с общей базой кандидатов',
      benefit: 'Синхронизация в реальном времени'
    }
  ];

  const calculateSavings = () => {
    const daysPerRecruiter = 29;
    const workDaysPerYear = 250;
    const dailySalary = avgSalary / workDaysPerYear;
    const totalSavings = recruitersCount * daysPerRecruiter * dailySalary;
    return Math.round(totalSavings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <header className="fixed top-0 w-full z-50 glass border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div className="absolute -inset-1 bg-[#0D6EFD]/20 rounded-xl blur-md -z-10"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">ReachPoint</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-[#0D6EFD] transition-colors font-medium">Возможности</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#0D6EFD] transition-colors font-medium">Как работает</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#0D6EFD] transition-colors font-medium">Цены</a>
              <Button className="bg-[#0D6EFD] hover:bg-[#0052CC] shadow-lg shadow-blue-500/30">
                Запросить демо
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-blur"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-[#0D6EFD]">
                <span className="w-2 h-2 bg-[#0D6EFD] rounded-full animate-pulse"></span>
                Продукт года по версии HRTech Awards
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Самая удобная HRM для{' '}
                <span className="bg-gradient-to-r from-[#0D6EFD] to-[#0052CC] bg-clip-text text-transparent">
                  рекрутинговых агентств
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Экономьте до 29 дней в год на каждого рекрутера за счет автоматизации скрининга 
                с помощью уникальной технологии динамических ИИ-тестов
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0D6EFD] hover:bg-[#0052CC] text-lg px-8 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Запросить демо
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:border-[#0D6EFD] hover:text-[#0D6EFD]">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0D6EFD]">29</div>
                  <div className="text-sm text-gray-600 mt-1">дней экономии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0D6EFD]">30%</div>
                  <div className="text-sm text-gray-600 mt-1">быстрее закрытие</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0D6EFD]">7 мин</div>
                  <div className="text-sm text-gray-600 mt-1">до старта работы</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Воронка подбора</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={analyticsData}>
                    <defs>
                      <linearGradient id="colorCandidates" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0D6EFD" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0D6EFD" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                    <YAxis stroke="#6B7280" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(255, 255, 255, 0.95)', 
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Area type="monotone" dataKey="candidates" stroke="#0D6EFD" fillOpacity={1} fill="url(#colorCandidates)" strokeWidth={2} />
                    <Area type="monotone" dataKey="hires" stroke="#22C55E" fillOpacity={1} fill="url(#colorHires)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="absolute -right-4 -bottom-4 glass-card p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Конверсия</div>
                    <div className="text-xl font-bold text-green-600">+156%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              До и После ReachPoint
            </h2>
            <p className="text-xl text-gray-600">Экран в одной плоскости</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                    <Icon name="X" className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">До</h3>
                    <p className="text-sm text-gray-500">Традиционный процесс</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl">
                    <span className="text-gray-700">Писем/звонков</span>
                    <span className="text-2xl font-bold text-red-600">14</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl">
                    <span className="text-gray-700">Уточнений</span>
                    <span className="text-2xl font-bold text-red-600">9</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50/50 rounded-xl">
                    <span className="text-gray-700">Потраченное время</span>
                    <span className="text-2xl font-bold text-red-600">2 часа</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-red-100">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Результат:</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-600">1</div>
                      <div className="text-sm text-gray-500">релевантный кандидат</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center">
                    <Icon name="Check" className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">После</h3>
                    <p className="text-sm text-gray-500">С ReachPoint</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 bg-green-50/50 rounded-xl">
                    <span className="text-gray-700">Авто-тест</span>
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50/50 rounded-xl">
                    <span className="text-gray-700">Ответов получено</span>
                    <span className="text-2xl font-bold text-green-600">12</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50/50 rounded-xl">
                    <span className="text-gray-700">Автоматическая проверка</span>
                    <Icon name="Sparkles" className="text-green-600" size={24} />
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-green-100">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">Результат:</span>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">6</div>
                      <div className="text-sm text-gray-500">релевантных кандидатов</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="p-8 glass-dark border-2 border-[#0D6EFD]/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Визуальное сравнение</h3>
                  <p className="text-gray-600 mb-4">Количество действий рекрутера для получения результата</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-gray-600">До ReachPoint</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-600">После ReachPoint</span>
                    </div>
                  </div>
                </div>
                <div>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={efficiencyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {efficiencyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-white px-10 py-6 rounded-3xl shadow-2xl mb-8 animate-pulse-glow">
              <span className="text-4xl">🏆</span>
              <div className="text-left">
                <div className="text-3xl font-bold">Продукт года</div>
                <div className="text-lg opacity-90">HRTech Awards 2024</div>
              </div>
            </div>
            
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              ReachPoint помогает агентствам выглядеть <span className="font-bold text-[#0D6EFD]">профессионально</span> и 
              работать <span className="font-bold text-[#0D6EFD]">предсказуемо</span> за счет прозрачности на каждом этапе 
              воронки подбора и понятных базовых отчетов
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600">Всё необходимое для эффективного рекрутинга</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#0D6EFD]/30 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D6EFD] to-[#0052CC] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFD]/10 to-[#0D6EFD]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} className="text-[#0D6EFD]" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="pt-4 border-t border-gray-100">
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

      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Технология "Динамический тест-фильтр"
            </h2>
            <p className="text-xl text-gray-600">
              Каждый рекрутер экономит до <span className="font-bold text-[#0D6EFD]">29 рабочих дней в год</span>
            </p>
          </div>

          <div className="mb-16">
            <Card className="p-10 glass-card text-center border-2 border-[#0D6EFD]/20">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Как это работает</h3>
              <p className="text-xl text-gray-600">
                ReachPoint сам проверяет кандидатов и оставляет только релевантных
              </p>
            </Card>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: 'Создание вакансии',
                description: 'Когда вы создаете вакансию, система автоматически генерирует персонализированный тест на основе описания должности',
                icon: 'FileText',
                align: 'left'
              },
              {
                step: 2,
                title: 'Отправка теста',
                description: 'Просто отправьте автоматически сгенерированную ссылку на тест кандидату — никаких сложных настроек',
                icon: 'Send',
                align: 'right'
              },
              {
                step: 3,
                title: 'Кандидат отвечает',
                description: 'Кандидат загружает резюме и проходит короткий тест. Вопросы автоматически адаптируются под его опыт и требования вакансии',
                icon: 'Users',
                align: 'left'
              },
              {
                step: 4,
                title: 'Система проверяет',
                description: 'ReachPoint использует ИИ для проверки ответов на соответствие вакансии и автоматически сортирует кандидатов (отказ/прошли тест)',
                icon: 'Brain',
                align: 'right'
              },
              {
                step: 5,
                title: 'Результаты готовы',
                description: 'Вы получаете готовый список отфильтрованных кандидатов с кратким саммари, результатами теста и оценками',
                icon: 'CheckCircle2',
                align: 'left'
              },
              {
                step: 6,
                title: 'Планирование интервью',
                description: 'Осталось только выбрать лучших кандидатов и назначить время для финального интервью',
                icon: 'Calendar',
                align: 'right'
              }
            ].map((item, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-8 items-center ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                {item.align === 'left' ? (
                  <>
                    <Card className="p-8 glass-card hover:shadow-xl transition-all border-2 border-[#0D6EFD]/10">
                      <div className="flex items-start gap-6">
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {item.step}
                          </div>
                          <div className="absolute -inset-2 bg-[#0D6EFD]/20 rounded-2xl blur-lg -z-10"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#0D6EFD]/20 to-[#0D6EFD]/5 rounded-3xl flex items-center justify-center">
                        <Icon name={item.icon} className="text-[#0D6EFD]" size={64} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center lg:order-2">
                      <Card className="p-8 glass-card hover:shadow-xl transition-all border-2 border-[#0D6EFD]/10 w-full">
                        <div className="flex items-start gap-6">
                          <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                              {item.step}
                            </div>
                            <div className="absolute -inset-2 bg-[#0D6EFD]/20 rounded-2xl blur-lg -z-10"></div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div className="flex justify-center lg:order-1">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#0D6EFD]/20 to-[#0D6EFD]/5 rounded-3xl flex items-center justify-center">
                        <Icon name={item.icon} className="text-[#0D6EFD]" size={64} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Посмотрите демо за 4 минуты
            </h2>
            <p className="text-xl text-gray-600">
              Чтобы понять, насколько удобно пользоваться нашей системой
            </p>
          </div>

          <Card className="relative overflow-hidden group cursor-pointer border-2 border-[#0D6EFD]/20 hover:border-[#0D6EFD]/40 transition-all">
            <div className="aspect-video bg-gradient-to-br from-[#0D6EFD]/10 via-[#0D6EFD]/5 to-transparent flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=800')] bg-cover bg-center opacity-20"></div>
              <Button 
                size="lg" 
                className="relative z-10 bg-white text-[#0D6EFD] hover:bg-gray-50 text-xl px-12 py-8 shadow-2xl group-hover:scale-110 transition-transform"
              >
                <Icon name="Play" className="mr-3" size={32} />
                Смотреть видео
              </Button>
            </div>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Zap', text: 'Быстрая настройка' },
              { icon: 'Sparkles', text: 'Интуитивный интерфейс' },
              { icon: 'Shield', text: 'Безопасность данных' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 glass-card rounded-xl">
                <div className="w-10 h-10 bg-[#0D6EFD]/10 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} className="text-[#0D6EFD]" size={20} />
                </div>
                <span className="font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Калькулятор экономии
            </h2>
            <p className="text-xl text-gray-600">
              Узнайте, сколько денег ReachPoint сэкономит уже в первый год работы
            </p>
          </div>

          <Card className="p-10 glass-card border-2 border-[#0D6EFD]/20 shadow-xl">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-lg font-semibold text-gray-700">
                    Количество рекрутеров в команде
                  </label>
                  <div className="text-4xl font-bold text-[#0D6EFD]">{recruitersCount}</div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={recruitersCount}
                  onChange={(e) => setRecruitersCount(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-[#0D6EFD]/20 to-[#0D6EFD]/40 rounded-full appearance-none cursor-pointer accent-[#0D6EFD]"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-lg font-semibold text-gray-700">
                    Средняя годовая зарплата (₽)
                  </label>
                  <div className="text-4xl font-bold text-[#0D6EFD]">
                    {avgSalary.toLocaleString('ru-RU')}
                  </div>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="200000" 
                  step="10000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-3 bg-gradient-to-r from-[#0D6EFD]/20 to-[#0D6EFD]/40 rounded-full appearance-none cursor-pointer accent-[#0D6EFD]"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>50,000 ₽</span>
                  <span>200,000 ₽</span>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD]/5 to-[#0052CC]/5 rounded-3xl"></div>
                <div className="relative p-10 text-center">
                  <div className="text-gray-600 text-xl mb-3 font-medium">Годовая экономия</div>
                  <div className="text-7xl font-bold bg-gradient-to-r from-[#0D6EFD] to-[#0052CC] bg-clip-text text-transparent mb-4">
                    {calculateSavings().toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-gray-500 text-lg">
                    Это {Math.round(calculateSavings() / (avgSalary * recruitersCount) * 100)}% от годового ФОТ рекрутеров
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-gradient-to-r from-[#0D6EFD] to-[#0052CC] hover:opacity-90 text-xl py-8 shadow-lg shadow-blue-500/30">
                <Icon name="Rocket" className="mr-2" size={24} />
                Начать экономить сейчас
              </Button>
            </div>
          </Card>

          <div className="mt-12 p-6 glass-card rounded-2xl">
            <h4 className="font-bold text-lg text-gray-900 mb-4">Формула расчета:</h4>
            <p className="text-gray-600 leading-relaxed">
              Экономия = Количество рекрутеров × 29 дней × (Средняя зарплата / 250 рабочих дней)
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-gray-600">Более 100+ компаний уже используют ReachPoint</p>
          </div>

          <div className="relative">
            <Card className="p-10 glass-card border-2 border-[#0D6EFD]/20 min-h-[300px]">
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-6">{testimonials[activeTestimonial].avatar}</div>
                <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed max-w-3xl">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                  <div className="font-bold text-xl text-gray-900">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                  <div className="text-[#0D6EFD] font-semibold mt-1">{testimonials[activeTestimonial].company}</div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === idx 
                      ? 'bg-[#0D6EFD] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {['TechStart', 'InnovateCorp', 'HireHub', 'RecruitPro'].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 glass-card rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-xl font-bold text-gray-600">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6EFD] via-[#0052CC] to-[#003D99]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Готовы экономить<br />29 дней в год?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
            Всего 7 минут, чтобы настроить систему и начать работу
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#0D6EFD] hover:bg-gray-100 text-xl px-12 py-8 shadow-2xl hover:scale-105 transition-transform"
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Запросить демо
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-xl px-12 py-8 backdrop-blur-sm"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Связаться с нами
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} />
              <span>Без кредитной карты</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} />
              <span>14 дней бесплатно</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={20} />
              <span>Отмена в любой момент</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D6EFD] to-[#0052CC] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold text-white">ReachPoint</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Самая удобная HRM-система для рекрутинговых агентств. 
                Автоматизация подбора с помощью ИИ-технологий.
              </p>
              <div className="flex gap-4">
                {['Linkedin', 'Twitter', 'Facebook'].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0D6EFD] transition-colors"
                  >
                    <Icon name={social} size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Продукт</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Интеграции</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Обновления</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Компания</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Поддержка</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-[#0D6EFD] transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2024 ReachPoint. Все права защищены.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#0D6EFD] transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-[#0D6EFD] transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
