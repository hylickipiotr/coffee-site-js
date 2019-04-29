var ActiveImageIndex = 0;

const getLighboxImagesSrcArray = () => {
  const Images = document.querySelectorAll('img');
  var lighboxImagesSrc = [];
  Images.forEach(image => {
    if (image.getAttribute('lightbox') !== null) {
      lighboxImagesSrc.push(image.getAttribute('src'));
    }
  });
  return lighboxImagesSrc;
};

const ImagesSrc = getLighboxImagesSrcArray();

const renderLightbox = () => {
  const ElementBody = document.body;

  const ElementLightbox = document.createElement('div');
  ElementLightbox.classList = ['lightbox'];

  const ElementImage = document.createElement('img');
  ElementImage.classList = ['lightbox-image'];

  const ElementNextButton = document.createElement('button');
  ElementNextButton.classList = ['lightbox-next'];
  ElementNextButton.textContent = 'Next';

  const ElementPreviousButton = document.createElement('button');
  ElementPreviousButton.classList = ['lightbox-previous'];
  ElementPreviousButton.textContent = 'Previous';

  const ElementCloseButton = document.createElement('button');
  ElementCloseButton.classList = ['lightbox-close'];
  ElementCloseButton.textContent = 'Close';

  const ElementButtonsWrapper = document.createElement('div');
  ElementButtonsWrapper.classList = ['lightbox-buttons-wrapper'];

  ElementLightbox.addEventListener('click', event => {
    if (event.target.className === 'lightbox') {
      event.target.setAttribute('active', 'false');
      ElementImage.setAttribute('src', '');
    }
  });

  ElementCloseButton.addEventListener('click', () => {
    ElementLightbox.setAttribute('active', 'false');
    ElementImage.setAttribute('src', '');
  });

  ElementPreviousButton.addEventListener('click', () => {
    ActiveImageIndex =
      ActiveImageIndex > 0 ? ActiveImageIndex - 1 : ImagesSrc.length - 1;
    ElementImage.setAttribute('src', ImagesSrc[ActiveImageIndex]);
  });

  ElementNextButton.addEventListener('click', () => {
    ActiveImageIndex =
      ActiveImageIndex < ImagesSrc.length - 1 ? ActiveImageIndex + 1 : 0;
    ElementImage.setAttribute('src', ImagesSrc[ActiveImageIndex]);
  });

  ElementButtonsWrapper.append(ElementCloseButton);
  ElementButtonsWrapper.append(ElementPreviousButton);
  ElementButtonsWrapper.append(ElementNextButton);
  ElementLightbox.append(ElementImage);
  ElementLightbox.append(ElementButtonsWrapper);
  ElementBody.append(ElementLightbox);
};

const addImageEventListeners = () => {
  const Lightbox = document.querySelector('.lightbox');
  const LightboxImage = document.querySelector('.lightbox-image');
  const Images = document.querySelectorAll('img');
  Images.forEach((image, index) => {
    if (image.getAttribute('lightbox') !== null) {
      image.addEventListener('click', function() {
        LightboxImage.setAttribute('src', image.getAttribute('src'));
        Lightbox.setAttribute('active', 'true');
        ActiveImageIndex = index;
      });
    }
  });
};

renderLightbox();
addImageEventListeners();
