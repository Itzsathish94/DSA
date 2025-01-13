class Hashtable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total%this.size;
    }

    set(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];

        if(!bucket){
            this.table[index] = [[key,value]];
        }
        else{
            const sameKeyItem = bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }
            else{
                bucket.push([key,value]);
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket){
            const sameKeyItem = bucket.find(item=> item[0]===key);
            return sameKeyItem ? sameKeyItem[1] : undefined;
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket){
            const sameKeyItemIndex = bucket.findIndex(item=>item[0]===key);
            if(sameKeyItemIndex!==-1){
                bucket.splice(sameKeyItemIndex,1);
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                this.table[i].forEach(item=>{
                    console.log(`Index ${i} = ${item[0]} : ${item[1]}`)
                })
            }
        }
    }

    removeDuplicates(str){
        let result='';
        for(const char of str){
            if(!this.get(char)){
                this.set(char,true);
                result += char;
            }
        }
        return result;
    }

    mostFrequent(array){
        for(const element of array){
            const currentCount = this.get(element) || 0;
            this.set(element,currentCount+1);
        }

        let mostFrequent = null;
        let maxCount = 0;

        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                for(const [key,count] of this.table[i]){
                    if(count>maxCount){
                        maxCount = count;
                        mostFrequent = key;
                    }
                }
            }
        }
        return mostFrequent;
    }

    findAllDuplicates(array){
        for(const element of array){
            const currentCount = this.get(element) || 0;
            this.set(element,currentCount+1);
        }
        let duplicates = [];
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                for(const [key,count] of this.table[i]){
                    if(count>1){
                        duplicates.push(key);
                    }
                }
            }
        }
        return duplicates;
    }

    findUniqueElement(array){
        for(const element of array){
            const currentCount = this.get(element) || 0;
            this.set(element,currentCount+1);
        }
        let unique = [];
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                for(const [key,count] of this.table[i]){
                    if(count===1){
                        unique.push(key);
                    }
                }
            }
        }
        return unique;
    }

    findThirdMostOccured(array){
        for(const element of array){
            const currentCount = this.get(element) || 0;
            this.set(element,currentCount+1);
        }


        const items = [];
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                for(const [key,count] of this.table[i]){
                    items.push({key,count})
                }
            }
        }

        items.sort((a,b)=>b.count - a.count);
        return items[2] ? items[2].key : null;
    }

}



const HASHTABLE = new Hashtable(50);


