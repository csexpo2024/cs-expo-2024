interface Speaker {
  full_name: string;
  bionote: string;
  img_url: string;
  is_cs_expo: boolean;
}

export const speakers: Speaker[] = [
  {
    full_name: "Armielyn Obinguar",
    bionote: `Ms. Armielyn Obinguar is a Developer Advocate from Virtual Protocol, building decentralized co-owned
    AIs for gaming, and combining blockchain and generative AI. They democratize curating and building your own LLM
    for voice generation, text generation, and visual generation for 3D-modeled characters.
 
    Being honored by women in AI as the first Filipina to receive such recognition for her outstanding contributions
    to AI for humanitarian initiatives is a moment that she will always cherish.

    Her commitment to ethical use of AI and its potential for positive change is evident through her collaboration with
    prestigious organizations like UNICEF, ITU (International Telecommunication Union) and UNDP (United Nations
    Development Programme).

    In these collaborations, she has initiated and contributed to impactful projects that leverage AI to promote
    inclusivity and widen access to education, aligning her work with the United Nations Sustainable Development
    Goals.`,
    img_url: "/img/speakers/obinguar.png",
    is_cs_expo: true
  },
  {
    full_name: "Engr. Jasper Meynard P. Araña",
    bionote: `Engr. Jasper Meynard P. Araña is a visionary leader in IoT, automation, and AI, currently serving as the CEO of ACube Technologies Inc. With nearly 8 years of teaching experience in the Electronics Engineering Department at Adamson University, he has been instrumental in shaping the next generation of engineers. His expertise spans mobile communication, vibration analysis, and IoT, with several impactful research publications to his name. Engr. Araña is also actively involved in professional organizations such as the Institute of Electronics Engineers of the Philippines (IECEP) and the Mechatronics and Robotics Society of the Philippines, where he serves as VP for Mechatronics.
    Engr. Araña’s educational background is equally impressive. He graduated Cum Laude from Adamson University and earned his master's degree in Communication and Signal Processing from Chung-Ang University in Seoul, South Korea. He is currently pursuing a PhD in Data Science at the Asian Institute of Management. Additionally, he is a WIPO-certified expert on patents and a Technology Business Incubation Manager, further solidifying his role as a key figure in both academic and industrial sectors.
    `,
    img_url: "/img/speakers/arana.png",
    is_cs_expo: false
  }
];