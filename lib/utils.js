import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * poll - Higher order function to repeatedly call an async function until a condition is met
 * @param {Function} asyncFn - The async function to poll
 * @param {Function} comparator - Function that receives the result and returns true to stop polling
 * @param {number} interval - Polling interval in milliseconds
 * @returns {Promise<any>} - Resolves with the result when comparator returns true
 */
export function poll(asyncFn, comparator, interval = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = async () => {
      try {
        const result = await asyncFn();
        if (comparator(result)) {
          resolve(result);
        } else {
          setTimeout(attempt, interval);
        }
      } catch (err) {
        reject(err);
      }
    };
    attempt();
  });
}
