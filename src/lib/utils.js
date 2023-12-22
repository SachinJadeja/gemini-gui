/* eslint-disable import/prefer-default-export */
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const setToken = (val, key = 'ai-token') => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, val);
  }
}

export const getToken = (key = 'ai-token') => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return undefined;
}
