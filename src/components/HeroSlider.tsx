'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  gradient: string
  icon: React.ReactNode
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Управление продажами",
    subtitle: "Автоматизируйте процесс",
    description: "От создания предложений до получения оплаты - весь цикл продаж в одной системе",
    image: "📊",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼"
  },
  {
    id: 2,
    title: "Контроль запасов",
    subtitle: "Никогда не оставайтесь без товара",
    description: "Умная система управления складом с прогнозированием и автоматическими заказами",
    image: "📦",
    gradient: "from-green-500 to-emerald-500",
    icon: "🏭"
  },
  {
    id: 3,
    title: "Финансовая аналитика",
    subtitle: "Принимайте решения на основе данных",
    description: "Детальные отчеты, прогнозы и аналитика для эффективного управления финансами",
    image: "📈",
    gradient: "from-purple-500 to-pink-500",
    icon: "💰"
  },
  {
    id: 4,
    title: "CRM система",
    subtitle: "Развивайте отношения с клиентами",
    description: "Полный цикл работы с клиентами от первого контакта до повторных продаж",
    image: "👥",
    gradient: "from-orange-500 to-red-500",
    icon: "🤝"
  },
  {
    id: 5,
    title: "Мобильное приложение",
    subtitle: "Управляйте бизнесом из любой точки мира",
    description: "Полнофункциональное мобильное приложение для работы в дороге",
    image: "📱",
    gradient: "from-indigo-500 to-blue-500",
    icon: "🌍"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Автоматическая прокрутка
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {/* Слайды */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 bg-gradient-to-br ${slide.gradient} relative`}
          >
            {/* Фоновые элементы */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 text-9xl">{slide.image}</div>
              <div className="absolute bottom-10 left-10 text-6xl">{slide.icon}</div>
            </div>

            {/* Контент слайда */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Текст */}
                  <div className="text-white">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                      {slide.subtitle}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:scale-105">
                        Узнать больше
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                        Посмотреть демо
                      </button>
                    </div>
                  </div>

                  {/* Визуальный элемент */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-80 h-80 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center text-8xl shadow-2xl">
                        {slide.image}
                      </div>
                      {/* Плавающие элементы */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-2xl animate-bounce">
                        {slide.icon}
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-xl animate-pulse">
                        ✨
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Навигация */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Кнопка play/pause */}
      <button
        onClick={togglePlayPause}
        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </button>

      {/* Индикатор прогресса */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  )
}
