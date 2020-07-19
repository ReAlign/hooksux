import { createElement } from 'rax';
import Provider from '../common/provider';

export default function(providers: any) {
  const r = {
    createElement,
  };
  return Provider(r, providers);
};
