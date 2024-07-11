import { sliderBtn } from '../../components/brandsBtn/sliderBtn';
import { El } from '../../utils/el';

export function sliderBtns() {
  return El({
    element: 'div',
    className: 'mt-5 ml-5 w-[428px] flex overflow-auto',
    children: [
      sliderBtn('All'),
      sliderBtn('Nike'),
      sliderBtn('Adidas'),
      sliderBtn('Puma'),
      sliderBtn('Asics'),
      sliderBtn('Reebok'),
      sliderBtn('New Ba..'),
      sliderBtn('Converse'),
    ],
  });
}
