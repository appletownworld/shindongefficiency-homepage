'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BarChart3, 
  ChevronDown, 
  ChevronUp,
  Search,
  Filter,
  MessageSquare,
  Phone,
  Mail,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Database,
  Globe,
  Settings,
  FileText,
  CheckCircle,
  Star
} from 'lucide-react'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  popular: boolean
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Как автоматизировать учёт товаров и складские операции?',
    answer: 'Мы создаём системы управления складом с автоматическим учётом остатков, прогнозированием спроса, управлением поставщиками и интеграцией с торговым оборудованием. Система поможет избежать пересортицы, автоматизировать заказы и оптимизировать складские процессы.',
    category: 'Автоматизация',
    popular: true
  },
  {
    id: '2',
    question: 'Нужна система для управления продажами и CRM. Что можете предложить?',
    answer: 'Разрабатываем комплексные CRM-системы с воронкой продаж, автоматизацией email-маркетинга, управлением клиентской базой, планированием встреч и аналитикой продаж. Интегрируем с телефонией, мессенджерами и социальными сетями.',
    category: 'CRM',
    popular: true
  },
  {
    id: '3',
    question: 'Как автоматизировать финансовый учёт и отчётность?',
    answer: 'Создаём системы финансового учёта с автоматическим формированием проводок, управлением дебиторской и кредиторской задолженностью, планированием бюджета, налоговой отчётностью и интеграцией с банками. Вся отчётность формируется автоматически.',
    category: 'Финансы',
    popular: true
  },
  {
    id: '4',
    question: 'Нужна система для управления персоналом и HR-процессами',
    answer: 'Разрабатываем HR-системы с учётом рабочего времени, управлением отпусками, планированием смен, расчётом зарплаты, оценкой персонала и обучением. Интегрируем с биометрическими системами и кадровыми агентствами.',
    category: 'HR',
    popular: false
  },
  {
    id: '5',
    question: 'Как создать систему для управления проектами и задачами?',
    answer: 'Создаём системы управления проектами с планированием ресурсов, контролем сроков, управлением бюджетом, командной работой, отчётностью по проектам и интеграцией с внешними сервисами. Поддерживаем Agile и Waterfall методологии.',
    category: 'Проекты',
    popular: true
  },
  {
    id: '6',
    question: 'Нужна система для автоматизации производства и планирования',
    answer: 'Разрабатываем MES-системы для управления производством с планированием загрузки оборудования, управлением качеством, учётом материалов, контролем технологических процессов и интеграцией с производственным оборудованием.',
    category: 'Производство',
    popular: false
  },
  {
    id: '7',
    question: 'Как создать систему для управления недвижимостью и арендой?',
    answer: 'Создаём системы управления недвижимостью с учётом объектов, управлением арендаторами, автоматизацией начисления платежей, планированием ремонтов, управлением договорами и интеграцией с платёжными системами.',
    category: 'Недвижимость',
    popular: false
  },
  {
    id: '8',
    question: 'Нужна система для управления логистикой и доставкой',
    answer: 'Разрабатываем системы управления логистикой с планированием маршрутов, управлением транспортом, отслеживанием грузов, автоматизацией документооборота, интеграцией с GPS и оптимизацией затрат на доставку.',
    category: 'Логистика',
    popular: true
  },
  {
    id: '9',
    question: 'Как автоматизировать документооборот и электронный архив?',
    answer: 'Создаём системы электронного документооборота с маршрутизацией документов, электронной подписью, версионностью, поиском по содержимому, интеграцией с внешними системами и автоматической архивацией.',
    category: 'Документооборот',
    popular: false
  },
  {
    id: '10',
    question: 'Нужна система для управления медицинским учреждением',
    answer: 'Разрабатываем медицинские информационные системы с учётом пациентов, планированием приёмов, управлением медицинскими картами, интеграцией с медицинским оборудованием, управлением лекарствами и отчётностью для Минздрава.',
    category: 'Медицина',
    popular: false
  },
  {
    id: '11',
    question: 'Как создать систему для управления образовательным процессом?',
    answer: 'Создаём образовательные платформы с управлением студентами, планированием занятий, электронным журналом, системой тестирования, управлением расписанием и интеграцией с внешними образовательными ресурсами.',
    category: 'Образование',
    popular: false
  },
  {
    id: '12',
    question: 'Нужна система для автоматизации ресторанного бизнеса',
    answer: 'Разрабатываем системы для ресторанов с управлением меню, заказами, складом, персоналом, интеграцией с кухонным оборудованием, системой лояльности, аналитикой продаж и интеграцией с доставкой.',
    category: 'Рестораны',
    popular: true
  },
  {
    id: '13',
    question: 'Как создать систему для управления фитнес-клубом?',
    answer: 'Создаём системы для фитнес-клубов с управлением абонементами, планированием тренировок, учётом посещений, управлением тренерами, системой бронирования, интеграцией с фитнес-трекерами и аналитикой.',
    category: 'Фитнес',
    popular: false
  },
  {
    id: '14',
    question: 'Нужна система для автоматизации гостиничного бизнеса',
    answer: 'Разрабатываем системы для отелей с управлением бронированием, заселением, обслуживанием номеров, управлением персоналом, интеграцией с туристическими агентствами, системой лояльности и аналитикой.',
    category: 'Гостиницы',
    popular: false
  },
  {
    id: '15',
    question: 'Как создать систему для управления автосервисом?',
    answer: 'Создаём системы для автосервисов с учётом клиентов, планированием ремонтов, управлением запчастями, интеграцией с диагностическим оборудованием, системой напоминаний, управлением складом и отчётностью.',
    category: 'Автосервис',
    popular: false
  },
  {
    id: '16',
    question: 'Нужна система для управления салоном красоты',
    answer: 'Разрабатываем системы для салонов красоты с планированием записей, управлением мастерами, учётом услуг, системой лояльности, управлением складом косметики, напоминаниями клиентам и аналитикой.',
    category: 'Красота',
    popular: false
  },
  {
    id: '17',
    question: 'Как автоматизировать управление строительными проектами?',
    answer: 'Создаём системы для строительства с планированием этапов, управлением ресурсами, контролем качества, учётом материалов, управлением подрядчиками, документооборотом и интеграцией с BIM-системами.',
    category: 'Строительство',
    popular: false
  },
  {
    id: '18',
    question: 'Нужна система для управления агентством недвижимости',
    answer: 'Разрабатываем системы для риелторов с управлением объектами, клиентской базой, планированием показов, автоматизацией документооборота, интеграцией с порталами недвижимости, CRM и аналитикой продаж.',
    category: 'Недвижимость',
    popular: false
  },
  {
    id: '19',
    question: 'Как создать систему для управления интернет-магазином?',
    answer: 'Создаём системы для e-commerce с управлением каталогом, заказами, складом, интеграцией с платёжными системами, управлением доставкой, системой лояльности, аналитикой и интеграцией с маркетплейсами.',
    category: 'E-commerce',
    popular: true
  },
  {
    id: '20',
    question: 'Нужна система для автоматизации юридической практики',
    answer: 'Разрабатываем системы для юристов с управлением делами, клиентской базой, документооборотом, планированием встреч, учётом времени, интеграцией с судебными системами, шаблонами документов и отчётностью.',
    category: 'Юриспруденция',
    popular: false
  },
  {
    id: '21',
    question: 'Как создать систему для управления консалтинговой компанией?',
    answer: 'Создаём системы для консалтинга с управлением проектами, клиентской базой, учётом времени, планированием ресурсов, документооборотом, системой биллинга, аналитикой и интеграцией с внешними сервисами.',
    category: 'Консалтинг',
    popular: false
  },
  {
    id: '22',
    question: 'Нужна система для автоматизации страхового агентства',
    answer: 'Разрабатываем системы для страховщиков с управлением полисами, клиентской базой, расчётом премий, обработкой заявок, интеграцией с банками, системой напоминаний, аналитикой и отчётностью для регуляторов.',
    category: 'Страхование',
    popular: false
  },
  {
    id: '23',
    question: 'Как создать систему для управления туристическим агентством?',
    answer: 'Создаём системы для турагентств с управлением турами, бронированием, клиентской базой, интеграцией с отелями и авиакомпаниями, системой лояльности, документооборотом и аналитикой продаж.',
    category: 'Туризм',
    popular: false
  },
  {
    id: '24',
    question: 'Нужна система для автоматизации ветеринарной клиники',
    answer: 'Разрабатываем системы для ветеринаров с учётом пациентов, планированием приёмов, управлением медицинскими картами, интеграцией с лабораториями, управлением лекарствами, напоминаниями о вакцинации и отчётностью.',
    category: 'Ветеринария',
    popular: false
  },
  {
    id: '25',
    question: 'Как создать систему для управления клининговой компанией?',
    answer: 'Создаём системы для клининга с планированием уборки, управлением объектами, учётом персонала, контролем качества, планированием ресурсов, интеграцией с заказчиками, биллингом и аналитикой.',
    category: 'Клининг',
    popular: false
  },
  {
    id: '26',
    question: 'Нужна система для автоматизации службы доставки',
    answer: 'Разрабатываем системы для курьерских служб с планированием маршрутов, управлением заказами, отслеживанием доставки, интеграцией с GPS, управлением курьерами, биллингом и аналитикой эффективности.',
    category: 'Доставка',
    popular: true
  },
  {
    id: '27',
    question: 'Как создать систему для управления IT-компанией?',
    answer: 'Создаём системы для IT-компаний с управлением проектами, учётом времени, планированием ресурсов, управлением клиентами, системой тикетов, интеграцией с системами разработки, биллингом и аналитикой.',
    category: 'IT',
    popular: false
  },
  {
    id: '28',
    question: 'Нужна система для автоматизации дизайн-студии',
    answer: 'Разрабатываем системы для дизайнеров с управлением проектами, портфолио, клиентской базой, планированием задач, управлением ресурсами, системой одобрений, биллингом и интеграцией с дизайн-инструментами.',
    category: 'Дизайн',
    popular: false
  },
  {
    id: '29',
    question: 'Как создать систему для управления маркетинговым агентством?',
    answer: 'Создаём системы для маркетинга с управлением кампаниями, клиентской базой, планированием контента, аналитикой, интеграцией с социальными сетями, системой отчётности, биллингом и управлением креативами.',
    category: 'Маркетинг',
    popular: false
  },
  {
    id: '30',
    question: 'Нужна система для автоматизации бухгалтерских услуг',
    answer: 'Разрабатываем системы для бухгалтеров с управлением клиентами, документооборотом, планированием отчётности, интеграцией с банками и налоговыми, системой напоминаний, шаблонами документов и аналитикой.',
    category: 'Бухгалтерия',
    popular: true
  }
]

