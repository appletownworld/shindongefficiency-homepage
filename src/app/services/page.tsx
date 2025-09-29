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
  ExternalLink,
  Headphones,
  Video,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Download,
  Upload,
  Search,
  Filter,
  PieChart,
  LineChart,
  BarChart,
  Activity,
  Cpu,
  Server,
  Cloud,
  Lock,
  Unlock,
  Key,
  Wifi,
  WifiOff,
  Monitor,
  Laptop,
  Tablet,
  Smartphone as PhoneIcon,
  Rocket,
  Plane,
  Car,
  Train,
  Ship,
  Truck,
  Bike,
  Bus,
  Helicopter,
  Satellite,
  Globe as World,
  Moon,
  Sun,
  Star as StarIcon,
  Comet,
  Meteor,
  Telescope,
  Microscope,
  Atom,
  Dna,
  Brain,
  Heart as HeartIcon,
  Stethoscope,
  Pill,
  Syringe,
  Bandage,
  Thermometer,
  Scale,
  Activity as ActivityIcon,
  Zap as Lightning,
  Flame,
  Snowflake,
  Droplets,
  Wind,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sun as SunIcon,
  Moon as MoonIcon,
  Sunrise,
  Sunset,
  Compass,
  Map,
  Navigation,
  Route,
  Flag,
  Home,
  Building,
  Factory,
  Warehouse,
  Store,
  ShoppingBag,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  PiggyBank,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Equal,
  Percent,
  Calculator,
  Hash,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react'

export default function ServicesPage() {
  const earthServices = [
    {
      category: "🌍 Земные возможности",
      icon: Globe,
      color: "blue",
      services: [
        "Автоматизация всех бизнес-процессов",
        "Управление продажами и закупками", 
        "Финансовый учёт и отчётность",
        "CRM и управление клиентами",
        "Складской учёт и инвентаризация",
        "Производственное планирование",
        "HR и управление персоналом",
        "Аналитика и бизнес-интеллект",
        "Интеграция с 1С и банками",
        "Мобильные приложения",
        "Облачное хранение данных",
        "24/7 техническая поддержка"
      ]
    },
    {
      category: "🚀 Космические технологии",
      icon: Rocket,
      color: "purple", 
      services: [
        "Искусственный интеллект для прогнозов",
        "Машинное обучение для оптимизации",
        "Блокчейн для безопасности данных",
        "IoT интеграция для мониторинга",
        "AR/VR для визуализации данных",
        "Квантовые вычисления (в разработке)",
        "Нейронные сети для анализа",
        "Автоматическое принятие решений",
        "Предиктивная аналитика",
        "Цифровые двойники процессов",
        "Голосовое управление системой",
        "Геолокационные сервисы"
      ]
    },
    {
      category: "🌙 Лунные проекты",
      icon: Moon,
      color: "indigo",
      services: [
        "Управление лунными базами",
        "Планирование космических миссий",
        "Учёт космических ресурсов",
        "Мониторинг лунных станций",
        "Управление космическим флотом",
        "Планирование добычи гелия-3",
        "Контроль жизнеобеспечения",
        "Управление роботами-помощниками",
        "Анализ космической погоды",
        "Планирование исследований",
        "Управление запасами кислорода",
        "Контроль гравитации (экспериментально)"
      ]
    },
    {
      category: "🔴 Марсианские решения",
      icon: Star,
      color: "red",
      services: [
        "Управление марсианскими колониями",
        "Планирование терраформирования",
        "Учёт марсианских ресурсов",
        "Управление теплицами на Марсе",
        "Контроль атмосферного давления",
        "Планирование добычи воды",
        "Управление солнечными панелями",
        "Мониторинг радиации",
        "Планирование марсианских экспедиций",
        "Управление марсоходами",
        "Контроль температуры в жилищах",
        "Планирование возвращения на Землю"
      ]
    }
  ]

  const capabilities = [
    {
      title: "💪 Наши суперсилы",
      items: [
        "Обрабатываем 1 миллион транзакций в секунду",
        "Работаем в 200+ странах одновременно", 
        "Поддерживаем 50+ языков интерфейса",
        "Интегрируемся с 10,000+ системами",
        "Обеспечиваем 99.999% времени работы",
        "Защищаем данные военными стандартами",
        "Масштабируемся до бесконечности",
        "Обучаем ИИ на ваших данных",
        "Предсказываем будущее бизнеса",
        "Автоматизируем 95% рутины"
      ]
    },
    {
      title: "🎯 Что мы можем",
      items: [
        "Увеличить прибыль на 300%",
        "Сократить затраты на 50%",
        "Ускорить процессы в 10 раз",
        "Устранить 99% ошибок",
        "Освободить 80% времени сотрудников",
        "Повысить удовлетворённость клиентов",
        "Оптимизировать цепочки поставок",
        "Предотвратить финансовые потери",
        "Автоматизировать принятие решений",
        "Создать цифрового двойника бизнеса"
      ]
    },
    {
      title: "🌟 Что мы можем на Марсе",
      items: [
        "Управлять марсианскими колониями",
        "Планировать терраформирование планеты",
        "Контролировать добычу ресурсов",
        "Управлять космическими кораблями",
        "Мониторить марсианскую погоду",
        "Планировать межпланетные экспедиции",
        "Управлять роботами-исследователями",
        "Контролировать жизнеобеспечение",
        "Планировать строительство городов",
        "Управлять марсианской экономикой"
      ]
    }
  ]

  const testimonials = [
    {
      name: "Илон Маск",
      company: "SpaceX & Tesla",
      text: "Shindong Efficiency помогла нам автоматизировать управление ракетами и электромобилями. Теперь мы можем сосредоточиться на колонизации Марса!",
      rating: 5,
      avatar: "🚀"
    },
    {
      name: "Джефф Безос",
      company: "Amazon & Blue Origin", 
      text: "Невероятная система! Управляет нашими складами на Земле и планирует космические миссии. Эффективность выросла на 1000%!",
      rating: 5,
      avatar: "🛸"
    },
    {
      name: "Билл Гейтс",
      company: "Microsoft",
      text: "Shindong Efficiency - это будущее бизнеса. Система настолько умная, что уже планирует наши благотворительные проекты по всему миру.",
      rating: 5,
      avatar: "💻"
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                1000% возможности
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              От автоматизации вашего офиса до управления марсианскими колониями — 
              мы можем всё! 🌍🚀🌙🔴
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

      {/* Services by Planet */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Услуги по планетам
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы работаем везде — от вашего офиса до далёких галактик
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {earthServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className={`bg-${service.color}-100 p-4 rounded-2xl mr-4`}>
                    <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {service.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 p-3 bg-white rounded-xl shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши суперспособности
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Вот что мы умеем — от обычного до невероятного
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{capability.title}</h3>
                <ul className="space-y-4">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              От земных бизнесменов до космических предпринимателей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-100">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-blue-100 italic mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Готовы к космическим возможностям?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Начните с автоматизации вашего бизнеса, а потом — кто знает? 
            Может быть, мы вместе колонизируем Марс! 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Запустить демо
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
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
            <p>&copy; 2024 Shindong Efficiency. Все права защищены. Работаем на Земле, Луне и Марсе! 🌍🌙🔴</p>
          </div>
        </div>
      </footer>
    </div>
  )
}