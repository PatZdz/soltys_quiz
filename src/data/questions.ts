// quiz.ts

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
    question: "„Right to be left alone”, czyli prawo do pozostawienia w spokoju (samemu sobie), to…?",
    options: [
      "Definicja prywatności o nadal silnym wpływie na opinię publiczną",
      "Definicja marketingu opartego na danych behawioralnych",
      "Definicja koncepcji Big Data w organizacjach",
      "Definicja postępu technologicznego w transformacji cyfrowej"
    ],
    correctAnswer: "Definicja prywatności o nadal silnym wpływie na opinię publiczną"
  },
  {
    id: 2,
    question: "Która z innowacji spośród prezentowanych w „innovation matrix” określa wysoki wpływ na rynek i niską nowość technologiczną?",
    options: [
      "Innowacja przyrostowa",
      "Innowacja radykalna",
      "Innowacja zakłócająca",
      "Innowacja zrównoważona"
    ],
    correctAnswer: "Innowacja zakłócająca"
  },
  {
    id: 3,
    question: "Autonomiczne samochody będą zasilać bazy danych o informacjach z otoczenia (sensorach), dotyczących użytkowników (preferencje, zainteresowania) i wspierających kwestie etyczne. O jakim zjawisku tu mówimy?",
    options: [
      "Gromadzeniu danych przez pojazdy autonomiczne",
      "Gromadzeniu danych tylko o wypadkach drogowych",
      "Gromadzeniu danych wyłącznie o kosztach paliwa",
      "Gromadzeniu danych z tylko jednego źródła (GPS)"
    ],
    correctAnswer: "Gromadzeniu danych przez pojazdy autonomiczne"
  },
  {
    id: 4,
    question: "Ciągłe zwiększanie konkurencyjności istniejących produktów/usług poprzez obniżanie kosztów i ulepszanie/dodawanie funkcji to…?",
    options: [
      "Innowacja radykalna",
      "Innowacja przyrostowa",
      "Innowacja zakłócająca",
      "Efekt sieciowy"
    ],
    correctAnswer: "Innowacja przyrostowa"
  },
  {
    id: 5,
    question: "Pomiar dojrzałości cyfrowej organizacji służy…?",
    options: [
      "Przeprowadzeniu audytu podatkowego",
      "Wskazaniu stanu zaawansowania cyfrowej transformacji w danej firmie",
      "Tylko selekcji pracowników do zwolnień",
      "Analizie łańcucha dostaw wyłącznie w aspekcie logistycznym"
    ],
    correctAnswer: "Wskazaniu stanu zaawansowania cyfrowej transformacji w danej firmie"
  },
  {
    id: 6,
    question: "Pogląd na sztuczną inteligencję jako technologię produkcyjną, usprawniającą zadania związane z danymi, wywodzi się z idei…?",
    options: [
      "„Dane jako siła robocza”",
      "„Ludzie jako kapitał najważniejszy”",
      "„Technologia jako zasób ograniczony”",
      "„Marketing jako główne źródło przewagi”"
    ],
    correctAnswer: "„Dane jako siła robocza”"
  },
  {
    id: 7,
    question: "Czym jest efektywny insight konsumencki, jeśli dotyczy m.in. oczekiwań i poglądów klientów oraz opisuje go zasada 4R?",
    options: [
      "Ogólną charakterystyką trendów rynkowych w mediach społecznościowych",
      "Powierzchowną analizą nawyków zakupowych",
      "Dogłębną analizą motywacji i preferencji klientów",
      "Zbiorem reguł etycznych dotyczących prywatności"
    ],
    correctAnswer: "Dogłębną analizą motywacji i preferencji klientów"
  },
  {
    id: 8,
    question: "Jednym z najpopularniejszych rozwiązań w produkcji z udziałem AI, służącym do oceny stanu sprzętu i przewidywania napraw lub awarii, jest…?",
    options: [
      "Predykcyjne utrzymanie ruchu",
      "E-commerce",
      "Marketing automation",
      "Druk 3D"
    ],
    correctAnswer: "Predykcyjne utrzymanie ruchu"
  },
  {
    id: 9,
    question: "Jakie kluczowe technologie napędzają rozwój Przemysłu 4.0? (3 odpowiedzi poprawne)",
    options: [
      "Internet Rzeczy (IoT), druk 3D, AR, VR, rozwiązania mobilne, chmura",
      "Technologie wspierające procesy cyfrowej transformacji",
      "Roboty współpracujące, narzędzia do wirtualnej symulacji (cyfrowy bliźniak)",
      "Książki w wersji papierowej zamiast narzędzi cyfrowych"
    ],
    correctAnswer: [
      "Internet Rzeczy (IoT), druk 3D, AR, VR, rozwiązania mobilne, chmura",
      "Technologie wspierające procesy cyfrowej transformacji",
      "Roboty współpracujące, narzędzia do wirtualnej symulacji (cyfrowy bliźniak)"
    ]
  },
  {
    id: 10,
    question: "Do technologicznych fundamentów cyfrowej transformacji można zaliczyć…? (2 odpowiedzi poprawne)",
    options: [
      "Wykładniczy wzrost mocy obliczeniowej",
      "Coraz szybsze połączenia internetowe",
      "Zmniejszanie znaczenia analityki danych",
      "Całkowitą rezygnację z danych jakościowych"
    ],
    correctAnswer: [
      "Wykładniczy wzrost mocy obliczeniowej",
      "Coraz szybsze połączenia internetowe"
    ]
  },
  {
    id: 11,
    question: "Czym jest Przemysł 4.0? (3 odpowiedzi poprawne)",
    options: [
      "Zmianą paradygmatu z produkcji masowej na kastomizowaną",
      "Koncepcją zmian organizacyjnych/technologicznych (łańcuch wartości, modele biznesowe)",
      "Dogłębną reorganizacją łańcucha wartości, produktów i modelu biznesowego",
      "Wyłącznie automatyzacją procesów pakowania towarów"
    ],
    correctAnswer: [
      "Zmianą paradygmatu z produkcji masowej na kastomizowaną",
      "Koncepcją zmian organizacyjnych/technologicznych (łańcuch wartości, modele biznesowe)",
      "Dogłębną reorganizacją łańcucha wartości, produktów i modelu biznesowego"
    ]
  },
  {
    id: 12,
    question: "Kogo nazywamy „digital natives”?",
    options: [
      "Osoby przyzwyczajone do płatności wyłącznie gotówką",
      "Osoby urodzone w czasie powszechnego stosowania Internetu i nowoczesnych urządzeń",
      "Osoby stroniące od technologii w życiu codziennym",
      "Wszystkich użytkowników komputerów powyżej 70. roku życia"
    ],
    correctAnswer: "Osoby urodzone w czasie powszechnego stosowania Internetu i nowoczesnych urządzeń"
  },
  {
    id: 13,
    question: "Firma oferująca streaming filmów online rozpoczyna zbieranie danych od klientów w celu analizy, rekomendacji i ofert. Jaki to przykład?",
    options: [
      "Przykład cyfryzacji magazynu",
      "Przykład transformacji analogowej",
      "Przykład e-handlu B2B",
      "Przykład cyfrowej transformacji"
    ],
    correctAnswer: "Przykład cyfrowej transformacji"
  },
  {
    id: 14,
    question: "Jakie są zasady projektowania Przemysłu 4.0? (wiele odpowiedzi poprawne)",
    options: [
      "Interoperacyjność, wirtualizacja, decentralizacja",
      "Praca w czasie rzeczywistym, orientacja na usługi, modularność",
      "Wyłącznie proste czynności manualne",
      "Brak dostosowania do potrzeb klienta"
    ],
    correctAnswer: [
      "Interoperacyjność, wirtualizacja, decentralizacja",
      "Praca w czasie rzeczywistym, orientacja na usługi, modularność"
    ]
  },
  {
    id: 15,
    question: "Marketing 5.0 wg Kotlera skupia się głównie na…?",
    options: [
      "Rozwoju technologicznym",
      "Drukowaniu ulotek w dużej ilości",
      "Telemarketingu z wykorzystaniem list papierowych",
      "Rezygnacji z analityki cyfrowej"
    ],
    correctAnswer: "Rozwoju technologicznym"
  },
  {
    id: 16,
    question: "Cyfrowy bliźniak (Digital Twin) to…? (2 odpowiedzi poprawne)",
    options: [
      "Wirtualne odwzorowanie świata fizycznego w czasie rzeczywistym",
      "Wirtualna kopia obiektów z możliwością symulacji procesów",
      "System obsługi wyłącznie faktur papierowych",
      "Metoda inwentaryzacji ręcznej"
    ],
    correctAnswer: [
      "Wirtualne odwzorowanie świata fizycznego w czasie rzeczywistym",
      "Wirtualna kopia obiektów z możliwością symulacji procesów"
    ]
  },
  {
    id: 17,
    question: "Cyfrowa transformacja nie dokonałaby się, gdyby nie rozwój w obszarze…? (3 odpowiedzi poprawne)",
    options: [
      "Gromadzenia i przechowywania danych",
      "Zwiększenia mocy obliczeniowej",
      "Poprawy szybkości i przepustowości łączy",
      "Migracji wyłącznie na system faksów"
    ],
    correctAnswer: [
      "Gromadzenia i przechowywania danych",
      "Zwiększenia mocy obliczeniowej",
      "Poprawy szybkości i przepustowości łączy"
    ]
  },
  {
    id: 18,
    question: "Do celów cyfryzacji NIE należy…? (2 odpowiedzi poprawne)",
    options: [
      "Rozbudowa wewnętrznego działu IT",
      "Konwersja wszystkich informacji do formatu cyfrowego",
      "Poprawa efektywności procesów biznesowych w środowisku cyfrowym",
      "Zwiększenie innowacyjności oraz konkurencyjności dzięki technologiom"
    ],
    correctAnswer: [
      "Rozbudowa wewnętrznego działu IT",
      "Konwersja wszystkich informacji do formatu cyfrowego"
    ]
  },
  {
    id: 19,
    question: "Marketing 5.0 jest najbardziej skoncentrowany na…?",
    options: [
      "Wycofaniu się z kampanii internetowych",
      "Zastosowaniu nowych technologii",
      "Zmniejszeniu roli marketerów w organizacji",
      "Unikaniu analizy big data"
    ],
    correctAnswer: "Zastosowaniu nowych technologii"
  },
  {
    id: 20,
    question: "Czy sztuczną inteligencję można wykorzystać do tworzenia treści (opisy, logo, posty itd.)?",
    options: [
      "Nie, ponieważ AI służy wyłącznie do analizowania danych sprzedażowych",
      "Tak",
      "Tylko w obszarze zdjęć profilowych",
      "Wyłącznie do raportów finansowych"
    ],
    correctAnswer: "Tak"
  },
  {
    id: 21,
    question: "Czym jest Blockchain?",
    options: [
      "Zcentralizowaną bazą danych",
      "Bazą danych o charakterze zdecentralizowanym i rozproszonym",
      "Systemem do tworzenia stron internetowych",
      "Jedynie formatem pliku tekstowego"
    ],
    correctAnswer: "Bazą danych o charakterze zdecentralizowanym i rozproszonym"
  },
  {
    id: 22,
    question: "„Jakość danych ma kluczowe znaczenie; brudne dane mają małą wartość i jest ona kluczowa dla oceny gospodarczej pozycji regionów/krajów.” To definicja danych jako…?",
    options: [
      "Paliwa",
      "Waluty",
      "Złota",
      "Zbędnego zasobu"
    ],
    correctAnswer: "Złota"
  },
  {
    id: 23,
    question: "Czym jest transformacja cyfrowa?",
    options: [
      "Procesem przejścia organizacji na nowe sposoby myślenia/działania przy wsparciu technologii cyfrowych",
      "Zastąpieniem wszystkich ludzi robotami",
      "Wdrożeniem prostego systemu komputerowego do archiwizacji dokumentów",
      "Migracją firm do formatu open space"
    ],
    correctAnswer: "Procesem przejścia organizacji na nowe sposoby myślenia/działania przy wsparciu technologii cyfrowych"
  },
  {
    id: 24,
    question: "Czy celem implementacji AI i IoT w przedsiębiorstwach jest całkowite zastąpienie pracy ludzkiej?",
    options: [
      "Tak, ponieważ roboty są zawsze wydajniejsze",
      "Nie, technologie mają wspierać pracowników",
      "Tak, dotyczy to wszystkich branż bez wyjątku",
      "Nie, celem jest wyłącznie optymalizacja magazynów"
    ],
    correctAnswer: "Nie, technologie mają wspierać pracowników"
  },
  {
    id: 25,
    question: "Wzrost popularności interfejsu głosowego (Amazon Echo, Siri, Google Home) i sieciowej kooperacji (współpraca na żądanie) pojawiły się wraz z rozwojem…?",
    options: [
      "Web 1.0",
      "Web 2.0",
      "Web 3.0",
      "Telemarketingu"
    ],
    correctAnswer: "Web 3.0"
  },
  {
    id: 26,
    question: "Jakim mianem określamy połączenie produktu, aplikacji, analityki i internetu/sieci?",
    options: [
      "Interconnected",
      "Offline-Only",
      "Monolityczna architektura",
      "System papierowych zgłoszeń"
    ],
    correctAnswer: "Interconnected"
  },
  {
    id: 27,
    question: "Jakie są zalety sieci 5G dla społeczeństwa i biznesu? (2 odpowiedzi poprawne)",
    options: [
      "Większa przepustowość (obsługa wielu urządzeń jednocześnie)",
      "Ultra stabilność",
      "Wolniejsze przesyłanie danych",
      "Konieczność cofnięcia się do starszych protokołów"
    ],
    correctAnswer: [
      "Większa przepustowość (obsługa wielu urządzeń jednocześnie)",
      "Ultra stabilność"
    ]
  },
  {
    id: 28,
    question: "Najważniejszy (służący) punkt wyjścia w marketingu 5.0 to…?",
    options: [
      "Data-driven marketing",
      "Drukowanie ulotek w dużej ilości",
      "Losowe testowanie produktów w pustych magazynach",
      "Ignorowanie analiz rynkowych"
    ],
    correctAnswer: "Data-driven marketing"
  },
  {
    id: 29,
    question: "Jak określamy cyfrową transformację (z punktu widzenia organizacji)?",
    options: [
      "Przejściem wyłącznie na telemarketing",
      "Sposobem wdrażania nowych technologii do modeli biznesowych, procesów i obsługi klienta",
      "Kupowaniem zawsze najnowszych komputerów bez zmiany procesów",
      "Wdrożeniem godzin pracy zdalnej bez żadnych innych działań"
    ],
    correctAnswer: "Sposobem wdrażania nowych technologii do modeli biznesowych, procesów i obsługi klienta"
  },
  {
    id: 30,
    question: "Jakie podejście do budowania relacji z klientem jest właściwe dla cyfrowej transformacji marketingu?",
    options: [
      "Nastawienie na 3P (people, product, promotion)",
      "Wyłącznie redukcja kosztów komunikacji",
      "Zastąpienie działu marketingu działem telefonicznej infolinii",
      "Koncentracja na jednym kanale offline"
    ],
    correctAnswer: "Nastawienie na 3P (people, product, promotion)"
  },
  {
    id: 31,
    question: "Organizacja dojrzała cyfrowo to taka, w której…? (2 odpowiedzi poprawne)",
    options: [
      "Pracownicy mają wysokie kompetencje cyfrowe",
      "Automatyzacja procesów stosowana jest wszędzie, gdzie to możliwe",
      "Unika się wszelkich innowacji cyfrowych",
      "Nie ma działu IT"
    ],
    correctAnswer: [
      "Pracownicy mają wysokie kompetencje cyfrowe",
      "Automatyzacja procesów stosowana jest wszędzie, gdzie to możliwe"
    ]
  },
  {
    id: 32,
    question: "Czemu służy cel komparatywny modelu dojrzałości cyfrowej?",
    options: [
      "Wyłącznie redukcji liczby pracowników",
      "Ocena aktualnego stanu organizacji i jej potencjału według określonych kryteriów",
      "Eliminacji zadań analitycznych",
      "Zamrożeniu środków na inwestycje"
    ],
    correctAnswer: "Ocena aktualnego stanu organizacji i jej potencjału według określonych kryteriów"
  },
  {
    id: 33,
    question: "Co opisuje model 5A przedstawiony przez Phillipa Kotlera? (2 odpowiedzi poprawne)",
    options: [
      "Proces, jaki przechodzą klienci szukający konkretnych marek",
      "Proces pozyskiwania klientów przez marki",
      "Schemat działań w logistyce magazynowej",
      "Metodę rekrutacji w dziale IT"
    ],
    correctAnswer: [
      "Proces, jaki przechodzą klienci szukający konkretnych marek",
      "Proces pozyskiwania klientów przez marki"
    ]
  },
  {
    id: 34,
    question: "„Internet, który był głównie siecią tylko do odczytu”, to Web…?",
    options: [
      "Web 1.0",
      "Web 2.0",
      "Web 3.0",
      "Web 4.0"
    ],
    correctAnswer: "Web 1.0"
  },
  {
    id: 35,
    question: "„Konwergencja świata fizycznego, cyfrowego i biologicznego” to kluczowy aspekt…?",
    options: [
      "Trzeciej rewolucji przemysłowej",
      "Drugiej rewolucji przemysłowej",
      "Czwartej rewolucji przemysłowej",
      "Wyłącznie rewolucji agrarnej"
    ],
    correctAnswer: "Czwartej rewolucji przemysłowej"
  },
  {
    id: 36,
    question: "WINTEL to skrót opisujący współpracę pomiędzy Windows i Intel, opierającą się na triadzie…? (2 odpowiedzi poprawne)",
    options: [
      "Wszechmocnej sile obliczeniowej (bardziej wymagające systemy)",
      "Algorytmach (większa ilość danych do przetworzenia)",
      "Nacisku na analogowe procesy zamiast cyfrowych",
      "Stałego ograniczania mocy obliczeniowej"
    ],
    correctAnswer: [
      "Wszechmocnej sile obliczeniowej (bardziej wymagające systemy)",
      "Algorytmach (większa ilość danych do przetworzenia)"
    ]
  },
  {
    id: 37,
    question: "Kontrola dostępu do wybranych obszarów „ja” (pojęcie prywatności) wywodzi się z…?",
    options: [
      "Matematyki",
      "Psychologii",
      "Marketingu 4.0",
      "Przemysłu 4.0"
    ],
    correctAnswer: "Psychologii"
  },
  {
    id: 38,
    question: "Które czynniki przyczyniły się do rozwoju robotyki?",
    options: [
      "Rezygnacja z produkcji komponentów do smartfonów",
      "Smartfony i druk 3D (tańsze i lepsze komponenty)",
      "Zamknięcie rynków technologicznych na świat",
      "Wyłącznie rozwój branży motoryzacyjnej"
    ],
    correctAnswer: "Smartfony i druk 3D (tańsze i lepsze komponenty)"
  },
  {
    id: 39,
    question: "Eliminowanie z łańcucha wartości zbędnych elementów, np. redukcja roli pośredników w wyniku cyfryzacji, to działanie innowacji…?",
    options: [
      "Przyrostowej",
      "Zrównoważonej",
      "Zakłócającej",
      "Rynkowej"
    ],
    correctAnswer: "Zakłócającej"
  },
  {
    id: 40,
    question: "Wgranie dokumentu PDF z dysku twardego do chmury i udostępnienie go wielu osobom w celu analizy danych to przykład…?",
    options: [
      "Druk 3D",
      "Cyfryzacji",
      "Marketingu 5.0",
      "Wirtualnej rzeczywistości"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 41,
    question: "Cyfryzacja nie dokonałaby się, gdyby nie rozwój w obszarach…?",
    options: [
      "Tylko w branży spożywczej",
      "Wyłącznie w marketingu",
      "Wszystkich wymienionych w modelu (IT, infrastruktura, łączność itp.)",
      "Wyłącznie w obszarze logistyki"
    ],
    correctAnswer: "Wszystkich wymienionych w modelu (IT, infrastruktura, łączność itp.)"
  },
  {
    id: 42,
    question: "Skanowanie papierowego dokumentu i zapisanie go w formacie PDF na dysku twardym to idealny przykład…?",
    options: [
      "Digitalizacji",
      "Transformacji analogowej",
      "Radykalnej innowacji",
      "Zero-waste marketing"
    ],
    correctAnswer: "Digitalizacji"
  },
  {
    id: 43,
    question: "Aplikacja wprowadzona przez NIKE, która pomaga wybrać najlepszy rodzaj buta na podstawie skanu stopy, to przykład…?",
    options: [
      "Cyfryzacji",
      "Telemarketingu",
      "Metody produkcji w czasie rzeczywistym",
      "Analizy Big Data w biologii"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 44,
    question: "Udoskonalane wciąż smartfony i inne branże oparte na rozwoju technologii mobilnych (rozwijanych części do telefonów) to przykład…?",
    options: [
      "Innowacji przyrostowej",
      "Innowacji radykalnej",
      "Innowacji zrównoważonej",
      "Metody offline"
    ],
    correctAnswer: "Innowacji zrównoważonej"
  },
  {
    id: 45,
    question: "Jedną z najbardziej znanych postaci w debacie o prywatności, która w 2013 r. ujawniła tajne informacje z Agencji Bezpieczeństwa Narodowego, jest…?",
    options: [
      "Mark Zuckerberg",
      "Steve Jobs",
      "Edward Snowden",
      "Jeff Bezos"
    ],
    correctAnswer: "Edward Snowden"
  },
  {
    id: 46,
    question: "Czym jest dojrzałość cyfrowa? (wiele odpowiedzi poprawne)",
    options: [
      "Określa stan i dynamikę transformacji cyfrowej",
      "Odzwierciedla zwinność i umiejętność organizacji do wykorzystywania rozwoju technologicznego",
      "Jest mierzalna",
      "Dotyczy jedynie firmy z branży odzieżowej"
    ],
    correctAnswer: [
      "Określa stan i dynamikę transformacji cyfrowej",
      "Odzwierciedla zwinność i umiejętność organizacji do wykorzystywania rozwoju technologicznego",
      "Jest mierzalna"
    ]
  },
  {
    id: 47,
    question: "Według raportu Deloitte Digital Transformation Executive Survey 2018, najbardziej dojrzałą cyfrowo branżą jest…?",
    options: [
      "Edukacja",
      "Technologia, media i komunikacja",
      "Rolnictwo",
      "Budownictwo"
    ],
    correctAnswer: "Technologia, media i komunikacja"
  },
  {
    id: 48,
    question: "Efekt sieciowy przy platformizacji oznacza…?",
    options: [
      "Zmniejszanie liczby użytkowników wraz ze wzrostem wartości platformy",
      "Pętlę sprzężenia zwrotnego – im większa wartość platformy, tym więcej użytkowników",
      "Rezygnację z platform cyfrowych na rzecz sklepów stacjonarnych",
      "Brak zależności między liczbą użytkowników a wartością platformy"
    ],
    correctAnswer: "Pętlę sprzężenia zwrotnego – im większa wartość platformy, tym więcej użytkowników"
  },
  {
    id: 49,
    question: "„Technologie tzw. next-tech” to…?",
    options: [
      "Zbiór tradycyjnych procesów manualnych",
      "Grupa technologii odtwarzających możliwości ludzkie (materiały, zdolności)",
      "Metody zarządzania zapasami w magazynie",
      "Technologie oparte wyłącznie na maszynach parowych"
    ],
    correctAnswer: "Grupa technologii odtwarzających możliwości ludzkie (materiały, zdolności)"
  },
  {
    id: 50,
    question: "Zasadę 4V wykorzystuje się do…?",
    options: [
      "Określania cech Big Data (ilość, zmienność, różnorodność, wartość)",
      "Projektowania fizycznej przestrzeni w fabryce",
      "Analizy wrażeń wzrokowych w reklamie",
      "Ustalania wizji i wartości firmy"
    ],
    correctAnswer: "Określania cech Big Data (ilość, zmienność, różnorodność, wartość)"
  },
  {
    id: 51,
    question: "Kim jest prosumer?",
    options: [
      "Konsumentem 4.0",
      "Wyłącznie pracownikiem działu HR",
      "Osobą obsługującą maszynę CNC",
      "Audytorem wewnętrznym zajmującym się jakością"
    ],
    correctAnswer: "Konsumentem 4.0"
  },
  {
    id: 52,
    question: "Na czym polega agile marketing?",
    options: [
      "Na niekontrolowanym wprowadzaniu zmian bez planu",
      "Na wykorzystaniu zdecentralizowanych, wielofunkcyjnych zespołów do szybkiego rozwoju i testowania",
      "Na wykluczeniu testów i weryfikacji",
      "Na ograniczeniu kreatywności w kampaniach"
    ],
    correctAnswer: "Na wykorzystaniu zdecentralizowanych, wielofunkcyjnych zespołów do szybkiego rozwoju i testowania"
  },
  {
    id: 53,
    question: "Co tworzy model 5A przedstawiony przez Philipa Kotlera? (2 odpowiedzi poprawne)",
    options: [
      "Proces, jaki przechodzą klienci w poszukiwaniu konkretnych marek",
      "Proces pozyskiwania klientów przez marki",
      "Metoda liczenia wynagrodzeń w dziale kadr",
      "System monitorowania pracy maszyn"
    ],
    correctAnswer: [
      "Proces, jaki przechodzą klienci w poszukiwaniu konkretnych marek",
      "Proces pozyskiwania klientów przez marki"
    ]
  },
  {
    id: 54,
    question: "Urządzenie oferujące śledzenie floty GPS w czasie rzeczywistym oraz monitorowanie stanu pojazdów i wydajności kierowców to przykład…?",
    options: [
      "Inteligentnego urządzenia (Smart Device)",
      "Niefunkcjonalnej zabawki",
      "Zwykłego kalkulatora",
      "Narzędzia do analogowego pomiaru odległości"
    ],
    correctAnswer: "Inteligentnego urządzenia (Smart Device)"
  },
  {
    id: 55,
    question: "„Firmy z branży e-commerce przenoszą główny punkt ciężkości z PC na urządzenia mobilne, więc więcej przychodów generują platformy mobilne.” To przykład…?",
    options: [
      "Rezygnacji z technologii mobilnych",
      "Cyfryzacji",
      "Nadmiernej automatyzacji",
      "Zastępowania kanału online kanałem offline"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 56,
    question: "Filarami cyfrowej transformacji są…? (2 odpowiedzi poprawne)",
    options: [
      "Pamięć masowa",
      "Szerokość pasma komunikacyjnego",
      "Wyłącznie marketing offline",
      "Zastępowanie internetu kurierami"
    ],
    correctAnswer: [
      "Pamięć masowa",
      "Szerokość pasma komunikacyjnego"
    ]
  },
  {
    id: 57,
    question: "Prawo do bycia pozostawionym w spokoju jest…?",
    options: [
      "Jedną z pierwszych i bardzo wpływowych definicji prywatności",
      "Koncepcją związaną wyłącznie z robotyką",
      "Metodą analizy big data",
      "Prawem do testowania urządzeń"
    ],
    correctAnswer: "Jedną z pierwszych i bardzo wpływowych definicji prywatności"
  },
  {
    id: 58,
    question: "Konwersja wszelkich informacji do formatu cyfrowego to…?",
    options: [
      "Ręczne przepisywanie danych do zeszytu",
      "Telepraca",
      "Cyfryzacja",
      "Archiwizacja analogowa"
    ],
    correctAnswer: "Cyfryzacja"
  },
  {
    id: 59,
    question: "Który przykład nie zalicza się do modelu biznesowego?",
    options: [
      "Freemium",
      "Subskrypcja",
      "Churn",
      "Marketplace"
    ],
    correctAnswer: "Churn"
  },
  {
    id: 60,
    question: "Co oznacza termin „software is eating the world”?",
    options: [
      "Większość tradycyjnych branż jest transformowana przez oprogramowanie",
      "Oprogramowanie służy tylko do gier komputerowych",
      "Firmy przechodzą wyłącznie na ręczne procesy",
      "To hasło promujące powrót do produkcji analogowej"
    ],
    correctAnswer: "Większość tradycyjnych branż jest transformowana przez oprogramowanie"
  },
  {
    id: 61,
    question: "Które z poniższych firm opierają swój model biznesowy na zasadach peer-to-peer?",
    options: [
      "AirBnB, Uber, eBay",
      "Narodowe przedsiębiorstwo energetyczne",
      "Tradycyjny sklep spożywczy",
      "Lokalne kino studyjne"
    ],
    correctAnswer: "AirBnB, Uber, eBay"
  },
  {
    id: 62,
    question: "Jakie znaczenie ma pojęcie „dane jako waluta”?",
    options: [
      "Dane mają „narodowość” i reprezentują wartość w kontekście konkretnych regionów/krajów",
      "Dane służą tylko do prowadzenia księgowości",
      "Dane nie mają żadnej wartości ekonomicznej",
      "Dane to wyłącznie pliki tekstowe niezwiązane z pieniędzmi"
    ],
    correctAnswer: "Dane mają „narodowość” i reprezentują wartość w kontekście konkretnych regionów/krajów"
  },
  {
    id: 63,
    question: "„Technologie cyfrowe to bardzo wyjątkowy obszar, który charakteryzuje się…”? (3 odpowiedzi poprawne)",
    options: [
      "Decentralizacją",
      "Wzrostem wykładniczym",
      "Koncentracją",
      "Zastojem i brakiem postępu"
    ],
    correctAnswer: [
      "Decentralizacją",
      "Wzrostem wykładniczym",
      "Koncentracją"
    ]
  },
  {
    id: 64,
    question: "Solucjonizm w charakterze społecznym i politycznym odnosi się do przekonania, że…?",
    options: [
      "Wszystkie problemy da się rozwiązać technologią",
      "Żadne problemy nie mają rozwiązania",
      "Tylko kwestie finansowe można rozwiązać cyfrowo",
      "Rozwiązania cyfrowe nie mają znaczenia"
    ],
    correctAnswer: "Wszystkie problemy da się rozwiązać technologią"
  },
  {
    id: 65,
    question: "Twierdzenie „umożliwia on zwiększenie wydajności marketerów kontaktujących się z klientami poprzez wprowadzenie technologii cyfrowych (czatboty, wirtualni asystenci)” dotyczy…?",
    options: [
      "Marketingu rozszerzonego",
      "Wyłącznie reklamy zewnętrznej (billboardy)",
      "Zakazu używania sztucznej inteligencji",
      "Wycofania mediów społecznościowych"
    ],
    correctAnswer: "Marketingu rozszerzonego"
  },
  {
    id: 66,
    question: "Do trzech filarów transformacji cyfrowej NIE zalicza się…?",
    options: [
      "Sztucznej inteligencji",
      "Pamięci masowej",
      "Mocy obliczeniowej",
      "Szybkości przesyłu danych"
    ],
    correctAnswer: "Sztucznej inteligencji"
  },
  {
    id: 67,
    question: "Czym jest „klick and collect”?",
    options: [
      "Wyłącznie programem lojalnościowym",
      "Techniką umożliwiającą przeniesienie spersonalizowanych doświadczeń cyfrowych do świata fizycznego",
      "Metodą zapisywania dokumentów do PDF",
      "Kampanią mailingową"
    ],
    correctAnswer: "Techniką umożliwiającą przeniesienie spersonalizowanych doświadczeń cyfrowych do świata fizycznego"
  },
  {
    id: 68,
    question: "Jakie są główne cele regulacji dotyczących ochrony danych (np. RODO)? (3 odpowiedzi poprawne)",
    options: [
      "Wzmocnienie praw osób, których dane dotyczą",
      "Zwiększenie przejrzystości w gromadzeniu/wykorzystywaniu danych",
      "Ograniczenie przetwarzania danych",
      "Bezwarunkowe udostępnienie danych każdemu"
    ],
    correctAnswer: [
      "Wzmocnienie praw osób, których dane dotyczą",
      "Zwiększenie przejrzystości w gromadzeniu/wykorzystywaniu danych",
      "Ograniczenie przetwarzania danych"
    ]
  },
  {
    id: 69,
    question: "Zgodnie z koncepcją New 4C, konsument postrzega produkt/usługę przez pryzmat…? (3 elementy poprawne)",
    options: [
      "Możliwości współtworzenia",
      "Wygody zakupu",
      "Wydatku kosztu",
      "Braku personalizacji"
    ],
    correctAnswer: [
      "Możliwości współtworzenia",
      "Wygody zakupu",
      "Wydatku kosztu"
    ]
  },
  {
    id: 70,
    question: "Na jakie trzy grupy można podzielić technologie oferowane przez MarTech? (3 odpowiedzi poprawne)",
    options: [
      "Technologie stymulacyjne",
      "Technologie obliczeniowe",
      "Technologie analityczne",
      "Technologie stolarskie"
    ],
    correctAnswer: [
      "Technologie stymulacyjne",
      "Technologie obliczeniowe",
      "Technologie analityczne"
    ]
  },
  {
    id: 71,
    question: "Internet rzeczy (IoT) umożliwia…? (2 odpowiedzi poprawne)",
    options: [
      "Wzrost produktywności",
      "Ekspansję na nowe rynki",
      "Tylko lokalny dostęp do danych bez sieci",
      "Zastąpienie wszystkich urządzeń cyfrowych maszynami parowymi"
    ],
    correctAnswer: [
      "Wzrost produktywności",
      "Ekspansję na nowe rynki"
    ]
  },
  {
    id: 72,
    question: "Innowacja, która jest przełomem technologicznym, uznawana za radykalną, często przekształca branże i ma zdolność tworzenia nowego rynku. Jakie ma cechy? (2 odpowiedzi poprawne)",
    options: [
      "Duży wpływ na rynek",
      "Nowość w zakresie wysokich technologii",
      "Brak wpływu na funkcjonowanie sektora",
      "Wyłącznie drobne ulepszenia"
    ],
    correctAnswer: [
      "Duży wpływ na rynek",
      "Nowość w zakresie wysokich technologii"
    ]
  },
  {
    id: 73,
    question: "Co umożliwia dynamiczną optymalizację cen?",
    options: [
      "Drukarka laserowa",
      "Masowa wysyłka pocztowa",
      "Machine Learning",
      "Papierowe katalogi"
    ],
    correctAnswer: "Machine Learning"
  },
  {
    id: 74,
    question: "Który z elementów kampanii e‑mail marketingowej ma największe przełożenie na jej wskaźnik otwarć (OR)?",
    options: [
      "Tytuł (temat)",
      "Załącznik PDF",
      "Kolor tła wiadomości",
      "Wielkość czcionki w stopce"
    ],
    correctAnswer: "Tytuł (temat)"
  },
  {
    id: 75,
    question: "Czym charakteryzuje się Marketing 5.0 wg Kotlera? (3 odpowiedzi poprawne)",
    options: [
      "Wykorzystaniem technologii next-tech w działaniach marketingowych",
      "Oparciem na dwóch filarach – data-driven marketing i agile marketing",
      "Założeniem, że nowoczesne technologie są kluczowe do zaspokajania potrzeb klientów",
      "Całkowitą rezygnacją z analizy danych i fokusowanie się tylko na offline"
    ],
    correctAnswer: [
      "Wykorzystaniem technologii next-tech w działaniach marketingowych",
      "Oparciem na dwóch filarach – data-driven marketing i agile marketing",
      "Założeniem, że nowoczesne technologie są kluczowe do zaspokajania potrzeb klientów"
    ]
  },
  {
    id: 76,
    question: "Co może symbolizować szachownica w kontekście cyfrowej transformacji?",
    options: [
      "Strategiczne podejście do wdrażania technologii",
      "Brak kontroli nad procesami cyfryzacji",
      "Przestarzałe modele biznesowe",
      "Losowe decyzje technologiczne"
    ],
    correctAnswer: "Strategiczne podejście do wdrażania technologii"
  },
  {
    id: 77,
    question: "Czym charakteryzuje się Marketing 6.0?",
    options: [
      "Wykorzystuje sztuczną inteligencję i emocje konsumentów",
      "Skupia się tylko na mediach społecznościowych",
      "Koncentruje się wyłącznie na produktach fizycznych",
      "Rezygnuje z analizy danych klientów"
    ],
    correctAnswer: "Wykorzystuje sztuczną inteligencję i emocje konsumentów"
  },
  {
    id: 78,
    question: "Co oznacza Triada WIM w kontekście bezpieczeństwa?",
    options: [
      "Wartość, Innowacja, Marketing",
      "Władza, Inwigilacja, Manipulacja",
      "Poufność, Integralność, Dostępność",
      "Wiedza, Inteligencja, Mechanika"
    ],
    correctAnswer: "Poufność, Integralność, Dostępność"
  },
  {
    id: 79,
    question: "Które z poniższych to przykład cyberzagrożenia?",
    options: [
      "Phishing",
      "Legalne pobieranie oprogramowania",
      "Otwieranie stron rządowych",
      "Kupowanie sprzętu komputerowego"
    ],
    correctAnswer: "Phishing"
  },
  {
    id: 80,
    question: "Jak nazywa się wymiana dóbr/usług/pieniędzy między konsumentami?",
    options: [
      "Ekonomia współdzielenia",
      "Monopol",
      "Handel B2B (Business to Business)",
      "Prywatyzacja"
    ],
    correctAnswer: "Ekonomia współdzielenia"
  },
  {
    id: 81,
    question: "Czym jest insight konsumencki?",
    options: [
      "Analizą głębokich potrzeb klientów",
      "Opinią wyrażoną przez jednego klienta",
      "Wyłącznie danymi sprzedażowymi",
      "Sloganem reklamowym"
    ],
    correctAnswer: "Analizą głębokich potrzeb klientów"
  },
  {
    id: 82,
    question: "Czym jest technoutopia?",
    options: [
      "Wizją idealnego społeczeństwa dzięki technologii",
      "Rzeczywistością, w której technologia jest zakazana",
      "Formą ekologicznego życia bez technologii",
      "Systemem, w którym technologia nie odgrywa istotnej roli"
    ],
    correctAnswer: "Wizją idealnego społeczeństwa dzięki technologii"
  },
  {
    id: 83,
    question: "Jaką różnicę ma VR względem AR?",
    options: [
      "VR przenosi użytkownika do wirtualnego świata, AR nakłada elementy na rzeczywisty",
      "VR i AR to dokładnie to samo",
      "VR działa tylko na smartfonach, AR tylko na komputerach",
      "AR jest używane tylko w filmach science-fiction"
    ],
    correctAnswer: "VR przenosi użytkownika do wirtualnego świata, AR nakłada elementy na rzeczywisty"
  }
];

export interface QuestionRange {
  id: number;
  label: string;
  startId: number;
  endId: number;
}

export const questionRanges: QuestionRange[] = [
  { id: 1, label: "Questions 1 - 10", startId: 1, endId: 10 },
  { id: 2, label: "Questions 11 - 20", startId: 11, endId: 20 },
  { id: 3, label: "Questions 21 - 30", startId: 21, endId: 30 },
  { id: 4, label: "Questions 31 - 40", startId: 31, endId: 40 },
  { id: 5, label: "Questions 41 - 50", startId: 41, endId: 50 },
  { id: 6, label: "Questions 51 - 60", startId: 51, endId: 60 },
  { id: 7, label: "Questions 61 - 70", startId: 61, endId: 70 },
  { id: 8, label: "Questions 71 - 80", startId: 71, endId: 80 },
  { id: 9, label: "Questions 81 - 83", startId: 81, endId: 83 }
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