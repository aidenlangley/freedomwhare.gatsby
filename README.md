# freedomwhare.co.nz

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!--
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a51d0e9-f611-4dd8-887f-fc1889e68540/deploy-status)]
(https://app.netlify.com/sites/tania/deploys)
-->

- [freedomwhare.co.nz](#freedomwhareconz)
  - [Gatsby, React & Netlify(+CMS)](#gatsby-react--netlifycms)
  - [Details](#details)
  - [License](#license)

The architecture for this project is inspired by
[@taniarascia](https://www.taniarascia.com/), every time I read one of her
website update blogs I get pretty excited about finally trying a React project.

## Gatsby, React & Netlify(+CMS)

My first project was **Angular** (gross, btw,) my second was **Vue** (better,
but I also didn't appreciate not knowing what was going on the majority of the
time,) then came **Nuxt.js**, since Vue was okay, but again, I had the same
problem.

Finally I started a project in **Svelte** and really enjoyed that experience.
[TailwindCSS](https://tailwindcss.com/)
[JIT](https://tailwindcss.com/docs/just-in-time-mode) was introduced too, so my
build times were fast as anything, and really simple static sites are a joy to
write in Svelte, with [SvelteKit](https://kit.svelte.dev/) btw. Compiling a
static website in vanilla JS was sweet.

Now I'm having a foray into the world of [**React**] & [**Gatsby**]. It's
probably now the oldest of the frameworks that I've used, which is a plus in one
sense since it's mature and has a vibrant ecosystem, but a negative in the sense
that it's likely bloated and full of workarounds / hacks. Ah well, can't get too
bogged down in the detail...

## Details

I'm not too big on testing on this project since it's only small in scale, but I
am big on linting, so we've got a good suite of linters here:

- ESLint
- Stylelint
- Prettier

We're also using Yarn, Netlify and NetlifyCMS. A tailwind.config.js exists just
for reference, since I've been used to using Tailwind for so long that the
colours they define are good with me.

## License

This project is open source and available under the [MIT License](LICENSE).
