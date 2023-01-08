function groupAnagrams(words) {
  let groups = [];
  let done = [];
  const alpha = words.map((word) => {
    const alphabetized = word.split("").sort().join("");
    const obj = { name: word, value: alphabetized };
    return obj;
  });

  console.log(alpha);

  for (let el of alpha) {
    let group = [];
    for (let i of alpha) {
      if (!done.includes(el.value)) {
        if (i.value === el.value) {
          console.log(i, el, i.value === el.value);
          group.push(i.name);
        }
      }
    }
    done.push(el.value);
    group.length ? groups.push(group) : "";
  }
  return groups;
}

console.log(groupAnagrams(["yo", "oy", "a"]));
