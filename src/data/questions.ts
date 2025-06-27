// quiz.ts
////////////////////////////////////////////////////////////////////////
// INTERFEJSY
////////////////////////////////////////////////////////////////////////
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  // 1 odpowiedź → string, wiele → string[]
  correctAnswer: string | string[];
}

export interface QuestionRange {
  id: number;
  label: string;
  startId: number;
  endId: number;
}

////////////////////////////////////////////////////////////////////////
// LISTA PYTAŃ 1-80  (pierwotne 1-60 + nowe 61-80)
////////////////////////////////////////////////////////////////////////
export const questions: QuizQuestion[] = [
  // ───────── 1-27 (jak w poprzedniej wersji) ─────────
  {
    id: 1,
    question: "Co to jest metodologia badań?",
    options: [
      "Proces reklamowania wyników badań",
      "Przypadkowe zbieranie opinii",
      "Systematyczny proces planowania, prowadzenia i analizowania badań",
      "Lista pytań ankietowych",
      "Zestaw hipotez",
      "Podręcznik dla studentów"
    ],
    correctAnswer: "Systematyczny proces planowania, prowadzenia i analizowania badań"
  },
  {
    id: 2,
    question: "Czym różnią się metody ilościowe od jakościowych? (wielokrotny wybór)",
    options: [
      "Ilościowe badają opinie i emocje",
      "Ilościowe analizują dane liczbowe",
      "Jakościowe analizują subiektywne doświadczenia",
      "Jakościowe wykorzystują statystyki",
      "Ilościowe zawsze są bardziej precyzyjne",
      "Jakościowe są losowe"
    ],
    correctAnswer: [
      "Ilościowe analizują dane liczbowe",
      "Jakościowe analizują subiektywne doświadczenia"
    ]
  },
  {
    id: 3,
    question: "Które pytanie należy do badań ilościowych?",
    options: [
      "Jakie emocje budzi produkt X?",
      "Ile produktu zużywa przeciętna rodzina?",
      "Dlaczego ludzie unikają reklamy produktu X?",
      "Jak konsumenci opisują markę X?",
      "Co motywuje do korzystania z produktu X?",
      "Jakie potrzeby zaspokaja produkt X?"
    ],
    correctAnswer: "Ile produktu zużywa przeciętna rodzina?"
  },
  {
    id: 4,
    question: "Po co uczyć się metodologii badań? (wielokrotny wybór)",
    options: [
      "Przydaje się w biznesie i marketingu",
      "Pozwala podejmować lepsze decyzje",
      "Pomaga w ocenie wiarygodności reklam",
      "Zastępuje analizę danych",
      "Nie jest przydatna na rynku pracy",
      "Przydaje się tylko w laboratorium"
    ],
    correctAnswer: [
      "Przydaje się w biznesie i marketingu",
      "Pozwala podejmować lepsze decyzje",
      "Pomaga w ocenie wiarygodności reklam"
    ]
  },
  {
    id: 5,
    question: "Który z poniższych to przykład praktycznego zastosowania analizy danych?",
    options: [
      "Zmiana logo firmy",
      "Udostępnianie całego sezonu serialu naraz (Netflix)",
      "Podniesienie cen bez analizy",
      "Reklama oparta na intuicji",
      "Opcja odkupu auta po utracie pracy (Hyundai)",
      "Zmniejszenie budżetu bez badania rynku"
    ],
    correctAnswer: [
      "Udostępnianie całego sezonu serialu naraz (Netflix)",
      "Opcja odkupu auta po utracie pracy (Hyundai)"
    ]
  },
  {
    id: 6,
    question: "Która odpowiedź najlepiej opisuje proces badawczy?",
    options: [
      "Zebranie opinii znajomych",
      "Jednorazowe zapytanie w sieci",
      "Analiza tylko wyników bez planowania",
      "Sformułowanie problemu, pytania, metoda, badanie, analiza i wnioski",
      "Pominięcie literatury",
      "Pomiar bez koncepcji"
    ],
    correctAnswer: "Sformułowanie problemu, pytania, metoda, badanie, analiza i wnioski"
  },
  {
    id: 7,
    question: "Skąd można czerpać pomysły na badania? (wielokrotny wybór)",
    options: [
      "Z codziennych obserwacji",
      "Z literatury naukowej",
      "Z replikacji istniejących badań",
      "Z opinii celebrytów",
      "Z portali plotkarskich",
      "Z memów w internecie"
    ],
    correctAnswer: [
      "Z codziennych obserwacji",
      "Z literatury naukowej",
      "Z replikacji istniejących badań"
    ]
  },
  {
    id: 8,
    question: "Czym jest luka badawcza?",
    options: [
      "Brak budżetu na badania",
      "Przerwa między hipotezą a teorią",
      "Niezbadany lub słabo zbadany temat",
      "Moment, w którym dane nie pasują",
      "Błąd statystyczny",
      "Luka między metodą a wynikami"
    ],
    correctAnswer: "Niezbadany lub słabo zbadany temat"
  },
  {
    id: 9,
    question: "Co to jest pytanie badawcze?",
    options: [
      "Losowo zadane pytanie w ankiecie",
      "Pytanie do eksperta",
      "Pytanie zawierające zmienne i sugerujące schemat badawczy",
      "Pytanie bez znaczenia naukowego",
      "Pytanie o zgodę na udział w badaniu",
      "Pytanie używane wyłącznie w psychologii"
    ],
    correctAnswer: "Pytanie zawierające zmienne i sugerujące schemat badawczy"
  },
  {
    id: 10,
    question: "Które z poniższych to przykłady pytań badawczych? (wielokrotny wybór)",
    options: [
      "Czy A wiąże się z B?",
      "Czy osoby z cechą A różnią się w B?",
      "Czy manipulacja A wpływa na B?",
      "Jak ma się pogoda do humoru badacza?",
      "Czy liczby są ważne w badaniu?",
      "Co jadł uczestnik przed badaniem?"
    ],
    correctAnswer: [
      "Czy A wiąże się z B?",
      "Czy osoby z cechą A różnią się w B?",
      "Czy manipulacja A wpływa na B?"
    ]
  },
  {
    id: 11,
    question: "Czym jest hipoteza badawcza?",
    options: [
      "Każde przypuszczenie",
      "Sugestia bez związku z badaniem",
      "Zdanie twierdzące będące odpowiedzią na pytanie badawcze",
      "Tytuł raportu",
      "Opinie badacza",
      "Slogan reklamowy"
    ],
    correctAnswer: "Zdanie twierdzące będące odpowiedzią na pytanie badawcze"
  },
  {
    id: 12,
    question: "Która hipoteza pasuje do eksperymentu?",
    options: [
      "Badani będą zadowoleni z udziału",
      "Kobiety są bardziej empatyczne",
      "Osoby poddane treningowi poznawczemu będą bardziej odporne na ryzyko",
      "Wyniki są losowe",
      "Większość osób lubi badania",
      "Uczestnicy będą się nudzić"
    ],
    correctAnswer: "Osoby poddane treningowi poznawczemu będą bardziej odporne na ryzyko"
  },
  {
    id: 13,
    question: "Co to jest zmienna?",
    options: [
      "Stała liczba",
      "Liczba powtórzeń",
      "Cecha przyjmująca co najmniej dwie wartości",
      "Fragment statystyki",
      "Wynik testu",
      "Część kwestionariusza"
    ],
    correctAnswer: "Cecha przyjmująca co najmniej dwie wartości"
  },
  {
    id: 14,
    question: "Czym różnią się zmienne obserwowalne od nieobserwowalnych? (wielokrotny wybór)",
    options: [
      "Obserwowalne można zmierzyć bezpośrednio (np. wzrost)",
      "Nieobserwowalne to konstrukty jak inteligencja czy stres",
      "Obserwowalne to teoria, nieobserwowalne to praktyka",
      "Nieobserwowalne są błędami",
      "Obserwowalne są subiektywne",
      "Nieobserwowalne nie mają znaczenia"
    ],
    correctAnswer: [
      "Obserwowalne można zmierzyć bezpośrednio (np. wzrost)",
      "Nieobserwowalne to konstrukty jak inteligencja czy stres"
    ]
  },
  {
    id: 15,
    question: "Co to jest operacjonalizacja?",
    options: [
      "Tłumaczenie badań na angielski",
      "Przypadkowe nadanie wartości",
      "Przekładanie konstruktu teoretycznego na coś, co da się zmierzyć",
      "Opisywanie zmiennych ogólnie",
      "Rezygnacja z pomiaru",
      "Wybór uczestników badania"
    ],
    correctAnswer: "Przekładanie konstruktu teoretycznego na coś, co da się zmierzyć"
  },
  {
    id: 16,
    question: "Która skala ma absolutne zero i pozwala powiedzieć, że coś jest dwa razy większe?",
    options: [
      "Nominalna",
      "Porządkowa",
      "Przedziałowa",
      "Stosunkowa",
      "Interaktywna",
      "Segmentowa"
    ],
    correctAnswer: "Stosunkowa"
  },
  {
    id: 17,
    question: "Jakie są rodzaje skal pomiarowych? (wielokrotny wybór)",
    options: [
      "Nominalna – kategorie bez porządku (np. płeć)",
      "Porządkowa – kolejność (np. wykształcenie)",
      "Przedziałowa – równe odstępy, brak zera absolutnego (np. IQ)",
      "Stosunkowa – z absolutnym zerem (np. wiek, dochód)",
      "Dynamiczna",
      "Reaktywna"
    ],
    correctAnswer: [
      "Nominalna – kategorie bez porządku (np. płeć)",
      "Porządkowa – kolejność (np. wykształcenie)",
      "Przedziałowa – równe odstępy, brak zera absolutnego (np. IQ)",
      "Stosunkowa – z absolutnym zerem (np. wiek, dochód)"
    ]
  },
  {
    id: 18,
    question: "Które z poniższych to metody ilościowe? (wielokrotny wybór)",
    options: [
      "Sondaż",
      "Korelacja",
      "Eksperyment",
      "Quasi-eksperyment",
      "FGI",
      "IDI"
    ],
    correctAnswer: [
      "Sondaż",
      "Korelacja",
      "Eksperyment",
      "Quasi-eksperyment"
    ]
  },
  {
    id: 19,
    question: "Czym jest korelacja?",
    options: [
      "Zależność przyczynowo-skutkowa",
      "Statystyczny związek między zmiennymi",
      "Zbieżność losowa",
      "Opinia badacza",
      "Technika jakościowa",
      "Błąd w próbie"
    ],
    correctAnswer: "Statystyczny związek między zmiennymi"
  },
  {
    id: 20,
    question: "Czym jest korelacja pozorna?",
    options: [
      "Fałszywe dane",
      "Związek wynikający z trzeciej zmiennej",
      "Korelacja bardzo słaba",
      "Związek negatywny",
      "Korelacja w małej grupie",
      "Brak zmiennych"
    ],
    correctAnswer: "Związek wynikający z trzeciej zmiennej"
  },
  {
    id: 21,
    question: "Czym jest eksperyment?",
    options: [
      "Obserwacja uczestników",
      "Manipulacja zmienną i losowy przydział do grup",
      "Opis grupy respondentów",
      "Badanie opinii",
      "Testowanie bez hipotezy",
      "Zbieranie danych przez telefon"
    ],
    correctAnswer: "Manipulacja zmienną i losowy przydział do grup"
  },
  {
    id: 22,
    question: "Czym różni się quasi-eksperyment od eksperymentu?",
    options: [
      "Jest bardziej naukowy",
      "Zawiera więcej statystyk",
      "Nie ma losowego przydziału do grup",
      "Wykorzystuje tylko dzieci",
      "Trwa krócej",
      "Jest zawsze lepszy"
    ],
    correctAnswer: "Nie ma losowego przydziału do grup"
  },
  {
    id: 23,
    question: "Które techniki to techniki zbierania danych ilościowych? (wielokrotny wybór)",
    options: [
      "CAWI – ankiety internetowe",
      "CATI – ankiety telefoniczne",
      "CAPI – z pomocą ankietera",
      "PAPI – wersja papierowa",
      "Obserwacja uczestnicząca",
      "Wywiad narracyjny"
    ],
    correctAnswer: [
      "CAWI – ankiety internetowe",
      "CATI – ankiety telefoniczne",
      "CAPI – z pomocą ankietera",
      "PAPI – wersja papierowa"
    ]
  },
  {
    id: 24,
    question: "Czym różnią się pytania otwarte od zamkniętych?",
    options: [
      "Otwarte są krótsze",
      "Otwarte – respondent sam formułuje odpowiedź, zamknięte – wybiera z listy",
      "Zamknięte są tylko w badaniach jakościowych",
      "Otwarte nie są analizowane",
      "Zamknięte są nieczytelne",
      "Otwarte są zawsze lepsze"
    ],
    correctAnswer: "Otwarte – respondent sam formułuje odpowiedź, zamknięte – wybiera z listy"
  },
  {
    id: 25,
    question: "Czego unikać w pytaniach ankietowych? (wielokrotny wybór)",
    options: [
      "Dwuznaczności",
      "Podwójnych przeczeń",
      "Sformułowań sugerujących odpowiedź",
      "Pytań o uczucia",
      "Krótkich pytań",
      "Pytań o fakty"
    ],
    correctAnswer: [
      "Dwuznaczności",
      "Podwójnych przeczeń",
      "Sformułowań sugerujących odpowiedź"
    ]
  },
  {
    id: 26,
    question: "Które z poniższych to zasady etyczne w badaniach? (wielokrotny wybór)",
    options: [
      "Świadoma zgoda",
      "Anonimowość i poufność",
      "Niekrzywdzenie uczestników",
      "Debriefing po badaniu",
      "Ukrywanie celu badania",
      "Zbieranie danych bez pytania"
    ],
    correctAnswer: [
      "Świadoma zgoda",
      "Anonimowość i poufność",
      "Niekrzywdzenie uczestników",
      "Debriefing po badaniu"
    ]
  },
  {
    id: 27,
    question: "Co powinien zawierać formularz zgody? (wielokrotny wybór)",
    options: [
      "Informację o celu i przebiegu badania",
      "Dobrowolność udziału",
      "Prawo do rezygnacji w każdej chwili",
      "Informację o ryzykach i korzyściach",
      "Dane kontaktowe do badacza",
      "Obowiązek zakończenia badania"
    ],
    correctAnswer: [
      "Informację o celu i przebiegu badania",
      "Dobrowolność udziału",
      "Prawo do rezygnacji w każdej chwili",
      "Informację o ryzykach i korzyściach",
      "Dane kontaktowe do badacza"
    ]
  },

  // ───────── 28-60 (dodane poprzednio) ─────────
  {
    id: 28,
    question: "Czym są dane pierwotne (primary data)?",
    options: [
      "Dane, które nie zostały zebrane pod kątem problemu badawczego",
      "Dane wywołane przez badacza na potrzeby konkretnego problemu",
      "Archiwalne dane sprzed lat",
      "Losowe wpisy z forów internetowych",
      "Zagregowane statystyki publiczne",
      "Wyniki metaanalizy"
    ],
    correctAnswer: "Dane wywołane przez badacza na potrzeby konkretnego problemu"
  },
  {
    id: 29,
    question: "Czym są dane wtórne (secondary data) / dane zastane?",
    options: [
      "Dane zebrane w laboratorium na potrzeby eksperymentu",
      "Dane, które już istnieją i nie były gromadzone do naszego badania",
      "Wyniki ankiety prowadzonej wśród pracowników badacza",
      "Tylko pliki multimedialne (audio/wideo)",
      "Dane zawsze jakościowe, nigdy ilościowe",
      "Zawsze są darmowe i publicznie dostępne"
    ],
    correctAnswer: "Dane, które już istnieją i nie były gromadzone do naszego badania"
  },
  {
    id: 30,
    question: "Badania niereaktywne charakteryzuje to, że…",
    options: [
      "Respondenci wypełniają ankietę internetową w czasie rzeczywistym",
      "Badany nie wie, że jest obiektem badania, a dane pochodzą z istniejących źródeł",
      "Badacze prowokują określone zachowania w laboratorium",
      "Używa się wyłącznie eksperymentów polowych",
      "Wymagają obowiązkowej randomizacji próby",
      "Zawsze analizują dane biometryczne"
    ],
    correctAnswer: "Badany nie wie, że jest obiektem badania, a dane pochodzą z istniejących źródeł"
  },
  {
    id: 31,
    question: "Które z poniższych to zalety dzielenia się danymi i pracy na danych zastanych? (wielokrotny wybór)",
    options: [
      "Transparentność badań",
      "Szybkość i niski koszt pozyskania danych",
      "Łatwa powtarzalność badań",
      "Zawsze idealna kompletność danych",
      "Brak konieczności analizy statystycznej",
      "Pełna reprezentatywność bez dodatkowych czynności"
    ],
    correctAnswer: [
      "Transparentność badań",
      "Szybkość i niski koszt pozyskania danych",
      "Łatwa powtarzalność badań"
    ]
  },
  {
    id: 32,
    question: "Które stwierdzenia opisują wady pracy na danych zastanych? (wielokrotny wybór)",
    options: [
      "Niekompletność lub brak niektórych zmiennych",
      "Nieznane okoliczności powstania danych",
      "Niereprezentatywność materiału",
      "Pełna kontrola nad wszystkimi zmiennymi",
      "Zawsze wysoka trafność pomiarowa",
      "Dane są celowo zbierane pod nasze hipotezy"
    ],
    correctAnswer: [
      "Niekompletność lub brak niektórych zmiennych",
      "Nieznane okoliczności powstania danych",
      "Niereprezentatywność materiału"
    ]
  },
  {
    id: 33,
    question: "Desk Research polega głównie na…",
    options: [
      "Analizowaniu istniejących źródeł wewnętrznych i zewnętrznych w celu opisu rynku",
      "Prowadzeniu eksperymentów z udziałem konsumentów",
      "Testowaniu hipotez w laboratorium psychologicznym",
      "Generowaniu Big Data w czasie rzeczywistym",
      "Korzystaniu wyłącznie z danych jakościowych w terenie",
      "Anonimowym obserwowaniu użytkowników aplikacji"
    ],
    correctAnswer: "Analizowaniu istniejących źródeł wewnętrznych i zewnętrznych w celu opisu rynku"
  },
  {
    id: 34,
    question: "Thick Data cechuje się tym, że…",
    options: [
      "Oparte jest na uczeniu się maszyn i milionach rekordów",
      "Koncentruje się na pytaniu „dlaczego?” i ma charakter antropologiczny",
      "Zawsze wynika z analizy logów serwerowych",
      "Nie pozwala zrozumieć motywacji konsumentów",
      "Służy wyłącznie do predykcyjnych algorytmów marketingowych",
      "Nie wymaga żadnych rozmów z ludźmi"
    ],
    correctAnswer: "Koncentruje się na pytaniu „dlaczego?” i ma charakter antropologiczny"
  },
  {
    id: 35,
    question: "Który etap NIE należy do pięciu kroków przeglądu literatury?",
    options: [
      "Zidentyfikuj kluczowe terminy",
      "Zbieraj dane pierwotne na dużej próbie",
      "Krytycznie oceń znalezione publikacje",
      "Zorganizuj literaturę w menedżerze cytowań",
      "Napisz uporządkowany przegląd",
      "Szukaj źródeł w różnych bazach"
    ],
    correctAnswer: "Zbieraj dane pierwotne na dużej próbie"
  },
  {
    id: 36,
    question: "Głównym celem przeglądu literatury jest…",
    options: [
      "Wskazanie luki badawczej i uzasadnienie potrzeby nowego badania",
      "Zwiększenie liczby cytowań autora",
      "Publikacja artykułu bez recenzji",
      "Zastąpienie całego procesu badawczego",
      "Ominięcie etapu operacjonalizacji",
      "Wyłącznie nauka stylu APA"
    ],
    correctAnswer: "Wskazanie luki badawczej i uzasadnienie potrzeby nowego badania"
  },
  {
    id: 37,
    question: "Przegląd literatury prowadzony według ściśle określonego protokołu i kryteriów włączenia to…",
    options: [
      "Przegląd narracyjny",
      "Przegląd systematyczny",
      "Desk Research",
      "Bibliografia adnotowana",
      "Scoping review bez analizy krytycznej",
      "Case study"
    ],
    correctAnswer: "Przegląd systematyczny"
  },
  {
    id: 38,
    question: "W badaniach ilościowych narzędzia pomiarowe są zazwyczaj…",
    options: [
      "Standaryzowane, jak kwestionariusz lub ankieta",
      "Tworzone spontanicznie w trakcie badania",
      "Ukryte przed respondentem",
      "Zawsze wizualne (mapy myśli)",
      "Jednorazowe i niepowtarzalne",
      "Niepodlegające walidacji"
    ],
    correctAnswer: "Standaryzowane, jak kwestionariusz lub ankieta"
  },
  {
    id: 39,
    question: "Typowa wielkość próby w badaniach jakościowych to…",
    options: [
      "20-50 badanych",
      "200-1000 badanych",
      "Ponad 10 000 badanych",
      "Jedna osoba zawsze wystarczy",
      "Minimum 500 dla statystycznej mocy",
      "Zawsze taka sama jak w ilościowych"
    ],
    correctAnswer: "20-50 badanych"
  },
  {
    id: 40,
    question: "Które efekty grupowe są pożądane podczas FGI? (wielokrotny wybór)",
    options: [
      "Synergia",
      "Stymulacja",
      "Śnieżna kula",
      "Totalna dominacja jednego uczestnika",
      "Ciche milczenie wszystkich",
      "Stały off-topic"
    ],
    correctAnswer: [
      "Synergia",
      "Stymulacja",
      "Śnieżna kula"
    ]
  },
  {
    id: 41,
    question: "Technika projekcyjna, w której marki nadaje się cechy ludzkie, to…",
    options: [
      "Personifikacja",
      "Animizacja (marka jako zwierzę)",
      "Test niedokończonych zdań",
      "Kolaż",
      "Drzewo emocji",
      "Mapa ciepła"
    ],
    correctAnswer: "Personifikacja"
  },
  {
    id: 42,
    question: "Moderator w grupie fokusowej powinien… (wielokrotny wybór)",
    options: [
      "Parafrazować odpowiedzi",
      "Dopytywać i klaryfikować",
      "Aktywnie słuchać",
      "Oceniać i krytykować uczestników",
      "Ignorować komunikację niewerbalną",
      "Czytać pytania z kartki bez reakcji"
    ],
    correctAnswer: [
      "Parafrazować odpowiedzi",
      "Dopytywać i klaryfikować",
      "Aktywnie słuchać"
    ]
  },
  {
    id: 43,
    question: "Gęsty opis w etnografii oznacza…",
    options: [
      "Szczegółowe odzwierciedlenie działań, intencji i kontekstu kulturowego",
      "Minimalistyczne streszczenie obserwacji",
      "Opis statystyczny bez cytatów",
      "Wyłączne stosowanie tabel przestawnych",
      "Zastąpienie wszystkich notatek nagraniem wideo",
      "Raport napisany w formie punktów"
    ],
    correctAnswer: "Szczegółowe odzwierciedlenie działań, intencji i kontekstu kulturowego"
  },
  {
    id: 44,
    question: "Badacz, który w netnografii otwarcie mówi o swojej obecności i aktywnie uczestniczy w dyskusji, to wariant…",
    options: [
      "Uczestnik",
      "Przezroczysty obserwator",
      "Troll",
      "Noob",
      "Shadow",
      "Moderator techniczny"
    ],
    correctAnswer: "Uczestnik"
  },
  {
    id: 45,
    question: "Zgodnie z kryteriami Roberta Yina decyzja o zastosowaniu studium przypadku jest właściwa, gdy… (wielokrotny wybór)",
    options: [
      "Celem jest odpowiedź na pytanie „Jak?” lub „Dlaczego?”",
      "Nie można manipulować zachowaniem badanych",
      "Kontekst jest kluczowy dla interpretacji",
      "Granice między przypadkiem a kontekstem są wyraźne i jednoznaczne",
      "Interesuje nas tylko liczebność zjawiska",
      "Potrzebna jest reprezentatywna próba losowa"
    ],
    correctAnswer: [
      "Celem jest odpowiedź na pytanie „Jak?” lub „Dlaczego?”",
      "Nie można manipulować zachowaniem badanych",
      "Kontekst jest kluczowy dla interpretacji"
    ]
  },
  {
    id: 46,
    question: "Dopasowanie wzorców w analizie studium przypadku polega na…",
    options: [
      "Porównywaniu wzorców empirycznych z przewidywaniami teoretycznymi",
      "Losowym łączeniu zmiennych w model regresji",
      "Testowaniu hipotez w dużej próbie ankietowej",
      "Zakodowaniu wywiadów w programie CAQDAS",
      "Łączeniu kilku przypadków w syntezę przekrojową",
      "Generowaniu infografik na końcu raportu"
    ],
    correctAnswer: "Porównywaniu wzorców empirycznych z przewidywaniami teoretycznymi"
  },
  {
    id: 47,
    question: "Obserwacja standaryzowana wymaga…",
    options: [
      "Scheduły (karty) obserwacyjnej z precyzyjnymi kategoriami",
      "Całkowitej improwizacji obserwatora",
      "Braku jakichkolwiek wytycznych",
      "Zawsze ukrytej kamery",
      "Udziału co najmniej 10 obserwatorów jednocześnie",
      "Testu projektowego przed obserwacją"
    ],
    correctAnswer: "Scheduły (karty) obserwacyjnej z precyzyjnymi kategoriami"
  },
  {
    id: 48,
    question: "Efekt Hawthorne opisuje…",
    options: [
      "Zmianę zachowania ludzi z powodu świadomości bycia obserwowanym",
      "Losowy błąd pomiaru w ankietach internetowych",
      "Metodę triangulacji danych",
      "Zjawisko frustracji moderatora fokusów",
      "Technikę analizy Big Data",
      "Problem autoselekcji próby"
    ],
    correctAnswer: "Zmianę zachowania ludzi z powodu świadomości bycia obserwowanym"
  },
  {
    id: 49,
    question: "Shadowing w badaniach jakościowych to…",
    options: [
      "Długotrwała obserwacja jednostki w jej naturalnym środowisku",
      "Anonimowa ankieta online",
      "Zaawansowana metoda regresji",
      "Wyłącznie nagrywanie rozmów telefonicznych",
      "Projektowanie eksperymentu laboratoryjnego",
      "Technika wizualizacji danych"
    ],
    correctAnswer: "Długotrwała obserwacja jednostki w jej naturalnym środowisku"
  },
  {
    id: 50,
    question: "W wywiadach pogłębionych „punkt nasycenia” oznacza, że…",
    options: [
      "Kolejne wywiady nie wnoszą nowych informacji",
      "Wywiad trwa już ponad 4 godziny",
      "Respondent nie chce odpowiadać",
      "Budżet badania się wyczerpał",
      "Wszystkie transkrypcje są już zakodowane",
      "Uzyskano 100 % odpowiedzi na ankietę"
    ],
    correctAnswer: "Kolejne wywiady nie wnoszą nowych informacji"
  },
  {
    id: 51,
    question: "Triangulacja metod (wg Denzina) polega na… (wielokrotny wybór)",
    options: [
      "Łączeniu danych z różnych metod (np. ankieta i wywiad)",
      "Korzystaniu z różnych badaczy analizujących te same dane",
      "Porównywaniu interpretacji z różnych teorii",
      "Analizie wyłącznie jednego źródła danych",
      "Zastąpieniu obserwacji eksperymentem",
      "Wykluczeniu błędów systematycznych"
    ],
    correctAnswer: [
      "Łączeniu danych z różnych metod (np. ankieta i wywiad)",
      "Korzystaniu z różnych badaczy analizujących te same dane",
      "Porównywaniu interpretacji z różnych teorii"
    ]
  },
  {
    id: 52,
    question: "Paradygmat pozytywistyczny zakłada, że…",
    options: [
      "Rzeczywistość jest obiektywna i podlega odkrywaniu poprzez zmysły",
      "Wiedza jest konstruowana subiektywnie przez uczestników",
      "Metody jakościowe są jedynym sposobem badania świata",
      "Nie istnieją uniwersalne prawa społeczne",
      "Badacz i badani tworzą znaczenia wspólnie",
      "Wyniki badań zawsze mają charakter idiograficzny"
    ],
    correctAnswer: "Rzeczywistość jest obiektywna i podlega odkrywaniu poprzez zmysły"
  },
  {
    id: 53,
    question: "Dobór próby metodą „kuli śnieżnej” polega na…",
    options: [
      "Polecaniu kolejnych uczestników przez już przebadane osoby",
      "Losowaniu numerów PESEL z bazy GUS",
      "Rekrutowaniu wyłącznie ochotników z forów internetowych",
      "Randomizacji blokowej badanych",
      "Ustalaniu kwot demograficznych z góry",
      "Zawsze wymaga udziału panelu online"
    ],
    correctAnswer: "Polecaniu kolejnych uczestników przez już przebadane osoby"
  },
  {
    id: 54,
    question: "Który rodzaj badań online jest synchroniczny?",
    options: [
      "Wywiad przez Zoom na żywo",
      "Ankieta e-mailowa wypełniana w dowolnym czasie",
      "Analiza logów serwera (niereaktywna)",
      "Desk Research statystyk GUS",
      "Niereaktywny scraping mediów społecznościowych",
      "Przegląd literatury w bazach online"
    ],
    correctAnswer: "Wywiad przez Zoom na żywo"
  },
  {
    id: 55,
    question: "Do mocnych stron badań online zaliczamy… (wielokrotny wybór)",
    options: [
      "Łatwy dostęp do rozproszonych respondentów",
      "Szybkość zbierania danych",
      "Możliwość badania w przyjaznym środowisku respondenta",
      "Całkowity brak problemów technicznych",
      "Pełną kontrolę nad warunkami zewnętrznymi",
      "Zawsze reprezentatywną próbę bez dodatkowych zabiegów"
    ],
    correctAnswer: [
      "Łatwy dostęp do rozproszonych respondentów",
      "Szybkość zbierania danych",
      "Możliwość badania w przyjaznym środowisku respondenta"
    ]
  },
  {
    id: 56,
    question: "Badania idiograficzne dążą do…",
    options: [
      "Dogłębnego zrozumienia konkretnego przypadku w jego kontekście",
      "Formułowania uniwersalnych praw dla całej populacji",
      "Użycia wyłącznie statystyki inferencyjnej",
      "Generalizacji wyników na kraje ościenne",
      "Zbadania minimum 1000 osób",
      "Zrezygnowania z opisu kontekstu"
    ],
    correctAnswer: "Dogłębnego zrozumienia konkretnego przypadku w jego kontekście"
  },
  {
    id: 57,
    question: "„Branie w nawias” w etnografii oznacza…",
    options: [
      "Świadome zawieszenie własnych założeń i interpretacji",
      "Wprowadzenie cytatów do raportu",
      "Wykreślenie danych odstających",
      "Kodowanie materiału w NVivo",
      "Zastosowanie regresji liniowej",
      "Pominięcie notatek terenowych"
    ],
    correctAnswer: "Świadome zawieszenie własnych założeń i interpretacji"
  },
  {
    id: 58,
    question: "Które z poniższych jest źródłem WEWNĘTRZNYM w Desk Research?",
    options: [
      "Raport finansowy własnej firmy",
      "Encyklopedia Britannica",
      "Baza Eurostat",
      "Wikipedia",
      "Artykuł w prasie branżowej",
      "Dane GUS"
    ],
    correctAnswer: "Raport finansowy własnej firmy"
  },
  {
    id: 59,
    question: "Które podejście badawcze łączy opis ZJAWISKA z próbą jego zmiany?",
    options: [
      "Action Research",
      "Case Study",
      "Desk Research",
      "Metaanaliza",
      "Triangulacja",
      "Badanie niereaktywne"
    ],
    correctAnswer: "Action Research"
  },
  {
    id: 60,
    question: "Big Data w porównaniu z Thick Data charakteryzuje się…",
    options: [
      "Samouczeniem maszyn i analizą ogromnych wolumenów danych",
      "Małym zbiorem informacji koncentrującym się na motywach",
      "Wyłącznie pytaniem „dlaczego?”",
      "Brakiem matematycznych algorytmów",
      "Obowiązkową obserwacją uczestniczącą",
      "Tylko jakościowym charakterem danych"
    ],
    correctAnswer: "Samouczeniem maszyn i analizą ogromnych wolumenów danych"
  },

  // ───────── 61-80 (NOWE) ─────────
  {
    id: 61,
    question: "Konceptualizacja w procesie badawczym to…",
    options: [
      "Tworzenie konkretnych procedur pomiaru zmiennych",
      "Określanie znaczenia używanych pojęć i zmiennych",
      "Losowe przypisywanie badanych do grup",
      "Zapisywanie wyników w bazie danych",
      "Analiza statystyczna wyników",
      "Publikacja artykułu"
    ],
    correctAnswer: "Określanie znaczenia używanych pojęć i zmiennych"
  },
  {
    id: 62,
    question: "Metody ilościowe mają zazwyczaj charakter…",
    options: [
      "Eksploracyjny i subiektywny",
      "Rozstrzygający i dążą do uogólniania wyników na populację",
      "Narracyjny i biograficzny",
      "Fenomenologiczny",
      "Wyłącznie opisowy bez statystyki",
      "Spontaniczny i niestrukturalny"
    ],
    correctAnswer: "Rozstrzygający i dążą do uogólniania wyników na populację"
  },
  {
    id: 63,
    question: "Dobór próby w badaniach jakościowych jest zwykle…",
    options: [
      "Losowy i reprezentatywny",
      "Nielosowy i celowy",
      "Warstwowy losowy",
      "Systematyczny co 10-tą osobę",
      "Prosty losowy z notabli",
      "Zawsze kwotowy"
    ],
    correctAnswer: "Nielosowy i celowy"
  },
  {
    id: 64,
    question: "Efekt oczekiwań społecznych polega na…",
    options: [
      "Tendencji respondentów do udzielania odpowiedzi zgodnych z normami społecznymi",
      "Losowym zaznaczaniu odpowiedzi",
      "Całkowitym braku motywacji do udziału w badaniu",
      "Zwiększonej szczerości odpowiedzi w anonimowych ankietach",
      "Błędem losowym przy kodowaniu danych",
      "Automatycznym wypełnianiu ankiet przez boty"
    ],
    correctAnswer: "Tendencji respondentów do udzielania odpowiedzi zgodnych z normami społecznymi"
  },
  {
    id: 65,
    question: "Paradygmat konstruktywistyczny zakłada, że…",
    options: [
      "Rzeczywistość jest tworzona subiektywnie przez ludzi i ich interakcje",
      "Istnieje jedna obiektywna rzeczywistość odkrywana zmysłami",
      "Badania muszą zawsze używać metod ilościowych",
      "Hipotezy są zbędne w nauce",
      "Obserwacja jest niemożliwa",
      "Wszystkie dane muszą być liczbowe"
    ],
    correctAnswer: "Rzeczywistość jest tworzona subiektywnie przez ludzi i ich interakcje"
  },
  {
    id: 66,
    question: "Triangulacja badaczy oznacza…",
    options: [
      "Analizę tych samych danych przez różnych badaczy",
      "Użycie wielu źródeł danych",
      "Łączenie metod jakościowych i ilościowych",
      "Porównywanie różnych teorii",
      "Powtórzenie badania po roku",
      "Randomizację grup badanych"
    ],
    correctAnswer: "Analizę tych samych danych przez różnych badaczy"
  },
  {
    id: 67,
    question: "Wyjaśnienie nomotetyczne dąży do…",
    options: [
      "Formułowania uniwersalnych praw dla całej populacji",
      "Dogłębnego zrozumienia pojedynczego przypadku",
      "Opisania narracji życiowej jednostki",
      "Zmiany sytuacji w społeczności lokalnej",
      "Wyłącznie analizy treści mediów",
      "Zastąpienia teorii opisem statystycznym"
    ],
    correctAnswer: "Formułowania uniwersalnych praw dla całej populacji"
  },
  {
    id: 68,
    question: "Analizy Big Data zwykle wymagają…",
    options: [
      "Specjalistycznego oprogramowania i umiejętności analitycznych",
      "Wyłącznie kartki i długopisu",
      "Małej liczby obserwacji",
      "Braku wiedzy matematycznej",
      "Tylko jakościowych opisów zjawisk",
      "Całkowitego pominięcia etapów czyszczenia danych"
    ],
    correctAnswer: "Specjalistycznego oprogramowania i umiejętności analitycznych"
  },
  {
    id: 69,
    question: "Technika komiksowych dymków w FGI to przykład…",
    options: [
      "Techniki projekcyjnej",
      "Metody losowego doboru próby",
      "Analizy ilościowej",
      "Modelu logicznego",
      "Syntezy przekrojowej",
      "Scheduły obserwacyjnej"
    ],
    correctAnswer: "Techniki projekcyjnej"
  },
  {
    id: 70,
    question: "W etnografii „wiedza milcząca” odnosi się do…",
    options: [
      "Trudnej do werbalizacji wiedzy utrwalonej w praktykach",
      "Głośnych deklaracji publicznych",
      "Oficjalnych dokumentów organizacji",
      "Danych liczbowych z ankiet",
      "Raportów finansowych",
      "Wyników testów psychologicznych"
    ],
    correctAnswer: "Trudnej do werbalizacji wiedzy utrwalonej w praktykach"
  },
  {
    id: 71,
    question: "W netnografii rola „trolla” polega na…",
    options: [
      "Prowokowaniu grupy negatywnymi emocjami w celu uzyskania głębszych odpowiedzi",
      "Byciu niewidocznym obserwatorem",
      "Angażowaniu się jawnie i konstruktywnie",
      "Zadawaniu wielu podstawowych pytań jak nowicjusz",
      "Moderowaniu dyskusji tematycznych bez udziału badacza",
      "Analizie statystyk odwiedzin strony"
    ],
    correctAnswer: "Prowokowaniu grupy negatywnymi emocjami w celu uzyskania głębszych odpowiedzi"
  },
  {
    id: 72,
    question: "Analiza szeregów czasowych w studium przypadku służy do…",
    options: [
      "Śledzenia zmian w czasie i porównywania trendów empirycznych z teoretycznymi",
      "Randomizacji grup eksperymentalnych",
      "Losowego doboru respondentów do ankiety",
      "Budowania modeli regresji liniowej",
      "Kodowania treści wywiadów narracyjnych",
      "Walidacji kwestionariusza"
    ],
    correctAnswer: "Śledzenia zmian w czasie i porównywania trendów empirycznych z teoretycznymi"
  },
  {
    id: 73,
    question: "Jedną z wad obserwacji uczestniczącej jest…",
    options: [
      "Zaangażowanie emocjonalne badacza mogące wpłynąć na obiektywność",
      "Brak możliwości notowania na bieżąco w obserwacji nieuczestniczącej",
      "Pełna kontrola nad sytuacją badawczą",
      "Natychmiastowa standaryzacja danych",
      "Zawsze krótki czas trwania badania",
      "Brak problemów etycznych"
    ],
    correctAnswer: "Zaangażowanie emocjonalne badacza mogące wpłynąć na obiektywność"
  },
  {
    id: 74,
    question: "Plan eksperymentalny z powtarzanym pomiarem (within-subject) oznacza, że…",
    options: [
      "Ci sami uczestnicy są mierzeni wielokrotnie w różnych warunkach",
      "Grupy są losowane raz i mierzona tylko jedna zmienna",
      "Każdy uczestnik trafia do innej grupy badawczej",
      "Zmienna zależna nie jest mierzona",
      "Eksperyment trwa zawsze mniej niż 5 minut",
      "Badanie jest zawsze niereaktywne"
    ],
    correctAnswer: "Ci sami uczestnicy są mierzeni wielokrotnie w różnych warunkach"
  },
  {
    id: 75,
    question: "Scenariusz wywiadu indywidualnego (IDI) powinien mieć strukturę…",
    options: [
      "Lejka – od pytań ogólnych do szczegółowych",
      "Piramidy – od szczegółowych do ogólnych",
      "Losową bez kolejności",
      "Wyłącznie zamkniętą listę pytań",
      "Formę skali Likerta",
      "Zawierać tylko jedno pytanie"
    ],
    correctAnswer: "Lejka – od pytań ogólnych do szczegółowych"
  },
  {
    id: 76,
    question: "Dobór teoretyczny próby polega na…",
    options: [
      "Włączaniu przypadków wskazanych przez teorię dla pełniejszego wyjaśnienia zjawiska",
      "Losowym wybieraniu co dziesiątej osoby na liście",
      "Ustalaniu kwot demograficznych z góry",
      "Selekcji według kolejności zgłoszeń",
      "Rekrutacji wyłącznie przez ogłoszenia w social media",
      "Pomiarze na reprezentatywnej próbie ogólnopolskiej"
    ],
    correctAnswer: "Włączaniu przypadków wskazanych przez teorię dla pełniejszego wyjaśnienia zjawiska"
  },
  {
    id: 77,
    question: "Replikacja wcześniejszych badań służy głównie…",
    options: [
      "Weryfikacji i potwierdzeniu (lub obaleniu) wcześniejszych wyników",
      "Generowaniu losowych hipotez",
      "Zmniejszeniu liczby publikacji naukowych",
      "Zastąpieniu badania pilotażowego",
      "Wyłącznie prezentacji wyników w mediach",
      "Ominięciu procesu recenzji"
    ],
    correctAnswer: "Weryfikacji i potwierdzeniu (lub obaleniu) wcześniejszych wyników"
  },
  {
    id: 78,
    question: "Rzetelność pomiaru oznacza, że…",
    options: [
      "Powtórzone pomiary w tych samych warunkach dają te same wyniki",
      "Pomiar dotyczy dokładnie tego, co miał mierzyć",
      "Badanie jest zawsze anonimowe",
      "Użyto metody triangulacji",
      "Kwestionariusz składa się z pytań otwartych",
      "Próba jest losowa"
    ],
    correctAnswer: "Powtórzone pomiary w tych samych warunkach dają te same wyniki"
  },
  {
    id: 79,
    question: "Trafność pomiaru odnosi się do…",
    options: [
      "Tego, czy pomiar rzeczywiście mierzył zamierzoną zmienną",
      "Powtarzalności wyników",
      "Losowego doboru próby",
      "Szybkości wypełniania ankiety",
      "Anonimowości respondentów",
      "Liczby pytań w ankiecie"
    ],
    correctAnswer: "Tego, czy pomiar rzeczywiście mierzył zamierzoną zmienną"
  },
  {
    id: 80,
    question: "Dyskusja wyników w raporcie badawczym polega na…",
    options: [
      "Interpretacji rezultatów w kontekście literatury i celu badania",
      "Prezentacji surowych danych bez komentarza",
      "Wyłącznie przedstawieniu tabel statystycznych",
      "Wprowadzeniu nowych, nieprzebadanych hipotez",
      "Usunięciu wszystkich odniesień do teorii",
      "Randomizacji kolejności rozdziałów"
    ],
    correctAnswer: "Interpretacji rezultatów w kontekście literatury i celu badania"
  }
];

