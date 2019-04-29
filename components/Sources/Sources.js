const Sources = [
  'Historia kawy – Tea Rebels, „Tea Rebels”, 11 września 2016 [dostęp 2017-06-23] (pol.).',
  'Agenda Magazine – Finland.',
  'Kawa w Polsce – Coffee Rebels | Tea Rebels, „Tea R…ls”, 11 września 2016 [dostęp 2017-06-23] (pol.).',
  'Jędrzej Kitowicz: Opis obyczajów. Wrocław: Zakład Narodowy im. Ossolińskich, 1970, s. 453–456.',
  'Adam Mickiewicz, Pan Tadeusz Księga II.',
  'Hrankowski, Henryk., Kawa : surowiec, technologia,…wnictwa Naukowo-Techniczne, 1976, OCLC 749457697.',
  'Jakie są stopnie palenia kawy? – czaskawy.pl – sklep z kawą, www.czaskawy.pl [dostęp 2017-08-29].',
  'FAOSTAT, www.fao.org [dostęp 2019-03-10].',
  'FAOSTAT: Zbiory kawy (2013)',
  'Mariusz S. Kubiak. Wielopierścieniowe węglowodory …Higieny i Epidemiologii”. 94 (1), s. 31-36, 2013.',
  'Kawa a zdrowie – Tea Rebels, „Tea Rebels”, 11 września 2016 [dostęp 2017-06-23] (pol.).',
  'pl: Kawa. Wg publikacji “England Journal of Medici…40 a 75 rokiem życia.[1] Data dostępu: 20.11.2016',
  'net: Impreza dla wielbicieli kawy [2] Data dostępu: 19.11.2016',
  'pl: Kawa. Obserwacje przeprowadzone[kiedy?] w Stan…zyzn w średnim wieku.[3] Data dostępu: 20.11.2016',
  'pl: KIEDY PICIE KAWY STAJE SIĘ NIEBEZPIECZNE?[4] Data dostępu: 19.11.2016',
  'Alicandro G, Tavani A, La Vecchia C.. Coffee and c…CEJ.0000000000000341 (ang.). [dostęp 2017-04-13].',
  'Shalini Dixit, Phyllis K. Stein, Thomas A. Dewland…1161/JAHA.115.002503 (ang.). [dostęp 2016-01-27].',
  'Według informacji opublikowanych przez Polskie Tow…nia Tętniczego [5] Data archiwizacji: 2008-05-02.',
  'net: Pozytywny wpływ picia kawy na ludzkie zdrowie [6] Data dostępu 19.11.2016',
  'pl: Jeszcze nigdy kawa nie była tak zdrowa [7] Data dostępu: 19.11.2016',
  'abc Zdrowie: Wszystko o kawie [8] Data dostępu: 19.11.2016',
  'Aromat Kawy: Pozytywne właściwości kawy.[9] Data dostępu:19.11.2016',
  'Piękne ciało: Kawa – szkodzi, czy pomaga?[10] Data dostępu:18.05.2017',
  'News medical.net: Kawa jest numerowym jeden źródłe…niacze w Usa diecie [11] Data dostępu: 19.11.2016',
  'Nauka w Polsce: Kawa kontra wolne rodniki [12] Data dostępu: 19.11.2016',
  'pl: Czym nie należy popijać leków [13] Data dostępu: 19.11.2016',
  'pl: Kawa ochroni cię przed chorobą Alzheimera i st…dnieniem rozsianym? [14] Data dostępu: 19.11.2016',
  'pl:Gastrologia: Picie kawy zmniejsza ryzyko kamicy…cherzyka żółciowego [15] Data dostępu: 19.11.2016',
  'abc Zdrowie.pl: Kofeina a odchudzanie [16] Data dostępu: 19.11.2016',
  'Koppelstaeter, Florian et al, Influence of Caffein…ological Society of North America, listopad 2005.',
  'Jarvis. Does caffeine intake enhance absolute leve…52, 1993. DOI: 10.1007/BF02246949. PMID: 7870897.',
  'Johnson-Kozlow, D. Kritz-Silverstein, E. Barrett-C…0, 2002. DOI: 10.1093/aje/kwf119. PMID: 12397002.',
  'J. Kennedy. Coffee consumption and the risk of cir…, s. 562–574, 2016-01-25. DOI: 10.1111/apt.13523.',
  'Ming Ding, Ambika Satija, Shilpa N. Bhupathiraju e…LATIONAHA.115.017341 (ang.). [dostęp 2016-01-07].',
  'Na podstawie badań przeprowadzonych na grupie 46 t…bny przypis][kto? kiedy? gdzie? data publikacji?]',
  'A risk-benefit assessment of paracetamol (acetamin…rmation, U.S. National Library of Medicine, 2010.',
  'Badanie przeprowadzone[kiedy?] na grupie 8 tys. Mę…bny przypis][kto? kiedy? gdzie? data publikacji?]',
  'Salazar-Martinez E, Willet WC, Ascherio A, Manson … diabetes mellitus.” Ann Intern Med 2004;140:1-8.',
  'Inoue, Manami et al. (2005) Influence of Coffee Dr…tional Cancer Institute, Vol. 97, No. 4, 293-300.',
  'Teza przedstawiona przez Joego Vinsona, profesora Scranton University.[gdzie? kiedy?]',
  'News Medical: Kawa jest numerowym jeden źródłem pr…niacze w USA diecie [17] Data dostępu: 19.11.2016',
  'Picie kawy zapobiega próchnicy zębów.',
  'Jarogniew J. Łuszczki, Marek Zuchora, Justyna Kozi…ive avoidance task in mice. „ANNALES UMCS”, 2006.',
  'Wentz CT., Magavi SS. Caffeine alters proliferatio…10.1016/j.neuropharm.2009.02.002. PMID: 19217915.',
  'Han ME., Park KH., Baek SY., Kim BS., Kim JB., Kim… DOI: 10.1016/j.bbrc.2007.03.086. PMID: 17400186.',
  'Bhattacharya SK., Satyan KS., Chakrabarti A. Anxio…ngland)”. 3 (11), s. 219–24, 1997. PMID: 9305413.',
  'Garrett BE, Griffiths RR. Physical dependence incr…sychopharmacology (Berl) 1998 Oct;139(3):195-202.',
  'Według duńskich badań przeprowadzonych w 2003 roku na grupie 18 478 kobiet[potrzebny przypis]',
  'ua: Czy kawa bezpieczne dla kobiet w ciąży?[18] Data dostępu: 19.11.2016',
  'M jak mama: Używki w ciąży',
  'Badania opublikowane[kiedy?] w Journal of the American Medical Association[kiedy?][19].',
  'Na podstawie danych zamieszczonych w wortalach poś…!”[o które dokładnie artykuły/podstrony chodzi?].',
  'org: Kofeina a zdrowie [20] Data dostępu: 19.11.2016',
  'Filiżanka naparu za niemal 100 złotych! Najdroższą…nesu, Echo Dnia – lokalny portal przedsiębiorców.'
];

const renderSources = () => {
  const ElementBody = document.querySelector('body');
  const ElementSources = document.createElement('ol');
  ElementSources.classList = ['sources'];
  Sources.forEach((source, index) => {
    const ElementSource = document.createElement('li');
    ElementSource.id = `przypis_${index + 1}`;
    const ElementIndex = document.createElement('span');
    ElementIndex.classList = ['index'];
    ElementIndex.textContent = `${index + 1}. `;
    ElementSource.textContent = source;
    ElementSource.prepend(ElementIndex);
    ElementSources.append(ElementSource);
  });
  ElementBody.append(ElementSources);
};

const highlightHashtagSource = () => {
  const hashtag = window.location.hash;
  const ElementActiveSource = document.querySelector(hashtag);
  ElementActiveSource.classList = ['active']
}

const renderBackNavigationButton = () => {
  const hashtag = window.location.hash;
  const ElementActiveSource = document.querySelector(hashtag);
  const ElementButtonPrevious = document.createElement('button');
  ElementButtonPrevious.onclick = () => {history.back()};
  ElementButtonPrevious.textContent = "Wróć do artykułu";
  ElementActiveSource.append(ElementButtonPrevious);
}

renderSources();
renderBackNavigationButton();
