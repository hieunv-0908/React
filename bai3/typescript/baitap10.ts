let input:string = "hello world apple banana orange pumpkin cucumber";
let result = "";
function check_word(input_string:string):string {
    let input_set = new Set(input_string);
    if(input_set.size == input_string.length){
        if(result.length < input_string.length) result = input_string;
    }
    return result;
}
console.log(check_word(input));


