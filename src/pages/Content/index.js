const searchShortWord = (paragraph) => {
  const SearchString = '(' + 'WIP' + ')';
  const RegularExp = new RegExp(SearchString, 'g');
  const ReplaceString =
    '<span class="wip">$1</span><span>(Work In Progress, 対応中)</span>';
  const ResString = paragraph.replace(RegularExp, ReplaceString);
  console.log(`ResString=${ResString}`);
  return ResString;
};

console.log('refreshId');
let paragraph_list = document.querySelectorAll('.comment-body > p');
console.log(JSON.stringify(paragraph_list));
for (const paragraph of paragraph_list) {
  paragraph.innerHTML = searchShortWord(paragraph.innerHTML);
}
