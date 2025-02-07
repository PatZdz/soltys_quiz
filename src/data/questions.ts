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
      question: "Suma dochodów uzyskiwanych przez czynniki produkcji to:",
      options: [
        "Produkt narodowy netto",
        "Produkt krajowy brutto",
        "Dochód narodowy",
        "Dochód do dyspozycji",
        "Żadne"
      ],
      correctAnswer: "Dochód narodowy"
    },
    {
      id: 2,
      question: "Wielkość popytu na dobro normalne spada, gdy:",
      options: [
        "Spada dochód",
        "Cena dobra rośnie",
        "Cena dobra spada",
        "Rośnie cena surowca potrzebnego do produkcji",
        "Żadne"
      ],
      correctAnswer: "Spada dochód"
    },
    {
      id: 3,
      question: "Produkt homogeniczny to cecha:",
      options: [
        "Konkurencji monopolistycznej",
        "Konkurencji doskonałej",
        "Monopolu",
        "Oligopolu",
        "Żadne"
      ],
      correctAnswer: "Konkurencji doskonałej"
    },
    {
      id: 4,
      question: "Deprecjacja to:",
      options: [
        "Obniżanie wartości dowolnej wielkości nominalnej",
        "Rynkowy spadek wartości waluty",
        "Okres trwałego spadku poziomu cen",
        "Decyzja władz monetarnych o obniżeniu wartości waluty",
        "Żadne"
      ],
      correctAnswer: "Rynkowy spadek wartości waluty"
    },
    {
      id: 5,
      question: "Jeżeli PNB w cenach bieżących spada o około 1% rocznie, a indeks cen dóbr finalnych i usług rośnie o 2% rocznie, to realny PNB spada rocznie o:",
      options: [
        "5 %",
        "2 %",
        "3 %",
        "1 %",
        "Żadne z powyższych"
      ],
      correctAnswer: "3 %"
    },
    {
      id: 6,
      question: "Wysokie zbiory rzepaku w Polsce spowodują:",
      options: [
        "Spadek popytu na olej rzepakowy",
        "Spadek ceny oleju rzepakowego",
        "Obniżenie ceny oliwy z oliwek",
        "Spadek podaży oleju rzepakowego",
        "Żadne"
      ],
      correctAnswer: "Spadek ceny oleju rzepakowego"
    },
    {
      id: 7,
      question: "Które z poniższych dóbr zaliczysz do komplementarnych:",
      options: [
        "Masło i margaryna",
        "Buty i sznurówki",
        "Pióro i długopis",
        "Śliwki i wiertarka",
        "Żadne"
      ],
      correctAnswer: "Buty i sznurówki"
    },
    {
      id: 8,
      question: "Użyteczność krańcowa:",
      options: [
        "Rośnie ze wzrostem konsumowanego dobra",
        "Zmniejsza się ze wzrostem ilości konsumowanego dobra",
        "Rośnie razem ze wzrostem użyteczności całkowitej",
        "Nie zależy od ilości konsumowanego dobra",
        "Żadne"
      ],
      correctAnswer: "Zmniejsza się ze wzrostem ilości konsumowanego dobra"
    },
    {
      id: 9,
      question: "W rachunku wyników wpiszemy:",
      options: [
        "Koszt materiałów",
        "Amortyzację",
        "Zakup nieruchomości",
        "Gotówkę w banku",
        "Wszystkie",
        "Żadne"
      ],
      // Dwie poprawne odpowiedzi:
      correctAnswer: ["Amortyzację"]
    },
    {
      id: 10,
      question: "Konkurencja doskonała charakteryzuje się:",
      options: [
        "Rozproszeniem popytu i podaży",
        "Jednorodnością produktu",
        "Brakiem kontroli cen przez producentów",
        "Wszystkie powyższe",
        "Żadne"
      ],
      correctAnswer: "Wszystkie powyższe"
    },
    {
      id: 11,
      question: "Zasoby siły roboczej to:",
      options: [
        "Ludność w wieku produkcyjnym",
        "Liczba zatrudnionych",
        "Liczba niezatrudnionych",
        "Liczba zatrudnionych i niezatrudnionych"
      ],
      correctAnswer: "Liczba zatrudnionych i niezatrudnionych"
    },
    {
      id: 12,
      question: "Jeśli w danej gospodarce mierzymy wartość rynkową produkcji w cenach bieżących, to otrzymamy:",
      options: [
        "PKB nominalne",
        "PKB per capita",
        "PKB realne",
        "Żadne"
      ],
      correctAnswer: "PKB nominalne"
    },
    {
      id: 13,
      question: "Jeśli nominalne PKB wzrosło z 2000 bln do 2100 bln w roku następnym, podczas gdy realne PKB nie zmieniło się, to oznacza to, że:",
      options: [
        "Ceny nie zmieniły się",
        "Ceny wzrosły o 5%",
        "Ceny wzrosły o 10%",
        "Ceny wzrosły o 25%",
        "Żadne"
      ],
      correctAnswer: "Ceny wzrosły o 5%"
    },
    {
      id: 14,
      question: "Za pomocą krzywej możliwości produkcyjnych pokazujemy:",
      options: [
        "Zasadę maksymalizacji zysków",
        "Minimalną możliwą do wytworzenia ilość jednego dobra przy danej wielkości produkcji drugiego dobra",
        "Działanie prawa popytu",
        "Najlepsze kombinacje dóbr możliwe do wytworzenia przy danych zasobach i technologii",
        "Żadne"
      ],
      correctAnswer: "Najlepsze kombinacje dóbr możliwe do wytworzenia przy danych zasobach i technologii"
    },
    {
      id: 15,
      question: "Rzadkość dóbr oznacza, że:",
      options: [
        "Dostępna ilość wielu dóbr jest niewielka i ciągle malejąca",
        "Większość ludzi jest zbyt uboga, by móc sobie na wszystko pozwolić",
        "Ludzie powinni ograniczać swoje potrzeby",
        "Ilość dóbr w gospodarce nie pozwala na zaspokojenie wszystkich potrzeb",
        "Żadne"
      ],
      correctAnswer: "Ilość dóbr w gospodarce nie pozwala na zaspokojenie wszystkich potrzeb"
    },
    {
      id: 16,
      question: "Podstawą funkcjonowania mechanizmu rynkowego w gospodarce jest:",
      options: [
        "Dominacja wielkich przedsiębiorstw",
        "Funkcjonowanie tzw. szarej strefy",
        "Dominacja własności prywatnej",
        "Żadne"
      ],
      correctAnswer: "Dominacja własności prywatnej"
    },
    {
      id: 17,
      question: "Bezrobocie strukturalne występuje, gdy:",
      options: [
        "Jest duży odsetek bezrobotnych",
        "Popyt na pracowników o określonych kwalifikacjach nie odpowiada podaży",
        "Wzrasta liczba bezrobotnych na skutek podwyższania zasiłków",
        "Występuje nadwyżka popytu nad podażą siły roboczej",
        "Pracownicy rezygnują z dotychczasowej pracy, a nie znaleźli jeszcze nowej"
      ],
      correctAnswer: "Popyt na pracowników o określonych kwalifikacjach nie odpowiada podaży"
    },
    {
      id: 18,
      question: "Napływ kapitału (system kursów płynnych i doskonale mobilny kapitał) w odniesieniu do waluty krajowej będzie powodował:",
      options: [
        "Aprecjację",
        "Deprecjację",
        "Dewaluację",
        "Rewaluację",
        "Żadne z powyższych"
      ],
      correctAnswer: "Aprecjację"
    },
    {
      id: 19,
      question: "Najwyższy stopień kontroli nad ceną występuje w:",
      options: [
        "Konkurencji monopolistycznej",
        "Monopolu",
        "Oligopolu",
        "Konkurencji doskonałej",
        "Żadne"
      ],
      correctAnswer: "Monopolu"
    },
    {
      id: 20,
      question: "Przedsiębiorstwo wychodzi z branży, jeśli cena nie pokrywa:",
      options: [
        "Kosztu jednostkowego",
        "Kosztu zmiennego",
        "Kosztu całkowitego",
        "Kosztów krańcowych",
        "Żadne"
      ],
      correctAnswer: "Kosztu zmiennego"
    },
    {
      id: 21,
      question: "Zakup biletu na koncert to przykład użycia pieniądza jako:",
      options: [
        "Jednostki rozrachunkowej",
        "Środka tezauryzacji",
        "Miernika odroczonych płatności",
        "Środka wymiany",
        "Żadne"
      ],
      correctAnswer: "Środka wymiany"
    },
    {
      id: 22,
      question: "Bank Centralny może zmniejszyć podaż pieniądza bankowego za pomocą:",
      options: [
        "Zwiększenia podatków",
        "Zwiększenia stopy rezerw obowiązkowych",
        "Zmniejszenia stopy dyskontowej",
        "Podwyżki cen",
        "Żadne"
      ],
      correctAnswer: "Zwiększenia stopy rezerw obowiązkowych"
    },
    {
      id: 23,
      question: "Spadek ceny o 5% powoduje wzrost popytu o 1% – to popyt jest:",
      options: [
        "Doskonale elastyczny",
        "Elastyczny o elastyczności jednostkowej",
        "Nieelastyczny",
        "Żadne z powyższych"
      ],
      correctAnswer: "Nieelastyczny"
    },
    {
      id: 24,
      question: "Banki starają się trzymać jak najniższe rezerwy nadobowiązkowe, gdyż:",
      options: [
        "Jest to prawnie zabronione",
        "To się im nie opłaca",
        "Może to spowodować krytyczną reakcję Banku Centralnego",
        "Muszą od nich płacić podatek",
        "Boją się kradzieży przez zrewoltowane społeczeństwo (tzw. run na banki)",
        "Żadne z powyższych"
      ],
      correctAnswer: "To się im nie opłaca"
    },
    {
      id: 25,
      question: "Wprowadzenie unii celnej w sytuacji braku wolnego handlu prowadzi do:",
      options: [
        "Wzrostu wymiany handlowej",
        "Spadku wymiany handlowej",
        "Braku wpływu na wymianę handlową",
        "Żadne z powyższych"
      ],
      correctAnswer: "Wzrostu wymiany handlowej"
    },
    {
      id: 26,
      question: "Załamana krzywa popytu (oligopol) jest:",
      options: [
        "Elastyczna, jeśli cena wzrasta i nieelastyczna, jeśli cena spada",
        "Nieelastyczna, jeśli cena wzrasta i elastyczna, jeśli cena spada",
        "Elastyczna przy wzroście jak i spadku ceny",
        "Nieskończenie elastyczna przy wzroście cen"
      ],
      correctAnswer: "Elastyczna, jeśli cena wzrasta i nieelastyczna, jeśli cena spada"
    },
    {
      id: 27,
      question: "Popyt niefunkcjonalny to:",
      options: [
        "Popyt wynikający z cech jakościowych wybranego dobra",
        "Popyt wynikający z oddziaływania efektów zewnętrznych na użyteczność",
        "Możliwość nabycia dobra po danej cenie",
        "Pragnienie nabycia dobra nie poparte możliwościami dochodowymi",
        "Żadne"
      ],
      correctAnswer: "Pragnienie nabycia dobra nie poparte możliwościami dochodowymi"
    },
    {
      id: 28,
      question: "Jeśli w danej gospodarce mierzymy wartość produkcji w cenach z roku bazowego, to otrzymamy:",
      options: [
        "PKB nominalne",
        "PKB per capita",
        "PKB realne",
        "Żadne"
      ],
      correctAnswer: "PKB realne"
    },
    {
      id: 29,
      question: "Jeśli nominalne PKB spadło z 2000 bln do 1500 bln w roku następnym, podczas gdy realne PKB nie zmieniło się, to oznacza to, że:",
      options: [
        "Ceny nie zmieniły się",
        "Ceny spadły o 5%",
        "Ceny spadły o 10%",
        "Ceny spadły o 25%",
        "Żadne"
      ],
      correctAnswer: "Ceny spadły o 25%"
    },
    {
      id: 30,
      question: "Do czynników produkcji zaliczamy:",
      options: [
        "Gospodarkę rynkową i centralnie planowaną",
        "Tylko kapitał i ziemię",
        "Pracę, ziemię i kapitał",
        "Dobra wolne i dobra rzadkie",
        "Żadne"
      ],
      correctAnswer: "Pracę, ziemię i kapitał"
    },
    {
      id: 31,
      question: "Sądy pozytywne to:",
      options: [
        "Wszelkie sądy na temat gospodarki",
        "Stwierdzenia charakteryzujące rzeczywistość gospodarczą",
        "Zalecenia, co robić, żeby było lepiej",
        "Stwierdzenia wartościujące",
        "Żadne"
      ],
      correctAnswer: "Stwierdzenia charakteryzujące rzeczywistość gospodarczą"
    },
    {
      id: 32,
      question: "Krzywa transformacji:",
      options: [
        "Pokazuje główne problemy okresu transformacji",
        "Zawiera tylko ekonomicznie nieefektywne warianty wykorzystania zasobów",
        "Odnosi się do różnych gospodarek, ale jest zawsze położona tak samo",
        "Nazywana jest granicą możliwości produkcyjnych",
        "Żadne"
      ],
      correctAnswer: "Nazywana jest granicą możliwości produkcyjnych"
    },
    {
      id: 33,
      question: "Bezrobocie frykcyjne występuje, gdy:",
      options: [
        "Jest duży odsetek bezrobotnych",
        "Popyt na pracowników o określonych kwalifikacjach nie odpowiada podaży",
        "Wzrasta liczba bezrobotnych na skutek podwyższania zasiłków",
        "Występuje nadwyżka popytu nad podażą siły roboczej",
        "Pracownicy rezygnują z dotychczasowej pracy, a nie znaleźli jeszcze nowej"
      ],
      correctAnswer: "Pracownicy rezygnują z dotychczasowej pracy, a nie znaleźli jeszcze nowej"
    },
    {
      id: 34,
      question: "Odpływ kapitału (system kursów płynnych i doskonale mobilny kapitał) w odniesieniu do waluty krajowej będzie powodował:",
      options: [
        "Aprecjację",
        "Deprecjację",
        "Dewaluację",
        "Rewaluację",
        "Żadne z powyższych"
      ],
      correctAnswer: "Deprecjację"
    },
    {
      id: 35,
      question: "Najniższy stopień kontroli nad ceną występuje w:",
      options: [
        "Konkurencji monopolistycznej",
        "Monopolu",
        "Oligopolu",
        "Konkurencji doskonałej",
        "Żadne"
      ],
      correctAnswer: "Konkurencji doskonałej"
    },
    {
      id: 36,
      question: "W warunkach konkurencji doskonałej koszt krańcowy jest równy:",
      options: [
        "Kosztom jednostkowym",
        "Pokrywa koszty zmienne",
        "Cenie",
        "Zyskowi netto",
        "Żadne"
      ],
      correctAnswer: "Cenie"
    },
    {
      id: 37,
      question: "Trzymanie oszczędności to przykład użycia pieniądza jako:",
      options: [
        "Jednostki rozrachunkowej",
        "Środka tezauryzacji",
        "Miernika odroczonych płatności",
        "Środka wymiany",
        "Żadne"
      ],
      correctAnswer: "Środka tezauryzacji"
    },
    {
      id: 38,
      question: "Jeśli cena wzrasta z 25 do 50, zaś popyt spada z 500 do 400, to cenowa elastyczność popytu wynosi:",
      options: [
        "–0,07",
        "–0,20",
        "–0,27",
        "–0,50",
        "Żadne z powyższych"
      ],
      correctAnswer: "–0,20"
    },
    {
      id: 39,
      question: "W długim okresie czasu firma działająca na rynku doskonale konkurencyjnym będzie zawsze miała:",
      options: [
        "Zyski zerowe",
        "Dodatnie zyski ekonomiczne",
        "Zyski bądź straty",
        "Zyski zerowe bądź straty"
      ],
      correctAnswer: "Zyski zerowe"
    },
    {
      id: 40,
      question: "Jeśli w danej gospodarce mierzymy wartość produkcji na jednego mieszkańca, to otrzymamy:",
      options: [
        "PKB nominalne",
        "PKB per capita",
        "PKB realne",
        "Żadne"
      ],
      correctAnswer: "PKB per capita"
    },
    {
      id: 41,
      question: "Jeśli nominalne PKB wzrosło z 2000 bln do 2100 bln w roku następnym, podczas gdy realne PKB nie zmieniło się, to oznacza to, że:",
      options: [
        "Ceny nie zmieniły się",
        "Ceny wzrosły o 5%",
        "Produkcja wzrosła o 10%",
        "Ceny wzrosły o 25%",
        "Żadne"
      ],
      correctAnswer: "Ceny wzrosły o 5%"
    },
    {
      id: 42,
      question: "Dobra publiczne to:",
      options: [
        "Dobra produkowane przez firmy państwowe",
        "Dobra wolne",
        "Dobra społecznie pożądane, a prywatnie mało opłacalne",
        "Żadne"
      ],
      correctAnswer: "Dobra społecznie pożądane, a prywatnie mało opłacalne"
    },
    {
      id: 43,
      question: "W gospodarce centralnie planowanej dominującym podmiotem jest:",
      options: [
        "Społeczeństwo",
        "Państwo",
        "Przedsiębiorstwo prywatne",
        "Gospodarstwo domowe",
        "Żadne"
      ],
      correctAnswer: "Państwo"
    },
    {
      id: 44,
      question: "Bezrobocie klasyczne występuje, gdy:",
      options: [
        "Jest duży odsetek bezrobotnych",
        "Popyt na pracowników o określonych kwalifikacjach nie odpowiada podaży",
        "Wzrasta liczba bezrobotnych na skutek podwyższania zasiłków",
        "Występuje nadwyżka podaży nad popytem na siłę roboczą przy zbyt wysokiej płacy",
        "Popyt rynkowy jest zbyt mały"
      ],
      correctAnswer: "Występuje nadwyżka podaży nad popytem na siłę roboczą przy zbyt wysokiej płacy"
    },
    {
      id: 45,
      question: "Napływ kapitału (system kursów stałych i doskonale mobilny kapitał) w odniesieniu do waluty krajowej będzie zmuszał do:",
      options: [
        "Aprecjację",
        "Deprecjację",
        "Dewaluację",
        "Rewaluację",
        "Żadne z powyższych"
      ],
      correctAnswer: "Aprecjację"
    },
    {
      id: 46,
      question: "Pewien stopień kontroli nad ceną występuje w:",
      options: [
        "Konkurencji monopolistycznej",
        "Monopolu",
        "Oligopolu",
        "Konkurencji doskonałej",
        "Żadne"
      ],
      correctAnswer: [
        "Konkurencji monopolistycznej",
      ]
    },
    {
      id: 47,
      question: "Jeśli dochód wzrasta się z 1000 do 4000, a elastyczność dochodowa popytu wynosi 0,08, przy początkowym popycie równym 400, to popyt zmieni się do:",
      options: [
        "500",
        "350",
        "180",
        "Żadne z powyższych"
      ],
      correctAnswer: "500"
    },
    {
      id: 48,
      question: "Która z poniższych pozycji jest zapisana po stronie aktywów bilansu banku komercyjnego:",
      options: [
        "Wartość depozytów",
        "Przyjęte wkłady terminowe",
        "Pożyczki udzielone",
        "Przyjęte wkłady na żądanie",
        "b i d",
        "Żadne z powyższych"
      ],
      correctAnswer: "Pożyczki udzielone"
    },
    {
      id: 49,
      question: "Efektem liberalizacji rynku dóbr i usług nie jest:",
      options: [
        "Wzrost konkurencyjności",
        "Lepsza jakość",
        "Nieefektywna alokacja zasobów",
        "Spadek cen krajowych",
        "Żadne"
      ],
      correctAnswer: "Nieefektywna alokacja zasobów"
    },
    {
      id: 50,
      question: "Zmiana poziomu wydatków konsumpcyjnych podzielona przez zmianę poziomu dochodu do dyspozycji to:",
      options: [
        "Krańcowa skłonność do oszczędzania",
        "Krańcowa skłonność do konsumpcji",
        "Przeciętna skłonność do oszczędzania",
        "Przeciętna skłonność do konsumpcji",
        "Żadne"
      ],
      correctAnswer: "Krańcowa skłonność do konsumpcji"
    },
    {
      id: 51,
      question: "Gdy współczynnik elastyczności dochodowej wynosi 1,75, to:",
      options: [
        "Popyt jest mało elastyczny względem dochodu",
        "Popyt jest sztywny względem dochodu",
        "Mamy do czynienia z dobrami wyższego rzędu",
        "Mamy do czynienia z dobrami podrzędnymi",
        "Żadne"
      ],
      correctAnswer: "Mamy do czynienia z dobrami wyższego rzędu"
    },
    {
      id: 52,
      question: "Które z problemów dotyczą mikroekonomii?",
      options: [
        "Zasób pieniądza w gospodarce",
        "Sposoby minimalizowania kosztów przez firmę",
        "Polityka podatkowa rządu",
        "Związek między inflacją a bezrobociem",
        "Żadne"
      ],
      correctAnswer: "Sposoby minimalizowania kosztów przez firmę"
    },
    {
      id: 53,
      question: "PKB w stałych cenach oznacza:",
      options: [
        "Poziom PKB po korekcie uwzględniającej zmiany w gustach konsumentów, dostępność towarów oraz siłę nabywczą ludności",
        "Całkowity produkt wyrażony w cenach, po których dobra i usługi zostały faktycznie sprzedane",
        "Poziom PKB, który nie uległ zmianie z roku na rok",
        "PKB w cenach z roku bazowego",
        "Żadne z powyższych"
      ],
      correctAnswer: "PKB w cenach z roku bazowego"
    },
    {
      id: 54,
      question: "Jeśli realne PKB wzrosło z 2000 bln do 2100 bln w roku następnym, podczas gdy nominalne PKB wzrosło o 5%, to oznacza to, że:",
      options: [
        "Produkcja nie zmieniła się",
        "Ceny spadły",
        "Produkcja wzrosła o 5%",
        "Ceny wzrosły o 5%",
        "Żadne"
      ],
      correctAnswer: "Produkcja wzrosła o 5%"
    },
    {
      id: 55,
      question: "Jeśli zakład produkcyjny sprzedaje meble o wartości 50 000 zł, zaś wartość dóbr pośrednich wykorzystanych w produkcji wynosi 30 000 zł, to wartość dodana, która zwiększy PKB, wyniesie:",
      options: [
        "20 000 zł",
        "30 000 zł",
        "40 000 zł",
        "50 000 zł",
        "80 000 zł"
      ],
      correctAnswer: "20 000 zł"
    },
    {
      id: 56,
      question: "Ekonomia zajmuje się:",
      options: [
        "Związkami między gospodarką i polityką",
        "Wszelkimi działaniami ludzi",
        "Przede wszystkim gospodarczą działalnością ludzi",
        "Wszystkie powyższe",
        "Żadne"
      ],
      correctAnswer: "Przede wszystkim gospodarczą działalnością ludzi"
    },
    {
      id: 57,
      question: "Zasoby gospodarcze to:",
      options: [
        "Tylko zasoby naturalne",
        "Tylko zasoby będące wynikiem produkcji",
        "Tylko zasoby ludzkie",
        "Wszystkie powyższe",
        "Żadne"
      ],
      correctAnswer: "Wszystkie powyższe"
    },
    {
      id: 58,
      question: "Bezrobocie keynesowskie to bezrobocie:",
      options: [
        "Frykcyjne",
        "Strukturalne",
        "Klasyczne",
        "Wynikające z niedostatku popytu",
        "Żadne"
      ],
      correctAnswer: "Wynikające z niedostatku popytu"
    },
    {
      id: 59,
      question: "Odpływ kapitału (system kursów stałych i doskonale mobilny kapitał) w odniesieniu do waluty krajowej będzie zmuszał do:",
      options: [
        "Aprecjację",
        "Deprecjację",
        "Dewaluację",
        "Rewaluację",
        "Żadne"
      ],
      correctAnswer: "Deprecjację"
    },
    {
      id: 60,
      question: "Przedsiębiorstwo osiąga maksymalną wielkość zysku, jeśli koszt krańcowy jest równy:",
      options: [
        "Kosztom jednostkowym",
        "Pokrywa koszty zmienne",
        "Cenie",
        "Zyskowi netto",
        "Utargowi krańcowemu",
        "Żadne"
      ],
      correctAnswer: "Utargowi krańcowemu"
    },
    {
      id: 61,
      question: "Dobro normalne to takie, dla którego:",
      options: [
        "Elastyczność cenowa popytu jest większa od zera",
        "Elastyczność cenowa popytu jest większa od –1",
        "Elastyczność dochodowa jest większa od 1",
        "Elastyczność dochodowa jest większa od zera"
      ],
      correctAnswer: "Elastyczność dochodowa jest większa od zera"
    },
    {
      id: 62,
      question: "Operacje otwartego rynku można określić jako sprzedaż (kupno):",
      options: [
        "Obligacji banku centralnego przez ministerstwo skarbu publicznego",
        "Obligacji banku centralnego przez bank centralny rządowi",
        "Rządowych papierów wartościowych przez bank centralny publiczności niebankowej",
        "Rządowych papierów wartościowych przez rząd publiczności niebankowej",
        "Żadne z powyższych"
      ],
      correctAnswer: "Rządowych papierów wartościowych przez bank centralny publiczności niebankowej"
    },
    {
      id: 63,
      question: "Efekt substytucyjny to:",
      options: [
        "Zastąpienie dóbr gorszych lepszymi jakościowo wraz ze wzrostem dochodu",
        "Reakcja na spadek realnego dochodu przy niezmienionej relacji cen",
        "Równoległe przesunięcie linii ograniczenia budżetowego",
        "Reakcja na zmianę relacji cen przy zachowaniu poprzedniej stopy życiowej",
        "Żadne"
      ],
      correctAnswer: "Reakcja na zmianę relacji cen przy zachowaniu poprzedniej stopy życiowej"
    },
    {
      id: 64,
      question: "W skali kraju inwestycje brutto różnią się od inwestycji netto o:",
      options: [
        "Wartość podatków pośrednich",
        "Deficyt bilansu płatniczego",
        "Inflację",
        "Amortyzację",
        "Żadne"
      ],
      correctAnswer: "Amortyzację"
    },
    {
      id: 65,
      question: "Spadek dochodu konsumenta powoduje, że:",
      options: [
        "Krzywa obojętności przesuwa się równolegle w lewo",
        "Krzywa obojętności przesuwa się równolegle w prawo",
        "Linia ograniczenia budżetowego przesuwa się równolegle w lewo",
        "Linia ograniczenia budżetowego przesuwa się równolegle w prawo",
        "Żadne"
      ],
      correctAnswer: "Linia ograniczenia budżetowego przesuwa się równolegle w lewo"
    },
    {
      id: 66,
      question: "Stopa bezrobocia jest definiowana jako stosunek liczby zatrudnionych do:",
      options: [
        "Ludności ogółem",
        "Zatrudnionych, aktualnie pracujących",
        "Zatrudnionych",
        "Aktywnych zawodowo",
        "Dorosłej ludności poza zakładami zamkniętymi",
        "Żadne z powyższych"
      ],
      correctAnswer: "Aktywnych zawodowo"
    },
    {
      id: 67,
      question: "Paradoks Veblena to sytuacja, w której:",
      options: [
        "Rośnie popyt na dobra normalne, a maleje na podrzędne",
        "Wzrost cen podstawowych dóbr konsumpcyjnych powoduje wzrost popytu na nie",
        "Wzrost cen dóbr wyższego rzędu powoduje wzrost popytu na nie",
        "W miarę wzrostu dochodów popyt na dobra niższego rzędu spada",
        "Żadne"
      ],
      correctAnswer: "Wzrost cen dóbr wyższego rzędu powoduje wzrost popytu na nie"
    },
    {
      id: 68,
      question: "Jeśli inne czynniki pozostają niezmienione, popyt spada, kiedy:",
      options: [
        "Ceny substytutów wzrastają",
        "Ceny dóbr komplementarnych wzrastają",
        "Ceny czynników produkcji wzrastają",
        "Ceny czynników produkcji spadają"
      ],
      correctAnswer: "Ceny dóbr komplementarnych wzrastają"
    },
    {
      id: 69,
      question: "Jeśli cena wzrasta z 20 do 30, a popyt spada z 500 do 400, to cenowa elastyczność popytu wynosi:",
      options: [
        "–0,20",
        "–0,05",
        "–0,40",
        "–0,75",
        "Żadne z powyższych"
      ],
      correctAnswer: "–0,40"
    },
    {
      id: 70,
      question: "Jeśli dochód wzrasta się z 3000 do 4000, a elastyczność dochodowa popytu wynosi 0,75 przy początkowym popycie równym 400, to popyt zmieni się do:",
      options: [
        "500",
        "350",
        "180",
        "75",
        "Żadne z powyższych"
      ],
      correctAnswer: "500"
    },
    {
      id: 71,
      question: "Jeśli cena dobra X wzrasta z 20 do 30, a popyt na dobro Y wzrasta z 500 do 600, to elastyczność mieszana wynosi:",
      options: [
        "–0,80",
        "–0,13",
        "0,13",
        "0,40",
        "Żadne z powyższych"
      ],
      correctAnswer: "–0,80"
    },
    {
      id: 72,
      question: "Które z poniższych działań prowadzi do wzrostu utargu całkowitego?",
      options: [
        "Spadek ceny, jeśli ePD > –1",
        "Wzrost ceny, jeśli ePD < –1",
        "Wzrost lub spadek ceny, jeśli ePD = –1",
        "Żadne z powyższych"
      ],
      correctAnswer: "Żadne z powyższych"
    },
    {
      id: 73,
      question: "Dobro normalne to takie, dla którego:",
      options: [
        "Elastyczność cenowa popytu większa od zera",
        "Elastyczność cenowa popytu większa od –1",
        "Elastyczność dochodowa jest większa od 1",
        "Elastyczność dochodowa jest większa od zera"
      ],
      correctAnswer: "Elastyczność dochodowa jest większa od zera"
    },
    {
      id: 74,
      question: "W ostatnich latach dochody ludności spadły o 2%, podczas gdy sprzedaż produktów firmy Niewiemjakiej wzrosła o 6%. Ceny produktów w tym okresie się nie zmieniały. Można stąd wnioskować, że:",
      options: [
        "Dochodowa elastyczność jest ujemna",
        "Dochodowa elastyczność jest dodatnia i mniejsza od 1",
        "Dochodowa elastyczność jest większa od 1",
        "Dochodowa elastyczność jest zerowa"
      ],
      correctAnswer: "Dochodowa elastyczność jest ujemna"
    },
    {
      id: 75,
      question: "Załóżmy, że elastyczność mieszana dwóch dóbr wynosi –0,50. Wzrost ceny pierwszego dobra będzie:",
      options: [
        "Powodował przesunięcie krzywej popytu dobra drugiego w prawo",
        "Powodował przesunięcie krzywej popytu drugiego dobra w lewo",
        "Ruch wzdłuż krzywej popytu drugiego dobra",
        "Ma nieprzewidywalny efekt na krzywą popytu drugiego dobra"
      ],
      correctAnswer: "Powodował przesunięcie krzywej popytu drugiego dobra w lewo"
    },
    {
      id: 76,
      question: "Jeśli TR = 200Q – 20Q² i Q = 30, to utarg krańcowy wynosi:",
      options: [
        "280",
        "80",
        "30",
        "180",
        "Żadne z powyższych"
      ],
      correctAnswer: "80"
    },
    {
      id: 77,
      question: "Jeśli krzywa popytu jest opisana jako: P = 800 – 4Q, to przy wzroście ceny z 200 do 300 elastyczność cenowa popytu wyniesie:",
      options: [
        "–0,50",
        "–0,25",
        "–1",
        "–33,3",
        "Żadne z powyższych"
      ],
      correctAnswer: "–0,25"
    },
    {
      id: 78,
      question: "Jeśli krzywa popytu jest opisana jako: P = 800 – 4Q, to utarg krańcowy jest równy zero dla Q równego:",
      options: [
        "150",
        "100",
        "125",
        "Żadne z powyższych"
      ],
      correctAnswer: "100"
    },
    {
      id: 79,
      question: "Funkcja popytu na zboże: P = 500 – 4Q, a funkcja podaży: P = –100 + 2Q. Rząd ustalił cenę na poziomie 80 i zgodził się na wykupywanie oraz niszczenie całej nadwyżkowej podaży. Wykupienie zboża będzie kosztowało:",
      options: [
        "7600",
        "4800",
        "16200",
        "1200",
        "Żadne z powyższych"
      ],
      correctAnswer: "4800"
    },
    {
      id: 80,
      question: "Jeśli płaca (za 1 godzinę) wynosi 40, a krańcowy przychód z produktu pracy (MRPL) wynosi 45, racjonalny producent powinien:",
      options: [
        "Zwiększyć zatrudnienie siły roboczej",
        "Zmniejszyć zatrudnienie siły roboczej",
        "Nie zmieniać wielkości produkcji",
        "Zwiększyć płace"
      ],
      correctAnswer: "Zwiększyć zatrudnienie siły roboczej"
    },
    {
      id: 81,
      question: "W długim okresie czasu firma działająca na rynku doskonale konkurencyjnym będzie zawsze miała:",
      options: [
        "Zyski zerowe",
        "Dodatnie zyski ekonomiczne",
        "Zyski bądź straty",
        "Zyski zerowe bądź straty"
      ],
      correctAnswer: "Zyski zerowe"
    },
    {
      id: 82,
      question: "W krótkim okresie firmy działające na rynku doskonale konkurencyjnym zostaną zamknięte, jeśli:",
      options: [
        "Koszty krańcowe są niższe od kosztów przeciętnych",
        "Cena jest niższa od przeciętnych kosztów stałych",
        "Cena jest niższa od przeciętnych kosztów zmiennych",
        "Cena jest niższa od krańcowego utargu",
        "Żadne z powyższych"
      ],
      correctAnswer: "Cena jest niższa od przeciętnych kosztów zmiennych"
    },
    {
      id: 83,
      question: "Utarg całkowity monopolisty wynosi TR = 400Q – 5Q², zaś koszty całkowite TC = 500 + 5Q². Wielkość produkcji maksymalizująca zyski wyniesie:",
      options: [
        "10",
        "20",
        "30",
        "40",
        "Żadne z powyższych"
      ],
      correctAnswer: "20"
    },
    {
      id: 84,
      question: "Rynek oligopolu charakteryzuje mała liczba przedsiębiorstw, które:",
      options: [
        "Stoją w obliczu doskonale elastycznych krzywych popytu",
        "Stoją w obliczu doskonale nieelastycznych krzywych popytu",
        "Wytwarzają dobra komplementarne",
        "Podejmują decyzje cenowe i produkcyjne, uwzględniając postępowanie konkurentów"
      ],
      correctAnswer: "Podejmują decyzje cenowe i produkcyjne, uwzględniając postępowanie konkurentów"
    },
    {
      id: 85,
      question: "Załamana krzywa popytu (oligopol) jest:",
      options: [
        "Elastyczna, jeśli cena wzrasta i nieelastyczna, jeśli cena spada",
        "Nieelastyczna, jeśli cena wzrasta i elastyczna, jeśli cena spada",
        "Elastyczna przy wzroście jak i spadku ceny",
        "Nieskończenie elastyczna przy wzroście cen"
      ],
      correctAnswer: "Elastyczna, jeśli cena wzrasta i nieelastyczna, jeśli cena spada"
    },
    {
      id: 86,
      question: "Zasoby siły roboczej to:",
      options: [
        "Ludność w wieku produkcyjnym",
        "Liczba zatrudnionych",
        "Liczba niezatrudnionych",
        "Liczba zatrudnionych i niezatrudnionych"
      ],
      correctAnswer: "Liczba zatrudnionych i niezatrudnionych"
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
    { id: 9, label: "Questions 81 - 86", startId: 81, endId: 86 }
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