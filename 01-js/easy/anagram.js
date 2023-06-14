/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const cleanStr2=str2.replace(/[^A-Za-z]/g, "").toLowerCase();
  const cleanStr1=str1.replace(/[^A-Za-z]/g, "").toLowerCase();

  if(cleanStr1.length!=cleanStr2.length) return false;

  const freqMp1={};
  const freqMp2={};

  for(let char of cleanStr1){
    freqMp1[char]=(freqMp1[char] || 0)+1;
  }

  for(let char of cleanStr2){
    freqMp2[char]=(freqMp2[char] || 0)+1;
  }

  for (let char in freqMp1) {
    if (freqMp1[char] !== freqMp2[char]) {
      return false;
    }
  return true;
}}

module.exports = isAnagram;
