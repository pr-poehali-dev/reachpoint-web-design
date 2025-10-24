import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [recruitersCount, setRecruitersCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(80000);

  const beforeAfterData = [
    { label: 'Рутинных задач', before: 14, after: 1 },
    { label: 'Релевантных кандидатов', before: 1, after: 6 },
    { label: 'Потраченное время (ч)', before: 2, after: 0.2 },
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Создание вакансии',
      description: 'Система автоматически генерирует тест по описанию вакансии'
    },
    {
      number: 2,
      title: 'Отправка теста',
      description: 'Просто отправьте ссылку на тест кандидату'
    },
    {
      number: 3,
      title: 'Прохождение теста',
      description: 'Кандидат загружает резюме и отвечает на вопросы, адаптированные под его опыт'
    },
    {
      number: 4,
      title: 'Автоматическая проверка',
      description: 'ИИ проверяет ответы и сортирует кандидатов'
    },
    {
      number: 5,
      title: 'Готовый результат',
      description: 'Получите список релевантных кандидатов с оценками и саммари'
    },
    {
      number: 6,
      title: 'Назначение интервью',
      description: 'Остается только выбрать время для встречи'
    }
  ];

  const benefits = [
    {
      icon: 'Clock',
      value: '29 дней',
      title: 'Экономия времени',
      description: 'Экономит до 29 дней рутины в год на каждого рекрутера'
    },
    {
      icon: 'Zap',
      value: '7 минут',
      title: 'Быстрый старт',
      description: 'Всего 7 минут, чтобы начать пользоваться системой'
    },
    {
      icon: 'TrendingUp',
      value: '-30%',
      title: 'Ускорение подбора',
      description: 'Сокращают срок закрытия вакансий на 30%'
    },
    {
      icon: 'Shield',
      value: '100%',
      title: 'Защита данных',
      description: 'Централизованная база и роли доступа защищают клиентскую базу'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Смирнова',
      title: 'Руководитель отдела подбора',
      company: 'HR Solutions',
      logo: '🎯',
      quote: 'ReachPoint полностью изменил наш процесс рекрутинга. Мы сократили время на скрининг в 3 раза и нашли действительно качественных кандидатов.'
    },
    {
      name: 'Дмитрий Петров',
      title: 'Основатель',
      company: 'TechStaff Agency',
      logo: '🚀',
      quote: 'Динамические ИИ-тесты — это прорыв. Кандидаты проходят релевантную проверку, а мы получаем готовый анализ без лишней работы.'
    },
    {
      name: 'Елена Волкова',
      title: 'Директор по персоналу',
      company: 'IT Recruiting Pro',
      logo: '💼',
      quote: 'Лучшая HRM для небольших агентств. Простая, понятная, и экономит реально много времени. Окупилась за первый месяц.'
    }
  ];

  const calculateSavings = () => {
    const daysPerRecruiter = 29;
    const workDaysPerYear = 250;
    const dailySalary = avgSalary / workDaysPerYear;
    const totalSavings = recruitersCount * daysPerRecruiter * dailySalary;
    return Math.round(totalSavings);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      <header className="fixed top-0 w-full z-50 glass">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              R
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">ReachPoint</span>
          </div>
          <Button variant="default" size="lg" className="hover:scale-105 transition-transform shadow-lg">
            Получить демо
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              ReachPoint — самая удобная HRM
              <span className="block text-primary mt-2">для рекрутинговых агентств</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Автоматизируйте скрининг и брифинг с помощью уникальной технологии динамических ИИ-тестов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо (4 мин)
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Попробовать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={28} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{benefit.value}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              До и После ReachPoint
            </h2>
            <p className="text-xl text-muted-foreground">
              Сравните старый процесс с автоматизированным подходом
            </p>
          </div>

          <Card className="p-8 glass-dark">
            <div className="grid lg:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="XCircle" className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">До</h3>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>14 писем и звонков кандидатам</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>9 уточнений по требованиям</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>2 часа рутинной работы</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="font-bold">Результат: 1 релевантный кандидат</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">После</h3>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>1 автоматический тест</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>12 ответов от кандидатов</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Автоматическая проверка за минуты</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span className="font-bold text-green-600">Результат: 6 релевантных кандидатов</span>
                  </div>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={beforeAfterData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis type="category" dataKey="label" stroke="#6b7280" width={180} />
                <Tooltip 
                  contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="before" fill="#ef4444" name="До" radius={[0, 8, 8, 0]} />
                <Bar dataKey="after" fill="#22c55e" name="После" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-blue-100/30">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-2xl text-xl font-bold shadow-lg">
              🏆 Продукт года
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Нас признали продуктом года
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ReachPoint помогает агентствам выглядеть профессионально и работать предсказуемо 
            за счет прозрачности на каждом этапе воронки подбора и понятных базовых отчетов.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Динамический тест-фильтр
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждый рекрутер экономит до <span className="font-bold text-primary">29 рабочих дней в год</span> за счет этой технологии
            </p>
          </div>

          <div className="mb-16">
            <Card className="p-8 glass-dark text-center">
              <h3 className="text-2xl font-heading font-bold mb-6">Как это работает</h3>
              <p className="text-lg text-muted-foreground mb-8">
                ReachPoint сам проверяет кандидатов и оставляет только релевантных
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading font-semibold text-lg">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Узнайте, сколько денег ReachPoint вам сэкономит
            </h2>
            <p className="text-lg text-muted-foreground">
              Калькулятор годовой экономии
            </p>
          </div>

          <Card className="p-8 glass-dark">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-3">
                  Количество рекрутеров в команде: <span className="text-primary font-bold text-xl">{recruitersCount}</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={recruitersCount}
                  onChange={(e) => setRecruitersCount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Средняя зарплата рекрутера (₽/год): <span className="text-primary font-bold text-xl">{avgSalary.toLocaleString('ru-RU')}</span>
                </label>
                <input 
                  type="range" 
                  min="50000" 
                  max="200000" 
                  step="10000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="pt-6 border-t-2 border-primary/20">
                <div className="text-center space-y-4">
                  <div className="text-muted-foreground text-lg">Ваша годовая экономия</div>
                  <div className="text-5xl font-bold text-primary">
                    {calculateSavings().toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Это {Math.round(calculateSavings() / avgSalary * 100)}% от годового фонда оплаты труда
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6 py-6 text-lg">
                Начать экономить прямо сейчас
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-lg text-muted-foreground">
              Реальные отзывы от рекрутинговых агентств
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-10 glass-dark">
              <div className="text-center space-y-6">
                <div className="text-7xl">{testimonials[activeTestimonial].logo}</div>
                <blockquote className="text-2xl text-foreground leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div>
                  <div className="font-heading font-bold text-xl">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-muted-foreground text-lg">
                    {testimonials[activeTestimonial].title}
                  </div>
                  <div className="text-primary font-semibold">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-primary w-12' : 'bg-gray-300 w-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-3xl space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">
            Готовы начать экономить 29 дней в год?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Всего 7 минут, чтобы настроить систему и начать автоматизировать подбор персонала уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 hover:scale-105 transition-transform shadow-xl"
            >
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  R
                </div>
                <span className="text-xl font-heading font-bold text-white">ReachPoint</span>
              </div>
              <p className="text-sm">HRM для рекрутинговых агентств</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 ReachPoint. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
