export interface UserDto {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  image: string
  address: {
    address: string
    city: string
    state: string
    country: string
  }
  company: {
    name: string
  }
  role: string
}
