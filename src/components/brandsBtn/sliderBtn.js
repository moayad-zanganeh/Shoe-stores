import { El } from '../../utils/el';
import { renderProducts } from '../Home/my cart/renderproduct';

export function sliderBtn(textbtn, classbtn) {
  // function changeButtonStyle() {
  //   var buttons = document.querySelectorAll('button');
  //   var blackBackgroundButton = document.querySelector(
  //     'button[style="background-color: black; color: white;"]'
  //   );

  //   buttons.forEach(function (button) {
  //     button.addEventListener('click', function () {
  //       if (button === blackBackgroundButton) {
  //         button.removeAttribute('style');
  //       }
  //     });
  //   });
  // }
  const divSliderBtn = El({
    element: 'div',
    className: `${classbtn} filter-button border-[2px] whitespace-nowrap rounded-full font-semibold border-black inline-block px-[20px] text-[16px] m-auto py-[5px] filter-button cursor-pointe ml-1 `,
    innerText: `${textbtn}`,
  });

  divSliderBtn.addEventListener('click', (event) => {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach((btn) => {
      btn.classList.remove('bg-[#343A40]', 'text-white');
      btn.classList.add('bg-white', 'text-black');
    });
    divSliderBtn.classList.remove('bg-white', 'text-black');
    divSliderBtn.classList.add('bg-[#343A40]', 'text-white');
    const handleClick = (clickedIndex) => {
      buttons.forEach((divSliderBtn, index) => {
        if (index === clickedIndex) {
          divSliderBtn.style.backgroundColor = '#343A40';
          divSliderBtn.style.color = 'white';
        } else {
          divSliderBtn.style.backgroundColor = 'white';
          divSliderBtn.style.color = '#343A40';
        }
      });
    };
    const filterBrand = event.target.innerText.toLowerCase();
    console.log(filterBrand);
    // id: 'divrenderproducts',
    const renderBrand = document.getElementById('render');
    const divRenderProducts = document.getElementById('divrenderproducts');
    if (renderBrand != null) {
      renderBrand.remove();
    }
    const productFilter = renderProducts(filterBrand);
    divRenderProducts.append(productFilter);
  });

  return divSliderBtn;

  // function btnSlider() {
  //   let btnSliders = document.getElementById('btnslider');
  //   if (`${textbtn}` == 'All') {
  //     console.log('Hi');
  //   } else if (`${textbtn}` == 'Nike') {
  //     window.location.href = 'brandNike';
  //     btnSliders.style.backgroundColor = 'black';
  //     btnSliders.style.color = 'while';
  //   }
  // }
}
