export const fallbackLng = 'pl'
export const languages = [fallbackLng, 'en', 'ua'] as const
export const defaultNS = 'common'
export const ns = [defaultNS, 'auth', 'chat'] as const
export const cookieName = 'i18next'

export type TLanguage = (typeof languages)[number]
export type TNs = (typeof ns)[number]

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
