import * as listItemModule from "./list-item.js";
const { renderScrollItem } = listItemModule;

const NUMBER_OF_NEXT_ITEMS = 1;

function renderScrollListByDOM(
  domObjForList,
  domObjForCarouselWrapper,
  listData
) {
  listData.forEach((element) => {
    domObjForList.appendChild(renderScrollItem(element));
  });

  const nextBtn = document.createElement("div");
  nextBtn.className = "nextButton";
  nextBtn.innerHTML = `<span
                            class="iconify"
                            data-icon="fa-solid:chevron-right"
                            style="color: white"
                            data-width="24"
                            data-height="42"
                        ></span>`;
  addNextButton(domObjForCarouselWrapper, nextBtn);

  const curIndexObj = { index: 0 };
  nextBtn.addEventListener("click", function () {
    handleCurrentIndex(domObjForList.childNodes, domObjForList, curIndexObj);
  });
}

function addNextButton(originNode, nextNode) {
  if (!originNode || !originNode.parentNode) return;
  originNode.parentNode.insertBefore(nextNode, originNode.nextSibling);
}

function handleCurrentIndex(listItemDom, listWrapperDom, currIndexObj) {
  const totalItem = listItemDom.length;
  currIndexObj.index = currIndexObj.index + NUMBER_OF_NEXT_ITEMS;
  let updatedIndex = currIndexObj.index;

  if (updatedIndex >= totalItem - 4) {
    currIndexObj.index = 0;
    return;
  }

  // 20 is for total horizontal margin (10 each side)
  const transformDistance =
    updatedIndex * listItemDom[0].offsetWidth + 20 * updatedIndex;
  listWrapperDom.style.transform = `translateX(-${transformDistance}px)`;
}

export { renderScrollListByDOM };
