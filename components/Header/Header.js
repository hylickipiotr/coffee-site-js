const Header = {
  PageTitle: 'CoffeSite',
  NavItmes: [
    {
      fileName: 'historia',
      name: 'Historia'
    },
    {
      fileName: 'uprawa_i_przygotowanie',
      name: 'Uprawa i przygotowanie'
    },
    {
      fileName: 'warunki_uprawy',
      name: 'Warunki uprawy'
    },
    {
      fileName: 'dane_ekonomiczne',
      name: 'Dane ekonomiczne'
    },
    {
      fileName: 'wplyw_na_zdrowie',
      name: 'Wpływ na zdrowie'
    },
    {
      fileName: 'inne_kawy',
      name: 'Inne kawy'
    },
    {
      fileName: 'przepisy',
      name: 'Przepisy'
    },
    {
      fileName: 'zrodla',
      name: 'Źródła'
    }
  ]
};

const renderNavigation = () => {
  const ElemenetNavigation = document.createElement('ul');
  ElemenetNavigation.classList = ['nav'];
  Header.NavItmes.forEach(({ fileName, name }) => {
    const elementNavItem = document.createElement('li');
    const elementNavAnchor = document.createElement('a');
    elementNavAnchor.setAttribute('href', `${fileName}.html`);
    elementNavAnchor.classList = ['nav-link'];
    elementNavAnchor.textContent = name;
    elementNavItem.appendChild(elementNavAnchor);
    ElemenetNavigation.appendChild(elementNavItem);
  });
  return ElemenetNavigation;
};

const renderHeader = () => {
  const ElementBody = document.querySelector('body');
  const ElementHeader = document.createElement('header');
  ElementHeader.classList = ['header'];
  const ElementLogo = document.createElement('a');
  ElementLogo.classList = ['logo'];
  ElementLogo.setAttribute('href', 'home.html');
  ElementLogo.textContent = Header.PageTitle;
  const ElementNavigation = renderNavigation();
  ElementHeader.append(ElementLogo, ElementNavigation);
  ElementBody.prepend(ElementHeader);
};

renderHeader();

//TODO Responsive menu

//TODO Added 'active' class to nav-link when active site