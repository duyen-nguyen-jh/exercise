import * as carouselModule from "./modules/carousel.js";

const { renderScrollListByDOM } = carouselModule;

const sample = [
  {
    img: "./public/item1-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item2-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item3-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item4-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item5-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item6-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item7-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
  {
    img: "./public/item1-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
  },
];

const aboveListMobileWrapper = document.getElementById("scroller1");
const aboveListDesktop = document.querySelector("#desktopList1 #scrollList1");
const belowListDesktop = document.querySelector("#desktopList2 #scrollList2");
const carouselWrapper = document.getElementsByClassName("scrollerContainer");

aboveListMobileWrapper.style.width = `${window.innerWidth}px`;

renderScrollListByDOM(aboveListMobileWrapper, null, sample);
renderScrollListByDOM(aboveListDesktop, carouselWrapper[0], sample);
renderScrollListByDOM(belowListDesktop, carouselWrapper[1], sample);
