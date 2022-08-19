import { shordWordDictionary } from './modules/shordWordDictionary';

const setClassForDescription = (paragraph) => {
  let updatedParagraph = paragraph;
  for (const shortWord in shordWordDictionary) {
    const searchString = `(${shortWord})`;
    const RegularExp = new RegExp(searchString, 'g');
    const ReplaceString = `<span class="short-word">$1</span><span>(${shordWordDictionary[shortWord].full}: ${shordWordDictionary[shortWord].description})</span>`;
    updatedParagraph = updatedParagraph.replace(RegularExp, ReplaceString);
  }
  return updatedParagraph;
};

let paragraph_list = document.querySelectorAll('.comment-body > p');
for (const paragraph of paragraph_list) {
  // 特定クラスが含まれていない場合
  if (!paragraph.classList.contains('done-replace-with-description')) {
    paragraph.innerHTML = setClassForDescription(paragraph.innerHTML);
    paragraph.classList.add('done-replace-with-description');
  }
}
