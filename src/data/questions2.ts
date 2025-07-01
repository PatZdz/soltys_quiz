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
    question: "Kadencja członka zarządu spółki akcyjnej nie może być dłuższa niż:",
    options: [
      "6 lat",
      "4 lata",
      "5 lat",
      "3 lata"
    ],
    correctAnswer: "5 lat"
  },
  {
    id: 2,
    question: "Za zobowiązania spółki partnerskiej powstałe w związku z wykonywaniem przez pozostałych partnerów wolnego zawodu w spółce, o ile umowa spółki nie stanowi inaczej, partner:",
    options: [
      "ponosi odpowiedzialność do wysokości wniesionego wkładu",
      "ponosi odpowiedzialność solidarnie z partnerem, z winy którego powstało zobowiązanie",
      "nie ponosi odpowiedzialności",
      "ponosi odpowiedzialność całym swoim majątkiem osobistym"
    ],
    correctAnswer: "nie ponosi odpowiedzialności"
  },
  {
    id: 3,
    question: "Prokurenta spółki może odwołać:",
    options: [
      "każdy członek rady nadzorczej lub walnego zgromadzenia spółki",
      "każdy członek walnego zgromadzenia spółki",
      "każdy członek zarządu spółki",
      "każdy członek rady nadzorczej spółki"
    ],
    correctAnswer: "każdy członek zarządu spółki"
  },
  {
    id: 4,
    question: "Wkłady do prostej spółki akcyjnej powinny być wniesione w całości:",
    options: [
      "w ciągu 3 lat od wpisania spółki do KRS-u",
      "w ciągu 2 lat od wpisania spółki do KRS-u",
      "w ciągu 6 miesięcy od wpisania spółki do KRS-u",
      "przed wpisaniem spółki do KRS-u"
    ],
    correctAnswer: "w ciągu 3 lat od wpisania spółki do KRS-u"
  },
  {
    id: 5,
    question: "Cechą spółki kapitałowej jest:",
    options: [
      "wkładami wspólników może być praca i usługi świadczone na rzecz spółki",
      "brak osobistej odpowiedzialności wspólnika za zobowiązania spółki",
      "stały i niezmienny skład wspólników",
      "prowadzenie spraw spółki należy do kompetencji jej wspólników"
    ],
    correctAnswer: "brak osobistej odpowiedzialności wspólnika za zobowiązania spółki"
  },
  {
    id: 6,
    question: "Akcje prostej spółki akcyjnej mogą być:",
    options: [
      "korporacyjne",
      "beznominałowe",
      "walutowe",
      "obligacyjne"
    ],
    correctAnswer: "beznominałowe"
  },
  {
    id: 7,
    question: "Organami w spółce komandytowo-akcyjnej są:",
    options: [
      "Rada Nadzorcza, Zarząd i Walne Zgromadzenie",
      "Rada Nadzorcza i Walne Zgromadzenie",
      "Rada Nadzorcza",
      "Zarząd i Walne Zgromadzenie"
    ],
    correctAnswer: "Rada Nadzorcza i Walne Zgromadzenie"
  },
  {
    id: 8,
    question: "Czy zgoda na przetwarzanie danych może być wycofana w każdym momencie?",
    options: [
      "tak",
      "administrator sam określa, czy klient może wycofać taką zgodę",
      "organ nadzoru określa, czy klient danego przedsiębiorcy może wycofać zgodę",
      "nie"
    ],
    correctAnswer: "tak"
  },
  {
    id: 9,
    question: "Czy Rejestr Czynności Przetwarzania powinien prowadzić każdy administrator danych?",
    options: [
      "nie",
      "decyduje o tym organ nadzoru",
      "tak",
      "zależy, jakie dane przetwarza administrator i ilu zatrudnia pracowników"
    ],
    correctAnswer: "zależy, jakie dane przetwarza administrator i ilu zatrudnia pracowników"
  },
  {
    id: 10,
    question: "Wkładem do spółki kapitałowej nie może być:",
    options: [
      "świadczenie usług",
      "prawo własności nieruchomości",
      "udziały lub akcje w innej spółce",
      "przedsiębiorstwo w znaczeniu przedmiotowym"
    ],
    correctAnswer: "świadczenie usług"
  },
  {
    id: 11,
    question: "Prosta spółka akcyjna nie może być założona przez:",
    options: [
      "spółkę akcyjną publiczną",
      "spółkę akcyjną niepubliczną",
      "osoby fizyczne",
      "jednoosobową spółkę z o.o."
    ],
    correctAnswer: "jednoosobową spółkę z o.o."
  },
  {
    id: 12,
    question: "Wspólnik pasywny w spółce komandytowo-akcyjnej to:",
    options: [
      "mandatariusz",
      "akcjonariusz",
      "komplementariusz",
      "komandytariusz"
    ],
    correctAnswer: "akcjonariusz"
  },
  {
    id: 13,
    question: "Spółkę komandytową reprezentują:",
    options: [
      "wybrani przez komandytariuszy komplementariusze spółki",
      "komandytariusze spółki, którzy wnieśli wkłady przekraczające ponad 25 % udziałów w spółce",
      "komplementariusze, których z mocy umowy spółki albo prawomocnego orzeczenia sądu nie pozbawiono prawa reprezentowania spółki",
      "komandytariusze wraz z komplementariuszami"
    ],
    correctAnswer: "komplementariusze, których z mocy umowy spółki albo prawomocnego orzeczenia sądu nie pozbawiono prawa reprezentowania spółki"
  },
  {
    id: 14,
    question: "Rejestracji spółki kapitałowej w Krajowym Rejestrze Sądowym dokonuje:",
    options: [
      "Rada Nadzorcza",
      "Zarząd spółki",
      "Zgromadzenie wspólników lub akcjonariuszy",
      "Prokurent wraz z członkiem zarządu"
    ],
    correctAnswer: "Zarząd spółki"
  },
  {
    id: 15,
    question: "W spółce z ograniczoną odpowiedzialnością uchwała wspólników dotycząca wyrażenia zgody na sprzedaż przedsiębiorstwa lub jego zorganizowanej części zapada:",
    options: [
      "większością 2/3 głosów",
      "jednomyślnie",
      "bezwzględną większością głosów",
      "zwykłą większością głosów"
    ],
    correctAnswer: "większością 2/3 głosów"
  },
  {
    id: 16,
    question: "Jeżeli komplementariuszem w spółce komandytowej jest spółka z o.o., zaś komandytariuszem jest wspólnik tej spółki:",
    options: [
      "wkład komandytariusza mogą stanowić jego udziały w tej spółce z o.o.",
      "wkład komandytariusza mogą stanowić jego udziały w tej spółce z o.o., jeżeli zgodę na taki wkład wyrażą pozostali komandytariusze spółki",
      "wkład komandytariusza muszą stanowić jego udziały w tej spółce z o.o.",
      "wkładu komandytariusza nie mogą stanowić jego udziały w tej spółce z o.o."
    ],
    correctAnswer: "wkładu komandytariusza nie mogą stanowić jego udziały w tej spółce z o.o."
  },
  {
    id: 17,
    question: "Uprzywilejowanie udziałów w spółce handlowej:",
    options: [
      "dotyczy prawa do reprezentacji spółki",
      "zawsze dotyczy dywidendy",
      "może dotyczyć prawa głosu lub dywidendy",
      "zawsze dotyczy prawa głosu"
    ],
    correctAnswer: "może dotyczyć prawa głosu lub dywidendy"
  },
  {
    id: 18,
    question: "Uchwały rady nadzorczej spółki akcyjnej zapadają:",
    options: [
      "jednomyślnie",
      "względną większością głosów",
      "bezwzględną większością głosów, chyba że statut spółki stanowi inaczej",
      "zawsze większością 2/3 głosów"
    ],
    correctAnswer: "bezwzględną większością głosów, chyba że statut spółki stanowi inaczej"
  },
  {
    id: 19,
    question: "W okresie likwidacji spółki prokura:",
    options: [
      "może być ustanowiona z wyłączeniem możliwości sprzedaży firmy",
      "nie może być ustanowiona",
      "może być ustanowiona za zgodą sądu rejestrowego",
      "może być ustanawiana bez ograniczeń"
    ],
    correctAnswer: "nie może być ustanowiona"
  },
  {
    id: 20,
    question: "Zakaz zajmowania się interesami konkurencyjnymi:",
    options: [
      "obejmuje udział w konkurencyjnej spółce kapitałowej, w przypadku posiadania w niej przez członka zarządu co najmniej 10 % udziałów albo akcji",
      "obejmuje udział w konkurencyjnej spółce kapitałowej, w przypadku posiadania w niej przez członka zarządu mniej niż 10 % udziałów albo akcji",
      "obejmuje udział w konkurencyjnej spółce kapitałowej, w przypadku posiadania w niej przez członka zarządu co najmniej 5 % udziałów albo akcji",
      "obejmuje udział w konkurencyjnej spółce kapitałowej, w przypadku posiadania w niej przez członka zarządu powyżej 5 % udziałów albo akcji"
    ],
    correctAnswer: "obejmuje udział w konkurencyjnej spółce kapitałowej, w przypadku posiadania w niej przez członka zarządu co najmniej 10 % udziałów albo akcji"
  },
  {
    id: 21,
    question: "Wartość nominalna udziału w spółce z o.o. nie może być niższa niż:",
    options: [
      "0,01 zł",
      "50 zł",
      "100 zł",
      "5 zł"
    ],
    correctAnswer: "50 zł"
  },
  {
    id: 22,
    question: "W spółce komandytowo-akcyjnej, w której liczba akcjonariuszy wynosi 30 osób, ustanowienie rady nadzorczej jest:",
    options: [
      "fakultatywne, jeżeli akcjonariusze wyrażą na to zgodę",
      "obligatoryjne tylko wtedy, gdy tak przewiduje statut spółki",
      "obligatoryjne",
      "fakultatywne"
    ],
    correctAnswer: "obligatoryjne"
  },
  {
    id: 23,
    question: "Członek zarządu, prokurent, likwidator, kierownik oddziału lub zakładu oraz zatrudniony w spółce akcyjnej główny księgowy, radca prawny lub adwokat:",
    options: [
      "nie może być jednocześnie członkiem rady nadzorczej",
      "może być jednocześnie członkiem rady nadzorczej",
      "nie może być jednocześnie członkiem rady nadzorczej, chyba że akcjonariusze wyrażą na to zgodę",
      "nie może być jednocześnie członkiem rady nadzorczej, chyba że zarząd spółki wyrazi na to zgodę"
    ],
    correctAnswer: "nie może być jednocześnie członkiem rady nadzorczej"
  },
  {
    id: 24,
    question: "Członek zarządu spółki z o.o. może być odwołany:",
    options: [
      "w każdym czasie",
      "tylko jeśli wyrazi na to zgodę",
      "tylko po wygaśnięciu mandatu",
      "tylko po upływie kadencji, na jaką został wybrany"
    ],
    correctAnswer: "w każdym czasie"
  },
  {
    id: 25,
    question: "Zarząd może być powołany w spółce:",
    options: [
      "partnerskiej",
      "komandytowo-akcyjnej",
      "komandytowej",
      "jawnej"
    ],
    correctAnswer: "partnerskiej"
  },
  {
    id: 26,
    question: "Członków zarządu spółki z o.o. wybiera:",
    options: [
      "Walne zgromadzenie akcjonariuszy",
      "Zgromadzenie wspólników w porozumieniu z radą nadzorczą",
      "Zgromadzenie wspólników",
      "Rada Nadzorcza"
    ],
    correctAnswer: "Zgromadzenie wspólników"
  },
  {
    id: 27,
    question: "Prawo i obowiązek prowadzenia spraw spółki komandytowo-akcyjnej ma:",
    options: [
      "każdy akcjonariusz",
      "każdy upoważniony komplementariusz",
      "każdy komplementariusz",
      "każdy komplementariusz i akcjonariusz"
    ],
    correctAnswer: "każdy komplementariusz"
  },
  {
    id: 28,
    question: "Cechą spółki handlowej osobowej jest:",
    options: [
      "istnienie określonego kapitału zakładowego",
      "możliwość założenia spółki jednoosobowej",
      "osobista odpowiedzialność wspólnika za zobowiązania spółki",
      "osobowość prawna"
    ],
    correctAnswer: "osobista odpowiedzialność wspólnika za zobowiązania spółki"
  },
  {
    id: 29,
    question: "Zawiadomienie o zgromadzeniu wspólników spółki z o.o.:",
    options: [
      "może być wysłane listem zwykłym",
      "powinno być przekazane w sposób zwyczajowo przyjęty w spółce",
      "powinno być wysłane listem poleconym lub przesyłką kurierską",
      "może być przekazane w dowolnej formie, np. telefonicznie lub mailowo"
    ],
    correctAnswer: "powinno być wysłane listem poleconym lub przesyłką kurierską"
  },
  {
    id: 30,
    question: "Akcjonariusz spółki komandytowo-akcyjnej (S.K.A.):",
    options: [
      "może reprezentować spółkę jedynie jako pełnomocnik",
      "zawsze może reprezentować spółkę",
      "reprezentuje spółkę, jeżeli posiada ponad 25 % akcji",
      "nie może reprezentować spółki"
    ],
    correctAnswer: "może reprezentować spółkę jedynie jako pełnomocnik"
  },
  {
    id: 31,
    question: "Komandytariusz w spółce komandytowej:",
    options: [
      "odpowiada za zobowiązania spółki, jeżeli egzekucja z majątku komplementariusza okaże się bezskuteczna",
      "odpowiada za zobowiązania spółki całym swoim majątkiem osobistym",
      "odpowiada za zobowiązania spółki na takich samych zasadach co komplementariusz",
      "odpowiada za zobowiązania spółki tylko do wysokości tzw. sumy komandytowej"
    ],
    correctAnswer: "odpowiada za zobowiązania spółki tylko do wysokości tzw. sumy komandytowej"
  },
  {
    id: 32,
    question: "Podejmowanie uchwał przez zarząd spółki akcyjnej wymaga dodatkowo dla jej ważności:",
    options: [
      "monitorowania przez członka Rady Nadzorczej",
      "nagrywania",
      "rejestrowania audiowizualnego",
      "protokołowania"
    ],
    correctAnswer: "protokołowania"
  },
  {
    id: 33,
    question: "W spółce komandytowej w sprawach przekraczających zakres zwykłych czynności wymagana jest zgoda:",
    options: [
      "wszystkich komplementariuszy i wszystkich komandytariuszy, chyba że umowa spółki stanowi inaczej",
      "sądu rejestrowego",
      "tylko komplementariuszy, którzy mają prawo do prowadzenia spraw spółki",
      "samych komandytariuszy spółki"
    ],
    correctAnswer: "tylko komplementariuszy, którzy mają prawo do prowadzenia spraw spółki"
  },
  {
    id: 34,
    question: "Spółka akcyjna w organizacji staje się spółką akcyjną w chwili:",
    options: [
      "objęcia wszystkich akcji",
      "zawarcia umowy spółki",
      "ustanowienia zarządu spółki",
      "wpisania spółki do KRS-u"
    ],
    correctAnswer: "wpisania spółki do KRS-u"
  },
  {
    id: 35,
    question: "Minimalny kapitał zakładowy wymagany do założenia spółki akcyjnej to:",
    options: [
      "500 000 zł",
      "10 000 zł",
      "100 000 zł",
      "1 zł"
    ],
    correctAnswer: "100 000 zł"
  },
  {
    id: 36,
    question: "Przedsiębiorstwo działające w formie spółki handlowej, zanim rozpocznie działalność, musi zarejestrować się w:",
    options: [
      "Rejestrze Gospodarczym",
      "Krajowym Rejestrze Sądowym",
      "Krajowym Rejestrze Gospodarczym",
      "Rejestrze Handlowym"
    ],
    correctAnswer: "Krajowym Rejestrze Sądowym"
  },
  {
    id: 37,
    question: "Uchwały Walnego Zgromadzenia Akcjonariuszy spółki akcyjnej mogą być podjęte, pomimo braku formalnego zwołania walnego zgromadzenia, jeżeli:",
    options: [
      "jeśli co najmniej ¾ kapitału zakładowego jest reprezentowane",
      "jeśli co najmniej ⅔ kapitału zakładowego jest reprezentowane",
      "jeśli cały kapitał zakładowy jest reprezentowany",
      "jeśli bezwzględna większość kapitału zakładowego jest reprezentowana"
    ],
    correctAnswer: "jeśli cały kapitał zakładowy jest reprezentowany"
  },
  {
    id: 38,
    question: "Minimalna wysokość kapitału zakładowego spółki komandytowo-akcyjnej wynosi:",
    options: [
      "500 000 zł",
      "25 000 zł",
      "5 000 zł",
      "50 000 zł"
    ],
    correctAnswer: "50 000 zł"
  },
  {
    id: 39,
    question: "Minimalna liczba wspólników w spółce jawnej to:",
    options: [
      "4 wspólników",
      "3 wspólników",
      "1 wspólnik",
      "2 wspólników"
    ],
    correctAnswer: "2 wspólników"
  },
  {
    id: 40,
    question: "Członków zarządu spółki akcyjnej powołuje i odwołuje:",
    options: [
      "Zgromadzenie Wspólników",
      "Walne Zgromadzenie Akcjonariuszy",
      "Walne Zgromadzenie Akcjonariuszy w porozumieniu z Radą Nadzorczą",
      "Rada Nadzorcza, chyba że statut spółki stanowi inaczej"
    ],
    correctAnswer: "Rada Nadzorcza, chyba że statut spółki stanowi inaczej"
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
  { id: 4, label: "Pytania 31 - 40", startId: 31, endId: 40 }
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