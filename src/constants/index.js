export const navLinks = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
  },
];

export const menu = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Characters",
  },
  {
    id: 3,
    title: "Devil Fruits",
  },
  {
    id: 4,
    title: "Timeline",
  }
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    merryScale: isSmall ? 1 : isMobile ? 1.4 : 2,
    merryPosition: isMobile ? [0.5, -6.5, 0] : [0, -8, -1],
    cloudPosition: isMobile ? [0.5, -6.5, 0] : [-10, -8, -1],
    cloudScale: isMobile ? [.5] : [1, 1, 1],
  };
};

export const arcs = [
  {
    id: 1,
    saga: "East Blue",
    arc: "Romance Dawn",
    img: "./assets/poster/Zoro_Romance_Dawn.webp",
    desc: "Influenced by Shanks, Luffy starts his journey to become the Pirate King by finding a treasure hidden by the previous Pirate King Gold Roger. At the beginning of his journey, he battles pirate captain Alvida and frees her cabin boy Koby, who wants to become a Marine. Luffy and Koby reach Shells Town, where they meet corrupt Marine captain Axe-Hand Morgan, his son Helmeppo, and the pirate hunter Roronoa Zoro. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the Straw Hat Pirates",
        color: "#398338",
        img: "./assets/Characters/Zoro.png"
      },
      {
        id: 2,
        title: "Axe-Hand Morgan defeated",
        color: "#ff9615"
      },
    ],
  },
  {
    id: 2,
    saga: "East Blue",
    arc: "Orange Town",
    img: "#",
    desc: "Luffy and his first crew member Zoro arrive at Orange Town where they meet a thief named Nami, who hates pirates. The trio makes an unlikely team, fighting to free the town from the rule of Buggy the Clown.",
    events: [
      {
        id: 1,
        title: "Buggy the Clown Defeated",
        color: "red",
        img: "./assets/Characters/Zoro.png"
      },
    ],
  },
  {
    id: 3,
    saga: "East Blue",
    arc: "Syrup Village",
    img: "#",
    desc: "After Nami forms a partnership with the two as their navigator, the crew reaches Syrup Village and searches for a ship to use. There, they encounter a chronic liar named Usopp. When a devious plot is revealed, Usopp's courage is put to the test as the crew prepare for a battle with the Black Cat Pirates. ",
    events: [
      {
        id: 1,
        title: "Black Cat Pirates Defeated",
        color: "black"
      }
    ],
  },
  {
    id: 4,
    saga: "East Blue",
    arc: "Baratie",
    img: "#",
    desc: "Usopp joins the crew as a sniper. In search of a cook for their ship, the crew go to a sea restaurant known as the Baratie. However, the restaurant is attacked by the powerful Don Krieg, who has returned from the Grand Line after being attacked by Dracule Mihawk, and wants to use the Baratie as a vessel to go back. ",
    events: [
      {
        id: 1,
        title: "Usopp joins the Straw Hat Pirates",
        color: "brown"
      },
      {
        id: 2,
        title: "Sanji joins the Straw Hat Pirates",
        color: "#ffcc00"
      },
      {
        id: 3,
        title: "Don Krieg Defeated",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 5,
    saga: "East Blue",
    arc: "Arlong Park",
    img: "#",
    desc: "With Sanji from the Baratie joining the crew and Nami stealing the ship, the crew follow her to an island under the control of the fish-man pirate Arlong. Nami reveals that she is a member of the Arlong Pirates and simply helped the crew so she could take their gold later. But why would she follow a man like Arlong? ",
    events: [
      {
        id: 1,
        title: "Arlong Pirates Defeated",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the Straw Hat Pirates",
        color: "#ff9615"
      }
    ],
  },
  {
    id: 6,
    saga: "East Blue",
    arc: "Loguetown",
    img: "#",
    desc: "After Nami officially joins, the crew heads to the last town before the entrance to the Grand Line, Loguetown, the place where Gold Roger was both born and executed. Not only will they have to deal with a powerful Marine captain and his second-in-command who reminds Zoro of his past, but also previous enemies looking for revenge.",
    events: [
      {
        id: 1,
        title: "Zoro aqcuires the Yubashiri katana",
        color: "#398338"
      },
      {
        id: 2,
        title: "Smoker introduced",
        color: "blue"
      }
    ],
  },
  {
    id: 7,
    saga: "Arabasta",
    arc: "Reverse Mountain",
    img: "#",
    desc: "The crew has entered the Grand Line, but they encounter an obstacle as soon as they get in: a giant whale that swallows the entire ship. Also inside the whale are two mysterious rogues.",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 8,
    saga: "Arabasta",
    arc: "Whisky Peak",
    img: "#",
    desc: "Led by the mysterious Mr. 9 and Ms. Wednesday, the crew go to Whisky Peak, where the townspeople immediately start a party to celebrate their arrival. But there is more to this town than there appears... ",
    events: [
      {
        id: 1,
        title: "Zoro solos Baroque Works",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
    ],
  },
  {
    id: 9,
    saga: "Arabasta",
    arc: "Little Garden",
    img: "#",
    desc: "On their mission to bring Princess Vivi, who was undercover in Baroque Works as Ms. Wednesday, to Arabasta, the crew land at Little Garden, which is actually a huge island that is still stuck in the prehistoric era. However, there are more than dinosaurs on this island, as the crew soon finds out when they encounter two giants that have been locked in combat for over 100 years and four high-ranking Baroque Works members.",
    events: [
      {
        id: 1,
        title: "Baroque Works Defeated",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 10,
    saga: "Arabasta",
    arc: "Drum Island",
    img: "#",
    desc: "When Nami catches a fatal illness, the crew is forced to stop at Drum Island, a kingless country that is trying to establish a new government. Due to the actions of the previous king, Wapol, there is only one doctor left—a 'witch' named Kureha who lives at the top of a mountain. Luffy and Sanji must reach the peak, but the exiled King Wapol returns to reclaim his country.",
    events: [
      {
        id: 1,
        title: "Chopper joins the Straw Hat Pirates",
        color: "pink"
      },
      {
        id: 2,
        title: "King Wapol Defeated",
        color: "red"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 11,
    saga: "Arabasta",
    arc: "Arabasta",
    img: "#",
    desc: "The crew, with Kureha's assistant Tony Tony Chopper among them, finally arrive at Arabasta, which is on the verge of civil war. Vivi must reach the rebels and tell them the real cause behind the conflict, but Crocodile, leader of Baroque Works and one of the Seven Warlords of the Sea, will not just stand by and watch. In the end, Baroque Works, marine forces, pirates, the royal guards, and the rebel army clash in a battle that will determine the fate of the country itself.",
    events: [
      {
        id: 1,
        title: "Nico Robin joins the Straw Hat Pirates",
        color: "purple"
      },
      {
        id: 2,
        title: "Crocodile Defeated",
        color: "red"
      },
      {
        id: 3,
        title: "Poneglyphs revealed",
        color: "black"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 12,
    saga: "Sky Island",
    arc: "Jaya",
    img: "#",
    desc: "The crew tearfully leaves Vivi behind and continue on their journey with Ms. All Sunday, aka Nico Robin, joining as an archaeologist. When a ship inexplicably falls from the sky and the Log Pose begins pointing up, they go to the island of Jaya for information on 'Sky Island'. There, they encounter Bellamy, a pirate who is heralding a 'New Age' where pirates do not dream, and a man named Mont Blanc Cricket, a descendant of a the subject of a cautionary tale. ",
    events: [
      {
        id: 1,
        title: "Bellamy Defeated",
        color: "red"
      },
      {
        id: 2,
        title: "Blackbeard introduced",
        color: "purple"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 13,
    saga: "Sky Island",
    arc: "Skypiea",
    img: "#",
    desc: "Riding the Knock Up Stream, the crew finds themselves in the 'White Sea', an ocean in the sky. The Straw Hats soon discover that there is a war between the Sky People and the natives who originally inhabited a place known as the Upper Yard. They also learn of the cruel God Enel. ",
    events: [
      {
        id: 1,
        title: "God Enel Defeated",
        color: "#398338"
      },
      {
        id: 2,
        title: "Dials introduced",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 14,
    saga: "Water 7",
    arc: "Long Ring Long Land",
    img: "#",
    desc: "The crew returns to the Blue Sea with gold and dials from Skypiea, only to encounter Foxy the Silver Fox, a pirate who challenges them to a 'Davy Back Fight', a series of games where the winner takes crewmates from the loser crew. However, even after defeating Foxy, the Straw Hats encounter an enemy whom they have no hope of beating. ",
    events: [
      {
        id: 1,
        title: "Foxy Pirates Defeated",
        color: "#398338"
      },
      {
        id: 2,
        title: "Aokiji introduced",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 15,
    saga: "Water 7",
    arc: "Water 7",
    img: "#",
    desc: "In search of a shipwright to join the crew, the Straw Hats land at the thriving metropolis of Water 7. Here, the crew falls apart as two members leave. To make matters worse, the shipwrights are unable to repair the Straw Hats' ship, their money is stolen by thugs, and they are framed for the attempted assassination of Water 7's mayor, who is also president of the Galley-La Company, a shipbuilding company. They try to find the real culprit, but they soon learn that they may have been caught head over heels by the government assassination group CP9. ",
    events: [
      {
        id: 1,
        title: "Franky introduced",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp leaves the Straw Hat Pirates",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 16,
    saga: "Water 7",
    arc: "Enies Lobby",
    img: "#",
    desc: "The Straw Hats, the Franky Family, and the Galley-La Company team up to rescue Nico Robin, save Franky and avenge Iceburg's assassination attempt. To do this, they attack Enies Lobby, a government stronghold where CP9 is based, declaring war on the World Government. ",
    events: [
      {
        id: 1,
        title: "Sogeking introduced",
        color: "#398338"
      },
      {
        id: 2,
        title: "Sanji's Diamble Jamble first appearance",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Chopper's Monster Point first appearance",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Luffy's Second Gear revealed",
        color: "#ff7f50"
      },
      {
        id: 5,
        title: "Luffy's Third Gear revealed",
        color: "#ff7f50"
      },
      {
        id: 4,
        title: "CP9 Defeated",
        color: "#ff7f50"
      },
      {
        id: 5,
        title: "Zoro's Yubashiri katana destroyed",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 17,
    saga: "Water 7",
    arc: "Post-Enies Lobby",
    img: "#",
    desc: "Resting after their ordeals on Enies Lobby, the Straw Hats' world is turned upside-down as familiar faces return with unexpected revelations for the continuation of their journey. In the New World, Shanks makes his move to protect Whitebeard's subordinate Ace from a familiar face with a horrific new power. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 18,
    saga: "Thriller Bark",
    arc: "Thriller Bark",
    img: "#",
    desc: "The Straw Hats, now including Franky and the members who previously left, continue their adventure out into the Florian Triangle where they come across a strange barrel which upon opening, sets off a flare. This soon turns into a nightmare when a ghost ship directs them to the haunted island of Thriller Bark, where ghosts, zombies and Warlord of the Sea Gecko Moria await them. ",
    events: [
      {
        id: 1,
        title: "Brook joins the Straw Hat Pirates",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Gecko Moria Defeated",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 19,
    saga: "Summit War",
    arc: "Sabaody Archipelago",
    img: "#",
    desc: "Arriving at the Red Line, the crew, now joined by skeleton musician Brook, searches for a way to get to the famed Fish-Man Island. The Straw Hats are soon diverted from their search when a mermaid and a talking starfish appear, and they soon find themselves saving an old enemy from a kidnapping ring. Things take a turn for the worst when the Straw Hats find themselves cornered at every turn with a Warlord of the Sea, a Marine admiral and World Government officials. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 20,
    saga: "Summit War",
    arc: "Amazon Lily",
    img: "#",
    desc: "Kuma sends each of the Straw Hat Pirates flying from the Sabaody Archipelago to different islands. This arc centers on Luffy, who lands on an island where only women live. Luffy soon discovers that the women on the island are led by Warlord of the Sea Boa Hancock. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 21,
    saga: "Summit War",
    arc: "Impel Down",
    img: "#",
    desc: "Winning over the heart of the beautiful Hancock, Luffy manages to storm the prison of Impel Down, hoping to save his brother Ace from execution before it sparks an ultimate showdown between the Whitebeard Pirates and the World Government. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 22,
    saga: "Summit War",
    arc: "Marineford",
    img: "#",
    desc: "Unable to rescue Ace before he was transferred, Luffy and his group of Impel Down escapees follow after him to Marineford. With time running out until Ace's execution, the Whitebeard Pirates and the World Government prepare their forces to clash in a battle that could drastically change the era. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 23,
    saga: "Summit War",
    arc: "Post-War",
    img: "#",
    desc: "The world reels from the death of Whitebeard, causing chaos to ripple all across the Grand Line. Luffy, struggling to cope with Ace's death, remembers he has something just as important to him: his crew. Will the Straw Hat Pirates ever reunite? ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 24,
    saga: "Fish-Man Island",
    arc: "Return to Sabaody",
    img: "#",
    desc: "Two years have passed since the crew was separated and the Straw Hats have trained vigorously since then. They are now set to reunite and pick up from where they left off on their journey. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 25,
    saga: "Fish-Man Island",
    arc: "Fish-Man Island",
    img: "#",
    desc: "After two years, the Straw Hats are finally beginning their undersea journey to Fish-Man Island, and meet Luffy's friend, former Warlord Jinbe. When a local fortuneteller predicts Luffy destroying Fish-Man Island, the Straw Hats are falsely accused as criminals, and to complicate matters further, an alliance between Hody Jones and Vander Decken IX plots to take over the Ryugu Kingdom. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 26,
    saga: "Dressrosa",
    arc: "Punk Hazard",
    img: "#",
    desc: "After entering the New World, the Straw Hats are led to Punk Hazard by a distress call. There, they find a samurai in search of his son, run afoul of Smoker's new Marine platoon, and join Trafalgar Law in a plot to take down one of the Four Emperors. As part of this plot, they are tasked with capturing Caesar Clown, the mad scientist who operates on the island and come to learn of his connections to the Underworld and its influential broker, Warlord of the Sea Donquixote Doflamingo. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Usopp joins the crew",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Sanji joins the crew",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 27,
    saga: "Dressrosa",
    arc: "Dressrosa",
    img: "#",
    desc: "The Straw Hats, Law, Kin'emon, and Momonosuke head to Dressrosa with a captive Caesar to broker a deal with Doflamingo, destroy his SMILE Factory, and free the samurai's comrade Kanjuro. They soon discover that both Doflamingo and Dressrosa are shrouded with many secrets, and Law's conflict with Doflamingo quickly turns personal. Luffy works to obtain his late brother's Devil Fruit while half of the other Straw Hats encounter a rebellion among Dressrosa's populace. The alliance's efforts are further complicated as a new Marine admiral named Fujitora arrives to deal with them. ",
    events: [
      {
        id: 1,
        title: "Zoro joins the crew",
        color: "#398338"
      },
      {
        id: 2,
        title: "Nami joins the crew",
        color: "#ff9615"
      },
      {
        id: 3,
        title: "Luffy's Gear Fourth - Bounce Man revealed",
        color: "#ffcc00"
      },
      {
        id: 4,
        title: "Doflamingo Defeated",
        color: "#ff7f50"
      }
    ],
  },
  {
    id: 28,
    saga: "Whole Cake Island",
    arc: "Zou",
    img: "#",
  }]