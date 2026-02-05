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
    question: "Zgodnie z Ordynacją podatkową, podatek to świadczenie:",
    options: [
      "Dobrowolne i zwrotne",
      "Odpłatne i przymusowe",
      "Przymusowe, bezzwrotne, nieodpłatne i publicznoprawne",
      "Prywatnoprawne i pieniężne"
    ],
    correctAnswer: "Przymusowe, bezzwrotne, nieodpłatne i publicznoprawne"
  },
  {
    id: 2,
    question: "Która z poniższych cech NIE dotyczy podatku według definicji ustawowej?",
    options: [
      "Pieniężny charakter",
      "Ekwiwalentność (odpłatność)",
      "Przymusowość",
      "Bezzwrotność"
    ],
    correctAnswer: "Ekwiwalentność (odpłatność)"
  },
  {
    id: 3,
    question: "Funkcja redystrybucyjna podatku polega na:",
    options: [
      "Dostarczaniu środków do budżetu państwa",
      "Wywoływaniu korzystnych zjawisk gospodarczych",
      "Podziale dochodów między grupy społeczne i niwelowaniu różnic majątkowych",
      "Dostarczaniu informacji o przebiegu procesów gospodarczych"
    ],
    correctAnswer: "Podziale dochodów między grupy społeczne i niwelowaniu różnic majątkowych"
  },
  {
    id: 4,
    question: "Funkcja stymulacyjna podatku ma na celu:",
    options: [
      "Zapewnienie dochodów gminie",
      "Wywoływanie pożądanych zachowań (np. inwestycji) lub hamowanie szkodliwych",
      "Kontrolę nad podatnikami",
      "Przesuwanie majątku od bogatych do biednych"
    ],
    correctAnswer: "Wywoływanie pożądanych zachowań (np. inwestycji) lub hamowanie szkodliwych"
  },
  {
    id: 5,
    question: "Zgodnie z Konstytucją RP, nakładanie podatków następuje w drodze:",
    options: [
      "Rozporządzenia Ministra Finansów",
      "Ustawy",
      "Zarządzenia Prezydenta",
      "Umowy międzynarodowej bez ratyfikacji"
    ],
    correctAnswer: "Ustawy"
  },
  {
    id: 6,
    question: "Płatnikiem jest podmiot zobowiązany do:",
    options: [
      "Ponoszenia ciężaru ekonomicznego podatku",
      "Obliczenia, pobrania podatku od podatnika i wpłacenia go organowi",
      "Tylko i wyłącznie pobrania gotówki od podatnika",
      "Wydania decyzji podatkowej"
    ],
    correctAnswer: "Obliczenia, pobrania podatku od podatnika i wpłacenia go organowi"
  },
  {
    id: 7,
    question: "Podmiotem, który tylko pobiera podatek i wpłaca go organowi (np. sołtys), ale go nie oblicza, jest:",
    options: ["Podatnik", "Płatnik", "Inkasent", "Komornik"],
    correctAnswer: "Inkasent"
  },
  {
    id: 8,
    question: "Obowiązek podatkowy to:",
    options: [
      "Skonkretyzowane zobowiązanie do zapłaty",
      "Nieskonkretyzowana powinność świadczenia pieniężnego w związku z zaistnieniem zdarzenia",
      "Decyzja urzędu skarbowego",
      "Kwota wpłacana na konto urzędu"
    ],
    correctAnswer:
      "Nieskonkretyzowana powinność świadczenia pieniężnego w związku z zaistnieniem zdarzenia"
  },
  {
    id: 9,
    question: "Zobowiązanie podatkowe różni się od obowiązku podatkowego tym, że:",
    options: [
      "Jest kategorią abstrakcyjną",
      "Jest skonkretyzowane co do wysokości, terminu i miejsca",
      "Nie wymaga zapłaty",
      "Dotyczy tylko osób prawnych"
    ],
    correctAnswer: "Jest skonkretyzowane co do wysokości, terminu i miejsca"
  },
  {
    id: 10,
    question: "Zobowiązanie podatkowe powstające z mocy prawa (ex lege) charakteryzuje się tym, że:",
    options: [
      "Wymaga doręczenia decyzji organu podatkowego",
      "Powstaje automatycznie z chwilą zaistnienia zdarzenia (np. uzyskania dochodu)",
      "Termin płatności wynosi zawsze 14 dni od decyzji",
      "Organ podatkowy musi obliczyć podatek za podatnika"
    ],
    correctAnswer:
      "Powstaje automatycznie z chwilą zaistnienia zdarzenia (np. uzyskania dochodu)"
  },
  {
    id: 11,
    question: "Decyzja ustalająca wysokość zobowiązania (np. podatek od nieruchomości dla osób fizycznych) ma charakter:",
    options: [
      "Deklaratoryjny (potwierdza stan istniejący)",
      "Konstytutywny (tworzy nowe zobowiązanie)",
      "Egzekucyjny",
      "Opiniodawczy"
    ],
    correctAnswer: "Konstytutywny (tworzy nowe zobowiązanie)"
  },
  {
    id: 12,
    question: "Termin płatności podatku ustalanego w drodze decyzji konstytutywnej wynosi:",
    options: [
      "7 dni od doręczenia",
      "14 dni od doręczenia",
      "30 dni od wydania decyzji",
      "Do końca roku podatkowego"
    ],
    correctAnswer: "14 dni od doręczenia"
  },
  {
    id: 13,
    question: "Efektywnym sposobem wygaśnięcia zobowiązania podatkowego jest:",
    options: ["Przedawnienie", "Umorzenie", "Potrącenie", "Zaniechanie poboru"],
    correctAnswer: "Potrącenie"
  },
  {
    id: 14,
    question: "Nieefektywnym sposobem wygaśnięcia zobowiązania (bez zaspokojenia wierzyciela) jest:",
    options: ["Zapłata", "Przeniesienie własności rzeczy", "Przedawnienie", "Zaliczenie nadpłaty"],
    correctAnswer: "Przedawnienie"
  },
  {
    id: 15,
    question: "Standardowy termin przedawnienia zobowiązania podatkowego wynosi:",
    options: [
      "3 lata od końca roku kalendarzowego",
      "5 lat od daty wydania decyzji",
      "5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności",
      "10 lat od powstania obowiązku"
    ],
    correctAnswer:
      "5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności"
  },
  {
    id: 16,
    question: "Zastosowanie środka egzekucyjnego, o którym podatnik został zawiadomiony, powoduje:",
    options: [
      "Zawieszenie biegu przedawnienia",
      "Przerwanie biegu przedawnienia (biegnie na nowo)",
      "Umorzenie zaległości",
      "Skrócenie terminu przedawnienia"
    ],
    correctAnswer: "Przerwanie biegu przedawnienia (biegnie na nowo)"
  },
  {
    id: 17,
    question: "Wniesienie skargi do sądu administracyjnego powoduje:",
    options: [
      "Przerwanie biegu przedawnienia",
      "Zawieszenie biegu przedawnienia",
      "Wygaśnięcie zobowiązania",
      "Naliczanie opłaty prolongacyjnej"
    ],
    correctAnswer: "Zawieszenie biegu przedawnienia"
  },
  {
    id: 18,
    question: "Odsetki za zwłokę od zaległości podatkowych naliczane są:",
    options: [
      "Tylko na wezwanie organu",
      "Z mocy samej ustawy, bez względu na winę podatnika",
      "Tylko w przypadku popełnienia przestępstwa skarbowego",
      "Tylko przez sąd"
    ],
    correctAnswer: "Z mocy samej ustawy, bez względu na winę podatnika"
  },
  {
    id: 19,
    question: "Podstawowa stawka odsetek za zwłokę to:",
    options: [
      "Stopa lombardowa + 2%",
      "200% stopy lombardowej NBP + 2%, nie mniej niż 8%",
      "Stałe 10%",
      "Stopa referencyjna NBP"
    ],
    correctAnswer: "200% stopy lombardowej NBP + 2%, nie mniej niż 8%"
  },
  {
    id: 20,
    question: "Obniżona stawka odsetek (50%) przysługuje, gdy podatnik:",
    options: [
      "Złoży korektę deklaracji w ciągu 6 miesięcy i zapłaci zaległość w ciągu 7 dni",
      "Napisze wniosek o umorzenie",
      "Jest małym podatnikiem",
      "Zapłaci podatek przed terminem"
    ],
    correctAnswer:
      "Złoży korektę deklaracji w ciągu 6 miesięcy i zapłaci zaległość w ciągu 7 dni"
  },
  {
    id: 21,
    question: "Opłata prolongacyjna jest naliczana w związku z:",
    options: [
      "Kontrolą podatkową",
      "Wydaniem decyzji o odroczeniu terminu płatności lub rozłożeniu na raty",
      "Korektą deklaracji",
      "Niezłożeniem deklaracji w terminie"
    ],
    correctAnswer: "Wydaniem decyzji o odroczeniu terminu płatności lub rozłożeniu na raty"
  },
  {
    id: 22,
    question: "Podatnik odpowiada za zobowiązania podatkowe:",
    options: [
      "Tylko majątkiem firmowym",
      "Tylko do wysokości kapitału zakładowego",
      "Całym swoim majątkiem (odpowiedzialność osobista i nieograniczona)",
      "Tylko do wysokości dochodu"
    ],
    correctAnswer:
      "Całym swoim majątkiem (odpowiedzialność osobista i nieograniczona)"
  },
  {
    id: 23,
    question: "Odpowiedzialność osoby trzeciej za zaległości podatnika ma charakter:",
    options: ["Główny i samoistny", "Posiłkowy i subsydiarny", "Karny", "Wyłączny"],
    correctAnswer: "Posiłkowy i subsydiarny"
  },
  {
    id: 24,
    question: "Rozwiedziony małżonek podatnika odpowiada za zaległości powstałe w czasie trwania wspólności:",
    options: [
      "Tylko do wysokości udziału w majątku wspólnym",
      "Solidarnie z byłym małżonkiem całym swoim majątkiem",
      "Nie odpowiada w ogóle",
      "Tylko jeśli prowadził sprawy firmy"
    ],
    correctAnswer: "Solidarnie z byłym małżonkiem całym swoim majątkiem"
  },
  {
    id: 25,
    question: "Członkowie zarządu spółki z o.o. odpowiadają za zaległości podatkowe spółki:",
    options: [
      "Zawsze i bezwarunkowo",
      "Tylko jeśli posiadają udziały w spółce",
      "Jako osoby trzecie (subsydiarnie), gdy egzekucja z majątku spółki jest bezskuteczna",
      "Tylko prezes zarządu"
    ],
    correctAnswer:
      "Jako osoby trzecie (subsydiarnie), gdy egzekucja z majątku spółki jest bezskuteczna"
  },
  {
    id: 26,
    question: "Do form opodatkowania działalności gospodarczej podatkiem dochodowym NIE należy:",
    options: ["Skala progresywna", "Podatek liniowy", "Podatek obrotowy", "Ryczałt od przychodów ewidencjonowanych"],
    correctAnswer: "Podatek obrotowy"
  },
  {
    id: 27,
    question: "Opodatkowanie na zasadach ogólnych (skala podatkowa) przewiduje stawki:",
    options: ["18% i 32%", "12% i 32%", "19% stałe", "10% i 20%"],
    correctAnswer: "12% i 32%"
  },
  {
    id: 28,
    question: "Stawka podatku liniowego wynosi:",
    options: ["15%", "17%", "19%", "32%"],
    correctAnswer: "19%"
  },
  {
    id: 29,
    question: "Kwota wolna od podatku w skali podatkowej (kwota dochodu niepodlegająca opodatkowaniu) wynosi:",
    options: ["3091 zł", "8000 zł", "30 000 zł", "85 528 zł"],
    correctAnswer: "30 000 zł"
  },
  {
    id: 30,
    question: "Główną wadą podatku liniowego jest:",
    options: [
      "Wyższa stawka niż w pierwszym progu skali",
      "Brak możliwości wspólnego rozliczenia z małżonkiem i brak ulgi na dzieci (co do zasady)",
      "Konieczność prowadzenia pełnej księgowości",
      "Limit przychodów 2 mln euro"
    ],
    correctAnswer:
      "Brak możliwości wspólnego rozliczenia z małżonkiem i brak ulgi na dzieci (co do zasady)"
  },
  {
    id: 31,
    question: "Wybór podatku liniowego jest niemożliwy, jeśli podatnik:",
    options: [
      "Świadczy usługi na rzecz byłego pracodawcy odpowiadające czynnościom wykonywanym na etacie",
      "Zatrudnia pracowników",
      "Prowadzi spółkę cywilną",
      "Osiąga przychody z najmu"
    ],
    correctAnswer:
      "Świadczy usługi na rzecz byłego pracodawcy odpowiadające czynnościom wykonywanym na etacie"
  },
  {
    id: 32,
    question: "Podstawą opodatkowania w ryczałcie od przychodów ewidencjonowanych jest:",
    options: ["Dochód (przychód minus koszty)", "Przychód (bez pomniejszania o koszty uzyskania)", "Zysk brutto", "Obrót netto"],
    correctAnswer: "Przychód (bez pomniejszania o koszty uzyskania)"
  },
  {
    id: 33,
    question: "Obowiązek prowadzenia ksiąg rachunkowych (pełna księgowość) dotyczy osób fizycznych, których przychody przekroczyły:",
    options: ["1,2 mln euro", "2 mln euro", "2,5 mln euro", "500 tys. zł"],
    correctAnswer: "2,5 mln euro"
  },
  {
    id: 34,
    question: "Podatkowa Księga Przychodów i Rozchodów (KPiR) jest urządzeniem księgowym dla:",
    options: [
      "Spółek z o.o.",
      "Osób fizycznych opodatkowanych na zasadach ogólnych lub liniowo (poniżej limitu ksiąg rachunkowych)",
      "Ryczałtowców",
      "Rolników"
    ],
    correctAnswer:
      "Osób fizycznych opodatkowanych na zasadach ogólnych lub liniowo (poniżej limitu ksiąg rachunkowych)"
  },
  {
    id: 35,
    question: "Za przychód z działalności gospodarczej uważa się kwoty:",
    options: ["Tylko faktycznie otrzymane", "Należne, choćby nie zostały faktycznie otrzymane", "Wpłacone na konto prywatne", "Brutto (z VAT)"],
    correctAnswer: "Należne, choćby nie zostały faktycznie otrzymane"
  },
  {
    id: 36,
    question: "Czy otrzymana zaliczka na poczet dostawy towaru jest przychodem podatkowym w momencie otrzymania?",
    options: [
      "Tak, zawsze",
      "Tak, jeśli przekracza 1000 zł",
      "Nie, zaliczki nie są przychodem (chyba że są zewidencjonowane na kasie, ale co do zasady w PIT nie są)",
      "Tak, ale tylko w ryczałcie"
    ],
    correctAnswer:
      "Nie, zaliczki nie są przychodem (chyba że są zewidencjonowane na kasie, ale co do zasady w PIT nie są)"
  },
  {
    id: 37,
    question: "Datą powstania przychodu jest co do zasady:",
    options: [
      "Dzień zapłaty",
      "Dzień wydania rzeczy/wykonania usługi, nie później niż dzień wystawienia faktury lub uregulowania należności",
      "Ostatni dzień miesiąca",
      "Dzień złożenia zeznania"
    ],
    correctAnswer:
      "Dzień wydania rzeczy/wykonania usługi, nie później niż dzień wystawienia faktury lub uregulowania należności"
  },
  {
    id: 38,
    question: "Kosztem uzyskania przychodów są koszty poniesione w celu:",
    options: [
      "Osiągnięcia przychodów lub zachowania albo zabezpieczenia źródła przychodów",
      "Zaspokojenia potrzeb osobistych podatnika",
      "Uniknięcia zapłaty podatku",
      "Spłaty kredytu (kapitału)"
    ],
    correctAnswer:
      "Osiągnięcia przychodów lub zachowania albo zabezpieczenia źródła przychodów"
  },
  {
    id: 39,
    question: "Kosztem podatkowym (KUP) NIE są:",
    options: ["Wynagrodzenia pracowników", "Wydatki na reprezentację (np. okazałe kolacje dla wizerunku)", "Amortyzacja maszyn", "Czynsz za biuro"],
    correctAnswer: "Wydatki na reprezentację (np. okazałe kolacje dla wizerunku)"
  },
  {
    id: 40,
    question: "Czy praca własna małżonka podatnika jest kosztem uzyskania przychodu?",
    options: [
      "Tak, zawsze",
      "Tak, jeśli jest to umowa o pracę",
      "Nie, wartość własnej pracy małżonka i dzieci małoletnich jest wyłączona z kosztów (jako praca własna), ale wynagrodzenie wypłacane im na umowę jest kosztem",
      "Nie, nigdy, nawet przy umowie o pracę"
    ],
    correctAnswer:
      "Nie, wartość własnej pracy małżonka i dzieci małoletnich jest wyłączona z kosztów (jako praca własna), ale wynagrodzenie wypłacane im na umowę jest kosztem"
  },
  {
    id: 41,
    question: "Amortyzacja samochodu osobowego jest kosztem tylko do wartości samochodu:",
    options: ["20 000 euro", "150 000 zł (225 000 zł dla elektrycznych)", "100 000 zł", "Bez limitu"],
    correctAnswer: "150 000 zł (225 000 zł dla elektrycznych)"
  },
  {
    id: 42,
    question: "Ulga na złe długi pozwala wierzycielowi na:",
    options: [
      "Umorzenie długu",
      "Zmniejszenie podstawy opodatkowania o wartość nieuregulowanej wierzytelności po 90 dniach od terminu płatności",
      "Sprzedaż długu bez podatku",
      "Odliczenie 100% VAT"
    ],
    correctAnswer:
      "Zmniejszenie podstawy opodatkowania o wartość nieuregulowanej wierzytelności po 90 dniach od terminu płatności"
  },
  {
    id: 43,
    question: "Składnik majątku uznaje się za środek trwały podlegający amortyzacji, jeśli jego przewidywany okres używania wynosi:",
    options: ["Co najmniej 6 miesięcy", "Co najmniej rok", "Co najmniej 3 lata", "Dowolny okres"],
    correctAnswer: "Co najmniej rok"
  },
  {
    id: 44,
    question: "Dolny limit wartości środka trwałego, od którego obowiązkowa jest amortyzacja (zamiast jednorazowego zaliczenia w koszty), to:",
    options: ["3 500 zł", "10 000 zł", "15 000 zł", "50 000 zł"],
    correctAnswer: "10 000 zł"
  },
  {
    id: 45,
    question: "Metoda amortyzacji liniowej polega na:",
    options: [
      "Odpisach od wartości początkowej malejącej co rok",
      "Odpisach stałą stawką przez cały okres użytkowania",
      "Jednorazowym odpisie w miesiącu zakupu",
      "Dowolnym ustalaniu stawek co miesiąc"
    ],
    correctAnswer: "Odpisach stałą stawką przez cały okres użytkowania"
  },
  {
    id: 46,
    question: "Metoda amortyzacji degresywnej zakłada zastosowanie współczynnika podwyższającego stawkę, maksymalnie:",
    options: ["1,5", "2,0", "3,0", "4,0"],
    correctAnswer: "2,0"
  },
  {
    id: 47,
    question: "Jednorazowa amortyzacja (pomoc de minimis) ma limit roczny:",
    options: ["100 000 zł", "50 000 euro", "150 000 zł", "2 mln euro"],
    correctAnswer: "50 000 euro"
  },
  {
    id: 48,
    question: "Jednorazowa amortyzacja dla fabrycznie nowych środków trwałych (bez statusu małego podatnika) ma limit:",
    options: ["50 000 zł", "100 000 zł", "10 000 euro", "Nie ma limitu"],
    correctAnswer: "100 000 zł"
  },
  {
    id: 49,
    question: "Ulga B+R (badawczo-rozwojowa) pozwala odliczyć od podstawy opodatkowania:",
    options: [
      "50% kosztów kwalifikowanych",
      "100% (lub 200% dla CBR/pracowników) kosztów kwalifikowanych",
      "Tylko koszty wynagrodzeń",
      "Cały dochód firmy"
    ],
    correctAnswer: "100% (lub 200% dla CBR/pracowników) kosztów kwalifikowanych"
  },
  {
    id: 50,
    question: "IP Box pozwala na opodatkowanie dochodów z kwalifikowanych praw własności intelektualnej stawką:",
    options: ["19%", "9%", "5%", "0%"],
    correctAnswer: "5%"
  },
  {
    id: 51,
    question: "Ulga dla młodych (zerowy PIT) dotyczy osób, które nie ukończyły:",
    options: ["18 roku życia", "25 roku życia", "26 roku życia", "30 roku życia"],
    correctAnswer: "26 roku życia"
  },
  {
    id: 52,
    question: "Limit przychodów w uldze dla młodych wynosi:",
    options: ["30 000 zł", "85 528 zł", "120 000 zł", "Bez limitu"],
    correctAnswer: "85 528 zł"
  },
  {
    id: 53,
    question: "Ulga abolicyjna (dotycząca pracy za granicą) jest limitowana do kwoty:",
    options: ["1360 zł", "2280 zł", "8000 zł", "Nie jest limitowana"],
    correctAnswer: "1360 zł"
  },
  {
    id: 54,
    question: "Ulga na Internet pozwala odliczyć maksymalnie:",
    options: ["500 zł", "760 zł", "Pełną kwotę faktur", "1000 zł"],
    correctAnswer: "760 zł"
  },
  {
    id: 55,
    question: "Darowizny na cele kultu religijnego można odliczyć od dochodu do wysokości:",
    options: ["10% dochodu", "6% dochodu", "Bez limitu", "1000 zł"],
    correctAnswer: "6% dochodu"
  },
  {
    id: 56,
    question: "Ulga na robotyzację pozwala odliczyć dodatkowo:",
    options: [
      "100% kosztów robotów",
      "50% kosztów kwalifikowanych poniesionych na robotyzację",
      "30% kosztów",
      "Nic, to tylko koszt uzyskania przychodu"
    ],
    correctAnswer: "50% kosztów kwalifikowanych poniesionych na robotyzację"
  },
  {
    id: 57,
    question: "Danina solidarnościowa wynosi:",
    options: [
      "4% od nadwyżki dochodów ponad 1 mln zł",
      "5% od całego dochodu",
      "19% od dywidend",
      "2% od przychodu"
    ],
    correctAnswer: "4% od nadwyżki dochodów ponad 1 mln zł"
  },
  {
    id: 58,
    question: "Kwota ulgi na jedno dziecko (przy spełnieniu kryteriów) wynosi miesięcznie:",
    options: ["500 zł", "92,67 zł", "150 zł", "300 zł"],
    correctAnswer: "92,67 zł"
  },
  {
    id: 59,
    question: "Stawka ryczałtu dla wolnych zawodów (wg prezentacji) wynosi:",
    options: ["19%", "17%", "15%", "12%"],
    correctAnswer: "17%"
  },
  {
    id: 60,
    question: "Stawka ryczałtu dla działalności handlowej wynosi:",
    options: ["8,5%", "5,5%", "3,0%", "2,0%"],
    correctAnswer: "3,0%"
  },
  {
    id: 61,
    question: "Stawka ryczałtu od przychodów z najmu prywatnego powyżej 100 000 zł wynosi:",
    options: ["8,5%", "10%", "12,5%", "19%"],
    correctAnswer: "12,5%"
  },
  {
    id: 62,
    question: "Sankcyjna stawka ryczałtu za nieprowadzenie ewidencji wynosi:",
    options: [
      "75% przychodu",
      "5-krotność stawki podstawowej (max 75%)",
      "50% przychodu",
      "32% dochodu"
    ],
    correctAnswer: "5-krotność stawki podstawowej (max 75%)"
  },
  {
    id: 63,
    question: "Przy ryczałcie nie można odliczyć od przychodu:",
    options: ["Składek ZUS", "Kosztów uzyskania przychodów", "Darowizn", "Ulgi na Internet"],
    correctAnswer: "Kosztów uzyskania przychodów"
  },
  {
    id: 64,
    question: "Interpretacja przepisów \"in dubio pro tributario\" oznacza:",
    options: [
      "Wątpliwości rozstrzyga się na korzyść organu",
      "Niedające się usunąć wątpliwości rozstrzyga się na korzyść podatnika",
      "Podatnik zawsze ma rację",
      "Sąd decyduje dowolnie"
    ],
    correctAnswer: "Niedające się usunąć wątpliwości rozstrzyga się na korzyść podatnika"
  },
  {
    id: 65,
    question: "Wykładnia językowa w prawie podatkowym:",
    options: ["Ma charakter pomocniczy", "Ma prymat (pierwszeństwo)", "Nie jest stosowana", "Jest podrzędna wobec celowościowej"],
    correctAnswer: "Ma prymat (pierwszeństwo)"
  },
  {
    id: 66,
    question: "Metoda unikania podwójnego opodatkowania \"wyłączenie z progresją\" polega na:",
    options: [
      "Zwolnieniu dochodu zagranicznego w Polsce, ale uwzględnieniu go przy ustalaniu stopy procentowej",
      "Opodatkowaniu dochodu zagranicznego i odliczeniu podatku zapłaconego za granicą",
      "Całkowitym braku obowiązku wykazywania tego dochodu",
      "Zapłacie podwójnego podatku"
    ],
    correctAnswer:
      "Zwolnieniu dochodu zagranicznego w Polsce, ale uwzględnieniu go przy ustalaniu stopy procentowej"
  },
  {
    id: 67,
    question: "Ulga na terminal płatniczy dotyczy wydatków na:",
    options: [
      "Tylko nabycie terminala",
      "Nabycie terminala i wydatki związane z obsługą transakcji",
      "Tylko prowizje bankowe",
      "Zakup kasy fiskalnej"
    ],
    correctAnswer: "Nabycie terminala i wydatki związane z obsługą transakcji"
  },
  {
    id: 68,
    question: "Ewidencja przychodów przy ryczałcie musi być prowadzona:",
    options: [
      "Tylko elektronicznie",
      "W formie zbroszurowanej z ponumerowanymi kartami (lub odpowiednio komputerowo) od dnia wyboru opodatkowania",
      "Tylko przez biuro rachunkowe",
      "Raz na rok"
    ],
    correctAnswer:
      "W formie zbroszurowanej z ponumerowanymi kartami (lub odpowiednio komputerowo) od dnia wyboru opodatkowania"
  },
  {
    id: 69,
    question: "Limit przychodów uprawniający do kwartalnego wpłacania ryczałtu to równowartość:",
    options: ["2 mln euro", "200 tys. euro", "100 tys. zł", "50 tys. euro"],
    correctAnswer: "200 tys. euro"
  },
  {
    id: 70,
    question: "Kredyt podatkowy (zwolnienie z zaliczek) przysługuje:",
    options: [
      "Każdemu podatnikowi raz na 5 lat",
      "Podatnikom po raz pierwszy rozpoczynającym działalność (i spełniającym inne warunki)",
      "Spółkom z o.o.",
      "Tylko rolnikom"
    ],
    correctAnswer:
      "Podatnikom po raz pierwszy rozpoczynającym działalność (i spełniającym inne warunki)"
  },
  {
    id: 71,
    question: "Wpłaty na IKZE można odliczyć od dochodu do limitu:",
    options: [
      "3000 zł",
      "1,2-krotności przeciętnego wynagrodzenia (ok. 6-7 tys. zł)",
      "10 000 zł",
      "Nie ma limitu"
    ],
    correctAnswer: "1,2-krotności przeciętnego wynagrodzenia (ok. 6-7 tys. zł)"
  },
  {
    id: 72,
    question: "Koszty reprezentacji (np. okazałe obiady dla kontrahentów) w świetle przepisów i orzecznictwa:",
    options: [
      "Są zawsze KUP",
      "Są wyłączone z KUP (Art. 23), chyba że to drobny poczęstunek (kawą, ciastka) podczas rozmów",
      "Są KUP do 50%",
      "Są KUP tylko dla spółek"
    ],
    correctAnswer:
      "Są wyłączone z KUP (Art. 23), chyba że to drobny poczęstunek (kawą, ciastka) podczas rozmów"
  },
  {
    id: 73,
    question: "Odpisów amortyzacyjnych dokonuje się:",
    options: ["Od wartości rynkowej", "Od wartości początkowej", "Od wartości netto", "Od wartości odtworzeniowej"],
    correctAnswer: "Od wartości początkowej"
  },
  {
    id: 74,
    question: "Strata z działalności gospodarczej nie może być odliczona od:",
    options: ["Dochodów z tej samej działalności w latach przyszłych", "Dochodów ze stosunku pracy", "Dochodów z najmu prywatnego (jeśli to to samo źródło, ale tu inne)", "Zysków z tej samej firmy"],
    correctAnswer: "Dochodów ze stosunku pracy"
  },
  {
    id: 75,
    question: "Zaliczki na podatek dochodowy (skala/liniowy) płatne są do:",
    options: ["10 dnia miesiąca", "20 dnia następnego miesiąca", "25 dnia miesiąca", "Ostatniego dnia miesiąca"],
    correctAnswer: "20 dnia następnego miesiąca"
  },
  {
    id: 76,
    question: "Podatnik, który poniósł stratę, może ją rozliczyć w ciągu:",
    options: ["2 lat", "3 lat", "5 lat", "10 lat"],
    correctAnswer: "5 lat"
  },
  {
    id: 77,
    question: "Jednorazowe obniżenie dochodu o stratę (do 5 mln zł) jest możliwe:",
    options: ["W każdym roku", "W jednym z najbliższych 5 lat podatkowych", "Tylko w roku poniesienia straty", "Nie jest możliwe"],
    correctAnswer: "W jednym z najbliższych 5 lat podatkowych"
  },
  {
    id: 78,
    question: "Koszty kwalifikowane w uldze B+R to m.in.:",
    options: ["Wynagrodzenia pracowników B+R", "Koszty wynajmu biura księgowości", "Zakup samochodu osobowego", "Reklama w telewizji"],
    correctAnswer: "Wynagrodzenia pracowników B+R"
  },
  {
    id: 79,
    question: "Ulga na powrót (\"na start\" po powrocie z zagranicy) zwalnia przychody do kwoty:",
    options: ["30 000 zł", "85 528 zł", "100 000 zł", "Całość przychodów"],
    correctAnswer: "85 528 zł"
  },
  {
    id: 80,
    question: "Ryczałt od przychodów ewidencjonowanych wyklucza wspólne rozliczenie z małżonkiem:",
    options: ["Nie, można się łączyć", "Tak, chyba że dotyczy tylko najmu prywatnego", "Tak, w każdym przypadku", "Zależy od decyzji naczelnika US"],
    correctAnswer: "Tak, chyba że dotyczy tylko najmu prywatnego"
  },
  {
    id: 81,
    question: "Stawka ryczałtu 10% dotyczy:",
    options: ["Usług budowlanych", "Kupna i sprzedaży nieruchomości na własny rachunek", "Wolnych zawodów", "Usług IT"],
    correctAnswer: "Kupna i sprzedaży nieruchomości na własny rachunek"
  },
  {
    id: 82,
    question: "Podatnik prowadzący działalność gospodarczą w domu może zaliczyć do kosztów wydatki na Internet:",
    options: [
      "W całości",
      "W ramach ulgi na Internet (do 760 zł), jeśli nie zaliczył do kosztów firmowych",
      "Nie może",
      "Tylko 50%"
    ],
    correctAnswer:
      "W ramach ulgi na Internet (do 760 zł), jeśli nie zaliczył do kosztów firmowych"
  },
  {
    id: 83,
    question: "Kary umowne i grzywny:",
    options: ["Są zawsze kosztem podatkowym", "Są kosztem, jeśli wynikają z umowy", "Nie są kosztem uzyskania przychodu (NKUP)", "Są przychodem"],
    correctAnswer: "Nie są kosztem uzyskania przychodu (NKUP)"
  },
  {
    id: 84,
    question: "Wartość ulepszenia środka trwałego:",
    options: ["Jest kosztem jednorazowym", "Powiększa wartość początkową i podlega amortyzacji", "Nie ma znaczenia podatkowego", "Jest odliczana od podatku"],
    correctAnswer: "Powiększa wartość początkową i podlega amortyzacji"
  },
  {
    id: 85,
    question: "Podatek leśny powstaje:",
    options: ["Z mocy prawa", "Z dniem doręczenia decyzji organu (zobowiązanie)", "W momencie zakupu lasu", "Raz na 5 lat"],
    correctAnswer: "Z dniem doręczenia decyzji organu (zobowiązanie)"
  },
  {
    id: 86,
    question: "Odpowiedzialność spadkobierców za długi podatkowe spadkodawcy jest:",
    options: ["Wyłączona", "Ograniczona tylko do podatku dochodowego", "Regulowana przepisami Kodeksu cywilnego o przyjęciu spadku", "Zawsze pełna"],
    correctAnswer: "Regulowana przepisami Kodeksu cywilnego o przyjęciu spadku"
  },
  {
    id: 87,
    question: "Zastaw skarbowy to forma:",
    options: ["Zapłaty podatku", "Zabezpieczenia zobowiązania podatkowego", "Wygaśnięcia zobowiązania", "Kary dla podatnika"],
    correctAnswer: "Zabezpieczenia zobowiązania podatkowego"
  },
  {
    id: 88,
    question: "Interpretacja indywidualna chroni podatnika, jeśli:",
    options: ["Zastosował się do niej", "Tylko ją otrzymał", "Nie zgadza się z nią", "Została wydana dla innego podatnika"],
    correctAnswer: "Zastosował się do niej"
  },
  {
    id: 89,
    question: "Stawka amortyzacji dla budynków i budowli może być podwyższona (współczynnik), jeśli:",
    options: ["Są nowe", "Są używane w warunkach pogorszonych lub złych", "Podatnik tak zdecyduje", "Przynoszą duży dochód"],
    correctAnswer: "Są używane w warunkach pogorszonych lub złych"
  },
  {
    id: 90,
    question: "Status \"małego podatnika\" w PIT/CIT (do amortyzacji jednorazowej) zależy od limitu przychodów:",
    options: ["1,2 mln euro", "2 mln euro", "5 mln zł", "10 mln euro"],
    correctAnswer: "2 mln euro"
  },
  {
    id: 91,
    question: "Danina solidarnościowa dotyczy dochodów przekraczających:",
    options: ["500 000 zł", "1 000 000 zł", "2 000 000 zł", "85 528 zł"],
    correctAnswer: "1 000 000 zł"
  },
  {
    id: 92,
    question: "Dochody z pracy w państwie, z którym Polska ma umowę o \"proporcjonalnym odliczeniu\", należy:",
    options: [
      "Pominąć w polskim zeznaniu",
      "Wykazać w polskim zeznaniu i dopłacić różnicę podatku",
      "Wykazać tylko dla stopy procentowej",
      "Opodatkować ryczałtem"
    ],
    correctAnswer: "Wykazać w polskim zeznaniu i dopłacić różnicę podatku"
  },
  {
    id: 93,
    question: "Jeżeli małżonkowie chcą rozliczyć się wspólnie, wniosek składają:",
    options: ["Do 20 stycznia", "W zeznaniu rocznym (PIT-36/37)", "Przed rozpoczęciem roku", "Nie muszą składać wniosku"],
    correctAnswer: "W zeznaniu rocznym (PIT-36/37)"
  },
  {
    id: 94,
    question: "Prowadzenie apteki wyklucza opodatkowanie w formie:",
    options: ["Skali podatkowej", "Podatku liniowego", "Ryczałtu od przychodów ewidencjonowanych", "Karty podatkowej"],
    correctAnswer: "Ryczałtu od przychodów ewidencjonowanych"
  },
  {
    id: 95,
    question: "Stawka 5,5% w ryczałcie dotyczy:",
    options: ["Działalności wytwórczej i robót budowlanych", "Lekarzy", "Handlu", "Wynajmu"],
    correctAnswer: "Działalności wytwórczej i robót budowlanych"
  },
  {
    id: 96,
    question: "Ulga na ekspansję pozwala odliczyć koszty do wysokości:",
    options: ["100 000 zł", "1 000 000 zł", "50% dochodu", "200 000 zł"],
    correctAnswer: "1 000 000 zł"
  },
  {
    id: 97,
    question: "Kaucja zwrotna otrzymana przez przedsiębiorcę:",
    options: ["Jest przychodem", "Nie jest przychodem (brak definitywności)", "Jest kosztem", "Jest dochodem"],
    correctAnswer: "Nie jest przychodem (brak definitywności)"
  },
  {
    id: 98,
    question: "Odsetki od środków na rachunku firmowym:",
    options: ["Są zwolnione z podatku", "Są przychodem z działalności gospodarczej", "Są opodatkowane ryczałtem", "Nie podlegają opodatkowaniu"],
    correctAnswer: "Są przychodem z działalności gospodarczej"
  },
  {
    id: 99,
    question: "Ryczałt płatny kwartalnie jest możliwy, gdy przychody nie przekroczyły:",
    options: ["200 000 euro", "2 000 000 euro", "100 000 zł", "50 000 euro"],
    correctAnswer: "200 000 euro"
  },
  {
    id: 100,
    question: "W przypadku spółki cywilnej, limit przychodów do prowadzenia KPiR (2 mln euro) odnosi się do:",
    options: ["Każdego wspólnika osobno", "Przychodów całej spółki", "Zysku spółki", "Obrotu brutto"],
    correctAnswer: "Przychodów całej spółki"
  },

  // 101-200
  {
    id: 101,
    question: "Wykładnia autentyczna to interpretacja przepisu dokonywana przez:",
    options: ["Sąd Najwyższy", "Organ, który dany przepis ustanowił", "Profesora prawa (doktrynę)", "Organ stosujący prawo (np. Naczelnika Urzędu Skarbowego) w konkretnej sprawie"],
    correctAnswer: "Organ, który dany przepis ustanowił"
  },
  {
    id: 102,
    question: "Zasada Clara non sunt interpretanda oznacza, że:",
    options: ["Wszystko wymaga interpretacji", "Jasne przepisy nie wymagają interpretacji", "Należy interpretować tylko przepisy niekorzystne", "Wykładnia jest zawsze zakazana"],
    correctAnswer: "Jasne przepisy nie wymagają interpretacji"
  },
  {
    id: 103,
    question: "Wykładnia operatywna ma charakter:",
    options: ["Powszechnie obowiązujący", "Abstrakcyjny i generalny", "Wiążący jedynie organ ją wydający oraz strony w konkretnej sprawie", "Naukowy"],
    correctAnswer: "Wiążący jedynie organ ją wydający oraz strony w konkretnej sprawie"
  },
  {
    id: 104,
    question: "Reguła kolizyjna Lex superior derogat legi inferior oznacza, że:",
    options: ["Norma późniejsza uchyla normę wcześniejszą", "Norma szczególna uchyla normę ogólną", "Norma wyższej rangi uchyla normę niższej rangi", "Prawo nie działa wstecz"],
    correctAnswer: "Norma wyższej rangi uchyla normę niższej rangi"
  },
  {
    id: 105,
    question: "Wnioskowanie a maiori ad minus oznacza:",
    options: [
      "Jeśli komuś nie wolno mniej, to tym bardziej nie wolno mu więcej",
      "Jeśli komuś wolno więcej, to tym bardziej wolno mu mniej",
      "Przepis szczególny uchyla ogólny",
      "Wyjątków nie interpretuje się rozszerzająco"
    ],
    correctAnswer: "Jeśli komuś wolno więcej, to tym bardziej wolno mu mniej"
  },
  {
    id: 106,
    question: "Dyrektywa zakładająca racjonalność językową prawodawcy oznacza, że:",
    options: [
      "Nie wolno interpretować przepisów tak, aby pewne ich fragmenty okazały się zbędne",
      "Należy zawsze stosować język potoczny",
      "Każde słowo ma inne znaczenie w każdej ustawie",
      "Przepisy są zawsze logiczne"
    ],
    correctAnswer: "Nie wolno interpretować przepisów tak, aby pewne ich fragmenty okazały się zbędne"
  },
  {
    id: 107,
    question: "Czy wydatki na ulepszenie środka trwałego są zaliczane bezpośrednio do kosztów uzyskania przychodów?",
    options: ["Tak, zawsze w dacie poniesienia", "Tak, jeśli nie przekraczają 100 000 zł", "Nie, powiększają one wartość początkową środka trwałego i są rozliczane przez odpisy amortyzacyjne", "Nie, są to wydatki na reprezentację"],
    correctAnswer: "Nie, powiększają one wartość początkową środka trwałego i są rozliczane przez odpisy amortyzacyjne"
  },
  {
    id: 108,
    question: "Amortyzacja samochodu osobowego nie jest kosztem podatkowym w części ustalonej od wartości samochodu przewyższającej:",
    options: ["20 000 euro", "150 000 zł (dla aut spalinowych/hybrydowych)", "100 000 zł", "30 000 zł"],
    correctAnswer: "150 000 zł (dla aut spalinowych/hybrydowych)"
  },
  {
    id: 109,
    question: "Wydatki na \"drobne poczęstunki\" (kawa, ciastka) podczas rozmów z kontrahentami:",
    options: ["Są zawsze wyłączone z kosztów jako reprezentacja", "Są kosztem uzyskania przychodu, jeśli nie mają charakteru okazałości i służą celom biznesowym", "Są kosztem tylko do wysokości 50%", "Są kosztem tylko dla spółek z o.o."],
    correctAnswer: "Są kosztem uzyskania przychodu, jeśli nie mają charakteru okazałości i służą celom biznesowym"
  },
  {
    id: 110,
    question: "Wynagrodzenie wypłacane małżonkowi podatnika z tytułu umowy o pracę w jego firmie:",
    options: ["Nie jest kosztem podatkowym (praca własna małżonka)", "Jest kosztem uzyskania przychodu", "Jest kosztem tylko do wysokości minimalnego wynagrodzenia", "Jest zwolnione z opodatkowania"],
    correctAnswer: "Jest kosztem uzyskania przychodu"
  },
  {
    id: 111,
    question: "Wartość własnej pracy małżonka podatnika (bez umowy) pomagającego w firmie:",
    options: ["Jest kosztem uzyskania przychodu", "Jest kosztem niepotrącalnym (NKUP)", "Podlega amortyzacji", "Jest odliczana od dochodu"],
    correctAnswer: "Jest kosztem niepotrącalnym (NKUP)"
  },
  {
    id: 112,
    question: "Kary i grzywny nakładane na przedsiębiorcę:",
    options: ["Są kosztem uzyskania przychodu", "Są kosztem, jeśli dotyczą działalności gospodarczej", "Znajdują się w katalogu wyłączeń (NKUP) i nie są kosztem", "Pomniejszają przychód"],
    correctAnswer: "Znajdują się w katalogu wyłączeń (NKUP) i nie są kosztem"
  },
  {
    id: 113,
    question: "Składki na ubezpieczenie samochodów ciężarowych (koszt pośredni) opłacone za okres przekraczający rok podatkowy (np. 18 miesięcy):",
    options: ["Są kosztem jednorazowym w dacie zapłaty", "Należy podzielić proporcjonalnie do długości okresów w każdym roku podatkowym", "Są kosztem dopiero po zakończeniu polisy", "Nie są kosztem podatkowym"],
    correctAnswer: "Należy podzielić proporcjonalnie do długości okresów w każdym roku podatkowym"
  },
  {
    id: 114,
    question: "Odpisy amortyzacyjne od środków trwałych sfinansowanych dotacją (zwróconych podatnikowi):",
    options: ["Są kosztem podatkowym w całości", "Nie stanowią kosztów uzyskania przychodów", "Są kosztem w 50%", "Są kosztem po 5 latach"],
    correctAnswer: "Nie stanowią kosztów uzyskania przychodów"
  },
  {
    id: 115,
    question: "Metoda memoriałowa rozliczania kosztów (u podatników prowadzących księgi rachunkowe) oznacza, że za dzień poniesienia kosztu uważa się:",
    options: ["Dzień zapłaty (kasowo)", "Dzień, na który ujęto koszt w księgach rachunkowych na podstawie faktury", "Ostatni dzień roku", "Dzień złożenia zeznania"],
    correctAnswer: "Dzień, na który ujęto koszt w księgach rachunkowych na podstawie faktury"
  },
  {
    id: 116,
    question: "Metoda amortyzacji, w której stawka procentowa jest stała przez cały okres, to metoda:",
    options: ["Degresywna", "Liniowa", "Jednorazowa", "Indywidualna"],
    correctAnswer: "Liniowa"
  },
  {
    id: 117,
    question: "Metoda degresywna amortyzacji zakłada, że w pierwszych latach odpisy są:",
    options: ["Niższe niż przy metodzie liniowej", "Wyższe (podwyższona stawka)", "Równe zeru", "Stałe"],
    correctAnswer: "Wyższe (podwyższona stawka)"
  },
  {
    id: 118,
    question: "Współczynnik podwyższający stawkę amortyzacyjną przy metodzie degresywnej nie może przekroczyć:",
    options: ["1,2", "1,4", "2,0", "3,0"],
    correctAnswer: "2,0"
  },
  {
    id: 119,
    question: "Metodę degresywną można stosować do:",
    options: ["Wszystkich środków trwałych", "Samochodów osobowych", "Maszyn i urządzeń z grup 3-6 i 8 KŚT oraz środków transportu (bez osobowych)", "Budynków i budowli"],
    correctAnswer: "Maszyn i urządzeń z grup 3-6 i 8 KŚT oraz środków transportu (bez osobowych)"
  },
  {
    id: 120,
    question: "Limit jednorazowej amortyzacji \"de minimis\" (dla małych podatników i rozpoczynających działalność) wynosi:",
    options: ["10 000 zł", "100 000 zł", "50 000 euro", "150 000 zł"],
    correctAnswer: "50 000 euro"
  },
  {
    id: 121,
    question: "Jednorazowa amortyzacja fabrycznie nowych środków trwałych (do 100 tys. zł):",
    options: ["Dotyczy tylko małych podatników", "Dotyczy wszystkich podatników prowadzących działalność gospodarczą", "Dotyczy tylko samochodów osobowych", "Wymaga zgody Naczelnika US"],
    correctAnswer: "Dotyczy wszystkich podatników prowadzących działalność gospodarczą"
  },
  {
    id: 122,
    question: "Podwyższony współczynnik amortyzacji dla budynków używanych w warunkach złych wynosi:",
    options: ["1,2", "1,4", "2,0", "1,5"],
    correctAnswer: "1,4"
  },
  {
    id: 123,
    question: "Minimalny okres amortyzacji dla środków transportu przy metodzie indywidualnej (używanych) wynosi:",
    options: ["12 miesięcy", "24 miesiące", "30 miesięcy", "60 miesięcy"],
    correctAnswer: "30 miesięcy"
  },
  {
    id: 124,
    question: "Środek trwały uznaje się za \"ulepszony\", jeśli wydatki na ulepszenie przekroczyły:",
    options: ["3500 zł", "10 000 zł", "20% wartości początkowej (dla środków transportu i maszyn)", "50% wartości rynkowej"],
    correctAnswer: "20% wartości początkowej (dla środków transportu i maszyn)"
  },
  {
    id: 125,
    question: "Kosztem kwalifikowanym w uldze B+R NIE są:",
    options: ["Wynagrodzenia pracowników B+R", "Koszty nabycia materiałów i surowców do B+R", "Wydatki na samochody osobowe", "Odpisy amortyzacyjne od sprzętu laboratoryjnego"],
    correctAnswer: "Wydatki na samochody osobowe"
  },
  {
    id: 126,
    question: "Wysokość odliczenia kosztów kwalifikowanych w uldze B+R dla standardowego podatnika (nie CBR) wynosi:",
    options: ["50%", "100%", "150%", "20%"],
    correctAnswer: "100%"
  },
  {
    id: 127,
    question: "Ulga IP Box pozwala opodatkować dochód stawką:",
    options: ["19%", "12%", "9%", "5%"],
    correctAnswer: "5%"
  },
  {
    id: 128,
    question: "Czy można łączyć ulgę B+R z ulgą IP Box?",
    options: ["Nie, nigdy", "Tak, zastosowanie IP Box nie wyklucza korzystania z ulgi B+R (wobec kosztów poniesionych na wytworzenie IP)", "Tak, ale tylko dla dużych firm", "Nie, trzeba wybrać jedną"],
    correctAnswer: "Tak, zastosowanie IP Box nie wyklucza korzystania z ulgi B+R (wobec kosztów poniesionych na wytworzenie IP)"
  },
  {
    id: 129,
    question: "Ulga na robotyzację pozwala odliczyć od dochodu:",
    options: ["100% kosztów robotów", "50% kosztów kwalifikowanych poniesionych na robotyzację", "Całą wartość amortyzacji", "Koszty serwisu przez 10 lat"],
    correctAnswer: "50% kosztów kwalifikowanych poniesionych na robotyzację"
  },
  {
    id: 130,
    question: "Limit odliczenia w ramach ulgi na terminal płatniczy dla podatnika zwolnionego z kas fiskalnych wynosi:",
    options: ["1000 zł", "2500 zł", "5000 zł", "Pełną kwotę wydatków"],
    correctAnswer: "2500 zł"
  },
  {
    id: 131,
    question: "Ulga na ekspansję (zwiększenie przychodów) ma limit:",
    options: ["100 000 zł", "200 000 zł", "1 000 000 zł", "Bez limitu"],
    correctAnswer: "1 000 000 zł"
  },
  {
    id: 132,
    question: "Ulga dla pracujących seniorów (PIT-0) dotyczy:",
    options: ["Kobiet 60+ i mężczyzn 65+, którzy nie pobierają emerytury mimo nabycia uprawnień", "Wszystkich emerytów, którzy dorabiają", "Osób po 70 roku życia", "Tylko osób na etacie"],
    correctAnswer: "Kobiet 60+ i mężczyzn 65+, którzy nie pobierają emerytury mimo nabycia uprawnień"
  },
  {
    id: 133,
    question: "Limit przychodów zwolnionych w ramach \"Ulgi dla młodych\" oraz \"Ulgi na powrót\" wynosi:",
    options: ["30 000 zł", "85 528 zł", "120 000 zł", "1 mln zł"],
    correctAnswer: "85 528 zł"
  },
  {
    id: 134,
    question: "Ulga dla rodzin 4+ zwalnia z podatku przychody rodziców wychowujących co najmniej:",
    options: ["3 dzieci", "4 dzieci", "5 dzieci", "Nie ma takiej ulgi"],
    correctAnswer: "4 dzieci"
  },
  {
    id: 135,
    question: "Limit wpłat na IKZE podlegających odliczeniu w 2020 r. wynosił:",
    options: ["3000 zł", "6 272,40 zł", "10 000 zł", "1,2 średniej krajowej brutto"],
    correctAnswer: "6 272,40 zł"
  },
  {
    id: 136,
    question: "Wydatki na cele rehabilitacyjne (np. leki) można odliczyć:",
    options: ["W pełnej wysokości", "W wysokości różnicy między wydatkami w danym miesiącu a kwotą 100 zł", "Do limitu 2280 zł", "Nie podlegają odliczeniu"],
    correctAnswer: "W wysokości różnicy między wydatkami w danym miesiącu a kwotą 100 zł"
  },
  {
    id: 137,
    question: "Limit odliczenia wydatków na używanie samochodu osobowego dla osoby niepełnosprawnej wynosi:",
    options: ["2280 zł", "760 zł", "5000 zł", "Pełne koszty paliwa"],
    correctAnswer: "2280 zł"
  },
  {
    id: 138,
    question: "Ulga na internet pozwala odliczyć maksymalnie:",
    options: ["500 zł", "760 zł", "1000 zł", "Koszty instalacji"],
    correctAnswer: "760 zł"
  },
  {
    id: 139,
    question: "Darowizny na cele kultu religijnego są limitowane (łącznie z innymi darowiznami) do:",
    options: ["10% dochodu", "6% dochodu", "Bez limitu", "1000 zł"],
    correctAnswer: "6% dochodu"
  },
  {
    id: 140,
    question: "Ekwiwalent za oddanie 1 litra krwi dla celów podatkowych wynosi:",
    options: ["130 zł", "100 zł", "60 zł", "200 zł"],
    correctAnswer: "130 zł"
  },
  {
    id: 141,
    question: "Kwota ulgi na trzecie dziecko wynosi miesięcznie:",
    options: ["92,67 zł", "166,67 zł", "225,00 zł", "500 zł"],
    correctAnswer: "166,67 zł"
  },
  {
    id: 142,
    question: "Aby skorzystać z ulgi prorodzinnej na jedno dziecko, łączne dochody małżonków nie mogą przekroczyć:",
    options: ["56 000 zł", "85 528 zł", "112 000 zł", "Nie ma limitu"],
    correctAnswer: "112 000 zł"
  },
  {
    id: 143,
    question: "\"Podatek negatywny\" (zwrot niewykorzystanej ulgi na dzieci) jest limitowany do wysokości:",
    options: ["Zapłaconych składek na ubezpieczenia społeczne i zdrowotne", "Podatku należnego", "5000 zł", "Kwoty wolnej od podatku"],
    correctAnswer: "Zapłaconych składek na ubezpieczenia społeczne i zdrowotne"
  },
  {
    id: 144,
    question: "Termin wpłaty zaliczki na podatek dochodowy (skala/liniowy) za miesiąc grudzień upływa:",
    options: ["20 grudnia", "20 stycznia następnego roku", "30 kwietnia następnego roku", "Nie wpłaca się zaliczki za grudzień"],
    correctAnswer: "20 stycznia następnego roku"
  },
  {
    id: 145,
    question: "\"Kredyt podatkowy\" (zwolnienie z zaliczek dla początkujących) spłaca się przez:",
    options: ["2 lata", "3 lata", "5 kolejnych lat podatkowych (po 20% dochodu)", "Nie trzeba spłacać"],
    correctAnswer: "5 kolejnych lat podatkowych (po 20% dochodu)"
  },
  {
    id: 146,
    question: "Zaliczki kwartalne mogą wpłacać:",
    options: ["Wszyscy podatnicy", "Tylko duże firmy", "Małe podmioty (przychody < 2 mln euro) oraz rozpoczynający działalność", "Tylko spółki z o.o."],
    correctAnswer: "Małe podmioty (przychody < 2 mln euro) oraz rozpoczynający działalność"
  },
  {
    id: 147,
    question: "O wyborze podatku liniowego należy zawiadomić naczelnika US:",
    options: ["Do 30 kwietnia", "Do 20. dnia miesiąca następującego po miesiącu osiągnięcia pierwszego przychodu (zazwyczaj do 20 lutego)", "Przed rozpoczęciem roku", "W zeznaniu rocznym"],
    correctAnswer: "Do 20. dnia miesiąca następującego po miesiącu osiągnięcia pierwszego przychodu (zazwyczaj do 20 lutego)"
  },
  {
    id: 148,
    question: "Stawka ryczałtu 17% dotyczy:",
    options: ["Handlu", "Usług budowlanych", "Wolnych zawodów (np. prawnik, lekarz)", "Produkcji"],
    correctAnswer: "Wolnych zawodów (np. prawnik, lekarz)"
  },
  {
    id: 149,
    question: "Stawka ryczałtu 8,5% (do 100 tys. zł) dotyczy m.in.:",
    options: ["Przychodów z najmu prywatnego", "Usług budowlanych", "Wolnych zawodów", "Sprzedaży towarów"],
    correctAnswer: "Przychodów z najmu prywatnego"
  },
  {
    id: 150,
    question: "Jeśli podatnik na ryczałcie nie prowadzi ewidencji przychodów, organ może nałożyć stawkę sankcyjną:",
    options: ["75%", "5-krotność stawki podstawowej (ale max 75%)", "50%", "32%"],
    correctAnswer: "5-krotność stawki podstawowej (ale max 75%)"
  },
  {
    id: 151,
    question: "Ryczałt płatny jest do:",
    options: ["10. dnia następnego miesiąca", "20. dnia następnego miesiąca", "25. dnia następnego miesiąca", "Końca miesiąca"],
    correctAnswer: "20. dnia następnego miesiąca"
  },
  {
    id: 152,
    question: "Podatnik na ryczałcie może odliczyć od przychodu:",
    options: ["Koszty uzyskania przychodu", "Składki społeczne i ulgę na internet", "Amortyzację", "Ulgę na dzieci"],
    correctAnswer: "Składki społeczne i ulgę na internet"
  },
  {
    id: 153,
    question: "Metoda unikania podwójnego opodatkowania \"odliczenia proporcjonalnego\" oznacza, że:",
    options: ["Dochód zagraniczny jest zwolniony w Polsce", "Podatek zapłacony za granicą odlicza się od podatku w Polsce (do limitu)", "Nie płaci się podatku nigdzie", "Płaci się podwójny podatek"],
    correctAnswer: "Podatek zapłacony za granicą odlicza się od podatku w Polsce (do limitu)"
  },
  {
    id: 154,
    question: "Konwencja MLI wprowadza zmianę metody unikania podwójnego opodatkowania w wielu umowach na:",
    options: ["Wyłączenie z progresją", "Odliczenie proporcjonalne", "Całkowite zwolnienie", "Raj podatkowy"],
    correctAnswer: "Odliczenie proporcjonalne"
  },
  {
    id: 155,
    question: "Ulga abolicyjna służy:",
    options: ["Umorzeniu zaległości", "Wyrównaniu różnic podatkowych przy metodzie odliczenia proporcjonalnego (dla pracujących za granicą)", "Zwolnieniu firm z VAT", "Likwidacji podatku Belki"],
    correctAnswer: "Wyrównaniu różnic podatkowych przy metodzie odliczenia proporcjonalnego (dla pracujących za granicą)"
  },
  {
    id: 156,
    question: "Limit ulgi abolicyjnej (od 2021 r.) wynosi:",
    options: ["1360 zł", "8000 zł", "Bez limitu", "4000 zł"],
    correctAnswer: "1360 zł"
  },
  {
    id: 157,
    question: "Dieta za każdy dzień pobytu za granicą pomniejszająca przychód (dla pracowników) wynosi:",
    options: ["100% diety", "30% diety", "50% diety", "Nie ma odliczenia"],
    correctAnswer: "30% diety"
  },
  {
    id: 158,
    question: "Bieg terminu przedawnienia ulega zawieszeniu w przypadku:",
    options: ["Wniesienia skargi do sądu administracyjnego", "Zwykłego wezwania do zapłaty", "Zmiany adresu podatnika", "Wyjazdu za granicę"],
    correctAnswer: "Wniesienia skargi do sądu administracyjnego"
  },
  {
    id: 159,
    question: "Przerwanie biegu przedawnienia (liczenie od nowa) następuje wskutek:",
    options: ["Zastosowania środka egzekucyjnego, o którym podatnik został zawiadomiony", "Wniesienia odwołania od decyzji", "Złożenia korekty deklaracji", "Choroby podatnika"],
    correctAnswer: "Zastosowania środka egzekucyjnego, o którym podatnik został zawiadomiony"
  },
  {
    id: 160,
    question: "Odsetki za zwłokę nalicza się:",
    options: ["Od dnia doręczenia decyzji", "Od dnia następującego po dniu upływu terminu płatności", "Tylko na wniosek organu", "Tylko przy kwotach powyżej 1000 zł"],
    correctAnswer: "Od dnia następującego po dniu upływu terminu płatności"
  },
  {
    id: 161,
    question: "Stawka odsetek za zwłokę (podstawowa) to:",
    options: ["200% stopy lombardowej NBP + 2%", "Stopa referencyjna", "Stałe 8%", "Inflacja + 2%"],
    correctAnswer: "200% stopy lombardowej NBP + 2%"
  },
  {
    id: 162,
    question: "Opłata prolongacyjna dotyczy:",
    options: ["Odroczenia terminu płatności lub rozłożenia na raty", "Zapłaty po terminie bez zgody organu", "Kosztów egzekucji", "Wydania zaświadczenia"],
    correctAnswer: "Odroczenia terminu płatności lub rozłożenia na raty"
  },
  {
    id: 163,
    question: "Hipoteka przymusowa na nieruchomości podatnika powoduje, że:",
    options: ["Zobowiązanie nigdy się nie przedawnia (można egzekwować z przedmiotu hipoteki)", "Zobowiązanie wygasa", "Podatnik traci własność", "Odsetki przestają biec"],
    correctAnswer: "Zobowiązanie nigdy się nie przedawnia (można egzekwować z przedmiotu hipoteki)"
  },
  {
    id: 164,
    question: "Zastaw skarbowy przysługuje na:",
    options: ["Nieruchomościach", "Ruchomościach i zbywalnych prawach majątkowych o wartości > 15 500 zł", "Wynagrodzeniu za pracę", "Rachunku bankowym"],
    correctAnswer: "Ruchomościach i zbywalnych prawach majątkowych o wartości > 15 500 zł"
  },
  {
    id: 165,
    question: "Decyzja o odpowiedzialności osoby trzeciej (np. członka zarządu) może być wydana:",
    options: ["Zawsze", "Dopiero gdy egzekucja z majątku podatnika (spółki) jest bezskuteczna", "Zamiast decyzji wobec spółki", "Tylko za zgodą sądu"],
    correctAnswer: "Dopiero gdy egzekucja z majątku podatnika (spółki) jest bezskuteczna"
  },
  {
    id: 166,
    question: "Członek zarządu spółki z o.o. może uwolnić się od odpowiedzialności, jeśli:",
    options: ["Pokaże, że nie miał pieniędzy", "Wskaże mienie spółki, z którego egzekucja jest możliwa, lub zgłosił wniosek o upadłość we właściwym czasie", "Zrezygnował z funkcji w trakcie kadencji (bez wpisu w KRS)", "Nie pobierał wynagrodzenia"],
    correctAnswer: "Wskaże mienie spółki, z którego egzekucja jest możliwa, lub zgłosił wniosek o upadłość we właściwym czasie"
  },
  {
    id: 167,
    question: "Banki mają obowiązek informować Szefa KAS o:",
    options: ["Każdym przelewie powyżej 100 zł", "Założonych i zlikwidowanych rachunkach firmowych", "Stanie konta każdego obywatela", "Wydatkach kartą kredytową"],
    correctAnswer: "Założonych i zlikwidowanych rachunkach firmowych"
  },
  {
    id: 168,
    question: "Rachunek (zamiast faktury) wystawia się:",
    options: ["Na żądanie kupującego, jeśli sprzedawca nie jest VAT-owcem", "Zawsze przy sprzedaży detalicznej", "Tylko dla firm", "Nigdy, rachunki zlikwidowano"],
    correctAnswer: "Na żądanie kupującego, jeśli sprzedawca nie jest VAT-owcem"
  },
  {
    id: 169,
    question: "Termin wystawienia rachunku na żądanie to co do zasady:",
    options: ["7 dni", "14 dni", "30 dni", "Niezwłocznie"],
    correctAnswer: "7 dni"
  },
  {
    id: 170,
    question: "Interpretacja indywidualna chroni podatnika:",
    options: ["W zakresie wszystkich podatków", "Tylko jeśli się do niej zastosował", "Nawet jeśli stan faktyczny był inny", "Tylko przed odpowiedzialnością karną"],
    correctAnswer: "Tylko jeśli się do niej zastosował"
  },
  {
    id: 171,
    question: "Danina solidarnościowa (4%) dotyczy nadwyżki dochodów ponad:",
    options: ["500 tys. zł", "1 mln zł", "2 mln zł", "85 tys. zł"],
    correctAnswer: "1 mln zł"
  },
  {
    id: 172,
    question: "Za małego podatnika (dla celów amortyzacji jednorazowej) uważa się firmę, której przychody nie przekroczyły:",
    options: ["1,2 mln euro", "2 mln euro", "5 mln zł", "10 mln zł"],
    correctAnswer: "2 mln euro"
  },
  {
    id: 173,
    question: "Strata z działalności gospodarczej nie może być rozliczona z:",
    options: ["Dochodami z tej działalności w latach następnych", "Dochodami z umowy o pracę", "Dochodami z najmu (jeśli to działalność)", "Zyskiem z tej samej firmy"],
    correctAnswer: "Dochodami z umowy o pracę"
  },
  {
    id: 174,
    question: "Aby skorzystać z 50% stawki odsetek za zwłokę, należy:",
    options: ["Złożyć korektę deklaracji i zapłacić zaległość w ciągu 7 dni", "Napisać pismo z prośbą", "Być emerytem", "Zapłacić połowę długu"],
    correctAnswer: "Złożyć korektę deklaracji i zapłacić zaległość w ciągu 7 dni"
  },
  {
    id: 175,
    question: "Limit zwolnienia z PIT dla osób do 26 r.ż. (85 528 zł) dotyczy przychodów z:",
    options: ["Umowy o pracę i zlecenia", "Działalności gospodarczej", "Dywidend", "Umowy o dzieło"],
    correctAnswer: "Umowy o pracę i zlecenia"
  },
  {
    id: 176,
    question: "Czy emerytura zagraniczna podlega uldze abolicyjnej?",
    options: ["Tak", "Nie, ulga ta nie obejmuje emerytur", "Tak, jeśli jest wysoka", "Zależy od kraju"],
    correctAnswer: "Nie, ulga ta nie obejmuje emerytur"
  },
  {
    id: 177,
    question: "Płatność ryczałtu za grudzień następuje w terminie:",
    options: ["Do 20 stycznia", "Do 31 stycznia (termin złożenia zeznania)", "Do 30 kwietnia", "Do 20 grudnia"],
    correctAnswer: "Do 31 stycznia (termin złożenia zeznania)"
  },
  {
    id: 178,
    question: "Czy przy ryczałcie ewidencjonowanym można rozliczyć się wspólnie z małżonkiem?",
    options: ["Tak, zawsze", "Nie (chyba że dotyczy tylko najmu prywatnego)", "Tak, jeśli małżonek nie pracuje", "Zależy od decyzji naczelnika US"],
    correctAnswer: "Nie (chyba że dotyczy tylko najmu prywatnego)"
  },
  {
    id: 179,
    question: "Stawka 12% w ryczałcie (nadwyżka ponad 100 tys. zł) dotyczy:",
    options: ["Najmu prywatnego", "Usług IT", "Lekarzy", "Robót budowlanych"],
    correctAnswer: "Najmu prywatnego"
  },
  {
    id: 180,
    question: "Kto NIE może wybrać ryczałtu?",
    options: ["Lekarz", "Prowadzący aptekę", "Budowlaniec", "Tłumacz"],
    correctAnswer: "Prowadzący aptekę"
  },
  {
    id: 181,
    question: "Kaucja zwrotna:",
    options: ["Jest przychodem", "Jest kosztem", "Jest neutralna podatkowo (nie jest przychodem ani kosztem, chyba że przepada)", "Jest opodatkowana VAT"],
    correctAnswer: "Jest neutralna podatkowo (nie jest przychodem ani kosztem, chyba że przepada)"
  },
  {
    id: 182,
    question: "Odsetki od lokat firmowych:",
    options: ["Są przychodem z działalności gospodarczej", "Są zwolnione", "Są opodatkowane ryczałtem 19% (Belka) poza działalnością", "Nie podlegają opodatkowaniu"],
    correctAnswer: "Są przychodem z działalności gospodarczej"
  },
  {
    id: 183,
    question: "Różnice kursowe:",
    options: ["Mogą być przychodem lub kosztem podatkowym", "Są obojętne podatkowo", "Dotyczą tylko dużych firm", "Są opodatkowane stawką 0%"],
    correctAnswer: "Mogą być przychodem lub kosztem podatkowym"
  },
  {
    id: 184,
    question: "Termin wpłaty zaliczki na podatek liniowy to:",
    options: ["10. dzień miesiąca", "20. dzień miesiąca", "Ostatni dzień miesiąca", "Raz na rok"],
    correctAnswer: "20. dzień miesiąca"
  },
  {
    id: 185,
    question: "Czy podatnik na podatku liniowym może odliczyć ulgę na dziecko?",
    options: ["Tak", "Nie", "Tak, jeśli dziecko jest niepełnosprawne", "Tak, ale tylko połowę"],
    correctAnswer: "Nie"
  },
  {
    id: 186,
    question: "Składka zdrowotna przy podatku liniowym (od 2022 r.):",
    options: ["Jest nieodliczalna", "Może być odliczona od dochodu do limitu (11 600 zł)", "Jest odliczana od podatku w całości", "Jest kosztem bez limitu"],
    correctAnswer: "Może być odliczona od dochodu do limitu (11 600 zł)"
  },
  {
    id: 187,
    question: "\"Ulga na start\" (kredyt podatkowy - zwolnienie z zaliczek) jest dostępna dla:",
    options: ["Każdego", "Firm działających min. 2 lata", "Podatników rozpoczynających działalność po raz pierwszy (po spełnieniu warunków)", "Spółek akcyjnych"],
    correctAnswer: "Podatników rozpoczynających działalność po raz pierwszy (po spełnieniu warunków)"
  },
  {
    id: 188,
    question: "Warunkiem skorzystania z kredytu podatkowego jest m.in.:",
    options: ["Osiąganie przychodów min. 1000 euro miesięcznie przed rokiem zwolnienia", "Zatrudnianie 50 osób", "Prowadzenie pełnej księgowości", "Brak dochodów"],
    correctAnswer: "Osiąganie przychodów min. 1000 euro miesięcznie przed rokiem zwolnienia"
  },
  {
    id: 189,
    question: "Spłata kredytu podatkowego następuje:",
    options: ["Jednorazowo po roku", "Przez 5 lat (doliczanie 20% dochodu z roku zwolnienia)", "Jest umarzana", "Przez 10 lat"],
    correctAnswer: "Przez 5 lat (doliczanie 20% dochodu z roku zwolnienia)"
  },
  {
    id: 190,
    question: "Zaliczkę uproszczoną (1/12) ustala się na podstawie:",
    options: ["Dochodów z bieżącego roku", "Dochodu z zeznania za rok poprzedni", "Prognozy podatnika", "Średniej krajowej"],
    correctAnswer: "Dochodu z zeznania za rok poprzedni"
  },
  {
    id: 191,
    question: "O wyborze zaliczek uproszczonych informuje się urząd:",
    options: ["Do 20 lutego", "W zeznaniu rocznym", "Nie trzeba informować", "Do 30 kwietnia"],
    correctAnswer: "Do 20 lutego"
  },
  {
    id: 192,
    question: "Przychód z działalności przy metodzie kasowej (KPiR) powstaje w dniu:",
    options: ["Wpływu środków na konto", "Wydania rzeczy/wykonania usługi, nie później niż wystawienia faktury", "Zaksięgowania faktury", "Podpisania umowy"],
    correctAnswer: "Wydania rzeczy/wykonania usługi, nie później niż wystawienia faktury"
  },
  {
    id: 193,
    question: "Wpłaty na PFRON (Państwowy Fundusz Rehabilitacji Osób Niepełnosprawnych):",
    options: ["Są kosztem podatkowym", "Nie są kosztem podatkowym (NKUP)", "Są odliczane od podatku", "Są przychodem"],
    correctAnswer: "Nie są kosztem podatkowym (NKUP)"
  },
  {
    id: 194,
    question: "Podatnik rozliczający się ryczałtem ewidencjonuje:",
    options: ["Przychody i koszty", "Tylko przychody", "Tylko koszty", "Tylko dochód"],
    correctAnswer: "Tylko przychody"
  },
  {
    id: 195,
    question: "Stawka ryczałtu dla usług budowlanych to:",
    options: ["8,5%", "5,5%", "3,0%", "15%"],
    correctAnswer: "5,5%"
  },
  {
    id: 196,
    question: "Stawka ryczałtu dla handlu to:",
    options: ["3,0%", "5,5%", "10%", "17%"],
    correctAnswer: "3,0%"
  },
  {
    id: 197,
    question: "Czy rolnik sprzedający przetworzone produkty (dżemy) może płacić ryczałt?",
    options: ["Tak, stawkę 2%", "Nie, musi być na zasadach ogólnych", "Tak, stawkę 10%", "Nie, to działalność rolnicza zwolniona"],
    correctAnswer: "Tak, stawkę 2%"
  },
  {
    id: 198,
    question: "Jeśli podatnik nie zgłosi wyboru formy opodatkowania, to z mocy prawa jest opodatkowany:",
    options: ["Ryczałtem", "Podatkiem liniowym", "Skalą podatkową (zasady ogólne)", "Kartą podatkową"],
    correctAnswer: "Skalą podatkową (zasady ogólne)"
  },
  {
    id: 199,
    question: "Limit przychodów uprawniający do statusu małego podatnika (wg prezentacji w kontekście zaliczek kwartalnych) to:",
    options: ["1,2 mln euro", "2 mln euro", "5 mln zł", "200 tys. euro"],
    correctAnswer: "2 mln euro"
  },
  {
    id: 200,
    question: "Ulga na nabycie terminala płatniczego przysługuje:",
    options: ["W roku nabycia i roku następnym", "Tylko w roku nabycia", "Przez 5 lat", "Bezterminowo"],
    correctAnswer: "W roku nabycia i roku następnym"
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
  { id: 7, label: "Pytania 61 - 70", startId: 61, endId: 70 },
  { id: 8, label: "Pytania 71 - 80", startId: 71, endId: 80 },
  { id: 9, label: "Pytania 81 - 90", startId: 81, endId: 90 },
  { id: 10, label: "Pytania 91 - 100", startId: 91, endId: 100 },
  { id: 11, label: "Pytania 101 - 110", startId: 101, endId: 110 },
  { id: 12, label: "Pytania 111 - 120", startId: 111, endId: 120 },
  { id: 13, label: "Pytania 121 - 130", startId: 121, endId: 130 },
  { id: 14, label: "Pytania 131 - 140", startId: 131, endId: 140 },
  { id: 15, label: "Pytania 141 - 150", startId: 141, endId: 150 },
  { id: 16, label: "Pytania 151 - 160", startId: 151, endId: 160 },
  { id: 17, label: "Pytania 161 - 170", startId: 161, endId: 170 },
  { id: 18, label: "Pytania 171 - 180", startId: 171, endId: 180 },
  { id: 19, label: "Pytania 181 - 190", startId: 181, endId: 190 },
  { id: 20, label: "Pytania 191 - 200", startId: 191, endId: 200 }
];

export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  // Jeśli nie ma wybranych zakresów, zwróć wszystkie pytania
  if (selectedRangeIds.length === 0) return questions;

  const selectedRanges = questionRanges.filter(range => selectedRangeIds.includes(range.id));

  return questions.filter(q =>
    selectedRanges.some(range => q.id >= range.startId && q.id <= range.endId)
  );
};
