// Tiny error store
let errors = [];
const listeners = new Set();

export function logError({widget, message, stack}) {
    errors = [
        { id: crypto.randomUUID(), time: new Date().toLocaleDateString(), widget, message, stack},
        ...errors,
    ];
    listeners.forEach((l) => l());
}
