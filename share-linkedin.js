function genericOnClick(pageInfo) {
  var sharedLink = '&url=' + encodeURIComponent(pageInfo.linkUrl || pageInfo.pageUrl);
  var sharedSelection = '&summary=' + encodeURIComponent(pageInfo.selectionText || '');

  var shareableLink = 'https://www.linkedin.com/shareArticle?mini=true&ro=false&trk=bookmarklet' + sharedLink + sharedSelection;
  window.open(shareableLink, 'News', 'width=520, height=570, toolbar=0, location=0, status=0, scrollbars=yes');
}

var id = chrome.contextMenus.create(
    {
        title: "Share on LinkedIn",
        contexts: [
            "page",
            "selection",
            "link",
            "editable",
            "image"
        ],
        onclick: genericOnClick
    }
);
