$(document).ready(function () {
  const CHENG = [
    {
      src: "cy1.png",
      pinyin: "bá miáo zhù zhǎng",
      wtm: "To pull seedlings [out of the ground] to help them grow.",
      more: "拔苗助长",
    },
    {
      src: "cy2.png",
      pinyin: "bān mén nòng fǔ",
      wtm: "To show off with an axe to 鲁班 (Lǔ Bān).",
      more: "班门弄斧",
    },
    {
      src: "cy3.png",
      pinyin: "běn mò dào zhì",
      wtm: "To invert tree roots and tree branches.",
      more: "本末倒置",
    },
    {
      src: "cy4.png",
      pinyin: "chū ěr fǎn ěr",
      wtm: "What comes from you returns to you.",
      more: "出尔反尔",
    },
    {
      src: "cy5.png",
      pinyin: "cǎo mù jiē bīng",
      wtm: "The plants and trees are all [enemy] soldiers.",
      more: "草木皆兵",
    },
    {
      src: "cy6.png",
      pinyin: "dà qì wǎn chéng",
      wtm: "Precious objects take a long time to make.",
      more: "大器晚成",
    },
    {
      src: "main-qimg-4833d2d626ec99f5da661dd633c0a002.png",
      pinyin: "mǎ mǎ hǔ hǔ",
      wtm: "Horse horse tiger tiger, obvi.",
      more: "马马虎虎",
    },
    {
      src: "cy7.png",
      pinyin: "dōng shān zài qǐ",
      wtm: "To return to office after living in Dong Shan.",
      more: "东山再起",
    },
    {
      src: "cy8.png",
      pinyin: "fù shuǐ nán shōu",
      wtm: "Spilt water is difficult to retrieve.",
      more: "覆水难收",
    },
    {
      src: "cy9.png",
      pinyin: "fēi é pū huǒ",
      wtm: "A moth flying itself into flames.",
      more: "飞蛾扑火",
    },
    {
      src: "cy10.png",
      pinyin: "hè lì jī qún",
      wtm: "A crane standing in a flock of chicken.",
      more: "鹤立鸡群",
    },
    {
      src: "cy11.png",
      pinyin: "hài qún zhī mǎ",
      wtm: "The horse that harms the herd.",
      more: "害群之马",
    },
  ];

  const NUM = Math.floor(Math.random() * CHENG.length);
  let cy = CHENG[NUM];
  //   handle image change
  $("#btn2").hide();
  $("#btn1").click(function (e) {
    e.preventDefault();

    if ($(this).text("TAP TO REVEAL YOUR INNER CHENGYU")) {
      $("#img").attr("src", `./assets/images/${cy.src}`);
      $(this).hide();
      $("#btn2").show();
    }
  });

  // handle modal
  $("#wtm-modal").hide();

  $("#close").click(function (e) {
    e.preventDefault();
    $("#wtm-modal").hide();
  });

  // handle button message and meaning
  $("#btn2").click(function (e) {
    e.preventDefault();

    $('#char').text(cy.more);
    $("#pinyin").text(cy.pinyin);
    $("#wtm-text").text(cy.wtm);
    $("#learnmore").attr("href", `https://laowaichengyuguide.com/entry/${cy.more}`);
    $("#wtm-modal").slideDown();
  });
});