////////////////////////////////////////////////////////////////////////
// "PACZKI" PYTAŃ  – 8 zakresów po 10 pytań
////////////////////////////////////////////////////////////////////////
export const questionRanges: QuestionRange[] = [
  { id: 1, label: "Questions 1 – 10", startId: 1, endId: 10 },
  { id: 2, label: "Questions 11 – 20", startId: 11, endId: 20 },
  { id: 3, label: "Questions 21 – 30", startId: 21, endId: 30 },
  { id: 4, label: "Questions 31 – 40", startId: 31, endId: 40 },
  { id: 5, label: "Questions 41 – 50", startId: 41, endId: 50 },
  { id: 6, label: "Questions 51 – 60", startId: 51, endId: 60 },
  { id: 7, label: "Questions 61 – 70", startId: 61, endId: 70 },
  { id: 8, label: "Questions 71 – 80", startId: 71, endId: 80 }
];

////////////////////////////////////////////////////////////////////////
// FUNKCJA FILTRUJĄCA
////////////////////////////////////////////////////////////////////////
export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  if (selectedRangeIds.length === 0) return questions; // brak filtrów → zwróć wszystko
  const selectedRanges = questionRanges.filter(r => selectedRangeIds.includes(r.id));
  return questions.filter(q =>
    selectedRanges.some(r => q.id >= r.startId && q.id <= r.endId)
  );
};
