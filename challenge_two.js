class SearchSuggestionSystem {
    constructor(products) {
        // Store products sorted lexicographically for efficient searching
        this.products = products.sort();
    }
    
    getSuggestions(searchWord) {
        const result = [];
        
        // For each character typed so far, get suggestions
        for (let i = 1; i <= searchWord.length; i++) {
            const prefix = searchWord.substring(0, i);
            const suggestions = this.getProductsWithPrefix(prefix);
            result.push(suggestions);
        }
        
        return result;
    }
    
    getProductsWithPrefix(prefix) {
        const suggestions = [];
        
        // Find products that start with the given prefix
        for (const product of this.products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
                // Return at most 3 suggestions
                if (suggestions.length === 3) {
                    break;
                }
            }
        }
        
        return suggestions;
    }
}

// Test with the provided example
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchSystem = new SearchSuggestionSystem(products);
const result = searchSystem.getSuggestions("mouse");

console.log("Input products:", products);
console.log("Search word: 'mouse'");
console.log("Output:");
console.log(JSON.stringify(result, null, 2));

// Additional test cases
console.log("\n--- Additional Test Cases ---");

// Test case 1: Single character
console.log("\nTest 1 - Search word: 'm'");
const result1 = searchSystem.getSuggestions("m");
console.log(JSON.stringify(result1, null, 2));

// Test case 2: No matches
console.log("\nTest 2 - Search word: 'xyz'");
const result2 = searchSystem.getSuggestions("xyz");
console.log(JSON.stringify(result2, null, 2));

// Test case 3: Exact match
console.log("\nTest 3 - Search word: 'mobile'");
const result3 = searchSystem.getSuggestions("mobile");
console.log(JSON.stringify(result3, null, 2));