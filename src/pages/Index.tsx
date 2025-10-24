import { useState } from 'react';
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
  const [recruitersCount, setRecruitersCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(80000);

  const beforeAfterComparison = {
    before: {
      calls: 14,
      clarifications: 9,
      hours: 2,
      relevant: 1
    },
    after: {
      autoTests: 1,
      responses: 12,
      relevant: 6
    }
  };

  const beforeAfterChartData = [
    { metric: 'Действий', before: 23, after: 1 },
    { metric: 'Релевантных', before: 1, after: 6 },
    { metric: 'Время (ч)', before: 2, after: 0.1 }
  ];

  const keyBenefits = [
    {
      icon: 'Clock',
      text: 'Экономит до 29 дней рутины в год на каждого рекрутера за счет автоматизации скрининга и брифинга'
    },
    {
      icon: 'Zap',
      text: 'Всего 7 минут, чтобы начать пользоваться системой'
    },
    {
      icon: 'TrendingUp',
      text: 'Сокращают срок закрытия вакансий на 30%'
    },
    {
      icon: 'Shield',
      text: 'Централизованная база и роли доступа защищают вашу клиентскую базу при смене сотрудников'
    }
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Вакансия',
      description: 'Когда вы создаете вакансию, система сама делает тест по описанию'
    },
    {
      number: 2,
      title: 'Тест',
      description: 'Вы просто отправляете ссылку на тест кандидату'
    },
    {
      number: 3,
      title: 'Кандидат отвечает',
      description: 'Кандидат сам загружает резюме и проходит короткий тест — вопросы подбираются под его резюме и вакансию'
    },
    {
      number: 4,
      title: 'Система проверяет',
      description: 'ReachPoint проверяет ответы кандидата на соответствие вакансии и сортирует в столбец (отказ/прошли тест). Все это без участия рекрутера'
    },
    {
      number: 5,
      title: 'Сортировка кандидатов готова',
      description: 'В итоге у вас готовый список кандидатов, краткое саммари, результаты теста и оценка'
    },
    {
      number: 6,
      title: 'Интервью',
      description: 'Осталось только выбрать время для интервью'
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
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              R
            </div>
            <span className="text-2xl font-heading font-bold text-gray-900">ReachPoint</span>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Получить демо
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
            ReachPoint — самая удобная HRM
            <br />
            <span className="text-blue-600">для рекрутинговых агентств</span>
          </h1>
          
          <div className="mt-12 space-y-4 max-w-3xl mx-auto">
            {keyBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} className="text-blue-600" size={20} />
                </div>
                <p className="text-left text-gray-700 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              До и После
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-red-100 bg-red-50/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon name="X" className="text-red-600" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">До</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="font-bold">{beforeAfterComparison.before.calls}</span>
                  <span>писем/звонков</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{beforeAfterComparison.before.clarifications}</span>
                  <span>уточнений</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{beforeAfterComparison.before.hours} часа</span>
                  <span>работы</span>
                </div>
                <div className="pt-4 border-t border-red-200">
                  <div className="flex items-center gap-2">
                    <Icon name="ArrowRight" className="text-red-600" size={20} />
                    <span className="font-bold text-xl">{beforeAfterComparison.before.relevant} релевантный кандидат</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-green-100 bg-green-50/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Check" className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900">После</h3>
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="font-bold">{beforeAfterComparison.after.autoTests}</span>
                  <span>авто-тест</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{beforeAfterComparison.after.responses}</span>
                  <span>ответов от кандидатов</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold">Автоматическая</span>
                  <span>проверка</span>
                </div>
                <div className="pt-4 border-t border-green-200">
                  <div className="flex items-center gap-2">
                    <Icon name="ArrowRight" className="text-green-600" size={20} />
                    <span className="font-bold text-xl text-green-600">{beforeAfterComparison.after.relevant} релевантных кандидатов</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-gray-50">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={beforeAfterChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="metric" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px' 
                  }}
                />
                <Bar dataKey="before" fill="#ef4444" name="До" radius={[4, 4, 0, 0]} />
                <Bar dataKey="after" fill="#22c55e" name="После" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg mb-8">
            <span>🏆</span>
            <span>Нас признали продуктом года</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            ReachPoint помогает агентствам выглядеть профессионально и работать предсказуемо 
            за счет прозрачности на каждом этапе воронки подбора и понятных базовых отчетов.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Посмотрите демо всего за 4 минуты
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Чтобы понять насколько удобно пользоваться нашей системой
          </p>
          
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
            <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-xl px-10 py-8">
                <Icon name="Play" className="mr-3" size={32} />
                Смотреть видео (4 мин)
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Технология "Динамический тест-фильтр"
            </h2>
            <p className="text-xl text-gray-600">
              Каждый рекрутер экономит до <span className="font-bold text-blue-600">29 рабочих дней в год</span>
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8 bg-white text-center border-2 border-blue-100">
              <h3 className="text-2xl font-heading font-bold mb-4">Как это работает</h3>
              <p className="text-lg text-gray-600">
                ReachPoint сам проверяет кандидатов и оставляет только релевантных
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-blue-200"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-3 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Узнайте, сколько денег ReachPoint вам сэкономит
            </h2>
            <p className="text-xl text-gray-600">
              уже в первый год работы
            </p>
          </div>

          <Card className="p-10 bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium text-gray-700">
                    Количество рекрутеров
                  </label>
                  <span className="text-3xl font-bold text-blue-600">{recruitersCount}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={recruitersCount}
                  onChange={(e) => setRecruitersCount(Number(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-lg font-medium text-gray-700">
                    Средняя зарплата (₽/год)
                  </label>
                  <span className="text-3xl font-bold text-blue-600">
                    {avgSalary.toLocaleString('ru-RU')}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="50000" 
                  max="200000" 
                  step="10000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="pt-8 border-t-2 border-blue-300">
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-gray-600 text-lg mb-3">Экономия в год</div>
                  <div className="text-6xl font-bold text-blue-600 mb-4">
                    {calculateSavings().toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-gray-500">
                    Это {Math.round(calculateSavings() / (avgSalary * recruitersCount) * 100)}% от годового ФОТ
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-xl py-7">
                Начать экономить
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Готовы экономить 29 дней в год?
          </h2>
          <p className="text-2xl text-blue-100 mb-10 leading-relaxed">
            Всего 7 минут, чтобы настроить систему и начать работу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-7"
            >
              <Icon name="Play" className="mr-2" size={24} />
              Посмотреть демо
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7"
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
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  R
                </div>
                <span className="text-xl font-heading font-bold text-white">ReachPoint</span>
              </div>
              <p className="text-sm text-gray-400">HRM для рекрутинговых агентств</p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Интеграции</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Обучение</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ReachPoint. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
