export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  // Jeśli jest jedna poprawna odpowiedź – string,
  // jeśli więcej – tablica stringów.
  correctAnswer: string | string[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Która koncepcja CSR zakłada cztery poziomy odpowiedzialności, włączając w to poziom filantropijny?",
    options: [
      "Koncepcja 3BL",
      "Teoria interesariuszy Freemana",
      "Piramida społecznej odpowiedzialności Carroll'a",
      "Alternatywna piramida CSR"
    ],
    correctAnswer: "Piramida społecznej odpowiedzialności Carroll'a"
  },
  {
    id: 2,
    question: "Która teoria zakłada, że cele ekonomiczne i społeczne uzupełniają się wzajemnie?",
    options: [
      "Koncepcja wartości wspólnej M. Portera",
      "Teoria interesariuszy Freemana",
      "Koncepcja 3BL",
      "Piramida społecznej odpowiedzialności Carroll'a"
    ],
    correctAnswer: "Teoria interesariuszy Freemana"
  },
  {
    id: 3,
    question: "Która koncepcja CSR skupia się na trzech aspektach: ludzi, planety i zysku?",
    options: [
      "Koncepcja 3BL",
      "Koncepcja wartości wspólnej M. Portera",
      "Teoria interesariuszy Freemana",
      "Alternatywna piramida CSR"
    ],
    correctAnswer: "Koncepcja 3BL"
  },
  {
    id: 4,
    question: "Jakie są trzy wymiary budowania wartości społecznej według piramidy społecznej odpowiedzialności Carroll'a?",
    options: [
      "Zasady, procesy, system zarządzania",
      "Środowiskowy, przekonaniowy, wartości i założeniowy",
      "Etyka, ekologia, ekonomia",
      "Cele ekonomiczne, cele społeczne, cele środowiskowe"
    ],
    correctAnswer: "Zasady, procesy, system zarządzania"
  },
  {
    id: 5,
    question: "Które z poniższych poziomów zostały dodane na początku alternatywnej piramidy CSR Carroll'a?",
    options: [
      "Prawny, ekonomiczny, etyczny, filantropijny",
      "Środowiskowy, przekonaniowy, wartości i założeniowy",
      "Środowiskowy, przekonaniowy, filantropijny",
      "Etyczny, filantropijny, przekonaniowy, wartości i założeniowy"
    ],
    correctAnswer: "Środowiskowy, przekonaniowy, wartości i założeniowy"
  },
  {
    id: 6,
    question: "Jakie są główne interesy uwzględniane w teorii interesariuszy Freemana?",
    options: [
      "Inwestorzy, pracownicy, partnerzy biznesowi, społeczeństwo, klienci",
      "Pracownicy, partnerzy biznesowi, społeczeństwo, inwestorzy, dostawcy",
      "Klienci, dostawcy, inwestorzy, społeczeństwo, pracownicy"
    ],
    correctAnswer: "Inwestorzy, pracownicy, partnerzy biznesowi, społeczeństwo, klienci"
  },
  {
    id: 7,
    question: "Która koncepcja CSR skupia się na tworzeniu wartości zarówno dla przedsiębiorstwa, jak i dla społeczności?",
    options: [
      "Koncepcja wartości wspólnej M. Portera",
      "Teoria interesariuszy Freemana",
      "Koncepcja 3BL",
      "Piramida społecznej odpowiedzialności Carroll'a"
    ],
    correctAnswer: "Koncepcja wartości wspólnej M. Portera"
  },
  {
    id: 8,
    question: "Co oznacza skrót ESG w kontekście odpowiedzialności społecznej i biznesu?",
    options: [
      "European Sustainability Governance",
      "Environmental Sustainability Guidelines",
      "Environment Social Governance",
      "Ethical Social Guidelines"
    ],
    correctAnswer: "Environment Social Governance"
  },
  {
    id: 9,
    question: "Jakie inicjatywy i standardy są związane z trendem ESG?",
    options: [
      "SFDR, TR, TCFC",
      "NFRD, CSRD, TNFD",
      "CSDDD, ESRS, ESG",
      "CSR, CSRD, TCFC"
    ],
    correctAnswer: "NFRD, CSRD, TNFD"
  },
  {
    id: 10,
    question: "Które modele CSR skupiają się na wartościach ekonomicznych?",
    options: [
      "Modele ukierunkowane na wartości moralne",
      "Modele ukierunkowane na wartości ekonomiczne",
      "Zarówno modele ukierunkowane na wartości moralne, jak i ekonomiczne",
      "Żaden z powyższych"
    ],
    correctAnswer: "Modele ukierunkowane na wartości ekonomiczne"
  },
  {
    id: 11,
    question: "Co to jest startup pozytywnego wpływu (SPW)?",
    options: [
      "Startup skupiający się na zrównoważonym rozwoju",
      "Startup działający w sektorze społecznym",
      "Startup wykorzystujący innowacje technologiczne",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 12,
    question: "Co jest istotną cechą przedsiębiorczości pozytywnego wpływu?",
    options: [
      "Pasja i wzrost wartości organizacji",
      "Skupienie na innowacjach technologicznych",
      "Rzetelność organizacyjna i efektywność",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 13,
    question: "Co składa się na model przedsiębiorczości pozytywnego wpływu?",
    options: [
      "Purpose + Scale",
      "Entrepreneurship + Technology + Sustainability + Innovation",
      "Tech4Susty",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 14,
    question: "Jakie są typy odpowiedzialnych innowacji?",
    options: [
      "Typ 1: Inaczej",
      "Typ 2: Coś innego",
      "Oba typy",
      "Żaden z powyższych"
    ],
    correctAnswer: "Oba typy"
  },
  {
    id: 15,
    question: "Co to jest przedsiębiorstwo społeczne?",
    options: [
      "Podmiot ekonomii społecznej skupiający się na zrównoważonych praktykach gospodarczych",
      "Organizacja pozarządowa działająca na rzecz dobra publicznego",
      "Spółdzielnia socjalna zatrudniająca osoby zagrożone marginalizacją społeczną",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 16,
    question: "Które z podmiotów należą do ekonomii społecznej?",
    options: [
      "Spółdzielnia socjalna",
      "Warsztat terapii zajęciowej",
      "Organizacja pozarządowa",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 17,
    question: "Jakie są akty prawne dla przedsiębiorstw społecznych?",
    options: [
      "Stowarzyszenie",
      "Fundacja",
      "Spółdzielnia socjalna",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 18,
    question: "Ile osób minimalnie musi tworzyć spółdzielnię socjalną?",
    options: [
      "3 osoby fizyczne lub 2 osoby prawne",
      "7 osób fizycznych",
      "10 osób fizycznych",
      "Dowolna liczba osób"
    ],
    correctAnswer: "3 osoby fizyczne lub 2 osoby prawne"
  },
  {
    id: 19,
    question: "Jakie są główne cele przedsiębiorstw społecznych?",
    options: [
      "Integracja zawodowa i społeczna osób zagrożonych marginalizacją społeczną",
      "Generowanie zysków dla właścicieli",
      "Wzrost wartości rynkowej organizacji",
      "Konkurowanie z innymi przedsiębiorstwami"
    ],
    correctAnswer: "Integracja zawodowa i społeczna osób zagrożonych marginalizacją społeczną"
  },
  {
    id: 20,
    question: "Które z podmiotów ekonomii społecznej opierają się na demokratycznym zarządzaniu?",
    options: [
      "Spółdzielnia pracy",
      "Centrum/klub integracji społecznej",
      "Organizacja pozarządowa",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 21,
    question: "Które z poniższych elementów nie należy do odpowiedzialności firm wobec konsumentów?",
    options: [
      "Komunikacja",
      "Marketing",
      "Sprzedaż",
      "Badania i rozwój"
    ],
    correctAnswer: "Badania i rozwój"
  },
  {
    id: 22,
    question: "Co oznacza pojęcie \"dark patterns\" w kontekście odpowiedzialności firm wobec konsumentów?",
    options: [
      "Strategie marketingowe oparte na badaniach psychologicznych",
      "Sposoby manipulacji konsumentami poprzez wykorzystanie strachu i ograniczonej dostępności produktów/usług",
      "Praktyki związane z bezpieczeństwem danych osobowych",
      "Techniki sprzedażowe oparte na uczciwości i przejrzystości"
    ],
    correctAnswer: "Sposoby manipulacji konsumentami poprzez wykorzystanie strachu i ograniczonej dostępności produktów/usług"
  },
  {
    id: 23,
    question: "Jakie są odpowiedzialności firm za przekaz reklamowy?",
    options: [
      "Zakaz odnoszenia się do suplementów leczniczych w sposób sugerujący ich właściwości lecznicze",
      "Zapobieganie i monitoring stosowania misselingu",
      "Uproszczenie języka bankowego",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 24,
    question: "Co to są innowacje STI?",
    options: [
      "Innowacje technologiczne",
      "Innowacje organizacyjne",
      "Innowacje społeczne",
      "Innowacje w komunikacji marketingowej"
    ],
    correctAnswer: "Innowacje technologiczne"
  },
  {
    id: 25,
    question: "Jakie znaczenie mają innowacje społeczne w miejscu pracy?",
    options: [
      "Wzrost produktywności i wyników finansowych firm",
      "Poprawa relacji między pracownikami",
      "Zwiększenie konkurencyjności na rynku",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 26,
    question: "Jakie są typy innowacji według badań w krajach skandynawskich?",
    options: [
      "Innowacje technologiczne, innowacje społeczne, innowacje produktowe",
      "Innowacje technologiczne, innowacje organizacyjne, innowacje marketingowe",
      "Innowacje społeczne, innowacje infrastrukturalne, innowacje usługowe",
      "Innowacje technologiczne, innowacje społeczne, innowacje usługowe"
    ],
    correctAnswer: "Innowacje technologiczne, innowacje organizacyjne, innowacje marketingowe"
  },
  {
    id: 27,
    question: "Kto zazwyczaj inicjuje innowacje w miejscu pracy?",
    options: [
      "Pracownicy",
      "Zarząd/dyrektor",
      "Badacze i naukowcy",
      "Klienci i konsumenci"
    ],
    correctAnswer: "Zarząd/dyrektor"
  },
  {
    id: 28,
    question: "Jakie czynniki mogą wspierać innowacje w miejscu pracy?",
    options: [
      "Kompetencje decyzyjne rozproszone w organizacji",
      "Struktura organizacyjna",
      "Relacje między pracownikami",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 29,
    question: "Jaką rolę odgrywają menadżerowie w procesie innowacji?",
    options: [
      "Wspierają wdrażanie innowacji",
      "Rozumieją nieprzewidywalność i ryzyko",
      "Akceptują konieczność uczenia się",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 30,
    question: "Jakie są bariery w dzieleniu się wiedzą i pomysłami w kontekście innowacji w miejscu pracy?",
    options: [
      "Niechęć do dzielenia się wiedzą",
      "Obawa o kradzież pomysłu",
      "Przewaga kontroli",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 31,
    question: "Który model przywództwa opiera się na zasadzie \"coś za coś\" i wykorzystuje zewnętrzne motywatory?",
    options: [
      "Transakcyjne",
      "Transformacyjne",
      "Adaptacyjne",
      "Organiczne"
    ],
    correctAnswer: "Transakcyjne"
  },
  {
    id: 32,
    question: "Jakie są style przywództwa w Polsce, według notatek?",
    options: [
      "Strukturyzujący, autokratyczny, partycypacyjny, makiaweliczny, nagradzający, zdystansowanie",
      "Autorytarny, demokratyczny, laissez-faire",
      "Transakcyjny, transformacyjny, autentyczny",
      "Przywództwo służebne, przywództwo autorytarne, przywództwo demokratyczne"
    ],
    correctAnswer: "Strukturyzujący, autokratyczny, partycypacyjny, makiaweliczny, nagradzający, zdystansowanie"
  },
  {
    id: 33,
    question: "Który model biznesowy w duchu zrównoważonego rozwoju polega na maksymalizowaniu efektywności materiałowej i energetycznej?",
    options: [
      "Technological",
      "Social",
      "Organizational",
      "Circular economy"
    ],
    correctAnswer: "Technological"
  },
  {
    id: 34,
    question: "Co oznacza pojęcie \"greenwashing\" w kontekście działań firm związanych z zrównoważonym rozwojem?",
    options: [
      "Stosowanie szczególnego nazewnictwa w przekazach reklamowych, które sugeruje przyjazność środowiskową",
      "Niedoinformowanie klientów na temat rzeczywistych działań firm związanych z zrównoważonym rozwojem",
      "Monitorowanie działań firm przez instytucje odpowiedzialne za zrównoważony rozwój",
      "Podejmowanie działań proekologicznych przez firmy"
    ],
    correctAnswer: "Stosowanie szczególnego nazewnictwa w przekazach reklamowych, które sugeruje przyjazność środowiskową"
  },
  {
    id: 35,
    question: "Jakie branże są bardziej monitorowane przez instytucje związane z zrównoważonym rozwojem?",
    options: [
      "Rolniczo-spożywcza, finansowa, energetyczna, e-commerce",
      "Farmaceutyczna, medyczna, technologiczna, transportowa",
      "Budowlana, turystyczna, handlowa, gastronomiczna",
      "Spożywcza, modowa, filmowa, artystyczna"
    ],
    correctAnswer: "Rolniczo-spożywcza, finansowa, energetyczna, e-commerce"
  },
  {
    id: 36,
    question: "Jakie znaczenie ma przywództwo służebne?",
    options: [
      "Słuchanie pracowników i podejmowanie z nimi decyzji",
      "Budowanie pełnego zaangażowania wszystkich uczestników",
      "Przywódca pokazuje kierunki i daje wzorce",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 37,
    question: "Jakie są przykłady nowych modeli biznesowych w duchu zrównoważonego rozwoju, na czym mogą bazować?",
    options: [
      "Technological, social, organizational",
      "Circular economy, sharing economy, social entrepreneurship",
      "Renewable energy, sustainable supply chain, BCorp",
      "Recycling, upcycling, positive impact startups"
    ],
    correctAnswer: "Technological, social, organizational"
  },
  {
    id: 38,
    question: "Która branża jest często kojarzona z działaniami nieodpowiedzialnymi społecznie, takimi jak reklamy swoich produktów?",
    options: [
      "Farmaceutyczna",
      "Spożywcza",
      "Finansowa",
      "Energetyczna"
    ],
    correctAnswer: "Farmaceutyczna"
  },
  {
    id: 39,
    question: "Jakie są przykłady działań firm w duchu zrównoważonego rozwoju, które są monitorowane przez instytucje?",
    options: [
      "Promowanie złych wzorców zachowania",
      "Zachowania nieodpowiedzialne społecznie",
      "Aspekt ekologiczny danej usługi",
      "Wszystkie powyższe odpowiedzi"
    ],
    correctAnswer: "Wszystkie powyższe odpowiedzi"
  },
  {
    id: 40,
    question: "Które elementy zamieniły kolejność w alternatywnej piramidzie CSR Carroll'a?",
    options: [
      "Prawny z Filantropijnym",
      "Prawny z Ekonomicznym",
      "Etyczny z Ekonomicznym",
      "Filantropijny z Etycznym"
    ],
    correctAnswer: "Prawny z Ekonomicznym"
  },
  {
    id: 41,
    question: "Które z poniższych ryzyk jest uwzględniane w kryteriach niefinansowych ESG?",
    options: [
      "Ryzyka klimatyczne",
      "Ryzyka finansowe",
      "Ryzyka technologiczne",
      "Ryzyka marketingowe"
    ],
    correctAnswer: "Ryzyka klimatyczne"
  },
  {
    id: 42,
    question: "Jakie podejście do raportowania jest związane z ESG?",
    options: [
      "Standardy międzynarodowe",
      "Regulacje prawne",
      "Praktyka rynkowa",
      "Wszystkie powyższe"
    ],
    correctAnswer: "Wszystkie powyższe"
  },
  {
    id: 43,
    question: "Jakie są trendy wśród inwestorów związane z ESG?",
    options: [
      "Włączanie kryteriów finansowych w działalność spółek",
      "Ignorowanie aspektów środowiskowych i społecznych",
      "Zwiększanie ryzyka inwestycji",
      "Włączanie kryteriów niefinansowych w działalność spółek"
    ],
    correctAnswer: "Włączanie kryteriów niefinansowych w działalność spółek"
  },
  {
    id: 44,
    question: "Które z poniższych modeli gospodarki jest związane z ESG?",
    options: [
      "Model kapitalistyczny",
      "Model socjalistyczny",
      "Model gospodarki obiegu zamkniętego, naturalnego klimatycznie",
      "Model autorytarny"
    ],
    correctAnswer: "Model gospodarki obiegu zamkniętego, naturalnego klimatycznie"
  },
  {
    id: 45,
    question: "Jakie są cechy modelu przywództwa transakcyjnego?",
    options: [
      "Wykorzystywanie zewnętrznych motywatorów",
      "Transformowanie podwładnych",
      "Budowanie pełnego zaangażowania uczestników",
      "Pozostawienie decyzji na poziomie indywidualnym"
    ],
    correctAnswer: "Wykorzystywanie zewnętrznych motywatorów"
  },
  {
    id: 46,
    question: "Który z wymienionych liderów wzbudza fascynację swoją odwagą i wszechmocnością?",
    options: [
      "Transformacyjny lider narcystyczny",
      "Transakcyjny lider adaptacyjny",
      "Transformacyjny lider uwodzicielski",
      "Organiczny lider"
    ],
    correctAnswer: "Transformacyjny lider narcystyczny"
  },
  {
    id: 47,
    question: "Który model przywództwa wspiera ludzi w wypracowaniu rozwiązań samodzielnie?",
    options: [
      "Transakcyjne przywództwo",
      "Transformacyjne przywództwo",
      "Adaptacyjne przywództwo",
      "Organiczne przywództwo"
    ],
    correctAnswer: "Adaptacyjne przywództwo"
  },
  {
    id: 48,
    question: "Jaki styl przywództwa charakteryzuje się klarownym zadawaniem zadań, analizą i monitorowaniem postępów?",
    options: [
      "Strukturyzujący",
      "Autokratyczny",
      "Partycypacyjny",
      "Makiaweliczny"
    ],
    correctAnswer: "Strukturyzujący"
  },
  {
    id: 49,
    question: "Który styl przywództwa eksponuje władzę i stawia wysokie standardy, karząc za niepożądane zachowania?",
    options: [
      "Strukturyzujący",
      "Autokratyczny",
      "Partycypacyjny",
      "Makiaweliczny"
    ],
    correctAnswer: "Autokratyczny"
  },
  {
    id: 50,
    question: "Który styl przywództwa charakteryzuje się wsparciem dla pracowników w podejmowaniu decyzji i inicjatyw?",
    options: [
      "Strukturyzujący",
      "Autokratyczny",
      "Partycypacyjny",
      "Makiaweliczny"
    ],
    correctAnswer: "Partycypacyjny"
  },
  {
    id: 51,
    question: "Jaki styl przywództwa charakteryzuje się manipulacją informacjami i tolerancją wobec niskich standardów etycznych i moralnych?",
    options: [
      "Nagradzający",
      "Zdystansowanie",
      "Makiaweliczny",
      "Autokratyczny"
    ],
    correctAnswer: "Makiaweliczny"
  },
  {
    id: 52,
    question: "Który model zrównoważonego rozwoju opiera się na generowaniu większej ilości pieniędzy z tych samych produktów i wykorzystywaniu materiałów z recyklingu?",
    options: [
      "Gospodarka cyrkularna",
      "Ekonomia współdzielenia",
      "Przedsiębiorczość społeczna",
      "Energia odnawialna"
    ],
    correctAnswer: "Gospodarka cyrkularna"
  },
  {
    id: 53,
    question: "Który model zrównoważonego rozwoju opiera się na współdzieleniu zasobów, na przykład poprzez usługi car-sharingowe?",
    options: [
      "Gospodarka cyrkularna",
      "Ekonomia współdzielenia",
      "Przedsiębiorczość społeczna",
      "Energia odnawialna"
    ],
    correctAnswer: "Ekonomia współdzielenia"
  },
  {
    id: 54,
    question: "Który model zrównoważonego rozwoju koncentruje się na tworzeniu przedsiębiorstw, których działalność ma pozytywny wpływ społeczny, na przykład poprzez model \"kup jeden, podaruj jeden\" (buy one give one)?",
    options: [
      "Gospodarka cyrkularna",
      "Ekonomia współdzielenia",
      "Przedsiębiorczość społeczna",
      "Energia odnawialna"
    ],
    correctAnswer: "Przedsiębiorczość społeczna"
  },
  {
    id: 55,
    question: "Która instytucja zajmuje się ochroną klientów i konsumentów oraz rozwiązywaniem sytuacji problematycznych dla interesariuszy?",
    options: [
      "EASA – European advertising Alliance",
      "KER - Komisja Etyki Reklamy",
      "UOKiK – urząd ochrony klientów i konsumentów"
    ],
    correctAnswer: "UOKiK – urząd ochrony klientów i konsumentów"
  },
  {
    id: 56,
    question: "Jakie są dwa główne tryby innowacji zdefiniowane w notatkach?",
    options: [
      "Innowacje STI i innowacje DUI",
      "Innowacje technologiczne i innowacje społeczne",
      "Innowacje organizacyjne i innowacje ekonomiczne"
    ],
    correctAnswer: "Innowacje STI i innowacje DUI"
  },
  {
    id: 57,
    question: "W jakim kontekście polityka gospodarcza traktuje innowacje jako czynnik wzrostu produktywności?",
    options: [
      "W kontekście programów unijnych",
      "W kontekście badań nad innowacjami typu DUI w ramach UE",
      "W kontekście zwiększania jakościowych miejsc pracy"
    ],
    correctAnswer: "W kontekście programów unijnych"
  },
  {
    id: 58,
    question: "Jakie czynniki są wskazane jako decydujące o funkcjonowaniu jednostek w społeczeństwie w kontekście działań społecznych związanych z innowacjami w miejscu pracy?",
    options: [
      "Dobrostan i satysfakcja z miejsca pracy",
      "Efektywność produkcyjna i zysk",
      "Wykorzystanie nowych technologii i systemów informatycznych"
    ],
    correctAnswer: "Dobrostan i satysfakcja z miejsca pracy"
  },
  {
    id: 59,
    question: "Według notatek, co jest źródłem problemu w nurcie rozumienia \"społeczne\" w innowacjach?",
    options: [
      "Niezaspokojone potrzeby społeczne",
      "Brak wystarczających środków finansowych",
      "Brak odpowiedniej infrastruktury technologicznej"
    ],
    correctAnswer: "Niezaspokojone potrzeby społeczne"
  },
  {
    id: 60,
    question: "Jakie obszary są objęte innowacjami społecznymi zgodnie z notatkami?",
    options: [
      "Organizacja pracy i systemy zarządzania",
      "Technologie informatyczne i komunikacyjne",
      "Produkty i usługi technologiczne"
    ],
    correctAnswer: "Organizacja pracy i systemy zarządzania"
  },
  {
    id: 61,
    question: "Zgodnie z badaniami nad innowacjami w miejscu pracy w krajach skandynawskich, jaką część sukcesu innowacji przypisuje się innowacjom technologicznym?",
    options: [
      "25%",
      "50%",
      "75%"
    ],
    correctAnswer: "25%"
  },
  {
    id: 62,
    question: "Jakie procesy biznesowe głównie koncentrują się badania nad innowacjami w miejscu pracy w Polsce?",
    options: [
      "Procesy związane z produkcją i logistyką",
      "Procesy związane z marketingiem i sprzedażą",
      "Procesy związane z zasobami ludzkimi i zarządzaniem"
    ],
    correctAnswer: "Procesy związane z produkcją i logistyką"
  },
  {
    id: 63,
    question: "Jakie działania wspierają innowacyjność w polskich firmach według przeprowadzonych badań?",
    options: [
      "Tworzenie elastycznych grafików pracy",
      "Organizowanie integracyjnych wyjazdów dla pracowników",
      "Wdrażanie innowacyjnych rozwiązań"
    ],
    correctAnswer: "Wdrażanie innowacyjnych rozwiązań"
  },
  {
    id: 64,
    question: "Jakie czynniki przyczyniają się do wyższej produktywności i wyników finansowych firm, które przykładają wagę do rozwoju miejsca pracy?",
    options: [
      "Zatrudnianie pracowników o wysokim doświadczeniu zawodowym",
      "Koncentracja na efektywności procesów produkcyjnych",
      "Rozwój i dbałość o dobrostan pracowników"
    ],
    correctAnswer: "Rozwój i dbałość o dobrostan pracowników"
  },
  {
    id: 65,
    question: "Dlaczego ludzie wymyślili honor?",
    options: [
      "Aby chronić swoje mienie",
      "Aby zwiększyć swoją reputację i zaufanie w społeczeństwie",
      "Aby zyskać władzę nad innymi",
      "Aby unikać konfliktów z prawem"
    ],
    correctAnswer: "Aby zwiększyć swoją reputację i zaufanie w społeczeństwie"
  },
  {
    id: 66,
    question: "Po co ludziom prawo?",
    options: [
      "Aby ograniczyć wolność jednostek",
      "Aby zapewnić stabilność społeczną i sprawiedliwość",
      "Aby zmniejszyć liczebność populacji",
      "Aby zwiększyć dochody państwa"
    ],
    correctAnswer: "Aby zapewnić stabilność społeczną i sprawiedliwość"
  },
  {
    id: 67,
    question: "Dlaczego ludzie ustanawiają własne zasady?",
    options: [
      "Aby lepiej kontrolować innych",
      "Aby zaspokoić swoje potrzeby moralne i utrzymać wewnętrzny porządek",
      "Aby unikać odpowiedzialności",
      "Aby zyskać przewagę konkurencyjną"
    ],
    correctAnswer: "Aby zaspokoić swoje potrzeby moralne i utrzymać wewnętrzny porządek"
  },
  {
    id: 68,
    question: "Czy zwierzęta mają poczucie niesprawiedliwości?",
    options: [
      "Nie, zwierzęta nie mają zdolności do odczuwania niesprawiedliwości",
      "Tak, niektóre zwierzęta wykazują zachowania sugerujące poczucie niesprawiedliwości",
      "Tylko ssaki mają poczucie niesprawiedliwości",
      "Tylko zwierzęta żyjące w grupach społecznych odczuwają niesprawiedliwość"
    ],
    correctAnswer: "Tak, niektóre zwierzęta wykazują zachowania sugerujące poczucie niesprawiedliwości"
  },
  {
    id: 69,
    question: "Jak rozwój gospodarki wpływa na etyczne zachowania społeczeństw?",
    options: [
      "Społeczeństwa stają się mniej etyczne, ponieważ rośnie materializm",
      "Społeczeństwa stają się bardziej etyczne, ponieważ rośnie świadomość społeczna",
      "Rozwój gospodarki nie ma wpływu na etyczne zachowania społeczeństw",
      "Społeczeństwa stają się bardziej etyczne tylko w krajach rozwiniętych"
    ],
    correctAnswer: "Społeczeństwa stają się bardziej etyczne, ponieważ rośnie świadomość społeczna"
  },
  {
    id: 70,
    question: "Piramida Maslowa a moralność: jak zaspokajanie podstawowych potrzeb wpływa na etykę?",
    options: [
      "Zaspokojanie podstawowych potrzeb nie wpływa na etykę",
      "Ludzie stają się mniej etyczni w miarę zaspokajania podstawowych potrzeb",
      "Ludzie stają się bardziej zaangażowani w działania etyczne w miarę zaspokajania podstawowych potrzeb",
      "Piramida Maslowa nie ma związku z moralnością"
    ],
    correctAnswer: "Ludzie stają się bardziej zaangażowani w działania etyczne w miarę zaspokajania podstawowych potrzeb"
  },
  {
    id: 71,
    question: "Jak reputacja wpływa na zdolności działania jednostki?",
    options: [
      "Dobra reputacja zmniejsza zdolności działania",
      "Dobra reputacja zwiększa zaufanie i możliwości współpracy",
      "Reputacja nie ma wpływu na zdolności działania jednostki",
      "Dobra reputacja zwiększa tylko zdolności finansowe jednostki"
    ],
    correctAnswer: "Dobra reputacja zwiększa zaufanie i możliwości współpracy"
  },
  {
    id: 72,
    question: "Czy oszuści kiedyś znikną ze społeczeństwa?",
    options: [
      "Tak, ponieważ społeczeństwo stanie się całkowicie etyczne",
      "Nie, oszuści zawsze będą częścią społeczeństwa zgodnie z teorią gier",
      "Tak, ponieważ oszukiwanie stanie się nieopłacalne",
      "Nie, ponieważ społeczeństwo nie potrafi ich wykryć"
    ],
    correctAnswer: "Nie, oszuści zawsze będą częścią społeczeństwa zgodnie z teorią gier"
  },
  {
    id: 73,
    question: "Jak perspektywa długoterminowych kontaktów wpływa na zachowanie jednostek?",
    options: [
      "Sprzyja krótkoterminowemu zyskowi",
      "Sprzyja współpracy i budowaniu zaufania",
      "Zniechęca do współpracy",
      "Nie ma wpływu na zachowanie jednostek"
    ],
    correctAnswer: "Sprzyja współpracy i budowaniu zaufania"
  },
  {
    id: 74,
    question: "Jakie są zasady moralnego przywództwa według S. Robinsona?",
    options: [
      "Uczciwość, sprawiedliwość, manipulowanie informacją",
      "Uczciwość, prawdomówność, sprawiedliwość, promowanie wartości etycznych",
      "Prawdomówność, manipulowanie informacją, sprawiedliwość",
      "Uczciwość, prawdomówność, brak sprawiedliwości"
    ],
    correctAnswer: "Uczciwość, prawdomówność, sprawiedliwość, promowanie wartości etycznych"
  },
  {
    id: 75,
    question: "Czym jest kapitał społeczny?",
    options: [
      "Siecią relacji i zaufania, która obniża koszty operacyjne firmy",
      "Środkiem do zwiększenia zysków finansowych",
      "Systemem kontroli nad pracownikami",
      "Zasobem materialnym firmy"
    ],
    correctAnswer: "Środkiem do zwiększenia zysków finansowych"
  },
  {
    id: 76,
    question: "Jaka jest różnica między filantropią a CSR?",
    options: [
      "Filantropia to systematyczne działania, CSR to jednorazowe działania charytatywne",
      "Filantropia to dobrowolne działania charytatywne, CSR to systematyczne działania wbudowane w strategię firmy",
      "Filantropia i CSR to to samo",
      "CSR to dobrowolne działania charytatywne, filantropia to systematyczne działania"
    ],
    correctAnswer: "Filantropia to dobrowolne działania charytatywne, CSR to systematyczne działania wbudowane w strategię firmy"
  },
  {
    id: 77,
    question: "Jakie są korzyści z wdrażania CSR w firmie?",
    options: [
      "Zwiększenie kosztów operacyjnych",
      "Poprawa wizerunku firmy, wzrost zaufania interesariuszy, zwiększenie lojalności klientów",
      "Zmniejszenie lojalności klientów",
      "Zwiększenie konfliktów z interesariuszami"
    ],
    correctAnswer: "Poprawa wizerunku firmy, wzrost zaufania interesariuszy, zwiększenie lojalności klientów"
  },
  {
    id: 78,
    question: "Jakie są elementy programów etycznych w firmach?",
    options: [
      "Brak systemu nagród i sankcji",
      "Identyfikacja wartości, misja firmy, kodeks etyczny, programy kształcenia etycznego, audyty etyczne",
      "Tylko kodeks etyczny",
      "Wyłącznie audyty etyczne"
    ],
    correctAnswer: "Identyfikacja wartości, misja firmy, kodeks etyczny, programy kształcenia etycznego, audyty etyczne"
  },
  {
    id: 79,
    question: "Jak reputacja wpływa na wyniki firmy?",
    options: [
      "Nie ma wpływu na wyniki firmy",
      "Poprawia wyniki finansowe poprzez zwiększenie zaufania i lojalności klientów",
      "Zmniejsza wyniki finansowe",
      "Zwiększa koszty operacyjne"
    ],
    correctAnswer: "Poprawia wyniki finansowe poprzez zwiększenie zaufania i lojalności klientów"
  },
  {
    id: 80,
    question: "Jakie są kluczowe aspekty zrównoważonego rozwoju?",
    options: [
      "Tylko ekonomiczne aspekty",
      "Ekonomiczne, społeczne i środowiskowe aspekty",
      "Tylko społeczne aspekty",
      "Tylko środowiskowe aspekty"
    ],
    correctAnswer: "Ekonomiczne, społeczne i środowiskowe aspekty"
  },
  {
    id: 81,
    question: "Co to jest \"mięsień moralny\"?",
    options: [
      "Zdolność do fizycznej pracy",
      "Zdolność do podejmowania etycznych decyzji, którą można rozwijać poprzez codzienne działania",
      "Zdolność do zarządzania finansami",
      "Zdolność do manipulowania informacją"
    ],
    correctAnswer: "Zdolność do podejmowania etycznych decyzji, którą można rozwijać poprzez codzienne działania"
  },
  {
    id: 82,
    question: "Jakie są zasady etycznego przywództwa według S. Robinsona?",
    options: [
      "Uczciwość, prawdomówność, sprawiedliwość, promowanie wartości etycznych",
      "Manipulowanie informacją, uczciwość, brak sprawiedliwości",
      "Sprawiedliwość, prawdomówność, manipulowanie informacją",
      "Uczciwość, brak prawdomówności, promowanie wartości etycznych"
    ],
    correctAnswer: "Manipulowanie informacją, uczciwość, brak sprawiedliwości"
  },
  {
    id: 83,
    question: "Czym jest kapitał relacyjny?",
    options: [
      "Środkiem finansowym firmy",
      "Elementem kapitału strukturalnego obejmującym relacje przedsiębiorstwa z innymi podmiotami, wyrażone miarami satysfakcji, trwałością kontaktów i wsparciem finansowym",
      "Systemem kontroli nad pracownikami",
      "Zasobem materialnym firmy"
    ],
    correctAnswer: "Elementem kapitału strukturalnego obejmującym relacje przedsiębiorstwa z innymi podmiotami, wyrażone miarami satysfakcji, trwałością kontaktów i wsparciem finansowym"
  },
  {
    id: 84,
    question: "Jakie są korzyści z dobrego raportowania CSR?",
    options: [
      "Zwiększenie kosztów operacyjnych",
      "Przejrzystość i zaufanie interesariuszy",
      "Zmniejszenie przejrzystości",
      "Brak korzyści"
    ],
    correctAnswer: "Przejrzystość i zaufanie interesariuszy"
  },
  {
    id: 85,
    question: "Jakie są korzyści z wdrażania CSR w strategii firmy?",
    options: [
      "Zwiększenie zysków krótkoterminowych",
      "Poprawa wizerunku, zwiększenie lojalności klientów, lepsze zarządzanie ryzykiem",
      "Zmniejszenie kosztów operacyjnych w krótkim okresie",
      "Brak korzyści długoterminowych"
    ],
    correctAnswer: "Poprawa wizerunku, zwiększenie lojalności klientów, lepsze zarządzanie ryzykiem"
  },
  {
    id: 86,
    question: "Co oznacza \"niewidzialna ręka rynku\"?",
    options: [
      "System regulacji rządowych",
      "Mechanizm rynkowy, w którym jednostki działając we własnym interesie przyczyniają się do dobra społecznego",
      "Rola przedsiębiorstw w regulowaniu rynku",
      "Wpływ korporacji na gospodarkę światową"
    ],
    correctAnswer: "Mechanizm rynkowy, w którym jednostki działając we własnym interesie przyczyniają się do dobra społecznego"
  },
  {
    id: 87,
    question: "Jakie są typowe działania w ramach programów etycznych?",
    options: [
      "Brak działań edukacyjnych",
      "Identyfikacja wartości, ustalenie misji firmy, opracowanie kodeksu etycznego, programy kształcenia, audyty etyczne",
      "Tylko organizacja wydarzeń promocyjnych",
      "Ograniczenie działań do zarządzania ryzykiem"
    ],
    correctAnswer: "Identyfikacja wartości, ustalenie misji firmy, opracowanie kodeksu etycznego, programy kształcenia, audyty etyczne"
  },
  {
    id: 88,
    question: "Czym charakteryzuje się klasyczne podejście do odpowiedzialności przedsiębiorcy?",
    options: [
      "Dbanie o maksymalizację zysków krótkoterminowych",
      "Wiara, że przedsiębiorcy powinni dbać o to, aby ich towary i usługi były jak tańsze, bez dodatkowych obowiązków społecznych",
      "Skupienie się na zrównoważonym rozwoju",
      "Angażowanie się w działania filantropijne"
    ],
    correctAnswer: "Wiara, że przedsiębiorcy powinni dbać o to, aby ich towary i usługi były jak tańsze, bez dodatkowych obowiązków społecznych"
  },
  {
    id: 89,
    question: "Co to jest kapitał ludzki w modelu Skandii?",
    options: [
      "Aktywa rzeczowe firmy",
      "Zdolność pracowników do wykonywania powierzonych im zadań, kultura organizacyjna, wartości i filozofia firmy",
      "Zasoby finansowe firmy",
      "System kontroli nad pracownikami"
    ],
    correctAnswer: "Zdolność pracowników do wykonywania powierzonych im zadań, kultura organizacyjna, wartości i filozofia firmy"
  },
  {
    id: 90,
    question: "Jakie są zasady moralnego przywództwa?",
    options: [
      "Manipulowanie informacją i ukrywanie błędów",
      "Prawdomówność, uczciwość, wyrozumiałość, sprawiedliwość, promowanie wartości etycznych",
      "Ignorowanie etycznych standardów",
      "Skupienie się wyłącznie na zyskach firmy"
    ],
    correctAnswer: "Prawdomówność, uczciwość, wyrozumiałość, sprawiedliwość, promowanie wartości etycznych"
  },
  {
    id: 91,
    question: "Czym jest CSR (Corporate Social Responsibility)?",
    options: [
      "Działalnością charytatywną firm",
      "Odpowiedzialnością przedsiębiorstw za wpływ ich działalności na społeczeństwo i środowisko",
      "Strategią marketingową",
      "Przepisem prawnym narzuconym firmom"
    ],
    correctAnswer: "Odpowiedzialnością przedsiębiorstw za wpływ ich działalności na społeczeństwo i środowisko"
  },
  {
    id: 92,
    question: "Jakie są korzyści z posiadania dobrego kodeksu etycznego?",
    options: [
      "Zwiększenie przypadków łapownictwa",
      "Zmniejszenie konfliktów interesów, zwiększenie zaufania klientów, poprawa reputacji firmy",
      "Ograniczenie komunikacji wewnętrznej",
      "Brak znaczących korzyści"
    ],
    correctAnswer: "Zmniejszenie konfliktów interesów, zwiększenie zaufania klientów, poprawa reputacji firmy"
  },
  {
    id: 93,
    question: "Jakie są standardy raportowania CSR?",
    options: [
      "Brak standardów raportowania",
      "GRI (Global Reporting Initiative), Integrated Reporting (IR)",
      "Tylko lokalne standardy",
      "Standardy opracowane wyłącznie przez firmy"
    ],
    correctAnswer: "GRI (Global Reporting Initiative), Integrated Reporting (IR)"
  },
  {
    id: 94,
    question: "Jakie są korzyści z wdrażania programów etycznych?",
    options: [
      "Zwiększenie kosztów operacyjnych",
      "Poprawa kultury organizacyjnej, zwiększenie zaangażowania pracowników, budowanie zaufania",
      "Ograniczenie innowacyjności",
      "Zmniejszenie lojalności pracowników"
    ],
    correctAnswer: "Poprawa kultury organizacyjnej, zwiększenie zaangażowania pracowników, budowanie zaufania"
  },
  {
    id: 95,
    question: "Jakie są konsekwencje złamania obietnic przez firmę?",
    options: [
      "Zwiększenie zaufania pracowników",
      "Spadek zaufania i lojalności pracowników, negatywny wpływ na zaangażowanie",
      "Poprawa wizerunku firmy",
      "Zwiększenie lojalności klientów"
    ],
    correctAnswer: "Spadek zaufania i lojalności pracowników, negatywny wpływ na zaangażowanie"
  },
  {
    id: 96,
    question: "Jakie są zasady etycznego przywództwa?",
    options: [
      "Uczciwość, prawdomówność, sprawiedliwość, promowanie wartości etycznych",
      "Manipulowanie informacją, ukrywanie błędów",
      "Ignorowanie potrzeb pracowników",
      "Skupienie się wyłącznie na wynikach finansowych"
    ],
    correctAnswer: "Ignorowanie potrzeb pracowników"
  },
  {
    id: 97,
    question: "Jak kapitał społeczny wpływa na działalność firm?",
    options: [
      "Zwiększa koszty operacyjne",
      "Obniża koszty operacyjne, zwiększa efektywność współpracy, buduje zaufanie",
      "Nie ma wpływu na działalność firm",
      "Ogranicza innowacyjność"
    ],
    correctAnswer: "Obniża koszty operacyjne, zwiększa efektywność współpracy, buduje zaufanie"
  },
  {
    id: 98,
    question: "Jakie są cele odpowiedzialnego biznesu?",
    options: [
      "Maksymalizacja krótkoterminowych zysków",
      "Powiększanie wartości firmy, dbałość o relacje z interesariuszami, działanie zgodne z prawem i normami etycznymi",
      "Skupienie się wyłącznie na marketingu",
      "Ignorowanie wpływu na społeczeństwo i środowisko"
    ],
    correctAnswer: "Powiększanie wartości firmy, dbałość o relacje z interesariuszami, działanie zgodne z prawem i normami etycznymi"
  },
  {
    id: 99,
    question: "Jakie są zasady raportowania CSR?",
    options: [
      "Raportowanie wyłącznie działań finansowych",
      "Transparentność, uwzględnienie działań społecznych i środowiskowych, standardy takie jak GRI",
      "Brak konieczności raportowania",
      "Raportowanie tylko działań marketingowych"
    ],
    correctAnswer: "Transparentność, uwzględnienie działań społecznych i środowiskowych, standardy takie jak GRI"
  },
  {
    id: 100,
    question: "Jakie są korzyści z budowania zaufania w firmie?",
    options: [
      "Zwiększenie konfliktów wewnętrznych",
      "Zwiększenie efektywności współpracy, lojalności pracowników, pozytywny wizerunek",
      "Zmniejszenie lojalności klientów",
      "Brak korzyści"
    ],
    correctAnswer: "Zwiększenie efektywności współpracy, lojalności pracowników, pozytywny wizerunek"
  },
  {
    id: 101,
    question: "Czym jest zrównoważony rozwój?",
    options: [
      "Koncentracją wyłącznie na aspektach ekonomicznych",
      "Balansowaniem potrzeb ekonomicznych, społecznych i środowiskowych w celu zapewnienia trwałego rozwoju",
      "Ograniczeniem działań społecznych",
      "Skupieniem się wyłącznie na ochronie środowiska"
    ],
    correctAnswer: "Balansowaniem potrzeb ekonomicznych, społecznych i środowiskowych w celu zapewnienia trwałego rozwoju"
  },
  {
    id: 102,
    question: "Jakie są role interesariuszy w firmie?",
    options: [
      "Wewnętrzni interesariusze to klienci i dostawcy",
      "Wewnętrzni interesariusze to menedżerowie i pracownicy, a zewnętrzni to właściciele, klienci, dostawcy, społeczność lokalna, rządy i organizacje pozarządowe",
      "Interesariusze nie mają wpływu na działalność firmy",
      "Wszyscy interesariusze są równie ważni"
    ],
    correctAnswer: "Wewnętrzni interesariusze to menedżerowie i pracownicy, a zewnętrzni to właściciele, klienci, dostawcy, społeczność lokalna, rządy i organizacje pozarządowe"
  },
  {
    id: 103,
    question: "Jakie są kluczowe komponenty zrównoważonego rozwoju?",
    options: [
      "Tylko aspekty ekonomiczne",
      "Ekonomiczne, społeczne i środowiskowe aspekty (triple bottom line)",
      "Tylko aspekty społeczne",
      "Tylko aspekty środowiskowe"
    ],
    correctAnswer: "Ekonomiczne, społeczne i środowiskowe aspekty (triple bottom line)"
  },
  {
    id: 104,
    question: "Jakie są korzyści z posiadania dobrego kodeksu etycznego w firmie?",
    options: [
      "Zwiększenie przypadków łapownictwa",
      "Zmniejszenie konfliktów interesów, zwiększenie zaufania klientów, poprawa reputacji firmy",
      "Ograniczenie komunikacji wewnętrznej",
      "Brak znaczących korzyści"
    ],
    correctAnswer: "Zmniejszenie konfliktów interesów, zwiększenie zaufania klientów, poprawa reputacji firmy"
  },
  {
    id: 105,
    question: "Która z poniższych definicji najlepiej opisuje Społeczną Odpowiedzialność Biznesu (CSR)?",
    options: [
      "Strategia polegająca wyłącznie na maksymalizacji zysków akcjonariuszy",
      "Odpowiedzialność organizacji za wpływ jej decyzji i działań na społeczeństwo i środowisko, realizowana przez przejrzyste i etyczne postępowanie",
      "Kampania reklamowa mająca poprawić wizerunek marki",
      "Działania filantropijne prowadzone jednorazowo w okresie świątecznym"
    ],
    correctAnswer: "Odpowiedzialność organizacji za wpływ jej decyzji i działań na społeczeństwo i środowisko, realizowana przez przejrzyste i etyczne postępowanie"
  },
  {
    id: 106,
    question: "Filantropia w klasycznym ujęciu oznacza:",
    options: [
      "Obowiązkowy podatek charytatywny",
      "Bezosobową automatyczną wpłatę na cele społeczne",
      "Bezinteresowną pomoc finansową lub materialną udzielaną potrzebującym",
      "System raportowania niefinansowego"
    ],
    correctAnswer: "Bezinteresowną pomoc finansową lub materialną udzielaną potrzebującym"
  },
  {
    id: 107,
    question: "Która z poniższych grup jest kluczowym interesariuszem przedsiębiorstwa?",
    options: [
      "Właściciele i inwestorzy",
      "Kolor ścian w biurze",
      "Modele samochodów pracowników",
      "Wystrój recepcji"
    ],
    correctAnswer: "Właściciele i inwestorzy"
  },
  {
    id: 108,
    question: "Program „Sociology Department” Henry’ego Forda był przykładem:",
    options: [
      "Dobrowolnej opieki socjalnej bez ingerencji w życie prywatne pracowników",
      "Intensywnej ingerencji w życie prywatne pracowników pod pozorem troski o dobrostan",
      "Programu mentoringowego dla kadry kierowniczej",
      "Projektu wolontariatu pracowniczego w społeczności lokalnej"
    ],
    correctAnswer: "Intensywnej ingerencji w życie prywatne pracowników pod pozorem troski o dobrostan"
  },
  {
    id: 109,
    question: "Główny cel filozofii Kyosei promowanej przez Caux Round Table to:",
    options: [
      "Maksymalizacja krótkoterminowego zysku kosztem interesariuszy",
      "Wspólne dobro realizowane poprzez współpracę i odpowiedzialność biznesu",
      "Eliminacja konkurencji na rynku",
      "Zastąpienie wszystkich regulacji rynkowych jednym globalnym kodeksem"
    ],
    correctAnswer: "Wspólne dobro realizowane poprzez współpracę i odpowiedzialność biznesu"
  },
  {
    id: 110,
    question: "Caux Round Table została założona w roku:",
    options: [
      "1975",
      "1986",
      "1999",
      "2005"
    ],
    correctAnswer: "1986"
  },
  {
    id: 111,
    question: "Ile podstawowych zasad obejmuje UN Global Compact?",
    options: [
      "4",
      "10",
      "17",
      "26"
    ],
    correctAnswer: "10"
  },
  {
    id: 112,
    question: "Norma PN-ISO 26000 dotyczy:",
    options: [
      "Systemów zarządzania bezpieczeństwem informacji",
      "Społecznej odpowiedzialności organizacji",
      "Kontroli jakości w produkcji spożywczej",
      "Zarządzania energią w budynkach"
    ],
    correctAnswer: "Społecznej odpowiedzialności organizacji"
  },
  {
    id: 113,
    question: "Agenda 2030 ONZ obejmuje:",
    options: [
      "5 Zasad Zrównoważonego Rozwoju",
      "17 Celów Zrównoważonego Rozwoju (SDGs)",
      "12 Filtrów Inwestycyjnych",
      "1 Globalny Indeks Dobrobytu"
    ],
    correctAnswer: "17 Celów Zrównoważonego Rozwoju (SDGs)"
  },
  {
    id: 114,
    question: "Pojęcie „społeczeństwa ryzyka” oznacza, że:",
    options: [
      "Jednostkowe racjonalne działania mogą prowadzić do zbiorowych konsekwencji destabilizujących system",
      "Indywidualne decyzje biznesowe zawsze minimalizują ryzyka społeczne",
      "Firmy ponoszą odpowiedzialność wyłącznie za własne zyski",
      "Ryzyko społeczne dotyczy tylko sektora finansowego"
    ],
    correctAnswer: "Jednostkowe racjonalne działania mogą prowadzić do zbiorowych konsekwencji destabilizujących system"
  },
  {
    id: 115,
    question: "Który z poniższych elementów NIE należy do zestawu ESG?",
    options: [
      "Environmental",
      "Social",
      "Governance",
      "Fiscal"
    ],
    correctAnswer: "Fiscal"
  },
  {
    id: 116,
    question: "Raportowanie niefinansowe obejmuje przede wszystkim:",
    options: [
      "Wyłącznie informacje o przychodach i kosztach",
      "Dane środowiskowe, społeczne i dotyczące ładu korporacyjnego",
      "Aktualny kurs akcji spółki",
      "Listę wszystkich kontrahentów"
    ],
    correctAnswer: "Dane środowiskowe, społeczne i dotyczące ładu korporacyjnego"
  },
  {
    id: 117,
    question: "Aby działalność gospodarcza mogła zostać uznana za zrównoważoną według Taksonomii UE, musi:",
    options: [
      "Przynosić największy przychód w sektorze",
      "Wnieść istotny wkład w co najmniej jeden z sześciu celów środowiskowych oraz nie wyrządzać poważnych szkód pozostałym",
      "Uzyskać zgodę co najmniej dwóch państw członkowskich",
      "Być zwolniona z podatku dochodowego"
    ],
    correctAnswer: "Wnieść istotny wkład w co najmniej jeden z sześciu celów środowiskowych oraz nie wyrządzać poważnych szkód pozostałym"
  },
  {
    id: 118,
    question: "Dyrektywa CSRD wprowadza przede wszystkim:",
    options: [
      "Obowiązek publikacji kwartalnych wyników finansowych w euro",
      "Rozszerzone i ujednolicone raportowanie informacji o zrównoważonym rozwoju",
      "Zakaz reklamy produktów wysokoemisyjnych",
      "Zwolnienie mikroprzedsiębiorstw z podatku VAT"
    ],
    correctAnswer: "Rozszerzone i ujednolicone raportowanie informacji o zrównoważonym rozwoju"
  },
  {
    id: 119,
    question: "Pakiet Omnibus (2025) ma na celu przede wszystkim:",
    options: [
      "Zaostrzenie wymogów raportowania ESG",
      "Zmniejszenie biurokracji i odroczenie części obowiązków raportowych",
      "Wprowadzenie globalnego podatku węglowego",
      "Likwidację standardów ESRS"
    ],
    correctAnswer: "Zmniejszenie biurokracji i odroczenie części obowiązków raportowych"
  },
  {
    id: 120,
    question: "Greenwashing to praktyka polegająca na:",
    options: [
      "Dokładnym audycie środowiskowym przedsiębiorstwa",
      "Nieuzasadnionym używaniu twierdzeń o przyjazności środowisku w komunikacji marketingowej",
      "Budowie instalacji do recyklingu",
      "Uzyskaniu certyfikatu ISO 14001"
    ],
    correctAnswer: "Nieuzasadnionym używaniu twierdzeń o przyjazności środowisku w komunikacji marketingowej"
  },
  {
    id: 121,
    question: "Który z poniższych czynników NAJMNIEJ wpływa na postępowanie etyczne pracowników?",
    options: [
      "Cele organizacji",
      "Reputacja firmy",
      "Obowiązujące prawo",
      "Kolor firmowego logo"
    ],
    correctAnswer: "Kolor firmowego logo"
  },
  {
    id: 122,
    question: "Warunkiem skuteczności programu etycznego jest:",
    options: [
      "Zgodność deklaracji z praktyką organizacji",
      "Brak struktury i spontaniczne działania",
      "Całkowite pomijanie procesu doboru kadr",
      "Unikanie komunikacji wewnętrznej"
    ],
    correctAnswer: "Zgodność deklaracji z praktyką organizacji"
  },
  {
    id: 123,
    question: "Wzorcowy program etyczny według Kapteina powinien charakteryzować się m.in.:",
    options: [
      "Jasnością, wsparciem i możliwością sankcjonowania naruszeń",
      "Minimalnym poziomem komunikacji",
      "Brakiem przejrzystości, by chronić dane",
      "Koncentracją wyłącznie na wynikach finansowych"
    ],
    correctAnswer: "Jasnością, wsparciem i możliwością sankcjonowania naruszeń"
  },
  {
    id: 124,
    question: "Etyka obowiązku w organizacji kładzie nacisk głównie na:",
    options: [
      "Inspirację wartościami i przywództwo etyczne",
      "Unikanie problemów poprzez stosowanie norm, kodeksów i procedur",
      "Innowacyjne projekty społeczne",
      "Budowanie zaangażowania interesariuszy w decyzje strategiczne"
    ],
    correctAnswer: "Unikanie problemów poprzez stosowanie norm, kodeksów i procedur"
  },
  {
    id: 125,
    question: "Etyka aspiracji w organizacji skupia się przede wszystkim na:",
    options: [
      "Wdrożeniu jak największej liczby procedur",
      "Rozwoju wartości, szkoleń etycznych i przywództwa opartego na wartościach",
      "Braku formalnych kodeksów etycznych",
      "Minimalizowaniu komunikacji wewnętrznej"
    ],
    correctAnswer: "Rozwoju wartości, szkoleń etycznych i przywództwa opartego na wartościach"
  },
  {
    id: 126,
    question: "W kontekście infrastruktury etycznej sankcje za naruszenia kodeksu etycznego powinny być:",
    options: [
      "Rozmyte i uznaniowe",
      "Wyłącznie symboliczne",
      "Jasno określone i proporcjonalne do naruszeń",
      "Zarezerwowane tylko dla kadry najwyższego szczebla"
    ],
    correctAnswer: "Jasno określone i proporcjonalne do naruszeń"
  },
  {
    id: 127,
    question: "Model Kohlberga opisuje:",
    options: [
      "Stadia rozwoju moralnego jednostki",
      "Fazy cyklu życia produktu",
      "Etapy wdrożenia systemu jakości",
      "Poziomy zarządzania kryzysowego"
    ],
    correctAnswer: "Stadia rozwoju moralnego jednostki"
  },
  {
    id: 128,
    question: "Który z poniższych przykładów najlepiej ilustruje dylemat etyczny w biznesie?",
    options: [
      "Rozliczenie faktury zgodnie z terminem",
      "Konflikt lojalności wobec pracodawcy z obowiązkiem ujawnienia nieprawidłowości",
      "Przestrzeganie przepisów BHP",
      "Uzyskanie nowego certyfikatu jakości"
    ],
    correctAnswer: "Konflikt lojalności wobec pracodawcy z obowiązkiem ujawnienia nieprawidłowości"
  },
  {
    id: 129,
    question: "Przedsiębiorczość społeczna różni się od tradycyjnej tym, że:",
    options: [
      "Koncentruje się na tworzeniu wartości społecznej, a nie wyłącznie finansowej",
      "Nie może generować zysku",
      "Ogranicza się do działalności charytatywnej",
      "Nie wymaga innowacyjności"
    ],
    correctAnswer: "Koncentruje się na tworzeniu wartości społecznej, a nie wyłącznie finansowej"
  },
  {
    id: 130,
    question: "Przykład Enronu w kontekście wartości korporacyjnych pokazuje przede wszystkim:",
    options: [
      "Wzorcowe wdrożenie kodeksu etycznego",
      "Rozbieżność między deklarowanymi wartościami a faktycznymi działaniami zarządu",
      "Skuteczność programu przeciwdziałania korupcji",
      "Transparentność raportowania ESG"
    ],
    correctAnswer: "Rozbieżność między deklarowanymi wartościami a faktycznymi działaniami zarządu"
  },
];

export interface QuestionRange {
  id: number;
  label: string;
  startId: number;
  endId: number;
}

export const questionRanges: QuestionRange[] = [
  { id: 1, label: "Pytania 1 - 10", startId: 1, endId: 10 },
  { id: 2, label: "Pytania 11 - 20", startId: 11, endId: 20 },
  { id: 3, label: "Pytania 21 - 30", startId: 21, endId: 30 },
  { id: 4, label: "Pytania 31 - 40", startId: 31, endId: 40 },
  { id: 5, label: "Pytania 41 - 50", startId: 41, endId: 50 },
  { id: 6, label: "Pytania 51 - 60", startId: 51, endId: 60 },
  { id: 7, label: "Pytania 61 - 70", startId: 61, endId: 70 },
  { id: 8, label: "Pytania 71 - 80", startId: 71, endId: 80 },
  { id: 9, label: "Pytania 81 - 90", startId: 81, endId: 90 },
  { id: 10, label: "Pytania 91 - 100", startId: 91, endId: 100 },
  { id: 11, label: "Pytania 101 - 110", startId: 101, endId: 110 },
  { id: 12, label: "Pytania 111 - 120", startId: 111, endId: 120 },
  { id: 13, label: "Pytania 121 - 130", startId: 121, endId: 130 },
];

export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  // Jeśli nie ma wybranych zakresów, zwróć wszystkie pytania
  if (selectedRangeIds.length === 0) return questions;

  const selectedRanges = questionRanges.filter(range =>
    selectedRangeIds.includes(range.id)
  );

  return questions.filter(question =>
    selectedRanges.some(range =>
      question.id >= range.startId && question.id <= range.endId
    )
  );
};

