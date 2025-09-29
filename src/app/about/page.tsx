import Link from 'next/link'
import { 
  BarChart3, 
  ArrowRight,
  Users,
  Award,
  Globe,
  Heart,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  Star,
  CheckCircle
} from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: "Алексей Иванов",
      position: "CEO & Основатель",
      experience: "15+ лет в ERP",
      avatar: "АИ"
    },
    {
      name: "Мария Петрова",
      position: "CTO",
      experience: "12+ лет разработки",
      avatar: "МП"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Head of Sales",
      experience: "10+ лет продаж",
      avatar: "ДС"
    },
    {
      name: "Елена Козлова",
      position: "Head of Support",
      experience: "8+ лет поддержки",
      avatar: "ЕК"
    }
  ]

  const values = [
    {
      title: "Простота",
      description: "Создаём решения, которые понятны с первого взгляда и не требуют обучения",
      icon: Lightbulb,
      color: "blue"
    },
    {
      title: "Надёжность",
      description: "Ваши данные в безопасности, система работает стабильно 24/7",
      icon: Shield,
      color: "green"
    },
    {
      title: "Доступность",
      description: "Профессиональные решения по доступным ценам для любого бизнеса",
      icon: Award,
      color: "purple"
    },
    {
      title: "Результат",
      description: "Фокусируемся на том, что действительно помогает вашему бизнесу расти",
      icon: Heart,
      color: "red"
    }
  ]

  const achievements = [
    {
      number: "10,000+",
      label: "Активных клиентов",
      icon: Users
    },
    {
      number: "15+",
      label: "Лет на рынке",
      icon: Award
    },
    {
      number: "99.9%",
      label: "Время работы",
      icon: TrendingUp
    },
    {
      number: "50+",
      label: "Сотрудников",
      icon: Globe
    }
  ]

  const partners = [
    "Microsoft",
    "Oracle", 
    "SAP",
    "1C",
    "Яндекс.Облако",
    "VK Cloud"
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600"
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
              <Link href="/about" className="text-blue-600 font-medium">О нас</Link>
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
                Мы упрощаем
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  вашу работу
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Создаём простые, надёжные и доступные ИТ-решения, которые снижают затраты, 
                ускоряют работу и помогают масштабироваться
              </p>
            </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Всё началось с простого наблюдения: люди тратят слишком много времени на рутину. 
                  Мы решили изменить это, создав технологии, которые работают на человека, а не наоборот.
                </p>
                <p>
                  За 15 лет мы помогли более 10,000 компаний избавиться от бумажной волокиты, 
                  автоматизировать повторяющиеся задачи и сосредоточиться на том, что действительно важно. 
                  Наша философия проста: сложные процессы должны быть простыми в использовании.
                </p>
                <p>
                  Сегодня мы продолжаем упрощать жизнь людей, создавая решения, которые не требуют 
                  специальных знаний, но дают профессиональные результаты. Каждая функция создана 
                  с мыслью о том, как сделать работу проще и эффективнее.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Наша миссия</h3>
              <p className="text-blue-100 mb-6">
                Упрощать жизнь людей и бизнес-процессы, создавая простые, надёжные и доступные 
                ИТ-решения и автоматизацию, которые снижают затраты, ускоряют работу и помогают масштабироваться.
              </p>
              <h3 className="text-2xl font-bold mb-6">Наше видение</h3>
              <p className="text-blue-100">
                Мир, где технологии делают жизнь проще, а не сложнее. Где каждый может 
                автоматизировать свою работу без специальных знаний.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Цифры, которые говорят о качестве наших решений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`${getColorClasses(value.color)} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Эксперты с многолетним опытом в области ERP и автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-xl">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-500">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши партнеры
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем с ведущими технологическими компаниями
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-gray-700">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Программа реселлеров
              </h2>
              <p className="text-gray-600 mb-6">
                Присоединяйтесь к нашей партнерской программе и зарабатывайте, 
                помогая компаниям автоматизировать бизнес-процессы.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Высокие комиссионные</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Обучение и сертификация</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Маркетинговая поддержка</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Техническая поддержка</span>
                </li>
              </ul>
              <Link 
                href="/partners" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Стать партнером
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Статус филиалов
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Москва</span>
                  <span className="text-green-600 font-semibold">Головной офис</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">Санкт-Петербург</span>
                  <span className="text-blue-600 font-semibold">Филиал</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium">Екатеринбург</span>
                  <span className="text-purple-600 font-semibold">Филиал</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                  <span className="font-medium">Новосибирск</span>
                  <span className="text-orange-600 font-semibold">Представительство</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы работать с нами?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к тысячам компаний, которые уже доверяют ECount Pro
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
