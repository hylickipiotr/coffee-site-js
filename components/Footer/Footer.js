const Footer = {
  PageTitle: 'CoffeSite'
};

const renderFooter = () => {
  const ElementBody = document.querySelector('body');
  const ElemenetFooter = document.createElement('footer');
  ElemenetFooter.classList = ['footer'];
  const ElementLogo = document.createElement('span');
  ElementLogo.classList = ['logo'];
  ElementLogo.textContent = Footer.PageTitle;
  ElemenetFooter.append(ElementLogo);
  ElementBody.append(ElemenetFooter);
};

renderFooter();
