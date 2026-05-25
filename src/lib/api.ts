// API configuratie
// In ontwikkeling: lokaal (http://localhost:3001)
// In productie: Fly.io URL (wordt overschreven door env var)
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export function apiUrl(path: string): string {
  return `${API_URL}${path}`;
}
