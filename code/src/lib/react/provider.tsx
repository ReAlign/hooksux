import React, { createElement } from 'react';
import Provider from '../common/provider';

export default function(providers: any) {
  const r = {
    React,
    createElement,
  };
  return Provider(r, providers);
};
