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
  },
  {
    "id": 51,
    "question": "What would be a good reason to have multiple Azure subscriptions?",
    "options": [
      {
        "text": "There is one person/credit card paying for resources, but many people who have accounts in Azure, and you need to separate out resources between clients so that there is absolutely no chance of resources being exposed between them.",
        "explanation": "Wiele subskrypcji ma sens, gdy trzeba twardo rozdzielić zasoby, dostęp i ryzyko między klientami. Osobne subskrypcje zmniejszają szansę przypadkowego ujawnienia zasobów jednego klienta drugiemu."
      },
      {
        "text": "There is one person/credit card paying for resources, and only one person who logs into Azure to manage the resources, but you want to be able to know which resources are used for which client project.",
        "explanation": "Do samego oznaczania, które zasoby należą do którego projektu, zwykle wystarczą resource groups, tagi i dobre nazewnictwo. Osobna subskrypcja jest mocniejszym mechanizmem, używanym głównie przy rozdzieleniu dostępu, odpowiedzialności lub billingu."
      }
    ],
    "correctAnswer": "There is one person/credit card paying for resources, but many people who have accounts in Azure, and you need to separate out resources between clients so that there is absolutely no chance of resources being exposed between them.",
    "generalExplanation": "Wiele subskrypcji ma sens, gdy trzeba twardo rozdzielić zasoby, dostęp i ryzyko między klientami. Osobne subskrypcje zmniejszają szansę przypadkowego ujawnienia zasobów jednego klienta drugiemu."
  },
  {
    "id": 52,
    "question": "Your organization has several teams deploying resources in Azure. You need a way to apply consistent naming conventions and restrict which regions resources can be created in. Which Azure feature should you use?",
    "options": [
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy egzekwuje reguły dla zasobów, np. wymagane nazwy, tagi, dozwolone regiony albo typy zasobów. To właściwe narzędzie do narzucania standardów organizacji."
      },
      {
        "text": "Microsoft Purview Compliance Manager",
        "explanation": "Microsoft Purview Compliance Manager pomaga oceniać zgodność i zarządzać wymaganiami compliance, ale nie blokuje tworzenia zasobów w złych regionach ani nie wymusza nazw zasobów."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor daje rekomendacje optymalizacyjne, np. kosztowe, wydajnościowe i bezpieczeństwa. Nie służy do egzekwowania reguł podczas tworzenia zasobów."
      },
      {
        "text": "Azure Resource Locks",
        "explanation": "Azure Resource Locks chronią zasób przed usunięciem lub zmianą. Nie wymuszają konwencji nazw ani listy dozwolonych regionów."
      }
    ],
    "correctAnswer": "Azure Policy",
    "generalExplanation": "Azure Policy egzekwuje reguły dla zasobów, np. wymagane nazwy, tagi, dozwolone regiony albo typy zasobów. To właściwe narzędzie do narzucania standardów organizacji."
  },
  {
    "id": 53,
    "question": "An organization notices that several Azure resources in the West Europe region are unavailable. The administrator wants to: Confirm whether Microsoft is aware of an outage in that region, and Receive alerts automatically if similar incidents occur in the future. Which Azure service should they use?",
    "options": [
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health pokazuje incydenty dotyczące usług Azure, wpływ na Twoje zasoby i pozwala ustawić alerty o podobnych problemach w przyszłości."
      },
      {
        "text": "Microsoft Purview Compliance Manager",
        "explanation": "Microsoft Purview Compliance Manager dotyczy zgodności i zarządzania ryzykiem compliance. Nie informuje o awariach regionalnych usług Azure."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor rekomenduje usprawnienia zasobów, ale nie jest kanałem komunikacji o awariach regionów Azure."
      },
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor monitoruje Twoje aplikacje i zasoby, ale nie jest najlepszym miejscem do sprawdzania, czy Microsoft potwierdził regionalny incydent usługi."
      }
    ],
    "correctAnswer": "Azure Service Health",
    "generalExplanation": "Azure Service Health pokazuje incydenty dotyczące usług Azure, wpływ na Twoje zasoby i pozwala ustawić alerty o podobnych problemach w przyszłości."
  },
  {
    "id": 54,
    "question": "Which Azure service distributes incoming network traffic across multiple identical virtual machines so they share the workload and respond to requests?",
    "options": [
      {
        "text": "Virtual Network",
        "explanation": "Virtual Network zapewnia prywatną sieć i izolację zasobów w Azure. Sama VNet nie rozdziela ruchu między wiele maszyn wirtualnych."
      },
      {
        "text": "Load Balancer or Application Gateway",
        "explanation": "Load Balancer rozdziela ruch na warstwie sieciowej, a Application Gateway na warstwie aplikacyjnej. Obie usługi mogą kierować żądania do wielu instancji, aby dzieliły obciążenie."
      },
      {
        "text": "Azure Logic Apps",
        "explanation": "Azure Logic Apps automatyzuje procesy i integracje między usługami. Nie służy do równoważenia ruchu sieciowego do maszyn wirtualnych."
      },
      {
        "text": "Azure App Services",
        "explanation": "Azure App Service hostuje aplikacje webowe jako PaaS. Skaluje aplikacje App Service, ale nie jest usługą do rozdzielania ruchu między identyczne VM."
      }
    ],
    "correctAnswer": "Load Balancer or Application Gateway",
    "generalExplanation": "Load Balancer rozdziela ruch na warstwie sieciowej, a Application Gateway na warstwie aplikacyjnej. Obie usługi mogą kierować żądania do wielu instancji, aby dzieliły obciążenie."
  },
  {
    "id": 55,
    "question": "How do you get access to services in Private Preview mode?",
    "options": [
      {
        "text": "You must agree to a terms of use first.",
        "explanation": "Akceptacja warunków może być elementem używania preview, ale private preview zwykle wymaga najpierw uzyskania dostępu lub zaproszenia."
      },
      {
        "text": "You cannot use private preview services.",
        "explanation": "Private preview nie jest publicznie dostępne, ale nie oznacza, że nikt nie może go używać. Wybrani klienci mogą otrzymać dostęp po zgłoszeniu."
      },
      {
        "text": "You must apply to use them.",
        "explanation": "Private preview wymaga zgłoszenia lub zaproszenia. Dostawca kontroluje, kto testuje usługę przed publicznym preview albo general availability."
      },
      {
        "text": "They are available in the marketplace. You simply use them.",
        "explanation": "Usługi private preview nie są po prostu dostępne w marketplace dla każdego. Dostęp jest ograniczony do wybranych uczestników testów."
      }
    ],
    "correctAnswer": "You must apply to use them.",
    "generalExplanation": "Private preview wymaga zgłoszenia lub zaproszenia. Dostawca kontroluje, kto testuje usługę przed publicznym preview albo general availability."
  },
  {
    "id": 56,
    "question": "Which concept describes the ability to run your applications and access data in another environment quickly after an outage or failure?",
    "options": [
      {
        "text": "Azure Devops",
        "explanation": "Azure DevOps pomaga budować, testować i wdrażać oprogramowanie. Może wspierać procesy recovery, ale nie jest samą koncepcją odzyskiwania działania po awarii."
      },
      {
        "text": "Reproducible deployments",
        "explanation": "Reproducible deployments oznaczają możliwość odtworzenia takiego samego środowiska wdrożeniowego. To pomaga, ale nie obejmuje całej strategii utrzymania działania biznesu po awarii."
      },
      {
        "text": "Business Continuity / Disaster Recovery (BC/DR)",
        "explanation": "Business Continuity i Disaster Recovery opisują zdolność utrzymania lub szybkiego odtworzenia działania aplikacji oraz dostępu do danych po awarii."
      },
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy egzekwuje reguły governance dla zasobów. Nie opisuje zdolności uruchomienia aplikacji w innym środowisku po awarii."
      }
    ],
    "correctAnswer": "Business Continuity / Disaster Recovery (BC/DR)",
    "generalExplanation": "Business Continuity i Disaster Recovery opisują zdolność utrzymania lub szybkiego odtworzenia działania aplikacji oraz dostępu do danych po awarii."
  },
  {
    "id": 57,
    "question": "Administrators use Remote Desktop Protocol (RDP) to access Windows VMs and SSH to access Linux VMs. What is the recommended approach to secure these management protocols in Azure?",
    "options": [
      {
        "text": "Ensure strong passwords on your Windows admin accounts",
        "explanation": "Silne hasła są ważne, ale publicznie otwarte RDP nadal jest dużym ryzykiem. Ataki brute force i skanowanie internetu często celują właśnie w takie porty."
      },
      {
        "text": "Do not enable SSH access for Linux servers",
        "explanation": "Wyłączenie SSH całkowicie utrudnia lub uniemożliwia administrację Linux VM. Lepszym podejściem jest bezpieczna ścieżka dostępu, nie ślepe wyłączanie zarządzania."
      },
      {
        "text": "Disable RDP access using the Windows Services control panel admin tool",
        "explanation": "Wyłączenie usługi RDP może odciąć administrację Windows VM. Zalecenie dotyczy ograniczenia publicznego dostępu, np. przez Bastion, jump box lub ścisłe zakresy IP."
      },
      {
        "text": "Do not allow public Internet access over the RDP and SSH ports directly to the server. Instead use a secure server like Bastion to control access to the servers behind.",
        "explanation": "Najbezpieczniej nie wystawiać RDP i SSH bezpośrednio do internetu. Azure Bastion lub jump box kontroluje dostęp i ogranicza powierzchnię ataku."
      }
    ],
    "correctAnswer": "Do not allow public Internet access over the RDP and SSH ports directly to the server. Instead use a secure server like Bastion to control access to the servers behind.",
    "generalExplanation": "Najbezpieczniej nie wystawiać RDP i SSH bezpośrednio do internetu. Azure Bastion lub jump box kontroluje dostęp i ogranicza powierzchnię ataku."
  },
  {
    "id": 58,
    "question": "A company runs two web servers in Azure across different Availability Zones in the same region. Which benefit does this configuration primarily provide?",
    "options": [
      {
        "text": "Simplified network routing",
        "explanation": "Availability Zones mogą wymagać przemyślanego routingu, ale ich główna wartość nie polega na uproszczeniu sieci. Chodzi o odporność na awarię lokalizacji."
      },
      {
        "text": "Fault tolerance against datacenter failure",
        "explanation": "Różne Availability Zones są fizycznie oddzielone w tym samym regionie. Jeśli jedno centrum danych ma awarię, druga strefa może nadal obsługiwać aplikację."
      },
      {
        "text": "Lower latency",
        "explanation": "Strefy dostępności nie są przede wszystkim mechanizmem obniżania opóźnień. Czasem mogą nawet dodać trochę latencji między strefami."
      },
      {
        "text": "Reduced subscription costs",
        "explanation": "Uruchamianie zasobów w wielu strefach zwykle nie zmniejsza kosztów subskrypcji. Często płaci się za dodatkową redundancję i większą niezawodność."
      }
    ],
    "correctAnswer": "Fault tolerance against datacenter failure",
    "generalExplanation": "Różne Availability Zones są fizycznie oddzielone w tym samym regionie. Jeśli jedno centrum danych ma awarię, druga strefa może nadal obsługiwać aplikację."
  },
  {
    "id": 59,
    "question": "Your organization needs to ensure that all Azure resources comply with internal naming conventions and can only be deployed in approved regions. Which Azure service should you use?",
    "options": [
      {
        "text": "Azure Resource Manager (ARM)",
        "explanation": "Azure Resource Manager zarządza wdrażaniem i cyklem życia zasobów, ale sam nie jest mechanizmem wymuszania polityk nazw i regionów."
      },
      {
        "text": "Microsoft Purview Governance Portal",
        "explanation": "Microsoft Purview Governance Portal dotyczy zarządzania danymi i ich ładem. Nie egzekwuje reguł tworzenia zasobów Azure, takich jak nazwy i regiony."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud skupia się na bezpieczeństwie, rekomendacjach i ochronie przed zagrożeniami. Nie jest narzędziem governance do wymuszania naming convention."
      },
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy pozwala wymuszać reguły zgodności dla zasobów, np. dozwolone regiony, wymagane tagi i standardy konfiguracji."
      }
    ],
    "correctAnswer": "Azure Policy",
    "generalExplanation": "Azure Policy pozwala wymuszać reguły zgodności dla zasobów, np. dozwolone regiony, wymagane tagi i standardy konfiguracji."
  },
  {
    "id": 60,
    "question": "Which of the following scenarios would Azure Policy be a recommended method for enforcement?",
    "options": [
      {
        "text": "Require a virtual machine to always update to the latest security patches",
        "explanation": "Aktualizacje poprawek bezpieczeństwa VM lepiej obsługują narzędzia patch management, Azure Update Manager lub automatyzacja. Azure Policy może audytować stan, ale nie jest głównym mechanizmem samego patchowania."
      },
      {
        "text": "Allow only one specific roles of users to have access to a resource group",
        "explanation": "Dostęp użytkowników do resource group powinien być kontrolowany przez RBAC. Azure Policy dotyczy zgodności zasobów, a nie przypisywania ról użytkownikom."
      },
      {
        "text": "Add an additional prompt when creating a resource without a specific tag to ask the user if they are really sure they want to continue?",
        "explanation": "Azure Policy nie wyświetla interaktywnych pytań użytkownikowi podczas tworzenia zasobu. Może blokować, audytować albo modyfikować wdrożenie zgodnie z regułami."
      },
      {
        "text": "Prevent certain Azure Virtual Machine instance types from being used in a resource group",
        "explanation": "Azure Policy dobrze nadaje się do blokowania niedozwolonych typów i rozmiarów VM w resource group lub subskrypcji."
      }
    ],
    "correctAnswer": "Prevent certain Azure Virtual Machine instance types from being used in a resource group",
    "generalExplanation": "Azure Policy dobrze nadaje się do blokowania niedozwolonych typów i rozmiarów VM w resource group lub subskrypcji."
  },
  {
    "id": 61,
    "question": "What is the Azure Service Level Agreement (SLA) uptime guarantee for two or more Virtual Machines deployed in the same Availability Set?",
    "options": [
      {
        "text": "99.95%",
        "explanation": "Dwie lub więcej VM w tym samym Availability Set mają SLA 99,95%. Availability Set rozdziela VM na domeny awarii i aktualizacji."
      },
      {
        "text": "99.99%",
        "explanation": "99,99% dotyczy scenariusza z maszynami rozłożonymi między Availability Zones, a nie tylko Availability Set."
      },
      {
        "text": "99.90%",
        "explanation": "99,90% jest niższą wartością niż SLA dla co najmniej dwóch VM w Availability Set."
      },
      {
        "text": "100%",
        "explanation": "100% SLA nie jest oferowane dla tego scenariusza. Azure podaje konkretne procenty i warunki SLA."
      }
    ],
    "correctAnswer": "99.95%",
    "generalExplanation": "Dwie lub więcej VM w tym samym Availability Set mają SLA 99,95%. Availability Set rozdziela VM na domeny awarii i aktualizacji."
  },
  {
    "id": 62,
    "question": "What is a primary benefit of using a command-line tool (PowerShell or the Azure CLI) instead of the Azure portal?",
    "options": [
      {
        "text": "Automation",
        "explanation": "Największą zaletą CLI i PowerShell jest automatyzacja. Skrypty pozwalają powtarzać te same operacje szybko i spójnie."
      },
      {
        "text": "Quicker to deploy VMs",
        "explanation": "CLI może przyspieszyć wdrożenia po przygotowaniu skryptu, ale samo jednorazowe kliknięcie VM w portalu bywa podobnie szybkie. Kluczowa przewaga to powtarzalność i automatyzacja."
      },
      {
        "text": "Cheaper",
        "explanation": "Użycie CLI nie sprawia, że Azure jest tańszy. Koszt zależy od zasobów, regionów, SKU i czasu użycia."
      }
    ],
    "correctAnswer": "Automation",
    "generalExplanation": "Największą zaletą CLI i PowerShell jest automatyzacja. Skrypty pozwalają powtarzać te same operacje szybko i spójnie."
  },
  {
    "id": 63,
    "question": "Your company hosts a global web application that serves large media files and static website assets. Users in different regions report slow loading times. How can Azure Content Delivery Network (CDN) improve performance for these users?",
    "options": [
      {
        "text": "By encrypting traffic between users and Azure Storage",
        "explanation": "Szyfrowanie ruchu jest ważne, ale nie jest podstawowym mechanizmem CDN poprawiającym szybkość ładowania statycznych plików."
      },
      {
        "text": "By caching static content such as images, videos, and scripts at edge locations closer to users",
        "explanation": "CDN cacheuje statyczne treści na edge locations bliżej użytkowników. Dzięki temu obrazy, filmy i skrypty są pobierane szybciej z najbliższego punktu."
      },
      {
        "text": "By increasing the virtual machine size that hosts the web application",
        "explanation": "Zwiększenie rozmiaru VM może poprawić moc serwera źródłowego, ale nie skraca dystansu geograficznego między użytkownikiem a treścią."
      },
      {
        "text": "By moving the application’s compute resources into each user’s local region",
        "explanation": "Przeniesienie compute do każdego regionu byłoby kosztowne i złożone. CDN rozwiązuje problem statycznych zasobów przez dystrybucję cache bez kopiowania całej aplikacji."
      }
    ],
    "correctAnswer": "By caching static content such as images, videos, and scripts at edge locations closer to users",
    "generalExplanation": "CDN cacheuje statyczne treści na edge locations bliżej użytkowników. Dzięki temu obrazy, filmy i skrypty są pobierane szybciej z najbliższego punktu."
  },
  {
    "id": 64,
    "question": "A company needs secure, private communication between its virtual machines in different subnets within the same Azure region. Which Azure component enables this?",
    "options": [
      {
        "text": "Public IP addresses",
        "explanation": "Public IP umożliwia dostęp z internetu. Nie jest mechanizmem prywatnej komunikacji między VM w subnets."
      },
      {
        "text": "Virtual Network (VNet)",
        "explanation": "Virtual Network zapewnia prywatną przestrzeń sieciową w Azure, w której VM w różnych podsieciach mogą komunikować się bez wychodzenia do publicznego internetu."
      },
      {
        "text": "ExpressRoute",
        "explanation": "ExpressRoute łączy sieć lokalną z Azure prywatnym połączeniem operatorskim. Nie jest potrzebny do komunikacji VM między subnetami w tym samym regionie."
      },
      {
        "text": "VPN Gateway",
        "explanation": "VPN Gateway łączy sieci przez tunel VPN, np. on-premises z Azure. Nie jest podstawowym elementem komunikacji między subnetami w jednej VNet."
      }
    ],
    "correctAnswer": "Virtual Network (VNet)",
    "generalExplanation": "Virtual Network zapewnia prywatną przestrzeń sieciową w Azure, w której VM w różnych podsieciach mogą komunikować się bez wychodzenia do publicznego internetu."
  },
  {
    "id": 65,
    "question": "Your company operates in the European Union and must ensure that customer data stored in Azure meets strict privacy and data protection requirements. Which Azure tool or resource helps you understand how Microsoft services comply with global standards such as GDPR and ISO 27001?",
    "options": [
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "Microsoft Defender for Cloud ocenia bezpieczeństwo i chroni zasoby, ale nie jest głównym narzędziem do śledzenia zgodności z GDPR czy ISO 27001."
      },
      {
        "text": "Microsoft Purview Compliance Manager",
        "explanation": "Microsoft Purview Compliance Manager pomaga zrozumieć i śledzić zgodność z regulacjami oraz standardami, takimi jak GDPR i ISO 27001."
      },
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor zbiera metryki i logi. Nie służy do interpretowania zgodności usług Microsoft z globalnymi standardami prywatności."
      },
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy wymusza reguły na zasobach Azure. Może wspierać compliance technicznie, ale nie jest narzędziem do analizowania zgodności Microsoft z normami."
      }
    ],
    "correctAnswer": "Microsoft Purview Compliance Manager",
    "generalExplanation": "Microsoft Purview Compliance Manager pomaga zrozumieć i śledzić zgodność z regulacjami oraz standardami, takimi jak GDPR i ISO 27001."
  },
  {
    "id": 66,
    "question": "A startup is experimenting with Azure but wants to avoid unexpected costs while testing services. They plan to deploy and delete resources frequently. Which statement best describes how Azure charges for resource usage?",
    "options": [
      {
        "text": "Azure charges only for the resources that are provisioned and running.",
        "explanation": "Azure nalicza opłaty za używane i zaalokowane zasoby zgodnie z ich modelem rozliczania. Jeśli zasób działa lub jest provisioned, zwykle generuje koszt."
      },
      {
        "text": "Azure charges for inactive virtual machines at a reduced rate.",
        "explanation": "Nieaktywne VM mogą nadal generować koszty, zwłaszcza za dyski i zasoby zarezerwowane. Samo wyłączenie z poziomu OS nie zawsze zatrzymuje billing compute."
      },
      {
        "text": "Azure requires a one-time setup fee when creating a new account.",
        "explanation": "Standardowo Azure nie wymaga jednorazowej opłaty za utworzenie konta. Koszty wynikają z użycia usług."
      },
      {
        "text": "Azure bills a fixed monthly fee for each subscription, even if no resources are used.",
        "explanation": "Subskrypcja sama w sobie zwykle nie ma stałej miesięcznej opłaty tylko za istnienie. Płaci się za utworzone i używane zasoby."
      }
    ],
    "correctAnswer": "Azure charges only for the resources that are provisioned and running.",
    "generalExplanation": "Azure nalicza opłaty za używane i zaalokowane zasoby zgodnie z ich modelem rozliczania. Jeśli zasób działa lub jest provisioned, zwykle generuje koszt."
  },
  {
    "id": 67,
    "question": "What is the primary purpose of Microsoft Purview in Azure?",
    "options": [
      {
        "text": "To offer a unified data governance solution for managing on-premises, multi-cloud, and SaaS data.",
        "explanation": "Microsoft Purview zapewnia ujednolicone zarządzanie danymi, katalogowanie, klasyfikację i governance dla danych on-premises, multi-cloud i SaaS."
      },
      {
        "text": "To enable real-time data analytics and visualization.",
        "explanation": "Analiza i wizualizacja danych w czasie rzeczywistym to raczej domena narzędzi analitycznych, takich jak Power BI, Synapse lub usługi streamingowe."
      },
      {
        "text": "To automate the deployment of infrastructure as code (IaC).",
        "explanation": "Infrastructure as Code automatyzuje wdrażanie infrastruktury przez szablony i kod, np. ARM/Bicep/Terraform. To nie jest główny cel Purview."
      },
      {
        "text": "To provide virtual machine scalability and performance monitoring.",
        "explanation": "Skalowanie VM i monitorowanie wydajności dotyczy usług compute oraz monitoringu. Purview koncentruje się na danych i ich governance."
      }
    ],
    "correctAnswer": "To offer a unified data governance solution for managing on-premises, multi-cloud, and SaaS data.",
    "generalExplanation": "Microsoft Purview zapewnia ujednolicone zarządzanie danymi, katalogowanie, klasyfikację i governance dla danych on-premises, multi-cloud i SaaS."
  },
  {
    "id": 68,
    "question": "Which of the following is a disadvantage of using capital expenditures (CapEx) instead of operating expenditures (OpEx)?",
    "options": [
      {
        "text": "You must wait over a period of years to depreciate that investment on your taxes",
        "explanation": "CapEx oznacza duży zakup inwestycyjny, którego koszt księgowo rozlicza się i amortyzuje przez lata, zamiast odliczać natychmiast jako bieżący wydatek."
      },
      {
        "text": "You are not guaranteed to make a profit",
        "explanation": "Brak gwarancji zysku dotyczy prawie każdej inwestycji i działalności. Nie jest specyficzną wadą CapEx względem OpEx."
      },
      {
        "text": "It does not require a lot of up front money",
        "explanation": "CapEx zwykle wymaga dużych pieniędzy z góry, np. zakup sprzętu. Stwierdzenie, że nie wymaga dużego wkładu początkowego, jest odwrotnością typowej cechy CapEx."
      },
      {
        "text": "You can deduct expenses as they occur",
        "explanation": "Możliwość odliczania wydatków na bieżąco jest cechą OpEx, a nie CapEx. Dlatego to nie jest wada CapEx, tylko zaleta modelu operacyjnego."
      }
    ],
    "correctAnswer": "You must wait over a period of years to depreciate that investment on your taxes",
    "generalExplanation": "CapEx oznacza duży zakup inwestycyjny, którego koszt księgowo rozlicza się i amortyzuje przez lata, zamiast odliczać natychmiast jako bieżący wydatek."
  },
  {
    "id": 69,
    "question": "Besides Azure Service Health, where else can you find out any issues that affect the Azure global network that affect you?",
    "options": [
      {
        "text": "Azure will email you",
        "explanation": "Azure może wysyłać powiadomienia, jeśli skonfigurujesz alerty, ale nie jest to osobne miejsce do samodzielnego sprawdzania stanu konkretnej VM."
      },
      {
        "text": "Install the Azure app on your phone",
        "explanation": "Aplikacja mobilna Azure może pomagać w zarządzaniu i powiadomieniach, ale nie jest głównym miejscem diagnostyki stanu zasobu."
      },
      {
        "text": "Azure Updates Blog",
        "explanation": "Azure Updates Blog informuje o nowościach i zmianach w usługach, ale nie jest najlepszym miejscem do sprawdzania bieżącego wpływu incydentu na konkretną VM."
      },
      {
        "text": "Each Virtual Machine has a Resource Health blade",
        "explanation": "Resource Health dla VM pokazuje stan zdrowia konkretnego zasobu i informuje, czy problem platformy Azure wpływa na tę maszynę."
      }
    ],
    "correctAnswer": "Each Virtual Machine has a Resource Health blade",
    "generalExplanation": "Resource Health dla VM pokazuje stan zdrowia konkretnego zasobu i informuje, czy problem platformy Azure wpływa na tę maszynę."
  },
  {
    "id": 70,
    "question": "Which Azure pricing model allows you to pay for compute resources by the second, with no long-term commitment?",
    "options": [
      {
        "text": "Spot Pricing",
        "explanation": "Spot Pricing pozwala tanio używać niewykorzystanej pojemności, ale VM mogą zostać odebrane przez Azure. Nie jest to podstawowy model bez zobowiązań dla stabilnego compute."
      },
      {
        "text": "Enterprise Agreement",
        "explanation": "Enterprise Agreement to umowa zakupowa dla organizacji. Nie opisuje płatności za compute co sekundę bez długoterminowego zobowiązania."
      },
      {
        "text": "Pay-As-You-Go",
        "explanation": "Pay-As-You-Go pozwala płacić za faktyczne użycie zasobów bez długoterminowej rezerwacji, często z rozliczaniem bardzo granularnym."
      },
      {
        "text": "Reserved Instances",
        "explanation": "Reserved Instances wymagają zobowiązania na 1 lub 3 lata w zamian za zniżkę. To przeciwieństwo braku długoterminowego zobowiązania."
      }
    ],
    "correctAnswer": "Pay-As-You-Go",
    "generalExplanation": "Pay-As-You-Go pozwala płacić za faktyczne użycie zasobów bez długoterminowej rezerwacji, często z rozliczaniem bardzo granularnym."
  },
  {
    "id": 71,
    "question": "Which of the following is a good example of a Hybrid cloud?",
    "options": [
      {
        "text": "Your code is a mobile app that runs on iOS and Android phones, but it uses a database in the cloud.",
        "explanation": "Aplikacja mobilna korzystająca z bazy w chmurze używa chmury, ale nie opisuje połączenia prywatnej infrastruktury organizacji z public cloud."
      },
      {
        "text": "Technology that allows you to grow living tissue on top of an exoskeleton, making Terminators impossible to spot among humans.",
        "explanation": "To żartobliwy opis z science fiction, a nie model wdrożenia chmurowego. Hybrid cloud dotyczy mieszania środowisk lokalnych i public cloud."
      },
      {
        "text": "Your users are inside your corporate network but your applications and data are in the cloud.",
        "explanation": "Użytkownicy w sieci firmowej i aplikacje w chmurze mogą oznaczać cloud-hosted app, ale samo to nie pokazuje, że lokalne serwery lub zasoby współpracują z chmurą jako jedno rozwiązanie."
      },
      {
        "text": "A server runs in your own environment, but places files in the cloud so that it can extend the amount of storage it has access to.",
        "explanation": "Serwer lokalny rozszerzający storage przez chmurę to dobry przykład hybrid cloud: część rozwiązania działa on-premises, a część korzysta z public cloud."
      }
    ],
    "correctAnswer": "A server runs in your own environment, but places files in the cloud so that it can extend the amount of storage it has access to.",
    "generalExplanation": "Serwer lokalny rozszerzający storage przez chmurę to dobry przykład hybrid cloud: część rozwiązania działa on-premises, a część korzysta z public cloud."
  },
  {
    "id": 72,
    "question": "A company hosts a web application on Azure App Service (PaaS). They’re unsure which security tasks are their responsibility and which are Microsoft’s. Which action is the company responsible for?",
    "options": [
      {
        "text": "Maintaining physical security of Azure datacenters",
        "explanation": "Fizyczne bezpieczeństwo centrów danych Azure jest odpowiedzialnością Microsoft. Klient korzystający z App Service nie zarządza budynkami ani kontrolą dostępu do data center."
      },
      {
        "text": "Patching the underlying operating system",
        "explanation": "W modelu PaaS Microsoft zarządza bazowym systemem operacyjnym i jego patchowaniem. Klient nie aktualizuje OS pod App Service."
      },
      {
        "text": "Securing the application code from vulnerabilities",
        "explanation": "Kod aplikacji należy do klienta, więc klient odpowiada za podatności, walidację danych, sekrety, zależności i bezpieczne praktyki programistyczne."
      },
      {
        "text": "Applying network isolation between Azure tenants",
        "explanation": "Izolacja sieci między tenantami Azure jest odpowiedzialnością platformy Microsoft. Klient nie zarządza izolacją infrastruktury wielu tenantów."
      }
    ],
    "correctAnswer": "Securing the application code from vulnerabilities",
    "generalExplanation": "Kod aplikacji należy do klienta, więc klient odpowiada za podatności, walidację danych, sekrety, zależności i bezpieczne praktyki programistyczne."
  },
  {
    "id": 73,
    "question": "In what way does Multi-Factor Authentication (MFA) increase the security of a user account?",
    "options": [
      {
        "text": "It requires the user to possess something like their phone to read an SMS, use a mobile app, or biometric identification.",
        "explanation": "MFA wzmacnia logowanie, wymagając dodatkowego czynnika, np. telefonu, aplikacji Authenticator, SMS lub biometrii. Samo hasło nie wystarcza."
      },
      {
        "text": "It requires users to be approved before they can log in for the first time.",
        "explanation": "Zatwierdzenie użytkownika przed pierwszym logowaniem to proces administracyjny lub access workflow. Nie jest definicją MFA."
      },
      {
        "text": "It requires single sign-on functionality",
        "explanation": "Single Sign-On upraszcza dostęp do wielu aplikacji po jednym logowaniu. MFA dotyczy dodatkowej weryfikacji tożsamości, a nie samego SSO."
      },
      {
        "text": "It doesn't. Multi-Factor Authentication is more about access and authentication than account security.",
        "explanation": "MFA bezpośrednio zwiększa bezpieczeństwo konta, bo utrudnia przejęcie dostępu nawet przy znanym haśle."
      }
    ],
    "correctAnswer": "It requires the user to possess something like their phone to read an SMS, use a mobile app, or biometric identification.",
    "generalExplanation": "MFA wzmacnia logowanie, wymagając dodatkowego czynnika, np. telefonu, aplikacji Authenticator, SMS lub biometrii. Samo hasło nie wystarcza."
  },
  {
    "id": 74,
    "question": "Which of the following is NOT a typical characteristic of Azure Functions?",
    "options": [
      {
        "text": "They are designed for long-running backend batch applications that run continuously",
        "explanation": "Azure Functions są przeznaczone głównie do krótkich, zdarzeniowych zadań. Długotrwale działające backendy batch są typowo lepsze dla innych usług."
      },
      {
        "text": "On the consumption plan, there is a monthly free grant, so small workloads can potentially cost nothing",
        "explanation": "Plan consumption ma darmową pulę miesięczną i płatność za wykonania oraz czas działania, więc małe workloady mogą kosztować bardzo mało albo nic."
      },
      {
        "text": "You can edit function code directly in the Azure portal for quick testing and troubleshooting",
        "explanation": "Funkcje można szybko edytować i testować w portalu, co jest wygodne do prostych zmian i diagnostyki."
      },
      {
        "text": "Functions can be triggered by Azure events (for example, when a new file is added to a Storage blob container)",
        "explanation": "Azure Functions mogą być wyzwalane zdarzeniami, np. dodaniem pliku do Blob Storage, wiadomością w kolejce albo wywołaniem HTTP."
      }
    ],
    "correctAnswer": "They are designed for long-running backend batch applications that run continuously",
    "generalExplanation": "Azure Functions są przeznaczone głównie do krótkich, zdarzeniowych zadań. Długotrwale działające backendy batch są typowo lepsze dla innych usług."
  },
  {
    "id": 75,
    "question": "Which optional security feature does Azure Application Gateway provide that the Azure Load Balancer does not?",
    "options": [
      {
        "text": "Web Application Firewall (or WAF)",
        "explanation": "Application Gateway może mieć Web Application Firewall, który chroni aplikacje HTTP/HTTPS przed atakami webowymi. Azure Load Balancer nie oferuje WAF."
      },
      {
        "text": "Azure AD Advanced Information Protection",
        "explanation": "Azure Information Protection dotyczy klasyfikowania i ochrony informacji. Nie jest funkcją Application Gateway."
      },
      {
        "text": "Advanced DDoS Protection",
        "explanation": "Advanced DDoS Protection chroni przed atakami DDoS i jest osobną usługą/warstwą ochrony. Nie jest specyficzną funkcją Application Gateway względem Load Balancer."
      },
      {
        "text": "Multi-Factor Authentication",
        "explanation": "Multi-Factor Authentication dotyczy logowania użytkowników. Nie jest funkcją sieciowego Application Gateway."
      }
    ],
    "correctAnswer": "Web Application Firewall (or WAF)",
    "generalExplanation": "Application Gateway może mieć Web Application Firewall, który chroni aplikacje HTTP/HTTPS przed atakami webowymi. Azure Load Balancer nie oferuje WAF."
  },
  {
    "id": 76,
    "question": "A development team runs test environments in Azure that are used only eight hours per day, Monday through Friday. They want to minimize cost while keeping the environments available during working hours. Which combination of pricing and resource management practices should they use?",
    "options": [
      {
        "text": "Reserved Instances with 3-year terms",
        "explanation": "Reserved Instances na 3 lata są dobre dla stabilnych, stale używanych zasobów. Dla środowisk testowych działających tylko w godzinach pracy mogą być zbyt sztywne."
      },
      {
        "text": "Spot VMs for all environments",
        "explanation": "Spot VMs mogą być tanie, ale mogą zostać odebrane, gdy Azure potrzebuje pojemności. To ryzykowne dla środowisk, które mają być dostępne w ustalonych godzinach."
      },
      {
        "text": "Premium-tier virtual machines with continuous operation",
        "explanation": "Premium-tier VM działające bez przerwy zwiększą koszt, a scenariusz wymaga oszczędzania przez wyłączanie poza godzinami pracy."
      },
      {
        "text": "Pay-as-you-go pricing with automation to stop VMs after hours",
        "explanation": "Pay-as-you-go z automatycznym zatrzymywaniem VM po godzinach pozwala płacić za realny czas użycia i ograniczyć koszt środowisk testowych."
      }
    ],
    "correctAnswer": "Pay-as-you-go pricing with automation to stop VMs after hours",
    "generalExplanation": "Pay-as-you-go z automatycznym zatrzymywaniem VM po godzinach pozwala płacić za realny czas użycia i ograniczyć koszt środowisk testowych."
  },
  {
    "id": 77,
    "question": "Your company requires a disaster recovery strategy ensuring that if one Azure region becomes unavailable, resources and data remain accessible. How does Azure help meet this requirement?",
    "options": [
      {
        "text": "By requiring customers to manually copy data between regions",
        "explanation": "Ręczne kopiowanie danych między regionami jest możliwe, ale nie jest główną zaletą Azure w DR. Azure oferuje usługi replikacji i region pairs."
      },
      {
        "text": "By providing unlimited storage replication across any global region",
        "explanation": "Azure nie zapewnia dowolnej, nieograniczonej replikacji storage do każdego regionu bez ograniczeń. Replikacja ma konkretne typy, koszty i zasady."
      },
      {
        "text": "By replicating data automatically to a paired region within the same geography",
        "explanation": "Azure używa par regionów w tej samej geografii i oferuje mechanizmy replikacji danych, co wspiera dostępność oraz disaster recovery."
      },
      {
        "text": "By mirroring resources between different tenants",
        "explanation": "Mirroring między różnymi tenantami nie jest standardowym mechanizmem regionalnego disaster recovery dla zasobów i danych."
      }
    ],
    "correctAnswer": "By replicating data automatically to a paired region within the same geography",
    "generalExplanation": "Azure używa par regionów w tej samej geografii i oferuje mechanizmy replikacji danych, co wspiera dostępność oraz disaster recovery."
  },
  {
    "id": 78,
    "question": "Which free Azure network security feature evaluates traffic entering or leaving a subnet against rule-based filters and allows or denies it?",
    "options": [
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall to płatna, zarządzana zapora z bardziej zaawansowanymi funkcjami. Pytanie mówi o darmowym, regułowym filtrowaniu subnet traffic."
      },
      {
        "text": "Azure DDoS Protection",
        "explanation": "Azure DDoS Protection chroni przed atakami DDoS, ale nie jest podstawową listą reguł allow/deny dla ruchu subnetu."
      },
      {
        "text": "Advanced Threat Protection (ARP)",
        "explanation": "Advanced Threat Protection nie jest właściwą usługą filtrowania ruchu subnetu, a skrót ARP w tej odpowiedzi dodatkowo nie pasuje do usługi Azure."
      },
      {
        "text": "Network Security Group",
        "explanation": "Network Security Group to darmowy mechanizm reguł inbound/outbound przypisywany do subnetów lub NIC, pozwalający dopuszczać albo blokować ruch."
      }
    ],
    "correctAnswer": "Network Security Group",
    "generalExplanation": "Network Security Group to darmowy mechanizm reguł inbound/outbound przypisywany do subnetów lub NIC, pozwalający dopuszczać albo blokować ruch."
  },
  {
    "id": 79,
    "question": "Your company manages access to several Software-as-a-Service (SaaS) applications like Salesforce and ServiceNow. They want employees to sign in once and then access all apps without re-entering passwords. Which Microsoft Entra ID feature should the company implement?",
    "options": [
      {
        "text": "Privileged Identity Management",
        "explanation": "Privileged Identity Management zarządza podwyższonymi uprawnieniami i dostępem czasowym. Nie jest mechanizmem jednego logowania do wielu aplikacji SaaS."
      },
      {
        "text": "Conditional Access",
        "explanation": "Conditional Access wymusza warunki dostępu, np. MFA lub zgodne urządzenie. Może wspierać bezpieczeństwo SSO, ale nie jest samą funkcją SSO."
      },
      {
        "text": "Single Sign-On (SSO)",
        "explanation": "Single Sign-On pozwala pracownikom zalogować się raz i korzystać z wielu aplikacji SaaS bez ponownego wpisywania haseł."
      },
      {
        "text": "Identity Protection",
        "explanation": "Identity Protection wykrywa ryzykowne logowania i użytkowników. Nie zapewnia samego jednokrotnego logowania do wielu aplikacji."
      }
    ],
    "correctAnswer": "Single Sign-On (SSO)",
    "generalExplanation": "Single Sign-On pozwala pracownikom zalogować się raz i korzystać z wielu aplikacji SaaS bez ponownego wpisywania haseł."
  },
  {
    "id": 80,
    "question": "Why is Azure App Services considered Platform as a Service?",
    "options": [
      {
        "text": "Azure App Services is not PaaS, it's Software as a Service.",
        "explanation": "Azure App Service nie jest SaaS, bo klient wdraża własny kod aplikacji. SaaS to gotowa aplikacja, a App Service jest platformą do hostingu aplikacji."
      },
      {
        "text": "You are responsible for keeping the operating system up to date with the latest patches",
        "explanation": "W PaaS Microsoft zarządza bazowym systemem operacyjnym i patchami. Klient nie utrzymuje OS pod App Service."
      },
      {
        "text": "You give Azure the code and configuration, and you have no access to the underlying hardware",
        "explanation": "App Service jest PaaS, bo przekazujesz kod i konfigurację, a Azure zarządza infrastrukturą, runtime i skalowaniem platformy."
      },
      {
        "text": "You can decide on what type of virtual machine it runs - A-series, or D-series, or even H-series",
        "explanation": "W App Service nie wybierasz konkretnej serii VM ani nie zarządzasz hardware. Dobierasz plan App Service, ale infrastruktura jest ukryta."
      }
    ],
    "correctAnswer": "You give Azure the code and configuration, and you have no access to the underlying hardware",
    "generalExplanation": "App Service jest PaaS, bo przekazujesz kod i konfigurację, a Azure zarządza infrastrukturą, runtime i skalowaniem platformy."
  },
  {
    "id": 81,
    "question": "A company needs to deploy Azure resources in a specific country to meet local data residency laws while maintaining low latency for users in that area. Which Azure concept allows them to choose the best location for deployment?",
    "options": [
      {
        "text": "Availability Zones",
        "explanation": "Availability Zones pomagają rozłożyć zasoby w obrębie regionu dla wysokiej dostępności. Nie wybierają kraju ani lokalizacji geograficznej jako takiej."
      },
      {
        "text": "Management Groups",
        "explanation": "Management Groups organizują subskrypcje do governance. Nie decydują o fizycznej lokalizacji wdrożenia zasobów."
      },
      {
        "text": "Azure Regions",
        "explanation": "Azure Regions pozwalają wybrać geograficzną lokalizację wdrożenia, co pomaga spełnić wymagania data residency i obniżyć opóźnienia dla lokalnych użytkowników."
      },
      {
        "text": "Resource Groups",
        "explanation": "Resource Groups są logicznym kontenerem zasobów. Mają lokalizację metadanych, ale nie są głównym pojęciem wyboru kraju lub regionu wdrożenia usługi."
      }
    ],
    "correctAnswer": "Azure Regions",
    "generalExplanation": "Azure Regions pozwalają wybrać geograficzną lokalizację wdrożenia, co pomaga spełnić wymagania data residency i obniżyć opóźnienia dla lokalnych użytkowników."
  },
  {
    "id": 82,
    "question": "A company wants to forecast its future Azure spending based on planned usage before actually deploying any resources. Which Azure tool should they use?",
    "options": [
      {
        "text": "Azure Cost Management + Billing",
        "explanation": "Azure Cost Management + Billing analizuje i kontroluje koszty istniejącego użycia. Do prognozy przed wdrożeniem lepszy jest kalkulator cen."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor daje rekomendacje dla istniejących zasobów. Nie służy głównie do planowania kosztu przyszłego środowiska przed wdrożeniem."
      },
      {
        "text": "Azure Pricing Calculator",
        "explanation": "Azure Pricing Calculator pozwala oszacować przyszły koszt planowanych usług jeszcze przed ich utworzeniem."
      },
      {
        "text": "Azure Portal Dashboard",
        "explanation": "Azure Portal Dashboard pokazuje wybrane widoki i kafelki w portalu. Nie jest narzędziem do kalkulacji przyszłych kosztów."
      }
    ],
    "correctAnswer": "Azure Pricing Calculator",
    "generalExplanation": "Azure Pricing Calculator pozwala oszacować przyszły koszt planowanych usług jeszcze przed ich utworzeniem."
  },
  {
    "id": 83,
    "question": "A company wants to run seasonal workloads in Azure where capacity can automatically expand during peak demand and shrink afterward. Which benefit of cloud computing provides this capability?",
    "options": [
      {
        "text": "Fault tolerance",
        "explanation": "Fault tolerance oznacza odporność na awarie komponentów. Sezonowe zwiększanie i zmniejszanie pojemności dotyczy skalowania, nie samej odporności na awarie."
      },
      {
        "text": "Disaster recovery",
        "explanation": "Disaster recovery dotyczy odtwarzania działania po awarii. Sezonowe workloady wymagają raczej dynamicznej pojemności."
      },
      {
        "text": "Elasticity",
        "explanation": "Elasticity oznacza automatyczne rozszerzanie zasobów przy wzroście popytu i zmniejszanie ich, gdy obciążenie spada."
      },
      {
        "text": "High availability",
        "explanation": "High availability oznacza utrzymanie dostępności usługi. Nie jest tym samym co automatyczne skalowanie pojemności sezonowej."
      }
    ],
    "correctAnswer": "Elasticity",
    "generalExplanation": "Elasticity oznacza automatyczne rozszerzanie zasobów przy wzroście popytu i zmniejszanie ich, gdy obciążenie spada."
  },
  {
    "id": 84,
    "question": "Which Azure database service is specifically designed to provide extremely low-latency responses for small, frequent read/write requests?",
    "options": [
      {
        "text": "Cosmos DB",
        "explanation": "Cosmos DB jest zaprojektowany pod bardzo niskie opóźnienia i częste operacje read/write na małych porcjach danych, często w skali globalnej."
      },
      {
        "text": "SQL Database",
        "explanation": "Azure SQL Database jest relacyjną bazą SQL. Może być szybka, ale nie jest usługą specjalnie wskazywaną do ekstremalnie niskich opóźnień małych, częstych operacji w tym pytaniu."
      },
      {
        "text": "Synapse Analytics",
        "explanation": "Synapse Analytics służy do analityki dużych zbiorów danych i hurtowni danych. Nie jest zoptymalizowany pod małe, częste transakcje o minimalnej latencji."
      },
      {
        "text": "SQL Server in a VM",
        "explanation": "SQL Server w VM daje kontrolę nad bazą na maszynie wirtualnej, ale wymaga zarządzania infrastrukturą i nie jest wyspecjalizowaną usługą low-latency NoSQL."
      }
    ],
    "correctAnswer": "Cosmos DB",
    "generalExplanation": "Cosmos DB jest zaprojektowany pod bardzo niskie opóźnienia i częste operacje read/write na małych porcjach danych, często w skali globalnej."
  },
  {
    "id": 85,
    "question": "If you are a US federal, state, local, or tribal government entities and their solution providers, which Azure option should you be looking to register for?",
    "options": [
      {
        "text": "Azure Public Portal",
        "explanation": "Azure Public Portal to standardowe środowisko public Azure. Instytucje rządowe USA zwykle powinny patrzeć na dedykowane Azure Government."
      },
      {
        "text": "Azure Department of Defence",
        "explanation": "Azure Department of Defence nie jest właściwą nazwą ogólnej opcji rejestracji dla administracji publicznej. Istnieją specjalne chmury i regiony dla rządu, ale odpowiedź brzmi Azure Government."
      },
      {
        "text": "Azure Government",
        "explanation": "Azure Government jest przeznaczony dla amerykańskich jednostek federalnych, stanowych, lokalnych, tribal oraz ich dostawców, z wymaganiami regulacyjnymi sektora publicznego."
      },
      {
        "text": "Azure is not available for government officials",
        "explanation": "Azure jest dostępny dla podmiotów rządowych przez odpowiednie oferty, w tym Azure Government, więc twierdzenie o braku dostępności jest nieprawdziwe."
      }
    ],
    "correctAnswer": "Azure Government",
    "generalExplanation": "Azure Government jest przeznaczony dla amerykańskich jednostek federalnych, stanowych, lokalnych, tribal oraz ich dostawców, z wymaganiami regulacyjnymi sektora publicznego."
  },
  {
    "id": 86,
    "question": "What is the service level agreement for two or more Azure Virtual Machines that have been manually placed into different Availability Zones in the same region?",
    "options": [
      {
        "text": "99.90%",
        "explanation": "99,90% jest niższe niż SLA dla co najmniej dwóch VM rozmieszczonych ręcznie w różnych Availability Zones."
      },
      {
        "text": "99.99%",
        "explanation": "Dwie lub więcej VM w różnych Availability Zones w tym samym regionie mają SLA 99,99%, jeśli spełniają warunki usługi."
      },
      {
        "text": "99.95%",
        "explanation": "99,95% dotyczy typowo co najmniej dwóch VM w Availability Set, a nie scenariusza różnych Availability Zones."
      },
      {
        "text": "100%",
        "explanation": "100% SLA nie jest oferowane dla tego scenariusza. Azure podaje 99,99%, a nie absolutną gwarancję."
      }
    ],
    "correctAnswer": "99.99%",
    "generalExplanation": "Dwie lub więcej VM w różnych Availability Zones w tym samym regionie mają SLA 99,99%, jeśli spełniają warunki usługi."
  },
  {
    "id": 87,
    "question": "An administrator wants to manage Azure resources from a browser without installing any tools locally. They prefer using command-line interfaces like Bash or PowerShell. Which Azure tool should they use?",
    "options": [
      {
        "text": "Azure Cloud Shell",
        "explanation": "Azure Cloud Shell działa w przeglądarce i daje dostęp do Bash oraz PowerShell bez instalowania narzędzi lokalnie."
      },
      {
        "text": "Azure PowerShell module",
        "explanation": "Azure PowerShell module wymaga instalacji lub środowiska, w którym moduł jest dostępny. Sam moduł lokalny nie spełnia warunku pracy bez instalacji."
      },
      {
        "text": "Azure Portal Dashboard",
        "explanation": "Azure Portal Dashboard jest graficznym widokiem, ale użytkownik preferuje interfejs command-line, czyli Bash lub PowerShell."
      },
      {
        "text": "Azure CLI locally installed",
        "explanation": "Lokalnie zainstalowany Azure CLI wymaga instalacji na komputerze. Pytanie mówi o pracy z przeglądarki bez lokalnych narzędzi."
      }
    ],
    "correctAnswer": "Azure Cloud Shell",
    "generalExplanation": "Azure Cloud Shell działa w przeglądarce i daje dostęp do Bash oraz PowerShell bez instalowania narzędzi lokalnie."
  },
  {
    "id": 88,
    "question": "Which Microsoft cloud service provides Identity-as-a-Service (IDaaS) for authentication, single sign-on, and identity management in Azure?",
    "options": [
      {
        "text": "Azure Front Door",
        "explanation": "Azure Front Door jest usługą globalnego routingu i akceleracji aplikacji webowych. Nie jest usługą tożsamości."
      },
      {
        "text": "Azure Portal",
        "explanation": "Azure Portal jest interfejsem zarządzania Azure. Nie jest usługą Identity-as-a-Service dla aplikacji."
      },
      {
        "text": "Microsoft Entra ID",
        "explanation": "Microsoft Entra ID zapewnia tożsamość jako usługę: uwierzytelnianie, SSO, zarządzanie użytkownikami i integrację aplikacji."
      },
      {
        "text": "Identity and Access Management (IAM)",
        "explanation": "IAM to ogólne pojęcie zarządzania tożsamością i dostępem oraz sekcje uprawnień w Azure. Pytanie pyta o konkretną usługę Microsoft, czyli Entra ID."
      }
    ],
    "correctAnswer": "Microsoft Entra ID",
    "generalExplanation": "Microsoft Entra ID zapewnia tożsamość jako usługę: uwierzytelnianie, SSO, zarządzanie użytkownikami i integrację aplikacji."
  },
  {
    "id": 89,
    "question": "In the Azure portal, where do you browse and acquire third-party virtual machine images and other third-party offers?",
    "options": [
      {
        "text": "Choose an image when creating a VM",
        "explanation": "Wybór obrazu podczas tworzenia VM może pokazywać część obrazów, ale miejscem przeglądania ofert firm trzecich w Azure jest Marketplace."
      },
      {
        "text": "Bing",
        "explanation": "Bing jest wyszukiwarką internetową. Nie jest miejscem nabywania ofert i obrazów VM w portalu Azure."
      },
      {
        "text": "Azure mobile app",
        "explanation": "Azure mobile app służy do podstawowego zarządzania i monitorowania. Nie jest głównym katalogiem ofert firm trzecich."
      },
      {
        "text": "Azure Marketplace",
        "explanation": "Azure Marketplace zawiera obrazy VM, aplikacje i usługi firm trzecich oraz Microsoft, które można wdrażać lub kupować w Azure."
      }
    ],
    "correctAnswer": "Azure Marketplace",
    "generalExplanation": "Azure Marketplace zawiera obrazy VM, aplikacje i usługi firm trzecich oraz Microsoft, które można wdrażać lub kupować w Azure."
  },
  {
    "id": 90,
    "question": "You're using the Azure CLI from a command prompt to manage Azure resources. Which command do you run to sign in interactively to your Azure account using the Azure CLI?",
    "options": [
      {
        "text": "az connect",
        "explanation": "az connect nie jest poprawną komendą logowania w Azure CLI."
      },
      {
        "text": "az account connect",
        "explanation": "az account connect nie jest poprawną składnią logowania interaktywnego w Azure CLI."
      },
      {
        "text": "az account login",
        "explanation": "az account login wygląda prawdopodobnie, ale nie jest właściwą komendą. Grupa az account służy m.in. do zarządzania subskrypcjami po zalogowaniu."
      },
      {
        "text": "az login",
        "explanation": "az login uruchamia interaktywne logowanie do konta Azure, zwykle przez przeglądarkę, i zapisuje sesję dla Azure CLI."
      }
    ],
    "correctAnswer": "az login",
    "generalExplanation": "az login uruchamia interaktywne logowanie do konta Azure, zwykle przez przeglądarkę, i zapisuje sesję dla Azure CLI."
  },
  {
    "id": 91,
    "question": "Which cloud service model places the greatest responsibility on the customer for managing the operating system and underlying infrastructure?",
    "options": [
      {
        "text": "SaaS",
        "explanation": "SaaS daje najmniej odpowiedzialności klientowi, bo dostawca zarządza aplikacją, platformą i infrastrukturą. Klient głównie korzysta z gotowej usługi."
      },
      {
        "text": "PaaS",
        "explanation": "PaaS przenosi na dostawcę zarządzanie systemem operacyjnym i platformą. Klient odpowiada bardziej za aplikację i dane niż za infrastrukturę."
      },
      {
        "text": "IaaS",
        "explanation": "IaaS daje klientowi największą kontrolę i odpowiedzialność za system operacyjny, patchowanie, konfigurację serwera, porty i zabezpieczenia."
      },
      {
        "text": "FaaS",
        "explanation": "FaaS ukrywa serwery i uruchamia funkcje zdarzeniowo. Klient nie zarządza bazowym systemem operacyjnym tak jak w IaaS."
      }
    ],
    "correctAnswer": "IaaS",
    "generalExplanation": "IaaS daje klientowi największą kontrolę i odpowiedzialność za system operacyjny, patchowanie, konfigurację serwera, porty i zabezpieczenia."
  },
  {
    "id": 92,
    "question": "An analytics team needs to process and visualize petabytes of structured and unstructured data from IoT devices in near real time. Which Azure service is most appropriate for this scenario?",
    "options": [
      {
        "text": "Microsoft Power BI",
        "explanation": "Power BI służy głównie do raportowania i wizualizacji. Może prezentować dane, ale nie jest platformą do przetwarzania petabajtów danych IoT w near real time."
      },
      {
        "text": "Azure App Service",
        "explanation": "Azure App Service hostuje aplikacje webowe i API. Nie jest usługą big data analytics do przetwarzania petabajtów danych."
      },
      {
        "text": "Azure Synapse Analytics",
        "explanation": "Azure Synapse Analytics łączy hurtownię danych, big data i analitykę, nadając się do przetwarzania oraz analizowania bardzo dużych zbiorów danych."
      },
      {
        "text": "Azure SQL Database",
        "explanation": "Azure SQL Database to relacyjna baza PaaS dla aplikacji. Nie jest najlepszym wyborem do petabajtowej analityki IoT near real time."
      }
    ],
    "correctAnswer": "Azure Synapse Analytics",
    "generalExplanation": "Azure Synapse Analytics łączy hurtownię danych, big data i analitykę, nadając się do przetwarzania oraz analizowania bardzo dużych zbiorów danych."
  },
  {
    "id": 93,
    "question": "Which Azure service lets you automatically scale a group of identical virtual machines (auto-scale from a single instance to many instances) and provides built-in load balancing for those VMs?",
    "options": [
      {
        "text": "Azure App Services",
        "explanation": "Azure App Service skaluje aplikacje webowe PaaS, ale nie zarządza grupą identycznych maszyn wirtualnych jako VM."
      },
      {
        "text": "Application Gateway",
        "explanation": "Application Gateway rozdziela ruch aplikacyjny, ale sam nie tworzy ani automatycznie nie skaluje grupy identycznych VM."
      },
      {
        "text": "Virtual Machine Scale Sets",
        "explanation": "Virtual Machine Scale Sets zarządzają grupą identycznych VM, obsługują autoscaling i integrację z load balancingiem."
      },
      {
        "text": "Azure Virtual Machines",
        "explanation": "Pojedyncze Azure Virtual Machines nie zapewniają same z siebie automatycznego skalowania grupy identycznych instancji. Do tego służy VMSS."
      }
    ],
    "correctAnswer": "Virtual Machine Scale Sets",
    "generalExplanation": "Virtual Machine Scale Sets zarządzają grupą identycznych VM, obsługują autoscaling i integrację z load balancingiem."
  },
  {
    "id": 94,
    "question": "Which Azure Storage service is best suited for storing unstructured data such as text or binary data?",
    "options": [
      {
        "text": "Azure Queue Storage",
        "explanation": "Azure Queue Storage przechowuje komunikaty do asynchronicznej komunikacji między komponentami. Nie jest magazynem plików binarnych i tekstowych jako obiektów."
      },
      {
        "text": "Azure Table Storage",
        "explanation": "Azure Table Storage przechowuje dane NoSQL w formie tabelarycznej key-value. Nie jest najlepszym wyborem dla nieustrukturyzowanych blobów."
      },
      {
        "text": "Azure Blob Storage",
        "explanation": "Azure Blob Storage służy do przechowywania nieustrukturyzowanych danych, takich jak tekst, obrazy, backupy, filmy i pliki binarne."
      },
      {
        "text": "Azure File Storage",
        "explanation": "Azure File Storage udostępnia współdzielone pliki SMB/NFS. To dobry wybór dla udziałów plikowych, ale nie podstawowa odpowiedź dla object/blob storage."
      }
    ],
    "correctAnswer": "Azure Blob Storage",
    "generalExplanation": "Azure Blob Storage służy do przechowywania nieustrukturyzowanych danych, takich jak tekst, obrazy, backupy, filmy i pliki binarne."
  },
  {
    "id": 95,
    "question": "Which of the following is an example of a perimeter (network-boundary) security control?",
    "options": [
      {
        "text": "Locks on the data center doors",
        "explanation": "Zamki w drzwiach data center są fizyczną kontrolą bezpieczeństwa, a nie kontrolą perimeter na granicy sieci."
      },
      {
        "text": "Keep operating systems up to date with patches",
        "explanation": "Aktualizowanie systemów to kontrola hosta i hardening. Nie jest zabezpieczeniem granicy sieci."
      },
      {
        "text": "Separate servers into distinct subnets by role",
        "explanation": "Dzielenie serwerów na subnets według roli pomaga segmentować sieć, ale przykładem klasycznej kontroli perimeter jest firewall."
      },
      {
        "text": "Use a firewall",
        "explanation": "Firewall kontroluje ruch na granicy sieci lub segmentu, dopuszczając lub blokując pakiety według reguł. To typowa kontrola perimeter security."
      }
    ],
    "correctAnswer": "Use a firewall",
    "generalExplanation": "Firewall kontroluje ruch na granicy sieci lub segmentu, dopuszczając lub blokując pakiety według reguł. To typowa kontrola perimeter security."
  },
  {
    "id": 96,
    "question": "Which Azure pricing option provides significant discounts for committing to a specific amount of resource usage for a 1-year or 3-year term?",
    "options": [
      {
        "text": "Reserved Instances",
        "explanation": "Reserved Instances dają znaczące zniżki za zobowiązanie użycia określonych zasobów przez 1 lub 3 lata."
      },
      {
        "text": "Pay-As-You-Go",
        "explanation": "Pay-As-You-Go nie wymaga zobowiązania, ale zwykle nie daje takich zniżek jak rezerwacje długoterminowe."
      },
      {
        "text": "Spot Pricing",
        "explanation": "Spot Pricing daje bardzo niskie ceny za niewykorzystaną pojemność, ale zasoby mogą zostać odebrane. Nie jest zobowiązaniem 1 lub 3-letnim."
      },
      {
        "text": "Free Tier",
        "explanation": "Free Tier daje ograniczone darmowe usługi lub limity, ale nie jest modelem rabatu za długoterminowe zobowiązanie użycia."
      }
    ],
    "correctAnswer": "Reserved Instances",
    "generalExplanation": "Reserved Instances dają znaczące zniżki za zobowiązanie użycia określonych zasobów przez 1 lub 3 lata."
  },
  {
    "id": 97,
    "question": "An organization wants to strengthen sign-in security. They decide that users can log in from managed corporate devices without extra verification, but all other sign-ins must require Multi-Factor Authentication (MFA). Which Microsoft Entra ID feature should they configure?",
    "options": [
      {
        "text": "Privileged Identity Management (PIM)",
        "explanation": "PIM zarządza dostępem uprzywilejowanym, np. aktywacją ról administratora na czas. Nie decyduje bezpośrednio o MFA na podstawie stanu urządzenia dla zwykłego logowania."
      },
      {
        "text": "Identity Protection risk policies",
        "explanation": "Identity Protection risk policies reagują na ryzyko użytkownika lub logowania. Tutaj warunkiem jest stan urządzenia, więc lepiej pasuje Conditional Access."
      },
      {
        "text": "Access Reviews for user groups",
        "explanation": "Access Reviews pomagają okresowo sprawdzać członkostwo i dostęp do grup lub aplikacji. Nie wymuszają MFA zależnie od urządzenia przy logowaniu."
      },
      {
        "text": "Conditional Access policies based on device state",
        "explanation": "Conditional Access może wymagać MFA tylko dla logowań niespełniających warunku, np. spoza zarządzanego urządzenia firmowego."
      }
    ],
    "correctAnswer": "Conditional Access policies based on device state",
    "generalExplanation": "Conditional Access może wymagać MFA tylko dla logowań niespełniających warunku, np. spoza zarządzanego urządzenia firmowego."
  },
  {
    "id": 98,
    "question": "An IT administrator wants to ensure that only users in the HR department can access a payroll app registered in Microsoft Entra ID. Which feature should the administrator use?",
    "options": [
      {
        "text": "Multi-Factor Authentication",
        "explanation": "MFA wzmacnia proces logowania, ale samo nie decyduje, że wyłącznie dział HR może używać aplikacji."
      },
      {
        "text": "Conditional Access",
        "explanation": "Conditional Access pozwala tworzyć zasady dostępu do aplikacji na podstawie użytkownika, grupy, lokalizacji, urządzenia i innych warunków, np. tylko HR."
      },
      {
        "text": "Application Proxy",
        "explanation": "Application Proxy publikuje aplikacje lokalne przez Microsoft Entra ID. Nie jest główną funkcją ograniczenia dostępu aplikacji do działu HR."
      },
      {
        "text": "Role-Based Access Control (RBAC)",
        "explanation": "RBAC służy głównie do uprawnień do zasobów Azure. Dostęp do aplikacji Entra ID dla grup użytkowników zwykle kontroluje się przypisaniami aplikacji i Conditional Access."
      }
    ],
    "correctAnswer": "Conditional Access",
    "generalExplanation": "Conditional Access pozwala tworzyć zasady dostępu do aplikacji na podstawie użytkownika, grupy, lokalizacji, urządzenia i innych warunków, np. tylko HR."
  },
  {
    "id": 99,
    "question": "What two types (tiers) of Azure DDoS protection are available? Select two.",
    "options": [
      {
        "text": "DDoS Network Protection",
        "explanation": "DDoS Network Protection chroni zasoby w virtual networks przed atakami wolumetrycznymi i protokołowymi na poziomie sieci. To jedna z dostępnych warstw ochrony."
      },
      {
        "text": "DDoS Premium Protection",
        "explanation": "DDoS Premium Protection nie jest nazwą aktualnej warstwy Azure DDoS Protection w tym pytaniu."
      },
      {
        "text": "DDoS Advanced Protection",
        "explanation": "DDoS Advanced Protection nie jest właściwą nazwą typu ochrony Azure DDoS w tym zestawie odpowiedzi."
      },
      {
        "text": "DDoS IP Protection",
        "explanation": "DDoS IP Protection chroni konkretne publiczne adresy IP i jest drugą wskazaną warstwą ochrony obok Network Protection."
      }
    ],
    "correctAnswer": [
      "DDoS Network Protection",
      "DDoS IP Protection"
    ],
    "generalExplanation": "DDoS Network Protection chroni zasoby w virtual networks przed atakami wolumetrycznymi i protokołowymi na poziomie sieci. To jedna z dostępnych warstw ochrony. DDoS IP Protection chroni konkretne publiczne adresy IP i jest drugą wskazaną warstwą ochrony obok Network Protection."
  },
  {
    "id": 100,
    "question": "Which of the following is NOT an example of Infrastructure as a Service (IaaS) in Azure?",
    "options": [
      {
        "text": "Azure SQL Database",
        "explanation": "Azure SQL Database nie jest IaaS, bo Microsoft zarządza infrastrukturą, systemem i platformą bazy danych. To usługa PaaS."
      },
      {
        "text": "Virtual Network",
        "explanation": "Virtual Network jest zasobem sieciowym infrastruktury Azure, często zaliczanym do obszaru IaaS, bo zapewnia podstawową warstwę sieci dla zasobów."
      },
      {
        "text": "Virtual Machine Scale Sets",
        "explanation": "Virtual Machine Scale Sets zarządzają grupą maszyn wirtualnych, więc należą do obszaru IaaS."
      },
      {
        "text": "Virtual Machine",
        "explanation": "Virtual Machine to klasyczny przykład IaaS: klient zarządza systemem operacyjnym i aplikacjami na wynajętej infrastrukturze."
      },
      {
        "text": "SQL Server in a VM",
        "explanation": "SQL Server uruchomiony w VM jest IaaS, bo baza działa na maszynie wirtualnej, którą klient administruje razem z systemem operacyjnym."
      }
    ],
    "correctAnswer": "Azure SQL Database",
    "generalExplanation": "Azure SQL Database nie jest IaaS, bo Microsoft zarządza infrastrukturą, systemem i platformą bazy danych. To usługa PaaS."
  },
  {
    "id": 101,
    "question": "Which tool within the Azure Portal will make specific recommendations based on your actual usage for how you can improve your use of Azure?",
    "options": [
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor zbiera metryki, logi i zdarzenia oraz pozwala tworzyć alerty. Nie jest narzędziem rekomendującym optymalizacje na podstawie całego użycia Azure."
      },
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health informuje o problemach, awariach i planowanych pracach usług Azure. Nie analizuje Twojego środowiska pod kątem kosztów, wydajności i bezpieczeństwa."
      },
      {
        "text": "Azure Dashboard",
        "explanation": "Azure Dashboard to konfigurowalny widok w portalu. Pokazuje wybrane kafelki, ale sam nie generuje rekomendacji poprawy środowiska."
      },
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor analizuje realne użycie Azure i daje konkretne rekomendacje dotyczące kosztów, bezpieczeństwa, niezawodności, dostępności i wydajności."
      }
    ],
    "correctAnswer": "Azure Advisor",
    "generalExplanation": "Azure Advisor analizuje realne użycie Azure i daje konkretne rekomendacje dotyczące kosztów, bezpieczeństwa, niezawodności, dostępności i wydajności."
  },
  {
    "id": 102,
    "question": "What does the letter R in RBAC stand for?",
    "options": [
      {
        "text": "Rule",
        "explanation": "Rule oznacza regułę, ale w skrócie RBAC litera R nie odnosi się do reguł. Reguły mogą występować w politykach, lecz RBAC opiera się na rolach."
      },
      {
        "text": "Role",
        "explanation": "Role jest poprawne: RBAC to Role-Based Access Control, czyli kontrola dostępu oparta na rolach przypisywanych użytkownikom, grupom lub aplikacjom."
      },
      {
        "text": "Rights",
        "explanation": "Rights oznacza prawa, ale nie jest rozwinięciem litery R w RBAC. Uprawnienia są zawarte w rolach, lecz nazwa modelu mówi o rolach."
      },
      {
        "text": "Review",
        "explanation": "Review oznacza przegląd lub kontrolę, ale nie jest częścią skrótu RBAC. Access Reviews to osobna funkcja zarządzania dostępem."
      }
    ],
    "correctAnswer": "Role",
    "generalExplanation": "Role jest poprawne: RBAC to Role-Based Access Control, czyli kontrola dostępu oparta na rolach przypisywanych użytkownikom, grupom lub aplikacjom."
  },
  {
    "id": 103,
    "question": "Which of the following services would NOT be considered Infrastructure as a Service?",
    "options": [
      {
        "text": "Virtual Network",
        "explanation": "Virtual Network jest elementem infrastruktury sieciowej Azure, więc pasuje do obszaru IaaS."
      },
      {
        "text": "Virtual Network Interface Card (NIC)",
        "explanation": "Virtual Network Interface Card jest zasobem sieciowym dołączanym do VM, więc także należy do warstwy infrastruktury."
      },
      {
        "text": "Azure Functions App",
        "explanation": "Azure Functions App to usługa serverless/FaaS. Przekazujesz kod, a Azure uruchamia go bez dostępu do bazowej infrastruktury, więc nie jest IaaS."
      },
      {
        "text": "Virtual Machine",
        "explanation": "Virtual Machine to klasyczny przykład IaaS, bo klient zarządza systemem operacyjnym, konfiguracją i aplikacjami na wynajętej infrastrukturze."
      }
    ],
    "correctAnswer": "Azure Functions App",
    "generalExplanation": "Azure Functions App to usługa serverless/FaaS. Przekazujesz kod, a Azure uruchamia go bez dostępu do bazowej infrastruktury, więc nie jest IaaS."
  },
  {
    "id": 104,
    "question": "Why should you divide your application into multiple subnets as opposed to having all your web, application and database servers running on the same subnet?",
    "options": [
      {
        "text": "There are only a limited number of IP addresses available per subnet, so you need multiple subnets over a certain number.",
        "explanation": "Limit adresów IP może mieć znaczenie przy bardzo dużych sieciach, ale nie jest głównym powodem dzielenia aplikacji na subnets."
      },
      {
        "text": "Separating your application into multiple subnets allows you to have different NSG security rules for each subnet, which can make it harder for a hacker to get from one compromised server onto another.",
        "explanation": "Oddzielne subnets pozwalają przypisać różne NSG i reguły ruchu do warstw web, app i database. To ogranicza ruch boczny po ewentualnym włamaniu."
      },
      {
        "text": "Each server type of your application requires its own subnet. It's not possible to mix web servers, database servers and application servers on the same subnet.",
        "explanation": "Azure nie wymaga osobnej podsieci dla każdego typu serwera. Można mieszać role w jednej subnet, ale często rozdziela się je dla bezpieczeństwa i kontroli ruchu."
      }
    ],
    "correctAnswer": "Separating your application into multiple subnets allows you to have different NSG security rules for each subnet, which can make it harder for a hacker to get from one compromised server onto another.",
    "generalExplanation": "Oddzielne subnets pozwalają przypisać różne NSG i reguły ruchu do warstw web, app i database. To ogranicza ruch boczny po ewentualnym włamaniu."
  },
  {
    "id": 105,
    "question": "What is the primary benefit of using Azure Virtual Desktop (AVD)?",
    "options": [
      {
        "text": "It offers a serverless computing platform for running event-driven applications.",
        "explanation": "Serverless event-driven compute opisuje raczej Azure Functions. AVD nie służy do uruchamiania funkcji bezserwerowych."
      },
      {
        "text": "It automates the deployment and management of containerized applications.",
        "explanation": "Automatyzacja kontenerów dotyczy usług takich jak AKS lub Container Apps. AVD nie zarządza aplikacjami kontenerowymi."
      },
      {
        "text": "It provides a fully managed database service for relational and non-relational data.",
        "explanation": "Zarządzane bazy danych to np. Azure SQL Database albo Cosmos DB. AVD nie jest usługą bazodanową."
      },
      {
        "text": "It enables users to access virtualized desktops and applications from anywhere, on any device.",
        "explanation": "Azure Virtual Desktop umożliwia dostęp do wirtualnych pulpitów i aplikacji z dowolnego miejsca oraz urządzenia, co jest jego podstawową korzyścią."
      }
    ],
    "correctAnswer": "It enables users to access virtualized desktops and applications from anywhere, on any device.",
    "generalExplanation": "Azure Virtual Desktop umożliwia dostęp do wirtualnych pulpitów i aplikacji z dowolnego miejsca oraz urządzenia, co jest jego podstawową korzyścią."
  },
  {
    "id": 106,
    "question": "How many minutes per month downtime is 99.99% availability?",
    "options": [
      {
        "text": "100",
        "explanation": "100 minut przestoju miesięcznie odpowiada znacznie niższej dostępności niż 99,99%."
      },
      {
        "text": "1",
        "explanation": "1 minuta przestoju miesięcznie oznaczałaby wyższą dostępność niż 99,99%."
      },
      {
        "text": "4",
        "explanation": "99,99% dostępności to około 4 minuty przestoju miesięcznie, dlatego ta odpowiedź jest właściwa."
      },
      {
        "text": "40",
        "explanation": "40 minut przestoju miesięcznie jest bliższe 99,9% niż 99,99% dostępności."
      }
    ],
    "correctAnswer": "4",
    "generalExplanation": "99,99% dostępności to około 4 minuty przestoju miesięcznie, dlatego ta odpowiedź jest właściwa."
  },
  {
    "id": 107,
    "question": "What type of documents does the Microsoft Service Trust Portal provide?",
    "options": [
      {
        "text": "Specific recommendations about your usage of Azure and ways you can improve",
        "explanation": "Rekomendacje dotyczące użycia Azure dostarcza Azure Advisor, a nie Service Trust Portal."
      },
      {
        "text": "A list of standards that Microsoft follows, pen test results, security assessments, white papers, faqs, and other documents that can be used to show Microsoft's compliance efforts",
        "explanation": "Service Trust Portal udostępnia dokumenty compliance Microsoft: standardy, raporty testów, oceny bezpieczeństwa, white papers, FAQ i materiały audytowe."
      },
      {
        "text": "Documentation on the individual Azure services and solutions",
        "explanation": "Dokumentacja pojedynczych usług znajduje się głównie w Microsoft Learn i dokumentacji Azure, nie w Service Trust Portal."
      },
      {
        "text": "A tool that helps you manage your compliance to various standards",
        "explanation": "Narzędziem do zarządzania własną zgodnością jest Microsoft Purview Compliance Manager. Service Trust Portal pokazuje dowody i dokumenty zgodności Microsoft."
      }
    ],
    "correctAnswer": "A list of standards that Microsoft follows, pen test results, security assessments, white papers, faqs, and other documents that can be used to show Microsoft's compliance efforts",
    "generalExplanation": "Service Trust Portal udostępnia dokumenty compliance Microsoft: standardy, raporty testów, oceny bezpieczeństwa, white papers, FAQ i materiały audytowe."
  },
  {
    "id": 108,
    "question": "How many hours are available free when using the Azure B1S General Purpose Virtual Machines under a Azure free account in the first 12 months?",
    "options": [
      {
        "text": "300 hrs",
        "explanation": "300 godzin to za mało dla darmowej puli B1S w pierwszych 12 miesiącach konta Azure Free."
      },
      {
        "text": "500 hrs",
        "explanation": "500 godzin również nie jest właściwą liczbą dla darmowego użycia B1S w tym pytaniu."
      },
      {
        "text": "Indefinite amount of hrs",
        "explanation": "Darmowa pula nie jest bezterminowa. Azure Free Account ma limity czasowe i ilościowe dla konkretnych usług."
      },
      {
        "text": "750 hrs",
        "explanation": "Azure Free Account obejmuje 750 godzin B1S General Purpose Virtual Machines miesięcznie przez pierwsze 12 miesięcy."
      }
    ],
    "correctAnswer": "750 hrs",
    "generalExplanation": "Azure Free Account obejmuje 750 godzin B1S General Purpose Virtual Machines miesięcznie przez pierwsze 12 miesięcy."
  },
  {
    "id": 109,
    "question": "What is a key benefit of using Azure Cloud Shell?",
    "options": [
      {
        "text": "It allows you to run virtual machines directly in the browser.",
        "explanation": "Cloud Shell nie uruchamia maszyn wirtualnych bezpośrednio w przeglądarce. Daje terminal do zarządzania zasobami Azure."
      },
      {
        "text": "It automatically optimizes the cost of your Azure resources.",
        "explanation": "Cloud Shell nie optymalizuje automatycznie kosztów. Do rekomendacji kosztowych służą np. Azure Advisor i Cost Management."
      },
      {
        "text": "It provides a graphical user interface (GUI) for managing Azure services.",
        "explanation": "Cloud Shell nie jest GUI. To przeglądarkowy shell z Bash lub PowerShell oraz gotowymi narzędziami CLI."
      },
      {
        "text": "It provides a pre-configured, browser-based shell for managing Azure resources without requiring local installations.",
        "explanation": "Azure Cloud Shell daje prekonfigurowaną powłokę w przeglądarce, dzięki czemu można zarządzać Azure bez instalowania CLI lub PowerShell lokalnie."
      }
    ],
    "correctAnswer": "It provides a pre-configured, browser-based shell for managing Azure resources without requiring local installations.",
    "generalExplanation": "Azure Cloud Shell daje prekonfigurowaną powłokę w przeglądarce, dzięki czemu można zarządzać Azure bez instalowania CLI lub PowerShell lokalnie."
  },
  {
    "id": 110,
    "question": "Which Azure networking service allows you to securely connect your on-premises network to Azure over the internet?",
    "options": [
      {
        "text": "Azure ExpressRoute",
        "explanation": "ExpressRoute zapewnia prywatne, dedykowane połączenie z Azure z pominięciem publicznego internetu. Pytanie dotyczy bezpiecznego połączenia przez internet."
      },
      {
        "text": "Azure VPN Gateway",
        "explanation": "Azure VPN Gateway tworzy szyfrowane połączenie VPN między siecią lokalną a Azure przez publiczny internet."
      },
      {
        "text": "Azure Virtual Network (VNet)",
        "explanation": "Virtual Network jest prywatną siecią w Azure. Sama VNet nie zestawia szyfrowanego tunelu z on-premises przez internet."
      },
      {
        "text": "Azure Load Balancer",
        "explanation": "Azure Load Balancer rozdziela ruch do zasobów. Nie służy do łączenia sieci lokalnej z Azure."
      }
    ],
    "correctAnswer": "Azure VPN Gateway",
    "generalExplanation": "Azure VPN Gateway tworzy szyfrowane połączenie VPN między siecią lokalną a Azure przez publiczny internet."
  },
  {
    "id": 111,
    "question": "Which two features does Virtual Machine Scale Sets provide as part of the core product? Pick two.",
    "options": [
      {
        "text": "Autoscaling of virtual machines",
        "explanation": "VM Scale Sets mogą automatycznie zwiększać i zmniejszać liczbę identycznych VM zgodnie z obciążeniem."
      },
      {
        "text": "Firewall",
        "explanation": "Firewall nie jest podstawową funkcją VMSS. Ochronę ruchu realizuje się innymi usługami, np. NSG lub Azure Firewall."
      },
      {
        "text": "Load balancing between virtual machines",
        "explanation": "VMSS integruje się z load balancingiem, aby rozdzielać ruch pomiędzy wiele instancji VM."
      },
      {
        "text": "Automatic installation of supporting apps and deployment of custom code",
        "explanation": "VMSS nie instaluje automatycznie aplikacji ani kodu na nowych serwerach bez dodatkowego procesu wdrożeniowego, np. image, extension lub pipeline."
      },
      {
        "text": "Content Delivery Network",
        "explanation": "Content Delivery Network dystrybuuje statyczne treści na edge locations. Nie jest funkcją VM Scale Sets."
      }
    ],
    "correctAnswer": [
      "Autoscaling of virtual machines",
      "Load balancing between virtual machines"
    ],
    "generalExplanation": "VM Scale Sets mogą automatycznie zwiększać i zmniejszać liczbę identycznych VM zgodnie z obciążeniem. VMSS integruje się z load balancingiem, aby rozdzielać ruch pomiędzy wiele instancji VM."
  },
  {
    "id": 112,
    "question": "How do you stop your Azure account from incurring costs above a certain level without your knowledge?",
    "options": [
      {
        "text": "Set up a billing alert to send you an email when it reaches a certain level",
        "explanation": "Billing alert powiadomi Cię o kosztach, ale sam nie zatrzyma dalszego naliczania opłat."
      },
      {
        "text": "Implement the Azure spending limit in the Account Center",
        "explanation": "Spending limit w Account Center blokuje dalsze naliczanie ponad określony limit dla obsługiwanych typów kont, np. kont darmowych."
      },
      {
        "text": "Only use Azure Functions which have a significant free limit",
        "explanation": "Azure Functions mają darmową pulę, ale korzystanie tylko z Functions nie gwarantuje braku kosztów ani nie kontroluje innych zasobów."
      },
      {
        "text": "Switch to Azure Reserved Instances with Hybrid Benefit for VMs",
        "explanation": "Reserved Instances i Hybrid Benefit obniżają koszt VM, ale nie zatrzymują automatycznie wydatków powyżej limitu."
      }
    ],
    "correctAnswer": "Implement the Azure spending limit in the Account Center",
    "generalExplanation": "Spending limit w Account Center blokuje dalsze naliczanie ponad określony limit dla obsługiwanych typów kont, np. kont darmowych."
  },
  {
    "id": 113,
    "question": "What data format are ARM templates created in?",
    "options": [
      {
        "text": "XML",
        "explanation": "ARM templates nie są tworzone w XML."
      },
      {
        "text": "JSON",
        "explanation": "ARM templates są definiowane w formacie JSON, opisując zasoby i ich konfigurację deklaratywnie."
      },
      {
        "text": "YAML",
        "explanation": "YAML jest używany w wielu narzędziach, ale klasyczne ARM templates są JSON. Bicep jest osobnym językiem, który kompiluje się do ARM JSON."
      },
      {
        "text": "HTML",
        "explanation": "HTML służy do stron webowych, nie do definiowania infrastruktury ARM."
      }
    ],
    "correctAnswer": "JSON",
    "generalExplanation": "ARM templates są definiowane w formacie JSON, opisując zasoby i ich konfigurację deklaratywnie."
  },
  {
    "id": 114,
    "question": "Which database product offers \"sub 5 millisecond\" response times as a feature?",
    "options": [
      {
        "text": "SQL Data Warehouse",
        "explanation": "SQL Data Warehouse, obecnie związany z Synapse, służy do analityki dużych danych, a nie jest produktem znanym z sub-5 ms odpowiedzi operacyjnych."
      },
      {
        "text": "Azure SQL Database",
        "explanation": "Azure SQL Database to relacyjna baza PaaS, ale pytanie wskazuje produkt o bardzo niskiej latencji dla małych operacji, czyli Cosmos DB."
      },
      {
        "text": "Cosmos DB",
        "explanation": "Cosmos DB jest projektowany pod bardzo niskie opóźnienia i globalną dystrybucję, w tym poziomy oferujące odpowiedzi poniżej 5 ms."
      },
      {
        "text": "SQL Server in a VM",
        "explanation": "SQL Server w VM wymaga zarządzania maszyną i nie jest usługą wskazywaną jako oferująca sub-5 ms jako charakterystyczną cechę."
      }
    ],
    "correctAnswer": "Cosmos DB",
    "generalExplanation": "Cosmos DB jest projektowany pod bardzo niskie opóźnienia i globalną dystrybucję, w tym poziomy oferujące odpowiedzi poniżej 5 ms."
  },
  {
    "id": 115,
    "question": "What is the core problem that you need to solve in order to have a high-availability application?",
    "options": [
      {
        "text": "You need to avoid single points of failure",
        "explanation": "Wysoka dostępność wymaga usunięcia pojedynczych punktów awarii, tak aby awaria jednego elementu nie zatrzymała całej aplikacji."
      },
      {
        "text": "You need to ensure your server has a lot of RAM and a lot of CPUs",
        "explanation": "Dużo RAM i CPU może poprawić wydajność, ale nie rozwiązuje problemu awarii pojedynczego serwera."
      },
      {
        "text": "You need to ensure the capacity of your server exceeds your highest number of expected concurrent users",
        "explanation": "Pojemność większa od maksymalnego ruchu pomaga przy wydajności, ale nie wystarczy, jeśli jeden komponent nadal może zatrzymać całość."
      },
      {
        "text": "You should have a backup copy of your application on standby, ready to be started up when the main application fails.",
        "explanation": "Backup standby może pomóc w odzyskiwaniu, ale wysoka dostępność wymaga aktywnej redundancji i projektowania bez pojedynczych punktów awarii."
      }
    ],
    "correctAnswer": "You need to avoid single points of failure",
    "generalExplanation": "Wysoka dostępność wymaga usunięcia pojedynczych punktów awarii, tak aby awaria jednego elementu nie zatrzymała całej aplikacji."
  },
  {
    "id": 116,
    "question": "Deploying Azure App Services applications consists of what two components? Pick two.",
    "options": [
      {
        "text": "Database scripts",
        "explanation": "Database scripts mogą być częścią wdrożenia aplikacji, ale nie są jednym z dwóch podstawowych składników Azure App Service."
      },
      {
        "text": "Configuration",
        "explanation": "Konfiguracja jest jednym z dwóch głównych elementów App Service: ustawienia aplikacji, runtime, connection strings i parametry platformy."
      },
      {
        "text": "Packaged code",
        "explanation": "Spakowany kod aplikacji jest drugim kluczowym elementem wdrożenia App Service."
      },
      {
        "text": "Managing operating system updates",
        "explanation": "W App Service, jako PaaS, Microsoft zarządza systemem operacyjnym i aktualizacjami. Klient nie wdraża OS patches."
      }
    ],
    "correctAnswer": [
      "Configuration",
      "Packaged code"
    ],
    "generalExplanation": "Konfiguracja jest jednym z dwóch głównych elementów App Service: ustawienia aplikacji, runtime, connection strings i parametry platformy. Spakowany kod aplikacji jest drugim kluczowym elementem wdrożenia App Service."
  },
  {
    "id": 117,
    "question": "What is a policy initiative in Azure?",
    "options": [
      {
        "text": "A custom designed policy",
        "explanation": "Custom policy to pojedyncza definicja polityki. Initiative nie oznacza jednej własnej polityki."
      },
      {
        "text": "The ability to group policies together",
        "explanation": "Policy initiative grupuje wiele polityk, aby można je było przypisać i raportować razem jako jeden zestaw zgodności."
      },
      {
        "text": "Requiring all resources in Azure to use tags",
        "explanation": "Wymaganie tagów może być jedną z polityk w initiative, ale nie definiuje samego pojęcia initiative."
      },
      {
        "text": "Assigning permissions to a role in Azure",
        "explanation": "Przypisywanie uprawnień do roli dotyczy RBAC, a nie Azure Policy initiative."
      }
    ],
    "correctAnswer": "The ability to group policies together",
    "generalExplanation": "Policy initiative grupuje wiele polityk, aby można je było przypisać i raportować razem jako jeden zestaw zgodności."
  },
  {
    "id": 118,
    "question": "Which Azure compute service allows you to run containerized applications without managing the underlying infrastructure?",
    "options": [
      {
        "text": "Azure Kubernetes Service (AKS)",
        "explanation": "AKS uruchamia kontenery w Kubernetes, ale nadal zarządzasz klastrem i jego konfiguracją bardziej niż w prostych serverless containers."
      },
      {
        "text": "Azure App Service",
        "explanation": "Azure App Service może hostować kontenery webowe, ale pytanie o uruchamianie kontenerów bez zarządzania infrastrukturą najlepiej pasuje do Azure Container Instances."
      },
      {
        "text": "Azure Virtual Machines",
        "explanation": "Azure Virtual Machines wymagają zarządzania systemem operacyjnym i infrastrukturą. To nie jest najprostsze uruchamianie kontenerów bez infrastruktury."
      },
      {
        "text": "Azure Container Instances",
        "explanation": "Azure Container Instances pozwala uruchamiać kontenery bez zarządzania VM, klastrem ani bazową infrastrukturą."
      }
    ],
    "correctAnswer": "Azure Container Instances",
    "generalExplanation": "Azure Container Instances pozwala uruchamiać kontenery bez zarządzania VM, klastrem ani bazową infrastrukturą."
  },
  {
    "id": 119,
    "question": "What is the service level agreement for two or more Azure Virtual Machines that have been placed into the same Availability Set in the same region?",
    "options": [
      {
        "text": "99.90%",
        "explanation": "99,90% jest niższe niż SLA dla dwóch lub więcej VM w tym samym Availability Set."
      },
      {
        "text": "99.99%",
        "explanation": "99,99% dotyczy zwykle maszyn rozmieszczonych w różnych Availability Zones, nie Availability Set."
      },
      {
        "text": "100%",
        "explanation": "100% SLA nie jest oferowane dla tego scenariusza."
      },
      {
        "text": "99.95%",
        "explanation": "Dwie lub więcej VM w tym samym Availability Set mają SLA 99,95% przy spełnieniu warunków usługi."
      }
    ],
    "correctAnswer": "99.95%",
    "generalExplanation": "Dwie lub więcej VM w tym samym Availability Set mają SLA 99,95% przy spełnieniu warunków usługi."
  },
  {
    "id": 120,
    "question": "Which Azure service can be enabled to enable Multi-Factor Authentication for administrators but not require it for regular users?",
    "options": [
      {
        "text": "Azure AD B2B",
        "explanation": "Azure AD B2B służy do współpracy z użytkownikami zewnętrznymi. Nie jest funkcją wymuszania MFA tylko dla administratorów."
      },
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall filtruje ruch sieciowy. Nie zarządza MFA dla kont administracyjnych."
      },
      {
        "text": "Advanced Threat Protection",
        "explanation": "Advanced Threat Protection wykrywa zagrożenia, ale nie jest mechanizmem selektywnego MFA dla ról administratorów."
      },
      {
        "text": "Privileged Identity Management",
        "explanation": "Privileged Identity Management może wymagać dodatkowej weryfikacji dla ról uprzywilejowanych, np. administratorów, bez narzucania tego wszystkim zwykłym użytkownikom."
      }
    ],
    "correctAnswer": "Privileged Identity Management",
    "generalExplanation": "Privileged Identity Management może wymagać dodatkowej weryfikacji dla ról uprzywilejowanych, np. administratorów, bez narzucania tego wszystkim zwykłym użytkownikom."
  },
  {
    "id": 121,
    "question": "What is the significance of the Azure region? Why is it important?",
    "options": [
      {
        "text": "Even though you have to choose a region when creating resources, there's generally no consequence of what you select. You can create a network in one region and then create virtual machines for that network in another region.",
        "explanation": "Wybór regionu ma konsekwencje: lokalizacja wpływa na latencję, dostępność usług, zgodność i czasem zależności między zasobami."
      },
      {
        "text": "Region is just a folder structure in which you organize resources, much like file folders on a computer.",
        "explanation": "Region nie jest folderem organizacyjnym. Do organizacji zasobów służą resource groups, subskrypcje i management groups."
      },
      {
        "text": "Once you select a region, you cannot create resources outside of that region. So selecting the right region is an important decision.",
        "explanation": "Wybranie regionu dla jednego zasobu nie blokuje tworzenia innych zasobów w innych regionach, choć niektóre zależności muszą być w tym samym regionie."
      },
      {
        "text": "You must select a region when creating most resources, and the region is the area of the world where those resources will be physically located.",
        "explanation": "Region określa fizyczny obszar świata, w którym zasób zostanie uruchomiony. Ma znaczenie dla latencji, dostępności usług i wymagań lokalizacji danych."
      }
    ],
    "correctAnswer": "You must select a region when creating most resources, and the region is the area of the world where those resources will be physically located.",
    "generalExplanation": "Region określa fizyczny obszar świata, w którym zasób zostanie uruchomiony. Ma znaczenie dla latencji, dostępności usług i wymagań lokalizacji danych."
  },
  {
    "id": 122,
    "question": "Which of the following is a key benefit of using cloud services like Microsoft Azure?",
    "options": [
      {
        "text": "Reduced upfront capital expenditure (CapEx) by paying only for what you use.",
        "explanation": "Chmura pozwala ograniczyć CapEx, bo płacisz za zużycie zamiast kupować sprzęt z góry."
      },
      {
        "text": "Fixed costs that do not vary based on usage.",
        "explanation": "Koszty chmury zwykle zmieniają się wraz z użyciem. Stały koszt niezależny od wykorzystania nie jest główną zaletą Azure."
      },
      {
        "text": "Increased responsibility for managing physical hardware and infrastructure.",
        "explanation": "Cloud zmniejsza odpowiedzialność za fizyczny sprzęt i centra danych, bo tym zarządza dostawca."
      },
      {
        "text": "Limited scalability and flexibility for changing workloads.",
        "explanation": "Jedną z głównych zalet chmury jest skalowalność i elastyczność. Ograniczona skalowalność byłaby wadą, nie korzyścią."
      }
    ],
    "correctAnswer": "Reduced upfront capital expenditure (CapEx) by paying only for what you use.",
    "generalExplanation": "Chmura pozwala ograniczyć CapEx, bo płacisz za zużycie zamiast kupować sprzęt z góry."
  },
  {
    "id": 123,
    "question": "True or false: If your feature is in the General Availability phase, then your feature will receive support from all Microsoft support channels.",
    "options": [
      {
        "text": "TRUE",
        "explanation": "General Availability oznacza pełną dostępność usługi i standardowe kanały wsparcia Microsoft."
      },
      {
        "text": "FALSE",
        "explanation": "Fałsz byłby właściwy dla usług preview. Preview zwykle ma ograniczone wsparcie i nie powinno być używane tak samo jak GA w produkcji."
      }
    ],
    "correctAnswer": "TRUE",
    "generalExplanation": "General Availability oznacza pełną dostępność usługi i standardowe kanały wsparcia Microsoft."
  },
  {
    "id": 124,
    "question": "What are resource groups?",
    "options": [
      {
        "text": "Based on the tag assigned to a resource by the deployment script, it is assigned to a group",
        "explanation": "Tagi pomagają klasyfikować zasoby, ale resource group nie jest automatycznie nadawana na podstawie tagu przez sam Azure."
      },
      {
        "text": "Automatically assigned groups of resources that all have the same type (virtual machine, app service, etc)",
        "explanation": "Resource groups nie są automatycznymi grupami zasobów tego samego typu. Można w nich mieszać VM, sieci, bazy danych i inne zasoby."
      },
      {
        "text": "A folder structure in Azure in which you organize resources like databases, virtual machines, virtual networks, or almost any resource",
        "explanation": "Resource group to logiczny kontener, podobny do folderu, w którym organizujesz powiązane zasoby Azure."
      },
      {
        "text": "Within Azure security model, users are organized into groups, and those groups are granted permissions to resources",
        "explanation": "Grupy użytkowników i uprawnienia dotyczą Microsoft Entra ID oraz RBAC. Resource group organizuje zasoby, nie użytkowników."
      }
    ],
    "correctAnswer": "A folder structure in Azure in which you organize resources like databases, virtual machines, virtual networks, or almost any resource",
    "generalExplanation": "Resource group to logiczny kontener, podobny do folderu, w którym organizujesz powiązane zasoby Azure."
  },
  {
    "id": 125,
    "question": "Which of the following would be an example of an Internet of Things (IoT) device?",
    "options": [
      {
        "text": "A web application that people use to perform their banking tasks",
        "explanation": "Aplikacja bankowa webowa to klasyczna aplikacja internetowa używana przez ludzi, a nie urządzenie IoT."
      },
      {
        "text": "A video game, installed on Windows clients around the world, that keep user scores in the cloud.",
        "explanation": "Gra na Windows z wynikami w chmurze to aplikacja kliencka, nie urządzenie raportujące dane ze świata fizycznego."
      },
      {
        "text": "A mobile application that is used to watch online video courses",
        "explanation": "Aplikacja mobilna do oglądania kursów to software dla użytkownika, nie urządzenie IoT."
      },
      {
        "text": "A refrigerator that monitors how much milk you have left and sends you a text message when you are running low",
        "explanation": "Lodówka monitorująca stan mleka i wysyłająca dane do sieci jest przykładem IoT: urządzenie fizyczne zbiera dane i komunikuje się z chmurą."
      }
    ],
    "correctAnswer": "A refrigerator that monitors how much milk you have left and sends you a text message when you are running low",
    "generalExplanation": "Lodówka monitorująca stan mleka i wysyłająca dane do sieci jest przykładem IoT: urządzenie fizyczne zbiera dane i komunikuje się z chmurą."
  },
  {
    "id": 126,
    "question": "Which style of computing is easiest when migrating an existing hosted application from your own data center into the cloud?",
    "options": [
      {
        "text": "PaaS",
        "explanation": "PaaS wymaga zwykle dostosowania aplikacji do platformy, więc migracja istniejącego hostingu może być trudniejsza niż lift-and-shift."
      },
      {
        "text": "Serverless",
        "explanation": "Serverless wymaga przebudowy aplikacji na funkcje lub zdarzenia. To nie jest najłatwiejszy pierwszy krok przy migracji istniejącego hostingu."
      },
      {
        "text": "IaaS",
        "explanation": "IaaS jest najłatwiejszy przy migracji lift-and-shift, bo można przenieść aplikację na VM podobną do dotychczasowego serwera."
      },
      {
        "text": "FaaS",
        "explanation": "FaaS jest modelem funkcji zdarzeniowych i zwykle wymaga większej zmiany architektury niż migracja do VM."
      }
    ],
    "correctAnswer": "IaaS",
    "generalExplanation": "IaaS jest najłatwiejszy przy migracji lift-and-shift, bo można przenieść aplikację na VM podobną do dotychczasowego serwera."
  },
  {
    "id": 127,
    "question": "What does it mean that security is a \"shared model\" in Azure?",
    "options": [
      {
        "text": "Azure takes no responsibility for security.",
        "explanation": "Azure ma odpowiedzialność za bezpieczeństwo platformy, centrów danych i usług bazowych. Nie jest prawdą, że nie odpowiada za nic."
      },
      {
        "text": "Azure takes care of security completely.",
        "explanation": "Azure nie przejmuje całego bezpieczeństwa. Klient nadal odpowiada m.in. za dane, tożsamości, konfigurację, aplikacje i sekrety."
      },
      {
        "text": "You must keep your security keys private and ensure it doesn't get out.",
        "explanation": "Ochrona kluczy jest ważną częścią odpowiedzialności klienta, ale shared model obejmuje szerszy podział zadań między klienta i Microsoft."
      },
      {
        "text": "Both users and Azure have responsibilities for security.",
        "explanation": "Shared responsibility oznacza, że Microsoft i klient mają różne obowiązki bezpieczeństwa zależnie od modelu usługi: IaaS, PaaS lub SaaS."
      }
    ],
    "correctAnswer": "Both users and Azure have responsibilities for security.",
    "generalExplanation": "Shared responsibility oznacza, że Microsoft i klient mają różne obowiązki bezpieczeństwa zależnie od modelu usługi: IaaS, PaaS lub SaaS."
  },
  {
    "id": 128,
    "question": "What does it mean if a service is in Private Preview mode?",
    "options": [
      {
        "text": "Anyone can use the service for any reason",
        "explanation": "Private Preview nie jest dostępne dla każdego. Dostęp jest ograniczony i kontrolowany przez Microsoft."
      },
      {
        "text": "The service is generally available for use, and Microsoft will provide support for it",
        "explanation": "General availability oznacza pełną dostępność i standardowe wsparcie. Private Preview jest wcześniejszą, ograniczoną fazą."
      },
      {
        "text": "You have to apply to get selected in order to use that service",
        "explanation": "Private Preview oznacza, że trzeba zgłosić chęć udziału lub otrzymać zaproszenie; Microsoft decyduje, kto uzyska dostęp."
      },
      {
        "text": "Anyone can use the service but it must not be for production use",
        "explanation": "Public Preview jest szerzej dostępne, ale zwykle niezalecane produkcyjnie. Private Preview nie jest dostępne dla każdego."
      }
    ],
    "correctAnswer": "You have to apply to get selected in order to use that service",
    "generalExplanation": "Private Preview oznacza, że trzeba zgłosić chęć udziału lub otrzymać zaproszenie; Microsoft decyduje, kto uzyska dostęp."
  },
  {
    "id": 129,
    "question": "Which Azure management tool analyzes your usage of Azure and makes suggestions specifically targeted to help you optimize your usage of Azure regarding cost, security and performance?",
    "options": [
      {
        "text": "Azure Advisor",
        "explanation": "Azure Advisor analizuje użycie środowiska i daje rekomendacje optymalizacyjne dotyczące kosztów, bezpieczeństwa, wydajności i niezawodności."
      },
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall zabezpiecza i filtruje ruch sieciowy. Nie analizuje całego użycia Azure pod kątem rekomendacji optymalizacyjnych."
      },
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health informuje o incydentach usług Azure. Nie daje rekomendacji optymalizacji Twoich zasobów."
      },
      {
        "text": "Azure Mobile App",
        "explanation": "Azure Mobile App umożliwia zarządzanie i monitorowanie z telefonu, ale nie jest silnikiem rekomendacji optymalizacyjnych."
      }
    ],
    "correctAnswer": "Azure Advisor",
    "generalExplanation": "Azure Advisor analizuje użycie środowiska i daje rekomendacje optymalizacyjne dotyczące kosztów, bezpieczeństwa, wydajności i niezawodności."
  },
  {
    "id": 130,
    "question": "If you wanted to get an alert every time a new virtual machine is created, where could you create that?",
    "options": [
      {
        "text": "Azure Dashboard",
        "explanation": "Azure Dashboard pokazuje wybrane widoki i kafelki, ale nie jest miejscem definiowania alertów na zdarzenia tworzenia zasobów."
      },
      {
        "text": "Subscription settings",
        "explanation": "Subscription settings zarządzają ustawieniami subskrypcji, ale alerty na zdarzenia zasobów tworzy się przez monitoring i activity logs."
      },
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor pozwala tworzyć alerty na podstawie zdarzeń Activity Log, np. utworzenia nowej maszyny wirtualnej."
      },
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy może wymuszać lub audytować reguły zgodności, ale do alertowania o zdarzeniu utworzenia VM najlepiej użyć Azure Monitor."
      }
    ],
    "correctAnswer": "Azure Monitor",
    "generalExplanation": "Azure Monitor pozwala tworzyć alerty na podstawie zdarzeń Activity Log, np. utworzenia nowej maszyny wirtualnej."
  },
  {
    "id": 131,
    "question": "TRUE OR FALSE: Azure Tenant is a dedicated and trusted instance of Microsoft Entra ID that's automatically created when your organization signs up for a Microsoft cloud service subscription.",
    "options": [
      {
        "text": "FALSE",
        "explanation": "To zdanie nie jest fałszywe. Tenant Azure to dedykowana instancja Microsoft Entra ID tworzona dla organizacji przy subskrypcji usług chmurowych."
      },
      {
        "text": "TRUE",
        "explanation": "Tenant Azure jest dedykowaną, zaufaną instancją Microsoft Entra ID dla organizacji, powiązaną z jej usługami chmurowymi i tożsamościami."
      }
    ],
    "correctAnswer": "TRUE",
    "generalExplanation": "Tenant Azure jest dedykowaną, zaufaną instancją Microsoft Entra ID dla organizacji, powiązaną z jej usługami chmurowymi i tożsamościami."
  },
  {
    "id": 132,
    "question": "If you have an Azure free account, with a $200 credit for the first month, what happens when you reach the $200 limit?",
    "options": [
      {
        "text": "All services are stopped and you must decide whether you want to convert to a paid account or not.",
        "explanation": "Po wykorzystaniu kredytu konto darmowe zatrzymuje usługi, dopóki użytkownik nie zdecyduje, czy przejść na płatne rozliczanie."
      },
      {
        "text": "Your credit card is automatically billed.",
        "explanation": "Karta kredytowa nie powinna zostać automatycznie obciążona po przekroczeniu darmowego kredytu bez decyzji użytkownika o przejściu na płatne konto."
      },
      {
        "text": "You cannot create any more resources until you add more credits to the account.",
        "explanation": "Problem nie polega tylko na blokadzie tworzenia nowych zasobów; działające usługi mogą zostać zatrzymane do czasu wyboru płatnego konta."
      },
      {
        "text": "Your account is automatically closed.",
        "explanation": "Konto nie jest automatycznie zamykane po wykorzystaniu kredytu. Użytkownik może zdecydować o przejściu na płatne rozliczanie."
      }
    ],
    "correctAnswer": "All services are stopped and you must decide whether you want to convert to a paid account or not.",
    "generalExplanation": "Po wykorzystaniu kredytu konto darmowe zatrzymuje usługi, dopóki użytkownik nie zdecyduje, czy przejść na płatne rozliczanie."
  },
  {
    "id": 133,
    "question": "What is the recommended way within Azure to store secrets such as private cryptographic keys?",
    "options": [
      {
        "text": "In an Azure Storage account private blob container",
        "explanation": "Private blob container może ograniczać dostęp, ale storage account nie jest zalecanym miejscem do zarządzania kluczami kryptograficznymi i sekretami."
      },
      {
        "text": "Azure Advanced Threat Protection (ATP)",
        "explanation": "Azure Advanced Threat Protection wykrywa zagrożenia. Nie jest magazynem sekretów ani kluczy."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "Azure Key Vault jest przeznaczony do bezpiecznego przechowywania sekretów, kluczy kryptograficznych i certyfikatów."
      },
      {
        "text": "Within the application code",
        "explanation": "Trzymanie sekretów w kodzie aplikacji jest złą praktyką, bo sekrety mogą trafić do repozytorium, logów lub artefaktów build."
      }
    ],
    "correctAnswer": "Azure Key Vault",
    "generalExplanation": "Azure Key Vault jest przeznaczony do bezpiecznego przechowywania sekretów, kluczy kryptograficznych i certyfikatów."
  },
  {
    "id": 134,
    "question": "What two advantages does cloud computing elasticity give to you? Pick two.",
    "options": [
      {
        "text": "You can do more regular backups and you won't lose as much when that backup gets restored",
        "explanation": "Regularne backupy dotyczą ochrony danych i recovery. Elasticity dotyczy skalowania zasobów według zapotrzebowania."
      },
      {
        "text": "You can serve users better during peak traffic periods by automatically adding more capacity.",
        "explanation": "Elasticity pozwala automatycznie dodać pojemność w okresach szczytowego ruchu, dzięki czemu użytkownicy są lepiej obsługiwani."
      },
      {
        "text": "Servers have become a commodity and Microsoft doesn't even need to even fix servers that fail within Azure.",
        "explanation": "To nie jest prawdziwa zaleta elasticity. Awaria serwera nadal wymaga niezawodności platformy i projektowania odporności."
      },
      {
        "text": "You can save money.",
        "explanation": "Elasticity może obniżyć koszty, bo zasoby można zmniejszać w okresach niskiego użycia i nie płacić za niepotrzebną pojemność."
      }
    ],
    "correctAnswer": [
      "You can serve users better during peak traffic periods by automatically adding more capacity.",
      "You can save money."
    ],
    "generalExplanation": "Elasticity pozwala automatycznie dodać pojemność w okresach szczytowego ruchu, dzięki czemu użytkownicy są lepiej obsługiwani. Elasticity może obniżyć koszty, bo zasoby można zmniejszać w okresach niskiego użycia i nie płacić za niepotrzebną pojemność."
  },
  {
    "id": 135,
    "question": "Which of the following are one of the advantages of running your cloud in a private cloud?",
    "options": [
      {
        "text": "Assurance that your code, data and applications are running on isolated hardware, and on an isolated network.",
        "explanation": "Private cloud daje większą izolację sprzętu, sieci, danych i aplikacji niż typowy public cloud multi-tenant."
      },
      {
        "text": "You own the hardware, so you can change private cloud hosting providers easily.",
        "explanation": "Posiadanie sprzętu często utrudnia zmianę dostawcy, bo wiąże się z inwestycją i infrastrukturą. To nie jest typowa przewaga private cloud."
      },
      {
        "text": "Private cloud is significantly cheaper than the public cloud.",
        "explanation": "Private cloud zwykle nie jest znacząco tańszy od public cloud. Często jest droższy, ale daje większą kontrolę i izolację."
      }
    ],
    "correctAnswer": "Assurance that your code, data and applications are running on isolated hardware, and on an isolated network.",
    "generalExplanation": "Private cloud daje większą izolację sprzętu, sieci, danych i aplikacji niż typowy public cloud multi-tenant."
  },
  {
    "id": 136,
    "question": "How does Multi-Factor Authentication make a system more secure?",
    "options": [
      {
        "text": "It doesn't make it more secure",
        "explanation": "MFA zwiększa bezpieczeństwo, więc stwierdzenie, że nic nie zmienia, jest błędne."
      },
      {
        "text": "It requires the user to have access to their verified phone in order to log in",
        "explanation": "MFA wymaga dodatkowego czynnika, np. zweryfikowanego telefonu lub aplikacji. Atakujący potrzebuje czegoś więcej niż hasła."
      },
      {
        "text": "It allows the user to log in without a password because they have already previously been validated using a browser cookie",
        "explanation": "Logowanie bez hasła na podstawie cookie nie opisuje MFA. MFA dodaje dodatkową weryfikację, a nie pomija ją."
      },
      {
        "text": "It is another password that a user has to memorize, making it more secure",
        "explanation": "MFA nie jest po prostu kolejnym hasłem do zapamiętania. Często używa telefonu, aplikacji, tokena lub biometrii."
      }
    ],
    "correctAnswer": "It requires the user to have access to their verified phone in order to log in",
    "generalExplanation": "MFA wymaga dodatkowego czynnika, np. zweryfikowanego telefonu lub aplikacji. Atakujący potrzebuje czegoś więcej niż hasła."
  },
  {
    "id": 137,
    "question": "What is the name of the collective set of APIs that provide machine learning and artificial intelligence services to your own applications like voice recognition, image tagging, and chat bot?",
    "options": [
      {
        "text": "Azure Machine Learning Studio",
        "explanation": "Azure Machine Learning Studio służy do tworzenia i trenowania własnych modeli ML, ale pytanie dotyczy gotowych API AI do aplikacji."
      },
      {
        "text": "Azure AI services (formerly Cognitive Services)",
        "explanation": "Azure AI services to zestaw gotowych usług i API AI, np. rozpoznawanie mowy, obrazów, języka i chatbotów."
      },
      {
        "text": "Azure AI Language services (formerly LUIS)",
        "explanation": "Azure AI Language services są częścią szerszych Azure AI services i dotyczą języka. Nie obejmują całego zestawu usług, np. vision i speech."
      },
      {
        "text": "Azure Batch",
        "explanation": "Azure Batch uruchamia zadania obliczeniowe wsadowo na dużą skalę. Nie jest zestawem API AI."
      }
    ],
    "correctAnswer": "Azure AI services (formerly Cognitive Services)",
    "generalExplanation": "Azure AI services to zestaw gotowych usług i API AI, np. rozpoznawanie mowy, obrazów, języka i chatbotów."
  },
  {
    "id": 138,
    "question": "What is an Azure Subscription?",
    "options": [
      {
        "text": "Each user account is associated with a unique subscription. If you need more than one subscription, you need to create multiple user accounts.",
        "explanation": "Subskrypcja nie jest unikalnie przypisana do jednego użytkownika. Wielu użytkowników może mieć dostęp do jednej subskrypcji z różnymi rolami."
      },
      {
        "text": "It is the level at which services are billed. All resources created under a subscription are billed to that subscription.",
        "explanation": "Azure Subscription jest poziomem rozliczeniowym: zasoby utworzone w subskrypcji są billed do tej subskrypcji i zarządzane w jej granicach."
      }
    ],
    "correctAnswer": "It is the level at which services are billed. All resources created under a subscription are billed to that subscription.",
    "generalExplanation": "Azure Subscription jest poziomem rozliczeniowym: zasoby utworzone w subskrypcji są billed do tej subskrypcji i zarządzane w jej granicach."
  },
  {
    "id": 139,
    "question": "What is the primary purpose of Azure Sovereign Regions?",
    "options": [
      {
        "text": "To enable faster performance for global applications by reducing latency.",
        "explanation": "Niższa latencja może wynikać z wyboru regionu blisko użytkowników, ale sovereign regions istnieją przede wszystkim dla wymagań prawnych i rezydencji danych."
      },
      {
        "text": "To offer Azure services that comply with specific government regulations and data residency requirements.",
        "explanation": "Azure Sovereign Regions pomagają spełnić specjalne wymagania rządowe, regulacyjne i data residency w określonych krajach lub sektorach."
      },
      {
        "text": "To provide lower-cost Azure services for small and medium-sized businesses.",
        "explanation": "Sovereign regions nie są ofertą niższych kosztów dla małych i średnich firm."
      },
      {
        "text": "To provide free Azure services for educational institutions and non-profits.",
        "explanation": "Sovereign regions nie oznaczają darmowych usług dla edukacji lub organizacji non-profit. To specjalne środowiska regulacyjne."
      }
    ],
    "correctAnswer": "To offer Azure services that comply with specific government regulations and data residency requirements.",
    "generalExplanation": "Azure Sovereign Regions pomagają spełnić specjalne wymagania rządowe, regulacyjne i data residency w określonych krajach lub sektorach."
  },
  {
    "id": 140,
    "question": "What is the goal of a DDoS attack?",
    "options": [
      {
        "text": "To extract data from a database",
        "explanation": "Wyciąganie danych z bazy to cel ataków takich jak SQL injection lub kradzież danych, a nie DDoS."
      },
      {
        "text": "To crack the password from administrator accounts",
        "explanation": "Łamanie haseł administratorów to brute force lub password attack. DDoS nie próbuje zdobyć hasła."
      },
      {
        "text": "To trick users into giving up personal information",
        "explanation": "Nakłanianie użytkowników do podania danych to phishing lub social engineering. DDoS koncentruje się na niedostępności usługi."
      },
      {
        "text": "To overwhelm and exhaust application resources",
        "explanation": "DDoS ma przeciążyć i wyczerpać zasoby aplikacji lub sieci, aby prawidłowi użytkownicy nie mogli korzystać z usługi."
      }
    ],
    "correctAnswer": "To overwhelm and exhaust application resources",
    "generalExplanation": "DDoS ma przeciążyć i wyczerpać zasoby aplikacji lub sieci, aby prawidłowi użytkownicy nie mogli korzystać z usługi."
  },
  {
    "id": 141,
    "question": "Which of the following scenarios is best addressed by using Microsoft Entra ID?",
    "options": [
      {
        "text": "Storing and analyzing large volumes of structured data.",
        "explanation": "Duże wolumeny danych strukturalnych analizuje się usługami bazodanowymi i analitycznymi, np. Synapse, a nie Microsoft Entra ID."
      },
      {
        "text": "Providing a centralized identity management solution for hybrid cloud environments.",
        "explanation": "Microsoft Entra ID najlepiej pasuje do centralnego zarządzania tożsamością, logowaniem i dostępem w środowiskach cloud oraz hybrid."
      },
      {
        "text": "Automating the deployment of virtual machines using Infrastructure as Code (IaC).",
        "explanation": "Automatyzacja wdrożeń VM przez IaC dotyczy ARM/Bicep/Terraform lub pipeline, a nie usługi tożsamości."
      },
      {
        "text": "Monitoring the performance of Azure resources in real-time.",
        "explanation": "Monitoring wydajności zasobów w czasie rzeczywistym to rola Azure Monitor, nie Microsoft Entra ID."
      }
    ],
    "correctAnswer": "Providing a centralized identity management solution for hybrid cloud environments.",
    "generalExplanation": "Microsoft Entra ID najlepiej pasuje do centralnego zarządzania tożsamością, logowaniem i dostępem w środowiskach cloud oraz hybrid."
  },
  {
    "id": 142,
    "question": "Where can you go to see what standards Microsoft is in compliance with?",
    "options": [
      {
        "text": "Azure Privacy Page",
        "explanation": "Azure Privacy Page może opisywać prywatność, ale lista certyfikacji i standardów zgodności Microsoft znajduje się w Trust Center/Service Trust Portal."
      },
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health pokazuje kondycję usług i incydenty, nie listę standardów compliance Microsoft."
      },
      {
        "text": "Trust Center",
        "explanation": "Trust Center pokazuje standardy, certyfikacje i materiały dotyczące zgodności Microsoft."
      },
      {
        "text": "Azure Security Center",
        "explanation": "Azure Security Center, obecnie Defender for Cloud, pomaga zabezpieczać zasoby, ale nie jest główną stroną listy standardów compliance Microsoft."
      }
    ],
    "correctAnswer": "Trust Center",
    "generalExplanation": "Trust Center pokazuje standardy, certyfikacje i materiały dotyczące zgodności Microsoft."
  },
  {
    "id": 143,
    "question": "What happens if Azure does not meet its own Service Level Agreement guarantee (SLA)?",
    "options": [
      {
        "text": "You will be financially refunded a small amount of your monthly fee",
        "explanation": "Jeśli Microsoft nie spełni SLA, klient może otrzymać service credit, czyli częściowy zwrot/opust na miesięcznej opłacie zgodnie z warunkami SLA."
      },
      {
        "text": "The service will be free that month",
        "explanation": "Niespełnienie SLA zwykle nie oznacza, że cała usługa jest darmowa przez miesiąc. Stosuje się określone service credits."
      },
      {
        "text": "It's not possible. Azure will always meet it's SLA?",
        "explanation": "Azure może nie spełnić SLA; właśnie dlatego warunki SLA opisują rekompensatę i sposób zgłoszenia roszczenia."
      }
    ],
    "correctAnswer": "You will be financially refunded a small amount of your monthly fee",
    "generalExplanation": "Jeśli Microsoft nie spełni SLA, klient może otrzymać service credit, czyli częściowy zwrot/opust na miesięcznej opłacie zgodnie z warunkami SLA."
  },
  {
    "id": 144,
    "question": "What operating systems does an Azure Virtual Machine support?",
    "options": [
      {
        "text": "macOS",
        "explanation": "macOS nie jest standardowo wspieranym systemem operacyjnym dla Azure Virtual Machines."
      },
      {
        "text": "Windows, Linux and macOS",
        "explanation": "Azure VM wspiera Windows i Linux, ale nie macOS jako zwykły system VM."
      },
      {
        "text": "Windows",
        "explanation": "Windows jest wspierany, ale nie jest jedynym systemem dla Azure VM."
      },
      {
        "text": "Windows and Linux",
        "explanation": "Azure Virtual Machines obsługują Windows i Linux jako podstawowe systemy operacyjne."
      },
      {
        "text": "Linux",
        "explanation": "Linux jest wspierany, ale odpowiedź jest niepełna, bo Azure VM obsługuje również Windows."
      }
    ],
    "correctAnswer": "Windows and Linux",
    "generalExplanation": "Azure Virtual Machines obsługują Windows i Linux jako podstawowe systemy operacyjne."
  },
  {
    "id": 145,
    "question": "Which Azure service, when enabled, will automatically block traffic to or from known malicious IP addresses and domains?",
    "options": [
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall ma opcję threat intelligence, która może automatycznie blokować ruch do lub z adresów IP i domen znanych jako złośliwe."
      },
      {
        "text": "Load Balancer",
        "explanation": "Load Balancer rozdziela ruch między backendy. Nie blokuje automatycznie złośliwych IP i domen na podstawie threat intelligence."
      },
      {
        "text": "Azure Active Directory",
        "explanation": "Azure Active Directory, obecnie Microsoft Entra ID, zarządza tożsamością i dostępem, a nie filtrowaniem ruchu sieciowego IP/domain."
      },
      {
        "text": "Network Security Groups",
        "explanation": "Network Security Groups filtrują ruch według reguł, ale same nie mają takiej funkcji threat intelligence jak Azure Firewall."
      }
    ],
    "correctAnswer": "Azure Firewall",
    "generalExplanation": "Azure Firewall ma opcję threat intelligence, która może automatycznie blokować ruch do lub z adresów IP i domen znanych jako złośliwe."
  },
  {
    "id": 146,
    "question": "What advantage does an Application Gateway have over a Load Balancer?",
    "options": [
      {
        "text": "Application Gateway can be scaled so that two, three or more instances of the gateway can support your application.",
        "explanation": "Application Gateway może się skalować, ale Load Balancer także może obsługiwać wysoką dostępność i skalę. To nie jest główna różnica wskazana w pytaniu."
      },
      {
        "text": "Application gateway understands the HTTP protocol and can interpret the URL and make decisions based on the URL.",
        "explanation": "Application Gateway działa na warstwie aplikacyjnej HTTP/HTTPS i może podejmować decyzje na podstawie URL path lub hosta."
      },
      {
        "text": "Application Gateway is more like an enterprise-grade product. You should not use a load balancer in production.",
        "explanation": "Load Balancer jak najbardziej może być używany produkcyjnie. Różnica polega na warstwie działania, nie na klasie enterprise."
      }
    ],
    "correctAnswer": "Application gateway understands the HTTP protocol and can interpret the URL and make decisions based on the URL.",
    "generalExplanation": "Application Gateway działa na warstwie aplikacyjnej HTTP/HTTPS i może podejmować decyzje na podstawie URL path lub hosta."
  },
  {
    "id": 147,
    "question": "Which feature within Azure alerts you to service issues that happen in Azure itself, not specifically related to your own resources?",
    "options": [
      {
        "text": "Azure Service Health",
        "explanation": "Azure Service Health informuje o problemach usług Azure, planowanych pracach i awariach platformy, także takich niezwiązanych bezpośrednio z Twoją konfiguracją."
      },
      {
        "text": "Azure Portal Dashboard",
        "explanation": "Azure Portal Dashboard pokazuje wybrane kafelki i zasoby. Nie jest usługą alertów o incydentach platformy Azure."
      },
      {
        "text": "Azure Security Center",
        "explanation": "Azure Security Center/Defender for Cloud skupia się na bezpieczeństwie zasobów, a nie na komunikatach o awariach usług Azure."
      },
      {
        "text": "Azure Monitor",
        "explanation": "Azure Monitor monitoruje metryki i logi zasobów. Może alertować o Twoich zasobach, ale Service Health jest właściwe dla problemów po stronie Azure."
      }
    ],
    "correctAnswer": "Azure Service Health",
    "generalExplanation": "Azure Service Health informuje o problemach usług Azure, planowanych pracach i awariach platformy, także takich niezwiązanych bezpośrednio z Twoją konfiguracją."
  },
  {
    "id": 148,
    "question": "What software is used to synchronize your on premises AD with your Azure AD?",
    "options": [
      {
        "text": "LDAP",
        "explanation": "LDAP to protokół katalogowy, nie narzędzie synchronizujące lokalne AD z Azure AD."
      },
      {
        "text": "AD Connect",
        "explanation": "AD Connect synchronizuje lokalny Active Directory z Azure AD/Microsoft Entra ID."
      },
      {
        "text": "Azure AD Federation Services",
        "explanation": "Azure AD Federation Services nie jest właściwą nazwą narzędzia synchronizacji. Federacja i synchronizacja to różne mechanizmy."
      },
      {
        "text": "Azure AD Domain Services",
        "explanation": "Azure AD Domain Services zapewnia zarządzane usługi domenowe w Azure, ale nie jest narzędziem synchronizacji lokalnego AD z Azure AD."
      }
    ],
    "correctAnswer": "AD Connect",
    "generalExplanation": "AD Connect synchronizuje lokalny Active Directory z Azure AD/Microsoft Entra ID."
  },
  {
    "id": 149,
    "question": "With Azure public cloud, anyone with a valid credit card can sign up and get services immediately",
    "options": [
      {
        "text": "FALSE",
        "explanation": "To zdanie nie jest fałszywe dla public cloud w krajach obsługiwanych przez Azure: klienci mogą zarejestrować konto i zacząć korzystać z usług."
      },
      {
        "text": "TRUE",
        "explanation": "Azure public cloud jest publicznie dostępny dla klientów w obsługiwanych krajach; można założyć konto i używać usług po spełnieniu wymagań płatności/rejestracji."
      }
    ],
    "correctAnswer": "TRUE",
    "generalExplanation": "Azure public cloud jest publicznie dostępny dla klientów w obsługiwanych krajach; można założyć konto i używać usług po spełnieniu wymagań płatności/rejestracji."
  },
  {
    "id": 150,
    "question": "What are groups of subscriptions called?",
    "options": [
      {
        "text": "Azure Policy",
        "explanation": "Azure Policy służy do egzekwowania reguł governance i compliance. Nie jest grupą subskrypcji."
      },
      {
        "text": "Management Groups",
        "explanation": "Management Groups pozwalają grupować subskrypcje hierarchicznie, aby łatwiej zarządzać politykami, dostępem i zgodnością."
      },
      {
        "text": "Subscription Groups",
        "explanation": "Subscription Groups brzmi opisowo, ale nie jest poprawną nazwą usługi Azure."
      },
      {
        "text": "ARM Groups",
        "explanation": "ARM Groups nie jest nazwą grup subskrypcji. ARM zarządza zasobami, a subskrypcje grupuje się przez Management Groups."
      }
    ],
    "correctAnswer": "Management Groups",
    "generalExplanation": "Management Groups pozwalają grupować subskrypcje hierarchicznie, aby łatwiej zarządzać politykami, dostępem i zgodnością."
  },
  {
    "id": 151,
    "question": "What entities can management groups contain?",
    "options": [
      {
        "text": "Resource groups",
        "explanation": "Resource groups przechowują zasoby Azure w obrębie subskrypcji. Management group nie zawiera bezpośrednio resource groups."
      },
      {
        "text": "Resources",
        "explanation": "Resources, takie jak VM lub storage account, należą do resource groups i subskrypcji. Nie są bezpośrednimi dziećmi management group."
      },
      {
        "text": "Management groups",
        "explanation": "Management groups mogą zawierać inne management groups, tworząc hierarchię zarządzania dla dużej organizacji."
      },
      {
        "text": "Subscriptions",
        "explanation": "Subscriptions mogą być przypisane do management groups, aby centralnie stosować polityki, role i zasady governance."
      }
    ],
    "correctAnswer": [
      "Management groups",
      "Subscriptions"
    ],
    "generalExplanation": "Management groups mogą zawierać inne management groups, tworząc hierarchię zarządzania dla dużej organizacji. Subscriptions mogą być przypisane do management groups, aby centralnie stosować polityki, role i zasady governance."
  },
  {
    "id": 152,
    "question": "What is the primary purpose of Microsoft Entra ID?",
    "options": [
      {
        "text": "To store and manage large amounts of data",
        "explanation": "Duże ilości danych przechowują usługi storage i bazy danych, np. Azure Storage, SQL Database lub Cosmos DB. Entra ID nie jest magazynem danych aplikacyjnych."
      },
      {
        "text": "To secure network traffic and protect against cyber threats",
        "explanation": "Ochrona ruchu sieciowego to rola usług takich jak Firewall, NSG, DDoS Protection lub WAF. Entra ID koncentruje się na tożsamości i dostępie."
      },
      {
        "text": "To manage user identities and access to applications and resources",
        "explanation": "Microsoft Entra ID zarządza użytkownikami, grupami, aplikacjami, logowaniem i dostępem do zasobów."
      },
      {
        "text": "To provide on-premises domain services in the cloud",
        "explanation": "Usługi domenowe w chmurze zapewnia Microsoft Entra Domain Services. Entra ID samo w sobie jest usługą tożsamości, nie klasycznym kontrolerem domeny on-premises."
      }
    ],
    "correctAnswer": "To manage user identities and access to applications and resources",
    "generalExplanation": "Microsoft Entra ID zarządza użytkownikami, grupami, aplikacjami, logowaniem i dostępem do zasobów."
  },
  {
    "id": 153,
    "question": "What is a key benefit of the consumption-based model in cloud computing?",
    "options": [
      {
        "text": "Long-term contracts",
        "explanation": "Długoterminowe kontrakty są przeciwieństwem elastyczności modelu zużyciowego. W consumption-based model nie musisz kupować pojemności na lata."
      },
      {
        "text": "Pay-as-you-go pricing",
        "explanation": "Pay-as-you-go oznacza płatność za faktyczne użycie zasobów, co jest główną korzyścią modelu consumption-based."
      },
      {
        "text": "Upfront hardware purchases",
        "explanation": "Zakup sprzętu z góry to model CapEx, typowy dla własnego centrum danych. Chmura pozwala tego unikać."
      },
      {
        "text": "Fixed monthly costs",
        "explanation": "Stały miesięczny koszt nie oddaje modelu zużyciowego. W chmurze koszt powinien zależeć od realnego użycia zasobów."
      }
    ],
    "correctAnswer": "Pay-as-you-go pricing",
    "generalExplanation": "Pay-as-you-go oznacza płatność za faktyczne użycie zasobów, co jest główną korzyścią modelu consumption-based."
  },
  {
    "id": 154,
    "question": "What is the primary purpose of an Azure resource group?",
    "options": [
      {
        "text": "To provide a logical container for Azure subscriptions.",
        "explanation": "Subskrypcja jest kontenerem rozliczeń i limitów. Resource group znajduje się wewnątrz subskrypcji, a nie zawiera subskrypcji."
      },
      {
        "text": "To manage user accounts and access control.",
        "explanation": "Kontami użytkowników i kontrolą dostępu zarządzają Microsoft Entra ID oraz RBAC. Resource group może mieć uprawnienia, ale jej głównym celem jest organizacja zasobów."
      },
      {
        "text": "To group related Azure resources together for management and deployment.",
        "explanation": "Resource group grupuje powiązane zasoby Azure, aby łatwiej nimi zarządzać, wdrażać je, monitorować i usuwać jako logiczną całość."
      },
      {
        "text": "To act as a central hub or dashboard for all Azure services.",
        "explanation": "Resource group nie jest centralnym dashboardem wszystkich usług Azure. Do widoków i pulpitów służy Azure Portal Dashboard."
      }
    ],
    "correctAnswer": "To group related Azure resources together for management and deployment.",
    "generalExplanation": "Resource group grupuje powiązane zasoby Azure, aby łatwiej nimi zarządzać, wdrażać je, monitorować i usuwać jako logiczną całość."
  },
  {
    "id": 155,
    "question": "Which of the following best describes scalability in the cloud?",
    "options": [
      {
        "text": "The ability to reduce costs by limiting storage",
        "explanation": "Ograniczanie storage może obniżyć koszty, ale nie definiuje skalowalności. Skalowalność dotyczy zmiany pojemności zasobów."
      },
      {
        "text": "The ability to run applications without an internet connection",
        "explanation": "Praca bez internetu nie jest cechą skalowalności chmury. Większość usług chmurowych zakłada łączność sieciową."
      },
      {
        "text": "The ability to maintain security across regions",
        "explanation": "Bezpieczeństwo między regionami jest ważne, ale dotyczy ochrony i zgodności. Skalowalność oznacza dopasowanie zasobów do obciążenia."
      },
      {
        "text": "The ability to increase or decrease resources based on demand",
        "explanation": "Skalowalność to możliwość zwiększania lub zmniejszania zasobów zgodnie z popytem, bez trwałego nadmiarowego provisioningu."
      }
    ],
    "correctAnswer": "The ability to increase or decrease resources based on demand",
    "generalExplanation": "Skalowalność to możliwość zwiększania lub zmniejszania zasobów zgodnie z popytem, bez trwałego nadmiarowego provisioningu."
  },
  {
    "id": 156,
    "question": "Which Azure App Service hosting option would you choose if you wanted isolated hardware and network, ensuring they are not used by any other Azure customers?",
    "options": [
      {
        "text": "App Service Plan",
        "explanation": "App Service Plan określa zasoby obliczeniowe dla aplikacji, ale standardowo nie daje pełnej izolacji sprzętu i sieci od innych klientów."
      },
      {
        "text": "Virtual Machine",
        "explanation": "Virtual Machine może dawać dużą kontrolę, ale nie jest hostingiem Azure App Service i wymaga więcej administracji."
      },
      {
        "text": "App Service Environment",
        "explanation": "App Service Environment zapewnia izolowane, dedykowane środowisko dla aplikacji App Service, z izolacją sieciową i zasobami nieudostępnianymi innym klientom."
      },
      {
        "text": "Bare Metal Hosting",
        "explanation": "Bare Metal Hosting oznacza bezpośredni dostęp do fizycznego serwera, ale nie jest standardową opcją hostowania Azure App Service."
      }
    ],
    "correctAnswer": "App Service Environment",
    "generalExplanation": "App Service Environment zapewnia izolowane, dedykowane środowisko dla aplikacji App Service, z izolacją sieciową i zasobami nieudostępnianymi innym klientom."
  },
  {
    "id": 157,
    "question": "Which of the following is a key principle of the Zero Trust security model?",
    "options": [
      {
        "text": "Allow unrestricted access to resources for all authenticated users.",
        "explanation": "Zero Trust nie pozwala na nieograniczony dostęp po samym uwierzytelnieniu. Dostęp musi być stale weryfikowany i ograniczony."
      },
      {
        "text": "Trust all users and devices by default once they are inside the network perimeter.",
        "explanation": "Zero Trust odrzuca założenie, że użytkownik lub urządzenie wewnątrz sieci jest automatycznie zaufane."
      },
      {
        "text": "Verify explicitly and enforce least-privilege access for all users and devices.",
        "explanation": "Kluczowa zasada Zero Trust to verify explicitly i least privilege: weryfikuj każdą próbę dostępu i przyznawaj minimalne potrzebne uprawnienia."
      },
      {
        "text": "Rely solely on network firewalls to secure resources.",
        "explanation": "Firewalle są przydatne, ale Zero Trust nie opiera się wyłącznie na granicy sieci. Ważna jest tożsamość, urządzenie, kontekst i ciągła weryfikacja."
      }
    ],
    "correctAnswer": "Verify explicitly and enforce least-privilege access for all users and devices.",
    "generalExplanation": "Kluczowa zasada Zero Trust to verify explicitly i least privilege: weryfikuj każdą próbę dostępu i przyznawaj minimalne potrzebne uprawnienia."
  },
  {
    "id": 158,
    "question": "What is the primary difference between pay-as-you-go and reserved instance pricing models in the cloud?",
    "options": [
      {
        "text": "Pay-as-you-go is only available for public cloud models, while reserved instances are for private cloud models.",
        "explanation": "Pay-as-you-go i reserved instances dotyczą public cloud i modeli rozliczeń, a nie podziału public/private cloud."
      },
      {
        "text": "Reserved instances offer discounted rates for long-term commitments, while pay-as-you-go is billed based on usage.",
        "explanation": "Reserved instances dają zniżkę za zobowiązanie na dłuższy okres, a pay-as-you-go nalicza koszt według bieżącego użycia bez takiego zobowiązania."
      },
      {
        "text": "Pay-as-you-go requires upfront payment, while reserved instances are billed hourly.",
        "explanation": "Pay-as-you-go nie wymaga płatności z góry. Reserved instances zwykle wiążą się z długoterminowym zobowiązaniem."
      },
      {
        "text": "Reserved instances offer higher performance than pay-as-you-go instances.",
        "explanation": "Różnica nie dotyczy wydajności instancji. Chodzi o sposób rozliczania i zobowiązanie czasowe."
      }
    ],
    "correctAnswer": "Reserved instances offer discounted rates for long-term commitments, while pay-as-you-go is billed based on usage.",
    "generalExplanation": "Reserved instances dają zniżkę za zobowiązanie na dłuższy okres, a pay-as-you-go nalicza koszt według bieżącego użycia bez takiego zobowiązania."
  },
  {
    "id": 159,
    "question": "A small startup with limited IT resources and a need for flexible scalability would be best suited for which cloud model?",
    "options": [
      {
        "text": "Public Cloud",
        "explanation": "Public Cloud jest najlepszy dla małej firmy bez dużego działu IT, bo daje skalowanie na żądanie, małe koszty startowe i zarządzaną infrastrukturę dostawcy."
      },
      {
        "text": "Community Cloud",
        "explanation": "Community Cloud jest dla grup organizacji o wspólnych wymaganiach, np. regulacyjnych. Nie jest typowym wyborem dla małego startupu szukającego prostego skalowania."
      },
      {
        "text": "Private Cloud",
        "explanation": "Private Cloud daje kontrolę i izolację, ale jest kosztowny oraz wymaga więcej administracji, co nie pasuje do ograniczonych zasobów IT startupu."
      },
      {
        "text": "Hybrid Cloud",
        "explanation": "Hybrid Cloud łączy public i private cloud, ale jest bardziej złożony operacyjnie. Mały startup zwykle zacznie prościej od public cloud."
      }
    ],
    "correctAnswer": "Public Cloud",
    "generalExplanation": "Public Cloud jest najlepszy dla małej firmy bez dużego działu IT, bo daje skalowanie na żądanie, małe koszty startowe i zarządzaną infrastrukturę dostawcy."
  },
  {
    "id": 160,
    "question": "What is the key characteristic of serverless computing that distinguishes it from traditional infrastructure?",
    "options": [
      {
        "text": "Automatic scaling based on demand",
        "explanation": "Serverless automatycznie skaluje wykonania zgodnie z zapotrzebowaniem, a użytkownik nie zarządza serwerami ani pojemnością ręcznie."
      },
      {
        "text": "Requires manual server management",
        "explanation": "Manual server management jest cechą tradycyjnej infrastruktury lub IaaS, a serverless ma właśnie ten obowiązek ukrywać przed użytkownikiem."
      },
      {
        "text": "Limited scalability options",
        "explanation": "Serverless zwykle oferuje bardzo elastyczne skalowanie, więc ograniczona skalowalność nie jest jego wyróżnikiem."
      },
      {
        "text": "Fixed pricing structure",
        "explanation": "Serverless najczęściej rozlicza się za wykonania i zużycie, a nie stałym kosztem niezależnym od użycia."
      }
    ],
    "correctAnswer": "Automatic scaling based on demand",
    "generalExplanation": "Serverless automatycznie skaluje wykonania zgodnie z zapotrzebowaniem, a użytkownik nie zarządza serwerami ani pojemnością ręcznie."
  },
  {
    "id": 161,
    "question": "What is the primary benefit of using Microsoft Entra Conditional Access?",
    "options": [
      {
        "text": "Improved user experience.",
        "explanation": "Conditional Access może poprawić doświadczenie użytkownika przez inteligentne zasady, ale jego głównym celem jest kontrola bezpieczeństwa dostępu."
      },
      {
        "text": "Simplified user authentication.",
        "explanation": "Uwierzytelnianie może być wygodniejsze, ale Conditional Access nie sprowadza się do uproszczenia logowania."
      },
      {
        "text": "Reduced reliance on passwords.",
        "explanation": "Redukcja zależności od haseł dotyczy passwordless i MFA. Conditional Access decyduje, kiedy i na jakich warunkach dostęp jest dozwolony."
      },
      {
        "text": "Enhanced security by limiting access to authorized users and devices.",
        "explanation": "Conditional Access zwiększa bezpieczeństwo, dopuszczając dostęp tylko przy spełnieniu warunków, np. właściwy użytkownik, urządzenie, lokalizacja i MFA."
      }
    ],
    "correctAnswer": "Enhanced security by limiting access to authorized users and devices.",
    "generalExplanation": "Conditional Access zwiększa bezpieczeństwo, dopuszczając dostęp tylko przy spełnieniu warunków, np. właściwy użytkownik, urządzenie, lokalizacja i MFA."
  },
  {
    "id": 162,
    "question": "Which of the following is NOT a core capability of Microsoft Purview?",
    "options": [
      {
        "text": "Data discovery and classification",
        "explanation": "Data discovery and classification to podstawowa funkcja Purview: odnajdywanie danych i klasyfikowanie ich znaczenia lub wrażliwości."
      },
      {
        "text": "Data sensitivity labeling",
        "explanation": "Data sensitivity labeling jest częścią ochrony informacji i governance w ekosystemie Purview."
      },
      {
        "text": "Data migration and integration",
        "explanation": "Data migration and integration to domena narzędzi takich jak Azure Data Factory. Nie jest core capability Microsoft Purview."
      },
      {
        "text": "Data loss prevention",
        "explanation": "Data loss prevention pomaga zapobiegać niekontrolowanemu wypływowi danych i jest związane z ochroną informacji."
      }
    ],
    "correctAnswer": "Data migration and integration",
    "generalExplanation": "Data migration and integration to domena narzędzi takich jak Azure Data Factory. Nie jest core capability Microsoft Purview."
  },
  {
    "id": 163,
    "question": "What is the primary benefit of high availability in cloud computing?",
    "options": [
      {
        "text": "Minimizes downtime and ensures continuous service",
        "explanation": "High availability ma minimalizować przestoje i zapewniać ciągłość działania usługi mimo awarii lub prac serwisowych."
      },
      {
        "text": "Reduces scalability",
        "explanation": "Zmniejszanie skalowalności byłoby wadą, a nie korzyścią high availability."
      },
      {
        "text": "Increases cost",
        "explanation": "High availability może zwiększać koszt przez redundancję, ale jej celem nie jest zwiększanie kosztów."
      },
      {
        "text": "Requires manual intervention",
        "explanation": "Manual intervention zwykle pogarsza dostępność. Wysoka dostępność opiera się na automatycznym przełączaniu i redundancji."
      }
    ],
    "correctAnswer": "Minimizes downtime and ensures continuous service",
    "generalExplanation": "High availability ma minimalizować przestoje i zapewniać ciągłość działania usługi mimo awarii lub prac serwisowych."
  },
  {
    "id": 164,
    "question": "Which of the following is a benefit of using sovereign regions in Azure?",
    "options": [
      {
        "text": "Increased performance",
        "explanation": "Sovereign regions mogą mieć dobre parametry, ale ich główna wartość nie polega na większej wydajności."
      },
      {
        "text": "Reduced compliance risks",
        "explanation": "Sovereign regions pomagają spełnić lokalne wymogi prawne, rządowe i data residency, zmniejszając ryzyko compliance."
      },
      {
        "text": "Lower costs",
        "explanation": "Sovereign regions nie są przede wszystkim tańsze; często są specjalistyczne i bardziej ograniczone."
      },
      {
        "text": "Greater flexibility",
        "explanation": "Większa elastyczność nie jest głównym celem sovereign regions. Priorytetem jest zgodność i kontrola lokalizacji danych."
      }
    ],
    "correctAnswer": "Reduced compliance risks",
    "generalExplanation": "Sovereign regions pomagają spełnić lokalne wymogi prawne, rządowe i data residency, zmniejszając ryzyko compliance."
  },
  {
    "id": 165,
    "question": "Which Azure Storage access tier is optimized (including for cost) for data accessed infrequently and must be stored for at least 30 days?",
    "options": [
      {
        "text": "Cool access tier",
        "explanation": "Cool access tier jest zoptymalizowany kosztowo dla danych rzadko odczytywanych i przechowywanych co najmniej 30 dni."
      },
      {
        "text": "Archive access tier",
        "explanation": "Archive tier jest najtańszy dla długiego przechowywania offline, ale ma opóźnienia przy odtwarzaniu i dłuższy minimalny okres."
      },
      {
        "text": "Premium storage",
        "explanation": "Premium storage jest droższy i zoptymalizowany pod wydajność, nie pod rzadki dostęp i niski koszt."
      },
      {
        "text": "Hot access tier",
        "explanation": "Hot tier jest dla danych często odczytywanych. Ma wyższy koszt przechowywania niż Cool, ale niższy koszt dostępu."
      }
    ],
    "correctAnswer": "Cool access tier",
    "generalExplanation": "Cool access tier jest zoptymalizowany kosztowo dla danych rzadko odczytywanych i przechowywanych co najmniej 30 dni."
  },
  {
    "id": 166,
    "question": "Which of the following is a key difference between Azure B2B and Azure B2C?",
    "options": [
      {
        "text": "There is no significant difference between the two services.",
        "explanation": "B2B i B2C mają różne scenariusze użycia, więc stwierdzenie o braku różnicy jest błędne."
      },
      {
        "text": "B2B is for cloud-based applications, while B2C is for on-premises applications.",
        "explanation": "B2B i B2C mogą obsługiwać aplikacje chmurowe; podział nie polega na cloud vs on-premises."
      },
      {
        "text": "B2B is for business-to-business collaboration, while B2C is for business-to-customer interactions.",
        "explanation": "B2B służy współpracy z partnerami biznesowymi i gośćmi, a B2C obsługuje klientów końcowych aplikacji konsumenckich."
      },
      {
        "text": "B2B is for internal users, while B2C is for external users.",
        "explanation": "B2B także dotyczy użytkowników zewnętrznych, więc samo rozróżnienie internal/external jest zbyt uproszczone i mylące."
      }
    ],
    "correctAnswer": "B2B is for business-to-business collaboration, while B2C is for business-to-customer interactions.",
    "generalExplanation": "B2B służy współpracy z partnerami biznesowymi i gośćmi, a B2C obsługuje klientów końcowych aplikacji konsumenckich."
  },
  {
    "id": 167,
    "question": "Fill in the blank: Cloud computing is a model of delivering IT services such as computing, networking and storage over the Internet on a _____________ basis.",
    "options": [
      {
        "text": "pay-as-you-go",
        "explanation": "Cloud computing dostarcza usługi IT przez internet w modelu pay-as-you-go, czyli płacisz za realne użycie."
      },
      {
        "text": "pay up-front as a capital expense",
        "explanation": "Płatność z góry jako CapEx opisuje tradycyjny zakup infrastruktury, nie podstawowy model chmury."
      },
      {
        "text": "case-by-case",
        "explanation": "Case-by-case nie jest standardowym określeniem modelu rozliczeń chmurowych."
      },
      {
        "text": "long-term contract",
        "explanation": "Długoterminowy kontrakt może istnieć przy rezerwacjach, ale nie jest definicją cloud computing jako modelu usług."
      }
    ],
    "correctAnswer": "pay-as-you-go",
    "generalExplanation": "Cloud computing dostarcza usługi IT przez internet w modelu pay-as-you-go, czyli płacisz za realne użycie."
  },
  {
    "id": 168,
    "question": "How does data transfer between Azure regions impact costs?",
    "options": [
      {
        "text": "It's charged based on the destination region only",
        "explanation": "Koszt transferu między regionami nie zależy tylko od regionu docelowego. Liczą się ilość danych i kierunek/odległość transferu."
      },
      {
        "text": "It's charged based on the amount of data transferred and the distance",
        "explanation": "Transfer między regionami jest zwykle naliczany według ilości przesłanych danych i relacji między regionami, w tym odległości lub stref cenowych."
      },
      {
        "text": "It's charged based on the source region only",
        "explanation": "Region źródłowy sam nie wyjaśnia całego kosztu. Opłaty zależą od zasad transferu między lokalizacjami."
      },
      {
        "text": "It's always free, regardless of the distance",
        "explanation": "Transfer danych między regionami nie zawsze jest darmowy. Bezpłatne mogą być tylko wybrane scenariusze lub kierunki."
      }
    ],
    "correctAnswer": "It's charged based on the amount of data transferred and the distance",
    "generalExplanation": "Transfer między regionami jest zwykle naliczany według ilości przesłanych danych i relacji między regionami, w tym odległości lub stref cenowych."
  },
  {
    "id": 169,
    "question": "What is the primary purpose of an availability set in Azure?",
    "options": [
      {
        "text": "To group virtual machines for easier management",
        "explanation": "Availability set nie jest głównie narzędziem logicznego grupowania VM dla wygody. Jego celem jest odporność na awarie hostów i aktualizacje."
      },
      {
        "text": "To protect against single points of failure",
        "explanation": "Availability set rozdziela VM między fault domains i update domains, zmniejszając ryzyko jednoczesnej awarii wszystkich instancji."
      },
      {
        "text": "To ensure data redundancy and durability",
        "explanation": "Redundancja i trwałość danych dotyczy raczej storage replication. Availability set dotyczy maszyn wirtualnych."
      },
      {
        "text": "To provide load balancing for web applications",
        "explanation": "Load balancing może współpracować z availability set, ale availability set sam nie jest load balancerem."
      }
    ],
    "correctAnswer": "To protect against single points of failure",
    "generalExplanation": "Availability set rozdziela VM między fault domains i update domains, zmniejszając ryzyko jednoczesnej awarii wszystkich instancji."
  },
  {
    "id": 170,
    "question": "Which of the following best describes the benefit of elasticity in cloud services like Microsoft Azure?",
    "options": [
      {
        "text": "The elimination of all operational costs for managing resources.",
        "explanation": "Elasticity nie eliminuje wszystkich kosztów operacyjnych. Pozwala lepiej dopasować koszt do obciążenia."
      },
      {
        "text": "The requirement to pre-purchase resources for future use.",
        "explanation": "Wymóg zakupu zasobów z wyprzedzeniem jest przeciwieństwem elastyczności chmury."
      },
      {
        "text": "The ability to automatically scale resources up or down based on demand.",
        "explanation": "Elasticity pozwala automatycznie zwiększać lub zmniejszać zasoby w zależności od zapotrzebowania."
      },
      {
        "text": "The guarantee of 100% uptime for all services.",
        "explanation": "100% uptime nie jest gwarantowane przez elasticity. Dostępność wymaga osobnych mechanizmów HA i redundancji."
      }
    ],
    "correctAnswer": "The ability to automatically scale resources up or down based on demand.",
    "generalExplanation": "Elasticity pozwala automatycznie zwiększać lub zmniejszać zasoby w zależności od zapotrzebowania."
  },
  {
    "id": 171,
    "question": "What is the primary benefit of using PaaS compared to IaaS?",
    "options": [
      {
        "text": "Greater flexibility",
        "explanation": "Większa elastyczność infrastruktury jest raczej zaletą IaaS, gdzie masz większą kontrolę nad OS i konfiguracją."
      },
      {
        "text": "Increased control over the infrastructure",
        "explanation": "PaaS daje mniejszą kontrolę nad infrastrukturą niż IaaS, bo platformą zarządza dostawca."
      },
      {
        "text": "Lower costs",
        "explanation": "Niższy koszt może się zdarzyć, ale główną korzyścią PaaS jest szybsze tworzenie i wdrażanie aplikacji bez zarządzania infrastrukturą."
      },
      {
        "text": "Reduced development time",
        "explanation": "PaaS skraca czas developmentu, bo dostawca obsługuje runtime, OS, patching i część skalowania platformy."
      }
    ],
    "correctAnswer": "Reduced development time",
    "generalExplanation": "PaaS skraca czas developmentu, bo dostawca obsługuje runtime, OS, patching i część skalowania platformy."
  },
  {
    "id": 172,
    "question": "What type of scaling typically involves moving from a smaller machine to a larger (more powerful) machine?",
    "options": [
      {
        "text": "Vertical scaling",
        "explanation": "Vertical scaling oznacza przejście na większą, mocniejszą maszynę, np. więcej CPU lub RAM."
      },
      {
        "text": "Horizontal scaling",
        "explanation": "Horizontal scaling oznacza dodawanie większej liczby instancji, a nie powiększanie jednej maszyny."
      },
      {
        "text": "Scaling out",
        "explanation": "Scaling out jest formą horizontal scaling, czyli dodawaniem instancji zamiast zwiększania rozmiaru jednej."
      }
    ],
    "correctAnswer": "Vertical scaling",
    "generalExplanation": "Vertical scaling oznacza przejście na większą, mocniejszą maszynę, np. więcej CPU lub RAM."
  },
  {
    "id": 173,
    "question": "Which feature of Azure Storage makes it durable?",
    "options": [
      {
        "text": "Security",
        "explanation": "Security chroni dostęp i dane, ale sama nie zapewnia trwałości danych po awarii sprzętu."
      },
      {
        "text": "Accessibility",
        "explanation": "Accessibility dotyczy możliwości dostępu do danych, nie ich odporności na awarie."
      },
      {
        "text": "Scalability",
        "explanation": "Scalability pozwala rosnąć z obciążeniem, ale nie jest główną cechą trwałości danych."
      },
      {
        "text": "Redundancy",
        "explanation": "Redundancy oznacza przechowywanie wielu kopii danych, co zapewnia durability w razie awarii sprzętu lub lokalizacji."
      }
    ],
    "correctAnswer": "Redundancy",
    "generalExplanation": "Redundancy oznacza przechowywanie wielu kopii danych, co zapewnia durability w razie awarii sprzętu lub lokalizacji."
  },
  {
    "id": 174,
    "question": "Fill in the blank: __________ refers to the policies, processes, and controls that organizations implement to ensure that their cloud computing initiatives align with their overall business objectives and risk management strategies.",
    "options": [
      {
        "text": "Governance",
        "explanation": "Governance to zestaw zasad, procesów i kontroli zapewniających zgodność inicjatyw chmurowych z celami biznesowymi i ryzykiem."
      },
      {
        "text": "Manageability",
        "explanation": "Manageability dotyczy łatwości zarządzania zasobami, ale nie obejmuje całego systemu polityk i kontroli organizacyjnych."
      },
      {
        "text": "Reliability",
        "explanation": "Reliability dotyczy niezawodności i dostępności systemów. Nie jest pojęciem nadrzędnym dla polityk i procesów kontroli."
      },
      {
        "text": "Security",
        "explanation": "Security dotyczy ochrony zasobów i danych. Jest częścią governance, ale nie całym pojęciem."
      }
    ],
    "correctAnswer": "Governance",
    "generalExplanation": "Governance to zestaw zasad, procesów i kontroli zapewniających zgodność inicjatyw chmurowych z celami biznesowymi i ryzykiem."
  },
  {
    "id": 175,
    "question": "Which compute type offers the greatest flexibility and control over the underlying hardware, allowing you to customize the environment to your specific needs?",
    "options": [
      {
        "text": "Function",
        "explanation": "Function daje najmniej zarządzania infrastrukturą i mało kontroli nad hardware. To model serverless/FaaS."
      },
      {
        "text": "Container",
        "explanation": "Container daje kontrolę nad obrazem i środowiskiem aplikacji, ale nie nad bazowym hardware w takim stopniu jak VM."
      },
      {
        "text": "Virtual Machine",
        "explanation": "Virtual Machine daje największą kontrolę nad systemem, konfiguracją, runtime i środowiskiem spośród wymienionych opcji."
      },
      {
        "text": "Serverless",
        "explanation": "Serverless ukrywa infrastrukturę i hardware przed użytkownikiem, więc nie daje największej kontroli."
      }
    ],
    "correctAnswer": "Virtual Machine",
    "generalExplanation": "Virtual Machine daje największą kontrolę nad systemem, konfiguracją, runtime i środowiskiem spośród wymienionych opcji."
  },
  {
    "id": 176,
    "question": "Which of the following is NOT a characteristic of Infrastructure as a Service (IaaS)?",
    "options": [
      {
        "text": "Managed operating system",
        "explanation": "Managed operating system nie jest cechą IaaS. W IaaS klient zwykle odpowiada za OS, aktualizacje i konfigurację."
      },
      {
        "text": "On-demand provisioning",
        "explanation": "On-demand provisioning jest typową cechą IaaS: można szybko tworzyć VM i zasoby infrastruktury."
      },
      {
        "text": "Hardware virtualization",
        "explanation": "Hardware virtualization jest podstawą IaaS, bo klient dostaje zwirtualizowaną infrastrukturę zamiast fizycznego sprzętu."
      },
      {
        "text": "Pay-as-you-go pricing",
        "explanation": "Pay-as-you-go pricing jest typowy dla chmury i IaaS, ponieważ płacisz za używane zasoby."
      }
    ],
    "correctAnswer": "Managed operating system",
    "generalExplanation": "Managed operating system nie jest cechą IaaS. W IaaS klient zwykle odpowiada za OS, aktualizacje i konfigurację."
  },
  {
    "id": 177,
    "question": "Which of the following statements about Azure resource groups is true?",
    "options": [
      {
        "text": "A resource group can contain resources from multiple Azure subscription.",
        "explanation": "Resource group nie może zawierać zasobów z wielu subskrypcji. Należy do jednej subskrypcji."
      },
      {
        "text": "A resource group can only contain one type of resource, such as virtual machines or storage accounts.",
        "explanation": "Resource group może zawierać wiele typów zasobów, np. VM, storage, sieci i bazy danych."
      },
      {
        "text": "Deleting a resource group will not delete the resources contained within it.",
        "explanation": "Usunięcie resource group usuwa także zasoby w niej zawarte, więc to stwierdzenie jest niebezpiecznie błędne."
      },
      {
        "text": "A resource group can contain resources from multiple Azure regions.",
        "explanation": "Resource group może zawierać zasoby z wielu regionów, choć często grupuje się zasoby powiązane logicznie."
      }
    ],
    "correctAnswer": "A resource group can contain resources from multiple Azure regions.",
    "generalExplanation": "Resource group może zawierać zasoby z wielu regionów, choć często grupuje się zasoby powiązane logicznie."
  },
  {
    "id": 178,
    "question": "Which of the following is NOT a core component of Azure's reliability strategy?",
    "options": [
      {
        "text": "Availability",
        "explanation": "Availability jest podstawą reliability, bo system ma być dostępny mimo problemów."
      },
      {
        "text": "Performance",
        "explanation": "Performance jest ważne dla jakości działania, ale nie jest core component reliability strategy w tym pytaniu."
      },
      {
        "text": "Fault tolerance",
        "explanation": "Fault tolerance jest kluczowa dla reliability, bo system powinien działać mimo awarii części komponentów."
      },
      {
        "text": "Redundancy",
        "explanation": "Redundancy jest kluczowa dla reliability, bo zapasowe komponenty lub kopie danych zmniejszają skutki awarii."
      }
    ],
    "correctAnswer": "Performance",
    "generalExplanation": "Performance jest ważne dla jakości działania, ale nie jest core component reliability strategy w tym pytaniu."
  },
  {
    "id": 179,
    "question": "What is the primary advantage of using Azure's built-in security features compared to managing security on-premises?",
    "options": [
      {
        "text": "Decreased flexibility",
        "explanation": "Wbudowane funkcje bezpieczeństwa Azure zwykle nie zmniejszają elastyczności jako głównej korzyści; mają uprościć i wzmocnić ochronę."
      },
      {
        "text": "Lower costs",
        "explanation": "Koszty mogą być niższe, ale główną zaletą jest dostęp do gotowych, zarządzanych mechanizmów bezpieczeństwa bez budowania wszystkiego samodzielnie."
      },
      {
        "text": "Reduced expertise required",
        "explanation": "Azure dostarcza gotowe narzędzia bezpieczeństwa, monitoring i rekomendacje, więc organizacja potrzebuje mniej specjalistycznej administracji niż przy pełnym on-premises."
      },
      {
        "text": "Increased complexity",
        "explanation": "Wbudowane security features mają zmniejszać złożoność, nie ją zwiększać."
      }
    ],
    "correctAnswer": "Reduced expertise required",
    "generalExplanation": "Azure dostarcza gotowe narzędzia bezpieczeństwa, monitoring i rekomendacje, więc organizacja potrzebuje mniej specjalistycznej administracji niż przy pełnym on-premises."
  },
  {
    "id": 180,
    "question": "Which of the following qualities is unique to Private Cloud?",
    "options": [
      {
        "text": "An application that uses a network security group, firewall, distributed denial of service protection, and other network security methods",
        "explanation": "NSG, firewall i DDoS protection mogą występować w różnych modelach chmury. Nie są unikalną cechą private cloud."
      },
      {
        "text": "Anyone can sign up using a credit card",
        "explanation": "Możliwość rejestracji kartą kredytową jest typowa dla public cloud, nie private cloud."
      },
      {
        "text": "A cloud infrastructure dedicated to a single organization, managed either by the organization itself or by a third-party provider",
        "explanation": "Private cloud to infrastruktura dedykowana jednej organizacji, zarządzana przez nią lub dostawcę, z większą izolacją i kontrolą."
      },
      {
        "text": "The virtual network is not accessible from the public Internet",
        "explanation": "Brak publicznego dostępu do virtual network może być konfiguracją w public cloud. Nie definiuje unikalnie private cloud."
      }
    ],
    "correctAnswer": "A cloud infrastructure dedicated to a single organization, managed either by the organization itself or by a third-party provider",
    "generalExplanation": "Private cloud to infrastruktura dedykowana jednej organizacji, zarządzana przez nią lub dostawcę, z większą izolacją i kontrolą."
  },
  {
    "id": 181,
    "question": "Which storage option should you choose if you need the absolute highest performance (regardless of the cost) for intense workloads like SAP HANA or transaction-heavy applications?",
    "options": [
      {
        "text": "Premium SSDs",
        "explanation": "Premium SSDs są szybkie, ale Ultra Disks są przeznaczone dla najbardziej wymagających workloadów z najwyższą wydajnością."
      },
      {
        "text": "Standard HDDs",
        "explanation": "Standard HDDs są tańsze i wolniejsze, dobre dla mniej wymagających obciążeń."
      },
      {
        "text": "Ultra Disks",
        "explanation": "Ultra Disks oferują najwyższą wydajność i bardzo niskie opóźnienia dla intensywnych workloadów, takich jak SAP HANA."
      },
      {
        "text": "Standard SSDs",
        "explanation": "Standard SSDs są kompromisem ceny i wydajności, ale nie absolutnie najwyższą wydajnością."
      }
    ],
    "correctAnswer": "Ultra Disks",
    "generalExplanation": "Ultra Disks oferują najwyższą wydajność i bardzo niskie opóźnienia dla intensywnych workloadów, takich jak SAP HANA."
  },
  {
    "id": 182,
    "question": "What is the benefit of using Azure Virtual Desktop compared to traditional on-premises desktop virtualization solutions?",
    "options": [
      {
        "text": "Increased security",
        "explanation": "AVD może zwiększyć bezpieczeństwo przez centralne zarządzanie pulpitami i dostępem."
      },
      {
        "text": "Lower costs",
        "explanation": "AVD może obniżyć koszty infrastruktury i administracji w porównaniu z własnym rozwiązaniem on-premises."
      },
      {
        "text": "Improved scalability",
        "explanation": "AVD poprawia skalowalność, bo pulpitami i host pools można zarządzać elastycznie w Azure."
      },
      {
        "text": "All answers are correct",
        "explanation": "Wszystkie wymienione korzyści mogą dotyczyć Azure Virtual Desktop: bezpieczeństwo, koszty i skalowalność."
      }
    ],
    "correctAnswer": "All answers are correct",
    "generalExplanation": "Wszystkie wymienione korzyści mogą dotyczyć Azure Virtual Desktop: bezpieczeństwo, koszty i skalowalność."
  },
  {
    "id": 183,
    "question": "According to the shared responsibility model, who is responsible for keeping the guest operating system (Windows or Linux) updated on an Azure Virtual Machine?",
    "options": [
      {
        "text": "The cloud provider, in this case Microsoft Azure",
        "explanation": "W Azure VM Microsoft odpowiada za fizyczną infrastrukturę, ale nie za patchowanie guest OS w modelu IaaS."
      },
      {
        "text": "The customer, such as you",
        "explanation": "Klient odpowiada za aktualizowanie systemu operacyjnego Windows lub Linux uruchomionego we własnej Azure Virtual Machine."
      },
      {
        "text": "It's actually automatically taken care of, and no one needs to do anything",
        "explanation": "Aktualizacje nie dzieją się bez odpowiedzialności żadnej strony. Można użyć automatyzacji, ale właścicielem zadania pozostaje klient."
      }
    ],
    "correctAnswer": "The customer, such as you",
    "generalExplanation": "Klient odpowiada za aktualizowanie systemu operacyjnego Windows lub Linux uruchomionego we własnej Azure Virtual Machine."
  },
  {
    "id": 184,
    "question": "What is the primary purpose of tags in Azure?",
    "options": [
      {
        "text": "To categorize and organize resources for better management",
        "explanation": "Tags służą do kategoryzowania zasobów, np. po projekcie, środowisku, właścicielu lub centrum kosztów."
      },
      {
        "text": "To automate resource provisioning",
        "explanation": "Automatyzację provisioningu realizują IaC, ARM/Bicep/Terraform lub pipeline. Tagi mogą pomagać, ale nie są mechanizmem wdrożeniowym."
      },
      {
        "text": "To monitor resource performance",
        "explanation": "Monitoring wydajności realizuje Azure Monitor. Tagi mogą filtrować raporty, ale same nie mierzą wydajności."
      },
      {
        "text": "To assign security permissions to resources",
        "explanation": "Uprawnienia nadaje RBAC. Tagi nie są mechanizmem bezpieczeństwa do przyznawania dostępu."
      }
    ],
    "correctAnswer": "To categorize and organize resources for better management",
    "generalExplanation": "Tags służą do kategoryzowania zasobów, np. po projekcie, środowisku, właścicielu lub centrum kosztów."
  },
  {
    "id": 185,
    "question": "Which of the following is NOT a key aspect of predictability in Azure?",
    "options": [
      {
        "text": "Fault tolerance",
        "explanation": "Fault tolerance dotyczy reliability i odporności na awarie, ale nie jest kluczowym aspektem predictability w kontekście kosztów, wydajności i skalowania."
      },
      {
        "text": "Cost optimization",
        "explanation": "Cost optimization pomaga przewidywać i kontrolować wydatki w Azure."
      },
      {
        "text": "Consistent performance",
        "explanation": "Consistent performance wspiera przewidywalność działania aplikacji."
      },
      {
        "text": "Scalability",
        "explanation": "Scalability pomaga przewidywalnie obsługiwać wzrost i spadek obciążenia."
      }
    ],
    "correctAnswer": "Fault tolerance",
    "generalExplanation": "Fault tolerance dotyczy reliability i odporności na awarie, ale nie jest kluczowym aspektem predictability w kontekście kosztów, wydajności i skalowania."
  },
  {
    "id": 186,
    "question": "Which Azure service can be used to deploy and scale serverless containerized applications?",
    "options": [
      {
        "text": "Azure App Service",
        "explanation": "Azure App Service może hostować aplikacje i kontenery webowe, ale pytanie wskazuje serverless containerized applications."
      },
      {
        "text": "Azure Kubernetes Service (AKS)",
        "explanation": "AKS jest usługą Kubernetes do kontenerów, ale wymaga zarządzania klastrem w większym stopniu niż serverless containers."
      },
      {
        "text": "Azure Container Instances",
        "explanation": "Azure Container Instances pozwala szybko uruchamiać kontenery bez zarządzania VM lub klastrem, pasując do serverless container scenario."
      },
      {
        "text": "Azure Functions",
        "explanation": "Azure Functions to serverless functions, nie główna usługa do deployowania i skalowania aplikacji kontenerowych jako kontenerów."
      }
    ],
    "correctAnswer": "Azure Container Instances",
    "generalExplanation": "Azure Container Instances pozwala szybko uruchamiać kontenery bez zarządzania VM lub klastrem, pasując do serverless container scenario."
  },
  {
    "id": 187,
    "question": "You have a virtual machine that you need to have a public endpoint - accessible from the Internet. Which of the following resources do you need to have in order to achieve your goal?",
    "options": [
      {
        "text": "IIS web server",
        "explanation": "IIS może obsługiwać stronę na Windows VM, ale sam nie daje publicznego endpointu Azure."
      },
      {
        "text": "VPN Gateway",
        "explanation": "VPN Gateway służy do połączeń VPN między sieciami, nie do wystawienia VM publicznie do internetu."
      },
      {
        "text": "Azure Firewall",
        "explanation": "Azure Firewall może filtrować ruch, ale do publicznego endpointu VM potrzebny jest publiczny adres IP lub odpowiedni publiczny frontend."
      },
      {
        "text": "Public IP Address",
        "explanation": "Public IP Address umożliwia dostęp do maszyny wirtualnej z internetu, o ile reguły sieciowe dopuszczają ruch."
      }
    ],
    "correctAnswer": "Public IP Address",
    "generalExplanation": "Public IP Address umożliwia dostęp do maszyny wirtualnej z internetu, o ile reguły sieciowe dopuszczają ruch."
  },
  {
    "id": 188,
    "question": "Why are Azure datacenters located in various regions around the world?",
    "options": [
      {
        "text": "To ensure redundancy and high availability.",
        "explanation": "Regiony na świecie pomagają zapewnić redundancję i wysoką dostępność usług."
      },
      {
        "text": "To comply with local regulations.",
        "explanation": "Lokalne regiony pomagają spełniać wymagania prawne i data residency."
      },
      {
        "text": "To reduce latency for users.",
        "explanation": "Rozmieszczenie datacenter blisko użytkowników zmniejsza opóźnienia."
      },
      {
        "text": "All answers are correct.",
        "explanation": "Wszystkie odpowiedzi są prawdziwe: regiony wspierają dostępność, zgodność regulacyjną i niską latencję."
      }
    ],
    "correctAnswer": "All answers are correct.",
    "generalExplanation": "Wszystkie odpowiedzi są prawdziwe: regiony wspierają dostępność, zgodność regulacyjną i niską latencję."
  },
  {
    "id": 189,
    "question": "Which of the following is a passwordless authentication method supported by Azure?",
    "options": [
      {
        "text": "Biometric authentication and security keys",
        "explanation": "Azure wspiera passwordless przez metody takie jak biometria, Windows Hello i klucze zabezpieczeń FIDO2."
      },
      {
        "text": "Four-digit PIN",
        "explanation": "Sam czterocyfrowy PIN nie jest pełnym opisem passwordless authentication w Azure i może być tylko lokalnym elementem metody."
      },
      {
        "text": "Only biometric authentication (e.g., fingerprint, facial recognition)",
        "explanation": "Biometria jest obsługiwana, ale nie jest jedyną metodą passwordless."
      },
      {
        "text": "Only security keys",
        "explanation": "Security keys są obsługiwane, ale nie są jedyną metodą passwordless."
      }
    ],
    "correctAnswer": "Biometric authentication and security keys",
    "generalExplanation": "Azure wspiera passwordless przez metody takie jak biometria, Windows Hello i klucze zabezpieczeń FIDO2."
  },
  {
    "id": 190,
    "question": "Which tool lets you centralize your file shares in Azure Files and keep the flexibility, performance, and compatibility of a Windows file server?",
    "options": [
      {
        "text": "Azure File Sync",
        "explanation": "Azure File Sync centralizuje udziały plikowe w Azure Files, zachowując lokalny Windows file server jako cache i punkt dostępu."
      },
      {
        "text": "Azure Storage Explorer",
        "explanation": "Azure Storage Explorer to narzędzie GUI do przeglądania i zarządzania storage, nie synchronizacji file shares z Windows Server."
      },
      {
        "text": "AzCopy",
        "explanation": "AzCopy kopiuje dane do i z Azure Storage. Nie utrzymuje ciągłej synchronizacji udziałów plikowych jak Azure File Sync."
      }
    ],
    "correctAnswer": "Azure File Sync",
    "generalExplanation": "Azure File Sync centralizuje udziały plikowe w Azure Files, zachowując lokalny Windows file server jako cache i punkt dostępu."
  },
  {
    "id": 191,
    "question": "What is the minimum number of Availability Zones required to create a highly available application in Azure?",
    "options": [
      {
        "text": "4",
        "explanation": "Cztery strefy nie są minimalnym wymaganiem. Wiele regionów ma trzy strefy, ale minimum dla rozdzielenia wysoko dostępnego to co najmniej dwie."
      },
      {
        "text": "3",
        "explanation": "Trzy strefy mogą zwiększać odporność, ale nie są minimalną liczbą wymaganą do rozłożenia aplikacji między strefami."
      },
      {
        "text": "1",
        "explanation": "Jedna strefa nie daje odporności na awarię strefy, bo wszystko działa w tej samej lokalizacji."
      },
      {
        "text": "2",
        "explanation": "Do aplikacji wysokodostępnej względem awarii strefy potrzebujesz co najmniej dwóch Availability Zones."
      }
    ],
    "correctAnswer": "2",
    "generalExplanation": "Do aplikacji wysokodostępnej względem awarii strefy potrzebujesz co najmniej dwóch Availability Zones."
  },
  {
    "id": 192,
    "question": "Fill in the blank: A _________ is a geographical area on the planet that contains at least one, but potentially multiple datacenters that are nearby and networked together with a low-latency network.",
    "options": [
      {
        "text": "region",
        "explanation": "Region to obszar geograficzny zawierający co najmniej jedno, a często wiele pobliskich datacenter połączonych szybką siecią."
      },
      {
        "text": "availability zone",
        "explanation": "Availability zone to fizycznie oddzielona lokalizacja w regionie, nie cały obszar geograficzny z datacenter."
      },
      {
        "text": "data center",
        "explanation": "Data center to pojedynczy obiekt lub kampus, a nie szerszy region geograficzny."
      },
      {
        "text": "edge network",
        "explanation": "Edge network dotyczy punktów brzegowych/CDN i dostarczania treści bliżej użytkownika, nie definicji Azure region."
      }
    ],
    "correctAnswer": "region",
    "generalExplanation": "Region to obszar geograficzny zawierający co najmniej jedno, a często wiele pobliskich datacenter połączonych szybką siecią."
  },
  {
    "id": 193,
    "question": "Which of the following is the most likely scenario in which to choose Infrastructure as a Service (IaaS) options in cloud computing?",
    "options": [
      {
        "text": "Brand new development",
        "explanation": "Brand new development często lepiej wykorzystuje PaaS, serverless lub kontenery, bo można projektować pod chmurę od początku."
      },
      {
        "text": "Lift-and-shift migration",
        "explanation": "Lift-and-shift migration najczęściej wybiera IaaS, bo można przenieść istniejącą aplikację na VM z najmniejszą zmianą architektury."
      },
      {
        "text": "Someone looking to run an app for free in the cloud",
        "explanation": "Uruchamianie aplikacji za darmo nie jest głównym przypadkiem IaaS. VM zwykle generują koszty."
      },
      {
        "text": "Someone looking to reduce administrative overhead",
        "explanation": "Zmniejszenie administracji bardziej pasuje do PaaS lub serverless niż IaaS, gdzie nadal zarządzasz systemem operacyjnym."
      }
    ],
    "correctAnswer": "Lift-and-shift migration",
    "generalExplanation": "Lift-and-shift migration najczęściej wybiera IaaS, bo można przenieść istniejącą aplikację na VM z najmniejszą zmianą architektury."
  },
  {
    "id": 194,
    "question": "Which of the following benefits are provided by Azure ExpressRoute compared to a regular Site-to-Site VPN?",
    "options": [
      {
        "text": "Faster connection to Azure",
        "explanation": "ExpressRoute może zapewnić szybsze i bardziej przewidywalne połączenie z Azure niż VPN przez internet."
      },
      {
        "text": "Data travels over a private network, not a public one",
        "explanation": "ExpressRoute używa prywatnego połączenia przez operatora, a nie publicznego internetu, co zwiększa przewidywalność i bezpieczeństwo transmisji."
      },
      {
        "text": "Less expensive connection to Azure",
        "explanation": "ExpressRoute zwykle nie jest tańszy niż Site-to-Site VPN. To usługa premium z dedykowanym połączeniem."
      },
      {
        "text": "Access to private Virtual Networks that do not have devices with a public IP address",
        "explanation": "Site-to-Site VPN również może zapewniać dostęp do prywatnych sieci wirtualnych bez publicznych IP. To nie jest unikalna przewaga ExpressRoute."
      }
    ],
    "correctAnswer": [
      "Faster connection to Azure",
      "Data travels over a private network, not a public one"
    ],
    "generalExplanation": "ExpressRoute może zapewnić szybsze i bardziej przewidywalne połączenie z Azure niż VPN przez internet. ExpressRoute używa prywatnego połączenia przez operatora, a nie publicznego internetu, co zwiększa przewidywalność i bezpieczeństwo transmisji."
  },
  {
    "id": 195,
    "question": "What is the primary purpose of Azure RBAC?",
    "options": [
      {
        "text": "To protect against unauthorized access to Azure subscriptions.",
        "explanation": "Ochrona przed nieautoryzowanym dostępem jest szerokim celem, ale RBAC konkretnie służy przyznawaniu właściwych ról do zasobów."
      },
      {
        "text": "To grant users the appropriate level of access to Azure resources.",
        "explanation": "Azure RBAC pozwala nadawać użytkownikom, grupom i aplikacjom odpowiedni poziom dostępu do zasobów Azure."
      },
      {
        "text": "To enforce multi-factor authentication.",
        "explanation": "MFA wymusza dodatkową weryfikację logowania. RBAC nie jest mechanizmem MFA."
      },
      {
        "text": "To manage network security groups.",
        "explanation": "Network Security Groups filtrują ruch sieciowy. RBAC zarządza uprawnieniami dostępu do zasobów."
      }
    ],
    "correctAnswer": "To grant users the appropriate level of access to Azure resources.",
    "generalExplanation": "Azure RBAC pozwala nadawać użytkownikom, grupom i aplikacjom odpowiedni poziom dostępu do zasobów Azure."
  },
  {
    "id": 196,
    "question": "What is the primary purpose of a virtual machine scale set in Azure?",
    "options": [
      {
        "text": "To ensure data redundancy and durability",
        "explanation": "Redundancja i trwałość danych dotyczy storage replication, nie VM scale set."
      },
      {
        "text": "To provide load balancing for web applications",
        "explanation": "Load balancing może współpracować z VMSS, ale głównym celem scale set jest automatyczne zarządzanie liczbą VM."
      },
      {
        "text": "To group virtual machines for easier management",
        "explanation": "VMSS ułatwia zarządzanie grupą identycznych VM, ale jego kluczowym celem jest skalowanie i obsługa wielu instancji."
      },
      {
        "text": "To automatically scale virtual machines based on demand",
        "explanation": "Virtual Machine Scale Set automatycznie skaluje liczbę maszyn wirtualnych zgodnie z zapotrzebowaniem."
      }
    ],
    "correctAnswer": "To automatically scale virtual machines based on demand",
    "generalExplanation": "Virtual Machine Scale Set automatycznie skaluje liczbę maszyn wirtualnych zgodnie z zapotrzebowaniem."
  },
  {
    "id": 197,
    "question": "Fill in the blank: __________ is a mechanism that allows you to connect two virtual networks within Azure.",
    "options": [
      {
        "text": "Azure peering",
        "explanation": "VNet peering łączy dwie sieci wirtualne Azure, pozwalając im komunikować się prywatnie po sieci Microsoft."
      },
      {
        "text": "Azure Load Balancer",
        "explanation": "Azure Load Balancer rozdziela ruch do backendów. Nie łączy dwóch sieci wirtualnych."
      },
      {
        "text": "Azure Application Gateway",
        "explanation": "Application Gateway kieruje ruch HTTP/HTTPS i może robić routing aplikacyjny. Nie jest mechanizmem łączenia VNets."
      },
      {
        "text": "Azure Expressroute",
        "explanation": "ExpressRoute łączy sieć lokalną z Azure przez prywatne połączenie. Nie jest podstawowym mechanizmem łączenia dwóch VNets."
      }
    ],
    "correctAnswer": "Azure peering",
    "generalExplanation": "VNet peering łączy dwie sieci wirtualne Azure, pozwalając im komunikować się prywatnie po sieci Microsoft."
  },
  {
    "id": 198,
    "question": "Fill in the blank: __________ stores data offline and offers the lowest storage costs",
    "options": [
      {
        "text": "Archive storage",
        "explanation": "Archive storage przechowuje dane offline lub prawie offline i oferuje najniższy koszt przechowywania kosztem opóźnionego dostępu."
      },
      {
        "text": "Cool access",
        "explanation": "Cool access jest dla danych rzadko używanych, ale nadal online i nie tak tanich jak Archive."
      },
      {
        "text": "Hot access",
        "explanation": "Hot access jest dla danych często używanych i ma wyższy koszt przechowywania."
      },
      {
        "text": "Cold access",
        "explanation": "Cold access nie jest właściwą nazwą standardowej warstwy Azure Blob w tym pytaniu."
      }
    ],
    "correctAnswer": "Archive storage",
    "generalExplanation": "Archive storage przechowuje dane offline lub prawie offline i oferuje najniższy koszt przechowywania kosztem opóźnionego dostępu."
  },
  {
    "id": 199,
    "question": "In which storage redundancy option does Azure give you a secondary endpoint for read-only access?",
    "options": [
      {
        "text": "RA-GRS",
        "explanation": "RA-GRS zapewnia geo-redundancję z read access do repliki w regionie pomocniczym, czyli daje secondary endpoint tylko do odczytu."
      },
      {
        "text": "GRS",
        "explanation": "GRS replikuje dane do regionu pomocniczego, ale bez standardowego read-only endpointu dla klienta."
      },
      {
        "text": "LRS",
        "explanation": "LRS replikuje dane lokalnie w jednym datacenter/regionie i nie daje secondary regional endpoint."
      },
      {
        "text": "ZRS",
        "explanation": "ZRS replikuje dane między strefami dostępności w regionie, ale nie daje geo-secondary read endpoint jak RA-GRS."
      }
    ],
    "correctAnswer": "RA-GRS",
    "generalExplanation": "RA-GRS zapewnia geo-redundancję z read access do repliki w regionie pomocniczym, czyli daje secondary endpoint tylko do odczytu."
  },
  {
    "id": 200,
    "question": "What is AzCopy primarily used for in Azure?",
    "options": [
      {
        "text": "Copying data to and from Azure Storage efficiently.",
        "explanation": "AzCopy służy do szybkiego kopiowania danych do i z Azure Storage, np. Blob Storage lub Azure Files."
      },
      {
        "text": "Monitoring the performance of Azure resources.",
        "explanation": "Monitoring wydajności zasobów realizują Azure Monitor i powiązane narzędzia, nie AzCopy."
      },
      {
        "text": "Automating the deployment of virtual machines.",
        "explanation": "Automatyzację wdrożeń VM wykonuje się przez ARM/Bicep/Terraform, CLI lub pipeline. AzCopy nie wdraża maszyn."
      },
      {
        "text": "Managing user identities and access permissions.",
        "explanation": "Tożsamościami i uprawnieniami zarządza Microsoft Entra ID oraz RBAC. AzCopy jest narzędziem transferu danych."
      }
    ],
    "correctAnswer": "Copying data to and from Azure Storage efficiently.",
    "generalExplanation": "AzCopy służy do szybkiego kopiowania danych do i z Azure Storage, np. Blob Storage lub Azure Files."
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
  },
  {
    "id": 6,
    "label": "Questions 51 - 60",
    "startId": 51,
    "endId": 60
  },
  {
    "id": 7,
    "label": "Questions 61 - 70",
    "startId": 61,
    "endId": 70
  },
  {
    "id": 8,
    "label": "Questions 71 - 80",
    "startId": 71,
    "endId": 80
  },
  {
    "id": 9,
    "label": "Questions 81 - 90",
    "startId": 81,
    "endId": 90
  },
  {
    "id": 10,
    "label": "Questions 91 - 100",
    "startId": 91,
    "endId": 100
  },
  {
    "id": 11,
    "label": "Questions 101 - 110",
    "startId": 101,
    "endId": 110
  },
  {
    "id": 12,
    "label": "Questions 111 - 120",
    "startId": 111,
    "endId": 120
  },
  {
    "id": 13,
    "label": "Questions 121 - 130",
    "startId": 121,
    "endId": 130
  },
  {
    "id": 14,
    "label": "Questions 131 - 140",
    "startId": 131,
    "endId": 140
  },
  {
    "id": 15,
    "label": "Questions 141 - 150",
    "startId": 141,
    "endId": 150
  },
  {
    "id": 16,
    "label": "Questions 151 - 160",
    "startId": 151,
    "endId": 160
  },
  {
    "id": 17,
    "label": "Questions 161 - 170",
    "startId": 161,
    "endId": 170
  },
  {
    "id": 18,
    "label": "Questions 171 - 180",
    "startId": 171,
    "endId": 180
  },
  {
    "id": 19,
    "label": "Questions 181 - 190",
    "startId": 181,
    "endId": 190
  },
  {
    "id": 20,
    "label": "Questions 191 - 200",
    "startId": 191,
    "endId": 200
  }
];

export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  if (selectedRangeIds.length === 0) return questions;

  const selectedRanges = questionRanges.filter(range => selectedRangeIds.includes(range.id));

  return questions.filter(question =>
    selectedRanges.some(range => question.id >= range.startId && question.id <= range.endId)
  );
};
