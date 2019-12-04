const vowels = ['a','e','i','o','u'];
var vowelsString =[];
var duplicates = "";
function vowel_count(str1){
    for (const letter of str1) {
    for (const vowel of vowels) {
      if (vowel===letter) {
        if(vowelsString.includes(letter)){
         ++duplicates
        }else{
          vowelsString+= letter;
        }
        
      }
    } 
      }
      return ( `('${vowelsString}', ${duplicates})`); 
    }

  console.log(vowel_count("foodeei"));