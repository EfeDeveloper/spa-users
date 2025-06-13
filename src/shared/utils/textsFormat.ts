export const getInitials = (text: string) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0].substring(0, 2).toUpperCase()
}

export const formatWebsiteUrl = (webSiteUrl: string) => {
  return webSiteUrl?.startsWith('http') ? webSiteUrl : `https://${webSiteUrl}`
}
