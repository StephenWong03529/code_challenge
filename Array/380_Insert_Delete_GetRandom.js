var RandomizedSet = function() {
    this.rset = new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.rset.has(val)){
        return false;
    }else{
        this.rset.add(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.rset.has(val)){
        this.rset.delete(val);
        return true;
    }else{
        return false;
    }
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let len = this.rset.size;
    let array = Array.from(this.rset); 
    let randomIndex = Math.floor(Math.random()*len);
    return array[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */