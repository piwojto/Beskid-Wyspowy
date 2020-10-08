import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Domek w Beskidzie', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Beskid Wyspowy',
  name: 'Piotr Wójtowicz',
  subtitle: 'Z dala od cywilizacji',
  cta: '',
};

// SECOND DATA
export const secondData = {
  img: 'mogielica2020.webp',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://beskidy.netlify.app/beskidy/mogielica', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mogielica2020.webp',
    title: 'Mogielica',
    info: 'Najwyższy szczyt Beskidu Wyspowego. Z punktów widokowych, na szczycie i na polanach, rozpościerają się szerokie widoki na Beskid Wyspowy, Beskid Sądecki, Pieniny, Gorce, Tatry.',
    info2: 'Jedną z popularniejszych tras na Mogielicę, jest szlak wiodący z przełęczy Rydza-Śmigłego w Chyszówkach.',
    url: '',
    repo: 'https://beskidy.netlify.app/beskidy/mogielica', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mor3.webp',
    title: 'Mapy',
    info: 'Beskid Wyspowy to przepiękny region położony pomiędzy doliną Raby a Kotliną Sądecką. ',
    info2: 'Nie trudno wyszukać tu trasę, w trakcie której będziemy mogli się cieszyć jedynie obecnością otaczającego nas lasu.',
    url: '',
    repo: 'https://mapa-turystyczna.pl/beskid-wyspowy#49.65606/20.33501/11', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mor2.webp',
    title: 'Noclegi',
    info: 'Na turystów czekają tutaj niezpomniane widoki, noclegi na każdą kieszeń, pyszna kuchnia regionalna i wiele atrakcji.',
    info2: 'Gdzie pojechać?',
    url: '',
    repo: 'http://www.odkryjbeskidwyspowy.pl/informator/groupbyloc/at/5', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
