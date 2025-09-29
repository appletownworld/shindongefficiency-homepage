import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, companyName, phone } = await request.json()

    // Валидация данных
    if (!name || !email || !password || !companyName) {
      return NextResponse.json(
        { error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Пароль должен содержать минимум 6 символов' },
        { status: 400 }
      )
    }

    // Проверка email на валидность
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Неверный формат email' },
        { status: 400 }
      )
    }

    // Здесь должна быть проверка существования пользователя в БД
    // Пока что используем заглушку
    const existingUser = null // В реальном приложении: await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 409 }
      )
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 12)

    // Создание пользователя и компании (в реальном приложении через Prisma)
    const user = {
      id: Date.now().toString(), // Временный ID
      email,
      name,
      role: 'ADMIN',
      companyId: Date.now().toString()
    }

    const company = {
      id: user.companyId,
      name: companyName,
      phone: phone || null
    }

    // Создание JWT токена
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email,
        role: user.role,
        companyId: user.companyId
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    )

    // Создание ответа
    const response = NextResponse.json({
      message: 'Аккаунт успешно создан',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      company: {
        id: company.id,
        name: company.name
      }
    })

    // Установка HTTP-only cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 дней
    })

    return response
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
