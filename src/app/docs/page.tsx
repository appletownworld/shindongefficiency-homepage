import Link from 'next/link'
import { 
  BarChart3, 
  FileText, 
  Shield, 
  Users, 
  Lock, 
  Eye, 
  Download,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Info,
  BookOpen,
  Scale,
  Globe,
  Settings,
  HelpCircle,
  MessageSquare
} from 'lucide-react'

interface Document {
  id: string
  title: string
  description: string
  category: string
  icon: React.ReactNode
  lastUpdated: string
  size: string
  type: 'pdf' | 'html' | 'doc'
}

const documents: Document[] = [
  {
    id: 'terms',
    title: 'Пользовательское соглашение',
    description: 'Условия использования сервиса Shindong Efficiency',
    category: 'Правовые документы',
    icon: <Scale className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '45 KB',
    type: 'pdf'
  },
  {
    id: 'privacy',
    title: 'Политика конфиденциальности',
    description: 'Как мы собираем, используем и защищаем ваши данные',
    category: 'Правовые документы',
    icon: <Shield className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '38 KB',
    type: 'pdf'
  },
  {
    id: 'offer',
    title: 'Договор оферты',
    description: 'Публичная оферта на оказание услуг по автоматизации',
    category: 'Правовые документы',
    icon: <FileText className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '52 KB',
    type: 'pdf'
  },
  {
    id: 'security',
    title: 'Политика безопасности',
    description: 'Меры защиты данных и информационной безопасности',
    category: 'Безопасность',
    icon: <Lock className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '41 KB',
    type: 'pdf'
  },
  {
    id: 'gdpr',
    title: 'GDPR Compliance',
    description: 'Соответствие требованиям GDPR и защита персональных данных',
    category: 'Безопасность',
    icon: <Globe className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '48 KB',
    type: 'pdf'
  },
  {
    id: 'user-guide',
    title: 'Руководство пользователя',
    description: 'Подробное руководство по работе с системой',
    category: 'Документация',
    icon: <BookOpen className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '2.1 MB',
    type: 'pdf'
  },
  {
    id: 'api-docs',
    title: 'API Документация',
    description: 'Техническая документация по API интеграции',
    category: 'Документация',
    icon: <Settings className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '1.8 MB',
    type: 'html'
  },
  {
    id: 'faq',
    title: 'Часто задаваемые вопросы',
    description: 'Ответы на популярные вопросы пользователей',
    category: 'Документация',
    icon: <HelpCircle className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '156 KB',
    type: 'html'
  },
  {
    id: 'support',
    title: 'Политика поддержки',
    description: 'Условия и сроки технической поддержки',
    category: 'Поддержка',
    icon: <MessageSquare className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '32 KB',
    type: 'pdf'
  },
  {
    id: 'sla',
    title: 'Соглашение об уровне сервиса (SLA)',
    description: 'Гарантии доступности и производительности системы',
    category: 'Поддержка',
    icon: <CheckCircle className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '29 KB',
    type: 'pdf'
  },
  {
    id: 'data-processing',
    title: 'Соглашение об обработке данных',
    description: 'Условия обработки персональных данных клиентов',
    category: 'Правовые документы',
    icon: <Users className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '35 KB',
    type: 'pdf'
  },
  {
    id: 'incident-response',
    title: 'Политика реагирования на инциденты',
    description: 'Процедуры обработки инцидентов безопасности',
    category: 'Безопасность',
    icon: <AlertTriangle className="h-6 w-6" />,
    lastUpdated: '2024-01-15',
    size: '43 KB',
    type: 'pdf'
  }
]

const categories = [
  { name: 'Правовые документы', count: 4, color: 'blue' },
  { name: 'Безопасность', count: 3, color: 'green' },
  { name: 'Документация', count: 3, color: 'purple' },
  { name: 'Поддержка', count: 2, color: 'orange' }
]

const getCategoryColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-600'
    case 'green':
      return 'bg-green-100 text-green-600'
    case 'purple':
      return 'bg-purple-100 text-purple-600'
    case 'orange':
      return 'bg-orange-100 text-orange-600'
    default:
      return 'bg-gray-100 text-gray-600'
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FileText className="h-4 w-4 text-red-500" />
    case 'html':
      return <ExternalLink className="h-4 w-4 text-blue-500" />
    case 'doc':
      return <FileText className="h-4 w-4 text-blue-600" />
    default:
      return <FileText className="h-4 w-4 text-gray-500" />
  }
}

export default function DocsPage() {
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
                <FileText className="h-4 w-4 mr-2" />
                Полная документация
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Документация
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Все необходимые документы, руководства и политики для работы с Shindong Efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Категории документов
              </h2>
              <p className="text-lg text-gray-600">
                Выберите нужную категорию для быстрого поиска
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getCategoryColor(category.color)} mb-4`}>
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count} документов
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Все документы
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полный список документов, отсортированный по категориям
              </p>
            </div>

            <div className="space-y-6">
              {documents.map((doc) => (
                <div key={doc.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {doc.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                            categories.find(c => c.name === doc.category)?.color || 'gray'
                          )}`}>
                            {doc.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {doc.description}
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>Обновлено: {doc.lastUpdated}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {getTypeIcon(doc.type)}
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Eye className="h-4 w-4" />
                        <span>Просмотр</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Быстрый доступ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Самые важные документы для быстрого ознакомления
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="bg-blue-600 p-4 rounded-full w-fit mb-6">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Пользовательское соглашение
                </h3>
                <p className="text-gray-600 mb-6">
                  Основные условия использования сервиса и ваши права
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Читать соглашение
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="bg-green-600 p-4 rounded-full w-fit mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Политика конфиденциальности
                </h3>
                <p className="text-gray-600 mb-6">
                  Как мы защищаем и обрабатываем ваши персональные данные
                </p>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Ознакомиться
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <div className="bg-purple-600 p-4 rounded-full w-fit mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Руководство пользователя
                </h3>
                <p className="text-gray-600 mb-6">
                  Подробное руководство по работе с системой
                </p>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Открыть руководство
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нужна помощь с документами?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Наша команда поддержки готова ответить на любые вопросы по документации
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
                href="/status" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Info className="mr-2 h-5 w-5" />
                Статус системы
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
                <li><Link href="/docs" className="hover:text-white transition-colors text-blue-400">Документация</Link></li>
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
