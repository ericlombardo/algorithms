/* 
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.
*/

var toGoatLatin = function(sentence) {

  let words = sentence.split(' ')
  
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  
  for (let i = 0; i < words.length; i++) {
      if (!vowels.includes(words[i][0])) {
          words[i] = words[i].slice(1) + words[i][0]
      } 
      words[i] = words[i] + 'ma' + 'a'.repeat(i + 1)
  }
  return words.join(' ')
};

/* 
Rules:
if a,e,i,o,u => add 'ma' to end of word (apple => applema)
else => put first letter on end and add 'ma' after (goat => oatgma)
add 'a' for each word starting with 1 and increasing 1 as you go

return sentence string


Sudo:
split sentence into an array of words

set values for vowels including upper and lowercase

iterate through each word
if words[i] isn't included in vowels then move first letter to end
then add 'ma' to the end
also add 'a's to the end for each word based on index
*/