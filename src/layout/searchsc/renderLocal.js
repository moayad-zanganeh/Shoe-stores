import { El } from '../../utils/el';
import { getLocalStorage } from '../../utils/localStorage';
import { textAndIcon } from './textAndIcon';

export function renderLocal() {
  const local = getLocalStorage('searching');
  const render = local.map((item) => textAndIcon(item));
  return render;
}
