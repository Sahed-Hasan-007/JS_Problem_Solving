

let v_string= "How are you";

function vowel_count (v_string){
    var v_count=0;
    const vowels= ['a','e','i','o','u','A','E','I','O','U'];
    for (let char of v_string){
        if (vowels.includes(char)){
            v_count++;
        }
    }
    return v_count;
}

console.log(vowel_count(v_string));