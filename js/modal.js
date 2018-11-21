var currentPage = 0;

var modal;
var modalOverlay;
var modalContent;
var modalPages;

var pageWidth, pageHeight;

var basePage = {
  width: 800,
  height: 600,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

function initModal() {

  modal = $("#startModal");
  modalOverlay = $("#modal-overlay");
  modalContent = $("#startModal .modal-content");
  
  console.log("modal", modal);
  console.log("modalContent", modalContent);
  console.log("modalOverlay", modalOverlay);

  $(window).resize(debounce(function () {
    getPageSize();            
    scalePages(modalContent, pageWidth, pageHeight);
  }, 150));
}

function getPageSize() {
  pageHeight = modal.height();
  pageWidth = modal.width();
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;

  scaleX = $(window).width() / 800;
  scaleY = $(window).height() / 600;
  
  scaleX = Math.min(scaleX, 1);
  scaleY = Math.min(scaleY, 1);

  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', 'transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}

function showModalPage(pageIndex) {

  getPageSize();
  scalePages(modalContent, pageWidth, pageHeight);
}

function debounce(func, wait, immediate) {
  var timeout;
  return () => {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

$(document).ready(function() {
  initModal();
});

function modalClose() {

  modal.remove();
  modalOverlay.remove();
}
