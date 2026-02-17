function toCamelCase(str) {
    // Trim whitespace and return empty string if input is empty
    if (!str || str.trim() === '') {
        return '';
    }

    // Split by spaces, hyphens, or underscores
    const words = str.trim().split(/[\s\-_]+/);

    // Convert first word to lowercase, capitalize subsequent words
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase("hello world example"));        // "helloWorldExample"
console.log(toCamelCase("Convert_this-string"));        // "convertThisString"
console.log(toCamelCase("  spaced  input  "));           // "spacedInput"
console.log(toCamelCase(""));                            // ""
console.log(toCamelCase("single"));                      // "single"