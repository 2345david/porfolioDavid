// ─────────────────────────────────────────────────────────────
//  Datos estructurados (schema.org) para Google.
//  Le dicen a Google quién eres y qué perfiles son tuyos, para que
//  al buscar tu nombre relacione el porfolio con LinkedIn y GitHub.
//  Se generan solos a partir de data/portfolio.js.
//
//  Cuando tengas dominio, pon aquí la dirección (p. ej. 'https://davidramos.dev')
//  y se añadirán la URL y la foto, que Google pide en formato completo.
// ─────────────────────────────────────────────────────────────
import { perfil, enlaces, stack } from './portfolio.js'

export const DOMINIO = 'https://davurg.dev'

export function datosEstructurados() {
  const persona = {
    '@type': 'Person',
    '@id': (DOMINIO || '') + '/#persona',
    name: perfil.nombreCompleto,
    alternateName: perfil.alias,
    jobTitle: perfil.rol.es,
    email: 'mailto:' + perfil.email,
    worksFor: { '@type': 'Organization', name: 'Babel' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Coín',
      addressRegion: 'Málaga',
      addressCountry: 'ES',
    },
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'IES Los Montecillos' },
      { '@type': 'EducationalOrganization', name: 'IES Serranía' },
    ],
    knowsLanguage: ['es', 'ca', 'en'],
    knowsAbout: stack
      .filter((g) => !g.blandas)
      .flatMap((g) => g.items.map((i) => (typeof i === 'object' ? i.es : i))),
    sameAs: [enlaces.linkedin, enlaces.github],
  }

  const web = {
    '@type': 'WebSite',
    '@id': (DOMINIO || '') + '/#web',
    name: `${perfil.nombre} · Porfolio`,
    inLanguage: ['es', 'en'],
    author: { '@id': persona['@id'] },
  }

  if (DOMINIO) {
    persona.url = DOMINIO
    persona.image = DOMINIO + '/og-image.jpg'
    web.url = DOMINIO
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [persona, web] })
}
