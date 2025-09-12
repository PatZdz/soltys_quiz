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
    question: "Umowa spółki ABC z o.o. została zawarta w dniu 2 kwietnia 2009 roku. Wspólnicy zastanawiają się, czy w roku 2020 mogą zmienić jej postanowienia i wprowadzić do umowy spółki postanowienia, zgodnie z którymi zarząd powinien uzyskać zgodę rady nadzorczej na zaciąganie zobowiązań, których wysokość przekracza 100 000 zł. W tej sytuacji sąd rejestrowy musi zarejestrować nasze zdanie, a zmiana musi zostać wprowadzona do rejestru.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 2,
    question: "Jakie czynności prawne mogą nie być zawierane przez pełnomocnika?",
    options: [
      "uznanie dziecka, zawarcie małżeństwa i każde inne umowy",
      "testament",
      "podjęcie decyzji prawnych w sądzie",
      "zawarcie umowy"
    ],
    correctAnswer: [
      "uznanie dziecka, zawarcie małżeństwa i każde inne umowy",
      "testament",
      "podjęcie decyzji prawnych w sądzie"
    ]
  },
  {
    id: 3,
    question: "Zamierzam razem z innymi 3 osobami rozpocząć działalność gospodarczą w zakresie produkcji odzieży. Do prowadzenia tej działalności możemy utworzyć:",
    options: ["spółkę komandytową", "spółkę akcyjną", "spółkę partnerską", "spółkę jawną"],
    correctAnswer: ["spółkę komandytową", "spółkę akcyjną", "spółkę jawną"]
  },
  {
    id: 4,
    question: "Spółka z o.o. zamierza udzielić Janowi Kowalskiemu pełnomocnictwa do zawierania w imieniu spółki umów sprzedaży towarów handlowych. Udzielone pełnomocnictwo będzie:",
    options: [
      "pełnomocnictwem rodzajowym",
      "pełnomocnictwem domniemanym",
      "pełnomocnictwem do poszczególnej czynności prawnej",
      "pełnomocnictwem ogólnym"
    ],
    correctAnswer: "pełnomocnictwem rodzajowym"
  },
  {
    id: 5,
    question: "Zobowiązanie w rozumieniu kodeksu cywilnego powstaje w wyniku:",
    options: [
      "wyrządzenia szkody czynem niedozwolonym",
      "wyłącznie w wyniku opóźnienia zapłaty podatku dochodowego od osób fizycznych",
      "zawarcia umowy zlecenia"
    ],
    correctAnswer: ["wyrządzenia szkody czynem niedozwolonym", "zawarcia umowy zlecenia"]
  },
  {
    id: 6,
    question: "Do kompetencji zarządu spółki z o.o. zaliczamy:",
    options: [
      "zwoływanie zgromadzeń wspólników",
      "kontrolę działalności rady nadzorczej",
      "prowadzenie spraw spółki",
      "zawieranie umów w imieniu spółki"
    ],
    correctAnswer: ["zwoływanie zgromadzeń wspólników", "prowadzenie spraw spółki", "zawieranie umów w imieniu spółki"]
  },
  {
    id: 7,
    question: "Do powstania spółki z o.o. wymagane jest:",
    options: [
      "wpis do Krajowego Rejestru Sądowego",
      "uzyskanie zgody ministra gospodarki na utworzenie spółki",
      "powołanie zarządu spółki",
      "zawarcie umowy spółki"
    ],
    correctAnswer: ["wpis do Krajowego Rejestru Sądowego", "powołanie zarządu spółki", "zawarcie umowy spółki"]
  },
  {
    id: 8,
    question: "Odpowiedzialność solidarna trzech dłużników oznacza, że:",
    options: [
      "każdy z dłużników odpowiada w całości długu, a wierzyciel może według swojego wyboru dochodzić roszczenia o całość długu od dowolnego dłużnika solidarnego",
      "każdy z nich odpowiada tylko za 1/3 długu",
      "za dług odpowiada tylko ten dłużnik, który ma największy majątek"
    ],
    correctAnswer: "każdy z dłużników odpowiada w całości długu, a wierzyciel może według swojego wyboru dochodzić roszczenia o całość długu od dowolnego dłużnika solidarnego"
  },
  {
    id: 9,
    question: "Aport to:",
    options: [
      "wyłącznie nieruchomość nabyta przez spółkę",
      "wkład niepieniężny wniesiony do spółki przez wspólnika spółki z o.o.",
      "wkład pieniężny wniesiony do spółki przez wspólnika spółki z o.o.",
      "środek trwały nabyty przez spółkę z o.o. w trakcie prowadzenia działalności spółki"
    ],
    correctAnswer: "wkład niepieniężny wniesiony do spółki przez wspólnika spółki z o.o."
  },
  {
    id: 10,
    question: "Prawo składania oświadczeń woli w imieniu osoby prawnej przysługuje właściwemu organowi wskazanemu w ustawie lub statucie danej osoby prawnej.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 11,
    question: "Spółka cywilna podlega rejestracji.",
    options: ["prawda", "fałsz"],
    correctAnswer: "fałsz"
  },
  {
    id: 12,
    question: "Prokura uprawnia do:",
    options: [
      "zarządzania spółką kapitałową",
      "kontroli podmiotów prowadzących działalność gospodarczą",
      "zawierania umów w imieniu przedsiębiorstw"
    ],
    correctAnswer: "zawierania umów w imieniu przedsiębiorstw"
  },
  {
    id: 13,
    question: "Zasada swobody umów oznacza:",
    options: [
      "swobodę ukształtowania treści umowy, pod warunkiem, że będzie ona zgodna z obowiązującymi przepisami",
      "swobodę wyboru partnera, z którym zawieramy umowę",
      "obie odpowiedzi są poprawne"
    ],
    correctAnswer: [
      "swobodę ukształtowania treści umowy, pod warunkiem, że będzie ona zgodna z obowiązującymi przepisami",
      "swobodę wyboru partnera, z którym zawieramy umowę"
    ]
  },
  {
    id: 14,
    question: "Czy członek wieloosobowego zarządu spółki kapitałowej może samodzielnie podpisać w imieniu spółki umowę?",
    options: [
      "nie, ponieważ każda umowa w spółce kapitałowej powinna być podpisana przez więcej niż połowę składu zarządu",
      "tak, ale tylko wtedy, gdy taka możliwość wynika z umowy lub statutu spółki kapitałowej"
    ],
    correctAnswer: "tak, ale tylko wtedy, gdy taka możliwość wynika z umowy lub statutu spółki kapitałowej"
  },
  {
    id: 15,
    question: "W spółce akcyjnej uchwały walnego zgromadzenia wspólników wymaga:",
    options: [
      "uchwała w sprawie powołania członków zarządu spółki",
      "zmiana umowy spółki",
      "zawieszenie z ważnych powodów w czynnościach poszczególnych lub wszystkich członków zarządu",
      "ocena wniosku zarządu dotycząca podziału zysku i pokrycia strat"
    ],
    correctAnswer: "zmiana umowy spółki"
  },
  {
    id: 16,
    question: "Wspólnik spółki z o.o. może:",
    options: [
      "żądać od zarządu spółki okazania dokumentów finansowych tej spółki",
      "zawierać umowy w imieniu spółki",
      "zaskarżyć uchwałę zgromadzenia wspólników, jeżeli narusza ona jego uprawnienia",
      "darować swoje udziały w spółce dowolnej osobie fizycznej lub prawnej"
    ],
    correctAnswer: [
      "żądać od zarządu spółki okazania dokumentów finansowych tej spółki",
      "zaskarżyć uchwałę zgromadzenia wspólników, jeżeli narusza ona jego uprawnienia"
    ]
  },
  {
    id: 17,
    question: "Kapitał zakładowy spółki z ograniczoną odpowiedzialnością to:",
    options: [
      "kwota gwarantująca wypłacalność spółki zgromadzona na rachunku bankowym tej spółki",
      "środki finansowe zgromadzone przez spółkę w trakcie działalności gospodarczej",
      "suma środków wniesionych przez wspólników tej spółki na pokrycie udziałów, które objęli"
    ],
    correctAnswer: "suma środków wniesionych przez wspólników tej spółki na pokrycie udziałów, które objęli"
  },
  {
    id: 18,
    question: "Zobowiązanie w rozumieniu kodeksu cywilnego powstaje w wyniku:",
    options: [
      "wydania pozwolenia na budowę domu jednorodzinnego",
      "przedawnienia roszczenia",
      "zawarcia umowy o wykonanie usługi",
      "bezpodstawnego wzbogacenia",
      "upływu terminu do zapłaty podatku dochodowego od osób fizycznych"
    ],
    correctAnswer: ["zawarcia umowy o wykonanie usługi", "bezpodstawnego wzbogacenia"]
  },
  {
    id: 19,
    question: "Zobowiązanie w rozumieniu kodeksu cywilnego powstaje w wyniku:",
    options: [
      "zawarcia umowy o dzieło",
      "wyrządzenia szkody czynem niedozwolonym",
      "bezpodstawnego wzbogacenia"
    ],
    correctAnswer: ["zawarcia umowy o dzieło", "wyrządzenia szkody czynem niedozwolonym", "bezpodstawnego wzbogacenia"]
  },
  {
    id: 20,
    question: "Prokura upoważnia do:",
    options: [
      "wykonywania czynności członka zarządu spółki z o.o.",
      "kontroli podmiotów prowadzących działalność gospodarczą",
      "sprzedaży nieruchomości",
      "zawierania umów sprzedaży produktów wytwarzanych przez spółki prawa handlowego"
    ],
    correctAnswer: "zawierania umów sprzedaży produktów wytwarzanych przez spółki prawa handlowego"
  },
  {
    id: 21,
    question: "Wymagalność świadczenia w przypadku umowy forfaitingu wynosi:",
    options: [
      "od roku do 10 lat",
      "od 6 miesięcy do 5 lat",
      "od 6 miesięcy do 10 lat",
      "od roku do 5 lat"
    ],
    correctAnswer: "od 6 miesięcy do 5 lat"
  },
  {
    id: 22,
    question: "Wspólnik spółki z ograniczoną odpowiedzialnością:",
    options: [
      "nie odpowiada za zobowiązania spółki",
      "odpowiada za wszystkie zobowiązania majątkowe spółki",
      "odpowiada za zobowiązania spółki tylko wtedy, gdy majątek spółki nie wystarcza na pokrycie jej zobowiązań względem wierzycieli"
    ],
    correctAnswer: "nie odpowiada za zobowiązania spółki"
  },
  {
    id: 23,
    question: "Zamierzam razem z innymi 4 osobami rozpocząć działalność w zakresie produkcji zabawek. Do prowadzenia tej działalności możemy utworzyć:",
    options: ["spółkę partnerską", "spółkę z o.o.", "spółkę jawną", "spółkę akcyjną"],
    correctAnswer: ["spółkę z o.o.", "spółkę jawną", "spółkę akcyjną"]
  },
  {
    id: 24,
    question: "Czy członkowie zarządu spółki z o.o. odpowiadają całym swym majątkiem za zobowiązania spółki?",
    options: [
      "ponoszą odpowiedzialność, jeżeli egzekucja z majątku okaże się bezskuteczna",
      "ponoszą odpowiedzialność tylko do kwoty 1/2 części kapitału zakładowego",
      "nie ponoszą odpowiedzialności"
    ],
    correctAnswer: "ponoszą odpowiedzialność, jeżeli egzekucja z majątku okaże się bezskuteczna"
  },
  {
    id: 25,
    question: "Do kompetencji zarządu spółki z o.o. zaliczamy:",
    options: [
      "podejmowanie decyzji o zmianie siedziby spółki",
      "zawieranie umów w imieniu spółki",
      "zaskarżanie uchwał zgromadzenia wspólników",
      "opiniowanie działalności rady nadzorczej spółki i przedstawienie opinii na zgromadzeniu wspólników",
      "zwoływanie zgromadzeń wspólników"
    ],
    correctAnswer: ["zawieranie umów w imieniu spółki", "zwoływanie zgromadzeń wspólników"]
  },
  {
    id: 26,
    question: "Obowiązkowe organy władzy w każdej spółce z o.o. to:",
    options: ["zarząd", "dyrektor naczelny", "komisja rewizyjna", "rada powiernicza"],
    correctAnswer: "zarząd"
  },
  {
    id: 27,
    question: "Do kompetencji zarządu spółki z o.o. zaliczamy:",
    options: [
      "zmianę umowy spółki",
      "zawieranie umów w imieniu spółki",
      "zatwierdzanie sprawozdań spółki",
      "prowadzenie spraw spółki"
    ],
    correctAnswer: ["zawieranie umów w imieniu spółki", "prowadzenie spraw spółki"]
  },
  {
    id: 28,
    question: "Prokura upoważnia do:",
    options: [
      "zarządzania spółką",
      "umowy o wykonanie usługi o wartości przekraczającej 100 000 zł",
      "ustanowienia hipoteki na nieruchomości spółki",
      "zawarcia umowy najmu lokalu użytkowego dla spółki z o.o.",
      "kontroli spółki"
    ],
    correctAnswer: "zawarcia umowy najmu lokalu użytkowego dla spółki z o.o."
  },
  {
    id: 29,
    question: "Akcjonariusz w spółce komandytowo-akcyjnej nie odpowiada za zobowiązania spółki.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 30,
    question: "Kapitał zakładowy spółki akcyjnej wynosi co najmniej:",
    options: ["5 000", "10 000", "100 000", "150 000"],
    correctAnswer: "100 000"
  },
  {
    id: 31,
    question: "Zgodnie z przepisami prawa polskiego, na terytorium Polski mogą być utworzone spółki:",
    options: [
      "spółki partnersko-komandytowa",
      "spółka mieszana jawno-cywilna",
      "spółka jawna",
      "spółka partnerska",
      "spółka z ograniczoną odpowiedzialnością"
    ],
    correctAnswer: ["spółka jawna", "spółka partnerska", "spółka z ograniczoną odpowiedzialnością"]
  },
  {
    id: 32,
    question: "Wkładem komandytariusza do spółki może być:",
    options: ["gotówka", "świadczona na rzecz spółki praca i usługi", "żadna odpowiedź nie jest poprawna"],
    correctAnswer: "gotówka"
  },
  {
    id: 33,
    question: "Komplementariusz w spółce komandytowej nie ma prawa do równego udziału w zyskach i stratach.",
    options: ["prawda", "fałsz"],
    correctAnswer: "fałsz"
  },
  {
    id: 34,
    question: "Do kompetencji rady nadzorczej spółki z o.o. należy:",
    options: [
      "wydawanie poleceń członkom zarządu w zakresie prowadzenia spraw spółki",
      "sprzedaż nieruchomości spółki",
      "stały nadzór nad działalnością spółki",
      "zawieranie umów w imieniu spółki"
    ],
    correctAnswer: "stały nadzór nad działalnością spółki"
  },
  {
    id: 35,
    question: "Wierzycielem w rozumieniu kodeksu cywilnego jest:",
    options: [
      "poszkodowany, który domaga się od sprawcy szkody odszkodowania",
      "sprzedawca w umowie sprzedaży",
      "wyłącznie osoba, która żąda zapłaty określonej sumy pieniężnej"
    ],
    correctAnswer: ["poszkodowany, który domaga się od sprawcy szkody odszkodowania", "sprzedawca w umowie sprzedaży"]
  },
  {
    id: 36,
    question: "Zasada swobody umów oznacza:",
    options: [
      "swobodę wypowiedzenia zawartej umowy",
      "swobodę ukształtowania treści umowy, jeśli jest ona zgodna z ustawą i zasadami współżycia społecznego"
    ],
    correctAnswer: "swobodę ukształtowania treści umowy, jeśli jest ona zgodna z ustawą i zasadami współżycia społecznego"
  },
  {
    id: 37,
    question: "Wkładem niepieniężnym do spółki kapitałowej nie może być:",
    options: [
      "prawo własności nieruchomości",
      "prawo własności rzeczy ruchomej",
      "prawo użytkowania wieczystego",
      "zobowiązanie do wykonywania czynności członka zarządu tej spółki",
      "know-how"
    ],
    correctAnswer: "zobowiązanie do wykonywania czynności członka zarządu tej spółki"
  },
  {
    id: 38,
    question: "Zobowiązanie w rozumieniu kodeksu cywilnego powstaje w wyniku:",
    options: ["zawarcia umowy sprzedaży", "bezpodstawnego wzbogacenia", "wydania decyzji administracyjnej"],
    correctAnswer: ["zawarcia umowy sprzedaży", "bezpodstawnego wzbogacenia"]
  },
  {
    id: 39,
    question: "Członków zarządu spółki akcyjnej powołuje:",
    options: ["Rada Nadzorcza", "zarząd", "dyrektor naczelny", "rada powiernicza"],
    correctAnswer: "Rada Nadzorcza"
  },
  {
    id: 40,
    question: "Który z poniżej wskazanych jest osobą prawną:",
    options: [
      "spółka z ograniczoną odpowiedzialnością",
      "fundacja",
      "Skarb Państwa",
      "każdy przedsiębiorca",
      "Jan Kowalski posiadający pełną zdolność do czynności prawnych"
    ],
    correctAnswer: ["spółka z ograniczoną odpowiedzialnością", "fundacja", "Skarb Państwa"]
  },
  {
    id: 41,
    question: "Źródłem solidarności dłużników może być:",
    options: ["ustawa", "nakaz", "umowa", "rozporządzenie"],
    correctAnswer: ["ustawa", "umowa"]
  },
  {
    id: 42,
    question: "Zobowiązanie w rozumieniu kodeksu cywilnego to:",
    options: [
      "rodzaj stosunku cywilnoprawnego powstającego np. w wyniku zawarcia umowy sprzedaży",
      "wyłącznie obowiązek zapłaty określonej sumy pieniężnej",
      "obowiązek zapłaty podatku od nieruchomości"
    ],
    correctAnswer: "rodzaj stosunku cywilnoprawnego powstającego np. w wyniku zawarcia umowy sprzedaży"
  },
  {
    id: 43,
    question: "Odpowiedzialność całym swym majątkiem za zobowiązania spółki ponoszą:",
    options: [
      "wspólnicy spółki jawnej, o ile egzekucja z majątku spółki okaże się bezskuteczna",
      "komplementariusze",
      "wspólnicy spółki z o.o."
    ],
    correctAnswer: ["wspólnicy spółki jawnej, o ile egzekucja z majątku spółki okaże się bezskuteczna", "komplementariusze"]
  },
  {
    id: 44,
    question: "Strony umowy sprzedaży ustaliły treść łączącej ich umowy w drodze korespondencji mailowej, co oznacza, że umowa ta została zawarta w formie:",
    options: ["ustnej", "pisemnej", "dokumentowej", "pisemnej z poświadczeniem podpisu"],
    correctAnswer: "dokumentowej"
  },
  {
    id: 45,
    question: "Osobowość prawną posiada:",
    options: ["spółka z o.o.", "Skarb Państwa", "osoba fizyczna", "każda spółka prawa handlowego"],
    correctAnswer: ["spółka z o.o.", "Skarb Państwa"]
  },
  {
    id: 46,
    question: "Do kompetencji rady nadzorczej spółki z o.o. należy:",
    options: [
      "zawieranie umów w imieniu spółki",
      "podział zysków wynikających z rocznego bilansu spółki",
      "zaskarżenie uchwał Zgromadzenia Wspólników",
      "podejmowanie decyzji o zmianie siedziby spółki",
      "zwoływanie Zgromadzeń Wspólników"
    ],
    correctAnswer: ["zaskarżenie uchwał Zgromadzenia Wspólników", "zwoływanie Zgromadzeń Wspólników"]
  },
  {
    id: 47,
    question: "Szkoda majątkowa w rozumieniu kodeksu cywilnego obejmuje:",
    options: ["zadośćuczynienie za doznaną krzywdę", "rzeczywistą stratę i utracone korzyści", "wyłącznie rzeczywistą stratę"],
    correctAnswer: "rzeczywista stratę i utracone korzyści".replace("rzeczywista", "rzeczywistą")
  },
  {
    id: 48,
    question: "Dłużnikiem w rozumieniu kodeksu cywilnego jest:",
    options: [
      "kupujący w umowie sprzedaży",
      "jedynie osoba zobowiązana do zapłaty określonej kwoty pieniężnej",
      "tylko ten podmiot, który nie zapłacił w terminie świadczenia pieniężnego"
    ],
    correctAnswer: "kupujący w umowie sprzedaży"
  },
  {
    id: 49,
    question: "Za zobowiązania osób prawnych ponosi odpowiedzialność osoba prawna swoim majątkiem.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 50,
    question: "Prawo zawierania umów w imieniu osób prawnych przysługuje:",
    options: ["Skarbowi Państwa", "właściwemu organowi osoby prawnej", "dowolnemu menedżerowi zatrudnionemu w tym podmiocie"],
    correctAnswer: "właściwemu organowi osoby prawnej"
  },
  {
    id: 51,
    question: "Wskaż wierzyciela i dłużnika w umowie najmu i umowie sprzedaży:",
    options: [
      "sprzedawca, kupujący, wynajmujący i najemca są jednocześnie dłużnikami i wierzycielami",
      "sprzedawca i wynajmujący to dłużnicy, najemca i kupujący to wierzyciele",
      "sprzedawca i wynajmujący to wierzyciele, najemca i kupujący to dłużnicy"
    ],
    correctAnswer: "sprzedawca, kupujący, wynajmujący i najemca są jednocześnie dłużnikami i wierzycielami"
  },
  {
    id: 52,
    question: "Wkładem niepieniężnym do spółki kapitałowej może być:",
    options: ["prawo własności nieruchomości", "świadczenie pracy przez wspólnika", "urządzenia produkcyjne", "komputer"],
    correctAnswer: ["prawo własności nieruchomości", "urządzenia produkcyjne", "komputer"]
  },
  {
    id: 53,
    question: "Bezwzględna większość głosów wymagana do podjęcia uchwał przez zgromadzenie wspólników lub walne zgromadzenie oznacza:",
    options: ["75% głosów oddanych", "co najmniej 50% głosów + 1 głos", "więcej niż połowę głosów oddanych", "2/3 głosów oddanych"],
    correctAnswer: "więcej niż połowę głosów oddanych"
  },
  {
    id: 54,
    question: "Osoba prawna to:",
    options: ["spółka z ograniczoną odpowiedzialnością", "spółka jawna", "spółka komandytowa", "spółka komandytowo-akcyjna", "spółka cywilna"],
    correctAnswer: ["spółka z ograniczoną odpowiedzialnością", "spółka komandytowo-akcyjna"]
  },
  {
    id: 55,
    question: "Wartość nominalna udziału w spółce z o.o.:",
    options: [
      "nie może być niższa niż 100 zł",
      "nie może być niższa niż 50 zł",
      "nie może być niższa niż 500 zł",
      "nie może być niższa niż 150 zł"
    ],
    correctAnswer: "nie może być niższa niż 50 zł"
  },
  {
    id: 56,
    question: "Zasadnicza różnica między koncesją a zezwoleniem polega na tym, że:",
    options: ["zezwolenie jest decyzją związaną, a koncesja uznaniową", "zezwolenie jest decyzją uznaniową, a koncesja związaną"],
    correctAnswer: "zezwolenie jest decyzją związaną, a koncesja uznaniową"
  },
  {
    id: 57,
    question: "Do powstania spółki akcyjnej wymagane jest:",
    options: [
      "ustanowienie zarządu i rady nadzorczej",
      "zgromadzenie całego kapitału przed rejestracją spółki",
      "uchwalenie statutu w formie aktu notarialnego",
      "wpis do rejestru"
    ],
    correctAnswer: ["ustanowienie zarządu i rady nadzorczej", "uchwalenie statutu w formie aktu notarialnego", "wpis do rejestru"]
  },
  {
    id: 58,
    question: "Akcjonariusz w spółce komandytowo-akcyjnej odpowiada za zobowiązania spółki:",
    options: ["prawda", "fałsz"],
    correctAnswer: "fałsz"
  },
  {
    id: 59,
    question: "Wspólnicy spółki jawnej:",
    options: [
      "odpowiadają za zobowiązania spółki tylko do wysokości 100 000",
      "nie ponoszą odpowiedzialności za zobowiązania spółki",
      "ponoszą odpowiedzialność subsydiarną i solidarną za zobowiązania spółki"
    ],
    correctAnswer: "ponoszą odpowiedzialność subsydiarną i solidarną za zobowiązania spółki"
  },
  {
    id: 60,
    question: "Przedawnienie roszczenia oznacza, że:",
    options: [
      "roszczenie to wygasa",
      "sąd oddali złożone w tej sprawie powództwo, o ile pozwany zgłosił zarzut przedawnienia",
      "dobrowolna zapłata przedawnionego roszczenia powinna być zwrócona podmiotowi, który dokonał zapłaty tego roszczenia"
    ],
    correctAnswer: "sąd oddali złożone w tej sprawie powództwo, o ile pozwany zgłosił zarzut przedawnienia"
  },
  {
    id: 61,
    question: "Strony umowy spółki z o.o. mogą umówić się, że wkładem niepieniężnym jest:",
    options: [
      "know-how",
      "nieruchomość",
      "majątkowe prawa autorskie",
      "surowce do produkcji",
      "świadczenie pracy przez wspólników"
    ],
    correctAnswer: ["know-how", "nieruchomość", "majątkowe prawa autorskie", "surowce do produkcji"]
  },
  {
    id: 62,
    question: "Prawo cywilne reguluje:",
    options: [
      "obowiązek wykonania należycie umowy faktoringu, która nie jest regulowana odrębnymi przepisami",
      "prokurę",
      "odpowiedzialność za zobowiązania Skarbu Państwa",
      "wydawanie decyzji w sprawie podatku od nieruchomości",
      "działalność szkół podstawowych"
    ],
    correctAnswer: [
      "obowiązek wykonania należycie umowy faktoringu, która nie jest regulowana odrębnymi przepisami",
      "prokurę",
      "odpowiedzialność za zobowiązania Skarbu Państwa"
    ]
  },
  {
    id: 63,
    question: "Obowiązek zapłaty odsetek od sumy pieniężnej powstaje:",
    options: [
      "tylko wtedy, gdy obowiązek zapłaty odsetek przewiduje zawarta umowa",
      "zawsze, gdy nastąpiło przekroczenie terminu płatności zobowiązania pieniężnego",
      "Jeżeli dłużnik opóźnia się ze spełnieniem świadczenia pieniężnego, wierzyciel może żądać odsetek za czas opóźnienia, chociażby nie poniósł żadnej szkody i chociażby opóźnienie było następstwem okoliczności, za które dłużnik nie ponosi odpowiedzialności"
    ],
    correctAnswer: [
      "zawsze, gdy nastąpiło przekroczenie terminu płatności zobowiązania pieniężnego",
      "Jeżeli dłużnik opóźnia się ze spełnieniem świadczenia pieniężnego, wierzyciel może żądać odsetek za czas opóźnienia, chociażby nie poniósł żadnej szkody i chociażby opóźnienie było następstwem okoliczności, za które dłużnik nie ponosi odpowiedzialności"
    ]
  },
  {
    id: 64,
    question: "Kodeks spółek handlowych reguluje tworzenie i funkcjonowanie:",
    options: ["spółki mieszkaniowej", "spółki z o.o.", "spółki mieszanej", "spółki partnerskiej", "spółki komandytowo-akcyjnej"],
    correctAnswer: ["spółki z o.o.", "spółki partnerskiej", "spółki komandytowo-akcyjnej"]
  },
  {
    id: 65,
    question: "Umowy mogą być zawierane w formie:",
    options: ["dokumentowej", "pisemnej", "aktu notarialnego"],
    correctAnswer: ["dokumentowej", "pisemnej", "aktu notarialnego"]
  },
  {
    id: 66,
    question: "Do kompetencji zarządu spółki z o.o. zaliczamy:",
    options: ["prowadzenie spraw spółki", "podział zysków wykazanych w sprawozdaniu finansowym spółki", "zawieranie umów w imieniu spółki", "powoływanie rady nadzorczej spółki"],
    correctAnswer: ["prowadzenie spraw spółki", "zawieranie umów w imieniu spółki"]
  },
  {
    id: 67,
    question: "Członkiem zarządu w spółce z o.o. nie może być:",
    options: ["inna spółka z ograniczoną odpowiedzialnością", "osoba karana", "brak prawidłowej odpowiedzi"],
    correctAnswer: ["inna spółka z ograniczoną odpowiedzialnością", "osoba karana"]
  },
  {
    id: 68,
    question: "Wspólnikiem spółki z ograniczoną odpowiedzialnością może być:",
    options: ["osoba fizyczna", "przedsiębiorstwo państwowe", "spółka akcyjna", "stowarzyszenie", "gmina"],
    correctAnswer: ["osoba fizyczna", "przedsiębiorstwo państwowe", "spółka akcyjna", "stowarzyszenie", "gmina"]
  },
  {
    id: 69,
    question: "Do określonych kodeksem spółek handlowych kompetencji rady nadzorczej spółki z ograniczoną odpowiedzialnością należy:",
    options: [
      "powoływanie członków zarządu",
      "stały nadzór nad działalnością spółki",
      "wydawanie zarządowi spółki poleceń w zakresie prowadzenia spraw spółki",
      "zatwierdzanie sprawozdania finansowego spółki"
    ],
    correctAnswer: ["powoływanie członków zarządu", "stały nadzór nad działalnością spółki", "zatwierdzanie sprawozdania finansowego spółki"]
  },
  {
    id: 70,
    question: "Kodeks spółek handlowych przyznaje wspólnikom spółki z o.o. następujące uprawnienia:",
    options: [
      "prawo do sprzedaży udziałów, które posiadają w spółce",
      "prawo do uczestnictwa w zyskach spółki",
      "prawo do zawierania umów w imieniu spółki",
      "prawo kontroli spółki (przegląd dokumentów, jeśli nie ma powołanej rady nadzorczej)"
    ],
    correctAnswer: ["prawo do sprzedaży udziałów, które posiadają w spółce", "prawo do uczestnictwa w zyskach spółki", "prawo kontroli spółki (przegląd dokumentów, jeśli nie ma powołanej rady nadzorczej)"]
  },
  {
    id: 71,
    question: "Prokura to rodzaj pełnomocnictwa dla osoby fizycznej, które upoważnia do dokonywania czynności (sądowych i pozasądowych) związanych z prowadzeniem przedsiębiorstwa.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 72,
    question: "Zarząd może zostać powołany w spółce:",
    options: ["komandytowej", "partnerskiej", "z o.o."],
    correctAnswer: "z o.o."
  },
  {
    id: 73,
    question: "Do obowiązków wspólników w spółce z o.o. należy:",
    options: ["uczestnictwo", "wniesienie wkładów", "zawieranie umów w imieniu spółki"],
    correctAnswer: "wniesienie wkładów"
  },
  {
    id: 74,
    question: "Kadencja zarządu spółki akcyjnej wynosi:",
    options: ["minimum 5 lat", "nie dłużej niż 5 lat", "nie dłużej niż 3 lata"],
    correctAnswer: "nie dłużej niż 5 lat"
  },
  {
    id: 75,
    question: "Uprzywilejowanie udziałów może dotyczyć prawa głosu i prawa do dywidendy.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 76,
    question: "Podział zysków w polskiej spółce z o.o. należy do:",
    options: ["rady nadzorczej", "zarządu", "sądu rejestrowego", "zgromadzenia wspólników"],
    correctAnswer: "zgromadzenia wspólników"
  },
  {
    id: 77,
    question: "Umowa spółki jawnej powinna być zawarta:",
    options: ["ustnie", "na piśmie pod rygorem nieważności", "mailowo/dokumentowo"],
    correctAnswer: "na piśmie pod rygorem nieważności"
  },
  {
    id: 78,
    question: "Umowy w imieniu spółki jawnej zawierają:",
    options: ["zarząd", "wspólnicy", "komandytariusze"],
    correctAnswer: "wspólnicy"
  },
  {
    id: 79,
    question: "Dłużnikiem w rozumieniu kodeksu cywilnego jest:",
    options: [
      "jedynie osoba zobowiązana do zapłaty określonej kwoty pieniężnej",
      "tylko ten podmiot, który nie zapłacił w terminie świadczenia pieniężnego",
      "jedna ze stron stosunku prawnego nazywanego zobowiązaniem"
    ],
    correctAnswer: "jedna ze stron stosunku prawnego nazywanego zobowiązaniem"
  },
  {
    id: 80,
    question: "W której dziedzinie wymagane jest uzyskanie koncesji:",
    options: ["sprzedaż napojów alkoholowych", "działalność kantorowa", "przewóz lotniczy", "brak poprawnej odpowiedzi"],
    correctAnswer: ["działalność kantorowa", "przewóz lotniczy"]
  },
  {
    id: 81,
    question: "Obowiązek zapłaty odsetek od sumy pieniężnej powstaje:",
    options: [
      "tylko wtedy, gdy obowiązek zapłaty odsetek przewiduje zawarta umowa",
      "zawsze, gdy nastąpiło przekroczenie terminu płatności zobowiązania pieniężnego",
      "tylko wtedy, gdy przekroczenie terminu płatności nastąpiło z winy dłużnika"
    ],
    correctAnswer: "zawsze, gdy nastąpiło przekroczenie terminu płatności zobowiązania pieniężnego"
  },
  {
    id: 82,
    question: "Obowiązek zapłaty odsetek od sumy pieniężnej powstaje:",
    options: [
      "tylko wtedy, gdy obowiązek zapłaty odsetek przewiduje zawarta umowa",
      "zawsze, gdy nastąpiło przekroczenie ustalonego terminu płatności zobowiązania pieniężnego",
      "tylko wtedy, gdy przekroczenie terminu płatności nastąpiło z winy dłużnika"
    ],
    correctAnswer: "zawsze, gdy nastąpiło przekroczenie ustalonego terminu płatności zobowiązania pieniężnego"
  },
  {
    id: 83,
    question: "Spółka z o.o. może być utworzona tylko dla realizacji celu prawnie dopuszczalnego.",
    options: ["prawda", "fałsz"],
    correctAnswer: "prawda"
  },
  {
    id: 84,
    question: "Członków zarządu powołuje:",
    options: ["rada nadzorcza", "rada powiernicza", "komisja rewizyjna", "dyrektor naczelny"],
    correctAnswer: "rada nadzorcza"
  },
  {
    id: 85,
    question: "Do spółek prawa handlowego zaliczamy:",
    options: ["spółkę z o.o.", "spółkę jawną", "spółkę komandytowo-akcyjną"],
    correctAnswer: ["spółkę z o.o.", "spółkę jawną", "spółkę komandytowo-akcyjną"]
  },
  {
    id: 86,
    question: "W umowie ustalono, że należność za wykonaną usługę podmiot X zapłaci Kowalskiemu do dnia 15.07.2020. Kiedy, zgodnie z przepisami kodeksu cywilnego, Kowalski powinien otrzymać należność?",
    options: [
      "wystarczy, że w dniu 15.07.2020 X złoży przelew w swoim banku, ponieważ nie odpowiada przed Kowalskim za termin realizacji przelewu przez bank",
      "najpóźniej w dniu 15.07.2020 umówiona kwota powinna wpłynąć na konto Kowalskiego"
    ],
    correctAnswer: "najpóźniej w dniu 15.07.2020 umówiona kwota powinna wpłynąć na konto Kowalskiego"
  },
  {
    id: 87,
    question: "Brak odpowiedzi na otrzymaną ofertę oznacza, że:",
    options: [
      "oznacza zawarcie umowy na warunkach określonych w ofercie",
      "brak odpowiedzi nie rodzi żadnych skutków prawnych"
    ],
    correctAnswer: "brak odpowiedzi nie rodzi żadnych skutków prawnych"
  },
  {
    id: 88,
    question: "Trzy dni temu została zarejestrowana spółka z o.o. z kapitałem zakładowym 60 000. Spółka nie uzyskała jeszcze żadnych przychodów ze swojej działalności. Zarząd zamierza zakupić dla tej spółki surowiec za kwotę 15 000. Czy na zapłatę ceny może użyć środki pochodzące z wpłat na kapitał zakładowy?",
    options: ["tak", "nie"],
    correctAnswer: "tak"
  },
  {
    id: 89,
    question: "Jan Nowak i Z. Piotrowski są wspólnikami spółki cywilnej. Spółka zakupiła od przedsiębiorcy X towar za cenę 60 000 zł. Cena nie została zapłacona w terminie. Przedsiębiorca X zażądał zapłaty całości od Z. Piotrowskiego. Ten odmówił zapłaty i uzasadnił, że jest zobowiązany do zapłaty wyłącznie 20 000 zł. Oceń zasadność stanowiska Z. Piotrowskiego.",
    options: [
      "Zbigniew jest zobowiązany do zapłaty całości i może potem ewentualnie ubiegać się o roszczenia wobec swoich wspólników",
      "Zbigniew uzasadnił prawidłowo odmowę zapłaty i nie musi płacić całości"
    ],
    correctAnswer: "Zbigniew jest zobowiązany do zapłaty całości i może potem ewentualnie ubiegać się o roszczenia wobec swoich wspólników"
  },
  {
    id: 90,
    question: "Pełnomocnictwo do zawarcia umowy leasingu urządzenia o wartości 160 000 wymaga formy:",
    options: ["pisemnej pod rygorem nieważności", "ustnej", "pisemnej", "dokumentowej"],
    correctAnswer: "pisemnej pod rygorem nieważności"
  },
  {
    id: 91,
    question: "Wkładem niepieniężnym do spółki kapitałowej nie może być:",
    options: ["know-how", "prawo użytkowania wieczystego", "zobowiązanie do wykonania czynności członka zarządu tej spółki", "prawo własności nieruchomości"],
    correctAnswer: "zobowiązanie do wykonania czynności członka zarządu tej spółki"
  },
  {
    id: 92,
    question: "Prawo składania oświadczeń woli w imieniu osoby prawnej przysługuje:",
    options: [
      "pracownikowi zatrudnionemu na stanowisku menedżerskim",
      "Skarbowi Państwa",
      "właściwemu organowi wskazanemu w ustawie lub statucie danej osoby prawnej",
      "podmiotowi, który jest założycielem danej osoby prawnej"
    ],
    correctAnswer: "właściwemu organowi wskazanemu w ustawie lub statucie danej osoby prawnej"
  }
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
  { id: 7, label: "Pytania 61 - 73", startId: 61, endId: 70 },
  { id: 8, label: "Pytania 61 - 73", startId: 71, endId: 80 },
  { id: 9, label: "Pytania 61 - 73", startId: 81, endId: 92 },

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

