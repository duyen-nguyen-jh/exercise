function renderScrollItem(data) {
    if (!data) return;
    const { img, title, detail, like, comments } = data;

    const scrollItem = document.createElement("div");
    scrollItem.className = "scrollItem";
    scrollItem.style.display = "inline-block";

    scrollItem.innerHTML = `<div class="imgWrapper">
                                <img src="${img ? img : "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHB1cnBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"}" alt="img cover" />
                                <div class="heartWrapper">
                                    <span
                                        class="iconify"
                                        data-icon="clarity:heart-solid"
                                        style="color: white"
                                        data-width="17"
                                        data-height="15"
                                    ></span>
                                    <p style="font-size: 17px; margin-left: 5px">
                                    ${like ? like : 0}</p>
                                </div>
                            </div>
                            <div class="itemContentWrapper">
                                <div class="scrollItemTxt">
                                    <p class="title">${title ? title : "Title"}</p>
                                    <p class="detail" style="white-space: normal;">
                                    ${detail ? detail : ""}</p>
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

export { renderScrollItem };