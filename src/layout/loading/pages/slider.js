import { El } from '../../../utils/el';

const images = [
  './src/assets/images/slider1.svg',
  './src/assets/images/slider2.svg',
  './src/assets/images/slider3.svg',
];
const texts = [
  'We provide high quality products just for you',
  'Your satisfaction is our number one priority',
  'Let’s fulfill your fashion needs with shoearight now!',
];

let currentIndex = 0;
let sliderStopped = false;

function createSlider() {
  const slider = El({
    element: 'div',
    className: 'flex flex-col justify-around h-[926px] w-[428px]',
  });

  const image = El({
    element: 'img',
    src: images[currentIndex],
  });

  const text = El({
    element: 'p',
    innerText: texts[currentIndex],
    className: 'text-2xl	font-semibold	text-center	',
  });
  const btnDiv = El({
    element: 'div',
    className: 'flex gap-2 justify-center	',
  });
  const btnslider1 = El({
    element: 'button',
    className: 'bg-gray-600 w-[20px] h-1 ml-2',
  });
  const btnslider2 = El({
    element: 'button',
    className: 'w-[20px] h-1 ml-2 bg-gray-300',
  });
  const btnslider3 = El({
    element: 'button',
    className: 'w-[20px] h-1 ml-2 bg-gray-300',
  });
  const nextButton = El({
    element: 'button',
    innerText: 'Next',
    className: 'w-[380px] h-[47px] bg-[#212529] rounded-full text-white ml-7',
    eventListener: [
      {
        event: 'click',
        callback: function () {
          if (currentIndex < 3) {
            currentIndex++;
            console.log(currentIndex);
            image.src = images[currentIndex];
            text.textContent = texts[currentIndex];
            if (currentIndex == 0) {
              btnslider1.className = 'bg-gray-600 w-[20px] h-1 ml-2';
              btnslider2.className = 'bg-gray-300 w-[20px] h-1 ml-2';
              btnslider3.className = 'bg-gray-300 w-[20px] h-1 ml-2';
            } else if (currentIndex == 1) {
              btnslider1.className = 'bg-gray-300 w-[20px] h-1 ml-2';
              btnslider2.className = 'bg-gray-600 w-[20px] h-1 ml-2';
              btnslider3.className = 'bg-gray-300 w-[20px] h-1 ml-2';
            } else if (currentIndex == 2) {
              btnslider1.className = 'bg-gray-300 w-[20px] h-1 ml-2';
              btnslider2.className = 'bg-gray-300 w-[20px] h-1 ml-2';
              btnslider3.className = 'bg-gray-600 w-[20px] h-1 ml-2';
            }
          }
          if (currentIndex == 2) {
            nextButton.innerText = 'Get Started';
          }
          if (currentIndex == 3) {
            window.location.href = 'login';
            sliderStopped = true;
          }
        },
      },
    ],
  });
  btnDiv.append(btnslider1, btnslider2, btnslider3);
  slider.append(image, text, btnDiv, nextButton);

  document.body.append(slider);

  return slider;
}

export { createSlider };
