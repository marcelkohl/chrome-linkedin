// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, d) {
  var f='http://www.linkedin.com/shareArticle?mini=true&ro=false&trk=bookmarklet&title='+encodeURIComponent(d.title)+'&url='+encodeURIComponent(d.url);
  window.open(f,'News','width=520,height=570,toolbar=0,location=0,status=0,scrollbars=yes');
}


var id = chrome.contextMenus.create({"title": "Share on LinkedIn", "contexts":["page","selection","link","editable","image"],
                                       "onclick": genericOnClick});
