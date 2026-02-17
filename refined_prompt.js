/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert. Can contain spaces, hyphens, or underscores as separators.
 * @returns {string} The converted camelCase string. Returns an empty string if input contains no alphanumeric characters after cleaning.
 * @throws {TypeError} If input is null, undefined, or not a string.
 * 
 * @example
 * toCamelCase("hello world") // Returns "helloWorld"
 * toCamelCase("hello-world") // Returns "helloWorld"
 * toCamelCase("hello_world") // Returns "helloWorld"
 * toCamelCase("  hello   WORLD  ") // Returns "helloWorld"
 * 
 * @description
 * Splits the input string by whitespace, hyphens, or underscores, removes non-alphanumeric characters,
 * and converts the first word to lowercase while capitalizing the first letter of subsequent words.
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} input - The input string to convert. Can contain spaces, hyphens, or underscores as separators.
 * @returns {string} The converted dot.case string with all words in lowercase separated by dots. 
 *                   Returns an empty string if input contains no alphanumeric characters after cleaning.
 * @throws {TypeError} If input is null, undefined, or not a string.
 * 
 * @example
 * toDotCase("hello world") // Returns "hello.world"
 * toDotCase("hello-world") // Returns "hello.world"
 * toDotCase("hello_world") // Returns "hello.world"
 * toDotCase("  HELLO   WORLD  ") // Returns "hello.world"
 * 
 * @description
 * Splits the input string by whitespace, hyphens, or underscores, removes non-alphanumeric characters,
 * and joins all words in lowercase format separated by dots.
 */
ī
function toCamelCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new TypeError("Input must be a non-empty string");
    }

    // Check if input is a string
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }

    // Handle empty or whitespace-only strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by separators (space, hyphen, underscore) and filter out empty strings
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0)
        .map((word) => {
            // Remove non-alphanumeric characters
            const cleaned = word.replace(/[^a-z0-9]/gi, "");
            return cleaned;
        })
        .filter((word) => word.length > 0);

    // If no words remain after cleaning, return empty string
    if (words.length === 0) {
        return "";
    }

    // Convert first word to lowercase, rest to capitalize first letter
    return (
        words[0].toLowerCase() +
        words
            .slice(1)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join("")
    );
}

function toDotCase(input) {
    // Handle null or undefined
    if (input === null || input === undefined) {
        throw new TypeError("Input must be a non-empty string");
    }

    // Check if input is a string
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }

    // Handle empty or whitespace-only strings
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return "";
    }

    // Split by separators (space, hyphen, underscore) and filter out empty strings
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter((word) => word.length > 0)
        .map((word) => {
            // Remove non-alphanumeric characters
            const cleaned = word.replace(/[^a-z0-9]/gi, "");
            return cleaned;
        })
        .filter((word) => word.length > 0);

    // If no words remain after cleaning, return empty string
    if (words.length === 0) {
        return "";
    }

    // Convert all words to lowercase and join with dots
    return words.map((word) => word.toLowerCase()).join(".");
}

