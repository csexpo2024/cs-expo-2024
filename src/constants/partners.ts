
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
  {
    name: 'The Innovator',
    logo: 'img/partners/theinnovator.png',
    fb: "https://www.facebook.com/theinnovatormedia",
    ig: "https://www.instagram.com/theinnovatormedia",
  }
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
    logo: '/img/partners/jpcs.png',
    fb: "https://www.facebook.com/feutechJPCS",
    ig: "https://www.instagram.com/jpcs_fit",
  },
  {
    name: 'Computer Science Student Org. (CSSO)',
    logo: '/img/partners/csso.png',
    fb: "https://www.facebook.com/CSSO2016",
  },
  {
    name: 'Adamson Computer Science Society',
    logo: '/img/partners/adamson.png',
    fb: "https://www.facebook.com/ACOMSSofficial",
  },
  {
    name: 'PUP ASCII',
    logo: '/img/partners/pup-ascii.png',
    fb: "https://www.facebook.com/PUPASCII",
  },
  {
    name: 'Earist Computer Student Association',
    logo: '/img/partners/earist.png',
    fb: "https://www.facebook.com/tatakComsa",
  },
  
]

export const minors: Partner[] = [
  {
    name: 'Asti',
    logo: '/img/partners/asti.png',
    fb: "https://www.facebook.com/feutechASTI",
    ig: "https://www.instagram.com/feutechasti/",
  },
  {
    name: 'TEAMS',
    logo: '/img/partners/teams.png',
    fb: "https://www.facebook.com/feutechTEAMS",
    ig: "https://www.instagram.com/feutechteams/",
  },
  {
    name: 'PUP Taguig Computer Society',
    logo: '/img/partners/pup-cs.png',
    fb: "https://www.facebook.com/PUPTCS",
    ig: "https://www.instagram.com/puptcs",
  },
  {
    name: 'JPCS Asia Pacific College',
    logo: '/img/partners/jpcs-apc.png',
    fb: "https://www.facebook.com/JPCSAPC/",
    ig: "https://www.instagram.com/jpcs_apc",
  },
  {
    name: 'CVSU Sites',
    logo: '/img/partners/cvsu.png',
    fb: "https://www.facebook.com/cvsu.elex.sites",
  },
]

export const allPartners = [...medias, ...minors, ...majors];