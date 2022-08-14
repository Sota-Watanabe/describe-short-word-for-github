const searchShortWord = (paragraph) => {
  const SearchString = '(WIP)';
  const RegularExp = new RegExp(SearchString, 'g');
  const ReplaceString =
    '<span class="wip">$1</span><span>(Work In Progress, 対応中)</span>';
  const ResString = paragraph.replace(RegularExp, ReplaceString);
  console.log(`ResString=${ResString}`);
  return ResString;
};

let paragraph_list = document.querySelectorAll('.comment-body > p');
console.log(JSON.stringify(paragraph_list));
for (const paragraph of paragraph_list) {
  // 特定クラスが含まれていない場合
  if (!paragraph.classList.contains('done-replace-with-description')) {
    paragraph.innerHTML = searchShortWord(paragraph.innerHTML);
    paragraph.classList.add('done-replace-with-description');
  }
}
