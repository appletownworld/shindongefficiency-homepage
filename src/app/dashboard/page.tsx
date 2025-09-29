'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  BarChart3, 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  Plus,
  Menu,
  X,
  LogOut,
  Settings
} from 'lucide-react'

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    { name: 'Общий доход', value: '₽2,345,000', change: '+12%', changeType: 'positive' },
    { name: 'Продажи', value: '156', change: '+8%', changeType: 'positive' },
    { name: 'Клиенты', value: '89', change: '+15%', changeType: 'positive' },
    { name: 'Товары', value: '1,234', change: '-2%', changeType: 'negative' },
  ]

  const recentSales = [
    { id: 1, customer: 'ООО "Альфа"', amount: '₽45,000', date: '2024-01-15', status: 'Завершено' },
    { id: 2, customer: 'ИП Иванов', amount: '₽23,500', date: '2024-01-14', status: 'В обработке' },
    { id: 3, customer: 'ООО "Бета"', amount: '₽67,800', date: '2024-01-13', status: 'Завершено' },
    { id: 4, customer: 'ИП Петров', amount: '₽12,300', date: '2024-01-12', status: 'Завершено' },
  ]

  const navigation = [
    { name: 'Панель управления', href: '/dashboard', icon: BarChart3, current: true },
    { name: 'Продажи', href: '/dashboard/sales', icon: ShoppingCart, current: false },
    { name: 'Закупки', href: '/dashboard/purchases', icon: Package, current: false },
    { name: 'Инвентарь', href: '/dashboard/inventory', icon: Package, current: false },
    { name: 'Клиенты', href: '/dashboard/customers', icon: Users, current: false },
    { name: 'Поставщики', href: '/dashboard/suppliers', icon: Users, current: false },
    { name: 'Отчеты', href: '/dashboard/reports', icon: TrendingUp, current: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Shindong Efficiency</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.current
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                >
                  <item.icon className="mr-4 h-6 w-6" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Shindong Efficiency</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-blue-100 text-blue-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <item.icon className="mr-3 h-6 w-6" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">А</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Администратор</p>
                  <button className="text-xs text-gray-500 hover:text-gray-700">Выйти</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top bar */}
        <div className="sticky top-0 z-10 lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Header */}
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Панель управления
                  </h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Новая продажа
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <DollarSign className="h-6 w-6 text-gray-400" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">
                                {stat.name}
                              </dt>
                              <dd className="flex items-baseline">
                                <div className="text-2xl font-semibold text-gray-900">
                                  {stat.value}
                                </div>
                                <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {stat.change}
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent sales */}
              <div className="mt-8">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Последние продажи
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Обзор недавних транзакций
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                      <li key={sale.id}>
                        <div className="px-4 py-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <ShoppingCart className="h-8 w-8 text-gray-400" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {sale.customer}
                              </div>
                              <div className="text-sm text-gray-500">
                                {sale.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-sm font-medium text-gray-900">
                              {sale.amount}
                            </div>
                            <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              sale.status === 'Завершено' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {sale.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
