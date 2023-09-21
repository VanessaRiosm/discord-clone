import {PrismaClient} from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENVvvvvvvvvvv !== 'production') globalThis.prisma = db
