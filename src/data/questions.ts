// quiz.ts

////////////////////////////////////////////////////////////////////////
// Interfejsy na podstawie przykładu
////////////////////////////////////////////////////////////////////////

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  // Jeśli jest jedna poprawna odpowiedź – string,
  // jeśli więcej niż jedna – tablica stringów.
  correctAnswer: string | string[];
}

export interface QuestionRange {
  id: number;
  label: string;
  startId: number;
  endId: number;
}

////////////////////////////////////////////////////////////////////////
// Pełna lista 161 pytań (1 do 161), w kolejności dokładnie takiej,
// jak w treści (zachowującej numerację i odpowiedzi).
////////////////////////////////////////////////////////////////////////

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Marketing 5.0 wg Kotlera (Wielokrotny wybór)",
    options: [
      "Polega na wykorzystaniu w działaniach marketingowych możliwości jakie daje technologia tzw. next-tech",
      "Oparty jest na dwóch filarach – data-driven marketing i agile marketing",
      "Zakłada, że jedynym sposobem zaspokajania potrzeb współczesnych nabywców jest zastosowanie nowoczesnych technologii na etapie tworzenia produktu",
      "Jest to model marketingowy odrzucający wszelkie innowacje technologiczne"
    ],
    correctAnswer: [
      "Polega na wykorzystaniu w działaniach marketingowych możliwości jakie daje technologia tzw. next-tech",
      "Oparty jest na dwóch filarach – data-driven marketing i agile marketing",
      "Zakłada, że jedynym sposobem zaspokajania potrzeb współczesnych nabywców jest zastosowanie nowoczesnych technologii na etapie tworzenia produktu"
    ]
  },
  {
    id: 2,
    question: "Który z elementów kampanii e-mail marketingowej ma największe przełożenie na jej OR?",
    options: [
      "Treść stopek w e-mailu",
      "Tytuł",
      "Waga załączników",
      "Rozdzielczość obrazków w wiadomości"
    ],
    correctAnswer: "Tytuł"
  },
  {
    id: 3,
    question: "Dynamiczną optymalizację cen umożliwia:",
    options: [
      "Wyszukiwarka internetowa",
      "Przeglądarka plików PDF",
      "Machine Learning",
      "Edytor tekstu"
    ],
    correctAnswer: "Machine Learning"
  },
  {
    id: 4,
    question: "Innowacja, która jest przełomem technologicznym, uznawana jest za radykalną i która często przekształca branże i ma zdolność do tworzenia nowego rynku ma (Wielokrotny wybór)",
    options: [
      "Duży wpływ na rynek",
      "Nowość w zakresie wysokich technologii",
      "Charakter wyłącznie organizacyjny",
      "Zawsze wykorzystuje tylko tradycyjne sposoby produkcji"
    ],
    correctAnswer: [
      "Duży wpływ na rynek",
      "Nowość w zakresie wysokich technologii"
    ]
  },
  {
    id: 5,
    question: "Internet rzeczy umożliwia (Wielokrotny wybór)",
    options: [
      "Wzrost produktywności",
      "Ekspansję na nowe rynki",
      "Zastąpienie wszystkich interakcji między ludźmi",
      "Całkowite wyeliminowanie usług w chmurze"
    ],
    correctAnswer: [
      "Wzrost produktywności",
      "Ekspansję na nowe rynki"
    ]
  },
  {
    id: 6,
    question: "Na jakie trzy grupy można podzielić technologie oferowane przez MarTech? (Wielokrotny wybór)",
    options: [
      "Technologie stymulacyjne",
      "Technologie obliczeniowe",
      "Technologie analityczne",
      "Technologie socjotechniczne, które wymuszają rezygnację z klasycznego marketingu"
    ],
    correctAnswer: [
      "Technologie stymulacyjne",
      "Technologie obliczeniowe",
      "Technologie analityczne"
    ]
  },
  {
    id: 7,
    question: "Zgodnie z koncepcją New 4c konsument postrzega produkt lub usługę jako instrument marketingu Mix poprzez pryzmat (Wielokrotny wybór)",
    options: [
      "Możliwości współtworzenia",
      "Wygody zakupu",
      "Wydatku kosztu",
      "Wyłączności i braku dostępu dla innych klientów"
    ],
    correctAnswer: [
      "Możliwości współtworzenia",
      "Wygody zakupu",
      "Wydatku kosztu"
    ]
  },
  {
    id: 8,
    question: "Jakie są główne cele regulacji dotyczących ochrony danych takich jak Rodo? (Wielokrotny wybór)",
    options: [
      "Wzmocnienie propos praw osób które dane dotyczą",
      "Zwiększenie przejrzystości w gromadzeniu i wykorzystaniu danych",
      "Ograniczenia przetwarzania danych",
      "Wykluczenie możliwości usuwania danych na żądanie"
    ],
    correctAnswer: [
      "Wzmocnienie propos praw osób które dane dotyczą",
      "Zwiększenie przejrzystości w gromadzeniu i wykorzystaniu danych",
      "Ograniczenia przetwarzania danych"
    ]
  },
  {
    id: 9,
    question: "Klick and collect to:",
    options: [
      "Technika umożliwiająca przenoszenie spersonalizowanych doświadczeń cyfrowych do świata fizycznego",
      "Metoda tworzenia stron internetowych w HTML",
      "Usługa bankowa związana z przelewami zagranicznymi",
      "Pomysł na marketing sensoryczny w kinach"
    ],
    correctAnswer: "Technika umożliwiająca przenoszenie spersonalizowanych doświadczeń cyfrowych do świata fizycznego"
  },
  {
    id: 10,
    question: "Do trzech filarów transformacji cyfrowej nie zalicza się:",
    options: [
      "Sztucznej inteligencji",
      "Zwiększonej przepustowości internetu",
      "Mocniejszej pamięci operacyjnej",
      "Usprawnionej analizy Big Data"
    ],
    correctAnswer: "Sztucznej inteligencji"
  },
  {
    id: 11,
    question: "Twierdzenie “umożliwia on zwiększenie wydajności marketerów kontaktujących się z klientami poprzez wprowadzenie technologii cyfrowych takich jak czat boty czy wirtualni asystenci” dotyczy:",
    options: [
      "Marketingu rozszerzonego",
      "Marketingu retrakcyjnego",
      "Marketingu 1.0",
      "Marketingu bezpośrednio-personalizowanego (ale bez technologii)"
    ],
    correctAnswer: "Marketingu rozszerzonego"
  },
  {
    id: 12,
    question: "Solucjonizm w charakterze społecznym i politycznym odnosi się do ideologii lub przekonania, że:",
    options: [
      "Wszystkie problemy można rozwiązać przy pomocy rozwiązań technologicznych",
      "Problemy rozwiązuje jedynie edukacja offline",
      "Każda inicjatywa technologiczna pogłębia kryzys społeczny",
      "Instytucje publiczne powinny unikać technologii"
    ],
    correctAnswer: "Wszystkie problemy można rozwiązać przy pomocy rozwiązań technologicznych"
  },
  {
    id: 13,
    question: "Technologie cyfrowe to bardzo wyjątkowy obszar który charakteryzuje się (Wielokrotny wybór)",
    options: [
      "Decentralizacją",
      "Wzrostem wykładniczym",
      "Koncentracją",
      "Całkowitą zależnością od tradycyjnych mediów analogowych"
    ],
    correctAnswer: [
      "Decentralizacją",
      "Wzrostem wykładniczym",
      "Koncentracją"
    ]
  },
  {
    id: 14,
    question: "Jakie znaczenie ma pojęcie dane jako waluta:",
    options: [
      "Dane mają narodowość",
      "Dane są wyłącznie formą płatności w banku centralnym",
      "Dane nie mają żadnej wartości wymiennej",
      "Dane to tylko dokumenty papierowe w archiwach"
    ],
    correctAnswer: "Dane mają narodowość"
  },
  {
    id: 15,
    question: "Które z poniższych firm opierają swój model biznesowy na zasadach peer to peer (Wielokrotny wybór)",
    options: [
      "AirBnb",
      "Uber",
      "eBay",
      "Amazon Web Services"
    ],
    correctAnswer: [
      "AirBnb",
      "Uber",
      "eBay"
    ]
  },
  {
    id: 16,
    question: "Co oznacza termin “software is eating the world”:",
    options: [
      "Większość tradycyjnych branży jest transformowane przez oprogramowanie",
      "Oprogramowanie przestaje mieć znaczenie w branżach usługowych",
      "Oprogramowanie musi być zastępowane innowacjami hardware",
      "Oprogramowanie dotyczy jedynie sektora gier komputerowych"
    ],
    correctAnswer: "Większość tradycyjnych branży jest transformowane przez oprogramowanie"
  },
  {
    id: 17,
    question: "Który przykład nie zalicza się do modelu biznesowego:",
    options: [
      "Churn",
      "Freemium",
      "Subskrypcja",
      "Marketplace"
    ],
    correctAnswer: "Churn"
  },
  {
    id: 18,
    question: "Konwersja wszelkich informacji do formatu cyfrowego to:",
    options: [
      "Cyfryzacja",
      "Outsourcing",
      "Uruchomienie technologii AR",
      "Proces podpisywania dokumentów kwalifikowanym podpisem"
    ],
    correctAnswer: "Cyfryzacja"
  },
  {
    id: 19,
    question: "Prawo do bycia pozostawionym w spokoju jest:",
    options: [
      "Jedną z pierwszych i bardzo wpływowych definicji prywatności",
      "Koncepcją prawną dotyczącą wyłącznie sfery publicznej",
      "Przepisem nakazującym firmom telekom zrywanie połączeń głosowych",
      "Zasadą marketingu dozwolonego jedynie w e-commerce"
    ],
    correctAnswer: "Jedną z pierwszych i bardzo wpływowych definicji prywatności"
  },
  {
    id: 20,
    question: "Filarami cyfrowej transformacji są (Wielokrotny wybór):",
    options: [
      "Pamięć masowa",
      "Szerokość pasma komunikacyjnego",
      "Wykluczenie mobilnych rozwiązań w przedsiębiorstwach",
      "Całkowita rezygnacja z baz danych offline"
    ],
    correctAnswer: [
      "Pamięć masowa",
      "Szerokość pasma komunikacyjnego"
    ]
  },
  {
    id: 21,
    question: "Pomyśl o tym, że firmy z branży e-commerce przeniosą swój punkt ciężkości z komputerów stacjonarnych na urządzenia mobilne i że większa część ich przychodów będzie generowana przez platformę mobilną. Jest to przykład:",
    options: [
      "Cyfryzacji",
      "Archiwizacji",
      "Procesu DevOps",
      "Globalnego spowolnienia technologicznego"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 22,
    question: "Urządzenie oferuje śledzenie floty GPS w czasie rzeczywistym, jednocześnie monitorując stan pojazdów i wydajność kierowców. To przykład:",
    options: [
      "Inteligentnego urządzenia (Smart device)",
      "Sprzętu analogowego",
      "Trywialnego nośnika danych",
      "Sieci korporacyjnej zamkniętego typu"
    ],
    correctAnswer: "Inteligentnego urządzenia (Smart device)"
  },
  {
    id: 23,
    question: "Co tworzy model 5A przedstawiony przez Philipa Kotlera?",
    options: [
      "Proces pozyskiwania klienta przez marki",
      "Zaawansowane systemy uczenia maszynowego",
      "Budowanie kultury organizacyjnej w duchu lean management",
      "Proces rekrutacji cyfrowych talentów"
    ],
    correctAnswer: "Proces pozyskiwania klienta przez marki"
  },
  {
    id: 24,
    question: "Agile marketing:",
    options: [
      "Polega na wykorzystaniu zdecentralizowanych, wielofunkcyjnych zespołów do konceptualizacji, projektowania, rozwoju i walidacji produktów oraz kampanii marketingowych w szybkim czasie",
      "Zastępuje wszystkie tradycyjne formy marketingu w sklepach offline",
      "Koncentruje się wyłącznie na marketingu mobilnym",
      "Jest to metoda tworzenia animacji 3D na potrzeby reklamy"
    ],
    correctAnswer: "Polega na wykorzystaniu zdecentralizowanych, wielofunkcyjnych zespołów do konceptualizacji, projektowania, rozwoju i walidacji produktów oraz kampanii marketingowych w szybkim czasie"
  },
  {
    id: 25,
    question: "Prosumer to:",
    options: [
      "Konsument 4.0",
      "Konsument, który nigdy nie korzysta z internetu",
      "Klient, który rezygnuje z jakichkolwiek form cyfrowej wymiany",
      "Pracownik marketingu w agencjach B2B"
    ],
    correctAnswer: "Konsument 4.0"
  },
  {
    id: 26,
    question: "Zasadę 4V wykorzystuje się do (Wielokrotny wybór):",
    options: [
      "Określania dużej ilości danych",
      "Określania dużej zmienności danych",
      "Określania dużej różnorodności danych",
      "Określania roli billboardów w kampaniach outdoor"
    ],
    correctAnswer: [
      "Określania dużej ilości danych",
      "Określania dużej zmienności danych",
      "Określania dużej różnorodności danych"
    ]
  },
  {
    id: 27,
    question: "Technologie tzw. next-tech to:",
    options: [
      "Grupa technologii, których celem jest odtworzenie możliwości ludzkich materiałów",
      "Metody czysto analogowe do zarządzania sieciami telekomunikacyjnymi",
      "Zwykłe tablety i smartfony sprzed kilkunastu lat",
      "Zbiór narzędzi do analizy ryzyka w inwestycjach giełdowych"
    ],
    correctAnswer: "Grupa technologii, których celem jest odtworzenie możliwości ludzkich materiałów"
  },
  {
    id: 28,
    question: "Efekt sieciowy występujący przy platformizacji oznacza:",
    options: [
      "Pętlę sprężenia zwrotnego, czyli większą wartość platformy, która tworzy rosnącą liczbę użytkowników",
      "Spadek liczby użytkowników wraz z rozwojem platformy",
      "Wyłącznie ograniczoną skalowalność",
      "Zawsze konieczność ograniczania dostępu do platformy"
    ],
    correctAnswer: "Pętlę sprężenia zwrotnego, czyli większą wartość platformy, która tworzy rosnącą liczbę użytkowników"
  },
  {
    id: 29,
    question: "Według raportu Deloitte Digital Transformation Executive Survey 2018 najbardziej dojrzałą cyfrowo branżą jest branża:",
    options: [
      "Technologia, media i komunikacja",
      "Rolnictwo i leśnictwo",
      "Usługi fryzjerskie",
      "Rybołówstwo i przetwórstwo mięsa"
    ],
    correctAnswer: "Technologia, media i komunikacja"
  },
  {
    id: 30,
    question: "Dojrzałość cyfrowa (Wielokrotny wybór):",
    options: [
      "Określa stan i dynamikę transformacji cyfrowej w organizacji",
      "Odzwierciedla zwinność i umiejętność organizacji do wykorzystywania na swoją korzyść rozwoju technologicznego",
      "Jest mierzalna",
      "Polega na rezygnacji z cyfrowych rozwiązań w marketingu"
    ],
    correctAnswer: [
      "Określa stan i dynamikę transformacji cyfrowej w organizacji",
      "Odzwierciedla zwinność i umiejętność organizacji do wykorzystywania na swoją korzyść rozwoju technologicznego",
      "Jest mierzalna"
    ]
  },
  {
    id: 31,
    question: "Jedną z najbardziej znanych postaci w publicznej debacie o prywatności, osobą która ujawniła wysoce tajne informacje z Agencji Bezpieczeństwa Narodowego w 2013r. i rozpoczęła dyskusję o skali inwigilacji jest:",
    options: [
      "Edward Snowden",
      "Mark Zuckerberg",
      "Tim Berners-Lee",
      "Elon Musk"
    ],
    correctAnswer: "Edward Snowden"
  },
  {
    id: 32,
    question: "Udoskonalane wciąż smartfony i inne branże bazujące na rozwoju technologii mobilnej oraz wciąż rozwijanych części do telefonów to przykład:",
    options: [
      "Innowacji zrównoważonej",
      "Innowacji radykalnej",
      "Całkowitego odejścia od smartfonów",
      "Tzw. retromarketingu"
    ],
    correctAnswer: "Innowacji zrównoważonej"
  },
  {
    id: 33,
    question: "Aplikacja wprowadzona przez NIKE, która pomaga wybrać najlepszy rodzaj buta na podstawie skanu nogi to przykład:",
    options: [
      "Cyfryzacji",
      "Marketingu offline",
      "Tworzenia pism urzędowych w formie cyfrowej",
      "Zwykłej usługi przymierzania obuwia stacjonarnie"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 34,
    question: "Skanowanie papierowego dokumentu i zapisanie go na dysku twardym komputera w formacie PDF to idealny przykład:",
    options: [
      "Digitalizacji",
      "Zawodnego backupu w chmurze",
      "Marketingu kontekstowego",
      "Archiwizacji taśm w formacie magnetycznym"
    ],
    correctAnswer: "Digitalizacji"
  },
  {
    id: 35,
    question: "Cyfryzacja nie dokonała by się gdyby nie rozwój w obszarach (Wielokrotny wybór):",
    options: [
      "Oprogramowania i systemów informatycznych",
      "Mocy obliczeniowej",
      "Łączności internetowej",
      "Wyłącznie usług pocztowych analogowych"
    ],
    correctAnswer: [
      "Oprogramowania i systemów informatycznych",
      "Mocy obliczeniowej",
      "Łączności internetowej"
    ]
  },
  {
    id: 36,
    question: "Wgranie dokumentu PDF z dysku twardego komputera do chmury i udostępnienie go wielu osobom w celu analizy danych, to przykład:",
    options: [
      "Cyfryzacji",
      "Wirtualnej rzeczywistości",
      "Utraty kontroli nad plikami",
      "Technologii blockchain"
    ],
    correctAnswer: "Cyfryzacji"
  },
  {
    id: 37,
    question: "Eliminowanie z łańcucha wartości zbędnych elementów, czego przykładem może być redukcja roli pośredników w wyniku postępującej cyfryzacji, to działanie innowacji:",
    options: [
      "Zakłócającej",
      "Przyrostowej",
      "Zrównoważonej",
      "Polegającej wyłącznie na zwiększeniu zasięgu offline"
    ],
    correctAnswer: "Zakłócającej"
  },
  {
    id: 38,
    question: "Które czynniki przyczyniły się do rozwoju robotyki:",
    options: [
      "Smartfony i druk 3D, ponieważ ich rozwój sprawia, że komponenty są tańsze",
      "Bardzo wysoka cena podzespołów i materiałów",
      "Zupełny brak zapotrzebowania na automatyzację",
      "Wyłącznie rozwój branży spożywczej"
    ],
    correctAnswer: "Smartfony i druk 3D, ponieważ ich rozwój sprawia, że komponenty są tańsze"
  },
  {
    id: 39,
    question: "Kontrola dostępu do wybranych obszarów ja to pojęcie prywatności wywodzące się z:",
    options: [
      "Psychologii",
      "Prawa farmaceutycznego",
      "Regulacji dot. reklamy TV",
      "Sportu wyczynowego"
    ],
    correctAnswer: "Psychologii"
  },
  {
    id: 40,
    question: "WINTEL to skrót opisujący współpracę pomiędzy Windows i Intel. Opiera się ona na triadzie, która obejmuje (Wielokrotny wybór):",
    options: [
      "Wszechmocną siłę obliczeniową – bardziej wymagające",
      "Algorytmy – większa ilość danych do przetworzenia",
      "Rezygnację z wszelkich platform mobilnych",
      "Obowiązek tworzenia wyłącznie oprogramowania open source"
    ],
    correctAnswer: [
      "Wszechmocną siłę obliczeniową – bardziej wymagające",
      "Algorytmy – większa ilość danych do przetworzenia"
    ]
  },
  {
    id: 41,
    question: "Konwergencja świata fizycznego, cyfrowego i biologicznego to kluczowy aspekt:",
    options: [
      "Czwartej rewolucji przemysłowej",
      "Drukowania dokumentów urzędowych",
      "Zastosowania telegrafu w nowoczesnych systemach",
      "Wyłącznie gamingu w chmurze"
    ],
    correctAnswer: "Czwartej rewolucji przemysłowej"
  },
  {
    id: 42,
    question: "Internet, który był głównie siecią tylko do odczytu to Web…?",
    options: [
      "Web 1.0",
      "Web 2.0",
      "Web 3.0",
      "Web 6.0"
    ],
    correctAnswer: "Web 1.0"
  },
  {
    id: 43,
    question: "Co opisuje model 5A przedstawiony przez Phillipa Koltera (Wielokrotny wybór):",
    options: [
      "Proces jaki przechodzą klienci szukający konkretnych marek",
      "Proces pozyskiwania klientów przez marki",
      "Analizę big data w branży rolniczej",
      "Tylko elementy brandingu offline"
    ],
    correctAnswer: [
      "Proces jaki przechodzą klienci szukający konkretnych marek",
      "Proces pozyskiwania klientów przez marki"
    ]
  },
  {
    id: 44,
    question: "Cel komparatywny modelu dojrzałości cyfrowej służy:",
    options: [
      "Ocenie aktualnego stanu danej organizacji lub procesu, gdzie aktualny potencjał analizowanego podmiotu oceniany jest względem określonych kryteriów",
      "Wyłącznie porównywaniu cen w sklepie",
      "Opisowi struktury kapitałowej firmy",
      "Zdefiniowaniu stylu komunikacji w mediach tradycyjnych"
    ],
    correctAnswer: "Ocenie aktualnego stanu danej organizacji lub procesu, gdzie aktualny potencjał analizowanego podmiotu oceniany jest względem określonych kryteriów"
  },
  {
    id: 45,
    question: "Organizacja dojrzała cyfrowo to taka, w której (Wielokrotny wybór):",
    options: [
      "Pracownicy mają wysokie kompetencje cyfrowe",
      "Automatyzacja procesów jest stosowana wszędzie tam, gdzie jest to możliwe",
      "Wszelkie działania wykluczają automatyzację",
      "Całkowicie rezygnuje się z analityki danych"
    ],
    correctAnswer: [
      "Pracownicy mają wysokie kompetencje cyfrowe",
      "Automatyzacja procesów jest stosowana wszędzie tam, gdzie jest to możliwe"
    ]
  },
  {
    id: 46,
    question: "Podejście do budowania relacji z klientem, które jest właściwe dla cyfrowej transformacji marketingu to:",
    options: [
      "Nastawienie na 3P (people, product, promotion)",
      "Wykorzystanie 3R (retention, resell, report)",
      "Koncentracja tylko na masowym spamie",
      "Uniwersalizacja działań offline"
    ],
    correctAnswer: "Nastawienie na 3P (people, product, promotion)"
  },
  {
    id: 47,
    question: "Cyfrową transformacją określamy:",
    options: [
      "Sposób w jaki organizacja przyjmuje i dostosowuje pojawiające się lub znaczące technologie do tworzenia nowych modeli biznesowych, przekształcania starszych systemów, kultury, struktur i ostatecznie zapewniania bogatszych doświadczeń klientów",
      "Tylko proces przenoszenia danych do Excela",
      "Zawsze automatyczne przejście z marketingu na offline",
      "Projekt tymczasowy prowadzony przez dział HR"
    ],
    correctAnswer: "Sposób w jaki organizacja przyjmuje i dostosowuje pojawiające się lub znaczące technologie do tworzenia nowych modeli biznesowych, przekształcania starszych systemów, kultury, struktur i ostatecznie zapewniania bogatszych doświadczeń klientów"
  },
  {
    id: 48,
    question: "Najważniejszy (służący) punkt wyjścia w marketingu 5.0 jest:",
    options: [
      "Data-driven marketing",
      "Eliminacja analityki danych",
      "Zakaz stosowania chatbotów",
      "Drukowane materiały offline"
    ],
    correctAnswer: "Data-driven marketing"
  },
  {
    id: 49,
    question: "Jakie są zalety sieci 5G dla społeczeństwa i biznesu? (Wielokrotny wybór)",
    options: [
      "Ma większą przepustowość, dzięki czemu może obsługiwać wiele wymagających aplikacji i urządzeń jednocześnie",
      "Jest ultra stabilna",
      "Zwiększa awaryjność sieci mobilnych",
      "Ogranicza transfer danych do 1 MB/s"
    ],
    correctAnswer: [
      "Ma większą przepustowość, dzięki czemu może obsługiwać wiele wymagających aplikacji i urządzeń jednocześnie",
      "Jest ultra stabilna"
    ]
  },
  {
    id: 50,
    question: "Jakim mianem określamy połączenie produktu, aplikacji, analityki i internetu/sieci?",
    options: [
      "Interconnected",
      "Immersive",
      "Minimalistic",
      "Blockchain-based"
    ],
    correctAnswer: "Interconnected"
  },
  {
    id: 51,
    question: "Wzrost popularności wykorzystywania interfejsu głosowego i intuicyjnej formy wyszukiwania informacji (Amazon Echo, Siri, Google Home) oraz możliwość sieciowej kooperacji (tzw. współpraca na żądanie) pojawiły się razem z rozwojem:",
    options: [
      "Web 3.0",
      "Web 1.0",
      "Web 4.0",
      "Telewizji cyfrowej"
    ],
    correctAnswer: "Web 3.0"
  },
  {
    id: 52,
    question: "Czy celem implementacji technologii, takich jak AI i loT w przedsiębiorstwach jest całkowite zastąpienie pracy ludzkiej?",
    options: [
      "Nie, technologie mają pomagać pracownikom",
      "Tak, ich celem jest wyeliminowanie czynnika ludzkiego",
      "Tylko w branży medycznej",
      "Tak, ale dotyczy to wyłącznie działów HR"
    ],
    correctAnswer: "Nie, technologie mają pomagać pracownikom"
  },
  {
    id: 53,
    question: "Transformacja cyfrowa to:",
    options: [
      "Proces, w ramach którego organizacje przechodzą w kierunku nowych sposobów myślenia i działania, dzięki wykorzystaniu potencjału mediów społecznościowych, technologii mobilnej i innych innowacyjnych rozwiązań cyfrowych",
      "Zastępowanie drukowanych ulotek wersją online w 10% przypadków",
      "Wyłącznie zmiana nazwy działu IT",
      "Ograniczanie dostępu do narzędzi cyfrowych"
    ],
    correctAnswer: "Proces, w ramach którego organizacje przechodzą w kierunku nowych sposobów myślenia i działania, dzięki wykorzystaniu potencjału mediów społecznościowych, technologii mobilnej i innych innowacyjnych rozwiązań cyfrowych"
  },
  {
    id: 54,
    question: "Jakość danych ma kluczowe znaczenie dla ich wartości, brudne dane mogą mieć bardzo małą wartość, a jest ona kluczowa dla oceny gospodarczej pozycji regionów/ krajów czy branży. To definicja danych jako:",
    options: [
      "Złota",
      "Ropy naftowej",
      "Nieważnej waluty",
      "Tylko papierowych archiwaliów"
    ],
    correctAnswer: "Złota"
  },
  {
    id: 55,
    question: "Blockchain to:",
    options: [
      "Baza danych, która ma zdecentralizowany i rozproszony charakter",
      "Zwykła baza SQL z jedną tabelą",
      "Sposób przesyłania sygnału analogowego",
      "Procedura legalizacyjna dokumentów"
    ],
    correctAnswer: "Baza danych, która ma zdecentralizowany i rozproszony charakter"
  },
  {
    id: 56,
    question: "Czy sztuczną inteligencję można wykorzystać do tworzenia treści (opisy na stronach internetowych, logo, posty itd.)?",
    options: [
      "Tak",
      "Nie, jest to prawnie zakazane",
      "Tylko w marketingu szeptanym",
      "Tylko w branży transportowej"
    ],
    correctAnswer: "Tak"
  },
  {
    id: 57,
    question: "Marketing 5.0 jest najbardziej skoncentrowany na:",
    options: [
      "Zastosowaniu nowych technologii",
      "Wykluczeniu jakichkolwiek rozwiązań cyfrowych w marketingu",
      "Zastąpieniu wszystkich kampanii mobilnych plakatami",
      "Tradycyjnych metodach merchandisingu"
    ],
    correctAnswer: "Zastosowaniu nowych technologii"
  },
  {
    id: 58,
    question: "Do celów cyfryzacji NIE należy: (Wielokrotny wybór)",
    options: [
      "Rozbudowa wewnętrznego działu IT",
      "Konwersja wszelkich informacji do formatu cyfrowego",
      "Skrócenie czasu obsługi klienta",
      "Zwiększenie przejrzystości procesu biznesowego"
    ],
    correctAnswer: [
      "Rozbudowa wewnętrznego działu IT",
      "Konwersja wszelkich informacji do formatu cyfrowego"
    ]
  },
  {
    id: 59,
    question: "Cyfrowa transformacja nie dokonała by się, gdyby nie rozwój w obszarze (Wielokrotny wybór):",
    options: [
      "Gromadzenia i przechowywania danych",
      "Zwiększenia ilości przeprowadzanych procesów, dokonywanych dzięki wzrostowi mocy obliczeniowej",
      "Szybkości i przepustowości łączy internetowych",
      "Druku offsetowego"
    ],
    correctAnswer: [
      "Gromadzenia i przechowywania danych",
      "Zwiększenia ilości przeprowadzanych procesów, dokonywanych dzięki wzrostowi mocy obliczeniowej",
      "Szybkości i przepustowości łączy internetowych"
    ]
  },
  {
    id: 60,
    question: "Cyfrowy bliźniak (Digital Twin) to: (Wielokrotny wybór)",
    options: [
      "Wirtualne odwzorowanie świata fizycznego w czasie rzeczywistym",
      "Wirtualna kopia obiektów wraz z możliwością symulacji procesów",
      "Wyłącznie zapis plików w formacie .jpg",
      "Robot humanoidalny"
    ],
    correctAnswer: [
      "Wirtualne odwzorowanie świata fizycznego w czasie rzeczywistym",
      "Wirtualna kopia obiektów wraz z możliwością symulacji procesów"
    ]
  },
  {
    id: 61,
    question: "Marketing 5.0 wg Kotlera:",
    options: [
      "Skoncentrowany jest w głównej mierze na rozwoju technologicznym",
      "Oparty na porzuceniu nowoczesnych technologii",
      "Obejmuje tylko telemarketing",
      "Skupia się na ograniczeniu analizy danych"
    ],
    correctAnswer: "Skoncentrowany jest w głównej mierze na rozwoju technologicznym"
  },
  {
    id: 62,
    question: "Zasady projektowania przemysłu 4.0 to:",
    options: [
      "Interoperacyjność, wirtualizacja, decentralizacja, praca w czasie rzeczywistym, orientacja na usługi, modularność rozwiązań",
      "Wyłącznie maksymalizacja zatrudnienia manualnego",
      "Nieustanny outsourcing bez automatyzacji",
      "Zakaz łączenia systemów IT"
    ],
    correctAnswer: "Interoperacyjność, wirtualizacja, decentralizacja, praca w czasie rzeczywistym, orientacja na usługi, modularność rozwiązań"
  },
  {
    id: 63,
    question: "Oferta firmy obejmuje streaming filmów online. Firma rozpoczyna zbieranie danych od klientów w celu ich analizy, przygotowania indywidualnych rekomendacji, ofert, reklam. Jest to przykład:",
    options: [
      "Cyfrowej transformacji",
      "Druku 3D",
      "Technologii VR",
      "Zwykłego mailingu"
    ],
    correctAnswer: "Cyfrowej transformacji"
  },
  {
    id: 64,
    question: "Digital natives nazywamy:",
    options: [
      "Osoby urodzone w czasie powszechnego stosowania w życiu codziennym i zawodowym Internetu, komputerów i innych urządzeń, których działanie oparte jest na nowoczesne technologie",
      "Osoby, które żyją w erze analogowej",
      "Klientów, którzy nie używają w ogóle internetu",
      "Tylko dzieci mające dostęp do telewizora"
    ],
    correctAnswer: "Osoby urodzone w czasie powszechnego stosowania w życiu codziennym i zawodowym Internetu, komputerów i innych urządzeń, których działanie oparte jest na nowoczesne technologie"
  },
  {
    id: 65,
    question: "Przemysł 4.0 to (Wielokrotny wybór)",
    options: [
      "Zmiana paradygmatu produkcji z produkcji masowej na produkcję kastomizowaną",
      "Koncepcja zmian organizacyjnych i technologicznych wraz z integracją łańcuchów wartości i rozwojem nowych modeli biznesowych",
      "Dogłębna organizacja łańcucha wartości, produktów i modelu biznesowego",
      "Wyłącznie powrót do rzemiosła bez automatyzacji"
    ],
    correctAnswer: [
      "Zmiana paradygmatu produkcji z produkcji masowej na produkcję kastomizowaną",
      "Koncepcja zmian organizacyjnych i technologicznych wraz z integracją łańcuchów wartości i rozwojem nowych modeli biznesowych",
      "Dogłębna organizacja łańcucha wartości, produktów i modelu biznesowego"
    ]
  },
  {
    id: 66,
    question: "Do technologicznych fundamentów cyfrowej transformacji można zaliczyć (Wielokrotny wybór):",
    options: [
      "Wykładniczy wzrost mocy obliczeniowej",
      "Coraz szybsze połączenia internetowe",
      "Zastępowanie łączy internetowych sygnałem radiowym AM",
      "Rezygnację z cyfrowych systemów obliczeniowych"
    ],
    correctAnswer: [
      "Wykładniczy wzrost mocy obliczeniowej",
      "Coraz szybsze połączenia internetowe"
    ]
  },
  {
    id: 67,
    question: "Kluczowe technologie napędzające rozwój Przemysłu 4.0 to (Wielokrotny wybór)",
    options: [
      "Internet rzeczy, druk 3D, AR, VR, mobile, chmura obliczeniowa",
      "Technologie wspierające procesy cyfrowej transformacji",
      "Roboty kolaborujące, rozwiązania do wirtualnej symulacji procesów, w tym cyfrowy bliźniak",
      "Obsługa faksów i telegrafu"
    ],
    correctAnswer: [
      "Internet rzeczy, druk 3D, AR, VR, mobile, chmura obliczeniowa",
      "Technologie wspierające procesy cyfrowej transformacji",
      "Roboty kolaborujące, rozwiązania do wirtualnej symulacji procesów, w tym cyfrowy bliźniak"
    ]
  },
  {
    id: 68,
    question: "Jednym z najpopularniejszych rozwiązań w produkcji wykorzystujących sztuczną inteligencję do określenia stanu pracy sprzętu w celu oszacowania, kiedy należy dokonać naprawy lub przewidzenia awarii, jest tzw.:",
    options: [
      "Predykcyjne utrzymanie ruchu (Predictive maintenance)",
      "Tradycyjna konserwacja maszyn offline",
      "Eliminacja wszelkich czujników w zakładzie",
      "Technika marketingu szeptanego"
    ],
    correctAnswer: "Predykcyjne utrzymanie ruchu (Predictive maintenance)"
  },
  {
    id: 69,
    question: "Efektywny insight konsumencki (Wielokrotny wybór)",
    options: [
      "To charakterystyka m.in. oczekiwań i poglądów danego segmentu klientów, które odgrywają istotną rolę w procesie zakupu",
      "Charakteryzuje zasada 4R",
      "Jest całkowicie nieistotny dla marketerów",
      "Dotyczy tylko analizy kosztów surowców"
    ],
    correctAnswer: [
      "To charakterystyka m.in. oczekiwań i poglądów danego segmentu klientów, które odgrywają istotną rolę w procesie zakupu",
      "Charakteryzuje zasada 4R"
    ]
  },
  {
    id: 70,
    question: "Pogląd na sztuczną inteligencję jako technologię produkcyjną usprawniającą nową klasę zadań związanych z danymi wywodzi się z idei:",
    options: [
      "Dane jako siła robocza",
      "Zawsze offline",
      "Wykluczenia wolnego rynku",
      "Paper-driven marketing"
    ],
    correctAnswer: "Dane jako siła robocza"
  },
  {
    id: 71,
    question: "Pomiar dojrzałości cyfrowej organizacji służy:",
    options: [
      "Wskazaniu stanu zaawansowania cyfrowej transformacji w organizacji",
      "Wyłącznie do oceny jakości wydruku ulotek",
      "Analizie łańcucha dostaw offline",
      "Rezygnacji z analiz wyników"
    ],
    correctAnswer: "Wskazaniu stanu zaawansowania cyfrowej transformacji w organizacji"
  },
  {
    id: 72,
    question: "Ciągłe zwiększanie konkurencyjności istniejących produktów lub usług poprzez koncentrację na obniżaniu kosztów oraz ulepszaniu lub dodawaniu funkcji to:",
    options: [
      "Innowacja przyrostowa",
      "Innowacja zakłócająca",
      "Cofanie produktu do wersji analogowej",
      "Wyłącznie stagnacja technologiczna"
    ],
    correctAnswer: "Innowacja przyrostowa"
  },
  {
    id: 73,
    question: "Autonomiczne samochody będą zasilały bazy o dane (Wielokrotny wybór)",
    options: [
      "Pochodzące z sensorów i odczytujące sygnały ze świata zewnętrznego",
      "Dotyczące użytkowników w tym ich zainteresowań oraz preferencji konsumenckich",
      "Etyczne wspierające tworzenie nowych bardziej precyzyjnych regulacji",
      "Tylko dane w formie papierowej"
    ],
    correctAnswer: [
      "Pochodzące z sensorów i odczytujące sygnały ze świata zewnętrznego",
      "Dotyczące użytkowników w tym ich zainteresowań oraz preferencji konsumenckich",
      "Etyczne wspierające tworzenie nowych bardziej precyzyjnych regulacji"
    ]
  },
  {
    id: 74,
    question: "Która z innowacji spośród prezentowanych na innovation matrix określa wysoki wpływ na rynek i niską nowość technologiczną?",
    options: [
      "Innowacja zakłócająca",
      "Innowacja radykalna",
      "Innowacja zrównoważona",
      "Innowacja przyrostowa"
    ],
    correctAnswer: "Innowacja zakłócająca"
  },
  {
    id: 75,
    question: "Marketing rozszerzony umożliwia:",
    options: [
      "Zwiększenie wydajności marketerów dzięki technologiom (chatboty, wirtualni asystenci)",
      "Eliminację wszelkich narzędzi cyfrowych w marketingu",
      "Zawężenie rynku docelowego do jednej osoby offline",
      "Automatyczne zastąpienie działu marketingu w całości"
    ],
    correctAnswer: "Zwiększenie wydajności marketerów dzięki technologiom (chatboty, wirtualni asystenci)"
  },
  {
    id: 76,
    question: "Marketing kontekstowy polega na:",
    options: [
      "Spersonalizowaniu doświadczeń w świecie fizycznym, one-to-one w czasie rzeczywistym",
      "Stosowaniu masowego spamu mailowego",
      "Promocji w gazetach codziennych",
      "Wyłącznie banerach internetowych na stronach statycznych"
    ],
    correctAnswer: "Spersonalizowaniu doświadczeń w świecie fizycznym, one-to-one w czasie rzeczywistym"
  },
  {
    id: 77,
    question: "Marketing predykcyjny wykorzystuje narzędzia analityczne do:",
    options: [
      "Przewidywania skutków działań marketingowych",
      "Zaprzeczenia jakichkolwiek prognoz",
      "Wyłącznie przechowywania danych na dyskach twardych",
      "Eliminacji segmentacji klientów"
    ],
    correctAnswer: "Przewidywania skutków działań marketingowych"
  },
  {
    id: 78,
    question: "Co to jest Customer 6.0?",
    options: [
      "W pełni zintegrowany z zaawansowanymi technologiami (AI, VR/AR, blockchain), dla spersonalizowanych doświadczeń",
      "Konsument, który nie korzysta z sieci",
      "Użytkownik starego telefonu klawiszowego",
      "Grupa docelowa nieskorzystająca z technologii AR"
    ],
    correctAnswer: "W pełni zintegrowany z zaawansowanymi technologiami (AI, VR/AR, blockchain), dla spersonalizowanych doświadczeń"
  },
  {
    id: 79,
    question: "Co to jest Customer 5.0?",
    options: [
      "Cyfrowy klient, korzysta ze smartfona i szybko zmienia decyzje",
      "Klient, który nigdy nie miał dostępu do komputera",
      "Segment klientów offline w wieku 80+",
      "Osoba, która korzysta tylko z telewizora"
    ],
    correctAnswer: "Cyfrowy klient, korzysta ze smartfona i szybko zmienia decyzje"
  },
  {
    id: 80,
    question: "Co to jest marketing omnichannel?",
    options: [
      "Spójne doświadczenie i przekaz w każdym kanale (sklep, e-commerce, social media, aplikacja)",
      "Rozproszone kampanie bez koordynacji",
      "Unikanie social mediów",
      "Jednokanałowa reklama TV"
    ],
    correctAnswer: "Spójne doświadczenie i przekaz w każdym kanale (sklep, e-commerce, social media, aplikacja)"
  },
  {
    id: 81,
    question: "Co to jest marketing multikanałowy?",
    options: [
      "Komunikaty w wielu kanałach (online/offline), ale niespójny przekaz marki",
      "Zawsze spójny i zintegrowany przekaz",
      "Wyłącznie marketing szeptany w social media",
      "Marketing wielopoziomowy"
    ],
    correctAnswer: "Komunikaty w wielu kanałach (online/offline), ale niespójny przekaz marki"
  },
  {
    id: 82,
    question: "Jakie są Zasady projektowania przemysłu 4.0?",
    options: [
      "Interoperacyjność, wirtualizacja, decentralizacja, praca w czasie rzeczywistym, usługi, modularność",
      "Maksymalizacja pracy manualnej i odrzucenie sieci",
      "Tylko jednowątkowa produkcja offline",
      "Brak technologii cyfrowych w fabryce"
    ],
    correctAnswer: "Interoperacyjność, wirtualizacja, decentralizacja, praca w czasie rzeczywistym, usługi, modularność"
  },
  {
    id: 83,
    question: "Co to jest Web 3.0?",
    options: [
      "Wzrost znaczenia interfejsów głosowych, sieciowej kooperacji i współpracy na żądanie",
      "Pierwsza generacja internetu",
      "Rezygnacja z jakichkolwiek narzędzi AI",
      "Chmura obliczeniowa powiązana z telepatią"
    ],
    correctAnswer: "Wzrost znaczenia interfejsów głosowych, sieciowej kooperacji i współpracy na żądanie"
  },
  {
    id: 84,
    question: "Na jakie trzy grupy można podzielić technologie oferowane przez MarTech? (Wielokrotny wybór)",
    options: [
      "Stymulacyjne",
      "Obliczeniowe",
      "Analityczne",
      "Usługi wysyłkowe offline"
    ],
    correctAnswer: [
      "Stymulacyjne",
      "Obliczeniowe",
      "Analityczne"
    ]
  },
  {
    id: 85,
    question: "Co to jest Klick and collect?",
    options: [
      "Technika umożliwiająca przenoszenie spersonalizowanych doświadczeń cyfrowych do świata fizycznego",
      "Stara nazwa usługi wykonywania ksero",
      "Metoda płatności w bankomatach",
      "Papierowy kupon zniżkowy"
    ],
    correctAnswer: "Technika umożliwiająca przenoszenie spersonalizowanych doświadczeń cyfrowych do świata fizycznego"
  },
  {
    id: 86,
    question: "Do trzech filarów transformacji cyfrowej nie zalicza się:",
    options: [
      "Sztucznej inteligencji",
      "Wydajnych sieci",
      "Rozwoju pamięci masowej",
      "Zwiększonej mocy obliczeniowej"
    ],
    correctAnswer: "Sztucznej inteligencji"
  },
  {
    id: 87,
    question: "Co to jest interconnected?",
    options: [
      "Połączenie produktu, aplikacji, analityki i sieci",
      "Wyciek danych z bazy",
      "Zamknięty system offline",
      "Brak analityki"
    ],
    correctAnswer: "Połączenie produktu, aplikacji, analityki i sieci"
  },
  {
    id: 88,
    question: "Co tworzy model 5A przedstawiony przez Philipa Kotlera?",
    options: [
      "Proces pozyskiwania klienta przez marki",
      "Zasady budowy hal produkcyjnych",
      "Sposób rekrutacji programistów",
      "Metodę testów offline"
    ],
    correctAnswer: "Proces pozyskiwania klienta przez marki"
  },
  {
    id: 89,
    question: "Co oznacza termin \"software is eating the world\"?",
    options: [
      "Oprogramowanie przekształca tradycyjne branże",
      "Zanik roli oprogramowania w sektorze rolniczym",
      "Tylko branża gamingowa się rozwija",
      "Hasło kampanii charytatywnej"
    ],
    correctAnswer: "Oprogramowanie przekształca tradycyjne branże"
  },
  {
    id: 90,
    question: "Co to jest Inteligentne urządzenie (Smart device)?",
    options: [
      "Urządzenie śledzące flotę GPS, monitorujące stan pojazdu i kierowców",
      "Zwykły kalkulator kieszonkowy z 1980 r.",
      "Urządzenie elektroniczne bez połączenia z siecią",
      "Narzędzie używane tylko w laboratoriach chemicznych"
    ],
    correctAnswer: "Urządzenie śledzące flotę GPS, monitorujące stan pojazdu i kierowców"
  },
  {
    id: 91,
    question: "Co opisuje model 5A przedstawiony przez Phillipa Kotlera?",
    options: [
      "Proces pozyskiwania klienta przez marki",
      "Monitorowanie baz danych klientów offline",
      "Wyłącznie model przyciągania inwestorów",
      "Tylko sposób budowy relacji B2B w rolnictwie"
    ],
    correctAnswer: "Proces pozyskiwania klienta przez marki"
  },
  {
    id: 92,
    question: "Co to jest Agile marketing?",
    options: [
      "Szybkie tworzenie i testowanie kampanii w autonomicznych zespołach",
      "Zastąpienie wszystkich działań marketingowych przez outsourcing",
      "Skrócenie projektów marketingowych do 3 godzin",
      "Stosowanie marketingu wyłącznie w telewizji"
    ],
    correctAnswer: "Szybkie tworzenie i testowanie kampanii w autonomicznych zespołach"
  },
  {
    id: 93,
    question: "Co to jest data-driven marketing?",
    options: [
      "Analiza dużych ilości danych do optymalizacji decyzji marketingowych",
      "Marketing oparty na ulotkach papierowych",
      "Wyłącznie marketing pocztowy",
      "Nielegalna forma przetwarzania danych"
    ],
    correctAnswer: "Analiza dużych ilości danych do optymalizacji decyzji marketingowych"
  },
  {
    id: 94,
    question: "Co to jest interconnected?",
    options: [
      "Połączenie produktu, aplikacji, analityki i sieci",
      "System segregacji dokumentów papierowych",
      "Metoda szyfrowania offline",
      "Nic nie znaczący skrót IT"
    ],
    correctAnswer: "Połączenie produktu, aplikacji, analityki i sieci"
  },
  {
    id: 95,
    question: "Co to jest Blockchain?",
    options: [
      "Zdecentralizowana, rozproszona baza danych",
      "Baza SQL w jednym serwerze",
      "Zbiór notatek papierowych",
      "Sposób szyfrowania e-maili"
    ],
    correctAnswer: "Zdecentralizowana, rozproszona baza danych"
  },
  {
    id: 96,
    question: "Co to jest Cyfrowy bliźniak (Digital Twin)?",
    options: [
      "Wirtualna kopia obiektów fizycznych z symulacją w czasie rzeczywistym",
      "Przeglądarka do e-booków",
      "Odtwarzanie kaset VHS",
      "System masowej wysyłki mailingów"
    ],
    correctAnswer: "Wirtualna kopia obiektów fizycznych z symulacją w czasie rzeczywistym"
  },
  {
    id: 97,
    question: "Co nazywamy Digital natives?",
    options: [
      "Osoby urodzone w erze powszechnego użycia Internetu i technologii",
      "Osoby używające tylko telefonów stacjonarnych",
      "Emigrantów nieposługujących się internetem",
      "Wszelkich użytkowników komputerów powyżej 60 r.ż."
    ],
    correctAnswer: "Osoby urodzone w erze powszechnego użycia Internetu i technologii"
  },
  {
    id: 98,
    question: "Co to jest predykcyjne utrzymanie ruchu (Predictive maintenance)?",
    options: [
      "System AI przewidujący awarie, by zapobiec uszkodzeniom sprzętu",
      "Konserwacja maszyn raz na dekadę bez czujników",
      "Zwykłe sprzątanie hal produkcyjnych",
      "Przegląd dokumentacji RODO"
    ],
    correctAnswer: "System AI przewidujący awarie, by zapobiec uszkodzeniom sprzętu"
  },
  {
    id: 99,
    question: "Jakie dane będą zasilały bazy danych autonomicznych samochodów?",
    options: [
      "Z sensorów (świat zewnętrzny) oraz dane o preferencjach użytkowników",
      "Tylko dokumenty papierowe z urzędów",
      "Wycinki prasowe offline",
      "Nie ma żadnych baz danych dla aut autonomicznych"
    ],
    correctAnswer: "Z sensorów (świat zewnętrzny) oraz dane o preferencjach użytkowników"
  },
  {
    id: 100,
    question: "Która z innowacji spośród prezentowanych na innovation matrix określa wysoki wpływ na rynek i niską nowość technologiczną?",
    options: [
      "Innowacja zakłócająca",
      "Innowacja radykalna",
      "Innowacja zrównoważona",
      "Innowacja przyrostowa"
    ],
    correctAnswer: "Innowacja zakłócająca"
  },
  {
    id: 101,
    question: "Jakie są przykłady modeli biznesowych typowych dla cyfrowej transformacji?",
    options: [
      "On demand",
      "Subskrypcyjny",
      "Marketplace",
      "Sprzedaż wyłącznie offline z rezygnacją z modelu e-commerce"
    ],
    correctAnswer: [
      "On demand",
      "Subskrypcyjny",
      "Marketplace"
    ]
  },
  {
    id: 102,
    question: "Co to jest Marketing technologiczny (MARTECH)?",
    options: [
      "Zestaw narzędzi technologicznych wspierających marketing",
      "Metoda zamykania danych w segregatorach analogowych",
      "Technika publikacji offline",
      "Obsługa billboardów przy drogach"
    ],
    correctAnswer: "Zestaw narzędzi technologicznych wspierających marketing"
  },
  {
    id: 103,
    question: "Co to jest insight konsumencki?",
    options: [
      "Zrozumienie postaw i wartości decydujących o wyborach konsumenta",
      "Zbiór przepisów kulinarnych",
      "Znajomość wyłącznie danych demograficznych",
      "Analiza stacjonarnego ruchu pieszych"
    ],
    correctAnswer: "Zrozumienie postaw i wartości decydujących o wyborach konsumenta"
  },
  {
    id: 104,
    question: "Co to jest Marketing 6.0 (Metamarketing)?",
    options: [
      "Łączy świat fizyczny i cyfrowy",
      "Odrzuca wszelkie technologie VR",
      "Promuje tylko narzędzia offline",
      "Model rezygnacji z big data"
    ],
    correctAnswer: "Łączy świat fizyczny i cyfrowy"
  },
  {
    id: 105,
    question: "Co to jest Marketing 5.0?",
    options: [
      "Technologie symulujące możliwości ludzkich marketerów",
      "Wprowadzenie zakazu analizy danych",
      "Brak udziału sztucznej inteligencji",
      "Tylko mailing papierowy"
    ],
    correctAnswer: "Technologie symulujące możliwości ludzkich marketerów"
  },
  {
    id: 106,
    question: "Co to jest Marketing 4.0?",
    options: [
      "Współtworzenie wartości marki przez klientów (opinie, rekomendacje)",
      "Wyłącznie marketing w postaci banerów ulicznych",
      "Zasada braku interakcji z użytkownikiem",
      "Tylko kampanie w radiu"
    ],
    correctAnswer: "Współtworzenie wartości marki przez klientów (opinie, rekomendacje)"
  },
  {
    id: 107,
    question: "Co oznacza efekt tłustego kota w kontekście transformacji cyfrowej?",
    options: [
      "Firma po transformacji uznaje, że nie musi dalej się rozwijać",
      "Strategia intensyfikacji R&D",
      "Wyłącznie model rozliczeń w bankowości",
      "Metoda rekrutacji menedżerów"
    ],
    correctAnswer: "Firma po transformacji uznaje, że nie musi dalej się rozwijać"
  },
  {
    id: 108,
    question: "Jaki procent fejkowego kontentu jest skierowany na kobiety?",
    options: [
      "96%",
      "10%",
      "50%",
      "100%"
    ],
    correctAnswer: "96%"
  },
  {
    id: 109,
    question: "Czym jest deep fake i do czego może być wykorzystywany?",
    options: [
      "Manipulowanie wizerunkiem osób publicznych, wpływ na giełdę i zachęcanie do inwestycji",
      "Tworzenie oryginalnych materiałów wideo bez żadnych zmian",
      "Tylko konwersja tekstu na mowę",
      "Wyłącznie retusz zdjęć w Photoshopie"
    ],
    correctAnswer: "Manipulowanie wizerunkiem osób publicznych, wpływ na giełdę i zachęcanie do inwestycji"
  },
  {
    id: 110,
    question: "Jakie są najczęstsze formy cyberprzestępczości?",
    options: [
      "Oszustwa SMS-owe i telefoniczne",
      "Tylko masowe ataki botnetu na serwery",
      "Wyłącznie phishing mailowy",
      "Kradzież kabli miedzianych"
    ],
    correctAnswer: "Oszustwa SMS-owe i telefoniczne"
  },
  {
    id: 111,
    question: "Jak źle działają aplikacje mobilne?",
    options: [
      "Po instalacji trojan przejmuje uprawnienia i może wymuszać subskrypcje premium",
      "Zwykle ułatwiają bezpieczeństwo danych",
      "Zapobiegają atakom wirusów",
      "Nigdy nie pobierają żadnych wrażliwych danych"
    ],
    correctAnswer: "Po instalacji trojan przejmuje uprawnienia i może wymuszać subskrypcje premium"
  },
  {
    id: 112,
    question: "Jaki procent ataków na Androida stanowią złośliwe aplikacje?",
    options: [
      "98%",
      "2%",
      "50%",
      "0%"
    ],
    correctAnswer: "98%"
  },
  {
    id: 113,
    question: "Jak działają oszustwa internetowe typu \"świniobicie\"?",
    options: [
      "Fałszywa tożsamość zwodzi ofiarę atrakcyjnymi ofertami, by ostatecznie ją okraść",
      "Akcja marketingowa promująca wyłącznie mięso",
      "Zalecenia dietetyczne online",
      "Wyłącznie phishing przez SMS"
    ],
    correctAnswer: "Fałszywa tożsamość zwodzi ofiarę atrakcyjnymi ofertami, by ostatecznie ją okraść"
  },
  {
    id: 114,
    question: "Co zrobić, jeśli padniesz ofiarą oszustwa?",
    options: [
      "Zgłosić do organów ścigania i poinformować banki oraz firmy obsługujące płatności",
      "Przestać korzystać z telefonu na stałe",
      "Opublikować post o tym w social media bez dalszych działań",
      "Nic nie robić, bo to nieważne"
    ],
    correctAnswer: "Zgłosić do organów ścigania i poinformować banki oraz firmy obsługujące płatności"
  },
  {
    id: 115,
    question: "Jak działają oszustwa internetowe?",
    options: [
      "Wykorzystują inżynierię społeczną i wywołują irracjonalne zachowania ofiar",
      "Zawsze przebiegają tylko przez kontakt osobisty",
      "Dotyczą wyłącznie haseł do Wi-Fi",
      "To legalna forma reklamy"
    ],
    correctAnswer: "Wykorzystują inżynierię społeczną i wywołują irracjonalne zachowania ofiar"
  },
  {
    id: 116,
    question: "Co zrobić, jeśli zostaniesz zaatakowany przez spamerów?",
    options: [
      "Wstrzymać transakcje, skontaktować się z usługodawcą, używać ochrony przeglądania",
      "Podawać im więcej danych",
      "Zainstalować trojana w komputerze celowo",
      "Nie reagować, licząc że spam zniknie"
    ],
    correctAnswer: "Wstrzymać transakcje, skontaktować się z usługodawcą, używać ochrony przeglądania"
  },
  {
    id: 117,
    question: "Co to jest spam?",
    options: [
      "Niechciana, masowa komunikacja cyfrowa",
      "Wsparcie marketingowe oparte na RODO",
      "Wyłącznie wiadomości listowne",
      "Metoda szyfrowania plików"
    ],
    correctAnswer: "Niechciana, masowa komunikacja cyfrowa"
  },
  {
    id: 118,
    question: "Jak działa oszustwo typu spam?",
    options: [
      "Kusi super ofertą, prowadzi do fałszywej strony, używa fałszywych danych wysyłki i form płatności",
      "Jest zawsze łatwe do rozpoznania, bo przychodzi z rządowej domeny",
      "Zawsze dotyczy nieruchomości",
      "Zgodnie z RODO, wszelkie spamowanie jest legalne"
    ],
    correctAnswer: "Kusi super ofertą, prowadzi do fałszywej strony, używa fałszywych danych wysyłki i form płatności"
  },
  {
    id: 119,
    question: "Co robić w przypadku ataku phishingowego?",
    options: [
      "Zmienić hasła, zablokować karty, skorzystać z usług monitorowania tożsamości",
      "Nic nie robić",
      "Przekazać więcej danych oszustowi",
      "Zadzwonić do działu HR"
    ],
    correctAnswer: "Zmienić hasła, zablokować karty, skorzystać z usług monitorowania tożsamości"
  },
  {
    id: 120,
    question: "Co to jest phishing?",
    options: [
      "Wyłudzanie danych lub kliknięć prowadzących do złośliwego oprogramowania",
      "Legalne mailingi do subskrybentów",
      "Zbiór przepisów BHP",
      "Metoda szyfrowania dysków"
    ],
    correctAnswer: "Wyłudzanie danych lub kliknięć prowadzących do złośliwego oprogramowania"
  },
  {
    id: 121,
    question: "Jak działa phishing?",
    options: [
      "Tworzy realistyczne strony i stosuje socjotechnikę, zwykle kontaktując się przez e-mail lub SMS",
      "Odbywa się wyłącznie na spotkaniach offline",
      "Wymaga fizycznego dostarczenia pendrive",
      "Jest metodą bezpiecznego logowania"
    ],
    correctAnswer: "Tworzy realistyczne strony i stosuje socjotechnikę, zwykle kontaktując się przez e-mail lub SMS"
  },
  {
    id: 122,
    question: "Jakie są najczęściej atakowane platformy społecznościowe pod kątem phishingu w 2023 roku?",
    options: [
      "Facebook",
      "GoldenLine",
      "Nasza Klasa",
      "Myspace"
    ],
    correctAnswer: "Facebook"
  },
  {
    id: 123,
    question: "Jak uniknąć złodziei informacji?",
    options: [
      "Korzystać z antywirusa, zmieniać hasła, monitorować tożsamość online",
      "Podawać login i hasło wszędzie, gdzie poproszą",
      "Ignorować alerty bezpieczeństwa",
      "Zawsze zapisywać hasła w notatniku papierowym i publikować je"
    ],
    correctAnswer: "Korzystać z antywirusa, zmieniać hasła, monitorować tożsamość online"
  },
  {
    id: 124,
    question: "Jak działają złodzieje informacji?",
    options: [
      "Zwabiają ofiary do pobrania, zbierają dane i sprzedają je w darknecie",
      "Legalnie chronią hasła w chmurze",
      "Zawsze żądają rozmowy telefonicznej",
      "Zapewniają darmowe ubezpieczenie"
    ],
    correctAnswer: "Zwabiają ofiary do pobrania, zbierają dane i sprzedają je w darknecie"
  },
  {
    id: 125,
    question: "Co to są Infostealery?",
    options: [
      "Złośliwe programy udające legalne, by cicho kraść dane użytkowników",
      "Aplikacje do legalnego backupu",
      "Gry komputerowe offline",
      "Dokumentacja RODO"
    ],
    correctAnswer: "Złośliwe programy udające legalne, by cicho kraść dane użytkowników"
  },
  {
    id: 126,
    question: "Jakie są największe zagrożenia dla konsumentów w zakresie złośliwego oprogramowania?",
    options: [
      "Infostealery",
      "Zawsze oryginalne aplikacje z Google Play",
      "Nieszkodliwe wirusy testowe",
      "Programy antywirusowe"
    ],
    correctAnswer: "Infostealery"
  },
  {
    id: 127,
    question: "Jakie są obawy o prywatność w XXI wieku?",
    options: [
      "Jednostka kontra algorytmy",
      "Tylko spór o przepisy prawa budowlanego",
      "Brak jakiejkolwiek inwigilacji",
      "Wyłącznie prywatność offline"
    ],
    correctAnswer: "Jednostka kontra algorytmy"
  },
  {
    id: 128,
    question: "Co oznacza \"The right to be left alone\"?",
    options: [
      "Prawo do pozostawienia w spokoju",
      "Nakaz włączania reklam kontekstowych",
      "Rozporządzenie UE o marketingu mobilnym",
      "Tylko zasada w social media"
    ],
    correctAnswer: "Prawo do pozostawienia w spokoju"
  },
  {
    id: 129,
    question: "Jakie środki bezpieczeństwa należy wdrożyć zgodnie z art. 32 RODO?",
    options: [
      "Szyfrowanie danych",
      "Ciągła poufność i integralność",
      "Szybkie przywracanie dostępu w razie incydentu",
      "Udostępnianie wszystkich danych publicznie"
    ],
    correctAnswer: [
      "Szyfrowanie danych",
      "Ciągła poufność i integralność",
      "Szybkie przywracanie dostępu w razie incydentu"
    ]
  },
  {
    id: 130,
    question: "Jaki jest cel RODO?",
    options: [
      "Ochrona danych i przeciwdziałanie dominacji technologicznej Chin i USA",
      "Promowanie spamu w internecie",
      "Zakaz przechowywania haseł przez firmy",
      "Obowiązek publikacji danych w sieci"
    ],
    correctAnswer: "Ochrona danych i przeciwdziałanie dominacji technologicznej Chin i USA"
  },
  {
    id: 131,
    question: "Jaki procent światowej populacji będzie objęty przepisami dotyczącymi prywatności podobnymi do RODO do 2025 roku?",
    options: [
      "Prawie 65%",
      "5%",
      "10%",
      "100%"
    ],
    correctAnswer: "Prawie 65%"
  },
  {
    id: 132,
    question: "Co trzeci Polak obawia się czego?",
    options: [
      "Wycieku danych",
      "Zniesienia cła",
      "Zwiększenia liczby komputerów stacjonarnych",
      "Każdej formy marketingu"
    ],
    correctAnswer: "Wycieku danych"
  },
  {
    id: 133,
    question: "Jakie jest najczęstsze źródło informacji o zagrożeniach online?",
    options: [
      "Internet, prasa, TV lub radio (47%)",
      "Plotki na ulicy",
      "Tylko materiały rządowe w urzędach",
      "Żadne z powyższych"
    ],
    correctAnswer: "Internet, prasa, TV lub radio (47%)"
  },
  {
    id: 134,
    question: "Ile procent ofiar oszustw nie jest uwzględnianych w oficjalnych statystykach?",
    options: [
      "63%",
      "0%",
      "10%",
      "100%"
    ],
    correctAnswer: "63%"
  },
  {
    id: 135,
    question: "Dlaczego ludzie tracą pieniądze lub dane osobowe w wyniku oszustwa?",
    options: [
      "45% nie umiało rozpoznać oszustwa",
      "Zawsze udostępniali hasła celowo",
      "Tylko z powodu wirusa w komputerze",
      "Nikt nigdy nie traci pieniędzy w wyniku oszustwa"
    ],
    correctAnswer: "45% nie umiało rozpoznać oszustwa"
  },
  {
    id: 136,
    question: "Jaki procent prób wyłudzeń jest obecnie podejmowanych częściej niż w ubiegłym roku?",
    options: [
      "36%",
      "1%",
      "90%",
      "0%"
    ],
    correctAnswer: "36%"
  },
  {
    id: 137,
    question: "Jak często ludzie otrzymują próby wyłudzenia danych?",
    options: [
      "61% - co najmniej raz w miesiącu",
      "Nigdy",
      "Raz do roku",
      "Wyłącznie w weekendy"
    ],
    correctAnswer: "61% - co najmniej raz w miesiącu"
  },
  {
    id: 138,
    question: "Jaki procent respondentów doświadczyło jakiejś formy oszustwa w ciągu ostatniego roku (Raport Global Anti-Scam Alliance 2023)?",
    options: [
      "78%",
      "2%",
      "10%",
      "95%"
    ],
    correctAnswer: "78%"
  },
  {
    id: 139,
    question: "Co to jest Spam?",
    options: [
      "Niechciane masowe wiadomości wysyłane elektronicznie (np. e-maile)",
      "Wsparcie marketingowe zgodne z RODO",
      "Tylko krótkie SMS-y",
      "Usługa bankowa"
    ],
    correctAnswer: "Niechciane masowe wiadomości wysyłane elektronicznie (np. e-maile)"
  },
  {
    id: 140,
    question: "Co to jest Scam?",
    options: [
      "Wyłudzenie pieniędzy, danych lub innych wartości przez wprowadzenie w błąd",
      "Legalne wsparcie kampanii non profit",
      "Zabezpieczenie antywirusowe",
      "Specjalny protokół w sieci LAN"
    ],
    correctAnswer: "Wyłudzenie pieniędzy, danych lub innych wartości przez wprowadzenie w błąd"
  },
  {
    id: 141,
    question: "Jakie są odczuwane konsekwencje cyberzagrożeń?",
    options: [
      "66% ofiar odczuwa stres, a 22% traci pieniądze",
      "0% traci pieniądze",
      "Tylko stres bez utraty pieniędzy",
      "Zawsze wywołuje korzyść dla ofiary"
    ],
    correctAnswer: "66% ofiar odczuwa stres, a 22% traci pieniądze"
  },
  {
    id: 142,
    question: "Jak zmienił się odsetek osób doświadczających cyberzagrożeń w Polsce w latach 2020-2022?",
    options: [
      "2020 - 29%, 2021 - 34%, 2022 - 41%",
      "Zmalał do 0% w 2022",
      "Był zawsze powyżej 90%",
      "Dane niedostępne"
    ],
    correctAnswer: "2020 - 29%, 2021 - 34%, 2022 - 41%"
  },
  {
    id: 143,
    question: "Jaki procent Polaków doświadczył jakiejś formy cyber zagrożenia w ciągu ostatnich 12 miesięcy (Consumer Market Research 2023)?",
    options: [
      "46%",
      "5%",
      "90%",
      "0%"
    ],
    correctAnswer: "46%"
  },
  {
    id: 144,
    question: "Jakie było jedno z pięciu największych zagrożeń w latach 2021-2024?",
    options: [
      "Cyberataki",
      "Brak internetu mobilnego",
      "Zamknięcie sklepów stacjonarnych",
      "Całkowita deregulacja RODO"
    ],
    correctAnswer: "Cyberataki"
  },
  {
    id: 145,
    question: "Jakie jest odniesienie do danych jako waluty?",
    options: [
      "Dane mają wartość i można je wymieniać, podobnie jak tradycyjną walutę",
      "Dane nie mają żadnej wartości",
      "Służą tylko do wypełniania rubryk w Excelu",
      "Są bezużyteczne w gospodarce"
    ],
    correctAnswer: "Dane mają wartość i można je wymieniać, podobnie jak tradycyjną walutę"
  },
  {
    id: 146,
    question: "Jakie jest odniesienie do danych jako pracy?",
    options: [
      "Ludzie generują je przez aktywność online, co można traktować jako cyfrową formę pracy",
      "Dane powstają wyłącznie w laboratoriach",
      "Nie można w ogóle nazwać tego pracą",
      "Dotyczy tylko robotników w fabrykach"
    ],
    correctAnswer: "Ludzie generują je przez aktywność online, co można traktować jako cyfrową formę pracy"
  },
  {
    id: 147,
    question: "Jakie jest odniesienie do danych jako nowej ropy naftowej?",
    options: [
      "Dane stały się cennym i strategicznie ważnym zasobem w gospodarce cyfrowej",
      "Nie mają żadnego znaczenia",
      "Dostępne są tylko w branży papierowej",
      "Dotyczy wyłącznie produkcji przemysłu ciężkiego"
    ],
    correctAnswer: "Dane stały się cennym i strategicznie ważnym zasobem w gospodarce cyfrowej"
  },
  {
    id: 148,
    question: "Jak Chiny klasyfikują dane od 2020 roku?",
    options: [
      "Jako piąty czynnik produkcji, obok pracy, ziemi, kapitału i technologii",
      "Jako nieistotny dodatek",
      "Jako zasób pozbawiony wartości",
      "Jako produkt wyłącznie rolniczy"
    ],
    correctAnswer: "Jako piąty czynnik produkcji, obok pracy, ziemi, kapitału i technologii"
  },
  {
    id: 149,
    question: "Jakie są 4 fale AI?",
    options: [
      "Internet AI, Business AI, Perception AI, Autonomous AI",
      "Sieci analogowe, VR AI, HTML AI, Cloud AI",
      "Tylko VR, AR, XR, MR",
      "Brak wyróżnionych fal"
    ],
    correctAnswer: "Internet AI, Business AI, Perception AI, Autonomous AI"
  },
  {
    id: 150,
    question: "Jakie korzyści oferuje sieć 5G?",
    options: [
      "Większa przepustowość, stabilność, pobieranie filmu Full HD w <10 sek., hiperconnectivity",
      "Znacznie wolniejsze łącze",
      "Brak obsługi IoT",
      "Tylko sygnał radiowy AM"
    ],
    correctAnswer: "Większa przepustowość, stabilność, pobieranie filmu Full HD w <10 sek., hiperconnectivity"
  },
  {
    id: 151,
    question: "Jak szybka jest sieć 5G w porównaniu do 4G?",
    options: [
      "Nawet 100 razy szybsza niż 4G",
      "Tyle samo",
      "10 razy wolniejsza",
      "5G nie istnieje"
    ],
    correctAnswer: "Nawet 100 razy szybsza niż 4G"
  },
  {
    id: 152,
    question: "Jakie są trzy filary technologiczne cyfrowej transformacji?",
    options: [
      "Moc obliczeniowa, internet, gromadzenie danych",
      "Tylko marketing szeptany, spedycja i transport",
      "Komputery 8-bitowe",
      "Zasoby w postaci dyskietek"
    ],
    correctAnswer: "Moc obliczeniowa, internet, gromadzenie danych"
  },
  {
    id: 153,
    question: "Jakie są charakterystyki transformacji cyfrowej?",
    options: [
      "Określenie kierunku transformacji, nowa wartość dla klientów, nowy mindset liderów",
      "Całkowity brak celu",
      "Eliminacja innowacji",
      "Zawsze powrót do rozwiązań offline"
    ],
    correctAnswer: "Określenie kierunku transformacji, nowa wartość dla klientów, nowy mindset liderów"
  },
  {
    id: 154,
    question: "Co to jest Cyfrowa Transformacja?",
    options: [
      "Przystosowanie się organizacji do nowych technologii w celu zmiany modeli biznesowych, systemów, kultury i struktur dla lepszych doświadczeń klientów",
      "Zamknięcie firmy na czas nieokreślony",
      "Wprowadzenie marketingu door-to-door",
      "Rezygnacja z analizy danych"
    ],
    correctAnswer: "Przystosowanie się organizacji do nowych technologii w celu zmiany modeli biznesowych, systemów, kultury i struktur dla lepszych doświadczeń klientów"
  },
  {
    id: 155,
    question: "Jakie jest uzasadnienie cyfryzacji?",
    options: [
      "Lepsza obsługa klientów, usprawnienie procesów firmowych i redefinicja modelu biznesowego",
      "Rezygnacja z wszelkiej automatyzacji",
      "Zwiększenie liczby papierowych dokumentów",
      "Ignorowanie potrzeb klientów"
    ],
    correctAnswer: "Lepsza obsługa klientów, usprawnienie procesów firmowych i redefinicja modelu biznesowego"
  },
  {
    id: 156,
    question: "Co to jest Cyfryzacja?",
    options: [
      "Zwiększone wykorzystanie technologii cyfrowej w organizacjach i społeczeństwie, gdzie rozwiązania cyfrowe stają się infrastrukturą",
      "Proces tworzenia kopii papierowych",
      "Wyłącznie migracja do maszyn do pisania",
      "Zamykanie dostępu do internetu"
    ],
    correctAnswer: "Zwiększone wykorzystanie technologii cyfrowej w organizacjach i społeczeństwie, gdzie rozwiązania cyfrowe stają się infrastrukturą"
  },
  {
    id: 157,
    question: "Jakie jest uzasadnienie digitalizacji?",
    options: [
      "Niższe koszty, szybsze działanie, przejrzystość i efektywność",
      "Zawsze wyższe koszty i wydłużenie procesów",
      "Brak jakiejkolwiek transparentności",
      "Spowolnienie usług"
    ],
    correctAnswer: "Niższe koszty, szybsze działanie, przejrzystość i efektywność"
  },
  {
    id: 158,
    question: "Co to jest Digitalizacja?",
    options: [
      "Proces konwersji danych analogowych na cyfrowe bity (1 i 0)",
      "Zamiana plików PDF na druk wielkoformatowy",
      "Pomijanie archiwizacji elektronicznej",
      "Tworzenie ręcznych notatek w segregatorach"
    ],
    correctAnswer: "Proces konwersji danych analogowych na cyfrowe bity (1 i 0)"
  },
  {
    id: 159,
    question: "Jaki wzrost skali manipulacji rozprzestrzenianych w internecie za pośrednictwem sztucznej inteligencji przewiduje się w ciągu kolejnych 10 lat?",
    options: [
      "77%",
      "5%",
      "0%",
      "200%"
    ],
    correctAnswer: "77%"
  },
  {
    id: 160,
    question: "Ile procent Polaków zetknęło się z fake newsem?",
    options: [
      "84%",
      "1%",
      "50%",
      "0%"
    ],
    correctAnswer: "84%"
  },
  {
    id: 161,
    question: "Technologia Deepfake jest wykorzystywana przeciwko komu?",
    options: [
      "Kobietom",
      "Wyłącznie firmom IT",
      "Nikt nie stosuje deepfake",
      "Osobom posiadającym wyłącznie telewizor analogowy"
    ],
    correctAnswer: "Kobietom"
  }
];

////////////////////////////////////////////////////////////////////////
// Tworzymy 16 "paczek" z pytaniami: po 10 w każdej, a ostatnia ma 11.
// W sumie 161 pytań:
//
//  1..10   => id:1
//  11..20  => id:2
//  21..30  => id:3
//  31..40  => id:4
//  41..50  => id:5
//  51..60  => id:6
//  61..70  => id:7
//  71..80  => id:8
//  81..90  => id:9
//  91..100 => id:10
//  101..110=> id:11
//  111..120=> id:12
//  121..130=> id:13
//  131..140=> id:14
//  141..150=> id:15
//  151..161=> id:16 (11 pytań)
////////////////////////////////////////////////////////////////////////

export const questionRanges: QuestionRange[] = [
  { id: 1, label: "Questions 1 - 10",   startId: 1,   endId: 10   },
  { id: 2, label: "Questions 11 - 20",  startId: 11,  endId: 20  },
  { id: 3, label: "Questions 21 - 30",  startId: 21,  endId: 30  },
  { id: 4, label: "Questions 31 - 40",  startId: 31,  endId: 40  },
  { id: 5, label: "Questions 41 - 50",  startId: 41,  endId: 50  },
  { id: 6, label: "Questions 51 - 60",  startId: 51,  endId: 60  },
  { id: 7, label: "Questions 61 - 70",  startId: 61,  endId: 70  },
  { id: 8, label: "Questions 71 - 80",  startId: 71,  endId: 80  },
  { id: 9, label: "Questions 81 - 90",  startId: 81,  endId: 90  },
  { id: 10, label: "Questions 91 - 100", startId: 91,  endId: 100 },
  { id: 11, label: "Questions 101 - 110", startId: 101, endId: 110 },
  { id: 12, label: "Questions 111 - 120", startId: 111, endId: 120 },
  { id: 13, label: "Questions 121 - 130", startId: 121, endId: 130 },
  { id: 14, label: "Questions 131 - 140", startId: 131, endId: 140 },
  { id: 15, label: "Questions 141 - 150", startId: 141, endId: 150 },
  { id: 16, label: "Questions 151 - 161", startId: 151, endId: 161 },
];

////////////////////////////////////////////////////////////////////////
// Funkcja pobierająca pytania z wybranych zakresów
////////////////////////////////////////////////////////////////////////
export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  // Jeśli nie wybrano żadnych zakresów, zwracamy wszystkie pytania
  if (selectedRangeIds.length === 0) return questions;

  // Wybieramy zdefiniowane range według id
  const selectedRanges = questionRanges.filter((range) =>
    selectedRangeIds.includes(range.id)
  );

  // Filtrowanie pytań, które należą do któregoś z wybranych zakresów
  return questions.filter((question) =>
    selectedRanges.some(
      (range) => question.id >= range.startId && question.id <= range.endId
    )
  );
};
