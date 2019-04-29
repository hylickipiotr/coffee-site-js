const BASE_ORIGIN_URL = window.location.origin;
const PAGE_BASE_URL = `${BASE_ORIGIN_URL}/pages/`;
const IMG_BASE_URL = `${BASE_ORIGIN_URL}/assets/image/`;

const replaceAnchorLinks = () => {
  const anchors = document.querySelectorAll('a');
  anchors.forEach(anchor => {
    if (anchor.childElementCount === 0) {
      //Anchor link to page
      anchor.href = PAGE_BASE_URL + anchor.getAttribute('href');
    } else {
      //Anchor link to img
      anchor.href = PAGE_BASE_URL + anchor.getAttribute('href');
    }
  });
};

replaceAnchorLinks();
