// Utilidades de seguridad
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}

export const validateSearchTerm = (term: string): boolean => {
  // Prevenir inyección de código
  const dangerousPatterns = /[<>{}]|script|javascript/gi
  return !dangerousPatterns.test(term) && term.length <= 100
}

export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}