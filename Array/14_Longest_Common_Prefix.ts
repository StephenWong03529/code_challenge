function longestCommonPrefix(strs: string[]): string {
     if (!strs || strs.length === 0) {
        return ""; // Handle empty or null input
    }
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // Get the character to compare

        // Check this character against the same position in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If the current string is shorter than index 'i',
            // or if the character at index 'i' doesn't match,
            // then the prefix up to 'i-1' is the LCP.
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
     return strs[0];
}
    