import { type ClassValue, clsx } from "clsx";

// Utility for conditional class names
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

// Format phone number for display
export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
