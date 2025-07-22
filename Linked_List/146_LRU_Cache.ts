class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }
        // remove & re-insert to mark as most‐recently used
        const val = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;

    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // update existing entry’s recency
            this.cache.delete(key);
            } else if (this.cache.size >= this.capacity) {
            // evict least‐recently used (the first Map key)
            const oldestKey = this.cache.keys().next().value as number;
            this.cache.delete(oldestKey);
            }
            this.cache.set(key, value);
        }
    
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */