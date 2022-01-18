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

function renderScrollItem(data) {
  const { img, title, detail, like, comments } = data;
  const scrollItem = document.createElement("div");
  scrollItem.className = "scrollItem";
  scrollItem.style.display = "inline-block";
  scrollItem.innerHTML = `<div class="imgWrapper">
                <img src="${img}" alt="img cover 4" />
                <div class="heartWrapper">
                <span
                    class="iconify"
                    data-icon="clarity:heart-solid"
                    style="color: white"
                    data-width="17"
                    data-height="15"
                ></span>
                <p style="font-size: 17px; margin-left: 5px">${like}</p>
                </div>
                </div>
                <div class="itemContentWrapper">
                <div class="scrollItemTxt">
                    <p class="title">${title}</p>
                    <p class="detail" style="white-space: normal;">${detail}</p>
                </div>
                <div class="itemFooter">
                <div class="commentWrapper">
                    <span
                    class="iconify"
                    data-icon="fa-solid:comment-alt"
                    style="color: #e5e5e5; margin-right: 5px"
                    data-width="33"
                    data-height="29"
                    ></span>
                    <p>${comments} comments</p>
                </div>
                <div class="moreDetail">
                    <span
                    class="iconify"
                    data-icon="entypo:dots-three-horizontal"
                    style="color: #0c2539"
                    data-width="34"
                    data-height="9"
                    ></span>
                </div>
                </div>
                </div>`;

  return scrollItem;
}
function checkTouchOrClick(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function renderListScroller(list) {
  const list1Wrapper = document.getElementById("scroller1");
  list.forEach((element) => {
    const item = renderScrollItem(element);
    list1Wrapper.appendChild(item);
  });

  // let mouseOnScreenPos = null;
  // const scrollerContainer = document.getElementById("wrappScroll");
  list1Wrapper.addEventListener("mousedown", function (e) {
    list1Wrapper.classList.remove("grab");
    list1Wrapper.classList.add("grabbing");
    // mouseOnScreenPos = checkTouchOrClick(e).clientX;
  });
  list1Wrapper.addEventListener("touchstart", function (e) {
    list1Wrapper.classList.remove("grab");
    list1Wrapper.classList.add("grabbing");
    // mouseOnScreenPos = checkTouchOrClick(e).clientX;
  });

  list1Wrapper.addEventListener("mouseup", function (e) {
    list1Wrapper.classList.remove("grabbing");
    list1Wrapper.classList.add("grab");
    // if (mouseOnScreenPos || mouseOnScreenPos === 0) {
    //   const mouseOutScreenPos = checkTouchOrClick(e).clientX;
    //   const distance = mouseOutScreenPos - mouseOnScreenPos;
    //   list1Wrapper.style.transform = `translateX(${distance}px)`
    //   mouseOnScreenPos = null;
    // }
  });
  list1Wrapper.addEventListener("touchend", function (e) {
    list1Wrapper.classList.remove("grabbing");
    list1Wrapper.classList.add("grab");
    // if (mouseOnScreenPos || mouseOnScreenPos === 0) {
    //   const mouseOutScreenPos = checkTouchOrClick(e).clientX;
    //   const distance = mouseOutScreenPos - mouseOnScreenPos;
    //   list1Wrapper.style.transform = `translateX(${distance}px)`
    //   mouseOnScreenPos = null;
    // }
  });
}
function renderListScroller2(list) {
  const list2Wrapper = document.getElementById("scroller2");
  list.forEach((element) => {
    const item = renderScrollItem(element);
    list2Wrapper.appendChild(item);
  });
}
renderListScroller(sample);
renderListScroller2(sample);
