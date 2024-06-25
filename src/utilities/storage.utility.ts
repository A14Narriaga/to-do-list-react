export function setSessionStorage(key: string, value: any): any {
	sessionStorage.setItem(key, JSON.stringify(value))
	return value
}

export function getSessionStorage(key: string, otherwise: any): any {
	const value = sessionStorage.getItem(key)
	return value ? JSON.parse(value) : otherwise
}
