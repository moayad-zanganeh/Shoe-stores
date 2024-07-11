import { getSearch } from '../../api/get/getProducts';
import { oneCard } from './oneCard';

export function renderApi() {
  const searchUser = document.getElementById('searching').value;
  const renderApi = document.getElementById('renderApi');
  const divnotfound = document.getElementById('divnotfound');

  renderApi.innerHTML = '';
  getSearch(searchUser).then((data) => {
    const renderApi = document.getElementById('renderApi');

    data.map((product) => {
      const card = oneCard({ product });
      return renderApi.append(card);
    });

    if (Object.prototype.hasOwnProperty.call(data, 'length')) {
      //length begirim
      console.log(data.length);
      const lengthData = document.getElementById('found'); //title =>found
      countData.innerText = `${data.length} found`;
      if (data.length == 0) {
        divnotfound.classList.remove('hidden');
        console.log(data.length);

        console.log('0');
      } else if (data.length != 0) {
        console.log(data.length);

        divnotfound.classList.add('hidden');
      }
    }
    // console.log(data);
    const valueInput = document.getElementById('searching'); //namayesh chi dari search mikoni dar title
    valueInput.innerText = `"${searchUser}"`;

    const parentTitleClearall = document.getElementById('clearall'); //clear All o ina
    const renderTimeSearch = document.getElementById('renderTime');
    const headerSearchApi = document.getElementById('headerSearchApi'); // clear All o ina
    if (searchUser == '') {
      const renderApi = document.getElementById('renderApi');
      renderApi.innerHTML = '';
      const renderTime = document.getElementById('renderTime');
      renderTime.classList.remove('hidden');
      renderTimeSearch.classList.remove('hidden');
      parentTitleClearall.classList.remove('hidden');
      headerSearchApi.classList.add('hidden');
    } else {
      renderTime.classList.add('hidden');
      renderTimeSearch.classList.add('hidden');
      parentTitleClearall.classList.add('hidden');
      headerSearchApi.classList.remove('hidden');
    }
  });
}
