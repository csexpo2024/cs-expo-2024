
export interface Partner {
  name: string;
  logo: string;
  fb?: string;
  ig?: string;
  web?: string;
}

export const medias: Partner[] = [
  {
    name: 'INQUIRER.net',
    logo: '/img/partners/inquirer.jpg',
    fb: "https://www.facebook.com/inquirerdotnet",
    ig: "https://www.instagram.com/inquirerdotnet/",
    web: "https://www.inquirer.net/",
  },
  {
    name: 'InqPOP!',
    logo: '/img/partners/inqpop.png',
    fb: "https://www.facebook.com/inqpop",
    ig: "https://www.instagram.com/inqpop/",
    web: "https://www.pop.inquirer.net/",
  },
  {
    name: 'Cebu Daily News',
    logo: '/img/partners/cdn.png',
    fb: "https://www.facebook.com/cdndigital",
    ig: "https://www.instagram.com/cdndigital/",
    web: "https://cebudailynews.inquirer.net/",
  },
  {
    name: 'When in Manila',
    logo: '/img/partners/wim.png',
    fb: "https://www.facebook.com/WhenInManila",
    ig: "https://www.instagram.com/wheninmanila/",
    web: "https://www.wheninmanila.com/",
  },
  {
    name: 'Manila Standard',
    logo: 'img/partners/manila-standard.jpg',
    fb: "https://www.facebook.com/ManilaStandardPH",
    ig: "https://www.instagram.com/manilastandardph/",
    web: "https://www.manilastandard.net/",
  },
  {
    name: 'Bandera',
    logo: 'img/partners/bandera.jpg',
    fb: "https://www.facebook.com/banderaphl",
    ig: "https://www.instagram.com/banderaphl/",
    web: "https://bandera.inquirer.net/",
  },
];

export const majors: Partner[] = [
  {
    name: 'FEU Tech ACM',
    logo: '/img/partners/acm.png',
    fb: "https://www.facebook.com/feutechACM",
    ig: "https://www.instagram.com/feutechacm/",
    web: "https://feutech.acm.org/2022/",
  },
  {
    name: 'FiT iTamaraws',
    logo: '/img/partners/tec.png',
    fb: "https://www.facebook.com/iTamarawsEsportsClub",
    ig: "https://www.instagram.com/fit.tec.ig",
  },
  {
    name: 'FEU Tech JPCS',
    logo: '/img/partners/acm.png',
    fb: "https://www.facebook.com/feutechJPCS",
    ig: "https://www.instagram.com/jpcs_fit",
  },
  {
    name: 'Computer Science Student Org (CSSO)',
    logo: '/img/partners/csso.png',
    fb: "https://www.facebook.com/CSSO2016",
  },
  {
    name: 'Adamson Computer Science Society',
    logo: '/img/partners/adamson.png',
    fb: "https://www.facebook.com/ACOMSSofficial",
  },
  {
    name: 'Earist Computer Student Association',
    logo: '/img/partners/earist.png',
    fb: "https://www.facebook.com/tatakComsa",
  },
  {
    name: 'CVSU Sites',
    logo: '/img/partners/cvsu.png',
    fb: "https://www.facebook.com/cvsu.elex.sites",
  },
]

export const minors: Partner[] = [
  {
    name: 'JPSC Asia Pacific College',
    logo: '/img/partners/jpcs-apc.png',
    fb: "https://www.facebook.com/JPCSAPC/",
    ig: "https://www.instagram.com/jpcs_apc",
  },
  {
    name: 'PUP ASCII',
    logo: '/img/partners/pup-ascii.png',
    fb: "https://www.facebook.com/PUPASCII",
  },
  {
    name: 'PUP Taguig Comptuer Society',
    logo: '/img/partners/pup-cs.png',
    fb: "https://www.facebook.com/PUPTCS",
    ig: "https://www.instagram.com/puptcs",
  },
]

export const allPartners = [...medias, ...minors, ...majors];