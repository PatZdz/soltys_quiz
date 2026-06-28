export interface QuizOption {
  text: string;
  explanation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
  // If there is one correct answer, use a string. If there are multiple, use an array.
  correctAnswer: string | string[];
  generalExplanation: string;
}

export const questions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Which Microsoft tool helps you assess and track your organization's compliance with international standards and government regulations (for example, GDPR or ISO/IEC 27001)?",
    "options": [
      {
        "text": "Purview Compliance Manager",
        "explanation": "Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, np. GDPR czy ISO/IEC 27001. Pokazuje działania do wykonania, rekomendacje i stan zgodności."
      },
      {
        "text": "Azure Government Services",
        "explanation": "Azure Government Services to specjalna chmura dla instytucji rządowych USA. Zapewnia środowisko spełniające wymagania administracji publicznej, ale nie jest narzędziem do śledzenia zgodności Twojej organizacji z wieloma standardami."
      },
      {
        "text": "Service Trust Portal",
        "explanation": "Service Trust Portal udostępnia dokumenty, raporty audytowe i informacje o zabezpieczeniach oraz zgodności Microsoft. Pomaga sprawdzić, jak Microsoft spełnia wymagania, ale nie ocenia zgodności Twojej organizacji."
      },
      {
        "text": "Microsoft Privacy Statement",
        "explanation": "Microsoft Privacy Statement opisuje, jak Microsoft zbiera, używa i chroni dane osobowe. To dokument informacyjny o prywatności, a nie narzędzie do mierzenia i zarządzania zgodnością organizacji."
      }
    ],
    "correctAnswer": "Purview Compliance Manager",
    "generalExplanation": "Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, takimi jak GDPR czy ISO/IEC 27001. Pozostałe odpowiedzi opisują usługi albo dokumenty, które nie monitorują zgodności Twojej organizacji w ten sposób."
  },
  {
    "id": 2,
    "question": "Which cloud service model best describes Microsoft Outlook as delivered through Microsoft 365 (web and desktop clients)?",
    "options": [
      {
        "text": "Infrastructure as a Service (IaaS)",
        "explanation": "IaaS oznacza wynajem infrastruktury, np. maszyn wirtualnych, sieci i dysków. Przy Outlooku użytkownik nie zarządza systemem ani infrastrukturą, więc ten model nie pasuje."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "SaaS oznacza gotową aplikację dostarczaną jako usługa. Outlook w Microsoft 365 jest właśnie gotową usługą poczty i kalendarza, używaną przez przeglądarkę lub aplikację bez zarządzania infrastrukturą."
      },
      {
        "text": "Platform as a Service (PaaS)",
        "explanation": "PaaS daje platformę do tworzenia i uruchamiania własnych aplikacji bez zarządzania serwerami. Outlook nie jest platformą dla dewelopera, tylko gotową aplikacją końcową."
      }
    ],
    "correctAnswer": "Software as a Service (SaaS)",
    "generalExplanation": "Microsoft Outlook w Microsoft 365 jest gotową aplikacją dostarczaną przez internet, więc jest przykładem SaaS. Użytkownik korzysta z usługi, a Microsoft odpowiada za infrastrukturę, platformę, utrzymanie i aktualizacje."
  },
  {
    "id": 3,
    "question": "Which three stages are commonly used in the Azure service lifecycle?",
    "options": [
      {
        "text": "Preview Phase, General Availability Phase, and Unpublished",
        "explanation": "Preview Phase i General Availability są blisko prawdziwych etapów, ale „Unpublished” nie jest standardowym etapem cyklu życia usług Azure."
      },
      {
        "text": "Private Preview, Public Preview, and General Availability",
        "explanation": "Private Preview, Public Preview i General Availability to typowe etapy życia usługi Azure: ograniczone testy, szersze publiczne testy i pełna dostępność produkcyjna."
      },
      {
        "text": "Development phase, QA phase, and Live phase",
        "explanation": "Development, QA i Live to ogólne pojęcia z procesu tworzenia oprogramowania. Nie są standardowymi nazwami etapów publikowania usług Azure dla klientów."
      },
      {
        "text": "Announced, Coming Soon, and Live",
        "explanation": "Announced, Coming Soon i Live brzmią marketingowo, ale nie są formalnym cyklem życia usług Azure. Azure używa etapów preview i general availability."
      }
    ],
    "correctAnswer": "Private Preview, Public Preview, and General Availability",
    "generalExplanation": "Typowy cykl życia usług Azure obejmuje Private Preview, Public Preview i General Availability. Private Preview jest ograniczone, Public Preview pozwala szerszej grupie testować usługę, a General Availability oznacza oficjalną dostępność."
  },
  {
    "id": 4,
    "question": "Which cloud deployment model describes using Azure as an extension of your on‑premises data center to provide additional storage or services while most resources remain on‑premises?",
    "options": [
      {
        "text": "Public cloud",
        "explanation": "Public cloud oznacza korzystanie z usług publicznego dostawcy chmury przez internet. Sam public cloud nie zakłada, że większość zasobów zostaje lokalnie i że chmura tylko rozszerza centrum danych."
      },
      {
        "text": "Hybrid cloud",
        "explanation": "Hybrid cloud łączy środowisko lokalne z usługami chmury publicznej. Pasuje do sytuacji, w której Azure rozszerza on-premises data center o dodatkowe zasoby lub usługi."
      },
      {
        "text": "Private cloud",
        "explanation": "Private cloud to środowisko chmurowe używane wyłącznie przez jedną organizację. Może być lokalne albo hostowane, ale nie opisuje samego rozszerzenia lokalnego centrum danych usługami Azure."
      }
    ],
    "correctAnswer": "Hybrid cloud",
    "generalExplanation": "Hybrid cloud łączy środowisko lokalne z usługami chmury publicznej, na przykład Azure. Pasuje tu najlepiej, bo większość zasobów pozostaje on-premises, a Azure rozszerza centrum danych o dodatkowe usługi lub pojemność."
  },
  {
    "id": 5,
    "question": "You plan to deploy a critical application on Azure and must design for high availability and reliability. Which of the following statements about Azure Service Level Agreements (SLAs) is correct and should be considered when designing your solution?",
    "options": [
      {
        "text": "SLAs vary by service and can include guarantees for uptime, performance, and connectivity.",
        "explanation": "SLA w Azure zależy od konkretnej usługi i może obejmować dostępność, wydajność lub łączność. Dlatego przy projektowaniu trzeba sprawdzać SLA każdej usługi osobno."
      },
      {
        "text": "You do not need to consider SLAs when designing your solution, as Azure automatically ensures the highest availability.",
        "explanation": "Azure zapewnia mechanizmy wysokiej dostępności, ale nie projektuje automatycznie najwyższej dostępności za użytkownika. Architektura i dobór usług nadal wpływają na osiągnięte SLA."
      },
      {
        "text": "The SLA guarantees that the service will be available 99.9% of the time for all Azure services.",
        "explanation": "Nie istnieje jedna gwarancja 99,9% dla wszystkich usług Azure. Każda usługa ma własne warunki SLA i czasem różne poziomy zależnie od konfiguracji."
      },
      {
        "text": "Azure provides a 100% SLA for all services.",
        "explanation": "Azure nie daje 100% SLA dla wszystkich usług. Nawet bardzo wysoko dostępne rozwiązania mają określone warunki, wyjątki i limity odpowiedzialności."
      }
    ],
    "correctAnswer": "SLAs vary by service and can include guarantees for uptime, performance, and connectivity.",
    "generalExplanation": "Umowy SLA w Azure zależą od konkretnej usługi i mogą obejmować dostępność, wydajność oraz łączność. Przy projektowaniu rozwiązania trzeba sprawdzać SLA każdej użytej usługi, bo Azure nie daje jednej gwarancji 99,9% ani 100% dla wszystkiego."
  },
  {
    "id": 6,
    "question": "Which of the following is an essential design principle for achieving high availability in a cloud computing environment?",
    "options": [
      {
        "text": "The system must be designed for resilience, with no single points of failure.",
        "explanation": "System odporny na awarie nie ma pojedynczego punktu, którego awaria zatrzyma całość. Redundancja, przełączanie awaryjne i szybkie odtwarzanie są podstawą wysokiej dostępności."
      },
      {
        "text": "The system must maintain 100% availability at all times.",
        "explanation": "100% dostępności jest praktycznie nierealne, bo istnieją awarie, aktualizacje, błędy konfiguracji i zdarzenia losowe. Celem jest minimalizacja przestojów, a nie absolutna gwarancja."
      },
      {
        "text": "It's impossible to create a highly available system.",
        "explanation": "Da się tworzyć wysoko dostępne systemy, stosując redundancję, strefy dostępności, load balancing i automatyczne odtwarzanie. To wymaga projektu, ale nie jest niemożliwe."
      },
      {
        "text": "The system must operate on a minimum of two virtual machines.",
        "explanation": "Dwie maszyny wirtualne mogą pomóc, ale sama liczba VM nie wystarcza. Trzeba jeszcze uwzględnić sieć, storage, regiony, strefy, monitoring i sposób przełączania ruchu."
      }
    ],
    "correctAnswer": "The system must be designed for resilience, with no single points of failure.",
    "generalExplanation": "Wysoka dostępność wymaga projektowania odpornego na awarie i eliminowania pojedynczych punktów awarii. Samo użycie dwóch maszyn może pomagać, ale kluczowa jest odporność całej architektury."
  },
  {
    "id": 7,
    "question": "Under typical/default Azure service limits, what is the maximum number of virtual machines that can be included in a single Azure Virtual Machine Scale Set (VMSS)?",
    "options": [
      {
        "text": "10000",
        "explanation": "10000 nie jest typowym domyślnym limitem pojedynczego Virtual Machine Scale Set. Azure ma konkretne limity skali, których trzeba pilnować przy projektowaniu."
      },
      {
        "text": "1000",
        "explanation": "1000 to typowy maksymalny limit liczby instancji VM w pojedynczym Virtual Machine Scale Set przy standardowych założeniach."
      },
      {
        "text": "Unlimited",
        "explanation": "VMSS nie jest nieograniczony. Usługa ma limity instancji, a dodatkowo mogą obowiązywać limity subskrypcji, regionu, quota CPU i wybranych obrazów."
      },
      {
        "text": "500",
        "explanation": "500 nie jest właściwym typowym limitem dla pojedynczego VMSS. Ta liczba może mylić się z innymi ograniczeniami lub starszymi wariantami, ale nie jest poprawną odpowiedzią tutaj."
      }
    ],
    "correctAnswer": "1000",
    "generalExplanation": "Domyślny limit pojedynczego Azure Virtual Machine Scale Set to 1000 instancji maszyn wirtualnych. VMSS pozwala zarządzać i skalować dużą liczbę identycznych maszyn."
  },
  {
    "id": 8,
    "question": "Which statement best describes the primary benefit of a Content Delivery Network (CDN) in cloud computing?",
    "options": [
      {
        "text": "For a nominal fee, Azure will manage your virtual machine, perform OS updates, and ensure optimal performance.",
        "explanation": "CDN nie zarządza maszynami wirtualnymi ani aktualizacjami systemu operacyjnego. Do zarządzania VM służą inne usługi i konfiguracje, a CDN dotyczy dostarczania treści."
      },
      {
        "text": "It enables temporary session information storage for web visitors, such as their login ID or name.",
        "explanation": "Przechowywanie informacji sesyjnych użytkownika, takich jak login, to zadanie aplikacji, cache sesji albo mechanizmów tożsamości. CDN nie służy do przechowywania prywatnej sesji użytkownika."
      },
      {
        "text": "It provides fast and inexpensive data retrieval for later use.",
        "explanation": "CDN przyspiesza pobieranie danych, ale jego głównym celem jest dystrybucja i cache statycznych treści blisko użytkowników, a nie tanie archiwalne przechowywanie danych na później."
      },
      {
        "text": "It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.",
        "explanation": "CDN rozprowadza statyczne pliki po sieci serwerów bliżej użytkowników. Dzięki temu zmniejsza opóźnienia i odciąża serwer źródłowy przy obrazach, filmach, skryptach czy PDF-ach."
      }
    ],
    "correctAnswer": "It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.",
    "generalExplanation": "CDN odciąża serwer źródłowy, przechowując kopie statycznych plików na rozproszonej sieci serwerów. Dzięki temu obrazy, filmy czy PDF-y są dostarczane szybciej i z mniejszym obciążeniem głównej infrastruktury."
  },
  {
    "id": 9,
    "question": "Which of the following best describes a Distributed Denial of Service (DDoS) attack?",
    "options": [
      {
        "text": "An attempt to guess a user's password through brute force methods",
        "explanation": "Zgadywanie hasła metodą brute force to atak na uwierzytelnianie konta. DDoS nie próbuje odgadnąć hasła, tylko przeciąża usługę ruchem."
      },
      {
        "text": "A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service",
        "explanation": "DDoS polega na zalaniu sieci lub usługi ogromną liczbą żądań z wielu źródeł. Skutkiem jest brak możliwości obsługi prawidłowych użytkowników."
      },
      {
        "text": "An attempt to read the contents of a web page from another website, thereby stealing the user's private information",
        "explanation": "Próba kradzieży danych przez wstrzyknięcie lub uruchomienie kodu na stronie to bliżej ataków webowych, np. XSS. DDoS koncentruje się na niedostępności usługi."
      },
      {
        "text": "An attempt to send SQL commands to the server in a way that it will execute them against the database",
        "explanation": "Wysyłanie komend SQL do serwera to SQL injection. Ten atak celuje w bazę danych, a nie w przeciążenie sieci lub aplikacji ruchem."
      }
    ],
    "correctAnswer": "A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service",
    "generalExplanation": "Atak DDoS polega na zalaniu usługi lub sieci ogromną liczbą żądań albo pakietów, przez co nie może ona obsłużyć prawidłowego ruchu użytkowników. Nie jest to brute force, XSS ani SQL injection."
  },
  {
    "id": 10,
    "question": "Which Azure service provides a managed Apache Hadoop-based platform for big data analytics?",
    "options": [
      {
        "text": "Azure Hadoop Services",
        "explanation": "Azure Hadoop Services nie jest właściwą nazwą usługi Azure. Sama fraza brzmi opisowo, ale zarządzaną usługą Hadoop w Azure jest HDInsight."
      },
      {
        "text": "HDInsight",
        "explanation": "HDInsight to zarządzana usługa Azure dla Apache Hadoop i powiązanych narzędzi big data, takich jak Hive, Spark czy HBase."
      },
      {
        "text": "Azure Data Factory",
        "explanation": "Azure Data Factory służy do integracji danych, tworzenia potoków i orkiestracji przepływów ETL/ELT. Nie jest zarządzaną platformą Hadoop."
      },
      {
        "text": "Azure Kubernetes Services",
        "explanation": "Azure Kubernetes Service zarządza klastrami Kubernetes dla aplikacji kontenerowych. Nie jest usługą Hadoop do analizy big data."
      }
    ],
    "correctAnswer": "HDInsight",
    "generalExplanation": "HDInsight to zarządzana usługa Azure dla platform i narzędzi Apache Hadoop oraz innych frameworków big data. Azure Data Factory służy głównie do integracji danych, a AKS do orkiestracji kontenerów."
  },
  {
    "id": 11,
    "question": "Which Azure service provides a centralized security dashboard that consolidates cloud security posture, recommendations, and threat protection for Azure resources?",
    "options": [
      {
        "text": "Azure Portal Dashboard",
        "explanation": "Azure Portal Dashboard to konfigurowalny widok zasobów i metryk w portalu. Nie jest wyspecjalizowanym centrum rekomendacji bezpieczeństwa i ochrony przed zagrożeniami."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud pokazuje stan zabezpieczeń, rekomendacje i ochronę przed zagrożeniami dla zasobów chmurowych. To centralny panel bezpieczeństwa dla Azure i środowisk hybrydowych."
      },
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor zbiera metryki, logi i zdarzenia operacyjne. Może wspierać obserwowalność, ale nie jest głównym pulpitem zarządzania posture security."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "Azure Key Vault przechowuje sekrety, klucze i certyfikaty. Jest ważny dla bezpieczeństwa, ale nie daje centralnego panelu oceny bezpieczeństwa wszystkich zasobów."
      }
    ],
    "correctAnswer": "Microsoft Defender for Cloud",
    "generalExplanation": "Microsoft Defender for Cloud zapewnia scentralizowany widok stanu bezpieczeństwa, rekomendacje i ochronę przed zagrożeniami dla zasobów Azure. Pozostałe usługi mają inne role, na przykład monitoring ogólny albo przechowywanie sekretów."
  },
  {
    "id": 12,
    "question": "Which statement correctly describes the difference between the public cloud and the private cloud deployment models?",
    "options": [
      {
        "text": "Both public and private clouds are owned and operated by a single organization for exclusive use.",
        "explanation": "To opis private cloud, a nie obu modeli. Public cloud nie jest własnością jednej organizacji i nie jest przeznaczony tylko dla niej."
      },
      {
        "text": "Both public and private clouds are available to the general public and are owned by a cloud service provider.",
        "explanation": "To opis public cloud, ale nie private cloud. Private cloud jest wydzielony dla jednej organizacji i nie jest ogólnie dostępny publicznie."
      },
      {
        "text": "A public cloud is owned and operated by a single organization for exclusive use, while a private cloud is available to the general public or a large industry group and is owned by a cloud service provider.",
        "explanation": "Ta odpowiedź odwraca definicje. Public cloud jest dostępny dla wielu klientów u dostawcy chmury, a private cloud jest wydzielony dla jednej organizacji."
      },
      {
        "text": "A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.",
        "explanation": "Public cloud jest dostępny dla wielu klientów i należy do dostawcy chmury. Private cloud jest używany wyłącznie przez jedną organizację, co daje większą kontrolę i izolację."
      }
    ],
    "correctAnswer": "A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.",
    "generalExplanation": "Chmura publiczna jest dostępna dla wielu klientów i należy do dostawcy chmury, natomiast chmura prywatna jest przeznaczona do wyłącznego użycia jednej organizacji. To podstawowa różnica między tymi modelami wdrożenia."
  },
  {
    "id": 13,
    "question": "Which Azure service should an IT administrator use to enforce multi-factor authentication (MFA) and control access to an application?",
    "options": [
      {
        "text": "Azure Authentication",
        "explanation": "Azure Authentication nie jest nazwą głównej usługi do egzekwowania MFA i kontroli dostępu. Uwierzytelnianie w Azure realizuje się przede wszystkim przez Microsoft Entra ID."
      },
      {
        "text": "Microsoft Entra ID",
        "explanation": "Microsoft Entra ID zarządza tożsamościami, logowaniem, MFA, dostępem warunkowym i dostępem do aplikacji. To właściwa usługa do kontroli dostępu i wymuszania MFA."
      },
      {
        "text": "Azure Authorization",
        "explanation": "Azure Authorization dotyczy autoryzacji i uprawnień, np. RBAC dla zasobów. Nie jest usługą tożsamości, która sama egzekwuje MFA dla aplikacji."
      },
      {
        "text": "Azure Function",
        "explanation": "Azure Functions to serverless compute do uruchamiania kodu. Nie służy do zarządzania tożsamością ani wymuszania MFA."
      }
    ],
    "correctAnswer": "Microsoft Entra ID",
    "generalExplanation": "Microsoft Entra ID odpowiada za tożsamość, uwierzytelnianie, MFA i kontrolę dostępu do aplikacji oraz zasobów. Azure Authorization czy Azure Functions nie są usługami do egzekwowania MFA dla aplikacji."
  },
  {
    "id": 14,
    "question": "Which Azure website tool lets you estimate future costs by adding Azure products and services to a shopping cart and calculating the pricing?",
    "options": [
      {
        "text": "Azure Pricing Calculator",
        "explanation": "Azure Pricing Calculator pozwala wybrać usługi, skonfigurować parametry i oszacować przyszłe koszty. Działa jak kalkulator kosztów przed wdrożeniem."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor analizuje istniejące środowisko i daje rekomendacje, także kosztowe. Nie jest narzędziem do składania przyszłej konfiguracji w koszyk cenowy."
      },
      {
        "text": "Microsoft Docs",
        "explanation": "Microsoft Docs zawiera dokumentację i instrukcje. Może wyjaśniać ceny, ale nie jest kalkulatorem do szacowania kosztu zestawu usług."
      }
    ],
    "correctAnswer": "Azure Pricing Calculator",
    "generalExplanation": "Azure Pricing Calculator pozwala dobrać usługi Azure, skonfigurować ich parametry i oszacować przyszły koszt. Azure Advisor daje rekomendacje, ale nie działa jak kalkulator koszyka usług."
  },
  {
    "id": 15,
    "question": "Which Azure feature provides a basic, per-subnet method to protect an Azure Virtual Network subnet by controlling inbound and outbound network traffic?",
    "options": [
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall to zarządzana zapora sieciowa o większych możliwościach i centralnym zastosowaniu. Pytanie dotyczy podstawowych reguł per subnet, czyli NSG."
      },
      {
        "text": "Network Security Group",
        "explanation": "Network Security Group definiuje reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. To podstawowy mechanizm kontroli ruchu w Virtual Network."
      },
      {
        "text": "Application Gateway with WAF",
        "explanation": "Application Gateway z WAF chroni aplikacje webowe na warstwie aplikacyjnej. Nie jest podstawowym mechanizmem reguł ruchu dla całej podsieci."
      },
      {
        "text": "Azure DDos Standard protection",
        "explanation": "Azure DDoS Standard chroni przed atakami DDoS. Nie służy do codziennego definiowania reguł inbound/outbound dla podsieci."
      }
    ],
    "correctAnswer": "Network Security Group",
    "generalExplanation": "Network Security Group pozwala definiować podstawowe reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. Jest to prosty mechanizm kontroli ruchu w Virtual Network."
  },
  {
    "id": 16,
    "question": "In the Azure shared responsibility model, who is responsible for securing the access keys (account keys) for your Azure Storage account?",
    "options": [
      {
        "text": "I am responsible for securing the access keys",
        "explanation": "Klient odpowiada za ochronę kluczy dostępu do swojego Storage Account. Trzeba je trzymać bezpiecznie, rotować i nie publikować w kodzie ani logach."
      },
      {
        "text": "Azure is responsible for securing the access keys",
        "explanation": "Azure zabezpiecza infrastrukturę platformy, ale klucze konta storage przekazane klientowi są odpowiedzialnością klienta. Microsoft nie wie, gdzie klient je ujawnił lub zapisał."
      }
    ],
    "correctAnswer": "I am responsible for securing the access keys",
    "generalExplanation": "W modelu współodpowiedzialności klient odpowiada za zabezpieczenie kluczy dostępu do własnego konta Storage. Jeśli klucze zostaną ujawnione, klient powinien je chronić i regenerować."
  },
  {
    "id": 17,
    "question": "In the context of Azure cloud services, which statement best defines 'compute resources'?",
    "options": [
      {
        "text": "They encompass Virtual Machines, Storage Accounts, and Virtual Networks.",
        "explanation": "Virtual Machines są compute, ale Storage Accounts i Virtual Networks nie wykonują pracy CPU. Ta odpowiedź miesza compute z usługami przechowywania i sieci."
      },
      {
        "text": "They are resources that execute tasks requiring CPU cycles.",
        "explanation": "Compute resources to zasoby wykonujące obliczenia, czyli uruchamiające kod lub zadania wymagające CPU/RAM, np. VM, kontenery, funkcje lub usługi aplikacyjne."
      },
      {
        "text": "They refer exclusively to Virtual Machines.",
        "explanation": "Maszyny wirtualne są przykładem compute, ale compute nie ogranicza się wyłącznie do VM. Azure ma wiele usług obliczeniowych poza VM."
      },
      {
        "text": "They include all resources listed in the Azure Marketplace.",
        "explanation": "Azure Marketplace zawiera bardzo różne produkty: aplikacje, obrazy, usługi i integracje. Nie wszystkie zasoby z Marketplace są zasobami obliczeniowymi."
      }
    ],
    "correctAnswer": "They are resources that execute tasks requiring CPU cycles.",
    "generalExplanation": "Compute resources to zasoby wykonujące pracę obliczeniową wymagającą cykli CPU, na przykład maszyny wirtualne lub usługi uruchamiające kod. Nie obejmuje to automatycznie wszystkich zasobów Azure Marketplace."
  },
  {
    "id": 18,
    "question": "Your company wants employees to sign in once and then access multiple Microsoft 365 and Azure applications without re-entering their credentials. Which Azure feature should the company implement?",
    "options": [
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud zabezpiecza środowiska i daje rekomendacje bezpieczeństwa. Nie zapewnia użytkownikom single sign-on do wielu aplikacji."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "Azure Key Vault przechowuje sekrety, klucze i certyfikaty. Nie służy do tego, by pracownicy logowali się raz do wielu aplikacji."
      },
      {
        "text": "Microsoft Entra ID Single Sign-On (SSO)",
        "explanation": "Microsoft Entra ID Single Sign-On pozwala użytkownikowi zalogować się raz i uzyskać dostęp do wielu aplikacji bez ponownego wpisywania poświadczeń."
      },
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy wymusza reguły zgodności i governance dla zasobów Azure. Nie jest mechanizmem logowania jednokrotnego dla użytkowników."
      }
    ],
    "correctAnswer": "Microsoft Entra ID Single Sign-On (SSO)",
    "generalExplanation": "Microsoft Entra ID Single Sign-On pozwala użytkownikom zalogować się raz i korzystać z wielu aplikacji Microsoft 365 oraz Azure bez ponownego podawania poświadczeń. Defender for Cloud, Key Vault i Azure Policy pełnią inne funkcje."
  },
  {
    "id": 19,
    "question": "Which of the following methods can you use to deploy resources with the Azure Resource Manager (ARM) deployment model? Select all that apply.",
    "options": [
      {
        "text": "CLI",
        "explanation": "Azure CLI pozwala wdrażać i zarządzać zasobami ARM z wiersza poleceń. Jest jedną z pełnoprawnych metod pracy z Azure Resource Manager."
      },
      {
        "text": "Powershell",
        "explanation": "PowerShell, szczególnie moduły Azure PowerShell, pozwala skryptować i automatyzować wdrożenia zasobów ARM."
      },
      {
        "text": "REST API / SDK",
        "explanation": "REST API i SDK pozwalają tworzyć oraz zarządzać zasobami ARM programistycznie, np. z aplikacji, narzędzi CI/CD lub własnych skryptów."
      },
      {
        "text": "Azure Portal",
        "explanation": "Azure Portal to graficzny interfejs, który również korzysta z Azure Resource Manager do tworzenia i zarządzania zasobami."
      }
    ],
    "correctAnswer": [
      "CLI",
      "Powershell",
      "REST API / SDK",
      "Azure Portal"
    ],
    "generalExplanation": "Azure Resource Manager umożliwia wdrażanie zasobów na wiele sposobów: przez Azure Portal, PowerShell, Azure CLI oraz REST API/SDK. Wszystkie te metody korzystają z warstwy zarządzania ARM."
  },
  {
    "id": 20,
    "question": "Your company uses Microsoft Entra ID (tenant) to manage access to Azure resources. The IT department wants to separate billing, permissions, and resource limits for different business units within the same organization. What should they do?",
    "options": [
      {
        "text": "Create separate Azure tenants for each business unit.",
        "explanation": "Osobne tenanty mocno izolują tożsamość i zarządzanie, ale zwykle są zbyt ciężkim rozwiązaniem dla jednostek biznesowych w tej samej organizacji."
      },
      {
        "text": "Create multiple management groups under one subscription.",
        "explanation": "Management groups porządkują subskrypcje i polityki, ale same nie rozdzielają billingów i limitów tak jak osobne subskrypcje."
      },
      {
        "text": "Create multiple subscriptions under the same tenant.",
        "explanation": "Wiele subskrypcji pod jednym tenantem pozwala rozdzielić billing, uprawnienia i limity, zachowując wspólne zarządzanie tożsamością."
      },
      {
        "text": "Use Azure Resource Groups to isolate billing and limits.",
        "explanation": "Resource Groups organizują zasoby wewnątrz jednej subskrypcji. Nie zapewniają pełnego rozdzielenia billingów i limitów między jednostkami biznesowymi."
      }
    ],
    "correctAnswer": "Create multiple subscriptions under the same tenant.",
    "generalExplanation": "Wiele subskrypcji pod jednym tenantem pozwala rozdzielić rozliczenia, uprawnienia i limity dla jednostek biznesowych, zachowując wspólne zarządzanie tożsamością w Microsoft Entra ID."
  },
  {
    "id": 21,
    "question": "Azure Logic Apps and Azure Functions are examples of which compute model in Azure?",
    "options": [
      {
        "text": "SaaS model",
        "explanation": "SaaS to gotowa aplikacja używana przez klienta, np. Outlook. Logic Apps i Functions są usługami do budowania logiki i kodu, więc nie są SaaS."
      },
      {
        "text": "IaaS model",
        "explanation": "IaaS oznacza zarządzanie infrastrukturą, np. maszynami wirtualnymi. Logic Apps i Functions ukrywają serwery i rozliczają się bardziej zdarzeniowo."
      },
      {
        "text": "Serverless model",
        "explanation": "Serverless oznacza, że nie zarządzasz serwerami, a kod lub przepływy uruchamiają się na żądanie. Logic Apps i Azure Functions są typowymi przykładami tego modelu."
      },
      {
        "text": "App Services Model",
        "explanation": "App Services Model dotyczy hostowania aplikacji webowych w Azure App Service. Logic Apps i Functions należą szerzej do serverless."
      }
    ],
    "correctAnswer": "Serverless model",
    "generalExplanation": "Azure Logic Apps i Azure Functions są przykładami modelu serverless. Dostawca obsługuje infrastrukturę, a użytkownik koncentruje się na logice, przepływach i zdarzeniach."
  },
  {
    "id": 22,
    "question": "Which Azure service is the primary identity and authentication platform?",
    "options": [
      {
        "text": "Live Connect",
        "explanation": "Live Connect to starsze pojęcie związane z usługami kont Microsoft, a nie podstawowa platforma tożsamości dla Azure."
      },
      {
        "text": "Network Security Group",
        "explanation": "Network Security Group filtruje ruch sieciowy. Nie zarządza użytkownikami, logowaniem ani uwierzytelnianiem."
      },
      {
        "text": "Microsoft Entra ID (formerly Azure Active Directory)",
        "explanation": "Microsoft Entra ID, dawniej Azure Active Directory, jest podstawową usługą tożsamości i uwierzytelniania dla Azure oraz Microsoft 365."
      },
      {
        "text": "Facebook Connect",
        "explanation": "Facebook Connect dotyczy logowania przez Facebooka. Nie jest usługą tożsamości Azure dla organizacji."
      }
    ],
    "correctAnswer": "Microsoft Entra ID (formerly Azure Active Directory)",
    "generalExplanation": "Microsoft Entra ID, dawniej Azure Active Directory, jest główną usługą tożsamości i uwierzytelniania w Azure. To ona odpowiada za logowanie, użytkowników, grupy i kontrolę dostępu."
  },
  {
    "id": 23,
    "question": "Which Microsoft service provides 'Pipelines' to automate building, running tests, and deploying code from a repository to Azure?",
    "options": [
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor zbiera metryki i logi oraz wspiera alertowanie. Nie jest usługą CI/CD z pipeline do budowania i wdrażania kodu."
      },
      {
        "text": "GitHub",
        "explanation": "GitHub przechowuje repozytoria i ma własne GitHub Actions, ale pytanie pyta o usługę Microsoft z funkcją Pipelines w Azure DevOps."
      },
      {
        "text": "Virtual Machines",
        "explanation": "Virtual Machines to zasoby obliczeniowe. Mogą uruchamiać narzędzia build, ale same nie są usługą pipelines."
      },
      {
        "text": "Azure DevOps",
        "explanation": "Azure DevOps zawiera Azure Pipelines, które automatyzują build, testy i wdrożenia z repozytorium do Azure lub innych środowisk."
      }
    ],
    "correctAnswer": "Azure DevOps",
    "generalExplanation": "Azure DevOps zawiera usługę Pipelines, która automatyzuje budowanie, testowanie i wdrażanie kodu. Służy do tworzenia procesów CI/CD dla aplikacji i infrastruktury."
  },
  {
    "id": 24,
    "question": "Which cloud service model is a virtual machine (VM) most directly an example of?",
    "options": [
      {
        "text": "Infrastructure as a Service (IaaS)",
        "explanation": "VM to przykład IaaS, bo dostawca zapewnia infrastrukturę, a klient zarządza systemem operacyjnym, konfiguracją i aplikacjami."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "SaaS to gotowa aplikacja używana przez klienta. Maszyna wirtualna nie jest gotowym produktem aplikacyjnym, tylko infrastrukturą do samodzielnego zarządzania."
      },
      {
        "text": "Platform as a Service (PaaS)",
        "explanation": "PaaS ukrywa system operacyjny i serwer aplikacyjny. Przy VM użytkownik nadal zarządza systemem operacyjnym, więc to nie jest PaaS."
      }
    ],
    "correctAnswer": "Infrastructure as a Service (IaaS)",
    "generalExplanation": "Maszyna wirtualna jest klasycznym przykładem Infrastructure as a Service, bo klient zarządza systemem operacyjnym i oprogramowaniem, a dostawca zapewnia infrastrukturę bazową."
  },
  {
    "id": 25,
    "question": "When creating a Site-to-Site VPN between Azure and your on-premises network, what type of device must be present in your on-premises infrastructure to terminate the VPN connection?",
    "options": [
      {
        "text": "A dedicated virtual machine",
        "explanation": "Dedykowana maszyna wirtualna może pełnić różne role, ale Site-to-Site VPN wymaga zgodnego urządzenia lub bramy VPN po stronie lokalnej, a nie dowolnej VM."
      },
      {
        "text": "An Application Gateway",
        "explanation": "Application Gateway obsługuje ruch aplikacyjny HTTP/HTTPS. Nie kończy tunelu Site-to-Site VPN między siecią lokalną a Azure."
      },
      {
        "text": "A compatible VPN Gateway device",
        "explanation": "Zgodne urządzenie VPN Gateway po stronie on-premises kończy tunel VPN i zestawia połączenie z Azure VPN Gateway."
      },
      {
        "text": "An Azure Virtual Network",
        "explanation": "Azure Virtual Network jest siecią po stronie Azure. Nie jest urządzeniem w infrastrukturze lokalnej, które kończy tunel VPN."
      }
    ],
    "correctAnswer": "A compatible VPN Gateway device",
    "generalExplanation": "Połączenie Site-to-Site VPN wymaga zgodnego urządzenia VPN Gateway po stronie lokalnej, które zakończy tunel VPN. Sama aplikacja, maszyna wirtualna czy sieć wirtualna nie zastępują tego urządzenia."
  },
  {
    "id": 26,
    "question": "Which Azure service centralizes telemetry and log data from multiple resources so you can run queries, visualize results, and create alerts on events?",
    "options": [
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor centralizuje metryki, logi i zdarzenia z zasobów, pozwalając tworzyć zapytania, dashboardy i alerty."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud skupia się na bezpieczeństwie i rekomendacjach ochronnych. Korzysta z telemetrii, ale nie jest ogólnym centralnym narzędziem monitoringu."
      },
      {
        "text": "Azure Portal Dashboard",
        "explanation": "Azure Portal Dashboard to widok w portalu. Może pokazywać kafelki i metryki, ale nie jest usługą zbierającą całą telemetrię."
      },
      {
        "text": "Storage Account or Event Hub",
        "explanation": "Storage Account albo Event Hub mogą być miejscem eksportu danych lub integracji, ale same nie są usługą centralnego monitoringu i alertowania."
      }
    ],
    "correctAnswer": "Azure Monitor",
    "generalExplanation": "Azure Monitor centralizuje metryki, logi i zdarzenia z wielu zasobów. Umożliwia zapytania, wizualizacje i alerty na podstawie telemetrii."
  },
  {
    "id": 27,
    "question": "Which Azure feature lets you organize multiple subscriptions into a hierarchy for centralized governance, policy enforcement, and access management?",
    "options": [
      {
        "text": "Resource Groups",
        "explanation": "Resource Groups grupują zasoby wewnątrz jednej subskrypcji. Nie tworzą hierarchii dla wielu subskrypcji."
      },
      {
        "text": "Microsoft Entra ID",
        "explanation": "Microsoft Entra ID zarządza tożsamością i dostępem, ale nie jest hierarchią organizacyjną subskrypcji do governance."
      },
      {
        "text": "Management Groups",
        "explanation": "Management Groups pozwalają układać wiele subskrypcji w hierarchię i centralnie stosować polityki, role oraz zasady zgodności."
      },
      {
        "text": "RBAC (Role-Based Access Control)",
        "explanation": "RBAC nadaje role i uprawnienia. Nie tworzy struktury hierarchicznej dla wielu subskrypcji."
      }
    ],
    "correctAnswer": "Management Groups",
    "generalExplanation": "Management Groups pozwalają organizować wiele subskrypcji w hierarchię i stosować centralnie polityki, zgodność oraz uprawnienia. Resource Groups działają niżej, wewnątrz subskrypcji."
  },
  {
    "id": 28,
    "question": "For the highest SLA/availability for Azure virtual machines, which deployment strategy is best?",
    "options": [
      {
        "text": "Deploying a single virtual machine.",
        "explanation": "Pojedyncza VM jest pojedynczym punktem awarii. Nie zapewnia najwyższego SLA, bo awaria hosta lub centrum danych może zatrzymać usługę."
      },
      {
        "text": "Deploying two or more virtual machines within the same data center.",
        "explanation": "Dwie VM w tym samym data center dają pewną redundancję, ale nadal są narażone na awarię tej samej lokalizacji."
      },
      {
        "text": "Deploying two or more virtual machines across different availability zones within the same region.",
        "explanation": "Rozmieszczenie VM w różnych Availability Zones w jednym regionie daje najwyższą odporność regionalną, bo strefy są fizycznie oddzielnymi lokalizacjami."
      },
      {
        "text": "Deploying two or more virtual machines within an availability set.",
        "explanation": "Availability Set rozdziela VM na domeny awarii i aktualizacji w obrębie centrum danych. To pomaga, ale zwykle daje niższą odporność niż Availability Zones."
      }
    ],
    "correctAnswer": "Deploying two or more virtual machines across different availability zones within the same region.",
    "generalExplanation": "Najwyższą dostępność dla maszyn wirtualnych daje rozmieszczenie co najmniej dwóch VM w różnych Availability Zones w tym samym regionie. Strefy dostępności chronią przed awarią pojedynczego centrum danych."
  },
  {
    "id": 29,
    "question": "What is a primary benefit of choosing a consumption-based (pay-per-use) pricing model instead of a time-based (hourly or always-on) pricing model for cloud services?",
    "options": [
      {
        "text": "The ability to easily predict the future cost of the service.",
        "explanation": "Pay-per-use nie zawsze ułatwia przewidywanie kosztów, bo koszt zależy od realnego zużycia. Do przewidywania pomagają budżety, alerty i kalkulatory."
      },
      {
        "text": "A simpler and easier-to-understand pricing model.",
        "explanation": "Model zużyciowy może być elastyczny, ale nie zawsze jest prostszy od stałego kosztu. Jego główną zaletą jest płatność za faktyczne użycie."
      },
      {
        "text": "It always being cheaper to pay for consumption rather than paying hourly.",
        "explanation": "Zużycie nie zawsze jest tańsze niż opłaty godzinowe lub rezerwacje. Przy stałym, długim użyciu tańsze mogą być rezerwacje albo plany oszczędnościowe."
      },
      {
        "text": "Significant cost savings when the resources aren't needed for constant use.",
        "explanation": "Model pay-per-use pozwala dużo zaoszczędzić, gdy zasoby są potrzebne tylko okresowo. Nie płacisz wtedy za nieużywaną pojemność przez cały czas."
      }
    ],
    "correctAnswer": "Significant cost savings when the resources aren't needed for constant use.",
    "generalExplanation": "Model zużyciowy pozwala płacić za realne użycie zasobów, więc daje oszczędności, gdy zasoby nie muszą działać stale. Nie oznacza jednak, że zawsze będzie tańszy w każdej sytuacji."
  },
  {
    "id": 30,
    "question": "Your organization has specific compliance requirements that are not covered by Azure’s built-in policy definitions. What should you do to enforce your organization’s own rules?",
    "options": [
      {
        "text": "Use Azure Resource Locks to prevent changes that violate your rules.",
        "explanation": "Resource Locks chronią zasoby przed usunięciem lub zmianą, ale nie opisują złożonych reguł zgodności, np. dozwolonych lokalizacji, tagów czy konfiguracji."
      },
      {
        "text": "Create and assign a custom policy definition in Azure Policy.",
        "explanation": "Custom policy definition w Azure Policy pozwala zapisać własne reguły organizacji i egzekwować je na zasobach Azure."
      },
      {
        "text": "Open a Microsoft support request to add a new built-in policy.",
        "explanation": "Support request do Microsoft nie jest typową metodą dodawania reguł organizacji. Własne wymagania wdraża się przez custom policy."
      },
      {
        "text": "Deploy resources only in regions with default compliance controls.",
        "explanation": "Regiony z domyślnymi kontrolami mogą pomagać w zgodności, ale nie zastąpią własnych reguł organizacyjnych, które trzeba egzekwować polityką."
      }
    ],
    "correctAnswer": "Create and assign a custom policy definition in Azure Policy.",
    "generalExplanation": "Jeśli wbudowane definicje Azure Policy nie obejmują wymagań organizacji, należy utworzyć i przypisać własną definicję polityki. Resource Locks blokują zmiany, ale nie wyrażają niestandardowych reguł zgodności."
  },
  {
    "id": 31,
    "question": "Which of the following is something that Azure AI Services can currently do?",
    "options": [
      {
        "text": "All of these! Azure can do it all!",
        "explanation": "Azure AI Services obejmują wszystkie wymienione zdolności: mowę, OCR, tłumaczenie i transkrypcję. Dlatego najlepsza odpowiedź to cały zestaw."
      },
      {
        "text": "Speak text in an extremely realistic way",
        "explanation": "Azure AI Speech potrafi generować realistyczną mowę z tekstu. To prawdziwa funkcja, ale pytanie pyta o pełen zakres możliwości, więc sama ta opcja jest niepełna."
      },
      {
        "text": "Recognize text in an image",
        "explanation": "Azure AI Vision potrafi rozpoznawać tekst na obrazach przez OCR. To prawdziwa funkcja, ale nie obejmuje pozostałych wymienionych możliwości."
      },
      {
        "text": "Translate text from one language to another",
        "explanation": "Azure AI Translator potrafi tłumaczyć tekst między językami. To prawdziwa funkcja, ale jest tylko jedną z kilku wymienionych."
      },
      {
        "text": "Create text from audio",
        "explanation": "Azure AI Speech potrafi tworzyć tekst z audio, czyli transkrybować mowę. To prawdziwa funkcja, ale nie wyczerpuje całej listy możliwości."
      }
    ],
    "correctAnswer": "All of these! Azure can do it all!",
    "generalExplanation": "Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
  },
  {
    "id": 32,
    "question": "When you sign up for a new Azure Free account, how much initial credit (USD) does Microsoft provide for use during the trial period?",
    "options": [
      {
        "text": "Azure does not give you any free credits when you create a free account",
        "explanation": "Azure Free Account zwykle daje początkowy kredyt, więc twierdzenie o braku darmowych środków jest niepoprawne."
      },
      {
        "text": "You are given $50 per month, for one year towards Azure services",
        "explanation": "50 USD miesięcznie przez rok nie jest standardowym kredytem startowym Azure Free Account w tym pytaniu."
      },
      {
        "text": "The default is US$200",
        "explanation": "Domyślny kredyt startowy Azure Free Account to 200 USD na okres próbny. Pozwala przetestować płatne usługi bez natychmiastowych kosztów."
      },
      {
        "text": "You can create 1 Linux VM, 1 Windows VM, and a number of other free services for the first year.",
        "explanation": "Konto darmowe może oferować wybrane darmowe usługi przez ograniczony czas, ale pytanie dotyczy kwoty początkowego kredytu, a nie listy usług."
      }
    ],
    "correctAnswer": "The default is US$200",
    "generalExplanation": "Nowe konto Azure Free standardowo dostaje 200 USD kredytu na okres próbny. Oprócz tego mogą być dostępne wybrane bezpłatne usługi, ale pytanie dotyczy początkowego kredytu."
  },
  {
    "id": 33,
    "question": "A company is moving from on-premises servers to Azure. They want to avoid large upfront hardware purchases and only pay for the resources they actually use. Which benefit of cloud computing does this describe?",
    "options": [
      {
        "text": "Fault tolerance",
        "explanation": "Fault tolerance oznacza odporność na awarie komponentów. Tu nacisk jest na unikanie dużych zakupów sprzętu i płacenie za użycie."
      },
      {
        "text": "Elasticity",
        "explanation": "Elasticity oznacza automatyczne lub szybkie skalowanie zasobów w górę i dół. To korzyść chmury, ale nie główny opis przejścia z CapEx na OpEx."
      },
      {
        "text": "High availability",
        "explanation": "High availability oznacza utrzymywanie dostępności usługi mimo awarii. Scenariusz opisuje przede wszystkim model kosztowy, nie dostępność."
      },
      {
        "text": "Capital expenditure reduction (CapEx to OpEx)",
        "explanation": "Redukcja CapEx na rzecz OpEx oznacza rezygnację z dużych wydatków inwestycyjnych na sprzęt i płacenie operacyjnie za wykorzystane zasoby."
      }
    ],
    "correctAnswer": "Capital expenditure reduction (CapEx to OpEx)",
    "generalExplanation": "Przejście z dużych zakupów sprzętu na płatność za faktyczne użycie opisuje redukcję nakładów kapitałowych i przejście z CapEx na OpEx. To jedna z podstawowych korzyści chmury."
  },
  {
    "id": 34,
    "question": "Which Azure service provides a fully managed, hosted relational SQL database (Platform as a Service)?",
    "options": [
      {
        "text": "Table Storage",
        "explanation": "Table Storage to magazyn NoSQL typu key-value/tablilczny. Nie jest relacyjną bazą SQL ani usługą PaaS dla SQL Server."
      },
      {
        "text": "SQL Server in a VM",
        "explanation": "SQL Server w VM daje relacyjną bazę, ale użytkownik zarządza maszyną i systemem. To bliżej IaaS niż w pełni zarządzany PaaS."
      },
      {
        "text": "Azure SQL Database",
        "explanation": "Azure SQL Database to w pełni zarządzana relacyjna baza zgodna z SQL Server w modelu PaaS. Microsoft zarządza wieloma aspektami platformy."
      },
      {
        "text": "Cosmos DB",
        "explanation": "Cosmos DB to globalnie rozproszona baza NoSQL. Nie jest klasyczną relacyjną bazą SQL Database."
      }
    ],
    "correctAnswer": "Azure SQL Database",
    "generalExplanation": "Azure SQL Database to w pełni zarządzana relacyjna baza SQL w modelu PaaS. SQL Server w maszynie wirtualnej jest bliższy IaaS, a Cosmos DB jest bazą NoSQL."
  },
  {
    "id": 35,
    "question": "Which of the following Azure actions is most likely to produce the most immediate reduction in your Azure costs?",
    "options": [
      {
        "text": "Using Azure Policy to restrict the use of expensive VM SKUs",
        "explanation": "Azure Policy może ograniczyć tworzenie drogich SKU w przyszłości, ale niekoniecznie od razu obniży koszt już działających zasobów."
      },
      {
        "text": "Changing your storage accounts from globally redundant (GRS) to locally redundant (LRS)",
        "explanation": "Zmiana GRS na LRS może obniżyć koszt storage, ale efekt zależy od udziału storage w rachunku. Zwykle nie jest to największa natychmiastowa oszczędność dla VM."
      },
      {
        "text": "Auto shutdown of development and QA servers over night and on weekends",
        "explanation": "Auto shutdown dev/test po godzinach może szybko zmniejszyć koszty, ale dotyczy tylko środowisk, które można wyłączać. Dla większości stale działających VM rezerwacje mogą dać większą oszczędność."
      },
      {
        "text": "Using Azure Reserved Instances for most of your virtual machines",
        "explanation": "Reserved Instances obniżają koszt maszyn wirtualnych przy przewidywalnym długim użyciu, często znacząco względem pay-as-you-go. To zwykle silny i szybki sposób redukcji kosztów VM."
      }
    ],
    "correctAnswer": "Using Azure Reserved Instances for most of your virtual machines",
    "generalExplanation": "Reserved Instances mogą znacząco obniżyć koszt maszyn wirtualnych przy przewidywalnym, dłuższym użyciu. To zwykle daje szybszą i większą oszczędność niż same ograniczenia polityką czy zmiana redundancji storage."
  },
  {
    "id": 36,
    "question": "Your organization has an Azure Policy that restricts which virtual machine SKUs/sizes can be deployed. Which of the following actions would allow you to create a VM that the policy currently blocks?",
    "options": [
      {
        "text": "Subscription Owners (Administrators) can create resources regardless of what the policy restricts",
        "explanation": "Owner ma szerokie uprawnienia RBAC, ale Azure Policy nadal może blokować niedozwolone SKU. Uprawnienia właściciela nie omijają automatycznie polityki."
      },
      {
        "text": "Use an account that has Contributor or above permissions to the resource group",
        "explanation": "Contributor pozwala tworzyć zasoby, ale tylko zgodne z politykami. Jeśli policy blokuje SKU, rola Contributor nie wystarczy."
      },
      {
        "text": "The only way is to remove the policy, create the resource and add the policy back",
        "explanation": "Aby utworzyć zasób blokowany przez Azure Policy, trzeba zmienić, usunąć albo wyłączyć przypisanie polityki, a potem ewentualnie przywrócić ją po wdrożeniu."
      }
    ],
    "correctAnswer": "The only way is to remove the policy, create the resource and add the policy back",
    "generalExplanation": "Azure Policy egzekwuje reguły niezależnie od standardowych ról, więc nie wystarczy być właścicielem lub kontrybutorem. Aby utworzyć zasób blokowany przez politykę, trzeba zmienić lub usunąć tę politykę."
  },
  {
    "id": 37,
    "question": "Which Microsoft Entra ID feature provides an additional sign-in factor - often using a mobile phone (for example, the Microsoft Authenticator app) - to verify a user's identity when they sign in?",
    "options": [
      {
        "text": "Multi-Factor Authentication",
        "explanation": "Multi-Factor Authentication wymaga dodatkowego czynnika poza hasłem, np. aplikacji Authenticator lub telefonu. Dzięki temu samo hasło nie wystarcza do logowania."
      },
      {
        "text": "Advanced Threat Protection (ATP)",
        "explanation": "Advanced Threat Protection to pojęcie związane z ochroną przed zagrożeniami, a nie sam mechanizm dodatkowego czynnika logowania."
      },
      {
        "text": "Azure Information Protection (AIP)",
        "explanation": "Azure Information Protection służy do klasyfikowania i ochrony informacji oraz dokumentów. Nie jest mechanizmem MFA przy logowaniu."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud zabezpiecza zasoby i środowiska chmurowe. Nie jest funkcją dodatkowego czynnika logowania użytkownika."
      }
    ],
    "correctAnswer": "Multi-Factor Authentication",
    "generalExplanation": "Multi-Factor Authentication wymaga dodatkowego czynnika logowania poza hasłem, często przez telefon lub aplikację Microsoft Authenticator. Zmniejsza to ryzyko przejęcia konta samym hasłem."
  },
  {
    "id": 38,
    "question": "A company is migrating its workloads to Azure to reduce the risk of downtime caused by hardware failures. Which benefit of cloud computing does this scenario demonstrate?",
    "options": [
      {
        "text": "Rapid deployment",
        "explanation": "Rapid deployment oznacza szybkie wdrażanie zasobów i aplikacji. Scenariusz mówi o ograniczeniu przestojów po awariach sprzętu."
      },
      {
        "text": "High availability and fault tolerance",
        "explanation": "High availability i fault tolerance zmniejszają ryzyko niedostępności przez redundancję i odporność na awarie sprzętu."
      },
      {
        "text": "Elasticity",
        "explanation": "Elasticity oznacza skalowanie zasobów zgodnie z obciążeniem. Nie jest główną korzyścią opisaną jako ochrona przed awariami sprzętu."
      },
      {
        "text": "Capital expenditure reduction (CapEx to OpEx)",
        "explanation": "CapEx to OpEx dotyczy finansów i unikania zakupu sprzętu. Scenariusz dotyczy niezawodności, nie modelu kosztowego."
      }
    ],
    "correctAnswer": "High availability and fault tolerance",
    "generalExplanation": "Migracja do Azure w celu ograniczenia przestojów po awariach sprzętu dotyczy wysokiej dostępności i odporności na błędy. Chmura pozwala projektować rozwiązania z redundancją i szybszym przełączaniem."
  },
  {
    "id": 39,
    "question": "An administrator prefers to manage Azure resources through a web-based graphical interface rather than using command-line tools. Which tool should they use?",
    "options": [
      {
        "text": "Azure Command-Line Interface (CLI)",
        "explanation": "Azure CLI to narzędzie wiersza poleceń. Nie spełnia wymagania zarządzania przez webowy interfejs graficzny."
      },
      {
        "text": "Azure Cloud Shell",
        "explanation": "Azure Cloud Shell uruchamia CLI lub PowerShell w przeglądarce. Nadal jest narzędziem konsolowym, nie graficznym panelem zarządzania."
      },
      {
        "text": "Azure PowerShell",
        "explanation": "Azure PowerShell to moduły i komendy do automatyzacji. Nie jest webowym GUI."
      },
      {
        "text": "Azure Portal",
        "explanation": "Azure Portal to webowy graficzny interfejs do tworzenia, konfigurowania i monitorowania zasobów Azure."
      }
    ],
    "correctAnswer": "Azure Portal",
    "generalExplanation": "Azure Portal jest webowym, graficznym interfejsem do zarządzania zasobami Azure. CLI, Cloud Shell i PowerShell są narzędziami wiersza poleceń lub skryptowymi."
  },
  {
    "id": 40,
    "question": "You discover an Azure service labeled 'private preview'. Which of the following statements about services in private preview is true?",
    "options": [
      {
        "text": "All Azure customers automatically have access to services in private preview mode.",
        "explanation": "Private preview nie jest automatycznie dostępne dla wszystkich klientów. Dostęp jest ograniczony i zwykle wymaga zaproszenia lub zgody."
      },
      {
        "text": "Services in private preview mode are generally available (GA) and can be used in production environments.",
        "explanation": "Private preview nie oznacza general availability. Usługa jest jeszcze testowana i zwykle nie powinna być traktowana jak produkcyjnie gotowa dla wszystkich."
      },
      {
        "text": "Services in private preview mode have the same level of support and SLA guarantees as generally available services.",
        "explanation": "Usługi w private preview zwykle nie mają takiego samego wsparcia i gwarancji SLA jak usługi GA. Warunki są bardziej ograniczone."
      },
      {
        "text": "Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.",
        "explanation": "Private preview oznacza ograniczony dostęp do testów usługi, najczęściej przez zaproszenie lub akceptację Microsoft."
      }
    ],
    "correctAnswer": "Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.",
    "generalExplanation": "Private preview oznacza ograniczony dostęp, zwykle przez zaproszenie albo zgodę Microsoft. Taka usługa nie jest jeszcze ogólnie dostępna i nie ma standardowych gwarancji jak GA."
  },
  {
    "id": 41,
    "question": "Which type of container does Azure Monitor use to collect and store log (telemetry) data from multiple Azure resources?",
    "options": [
      {
        "text": "Append Blob Storage",
        "explanation": "Append Blob Storage może przechowywać dane dopisywane sekwencyjnie, ale nie jest podstawowym kontenerem analitycznym Azure Monitor dla logów."
      },
      {
        "text": "Managed Storage",
        "explanation": "Managed Storage nie jest właściwą nazwą kontenera używanego przez Azure Monitor do zapytań i analizy logów."
      },
      {
        "text": "Azure Monitor account",
        "explanation": "Azure Monitor account nie jest standardową odpowiedzią na pytanie o miejsce przechowywania logów telemetrycznych. Do tego służy Log Analytics Workspace."
      },
      {
        "text": "Log Analytics Workspace",
        "explanation": "Log Analytics Workspace przechowuje logi i telemetrię zbieraną przez Azure Monitor oraz umożliwia zapytania KQL, analizy i alerty."
      }
    ],
    "correctAnswer": "Log Analytics Workspace",
    "generalExplanation": "Log Analytics Workspace jest kontenerem, w którym Azure Monitor zbiera i przechowuje dane telemetryczne oraz logi. Umożliwia analizę danych z wielu zasobów."
  },
  {
    "id": 42,
    "question": "Which Azure service provides personalized recommendations to help you reduce costs on your subscription?",
    "options": [
      {
        "text": "Azure Dashboard",
        "explanation": "Azure Dashboard to konfigurowalny widok w portalu. Nie analizuje samodzielnie subskrypcji i nie generuje rekomendacji kosztowych."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor analizuje konfigurację i użycie zasobów, a następnie daje rekomendacje dotyczące kosztów, bezpieczeństwa, wydajności, niezawodności i operacji."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud skupia się na bezpieczeństwie i ochronie przed zagrożeniami. Nie jest główną usługą rekomendacji kosztowych."
      },
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health informuje o awariach, pracach serwisowych i stanie usług Azure. Nie analizuje kosztów Twojej subskrypcji."
      }
    ],
    "correctAnswer": "Azure Advisor",
    "generalExplanation": "Azure Advisor analizuje użycie subskrypcji i daje spersonalizowane rekomendacje, w tym dotyczące redukcji kosztów. Azure Dashboard jest tylko widokiem, a Service Health informuje o stanie usług."
  },
  {
    "id": 43,
    "question": "In Azure high-availability design, what is the primary purpose of Availability Zones?",
    "options": [
      {
        "text": "They represent certain server racks within individual data centers, specifically designed by Azure for higher uptime.",
        "explanation": "Availability Zones nie są po prostu wybranymi szafami w jednym data center. To osobne, fizycznie odseparowane lokalizacje w regionie."
      },
      {
        "text": "They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.",
        "explanation": "Availability Zones pozwalają rozmieszczać zasoby w różnych fizycznych strefach w regionie, co zwiększa odporność na awarię pojedynczej lokalizacji."
      },
      {
        "text": "They are synonymous with an Azure region.",
        "explanation": "Region Azure składa się z jednej lub wielu lokalizacji geograficznych, a Availability Zone jest jednostką wewnątrz regionu. To nie są synonimy."
      },
      {
        "text": "They serve as a folder structure in Azure used for organizing resources such as databases, virtual machines, and virtual networks.",
        "explanation": "Folderową organizację zasobów zapewniają raczej Resource Groups i struktura subskrypcji. Availability Zones dotyczą fizycznego rozmieszczenia infrastruktury."
      }
    ],
    "correctAnswer": "They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.",
    "generalExplanation": "Availability Zones pozwalają świadomie rozmieszczać zasoby w oddzielnych centrach danych w ramach regionu, aby zwiększyć dostępność. Nie są folderem zasobów ani synonimem regionu."
  },
  {
    "id": 44,
    "question": "Can you grant someone access to your Azure subscription without sharing your username and password (for example, by assigning them a role through Azure Active Directory/role-based access control)?",
    "options": [
      {
        "text": "YES",
        "explanation": "Tak, dostęp można nadać przez role i RBAC, korzystając z tożsamości użytkownika w Microsoft Entra ID. Nie trzeba udostępniać własnego loginu ani hasła."
      },
      {
        "text": "NO",
        "explanation": "Nie trzeba przekazywać własnych poświadczeń, aby ktoś zarządzał subskrypcją. Udostępnianie hasła byłoby złą praktyką bezpieczeństwa; używa się ról i uprawnień."
      }
    ],
    "correctAnswer": "YES",
    "generalExplanation": "Dostęp do subskrypcji można nadać innym osobom przez role i RBAC bez udostępniania loginu ani hasła. To standardowy sposób bezpiecznego delegowania uprawnień."
  },
  {
    "id": 45,
    "question": "Your company stores data in Azure Blob Storage and wants to ensure that this data is automatically encrypted when saved and decrypted only when accessed by authorized users. Which Azure feature provides this capability by default?",
    "options": [
      {
        "text": "Azure Storage Service Encryption (SSE)",
        "explanation": "Azure Storage Service Encryption automatycznie szyfruje dane w Azure Storage w spoczynku i odszyfrowuje je przy autoryzowanym dostępie."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "Azure Key Vault przechowuje i chroni klucze, sekrety oraz certyfikaty. Może współpracować ze szyfrowaniem, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
      },
      {
        "text": "Azure Disk Encryption",
        "explanation": "Azure Disk Encryption dotyczy szyfrowania dysków maszyn wirtualnych. Nie jest domyślnym mechanizmem szyfrowania danych w Azure Blob Storage."
      },
      {
        "text": "Azure Information Protection",
        "explanation": "Azure Information Protection służy do klasyfikowania i ochrony dokumentów oraz informacji. Nie jest domyślnym szyfrowaniem danych zapisanych w Blob Storage."
      }
    ],
    "correctAnswer": "Azure Storage Service Encryption (SSE)",
    "generalExplanation": "Azure Storage Service Encryption domyślnie szyfruje dane zapisywane w Azure Storage i odszyfrowuje je przy autoryzowanym dostępie. Key Vault zarządza sekretami i kluczami, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
  },
  {
    "id": 46,
    "question": "Which of the following major cloud providers has the largest global footprint in terms of publicly available regions where customers can provision virtual machines and other infrastructure?",
    "options": [
      {
        "text": "Amazon AWS",
        "explanation": "Amazon AWS ma bardzo duży globalny zasięg, ale w kontekście tego pytania jako największy footprint wskazywany jest Microsoft Azure."
      },
      {
        "text": "Google Cloud Platform",
        "explanation": "Google Cloud Platform ma wiele regionów, ale nie jest odpowiedzią wskazaną tutaj jako dostawca z największą liczbą publicznie dostępnych regionów."
      },
      {
        "text": "Microsoft Azure",
        "explanation": "Microsoft Azure jest wskazany jako dostawca z największym globalnym zasięgiem regionów dostępnych do uruchamiania infrastruktury."
      }
    ],
    "correctAnswer": "Microsoft Azure",
    "generalExplanation": "Microsoft Azure ma bardzo szeroki globalny zasięg regionów, w których klienci mogą uruchamiać infrastrukturę. W kontekście tego pytania poprawną odpowiedzią jest Azure."
  },
  {
    "id": 47,
    "question": "Which of the following is the primary graphical user interface for managing Azure resources?",
    "options": [
      {
        "text": "PowerShell",
        "explanation": "PowerShell to narzędzie skryptowe i konsolowe do automatyzacji Azure. Nie jest głównym graficznym interfejsem użytkownika."
      },
      {
        "text": "Azure Portal",
        "explanation": "Azure Portal to podstawowy graficzny interfejs webowy do zarządzania zasobami Azure."
      },
      {
        "text": "Azure Storage Explorer",
        "explanation": "Azure Storage Explorer to narzędzie graficzne wyspecjalizowane w pracy z usługami Storage. Nie jest głównym GUI dla wszystkich zasobów Azure."
      },
      {
        "text": "Remote Desktop Protocol (RDP)",
        "explanation": "Remote Desktop Protocol służy do zdalnego łączenia się z maszyną, np. Windows VM. Nie jest interfejsem zarządzania Azure jako platformą."
      }
    ],
    "correctAnswer": "Azure Portal",
    "generalExplanation": "Azure Portal jest podstawowym graficznym interfejsem do zarządzania zasobami Azure. PowerShell jest narzędziem skryptowym, Storage Explorer służy głównie do storage, a RDP do zdalnego pulpitu."
  },
  {
    "id": 48,
    "question": "A developer wants to deploy a custom web application without managing the underlying operating system or web server. Which Azure service model best meets this requirement?",
    "options": [
      {
        "text": "Platform as a Service (PaaS)",
        "explanation": "PaaS pozwala wdrożyć własną aplikację bez zarządzania systemem operacyjnym i serwerem webowym. Dostawca utrzymuje platformę, a deweloper skupia się na kodzie."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "SaaS to gotowa aplikacja dla użytkownika końcowego. Deweloper nie wdraża tam własnej aplikacji webowej w taki sposób jak w PaaS."
      },
      {
        "text": "Functions as a Service (FaaS)",
        "explanation": "FaaS uruchamia pojedyncze funkcje w reakcji na zdarzenia. Może być użyteczne, ale pytanie opisuje ogólne wdrożenie custom web application bez zarządzania serwerem, czyli PaaS."
      },
      {
        "text": "Infrastructure as a Service (IaaS)",
        "explanation": "IaaS daje maszyny wirtualne i infrastrukturę, ale użytkownik nadal zarządza systemem operacyjnym i serwerem webowym. To nie spełnia warunku braku zarządzania OS/web server."
      }
    ],
    "correctAnswer": "Platform as a Service (PaaS)",
    "generalExplanation": "PaaS jest najlepszym modelem dla własnej aplikacji webowej bez zarządzania systemem operacyjnym i serwerem WWW. Dostawca obsługuje platformę, a deweloper wdraża aplikację."
  },
  {
    "id": 49,
    "question": "Which of the following is a characteristic of the Azure Blob Storage cool access tier?",
    "options": [
      {
        "text": "Cheapest option when it comes to bandwidth costs to access your files",
        "explanation": "Cool tier nie jest najtańszy pod względem kosztu odczytu i transferu. Jest tańszy w przechowywaniu, ale droższy przy częstym dostępie niż hot tier."
      },
      {
        "text": "Significant delays in accessing your data, up to several hours",
        "explanation": "Opóźnienia rzędu wielu godzin dotyczą raczej archiwalnych warstw typu Archive. Cool tier nadal jest dostępny online, tylko zoptymalizowany pod rzadszy dostęp."
      },
      {
        "text": "Most expensive option when it comes to bandwidth cost to access your files",
        "explanation": "Cool tier może mieć wyższe koszty dostępu niż hot tier, ale nie jest definiowany jako najdroższa opcja transferu. Kluczową cechą jest niższy koszt przechowywania."
      },
      {
        "text": "Much cheaper to store your files than the hot access tier",
        "explanation": "Cool access tier jest tańszy do przechowywania danych rzadko używanych niż hot tier, ale zwykle ma wyższy koszt dostępu do tych danych."
      }
    ],
    "correctAnswer": "Much cheaper to store your files than the hot access tier",
    "generalExplanation": "Cool access tier w Azure Blob Storage obniża koszt przechowywania danych, które są rzadko odczytywane. Dostęp nie jest tak tani jak w hot tier, ale samo magazynowanie jest tańsze."
  },
  {
    "id": 50,
    "question": "You subscribe to Azure DDoS Protection at the IP protection tier (DDoS Protection Standard), which provides advanced protection for public IPs. Which type of DDoS attack is NOT mitigated by this service?",
    "options": [
      {
        "text": "Network (L3) level attacks",
        "explanation": "Ataki sieciowe L3, np. wolumetryczne zalewanie ruchu na poziomie sieci, są typowym obszarem ochrony Azure DDoS Protection."
      },
      {
        "text": "Transport (L4) level attacks",
        "explanation": "Ataki transportowe L4, np. TCP/UDP flood, są objęte ochroną DDoS na poziomie infrastruktury sieciowej."
      },
      {
        "text": "Application (L7) level attacks",
        "explanation": "Ataki aplikacyjne L7 celują w logikę aplikacji HTTP/API i nie są mitygowane przez samą ochronę DDoS na poziomie IP. Do nich używa się m.in. WAF i zabezpieczeń aplikacyjnych."
      }
    ],
    "correctAnswer": "Application (L7) level attacks",
    "generalExplanation": "Azure DDoS Protection na poziomie IP chroni przed atakami sieciowymi i transportowymi L3/L4. Nie mityguje ataków aplikacyjnych L7, które wymagają innych mechanizmów ochrony."
  }
];

export interface QuestionRange {
  id: number;
  label: string;
  startId: number;
  endId: number;
}

export const questionRanges: QuestionRange[] = [
  {
    "id": 1,
    "label": "Questions 1 - 10",
    "startId": 1,
    "endId": 10
  },
  {
    "id": 2,
    "label": "Questions 11 - 20",
    "startId": 11,
    "endId": 20
  },
  {
    "id": 3,
    "label": "Questions 21 - 30",
    "startId": 21,
    "endId": 30
  },
  {
    "id": 4,
    "label": "Questions 31 - 40",
    "startId": 31,
    "endId": 40
  },
  {
    "id": 5,
    "label": "Questions 41 - 50",
    "startId": 41,
    "endId": 50
  }
];

export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  if (selectedRangeIds.length === 0) return questions;

  const selectedRanges = questionRanges.filter(range => selectedRangeIds.includes(range.id));

  return questions.filter(question =>
    selectedRanges.some(range => question.id >= range.startId && question.id <= range.endId)
  );
};
