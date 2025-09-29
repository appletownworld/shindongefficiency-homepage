import Link from 'next/link'
import { 
  BarChart3, 
  Play,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Video,
  Download,
  Calendar
} from 'lucide-react'

export default function ExplorePage() {
  const exploreOptions = [
    {
      title: "Демо продукта",
      description: "Интерактивная демонстрация всех возможностей системы",
      icon: Play,
      color: "blue",
      features: ["Живая демонстрация", "Персональный гид", "Ответы на вопросы"],
      cta: "Запустить демо"
    },
    {
      title: "Запрос тура",
      description: "Персональная экскурсия по системе с нашим экспертом",
      icon: Calendar,
      color: "green",
      features: ["Индивидуальная презентация", "Адаптация под ваш бизнес", "Консультация"],
      cta: "Записать тур"
    },
    {
      title: "Бесплатная пробная версия",
      description: "Полный доступ к системе на 30 дней без ограничений",
      icon: Star,
      color: "purple",
      features: ["30 дней бесплатно", "Все функции", "Техподдержка"],
      cta: "Начать пробный период"
    }
  ]

  const companyTypes = [
    {
      type: "Производственные компании",
      benefits: ["Управление производством", "Контроль качества", "Планирование ресурсов"],
      icon: TrendingUp
    },
    {
      type: "Торговые компании",
      benefits: ["Управление продажами", "Контроль запасов", "CRM система"],
      icon: BarChart3
    },
    {
      type: "Сервисные компании",
      benefits: ["Управление проектами", "Учёт времени", "Клиентская база"],
      icon: Users
    },
    {
      type: "Дистрибьюторы",
      benefits: ["Многоуровневые склады", "Управление поставщиками", "Логистика"],
      icon: Award
    }
  ]

  const successStories = [
    {
      company: "ООО 'Альфа-Производство'",
      industry: "Производство",
      result: "Увеличение эффективности на 45%",
      story: "Внедрение Shindong Efficiency позволило автоматизировать производственные процессы и сократить время на планирование на 60%."
    },
    {
      company: "ИП 'Бета-Торговля'",
      industry: "Розничная торговля",
      result: "Рост продаж на 30%",
      story: "Система помогла оптимизировать управление запасами и улучшить работу с клиентами."
    },
    {
      company: "ООО 'Гамма-Сервис'",
      industry: "Сфера услуг",
      result: "Сокращение затрат на 25%",
      story: "Автоматизация учёта времени и проектов привела к значительной экономии ресурсов."
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600"
    }
    return colors[color as keyof typeof colors] || colors.blue
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Исследуйте
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                возможности
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Узнайте, как Shindong Efficiency может трансформировать ваш бизнес. 
              Выберите удобный способ знакомства с системой
            </p>
          </div>
        </div>
      </section>

      {/* Explore Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {exploreOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`${getColorClasses(option.color)} p-3 rounded-xl w-fit mb-6`}>
                  <option.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/demo" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают ECount для различных типов компаний
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наша система адаптируется под специфику вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyTypes.map((company, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                  <company.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {company.type}
                </h3>
                <ul className="space-y-2">
                  {company.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Истории успеха
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {story.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.company}</h3>
                    <p className="text-sm text-gray-500">{story.industry}</p>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                  {story.result}
                </div>
                <p className="text-gray-600">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Полезные материалы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите дополнительные ресурсы для лучшего понимания ERP-систем
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-xl w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Статьи об ERP</h3>
              <p className="text-gray-600 mb-6">
                Полезные статьи о внедрении и использовании ERP-систем
              </p>
              <Link 
                href="/articles" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Читать статьи →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-green-100 p-4 rounded-xl w-fit mx-auto mb-4">
                <Video className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Видеоуроки</h3>
              <p className="text-gray-600 mb-6">
                Пошаговые видеоинструкции по работе с системой
              </p>
              <Link 
                href="/tutorials" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Смотреть видео →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-purple-100 p-4 rounded-xl w-fit mx-auto mb-4">
                <Download className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Брошюры и каталоги</h3>
              <p className="text-gray-600 mb-6">
                Скачайте подробные материалы о возможностях системы
              </p>
              <Link 
                href="/downloads" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Скачать материалы →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать исследование?
          </h2>
            <p className="text-xl text-blue-100 mb-8">
              Выберите удобный способ знакомства с Shindong Efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/demo" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
              >
                Запустить демо
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Связаться с нами
              </Link>
            </div>
        </div>
      </section>
    </div>
  )
}
