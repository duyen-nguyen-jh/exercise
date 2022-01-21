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

const list1MobileWrapper = document.getElementById("scroller1");
//đổi tên biến từ list1Wrapper -> list1MobileWrapper do đây là DOM obj đại diện cho list wrapper hiển thị mobile

const list1Desktop = document.querySelector("#desktopList1 #scrollList1");
const list2Desktop = document.querySelector("#desktopList2 #scrollList2");
//đổi tên biến từ list2Wrapper -> list2Desktop do đây là DOM obj đại diện cho scrollist hiển thị desktop

const nextBtn = document.getElementById("next");
let currIndex = 0;
let currIndex2 = 0;

// const screenWidth = window.innerWidth;
list1MobileWrapper.style.width = `${window.innerWidth}px`; //xóa khai báo biến do chỉ sử dụng giá trị screenwidth 1 lần duy nhat

function renderScrollItem(data) {
  // thêm code kiểm tra tính hợp lí của dữ liệu đầu vào trc khi xử lý hàm
  if (!data) return; //neu khong co data thi khong lam gi ca
  const { img, title, detail, like, comments } = data;

  const scrollItem = document.createElement("div");
  scrollItem.className = "scrollItem";
  scrollItem.style.display = "inline-block";

  // canh lề để phần code html dễ nhìn hơn (code cũ bên trong docx trả lời)
  // check giá trị của từng biến render trên UI, nếu không tồn tại thì hiển thị giá trị mặc định
  scrollItem.innerHTML = `<div class="imgWrapper">
                              <img src="${img
      ? img
      : "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHB1cnBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
    }" alt="img cover 4" />
                              <div class="heartWrapper">
                                  <span
                                      class="iconify"
                                      data-icon="clarity:heart-solid"
                                      style="color: white"
                                      data-width="17"
                                      data-height="15"
                                  ></span>
                                  <p style="font-size: 17px; margin-left: 5px">${like ? like : 0
    }</p>
                              </div>
                          </div>
                          <div class="itemContentWrapper">
                              <div class="scrollItemTxt">
                                  <p class="title">${title ? title : "Title"}</p>
                                  <p class="detail" style="white-space: normal;">${detail ? detail : ""
    }</p>
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
                                      <p>${comments ? comments : 0} comments</p>
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

//logic của 3 hàm render bị trùng lặp, gom lại thành 1 hàm có thể dùng lại với từng nơi khác nhau
function renderScrollListByDOM(domObj, listData) {
  listData.forEach((element) => {
    domObj.appendChild(renderScrollItem(element));
  });
}

//đổi tên biến phù hợp hơn với nội dung và chức năng nó thực hiện
// đổi tên hàm để biết rõ hơn đang xử lý sự kiện click cho cái gì
function onClickNextButtonList1(numberOfNextItem) {
  console.log(currIndex);
  const listScrollItem = document.querySelectorAll(
    "#desktopList1 #scrollList1 .scrollItem"
  );
  // handleCurrentIndex(numberOfNextItem, listScrollItem, true);
  const totalItem = listScrollItem.length;
  currIndex += numberOfNextItem;

  if (currIndex >= totalItem - 4) {
    currIndex = 0;
    return;
  }

  const transformDistance =
  currIndex * listScrollItem[0].offsetWidth + 20 * currIndex;
  list1Desktop.style.transform = `translateX(-${transformDistance}px)`;
}

function onClickNextButtonList2(numberOfNextItem) {
  const listScrollItem = document.querySelectorAll("#scrollList2 .scrollItem");
  // handleCurrentIndex(numberOfNextItem, listScrollItem, false);
  const totalItem = listScrollItem.length;
  currIndex2 += numberOfNextItem;

  if (currIndex2 >= totalItem - 4) {
    currIndex2 = 0;
    return;
  }

  const transformDistance =
  currIndex2 * listScrollItem[0].offsetWidth + 20 * currIndex2;
  list2Desktop.style.transform = `translateX(-${transformDistance}px)`;
}

function handleCurrentIndex(numberOfNextItem, listDom, isList1) {
  const totalItem = listDom.length;
  if (isList1) {
    currIndex += numberOfNextItem;
    if (currIndex >= totalItem - 4) {
      currIndex = 0;
      return;
    }
  } else {
    currIndex2 += numberOfNextItem;
    if (currIndex2 >= totalItem - 4) {
      currIndex2 = 0;
      return;
    }
  }

  const transformDistance =
    currIndexForList * listDom[0].offsetWidth + 20 * currIndexForList;
  list1Desktop.style.transform = `translateX(-${transformDistance}px)`;
}

renderScrollListByDOM(list1MobileWrapper, sample);
renderScrollListByDOM(list1Desktop, sample);
renderScrollListByDOM(list2Desktop, sample);
