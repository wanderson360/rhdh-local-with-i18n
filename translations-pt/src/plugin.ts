// src/plugin.ts
import { createTranslationResource } from '@backstage/frontend-plugin-api';
import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';
import { catalogReactTranslationRef } from '@backstage/plugin-catalog-react/alpha';
import { coreComponentsTranslationRef } from '@backstage/core-components/alpha';

export const catalogTranslationsPT = createTranslationResource({
  ref: catalogTranslationRef,
  translations: {
    'pt-BR': () => import('./translations/catalog-pt'),
  },
});

export const catalogReactTranslationsPT = createTranslationResource({
  ref: catalogReactTranslationRef,
  translations: {
    'pt-BR': () => import('./translations/catalog-react-pt'),
  },
});

export const coreComponentsTranslationsPT = createTranslationResource({
  ref: coreComponentsTranslationRef,
  translations: {
    'pt-BR': () => import('./translations/core-components-pt'),
  },
});

export {
  catalogTranslationRef,
  catalogReactTranslationRef,
  coreComponentsTranslationRef,
};