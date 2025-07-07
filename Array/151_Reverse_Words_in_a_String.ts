function reverseWords(s: string): string {
    const trimString = s.trim();
    if (trimString === ""){
        return ""
    }
    const words = trimString.split(/\s+/);
    words.reverse();
    return words.join(" ");
};

