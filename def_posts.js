module.exports.def_posts = function () {
  var henri = {
    avatar: "profile.svg",
    name: "Henri Poste"
  }

  var posts_2019= [{
    date: "02/01/2019",
    author: henri,
    feel: "content",
    likes: 5,
    content: "contenu",
    comments: [{
      author: henri,
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

var posts_2020= [{
  date: "02/01/2020",
  author: {
    id: 1,
    avatar: "logo_clt.png",
    name: "Harrah"
  },
  content: "contenu",
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
