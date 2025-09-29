import Link from 'next/link'
import { 
  BarChart3, 
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Award,
  Headphones,
  Clock
} from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "₽0",
      period: "навсегда",
      description: "Начните бесплатно",
      popular: false,
      features: [
        "До 5 пользователей",
        "Базовые модули ERP",
        "Email поддержка",
        "Стандартные отчеты",
        "Мобильное приложение",
        "Облачное хранение данных"
      ],
      limitations: [
        "Ограниченная аналитика",
        "Базовая техподдержка"
      ]
    },
    {
      name: "Professional",
      price: "₽2,990",
      period: "в месяц",
      description: "Для серьёзного бизнеса",
      popular: true,
      features: [
        "До 25 пользователей",
        "Все модули ERP",
        "Приоритетная поддержка",
        "Расширенная аналитика",
        "API интеграции",
        "Персональный менеджер",
        "Обучение сотрудников",
        "Резервное копирование"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      price: "₽9,990",
      period: "в месяц",
      description: "Для больших компаний",
      popular: false,
      features: [
        "Неограниченные пользователи",
        "Все модули ERP + AI",
        "24/7 телефонная поддержка",
        "Кастомизация системы",
        "Интеграции с 1С",
        "Персональный внедренческий проект",
        "Обучение на территории клиента",
        "SLA гарантии",
        "Выделенный сервер"
      ],
      limitations: []
    }
  ]

  const faqs = [
    {
      question: "Можно ли изменить тарифный план?",
      answer: "Да, вы можете изменить тарифный план в любое время. При переходе на более высокий тариф разница будет списана пропорционально оставшемуся периоду."
    },
    {
      question: "Есть ли скрытые платежи?",
      answer: "Нет, все цены указаны без скрытых платежей. В стоимость включены все функции, указанные в тарифе, техподдержка и обновления."
    },
    {
      question: "Что происходит с данными при отмене?",
      answer: "Ваши данные сохраняются в течение 90 дней после отмены подписки. Вы можете экспортировать все данные в стандартных форматах."
    },
    {
      question: "Предоставляется ли обучение?",
      answer: "Да, мы предоставляем бесплатное обучение для всех пользователей: видеоуроки, вебинары и персональные консультации."
    }
  ]

  const clients = [
    "ООО 'Альфа'",
    "ИП 'Бета'", 
    "ООО 'Гамма'",
    "ООО 'Дельта'",
    "ИП 'Эпсилон'",
    "ООО 'Зета'",
    "ООО 'Эта'",
    "ИП 'Тета'"
  ]

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
              Простые
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                и честные цены
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Никаких скрытых платежей и сложных схем. 
              Платите только за то, что используете. Начните бесплатно.
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

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 border-2 relative ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              } hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">{plan.period}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-center text-gray-400">
                      <span className="h-5 w-5 mr-3 flex-shrink-0">✗</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Связаться с нами
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Что включено в каждый план
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сравните возможности и выберите оптимальный план
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Функции</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Пользователи</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">До 5</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">До 25</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Неограниченно</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Техподдержка</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Email</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Приоритетная</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">24/7 телефон</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Аналитика</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Базовая</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Расширенная</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">AI + ML</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Интеграции</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Базовые</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">API</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">1С + кастомные</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Обучение</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Самообучение</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">Персональное</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">На территории</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Нам доверяют
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 10,000 компаний уже используют Shindong Efficiency
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-semibold text-sm">
                    {client.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о тарифах
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Выберите план и начните автоматизировать свой бизнес уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              Начать бесплатно
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
