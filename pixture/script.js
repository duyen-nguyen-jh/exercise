const sample = [
  {
    img: "./public/item1-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    comments: 374,
    index: 1,
  },
  {
    img: "./public/item2-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 2,
    comments: 374,
  },
  {
    img: "./public/item3-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 3,
    comments: 374,
  },
  {
    img: "./public/item4-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 4,
    comments: 374,
  },
  {
    img: "./public/item5-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 5,
    comments: 374,
  },
  {
    img: "./public/item6-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 6,
    comments: 374,
  },
  {
    img: "./public/item7-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 7,
    comments: 374,
  },
  {
    img: "./public/item1-img.png",
    title: "BLISS TEXTURE",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: 383,
    index: 8,
    comments: 374,
  },
];

const list1Wrapper = document.getElementById("scroller1");
const screenWidth = window.innerWidth;
list1Wrapper.style.width = `${screenWidth}px`;

const list1Desktop = document.querySelector("#desktopList1 #scrollList1");
const list2Wrapper = document.querySelector("#desktopList2 #scrollList2");

// const prevBtn = document.getElementById("prev");
// prevBtn.style.display = "none";
const nextBtn = document.getElementById("next");

let currIndex = 0;
let currIndex2 = 0;

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

function renderListScroller(list) {
  list.forEach((element, index) => {
    const item = renderScrollItem(element);
    // if (index === 0) {
    //   item.classList.add("current");
    // }
    list1Wrapper.appendChild(item);
  });
}
function renderListDesktopScroller1(list) {
  list.forEach((element) => {
    const item = renderScrollItem(element);
    list1Desktop.appendChild(item);
  });
}

function renderListDesktopScroller2(list) {
  list.forEach((element) => {
    const item = renderScrollItem(element);
    list2Wrapper.appendChild(item);
  });
}

function handleClick(value) {
  // prevBtn.style.display = "flex";
  const listScrollItem = document.querySelectorAll(
    "#desktopList1 #scrollList1 .scrollItem"
  );
  const totalItem = listScrollItem.length;
  currIndex += value;
  console.log(currIndex);

  // if (currIndex === 1) {
  //   prevBtn.style.display = "none";
  // }
  if (currIndex >= totalItem - 4) {
    currIndex = 0;
    return;
  }

  const transformDistance = currIndex * listScrollItem[0].offsetWidth + 20 * currIndex;
  list1Desktop.style.transform = `translateX(-${transformDistance}px)`;
}
function handleClick2(value) {
  // prevBtn.style.display = "flex";
  const listScrollItem = document.querySelectorAll("#scrollList2 .scrollItem");
  const totalItem = listScrollItem.length;
  currIndex2 += value;
  console.log(currIndex2);

  // if (currIndex === 1) {
  //   prevBtn.style.display = "none";
  // }
  if (currIndex2 >= totalItem - 4) {
    currIndex2 = 0;
    return;
  }

  const transformDistance = currIndex2 * listScrollItem[0].offsetWidth + 20 * currIndex2;
  list2Wrapper.style.transform = `translateX(-${transformDistance}px)`;
}
renderListScroller(sample);
renderListDesktopScroller1(sample);
renderListDesktopScroller2(sample);
