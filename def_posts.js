module.exports.def_posts = function () {
  var henri = {
    avatar: "profile.svg",
    name: "Henri Poste"
  }

  var monica_rst = {
    avatar: "woman.png",
    name: "monica_rst"
  }

  var didi12 = {
    avatar: "user.svg",
    name: "didi12"
  }

  var posts_2019= [{
    date: "12/04/2019",
    author: henri,
    feel: "excité",
    likes: 19,
    content: "Je sais qu’on a dit qu’on ne parlait pas de boulot ici… mais il se passe quelque chose de fou ! Je ne peux pas trop en dire, mais je suis peut-être sur le point de trouver quelque chose qui va changer le monde… !",
    comments: [{
      author: monica_rst,
      content: "Changer le monde, rien que ça !"
    }, {
      author: didi12,
      content: "com2"
    }]
  }, {
    date: "05/02/2019",
    author: henri,
    feel: "amusé",
    content: "J’ai bien partagé le blog à mes amis, salut les copains ! Petite photo du week-end dernier : dîner avec la famille et mon ami de toujours, Damien, pour l’anniversaire de Lola. 18 ans, ça grandit vite ! <br> <img src='images/gateau.png' class='mr-3' width='500em' alt='gâteau d'anniversaire'>",
    comments: [{
      author: didi12,
      content: "Merci encore pour le super dîner ! Meilleurs voeux à Lola de ma part !",
      date: "01/01/2050"
    }
  ]
}, {
  date: "05/02/2019",
  author: henri,
  feel: "content",
  content: "Bienvenue à tous sur mon blog perso ! Certains d’entre vous me connaissent peut-être du boulot, d’autres pas du tout *rires* Peu importe ! Ce blog va me permettre de partager des petites anecdotes de ma vie, de belles photos, des moments drôles… Stay tuned !",
}
];

var posts_2020= [{
  date: "29/04/2020",
  author: henri,
  content: "Je sais que ce blog est un lieu de partage libre, mais Lola m’a parlé récemment de ce réseau social, Instagram, où on peut poster des photos. J’aime bien la photo, mais je ne sais pas du tout comment ça marche… Des avis ? ",
  comments: [{
    author: {
      avatar: "logo_clt.png",
      name: "Harrah"
    },
    content: "com"
  }, {
    author: {
      avatar: "logo_eclair.png",
      name: "Harrah2"
    },
    content: "com2"
  }]
}, {
  date: "01/01",
  author: {
    id: 1,
    avatar: "logo_eclair.png",
    name: "Harrah2"
  },
  content: "contenu 2",
  comments: [{
    author: {
      avatar: "logo_clt.png",
      name: "Harrah"
    },
    content: "com3",
    date: "01/01/2050"
  }
]
}
];

posts_2021=[];


return {posts_2019: posts_2019, posts_2020: posts_2020, posts_2021: posts_2021}
}
