import type { User } from '@/domain/users/models/User'
import { formatWebsiteUrl, randomChip } from '@/shared/utils/textsFormat'

import type { UserStats } from '../models/User'
import type { UserDto } from '../models/User.dto'

export const userAdapter = (userDto: UserDto): User => ({
  id: userDto.id,
  name: `${userDto.firstName} ${userDto.lastName}`,
  email: userDto.email,
  avatarUrl: userDto.image,
  address: userDto.address.address,
  phone: userDto.phone,
  company: userDto.company.name,
  webSite: formatWebsiteUrl(`${userDto.firstName}.com`),
})

export const userListAdapter = (usersDto: UserDto[]): User[] => {
  return usersDto.map(userAdapter)
}

const roles = [
  { key: 'admin', description: 'Admins' },
  { key: 'moderator', description: 'Moderators' },
  { key: 'user', description: 'Users' },
]

export const userStatsAdapter = (userDto: UserDto[]): UserStats[] => {
  return roles.map((role) => {
    const value = userDto.filter((u) => u.role === role.key).length
    const { chip, chipColor } = randomChip()
    return {
      title: role.key,
      value,
      chip,
      chipColor,
      description: role.description,
    }
  })
}
