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
  }
];

export const getQuestionsFromRanges = (selectedRangeIds: number[]): QuizQuestion[] => {
  if (selectedRangeIds.length === 0) return questions;

  const selectedRanges = questionRanges.filter(range => selectedRangeIds.includes(range.id));

  return questions.filter(question =>
    selectedRanges.some(range => question.id >= range.startId && question.id <= range.endId)
  );
};
