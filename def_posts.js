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
    avatar: "player.svg",
    name: "didi12"
  }
  var sarahkroch = {
    avatar: "user.svg",
    name: "sarahkroch"
  }
  var mimiserre = {
    avatar: "user.svg",
    name: "mimiserre"
  }

  var posts_2019= [{
      date: "23/12/2019",
      author: henri,
      feel: "fier",
      likes: 18,
      content: "Joyeux Noël à tous ! Meilleurs voeux !",
      comments: [{
      author: didi12,
      content: "Noyeux Joël !!"
    },{
      author: sarahkroch,
      content: "Joyeux Noël les amis !"
    },{
      author: mimiserre,
      content: "Bonnes fêtes !"
    }]
    }, {
      date: "26/11/2019",
      author: henri,
      feel: "reconnaissant",
      likes: 15,
      content: "Vous vous souvenez, ce que je devais trouver et qui allait changer le monde ? Eh bien, j’y suis presque ! Tenez-vous prêts !",
    },{
      date: "02/09/2019",
      author: henri,
      feel: "excité",
      likes: 7,
      content: "Nouvelle année, nouveaux objectifs : bonne rentrée scolaire à tous !",
    }, {
      date: "03/07/2019",
      author: henri,
      feel: "fier",
      likes: 21,
      content: "Eh voilà, Lola a eu son bac avec mention bien ! Dire qu’il y a quelques années c’était encore un bébé… *rires* Ça grandit si vite !\nBientôt à l'université !<br> <img src='images/bac_lola.png' class='mr-3' width='500em' alt='bac de Lola'>",
      comments: [{
        author: didi12,
        content: "Bravo Lola !!"
      }]
    }, {
      date: "15/05/2019",
      author: henri,
      feel: "content",
      likes: 12,
      content: "Comme vous l’avez vu, j’ai sauté le pas : ça y est, j’ai un compte sur Instagram ! Ça me rajeunirait presque *rires*\nAllez tous me suivre !",
    }, {
      date: "29/04/2019",
      author: henri,
      feel: "penseur",
      likes: 8,
      content: "Je sais que ce blog est un lieu de partage libre, mais Lola m’a parlé récemment de ce réseau social, Instagram, où on peut poster des photos. J’aime bien la photo, mais je ne sais pas du tout comment ça marche… Des avis ?",
      comments: [{
        author: didi12,
        content: "Super idée ça ! Je te suis de suite !"
      }, {
        author: monica_rst,
        content: "Fais attention, le compte @henriposte existe déjà :( Tu vas peut-être devoir retourner ton nom !"
      }]
    }, {
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
        content: "Moi je sais ce que c’est ! *rires* De tout coeur avec toi mon ami !"
      },{
        author : sarahkroch,
        content : "Trop hâte de savoir ce que c’est!"
      }]
    }, {
      date: "05/02/2019",
      author: henri,
      feel: "amusé",
      likes: 12,
      content: "J’ai bien partagé le blog à mes amis, salut les copains 😁! Petite photo du week-end dernier : dîner avec la famille et mon ami de toujours, Damien, pour l’anniversaire de Lola. 18 ans, ça grandit vite ! 🎉 <br> <img src='images/gateau.png' class='mr-3' width='500em' alt='gâteau d'anniversaire'>",
      comments: [{
        author: didi12,
        content: "Merci encore pour le super dîner ! Meilleurs voeux à Lola de ma part !",
        date: "01/01/2050"
      }]
    }, {
      date: "05/02/2019",
      author: henri,
      feel: "content",
      likes: 2,
      content: "Bienvenue à tous sur mon blog perso 😄! Certains d’entre vous me connaissent peut-être du boulot, d’autres pas du tout *rires* Peu importe ! Ce blog va me permettre de partager des petites anecdotes de ma vie, de belles photos, des moments drôles… Stay tuned !",
    }
  ];

  var posts_2020= [{
      date: "15/03/2020",
      author: henri,
      feel: "festif",
      likes: 12,
      content: "Bon, bah on se retrouve dans un mois les amis ! *rires* \nCe qui m’embête c’est que je ne peux pas travailler sur mon projet depuis la maison… J’espère que ça ne va pas durer trop longtemps cette histoire !",
      comments: [{
        author: didi12,
        content: "Vois le bon côté des choses, au moins tu pourras voir Lola plus souvent !"
      },{
        author: henri,
        content: "C’est vrai que depuis qu’elle est à la fac, on ne la voit plus!"
      }]
    },{
      date: "01/01/2020",
      author: henri,
      feel: "festif",
      likes: 25,
      content: "Sacrée soirée du nouvel an ! Toujours un plaisir de retrouver ses amis !\nBonne année à tous !<br> <img src='images/nouvel_an.png' class='mr-3' width='500em' alt='nouvel an 2020'>",
  }
  ];

  posts_2021=[];


  return {posts_2019: posts_2019, posts_2020: posts_2020, posts_2021: posts_2021}
}
