function longestPalindromicSubstring(string) {
  let longest = [0, 0];

  for (let i = 1; i <= string.length - 1; i++) {
    let odd = findLongestPalindrome(i - 1, i + 1);
    let even = findLongestPalindrome(i - 1, i);
    let max = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longest = max[1] - max[0] > longest[1] - longest[0] ? max : longest;
  }

  function findLongestPalindrome(start, end) {
    let i = start;
    let j = end;

    while (i >= 0 && end <= string.length - 1) {
      if (string[i] !== string[j]) {
        break;
      }
      i--;
      j++;
    }
    //inclusive of the whole palindromic string
    return [i + 1, j - 1];
  }

  return string.slice(longest[0], longest[1] + 1);
}

console.log(longestPalindromicSubstring("abghhgk"));
//should return 'ghhg'
