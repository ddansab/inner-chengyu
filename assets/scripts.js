$(document).ready(function () {
  const CHENG = [
    {
      src: "./assets/images/cy1.png",
      pinyin: "bù kě dé jiān",
      wtm: "You can't have both at the same time.",
      more: ""
    },
    {
      src: "./assets/images/cy2.png",
      pinyin: "dà zhì ruò yú",
      wtm: "The wise one appears stupid.",
      more: ""
    },
    {
      src: "./assets/images/cy3.png",
      pinyin: "zhī zú cháng lè",
      wtm: "To be content with what you have.",
      more: ""
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
      more: "https://laowaichengyuguide.com/entry/m%C7%8E%20m%C7%8E%20h%C7%94%20h%C7%94"
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
