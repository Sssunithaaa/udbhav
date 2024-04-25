import {game, madads,skit,band,sing2,sing3,deca6,deca7,deca8,deca10, photography, quiz, quizzes, crime, cosplay, videography } from '../assets'

export const navLinks = [
 
  {
    id: "events",
    title: "Events",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


export const dance = [
  {
  name: "RAAS",
  type: "Eastern Event",
  venue: "Main Stage",
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
  ],
   prizes: [
    { position: "First Prize", amount: "Rs.10000" },
    { position: "Second Prize", amount: "Rs.7000" }
  ]
}

]

export const singing =  [
  {
  name: "VIVACE",
  venue: "Main Stage",
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
  ],
   prizes: [
    { position: "First Prize", amount: "Rs.10000" },
    { position: "Second Prize", amount: "Rs.7000" }
  ]
}
,
  {
  name: "SWARANJALI",
  image: sing2,
  venue: "ESB 2",
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
     prizes: [
    { position: "First Prize", amount: "Rs.5000" },
    { position: "Second Prize", amount: "Rs.3000" }
  ]
}
,
  {
  name: "Symphonics",
  image: sing3,
  venue: "ESB 2",
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
   prizes: [
    { position: "First Prize", amount: "Rs.5000" },
    { position: "Second Prize", amount: "Rs.3000" }
  ],
  registrationFee: "300/-"
}

]
export const theatre = [
  {
  name: "Curtain call",
  image: skit,
  venue: "ESB 1",
  type: "Skit",
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
  venue: "LHC 2",
  type: "Theatre",
  date: "30/04/2024",
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

export const miscellaneous = [
  {
  name: "Valorant",
  image: game,
  venue: "ONLINE",
  type: "Gaming",
  date: "29/04/2024 & 30/04/2024",
  description: {
    0: "Participation is open to current student of the college.",
    1: "Team of 4 players minimum, each player can be part of one team.",
    2: "Teams must register before the deadline set, late reistrations may not be accepted.",
    3: "All participants must adhere to the principles of fair play and sportsmanship throughout the tournament.",
    4: "Matches will be played in knockout format, and only the finals will have vest of 3 format, where first team to win 13 rounds will be declared winner.",
    5: "Teams must be present and ready to play at scheduled match time. Failure to do so may result in disqualification.",
    6: "The use of cheats, hacks, or any other form of unfair advantage is strictly prohibited and will result in immediate disqualification.",
    7: "All participants must adhere to the college's code of conduct and any additional rules set.",
    8: "The organizers reserves the right to modify the rules or make decisions not covered by the rules in the best interest of tournment.",
    9: "Cross College teams are allowed.",
  },
  contactPersons: [
    { name: "Aastha Singh", phone: "7675001245" }
  ],
  registrationFee: "Rs.500/-",
  prizes: [
    { position: "First Prize", amount: "Rs.8000" },
    { position: "Second Prize", amount: "Rs.6000" }
  ]
},
{
  name: "BGMI",
  image: game,
  venue: "DES Hi Tech",
  type: "Gaming",
  date: "29/04/2024 & 30/04/2024",
  description: {
    0: "Pre registration required.",
    1: "Only mobile phones are allowed, no emulators.",
    2: "Players must use the BGMI Username provided in the registration form for the tournament.",
    3: "The players are not allowed to use any hacks or any software/tool which gives them undue advantage.",
    4: "No tablets and simulator are allowed in the game.",
    5: "Incase of any discrepancies/issues the organizers decision will be final.",
    6: "Squad must be minimum of 3 players.",
    7: "The use of cheats, hacks, or any other form of unfair advantage is strictly prohibited and will result in immediate disqualification.",
    8: "All participants must adhere to the college's code of conduct and any additional rules set.",
  },
  contactPersons: [
    { name: "Suryansh Pandey", phone: "9565609904" }
  ],
  registrationFee: "Rs.500/-",
  prizes: [
    { position: "First Prize", amount: "Rs.8000" },
    { position: "Second Prize", amount: "Rs.6000" }
  ]
},
{
  name: "Through The Lens",
  image: photography,
  venue: "ONLINE",
  type: "Photography",
  date: "29/04/2024 & 30/04/2024",
  description: {
    0: "Individual event.",
    1: "Participants can use any hand-held camera(DSLR, Phone, GoPro, Mirrorless).",
    2: "Theme will be given at the start of the event.",
    3: "No drone shots are allowed.",
    4: "Participants have to submit 3 photos in jpeg format.",
    5: "Participants can choose to edit the photo(only basic editing) if edited, both the original and edited photo must be submitted.",
    6: "No adding or removing of elements from the photo, no graphics allowed.",
    7: "Any sort of offensive photos will lead to immediate disqualification.",
    8: "Lightroom Metadata will be checked.",
  },
  contactPersons: [
    { name: "Varun", phone: "8013520123" },
    { name: "Pranav", phone: "9035991656 "},
  ],
  registrationFee: "Rs.150/-",
  prizes: [
    { position: "First Prize", amount: "Rs.1500" },
    { position: "Second Prize", amount: "Rs.1000" }
  ]
},
{
  name: "Frame Fusion",
  image: videography,
  venue: "ONLINE",
  type: "Videography",
  date: "29/04/2024 & 30/04/2024",
  description: {
    0: "Theme will be provided 3 days prior to the event.",
    1: "Minimum 2 participants per team and max of 4 participants.",
    2: "The length of the video should be minimum of 1.5 minutes and should not exceed 3 minutes.",
    3: "The video should be in landscape orientation 1080p, MP4/MPEG/H.264 format.",
    4: "The video must be uploaded on 30th April, 12 PM.",
    5: "Plagarism will lead to disqualification, the video or brief should not include any watermark or identity proof, if found the entry will be disqualified.",
    6: "Any intention which prescribes any kind of offensive statement towards political parties, public figues, caste or religion, gender will load to disqualification.",
    7: "Usage of templates is not allowed.",
    8: "Stock footages are not allowed.",
    9: "Copyright music can be used", 
    10: "Video may be in Kannada/Hindi/English or have no dialogue at all, including subtitles is optional.",
  },
  contactPersons: [
    { name: "Rehan", phone: "8884195115" },
    { name: "Shivadhara", phone: "9845989491"}
  ],
  registrationFee: "Rs.400/-",
  prizes: [
    { position: "First Prize", amount: "Rs.3000" },
    { position: "Second Prize", amount: "Rs.2000" }
  ]
}
]

export const fashion = [
  {
  name: "Cosplay Matsuri",
  image: cosplay,
  venue: "ESB 1",
  type: "Fashion",
  date: "30/04/2024",
  description: {
    0: "Coustumes from most, if not all, genres of fandom are accepted provided it abides the code of conduct of the event.",
    1: "Handmade and self-constructed costumes are highly encouraged, but not necessary.",
    2: "Makeup or costuming should be done before the start of the event. Slight touch ups are allowed.",
    3: "All contestants must have at least 60% of their body covered with clothing. Display of extreme necklines, bare chests and torsos is not allowed. Contestants wearing mesh, sheer or other see through clothing or body paint as a part of their costume must still meet the minimum coverage requirements.",
    4: "Bringing live animals is not allowed.",
    5: "Substances that might damage or stain facilities or other costumes and participants(eg glitter, confetti, messy blood, snow spray etc) are prohibited.",
    6: "Usage of flames, pyrotechnics or explosives of any kind is strictly prohibited.",
    7: "Cameras and taking pictures are allowed and entertained but it is mandatory to get the permission of the Cosplayers before clicking any pictures. Usage of drone is allowed.",
    8: "Meta bats, large tools or anything which can cause physical harm are strictly prohibited.",
    9: "Each participants gets 1 minute slot to showcase their cosplay and say a one linear in the runaway.",
    10: "Participants who fail to abide by the rules will be disqualified on-spot after a warning."
  },
  contactPersons: [
    { name: "Tharun R", phone: "6362994235" },
    { name: "Suryans Jaiswal", phone: "7999410218" }
  ],
  registrationFee: "Rs.250/-",
  prizes: [
    { position: "First Prize", amount: "Rs.6000" },
    { position: "Second Prize", amount: "Rs.4000" }
  ]
}
]

export const literary = [
  {
  name: "General Quiz",
  image: quizzes,
  venue: "DES Hi Tech",
  type: "Quiz",
  date: "29/04/2024",
  description: {
    0: "Teams of up to 3 members can be formed.",
    1: "Each quiz has its own registration.",
    2: "Entry on valid ID card only(govt ID or preferably college ID).",
    3: "Ensure proper dress code as per college rules.",
    4: "Cross-college teams are allowed.",
    5: "The best 8 teams from preliminary round will qualify for the finals.",
  },
  contactPersons: [
    { name: "Sankirth", phone: "8217675897" },
    { name: "Tauheed", phone: "9380110235" }
  ],
  registrationFee: "Rs.150/-",
  prizes: [
    { position: "First Prize", amount: "Rs.4000" },
    { position: "Second Prize", amount: "Rs.3000" }
  ]
},
{
  name: "Criminal Inquest",
  image: crime, // Replace adImage with the appropriate image variable or path
  venue: "LHC 1",
  type: "Quiz",
  date: "29/04/2024",
  description: {
    0: "Teams of 3.",
    1: "Event will be conducted within college premises.",
    2: "All participants must be assembled at the venue 30 mins before the event starts.",
    3: "Event consists of multiple rounds, each followed by eliminations.",
    4: "The decisions of the judges are final and abiding.",
   },
  contactPersons: [
    { name: "Riya", phone: "9148991673" },
    { name: "Nibha", phone: "8618743615" }
  ],
  registrationFee: "Rs.500/-",
  prizes: [
    { position: "First Prize", amount: "Rs.5000" },
    { position: "Second Prize", amount: "Rs.3000" }
  ]
}
]