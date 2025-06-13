export async function withLoading<T>(
  isLoading: Record<string, boolean>,
  key: string,
  action: () => Promise<T>,
): Promise<T> {
  isLoading[key] = true
  try {
    return await action()
  } finally {
    isLoading[key] = false
  }
}
