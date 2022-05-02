const search = document.querySelector('.search-input');
const searchBtn = document.querySelector('.bi-search');

const filter = () => {
    console.log(search.value);
}
searchBtn.addEventListener('click', filter);