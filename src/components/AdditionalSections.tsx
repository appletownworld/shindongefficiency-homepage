import Link from 'next/link'
import { 
  CheckCircle, 
  Star, 
  Play, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Lock,
  Code,
  Database,
  Cloud
} from 'lucide-react'

export const PricingSection = () => (
  <section id="pricing" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Выберите подходящий тариф
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Гибкие тарифные планы для бизнеса любого размера. 
          Начните бесплатно и масштабируйтесь по мере роста.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">Для малого бизнеса</p>
            <div className="text-4xl font-bold text-blue-600 mb-2">₽0</div>
            <p className="text-gray-500">навсегда</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>До 5 пользователей</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Базовые отчеты</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Управление продажами</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Email поддержка</span>
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
          >
            Связаться с нами
          </Link>
        </div>

        {/* Professional Plan */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Популярный
            </span>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <p className="text-gray-600 mb-4">Для растущего бизнеса</p>
            <div className="text-4xl font-bold text-blue-600 mb-2">₽2,990</div>
            <p className="text-gray-500">в месяц</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>До 25 пользователей</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Расширенная аналитика</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Все модули ERP</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Приоритетная поддержка</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>API интеграции</span>
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
          >
            Связаться с нами
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">Для крупного бизнеса</p>
            <div className="text-4xl font-bold text-blue-600 mb-2">₽9,990</div>
            <p className="text-gray-500">в месяц</p>
          </div>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Неограниченные пользователи</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>AI аналитика</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Кастомизация</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Персональный менеджер</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
              <span>Рабочие часы поддержка</span>
            </li>
          </ul>
          <Link 
            href="/contact" 
            className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export const VersionsSection = () => (
  <section id="versions" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Версии и релизы
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Постоянно развивающаяся платформа с регулярными обновлениями и новыми возможностями
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
              v3.2.1
            </div>
            <span className="text-sm text-gray-600">Текущая версия</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-аналитика</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Прогнозирование продаж</li>
            <li>• Автоматические рекомендации</li>
            <li>• Умные отчеты</li>
            <li>• Анализ трендов</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
              v3.1.0
            </div>
            <span className="text-sm text-gray-600">Стабильная</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Мобильное приложение</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• iOS и Android</li>
            <li>• Офлайн режим</li>
            <li>• Push уведомления</li>
            <li>• Сканирование штрих-кодов</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
          <div className="flex items-center mb-4">
            <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
              v3.0.0
            </div>
            <span className="text-sm text-gray-600">LTS</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Новый интерфейс</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Современный дизайн</li>
            <li>• Темная тема</li>
            <li>• Настраиваемые дашборды</li>
            <li>• Улучшенная навигация</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/changelog" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Посмотреть все обновления →
        </Link>
      </div>
    </div>
  </section>
)

export const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Более 10,000 компаний доверяют нам управление своим бизнесом
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Shindong Efficiency помог нам увеличить эффективность на 40%. 
            Теперь мы тратим меньше времени на рутину и больше на развитие бизнеса."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-semibold">АИ</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Алексей Иванов</div>
              <div className="text-sm text-gray-500">Директор ООО "Альфа"</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Отличная система! Особенно нравится аналитика в реальном времени. 
            Теперь мы видим все показатели бизнеса на одном экране."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-semibold">МП</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Мария Петрова</div>
              <div className="text-sm text-gray-500">CFO ООО "Бета"</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-6">
            "Внедрение заняло всего неделю. Поддержка помогла настроить все модули. 
            Рекомендую всем, кто хочет автоматизировать бизнес."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-semibold">ДС</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Дмитрий Сидоров</div>
              <div className="text-sm text-gray-500">ИП "Гамма"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export const FAQSection = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Часто задаваемые вопросы
        </h2>
        <p className="text-xl text-gray-600">
          Ответы на самые популярные вопросы о нашей системе
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Сколько времени занимает внедрение системы?
          </h3>
          <p className="text-gray-600">
            Внедрение базовой конфигурации занимает 1-2 недели. 
            Для сложных интеграций может потребоваться до месяца. 
            Наши специалисты помогут настроить систему под ваши процессы.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Можно ли интегрировать с существующими системами?
          </h3>
          <p className="text-gray-600">
            Да, у нас есть API для интеграции с любыми внешними системами. 
            Мы поддерживаем интеграции с 1С, банками, маркетплейсами и другими сервисами.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Где хранятся мои данные?
          </h3>
          <p className="text-gray-600">
            Все данные хранятся в защищенных дата-центрах в России. 
            Мы используем шифрование и регулярно создаем резервные копии. 
            Ваши данные в полной безопасности.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Есть ли обучение для сотрудников?
          </h3>
          <p className="text-gray-600">
            Да, мы предоставляем бесплатное обучение для всех пользователей. 
            Включает видеоуроки, вебинары и персональные консультации с нашими экспертами.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export const FinalCTASection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-white mb-6">
        Готовы трансформировать свой бизнес?
      </h2>
      <p className="text-xl text-blue-100 mb-8">
        Станьте одним из первых клиентов и получите персональный подход к вашему проекту
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/demo" 
          className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105"
        >
          Посмотреть демо
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
)
