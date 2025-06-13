export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  return 'Ha ocurrido un error inesperado.'
}
