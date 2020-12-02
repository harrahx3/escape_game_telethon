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
      content: "Je sais que ce blog est un lieu de partage libre, mais Lola m’a parlé récemment de ce réseau social, <a href='https://www.instagram.com/explore/locations/' rel='noopener' target='_blank'>Instagram</a>, où on peut poster des photos. J’aime bien la photo, mais je ne sais pas du tout comment ça marche… Des avis ?",
      comments: [{
        author: didi12,
        content: "Super idée ça ! Je te suis de suite !"
      }, {
        author: monica_rst,
        content: "Fais attention, le compte @henriposte existe déjà :( Tu vas peut-être devoir retourner ton nom !"
      }, {
        author: henri,
        content: "Dommage, c’est le nom que j’utilise sur tous mes comptes sur les réseaux sociaux :( tant pis, je serai postehenri sur Instagram !)"
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
        content: "Merci encore pour le super dîner ! Meilleurs voeux à Lola de ma part !"
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
      date: "30/11/2020",
      author: henri,
      feel: "sérieux",
      likes: 20,
      content: "Mes amis, cela fait longtemps que je ne vous ai rien dit ici. J’ai décidé de partir. Nombreux d’entre vous me demanderont “où ?”, mais ce qu’ils ne savent pas c’est qu’ils se trompent de question. Je pars dans un “endroit” où la vie est plus gaie, où je n’aurai pas l’impression qu’il me manque quelque chose. Oui bon, c’est sûr que vous, mes amis, vous allez me manquer, mais vous comprendrez bien que ce n’est pas la même chose.\nJe ne peux pas vous dire exactement ce que je vais faire, tout d’abord parce que je ne le sais pas exactement moi-même, mais surtout parce que vous ne me croirez pas. Dans cette histoire, même mes collègues de travail, même ma famille ne m’a jamais cru. ll n’y a que Damien, mon ami d’enfance, que je salue une dernière fois, et qui m’a toujours soutenu. \n Je ne veux pas laisser mon travail inachevé. J’ai caché dans les archives de mon blog les plans de mon projet, pour que quelqu’un d’assez futé pour trouver le mot de passe puisse y accéder. Pour ceux qui connaissaient mon ancien mot de passe, je l’ai changé récemment, pour laisser celle qui comptait le plus pour moi être la gardienne de ce savoir. \nJe pars donc. Prenez soin de vous. J’espère trouver un monde meilleur.",
      comments: [{
        author: didi12,
        content: "Prends soin de toi mon ami. Peut-être à bientôt."
      }]
    }, {
      date: "04/09/2020",
      author: henri,
      feel: "triste",
      likes: 7,
      content: "Une rentrée sans saveur cette année… Merci pour tous vos messages qui nous touchent. On essaye de garder la tête froide."
    }, {
      date: "13/08/2020",
      author: henri,
      feel: "inquiet",
      likes: 9,
      content: "Malgré les bonnes nouvelles de la dernière fois, au niveau de la famille, ça ne va pas mieux… On fait tout ce qu’on peut ici pour croire à notre bonne étoile mais ça devient difficile…"
    }, {
      date: "25/07/2020",
      author: henri,
      feel: "heureux",
      likes: 22,
      content: "Ça y est, c’est enfin fini !!! Après tant de travail, tant de nuits passées au labo, j’ai enfin fini ! Croyez-le ou non les amis, mais je pense avoir fait la découverte du siècle !!",
      comments: [{
        author: didi12,
        content: "Super fier de toi mon pote ! Je savais que tu y arriverais ! N’oublie pas de dire que tu me connais quand tu recevras ton prix Nobel ;)"
      },{
        author: monica_rst,
        content: "On se demande tous ce que c’est ! À te lire, on a l’impression que tu vas remonter dans le temps ! *rires*"
      },{
        author: henri,
        content : "Tu ne crois pas si bien dire … *rires*"
      }]
    }, {
      date: "18/07/2020",
      author: henri,
      feel: "déterminé",
      likes: 18,
      content: "Pas de repos d’été pour les scientifiques ! *rires* Je suis presque arrivé au bout de mon projet, plus que quelques détails et ça sera fonctionnel ! <br> <img src='images/livres.png' class='mr-3' width='500em' alt='livres'>",
    }, {
      date: "11/05/2020",
      author: henri,
      feel: "joyeux",
      likes: 12,
      content: "Enfin fini ! Je vais pouvoir aller travailler sur le fameux projet au labo !\nConcernant mon précédent message, ça va un peu mieux, mais rien n’est sûr… On garde espoir.",
      comments: [{
        author: didi12,
        content: "Toutes mes pensées sont tournées vers toi et ta famille Henri !"
      },{
        author: monica_rst,
        content: "Courage, tout va bien se passer!"
      }]
    }, {
      date: "20/04/2020",
      author: henri,
      feel: "inquiet",
      likes: 11,
      content: "Merci à tous ceux qui m’ont envoyé leurs messages de soutien vis à vis de ce qui se passe… C’est un peu difficile mais on s’accroche, bientôt ce ne sera plus qu’un mauvais souvenir !"
    },{
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
