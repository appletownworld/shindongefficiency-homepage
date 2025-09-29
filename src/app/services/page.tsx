'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Award,
  Play,
  Star,
  Heart,
  Lightbulb,
  Headphones,
  Phone,
  Code
} from 'lucide-react'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('development')
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      id: 'development',
      title: 'Разработка ПО',
      icon: Code,
      color: 'blue',
      description: 'Создаем корпоративные системы под ваши задачи',
      features: [
        'ERP системы',
        'CRM платформы', 
        'Веб-приложения',
        'Мобильные приложения',
        'API интеграции',
        'Микросервисная архитектура'
      ],
      stats: {
        projects: '10+',
        clients: '8+',
        uptime: '98%'
      }
    },
    {
      id: 'automation',
      title: 'Автоматизация',
      icon: Settings,
      color: 'green',
      description: 'Оптимизируем бизнес-процессы с помощью ИТ',
      features: [
        'Автоматизация документооборота',
        'Интеграция с 1С',
        'Роботизация процессов',
        'Workflow системы',
        'Уведомления и алерты',
        'Аналитика процессов'
      ],
      stats: {
        processes: '50+',
        efficiency: '+25%',
        timeSaved: '8ч/день'
      }
    },
    {
      id: 'consulting',
      title: 'Консалтинг',
      icon: Lightbulb,
      color: 'purple',
      description: 'Помогаем выбрать правильные ИТ-решения',
      features: [
        'Аудит ИТ-инфраструктуры',
        'Техническое планирование',
        'Выбор технологий',
        'Архитектурные решения',
        'Миграция данных',
        'Обучение команды'
      ],
      stats: {
        consultations: '25+',
        companies: '15+',
        satisfaction: '90%'
      }
    },
    {
      id: 'support',
      title: 'Поддержка',
      icon: Headphones,
      color: 'orange',
      description: 'Обеспечиваем стабильную работу ваших систем',
      features: [
        '24/7 мониторинг',
        'Техническая поддержка',
        'Обновления и патчи',
        'Резервное копирование',
        'Безопасность данных',
        'Производительность'
      ],
      stats: {
        responseTime: '<4ч',
        availability: '98%',
        issues: '<3%'
      }
    }
  ]

  const testimonials = [
    {
      name: "Александр Петров",
      company: "ООО 'Торговый дом'",
      text: "Внедрили ERP систему за 3 месяца. Учет стал автоматическим, отчеты формируются мгновенно. Экономия времени - 20 часов в неделю.",
      rating: 5,
      result: "Экономия 20ч/неделю"
    },
    {
      name: "Мария Сидорова", 
      company: "ИП 'Магазин у дома'",
      text: "Автоматизировали складской учет. Теперь всегда знаем остатки, автоматически формируются заказы поставщикам. Ошибок стало в 10 раз меньше.",
      rating: 5,
      result: "-90% ошибок"
    },
    {
      name: "Дмитрий Козлов",
      company: "ООО 'Производство+'",
      text: "Интегрировали 1С с нашим производством. Планирование стало точным, закупки оптимизированы. Сократили затраты на 15%.",
      rating: 5,
      result: "-15% затрат"
    }
  ]

  const stats = [
    { label: 'Проектов завершено', value: '10+', icon: Target },
    { label: 'Клиентов довольны', value: '90%', icon: Heart },
    { label: 'Время работы', value: '98%', icon: Clock },
    { label: 'Лет опыта', value: '5+', icon: Award }
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
              <Link href="/features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Возможности</Link>
              <Link href="/services" className="text-blue-600 font-medium">Услуги</Link>
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                услуги
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Помогаем на каждом шаге — от идеи до внедрения
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

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Что мы делаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр ИТ-услуг для вашего бизнеса
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <service.icon className="h-5 w-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {services.map((service) => (
              activeTab === service.id && (
                <div key={service.id} className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`bg-${service.color}-100 p-4 rounded-2xl mr-4`}>
                        <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-gray-900">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💻</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        Готовы начать?
                      </h4>
                      <p className="text-gray-600 mb-6">
                        Обсудим ваш проект и предложим оптимальное решение
                      </p>
                      <Link 
                        href="/contact" 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                      >
                        Обсудить проект
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Реальные результаты наших проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы оптимизировать свой бизнес?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации и оценки вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Получить консультацию
            </Link>
            <Link 
              href="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Посмотреть демо
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
                <li><Link href="/demo" className="hover:text-white transition-colors">Демо</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Консультация</Link></li>
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