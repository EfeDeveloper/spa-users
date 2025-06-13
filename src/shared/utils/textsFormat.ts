interface RandomChip {
  chip: string
  chipColor: 'success' | 'error'
}

export const getInitials = (text: string) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0].substring(0, 2).toUpperCase()
}

export const formatWebsiteUrl = (webSiteUrl: string) => {
  return webSiteUrl?.startsWith('http') ? webSiteUrl : `https://${webSiteUrl}`
}

export const randomChip = (): RandomChip => {
  const percent = (Math.random() * 2 - 1).toFixed(2)
  const chipColor = percent.startsWith('-') ? 'error' : 'success'
  const chip = `${percent}%`
  return { chip, chipColor }
}
