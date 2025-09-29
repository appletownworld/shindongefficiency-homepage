'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  BarChart3, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap,
  Activity,
  TrendingUp,
  Users,
  Mail,
  MessageSquare,
  Calendar,
  RefreshCw
} from 'lucide-react'

interface ServiceStatus {
  id: string
  name: string
  status: 'operational' | 'degraded' | 'outage'
  uptime: string
  responseTime: string
  lastIncident?: string
}

interface Incident {
  id: string
  title: string
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved'
  impact: 'minor' | 'major' | 'critical'
  startTime: string
  endTime?: string
  description: string
}

const services: ServiceStatus[] = [
  {
    id: 'api',
    name: 'API Services',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '45ms'
  },
  {
    id: 'database',
    name: 'Database',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '12ms'
  },
  {
    id: 'web',
    name: 'Web Application',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '120ms'
  },
  {
    id: 'auth',
    name: 'Authentication',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '35ms'
  },
  {
    id: 'storage',
    name: 'File Storage',
    status: 'operational',
    uptime: '99.7%',
    responseTime: '85ms'
  },
  {
    id: 'email',
    name: 'Email Service',
    status: 'operational',
    uptime: '99.6%',
    responseTime: '200ms'
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '25ms'
  },
  {
    id: 'cdn',
    name: 'CDN',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '15ms'
  }
]

const recentIncidents: Incident[] = [
  {
    id: 'inc-001',
    title: 'Плановое техническое обслуживание',
    status: 'resolved',
    impact: 'minor',
    startTime: '2024-01-15T02:00:00Z',
    endTime: '2024-01-15T04:00:00Z',
    description: 'Плановое обновление системы безопасности. Все сервисы работают в штатном режиме.'
  },
  {
    id: 'inc-002',
    title: 'Временное замедление API',
    status: 'resolved',
    impact: 'minor',
    startTime: '2024-01-10T14:30:00Z',
    endTime: '2024-01-10T15:15:00Z',
    description: 'Повышенная нагрузка на API сервисы. Проблема решена автоматическим масштабированием.'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'degraded':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />
    case 'outage':
      return <XCircle className="h-5 w-5 text-red-500" />
    default:
      return <Clock className="h-5 w-5 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'text-green-600 bg-green-100'
    case 'degraded':
      return 'text-yellow-600 bg-yellow-100'
    case 'outage':
      return 'text-red-600 bg-red-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'critical':
      return 'text-red-600 bg-red-100'
    case 'major':
      return 'text-orange-600 bg-orange-100'
    case 'minor':
      return 'text-yellow-600 bg-yellow-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refreshStatus = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  const overallStatus = services.every(s => s.status === 'operational') ? 'operational' : 'degraded'
  const overallUptime = '99.8%'

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shindong Efficiency
              </span>
            </Link>
            <nav className="hidden lg:flex space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Возможности</Link>
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

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                {getStatusIcon(overallStatus)}
                <span className={`ml-3 px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'Все системы работают' : 'Обнаружены проблемы'}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Статус системы
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Мониторинг работоспособности всех сервисов Shindong Efficiency в реальном времени
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>Последнее обновление: {lastUpdated.toLocaleString('ru-RU')}</span>
                <button
                  onClick={refreshStatus}
                  disabled={isRefreshing}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 disabled:opacity-50"
                >
                  <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Обновить</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(overallStatus)}`}>
                    {overallStatus === 'operational' ? 'Работает' : 'Проблемы'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Общий статус</h3>
                <p className="text-3xl font-bold text-gray-900">{overallUptime}</p>
                <p className="text-sm text-gray-600">Время работы за 30 дней</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <Server className="h-8 w-8 text-green-600" />
                  <span className="text-green-600 text-sm font-medium">8/8</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Сервисы</h3>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Активных сервисов</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                  <span className="text-purple-600 text-sm font-medium">Быстро</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Производительность</h3>
                <p className="text-3xl font-bold text-gray-900">45ms</p>
                <p className="text-sm text-gray-600">Среднее время ответа</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                  <span className="text-orange-600 text-sm font-medium">Безопасно</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Безопасность</h3>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Защищённых соединений</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Статус сервисов
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Детальная информация о работоспособности каждого компонента системы
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Сервис</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Статус</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Время работы</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Время ответа</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {services.map((service) => (
                      <tr key={service.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {getStatusIcon(service.status)}
                            <span className="ml-3 text-sm font-medium text-gray-900">
                              {service.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                            {service.status === 'operational' ? 'Работает' : 
                             service.status === 'degraded' ? 'Проблемы' : 'Недоступен'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{service.uptime}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{service.responseTime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Последние инциденты
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                История инцидентов и их решения
              </p>
            </div>

            <div className="space-y-6">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(incident.impact)}`}>
                        {incident.impact === 'critical' ? 'Критический' :
                         incident.impact === 'major' ? 'Значительный' : 'Незначительный'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        incident.status === 'resolved' ? 'text-green-600 bg-green-100' :
                        incident.status === 'investigating' ? 'text-yellow-600 bg-yellow-100' :
                        'text-blue-600 bg-blue-100'
                      }`}>
                        {incident.status === 'resolved' ? 'Решено' :
                         incident.status === 'investigating' ? 'Расследование' :
                         incident.status === 'identified' ? 'Выявлено' : 'Мониторинг'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(incident.startTime).toLocaleString('ru-RU')}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {incident.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {incident.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {incident.endTime 
                        ? `Решено: ${new Date(incident.endTime).toLocaleString('ru-RU')}`
                        : 'В процессе решения'
                      }
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нужна помощь?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Если вы заметили проблемы или у вас есть вопросы, свяжитесь с нашей службой поддержки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Связаться с поддержкой
              </Link>
              <Link 
                href="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Отправить отчёт
              </Link>
            </div>
          </div>
        </section>
      </main>

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
                <li><Link href="/status" className="hover:text-white transition-colors text-blue-400">Статус системы</Link></li>
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
