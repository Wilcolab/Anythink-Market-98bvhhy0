/**
 * Converts a string to kebab-case format
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The kebab-cased string
 * @throws {TypeError} If input is null, undefined, or not a string
 * 
 * @example
 * toKebabCase("Hello World Example") → "hello-world-example"
 * toKebabCase("hello---world") → "hello-world"
 * toKebabCase("hELLo_wORld") → "hello-world"
 * toKebabCase("Version 2 Update") → "version-2-update"
 * toKebabCase("  leading and trailing  ") → "leading-and-trailing"
 * toKebabCase("") → ""
 */
function toKebabCase(input) {
    // Error handling: check for null or undefined
    if (input === null || input === undefined) {
        throw new TypeError("Input cannot be null or undefined");
    }

    // Error handling: check if input is a string
    if (typeof input !== "string") {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Trim leading and trailing whitespace
    const trimmed = input.trim();

    // Return empty string if input is empty or whitespace-only
    if (trimmed.length === 0) {
        return "";
    }

    // Convert to lowercase for consistent casing
    const lowercased = trimmed.toLowerCase();

    // Replace one or more consecutive separators (spaces, underscores, hyphens) with a single hyphen
    const normalized = lowercased.replace(/[\s_-]+/g, "-");

    // Remove any leading or trailing hyphens that may have been created
    return normalized.replace(/^-+|-+$/g, "");
}

module.exports = toKebabCase;