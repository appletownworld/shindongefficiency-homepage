import Link from 'next/link'
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp,
  DollarSign,
  Settings,
  Globe,
  Smartphone,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Award,
  Play,
  Link as LinkIcon,
  FileText,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  PieChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Star,
  Heart,
  Lightbulb,
  RefreshCw,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink
} from 'lucide-react'

export default function FeaturesPage() {
  const mainFeatures = [
    {
      title: "Управление продажами",
      description: "От создания счета до получения оплаты — весь процесс автоматизирован",
      icon: ShoppingCart,
      color: "blue",
      benefits: [
        "Счета создаются за 30 секунд",
        "Автоматические напоминания о долгах",
        "История всех сделок с клиентом",
        "Прогноз продаж на основе данных"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      details: [
        "Создание и отправка счетов в один клик",
        "Интеграция с платёжными системами",
        "Автоматическое списание остатков",
        "Отслеживание статуса оплаты",
        "Генерация актов и накладных"
      ]
    },
    {
      title: "Управление запасами",
      description: "Никогда больше не останетесь без товара и не переплатите за склад",
      icon: Package,
      color: "green",
      benefits: [
        "Остатки в реальном времени",
        "Автоматические заказы при нехватке",
        "ABC-анализ товаров",
        "Контроль сроков годности"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop",
      details: [
        "Многоуровневая структура складов",
        "Штрих-кодирование товаров",
        "Инвентаризация с мобильного устройства",
        "Резервирование товаров под заказы",
        "Анализ оборачиваемости"
      ]
    },
    {
      title: "Финансовый учёт",
      description: "Полная картина финансов компании без сложных расчётов",
      icon: DollarSign,
      color: "purple",
      benefits: [
        "Автоматический учёт доходов и расходов",
        "Готовые отчёты для налоговой",
        "Планирование бюджета",
        "Контроль денежных потоков"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      details: [
        "План счетов по российским стандартам",
        "Автоматическое формирование проводок",
        "Отчёты о прибылях и убытках",
        "Баланс и оборотно-сальдовая ведомость",
        "Налоговая отчётность"
      ]
    },
    {
      title: "Управление клиентами",
      description: "Каждый клиент получает персональный подход",
      icon: Users,
      color: "orange",
      benefits: [
        "Полная история взаимодействий",
        "Сегментация клиентов",
        "Автоматические уведомления",
        "Программы лояльности"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      details: [
        "Карточки клиентов с полной информацией",
        "История заказов и платежей",
        "Сегментация по различным критериям",
        "Email и SMS маркетинг",
        "Программы скидок и бонусов"
      ]
    },
    {
      title: "Закупки и поставщики",
      description: "Оптимизируйте закупки и работайте с лучшими поставщиками",
      icon: TrendingUp,
      color: "red",
      benefits: [
        "База поставщиков с рейтингами",
        "Сравнение цен и условий",
        "Контроль качества поставок",
        "Планирование закупок"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      details: [
        "Каталог поставщиков с контактами",
        "Сравнительная таблица цен",
        "Контроль сроков поставки",
        "Оценка качества товаров",
        "Планирование закупочного бюджета"
      ]
    },
    {
      title: "Аналитика и отчёты",
      description: "Принимайте решения на основе данных, а не догадок",
      icon: BarChart3,
      color: "indigo",
      benefits: [
        "Дашборды в реальном времени",
        "Прогнозы и тренды",
        "Сравнение периодов",
        "Экспорт в Excel и PDF"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      details: [
        "Интерактивные графики и диаграммы",
        "KPI-дашборды для руководителей",
        "Прогнозирование продаж",
        "Анализ рентабельности",
        "Настраиваемые отчёты"
      ]
    }
  ]

  const additionalFeatures = [
    {
      category: "Мобильность",
      icon: Smartphone,
      color: "blue",
      items: [
        "Работайте с любого устройства",
        "Мобильное приложение для iOS и Android",
        "Офлайн-режим для критических операций",
        "Push-уведомления о важных событиях"
      ]
    },
    {
      category: "Интеграции",
      icon: LinkIcon,
      color: "green",
      items: [
        "1С:Предприятие",
        "Банковские системы",
        "Почтовые сервисы",
        "CRM и маркетплейсы"
      ]
    },
    {
      category: "Безопасность",
      icon: Shield,
      color: "purple",
      items: [
        "Шифрование данных 256-bit",
        "Резервное копирование",
        "Контроль доступа",
        "Соответствие ФЗ-152"
      ]
    },
    {
      category: "Автоматизация",
      icon: Zap,
      color: "orange",
      items: [
        "Автоматические расчёты",
        "Уведомления и напоминания",
        "Создание документов",
        "Синхронизация данных"
      ]
    }
  ]

  const workflows = [
    {
      title: "Процесс продажи",
      description: "Как работает автоматизированная продажа",
      steps: [
        { 
          step: "1", 
          title: "Создание счета", 
          description: "Клиент выбирает товары, система автоматически рассчитывает стоимость с учётом скидок и налогов",
          icon: FileText
        },
        { 
          step: "2", 
          title: "Отправка клиенту", 
          description: "Счёт автоматически отправляется по email или WhatsApp с возможностью онлайн-оплаты",
          icon: Mail
        },
        { 
          step: "3", 
          title: "Оплата", 
          description: "Клиент оплачивает, система автоматически обновляет статус и создаёт документы",
          icon: CheckCircle
        },
        { 
          step: "4", 
          title: "Отгрузка", 
          description: "Создаётся документ на отгрузку, списываются остатки, клиент получает уведомление",
          icon: Package
        }
      ]
    },
    {
      title: "Процесс закупки",
      description: "Умная система закупок",
      steps: [
        { 
          step: "1", 
          title: "Анализ остатков", 
          description: "Система анализирует текущие остатки, прогнозы продаж и сезонность",
          icon: BarChart3
        },
        { 
          step: "2", 
          title: "Рекомендации", 
          description: "Автоматически предлагает, что и в каком количестве заказать у лучших поставщиков",
          icon: Lightbulb
        },
        { 
          step: "3", 
          title: "Заказ поставщику", 
          description: "Создаётся заказ с оптимальными условиями и автоматически отправляется поставщику",
          icon: ShoppingCart
        },
        { 
          step: "4", 
          title: "Контроль поставки", 
          description: "Отслеживание сроков, качества поставки и автоматическое обновление остатков",
          icon: Shield
        }
      ]
    }
  ]

  const benefits = [
    {
      title: "Экономия времени",
      description: "Автоматизация рутинных операций освобождает до 70% времени сотрудников",
      icon: Clock,
      value: "70%"
    },
    {
      title: "Снижение ошибок",
      description: "Автоматические расчёты исключают человеческие ошибки в документах",
      icon: Target,
      value: "95%"
    },
    {
      title: "Рост продаж",
      description: "Улучшенное обслуживание клиентов приводит к росту выручки",
      icon: TrendingUp,
      value: "30%"
    },
    {
      title: "Контроль затрат",
      description: "Полная прозрачность расходов помогает оптимизировать бюджет",
      icon: DollarSign,
      value: "25%"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Shindong Efficiency</span>
            </Link>
            <nav className="hidden lg:flex space-x-8">
              <Link href="/features" className="text-blue-600 font-medium">Возможности</Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Услуги</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">О нас</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Войти
              </Link>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Убираем рутину
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                из вашей работы
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Простые инструменты, которые автоматизируют сложные процессы. 
              Больше никаких таблиц в Excel и бумажных документов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
              >
                Посмотреть демо
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Основные возможности системы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Всё необходимое для эффективного управления бизнесом в одном месте
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`bg-${feature.color}-100 p-3 rounded-xl`}>
                      <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Основные преимущества:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Детальные функции:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Дополнительные возможности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Технические преимущества, которые делают работу ещё удобнее
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`bg-${feature.color}-100 p-3 rounded-xl w-fit mb-4`}>
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.category}</h3>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Автоматизированные процессы, которые экономят ваше время
            </p>
          </div>

          <div className="space-y-16">
            {workflows.map((workflow, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{workflow.title}</h3>
                  <p className="text-lg text-gray-600">{workflow.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="bg-white p-6 rounded-2xl shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                          {step.step}
                        </div>
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Результаты внедрения
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Конкретные цифры, которые показывают эффективность системы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="bg-white/20 p-4 rounded-xl w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовы упростить свою работу?
          </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Посмотрите, как Shindong Efficiency может автоматизировать процессы в вашей компании
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Посмотреть демо
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Shindong Efficiency</span>
              </div>
              <p className="text-gray-400">
                Упрощаем жизнь людей и бизнес-процессы, создавая простые, надёжные и доступные ИТ-решения.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Возможности</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Цены</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Демо</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Услуги</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Помощь</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Документация</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">Статус системы</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shindong Efficiency. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}