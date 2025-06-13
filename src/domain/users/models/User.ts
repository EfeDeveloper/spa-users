export interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
  address?: string
  phone?: string
  company?: string
  webSite?: string
}

export interface UserStats {
  title: string
  value: number
  chip: string
  chipColor: 'success' | 'error'
  description: string
}
