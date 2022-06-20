$(document).ready(function () {
  const CHENG = [
    {
      src: "./assets/images/cy1.png",
      pinyin: "bá miáo zhù zhǎng",
      wtm: "To pull seedlings [out of the ground] to help them grow.",
      more: "https://laowaichengyuguide.com/entry/拔苗助长"
    },
    {
      src: "./assets/images/cy2.png",
      pinyin: "bān mén nòng fǔ",
      wtm: "To show off with an axe to 鲁班 (Lǔ Bān).",
      more: "https://laowaichengyuguide.com/entry/班门弄斧"
    },
    {
      src: "./assets/images/cy3.png",
      pinyin: "běn mò dào zhì",
      wtm: "To invert tree roots and tree branches.",
      more: "https://laowaichengyuguide.com/entry/本末倒置"
    },
    {
      src: "./assets/images/cy4.png",
      pinyin: "bù gù yī qiè",
      wtm: "Indifferent to everything.",
      more: ""
    },
    {
      src: "./assets/images/cy5.png",
      pinyin: "hòu dé zài wù",
      wtm: "To be of strong moral character.",
      more: ""
    },
    {
      src: "./assets/images/cy6.png",
      pinyin: "suí yù ér'ān",
      wtm: "To feel adequate wherever you are.",
      more: ""
    },
    {
      src: "./assets/images/main-qimg-4833d2d626ec99f5da661dd633c0a002.png",
      pinyin: "mǎ mǎ hǔ hǔ",
      wtm: "Horse horse tiger tiger, obvi.",
      more: "https://laowaichengyuguide.com/entry/马马虎虎"
    },
  ];

  const NUM = Math.floor(Math.random() * CHENG.length);
  let cy = CHENG[NUM];
  //   handle image change
  $("#btn2").hide();
  $("#btn1").click(function (e) {
    e.preventDefault();

    if ($(this).text("TAP TO REVEAL YOUR INNER CHENGYU")) {
      $("#img").attr("src", cy.src);
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
    $("#pinyin").text(cy.pinyin);
    $("#wtm-text").text(cy.wtm);
    $('#learnmore').attr("src", cy.more);
    $("#wtm-modal").slideDown();
  });
});
