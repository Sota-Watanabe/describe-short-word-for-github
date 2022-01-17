// import { printLine } from './modules/print';

const searchWithExcludeKeyword = function () {
  const keyword = document.querySelector('.exclude-input').value
  let href = new URL(location.href);
  href.searchParams.set('exclude_keyword', keyword);
  location.href = href.toString()
}

const refreshId = setInterval(function() {
  let li = document.createElement('li');
  const html = `
  <li class="Filter__FilterItem-sc-13ch3ga-1 iEkNwU">
  <mer-accordion label="除外キーワード" expanded="" data-testid="除外キーワード" mer-defined="" data-js-focus-visible="">
    <mer-checkbox-group class="mer-spacing-b-16" cols="2" mer-defined="">
    <input type="search" class="exclude-input" placeholder="" aria-label="除外キーワードを入力" autocomplete="off">
    <button id="mySearchButton" type='button'>検索</button>
    </mer-checkbox-group>
  </mer-accordion>
  </li>
  `;
  
  li.innerHTML = html;
  let list = document.querySelector('#search-filter ul');
  if(list && !document.querySelector('.exclude-input')) {
    list.append(li);
    const btn = document.getElementById('mySearchButton');
    btn.addEventListener('click', searchWithExcludeKeyword);
    const keyword = new URL(location.href).searchParams.get('exclude_keyword');
    if (keyword) {
      document.querySelector('.exclude-input').value = decodeURIComponent(keyword);
    }
    clearInterval(refreshId);
  }
}, 300);
