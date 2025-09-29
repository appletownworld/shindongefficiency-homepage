import Link from 'next/link'
import { 
  ArrowRight, 
  BarChart3, 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Award,
  Clock,
  Headphones,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Code,
  Layers,
  Target,
  DollarSign,
  PieChart,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Shindong Efficiency
              </span>
            </div>
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
      <main>
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Простые решения для сложных задач
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Упрощаем
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  вашу работу
                </span>
                каждый день
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Простые, надёжные и доступные ИТ-решения, которые снижают затраты, 
                ускоряют работу и помогают масштабироваться. 
                <strong className="text-gray-900">Автоматизируйте рутину</strong> и сосредоточьтесь на развитии бизнеса!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  Связаться с нами
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-sm text-gray-600">Активных компаний</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Время работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">40%</div>
                  <div className="text-sm text-gray-600">Рост прибыли</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Автоматизируем то, что отнимает ваше время
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Простые инструменты, которые убирают рутину и освобождают время 
                для важных дел. От учёта до аналитики — всё в одном месте.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Управление продажами</h3>
                <p className="text-gray-600 mb-4">
                  Создавайте счета, отслеживайте заказы, управляйте клиентской базой и автоматизируйте процесс продаж
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• CRM система</li>
                  <li>• Автоматические счета</li>
                  <li>• Отслеживание сделок</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Управление закупками</h3>
                <p className="text-gray-600 mb-4">
                  Контролируйте поставщиков, управляйте заказами и оптимизируйте закупочные процессы
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• База поставщиков</li>
                  <li>• Планирование закупок</li>
                  <li>• Контроль качества</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-purple-100 p-3 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Управление инвентарем</h3>
                <p className="text-gray-600 mb-4">
                  Отслеживайте остатки, движения товаров и автоматизируйте складские операции
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Многоуровневые склады</li>
                  <li>• Автоматические заказы</li>
                  <li>• ABC-анализ</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-orange-100 p-3 rounded-xl w-fit mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Управление клиентами</h3>
                <p className="text-gray-600 mb-4">
                  Ведите базу клиентов, историю взаимодействий и анализируйте поведение покупателей
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 360° профиль клиента</li>
                  <li>• Сегментация</li>
                  <li>• Программы лояльности</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-red-100 p-3 rounded-xl w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Аналитика и отчеты</h3>
                <p className="text-gray-600 mb-4">
                  Получайте детальную аналитику по продажам, прибыли и эффективности в реальном времени
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Дашборды в реальном времени</li>
                  <li>• Прогнозирование</li>
                  <li>• KPI метрики</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-4">
                  <DollarSign className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Финансовый учет</h3>
                <p className="text-gray-600 mb-4">
                  Ведите учет доходов, расходов, генерируйте финансовые отчеты и планируйте бюджет
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Двойная запись</li>
                  <li>• Планирование бюджета</li>
                  <li>• Налоговая отчетность</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Простота — наша главная ценность
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы создаём технологии, которые работают на вас, а не наоборот. 
                Никаких сложных настроек — только результат.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Мгновенная скорость</h3>
                <p className="text-sm text-gray-600">Загрузка данных менее чем за секунду. Никаких ожиданий и зависаний</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Банковская безопасность</h3>
                <p className="text-sm text-gray-600">Ваши данные защищены как в банке. Полное соответствие ФЗ-152</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Работает везде</h3>
                <p className="text-sm text-gray-600">Доступ с любого устройства, в любой точке мира, 24/7</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Растет с вами</h3>
                <p className="text-sm text-gray-600">Масштабируется от 1 до 1000+ пользователей без ограничений</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Быстрое внедрение</h3>
                  <p className="text-blue-100">Начните работу уже через 24 часа после регистрации</p>
                </div>
                <div className="text-center">
                  <Headphones className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Экспертная поддержка</h3>
                  <p className="text-blue-100">Персональный менеджер и круглосуточная техподдержка</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Проверенное решение</h3>
                  <p className="text-blue-100">10+ лет на рынке, тысячи довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Готовы начать управлять своим бизнесом эффективнее?
                </h2>
                <p className="text-xl opacity-90">
                  Присоединяйтесь к тысячам компаний, которые уже используют нашу систему
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Form */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Получите консультацию</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Компания
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                        placeholder="Название вашей компании"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                        placeholder="Расскажите о ваших задачах..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="consent" className="text-sm opacity-90">
                        Я согласен на обработку персональных данных в соответствии с 
                        <Link href="/privacy" className="underline hover:no-underline"> политикой конфиденциальности</Link>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                    >
                      Получить консультацию
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
                
                {/* Benefits */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Бесплатная консультация</h4>
                      <p className="opacity-90">Персональный анализ ваших бизнес-процессов и рекомендации по автоматизации</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Быстрый ответ</h4>
                      <p className="opacity-90">Свяжемся с вами в течение 2 часов в рабочее время</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Экспертная поддержка</h4>
                      <p className="opacity-90">Консультации от специалистов с 15+ летним опытом</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Без обязательств</h4>
                      <p className="opacity-90">Никаких скрытых условий, только честные рекомендации</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">Shindong Efficiency</span>
              </div>
              <p className="text-gray-400 mb-4">
                Современная ERP-система для автоматизации бизнес-процессов и роста прибыли.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Возможности</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Тарифы</Link></li>
                <li><Link href="#versions" className="hover:text-white transition-colors">Версии</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Демо</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Центр помощи</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Документация</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">Статус системы</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 support@ecountpro.ru</li>
                <li>📞 +7 (800) 123-45-67</li>
                <li>💬 Онлайн чат 24/7</li>
                <li>🏢 Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Shindong Efficiency. Все права защищены.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Конфиденциальность</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Условия использования</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}