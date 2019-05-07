const Footer = {
  Copyright: {
    PageTitle: 'CoffeSite',
    Year: new Date().getFullYear().toString(),
  }
};

const renderFooter = () => {
  const ElementBody = document.querySelector('body');
  const ElemenetFooter = document.createElement('footer');
  ElemenetFooter.classList = ['footer'];
  const ElementLogo = document.createElement('span');
  ElementLogo.classList = ['copyright'];
  ElementLogo.textContent = `Copyright © ${Footer.Copyright.Year} ${Footer.Copyright.PageTitle}`;
  ElemenetFooter.append(ElementLogo);
  ElementBody.append(ElemenetFooter);
};

renderFooter();