const categories = [
  'Все',
  'Автоматизация',
  'CRM',
  'Финансы',
  'HR',
  'Проекты',
  'Производство',
  'Недвижимость',
  'Логистика',
  'Документооборот',
  'Медицина',
  'Образование',
  'Рестораны',
  'Фитнес',
  'Гостиницы',
  'Автосервис',
  'Красота',
  'Строительство',
  'E-commerce',
  'Юриспруденция',
  'Консалтинг',
  'Страхование',
  'Туризм',
  'Ветеринария',
  'Клининг',
  'Доставка',
  'IT',
  'Дизайн',
  'Маркетинг',
  'Бухгалтерия'
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Все' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularFAQs = faqs.filter(faq => faq.popular)

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

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
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4 mr-2" />
                Часто задаваемые вопросы
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                FAQ
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Ответы на популярные вопросы о разработке ПО для автоматизации бизнес-процессов
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Поиск по вопросам..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Популярные вопросы
              </h2>
              <p className="text-lg text-gray-600">
                Самые частые запросы наших клиентов
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularFAQs.map((faq) => (
                <div key={faq.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Все вопросы
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полный список вопросов и ответов по разработке ПО
              </p>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </h3>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="ml-12">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Вопросы не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить поисковый запрос или выберите другую категорию
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Не нашли ответ на свой вопрос?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Наша команда экспертов готова помочь с любыми вопросами по разработке ПО
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Задать вопрос
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить
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
                <li><Link href="/help" className="hover:text-white transition-colors text-blue-400">FAQ</Link></li>
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
