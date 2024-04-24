import { madads,skit,band,sing2,sing3,deca6,deca7,deca8,deca10 } from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Events",
    title: "Events",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const  images = [{
      image: deca6,
      title: "Group dance eastern",
      description:"",
      day:1,
      coordinators: "LASYA - PRAYAAG",
      venue: "MAIN STAGE"
    },
    {
      image: deca7,
      title:"Group (Band)",
      description:"",
      day:1,
      coordinators: "MAIN STAGE",
      venue: ""
    },
    {
      image: deca8,
      title:"Street dance",
      description:"",
      day:2,
      coordinators: "TNT-INFERNO",
      venue: "BASKET BALL COURT"
    },
    
{
      image: deca10,
      title:"Group dance western",
      description:"",
      day:1,
      coordinators: "",
      venue: "MAIN STAGE"
    }
  ];
export const dance = [
  {
  name: "RAAS",
  type: "Eastern Event",
  image: deca8,
  date: "30/04/2024",
  description: {
    0: "Classical/Indian contemporary/semi classical/any other Indian dance form",
    1: "Number of members in a group: 7-15",
    2: "Time limit: 5+2 minutes",
    3: "Thematic performances: Both thematic and non-thematic performances are allowed",
    4: "Usage of props is entertained unless they are flammable, sharp, or can cause damage to the stage or anyone else",
    5: "he audio and backdrop are to be submitted 1 day prior to the event coordinators and also to be carried in a pen drive for backup",
    6: "The team needs to be present 2 hours before the event",
    7: "Judge's decision is final and binding"
  },
  registrationFee: "1000/- per team",
   contactPersons: [
    { "name": "Shoba Sharma", "phone": "7090911063" },
    { "name": "Aparna", "phone": "8001862622" }
  ]
}

]

export const singing =  [
  {
  name: "VIVACE",
  image:band,
  type: "Battle of Bands (BOTB)",
  date: "29/04/2024",
  timeLimit: "10+5 (may subject to change)",
  description: {
    0: "Backing tracks are not allowed",
    1: "Using foul language will lead to immediate disqualification",
    2: "Usage of laptops for patches is allowed",
    3: "Band members are required to carry their own instruments",
    4: "Drum kit will be provided on stage",
    5: "Extra weightage given to OC(s)",
    6: "Purely English",
    7: "Decision of the judges is final."
  },
  registrationFee: "1000/-",
  contactPersons: [
    { "name": "Paras", "phone": "7975772360" },
    { "name": "Ajinkya", "phone": "8197476853" }
  ]
}
,
  {
  name: "SWARANJALI",
  image: sing2,
  type: "Indian solo singing",
  date: "29/04/2024",
  description: {
    0: "Any Indian genre (classical/filmy)",
    1: "Time duration:10 mins for classical 5 mins for filmy",
    2: "Indian Classical Instruments and keyboard",
    3: "Karaoke is allowed(only for filmy song)",
    4: "Track submission: 1 day before the event (only for filmy song)",
    5: "Both categories will be judged separately. Judge's decision is final"
    
   
  },
  
     contactPersons: [
      { "name": "Spandana", "phone": "9606117917" },
      { "name": "Ananya", "phone": "7022937778" }
    ],
    registrationFee: "300/-",
}
,
  {
  name: "Symphonics",
  image: sing3,
  type: "Western solo singing",
  date: "30/04/2024",
  description: {
    0: "Time limit: 3 mins +30 seconds buffer",
    1: "Only one accompanist is allowed (to bring their own instruments)",
    2: "Karaoke tracks are allowed and must be submitted 1 day prior to the event",
    3: "Using foul language will lead to immediate disqualification",
    4: "Decision of the judges is final"
  },
  contactPersons: [
    { name: "Tarunika", phone: "9448206826" },
    { name: "Jedi", phone: "8296020393" }
  ],
  registrationFee: "300/-"
}

]
export const theatre = [
  {
  name: "Skit",
  image: skit,
  type: "Curtain call",
  date: "29/04/2024",
  description: {
    0: "Time limit is 10+1 minutes (including set-up and clearance time)",
    1: "A maximum of 3 accompanists are allowed.",
    2: "Use of makeup, backdrops and background music is allowed.",
    3: "Each team should submit three copies of the synopsis of the skit in the language of presentation (Kannada, English, Hindi) at the reporting time to the event incharge",
    4: "Defamation, derogation, and belittlement will not be entertained.",
    5: "Profanity, suggestive speech, euphemisms and vulgarity in action or speech is strictly prohibited.",
    6: "Satire and humour that is devoid of the above is accepted."
  },
  contactPersons: [
    { name: "Asif", phone: "8088601881 " },
    { name: "Yogesh", phone: "8123699084" }
  ],
  registrationFee: "800/-",
  prizes: [
    { position: "First Prize", amount: "Rs.7000" },
    { position: "Second Prize", amount: "Rs.5000" }
  ]
},
{
  name: "MAD ADS: ADSCAPE",
  image: madads, // Replace adImage with the appropriate image variable or path
  type: "Theatre",
  date: "04/2024",
  description: {
    0: "Product must be of your own choice.",
    1: "Team limit: 3-8",
    2: "Time limit: 5+1 minutes",
    3: "Criteria include Content, coordination, performance, expression, appeal to advertisement and overall script and play.",
    4: "No mythology and religion violence.",
    5: "Props should be arranged by themselves.",
    6: "Decision of judges will be final.",
    7: "Extension of performance beyond 6 mins leads to negative marking."
  },
  contactPersons: [
    { name: "Hrithik", phone: "8417862922" },
    { name: "Yashwanth", phone: "8431548846" }
  ],
  registrationFee: "Rs.500",
  prizes: [
    { position: "First Prize", amount: "Rs.5000" },
    { position: "Second Prize", amount: "Rs.3000" }
  ]
}

]

