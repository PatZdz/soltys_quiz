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
        "explanation": "To poprawna odpowiedź. Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, takimi jak GDPR czy ISO/IEC 27001. Pozostałe odpowiedzi opisują usługi albo dokumenty, które nie monitorują zgodności Twojej organizacji w ten sposób."
      },
      {
        "text": "Azure Government Services",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Purview Compliance Manager. Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, takimi jak GDPR czy ISO/IEC 27001. Pozostałe odpowiedzi opisują usługi albo dokumenty, które nie monitorują zgodności Twojej organizacji w ten sposób."
      },
      {
        "text": "Service Trust Portal",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Purview Compliance Manager. Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, takimi jak GDPR czy ISO/IEC 27001. Pozostałe odpowiedzi opisują usługi albo dokumenty, które nie monitorują zgodności Twojej organizacji w ten sposób."
      },
      {
        "text": "Microsoft Privacy Statement",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Purview Compliance Manager. Purview Compliance Manager służy do oceny i śledzenia zgodności organizacji z normami oraz regulacjami, takimi jak GDPR czy ISO/IEC 27001. Pozostałe odpowiedzi opisują usługi albo dokumenty, które nie monitorują zgodności Twojej organizacji w ten sposób."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Software as a Service (SaaS). Microsoft Outlook w Microsoft 365 jest gotową aplikacją dostarczaną przez internet, więc jest przykładem SaaS. Użytkownik korzysta z usługi, a Microsoft odpowiada za infrastrukturę, platformę, utrzymanie i aktualizacje."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "To poprawna odpowiedź. Microsoft Outlook w Microsoft 365 jest gotową aplikacją dostarczaną przez internet, więc jest przykładem SaaS. Użytkownik korzysta z usługi, a Microsoft odpowiada za infrastrukturę, platformę, utrzymanie i aktualizacje."
      },
      {
        "text": "Platform as a Service (PaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Software as a Service (SaaS). Microsoft Outlook w Microsoft 365 jest gotową aplikacją dostarczaną przez internet, więc jest przykładem SaaS. Użytkownik korzysta z usługi, a Microsoft odpowiada za infrastrukturę, platformę, utrzymanie i aktualizacje."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Private Preview, Public Preview, and General Availability. Typowy cykl życia usług Azure obejmuje Private Preview, Public Preview i General Availability. Private Preview jest ograniczone, Public Preview pozwala szerszej grupie testować usługę, a General Availability oznacza oficjalną dostępność."
      },
      {
        "text": "Private Preview, Public Preview, and General Availability",
        "explanation": "To poprawna odpowiedź. Typowy cykl życia usług Azure obejmuje Private Preview, Public Preview i General Availability. Private Preview jest ograniczone, Public Preview pozwala szerszej grupie testować usługę, a General Availability oznacza oficjalną dostępność."
      },
      {
        "text": "Development phase, QA phase, and Live phase",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Private Preview, Public Preview, and General Availability. Typowy cykl życia usług Azure obejmuje Private Preview, Public Preview i General Availability. Private Preview jest ograniczone, Public Preview pozwala szerszej grupie testować usługę, a General Availability oznacza oficjalną dostępność."
      },
      {
        "text": "Announced, Coming Soon, and Live",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Private Preview, Public Preview, and General Availability. Typowy cykl życia usług Azure obejmuje Private Preview, Public Preview i General Availability. Private Preview jest ograniczone, Public Preview pozwala szerszej grupie testować usługę, a General Availability oznacza oficjalną dostępność."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Hybrid cloud. Hybrid cloud łączy środowisko lokalne z usługami chmury publicznej, na przykład Azure. Pasuje tu najlepiej, bo większość zasobów pozostaje on-premises, a Azure rozszerza centrum danych o dodatkowe usługi lub pojemność."
      },
      {
        "text": "Hybrid cloud",
        "explanation": "To poprawna odpowiedź. Hybrid cloud łączy środowisko lokalne z usługami chmury publicznej, na przykład Azure. Pasuje tu najlepiej, bo większość zasobów pozostaje on-premises, a Azure rozszerza centrum danych o dodatkowe usługi lub pojemność."
      },
      {
        "text": "Private cloud",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Hybrid cloud. Hybrid cloud łączy środowisko lokalne z usługami chmury publicznej, na przykład Azure. Pasuje tu najlepiej, bo większość zasobów pozostaje on-premises, a Azure rozszerza centrum danych o dodatkowe usługi lub pojemność."
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
        "explanation": "To poprawna odpowiedź. Umowy SLA w Azure zależą od konkretnej usługi i mogą obejmować dostępność, wydajność oraz łączność. Przy projektowaniu rozwiązania trzeba sprawdzać SLA każdej użytej usługi, bo Azure nie daje jednej gwarancji 99,9% ani 100% dla wszystkiego."
      },
      {
        "text": "You do not need to consider SLAs when designing your solution, as Azure automatically ensures the highest availability.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: SLAs vary by service and can include guarantees for uptime, performance, and connectivity.. Umowy SLA w Azure zależą od konkretnej usługi i mogą obejmować dostępność, wydajność oraz łączność. Przy projektowaniu rozwiązania trzeba sprawdzać SLA każdej użytej usługi, bo Azure nie daje jednej gwarancji 99,9% ani 100% dla wszystkiego."
      },
      {
        "text": "The SLA guarantees that the service will be available 99.9% of the time for all Azure services.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: SLAs vary by service and can include guarantees for uptime, performance, and connectivity.. Umowy SLA w Azure zależą od konkretnej usługi i mogą obejmować dostępność, wydajność oraz łączność. Przy projektowaniu rozwiązania trzeba sprawdzać SLA każdej użytej usługi, bo Azure nie daje jednej gwarancji 99,9% ani 100% dla wszystkiego."
      },
      {
        "text": "Azure provides a 100% SLA for all services.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: SLAs vary by service and can include guarantees for uptime, performance, and connectivity.. Umowy SLA w Azure zależą od konkretnej usługi i mogą obejmować dostępność, wydajność oraz łączność. Przy projektowaniu rozwiązania trzeba sprawdzać SLA każdej użytej usługi, bo Azure nie daje jednej gwarancji 99,9% ani 100% dla wszystkiego."
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
        "explanation": "To poprawna odpowiedź. Wysoka dostępność wymaga projektowania odpornego na awarie i eliminowania pojedynczych punktów awarii. Samo użycie dwóch maszyn może pomagać, ale kluczowa jest odporność całej architektury."
      },
      {
        "text": "The system must maintain 100% availability at all times.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The system must be designed for resilience, with no single points of failure.. Wysoka dostępność wymaga projektowania odpornego na awarie i eliminowania pojedynczych punktów awarii. Samo użycie dwóch maszyn może pomagać, ale kluczowa jest odporność całej architektury."
      },
      {
        "text": "It's impossible to create a highly available system.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The system must be designed for resilience, with no single points of failure.. Wysoka dostępność wymaga projektowania odpornego na awarie i eliminowania pojedynczych punktów awarii. Samo użycie dwóch maszyn może pomagać, ale kluczowa jest odporność całej architektury."
      },
      {
        "text": "The system must operate on a minimum of two virtual machines.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The system must be designed for resilience, with no single points of failure.. Wysoka dostępność wymaga projektowania odpornego na awarie i eliminowania pojedynczych punktów awarii. Samo użycie dwóch maszyn może pomagać, ale kluczowa jest odporność całej architektury."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: 1000. Domyślny limit pojedynczego Azure Virtual Machine Scale Set to 1000 instancji maszyn wirtualnych. VMSS pozwala zarządzać i skalować dużą liczbę identycznych maszyn."
      },
      {
        "text": "1000",
        "explanation": "To poprawna odpowiedź. Domyślny limit pojedynczego Azure Virtual Machine Scale Set to 1000 instancji maszyn wirtualnych. VMSS pozwala zarządzać i skalować dużą liczbę identycznych maszyn."
      },
      {
        "text": "Unlimited",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: 1000. Domyślny limit pojedynczego Azure Virtual Machine Scale Set to 1000 instancji maszyn wirtualnych. VMSS pozwala zarządzać i skalować dużą liczbę identycznych maszyn."
      },
      {
        "text": "500",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: 1000. Domyślny limit pojedynczego Azure Virtual Machine Scale Set to 1000 instancji maszyn wirtualnych. VMSS pozwala zarządzać i skalować dużą liczbę identycznych maszyn."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.. CDN odciąża serwer źródłowy, przechowując kopie statycznych plików na rozproszonej sieci serwerów. Dzięki temu obrazy, filmy czy PDF-y są dostarczane szybciej i z mniejszym obciążeniem głównej infrastruktury."
      },
      {
        "text": "It enables temporary session information storage for web visitors, such as their login ID or name.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.. CDN odciąża serwer źródłowy, przechowując kopie statycznych plików na rozproszonej sieci serwerów. Dzięki temu obrazy, filmy czy PDF-y są dostarczane szybciej i z mniejszym obciążeniem głównej infrastruktury."
      },
      {
        "text": "It provides fast and inexpensive data retrieval for later use.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.. CDN odciąża serwer źródłowy, przechowując kopie statycznych plików na rozproszonej sieci serwerów. Dzięki temu obrazy, filmy czy PDF-y są dostarczane szybciej i z mniejszym obciążeniem głównej infrastruktury."
      },
      {
        "text": "It mitigates server load for static, unchanging files like images, videos, and PDFs by distributing them across a network of servers.",
        "explanation": "To poprawna odpowiedź. CDN odciąża serwer źródłowy, przechowując kopie statycznych plików na rozproszonej sieci serwerów. Dzięki temu obrazy, filmy czy PDF-y są dostarczane szybciej i z mniejszym obciążeniem głównej infrastruktury."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service. Atak DDoS polega na zalaniu usługi lub sieci ogromną liczbą żądań albo pakietów, przez co nie może ona obsłużyć prawidłowego ruchu użytkowników. Nie jest to brute force, XSS ani SQL injection."
      },
      {
        "text": "A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service",
        "explanation": "To poprawna odpowiedź. Atak DDoS polega na zalaniu usługi lub sieci ogromną liczbą żądań albo pakietów, przez co nie może ona obsłużyć prawidłowego ruchu użytkowników. Nie jest to brute force, XSS ani SQL injection."
      },
      {
        "text": "An attempt to read the contents of a web page from another website, thereby stealing the user's private information",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service. Atak DDoS polega na zalaniu usługi lub sieci ogromną liczbą żądań albo pakietów, przez co nie może ona obsłużyć prawidłowego ruchu użytkowników. Nie jest to brute force, XSS ani SQL injection."
      },
      {
        "text": "An attempt to send SQL commands to the server in a way that it will execute them against the database",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service. Atak DDoS polega na zalaniu usługi lub sieci ogromną liczbą żądań albo pakietów, przez co nie może ona obsłużyć prawidłowego ruchu użytkowników. Nie jest to brute force, XSS ani SQL injection."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: HDInsight. HDInsight to zarządzana usługa Azure dla platform i narzędzi Apache Hadoop oraz innych frameworków big data. Azure Data Factory służy głównie do integracji danych, a AKS do orkiestracji kontenerów."
      },
      {
        "text": "HDInsight",
        "explanation": "To poprawna odpowiedź. HDInsight to zarządzana usługa Azure dla platform i narzędzi Apache Hadoop oraz innych frameworków big data. Azure Data Factory służy głównie do integracji danych, a AKS do orkiestracji kontenerów."
      },
      {
        "text": "Azure Data Factory",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: HDInsight. HDInsight to zarządzana usługa Azure dla platform i narzędzi Apache Hadoop oraz innych frameworków big data. Azure Data Factory służy głównie do integracji danych, a AKS do orkiestracji kontenerów."
      },
      {
        "text": "Azure Kubernetes Services",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: HDInsight. HDInsight to zarządzana usługa Azure dla platform i narzędzi Apache Hadoop oraz innych frameworków big data. Azure Data Factory służy głównie do integracji danych, a AKS do orkiestracji kontenerów."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Defender for Cloud. Microsoft Defender for Cloud zapewnia scentralizowany widok stanu bezpieczeństwa, rekomendacje i ochronę przed zagrożeniami dla zasobów Azure. Pozostałe usługi mają inne role, na przykład monitoring ogólny albo przechowywanie sekretów."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "To poprawna odpowiedź. Microsoft Defender for Cloud zapewnia scentralizowany widok stanu bezpieczeństwa, rekomendacje i ochronę przed zagrożeniami dla zasobów Azure. Pozostałe usługi mają inne role, na przykład monitoring ogólny albo przechowywanie sekretów."
      },
      {
        "text": "Azure Monitor",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Defender for Cloud. Microsoft Defender for Cloud zapewnia scentralizowany widok stanu bezpieczeństwa, rekomendacje i ochronę przed zagrożeniami dla zasobów Azure. Pozostałe usługi mają inne role, na przykład monitoring ogólny albo przechowywanie sekretów."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Defender for Cloud. Microsoft Defender for Cloud zapewnia scentralizowany widok stanu bezpieczeństwa, rekomendacje i ochronę przed zagrożeniami dla zasobów Azure. Pozostałe usługi mają inne role, na przykład monitoring ogólny albo przechowywanie sekretów."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.. Chmura publiczna jest dostępna dla wielu klientów i należy do dostawcy chmury, natomiast chmura prywatna jest przeznaczona do wyłącznego użycia jednej organizacji. To podstawowa różnica między tymi modelami wdrożenia."
      },
      {
        "text": "Both public and private clouds are available to the general public and are owned by a cloud service provider.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.. Chmura publiczna jest dostępna dla wielu klientów i należy do dostawcy chmury, natomiast chmura prywatna jest przeznaczona do wyłącznego użycia jednej organizacji. To podstawowa różnica między tymi modelami wdrożenia."
      },
      {
        "text": "A public cloud is owned and operated by a single organization for exclusive use, while a private cloud is available to the general public or a large industry group and is owned by a cloud service provider.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.. Chmura publiczna jest dostępna dla wielu klientów i należy do dostawcy chmury, natomiast chmura prywatna jest przeznaczona do wyłącznego użycia jednej organizacji. To podstawowa różnica między tymi modelami wdrożenia."
      },
      {
        "text": "A public cloud is available to the general public or a large industry group and is owned by a cloud service provider, while a private cloud is owned and operated by a single organization for exclusive use.",
        "explanation": "To poprawna odpowiedź. Chmura publiczna jest dostępna dla wielu klientów i należy do dostawcy chmury, natomiast chmura prywatna jest przeznaczona do wyłącznego użycia jednej organizacji. To podstawowa różnica między tymi modelami wdrożenia."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID. Microsoft Entra ID odpowiada za tożsamość, uwierzytelnianie, MFA i kontrolę dostępu do aplikacji oraz zasobów. Azure Authorization czy Azure Functions nie są usługami do egzekwowania MFA dla aplikacji."
      },
      {
        "text": "Microsoft Entra ID",
        "explanation": "To poprawna odpowiedź. Microsoft Entra ID odpowiada za tożsamość, uwierzytelnianie, MFA i kontrolę dostępu do aplikacji oraz zasobów. Azure Authorization czy Azure Functions nie są usługami do egzekwowania MFA dla aplikacji."
      },
      {
        "text": "Azure Authorization",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID. Microsoft Entra ID odpowiada za tożsamość, uwierzytelnianie, MFA i kontrolę dostępu do aplikacji oraz zasobów. Azure Authorization czy Azure Functions nie są usługami do egzekwowania MFA dla aplikacji."
      },
      {
        "text": "Azure Function",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID. Microsoft Entra ID odpowiada za tożsamość, uwierzytelnianie, MFA i kontrolę dostępu do aplikacji oraz zasobów. Azure Authorization czy Azure Functions nie są usługami do egzekwowania MFA dla aplikacji."
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
        "explanation": "To poprawna odpowiedź. Azure Pricing Calculator pozwala dobrać usługi Azure, skonfigurować ich parametry i oszacować przyszły koszt. Azure Advisor daje rekomendacje, ale nie działa jak kalkulator koszyka usług."
      },
      {
        "text": "Azure Advisor",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Pricing Calculator. Azure Pricing Calculator pozwala dobrać usługi Azure, skonfigurować ich parametry i oszacować przyszły koszt. Azure Advisor daje rekomendacje, ale nie działa jak kalkulator koszyka usług."
      },
      {
        "text": "Microsoft Docs",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Pricing Calculator. Azure Pricing Calculator pozwala dobrać usługi Azure, skonfigurować ich parametry i oszacować przyszły koszt. Azure Advisor daje rekomendacje, ale nie działa jak kalkulator koszyka usług."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Network Security Group. Network Security Group pozwala definiować podstawowe reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. Jest to prosty mechanizm kontroli ruchu w Virtual Network."
      },
      {
        "text": "Network Security Group",
        "explanation": "To poprawna odpowiedź. Network Security Group pozwala definiować podstawowe reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. Jest to prosty mechanizm kontroli ruchu w Virtual Network."
      },
      {
        "text": "Application Gateway with WAF",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Network Security Group. Network Security Group pozwala definiować podstawowe reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. Jest to prosty mechanizm kontroli ruchu w Virtual Network."
      },
      {
        "text": "Azure DDos Standard protection",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Network Security Group. Network Security Group pozwala definiować podstawowe reguły ruchu przychodzącego i wychodzącego dla podsieci lub interfejsów sieciowych. Jest to prosty mechanizm kontroli ruchu w Virtual Network."
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
        "explanation": "To poprawna odpowiedź. W modelu współodpowiedzialności klient odpowiada za zabezpieczenie kluczy dostępu do własnego konta Storage. Jeśli klucze zostaną ujawnione, klient powinien je chronić i regenerować."
      },
      {
        "text": "Azure is responsible for securing the access keys",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: I am responsible for securing the access keys. W modelu współodpowiedzialności klient odpowiada za zabezpieczenie kluczy dostępu do własnego konta Storage. Jeśli klucze zostaną ujawnione, klient powinien je chronić i regenerować."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They are resources that execute tasks requiring CPU cycles.. Compute resources to zasoby wykonujące pracę obliczeniową wymagającą cykli CPU, na przykład maszyny wirtualne lub usługi uruchamiające kod. Nie obejmuje to automatycznie wszystkich zasobów Azure Marketplace."
      },
      {
        "text": "They are resources that execute tasks requiring CPU cycles.",
        "explanation": "To poprawna odpowiedź. Compute resources to zasoby wykonujące pracę obliczeniową wymagającą cykli CPU, na przykład maszyny wirtualne lub usługi uruchamiające kod. Nie obejmuje to automatycznie wszystkich zasobów Azure Marketplace."
      },
      {
        "text": "They refer exclusively to Virtual Machines.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They are resources that execute tasks requiring CPU cycles.. Compute resources to zasoby wykonujące pracę obliczeniową wymagającą cykli CPU, na przykład maszyny wirtualne lub usługi uruchamiające kod. Nie obejmuje to automatycznie wszystkich zasobów Azure Marketplace."
      },
      {
        "text": "They include all resources listed in the Azure Marketplace.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They are resources that execute tasks requiring CPU cycles.. Compute resources to zasoby wykonujące pracę obliczeniową wymagającą cykli CPU, na przykład maszyny wirtualne lub usługi uruchamiające kod. Nie obejmuje to automatycznie wszystkich zasobów Azure Marketplace."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID Single Sign-On (SSO). Microsoft Entra ID Single Sign-On pozwala użytkownikom zalogować się raz i korzystać z wielu aplikacji Microsoft 365 oraz Azure bez ponownego podawania poświadczeń. Defender for Cloud, Key Vault i Azure Policy pełnią inne funkcje."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID Single Sign-On (SSO). Microsoft Entra ID Single Sign-On pozwala użytkownikom zalogować się raz i korzystać z wielu aplikacji Microsoft 365 oraz Azure bez ponownego podawania poświadczeń. Defender for Cloud, Key Vault i Azure Policy pełnią inne funkcje."
      },
      {
        "text": "Microsoft Entra ID Single Sign-On (SSO)",
        "explanation": "To poprawna odpowiedź. Microsoft Entra ID Single Sign-On pozwala użytkownikom zalogować się raz i korzystać z wielu aplikacji Microsoft 365 oraz Azure bez ponownego podawania poświadczeń. Defender for Cloud, Key Vault i Azure Policy pełnią inne funkcje."
      },
      {
        "text": "Azure Policy",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID Single Sign-On (SSO). Microsoft Entra ID Single Sign-On pozwala użytkownikom zalogować się raz i korzystać z wielu aplikacji Microsoft 365 oraz Azure bez ponownego podawania poświadczeń. Defender for Cloud, Key Vault i Azure Policy pełnią inne funkcje."
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
        "explanation": "To jedna z poprawnych odpowiedzi. Azure Resource Manager umożliwia wdrażanie zasobów na wiele sposobów: przez Azure Portal, PowerShell, Azure CLI oraz REST API/SDK. Wszystkie te metody korzystają z warstwy zarządzania ARM. W tym pytaniu trzeba zaznaczyć wszystkie poprawne metody, więc ta opcja należy do pełnego zestawu odpowiedzi."
      },
      {
        "text": "Powershell",
        "explanation": "To jedna z poprawnych odpowiedzi. Azure Resource Manager umożliwia wdrażanie zasobów na wiele sposobów: przez Azure Portal, PowerShell, Azure CLI oraz REST API/SDK. Wszystkie te metody korzystają z warstwy zarządzania ARM. W tym pytaniu trzeba zaznaczyć wszystkie poprawne metody, więc ta opcja należy do pełnego zestawu odpowiedzi."
      },
      {
        "text": "REST API / SDK",
        "explanation": "To jedna z poprawnych odpowiedzi. Azure Resource Manager umożliwia wdrażanie zasobów na wiele sposobów: przez Azure Portal, PowerShell, Azure CLI oraz REST API/SDK. Wszystkie te metody korzystają z warstwy zarządzania ARM. W tym pytaniu trzeba zaznaczyć wszystkie poprawne metody, więc ta opcja należy do pełnego zestawu odpowiedzi."
      },
      {
        "text": "Azure Portal",
        "explanation": "To jedna z poprawnych odpowiedzi. Azure Resource Manager umożliwia wdrażanie zasobów na wiele sposobów: przez Azure Portal, PowerShell, Azure CLI oraz REST API/SDK. Wszystkie te metody korzystają z warstwy zarządzania ARM. W tym pytaniu trzeba zaznaczyć wszystkie poprawne metody, więc ta opcja należy do pełnego zestawu odpowiedzi."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create multiple subscriptions under the same tenant.. Wiele subskrypcji pod jednym tenantem pozwala rozdzielić rozliczenia, uprawnienia i limity dla jednostek biznesowych, zachowując wspólne zarządzanie tożsamością w Microsoft Entra ID."
      },
      {
        "text": "Create multiple management groups under one subscription.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create multiple subscriptions under the same tenant.. Wiele subskrypcji pod jednym tenantem pozwala rozdzielić rozliczenia, uprawnienia i limity dla jednostek biznesowych, zachowując wspólne zarządzanie tożsamością w Microsoft Entra ID."
      },
      {
        "text": "Create multiple subscriptions under the same tenant.",
        "explanation": "To poprawna odpowiedź. Wiele subskrypcji pod jednym tenantem pozwala rozdzielić rozliczenia, uprawnienia i limity dla jednostek biznesowych, zachowując wspólne zarządzanie tożsamością w Microsoft Entra ID."
      },
      {
        "text": "Use Azure Resource Groups to isolate billing and limits.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create multiple subscriptions under the same tenant.. Wiele subskrypcji pod jednym tenantem pozwala rozdzielić rozliczenia, uprawnienia i limity dla jednostek biznesowych, zachowując wspólne zarządzanie tożsamością w Microsoft Entra ID."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Serverless model. Azure Logic Apps i Azure Functions są przykładami modelu serverless. Dostawca obsługuje infrastrukturę, a użytkownik koncentruje się na logice, przepływach i zdarzeniach."
      },
      {
        "text": "IaaS model",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Serverless model. Azure Logic Apps i Azure Functions są przykładami modelu serverless. Dostawca obsługuje infrastrukturę, a użytkownik koncentruje się na logice, przepływach i zdarzeniach."
      },
      {
        "text": "Serverless model",
        "explanation": "To poprawna odpowiedź. Azure Logic Apps i Azure Functions są przykładami modelu serverless. Dostawca obsługuje infrastrukturę, a użytkownik koncentruje się na logice, przepływach i zdarzeniach."
      },
      {
        "text": "App Services Model",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Serverless model. Azure Logic Apps i Azure Functions są przykładami modelu serverless. Dostawca obsługuje infrastrukturę, a użytkownik koncentruje się na logice, przepływach i zdarzeniach."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID (formerly Azure Active Directory). Microsoft Entra ID, dawniej Azure Active Directory, jest główną usługą tożsamości i uwierzytelniania w Azure. To ona odpowiada za logowanie, użytkowników, grupy i kontrolę dostępu."
      },
      {
        "text": "Network Security Group",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID (formerly Azure Active Directory). Microsoft Entra ID, dawniej Azure Active Directory, jest główną usługą tożsamości i uwierzytelniania w Azure. To ona odpowiada za logowanie, użytkowników, grupy i kontrolę dostępu."
      },
      {
        "text": "Microsoft Entra ID (formerly Azure Active Directory)",
        "explanation": "To poprawna odpowiedź. Microsoft Entra ID, dawniej Azure Active Directory, jest główną usługą tożsamości i uwierzytelniania w Azure. To ona odpowiada za logowanie, użytkowników, grupy i kontrolę dostępu."
      },
      {
        "text": "Facebook Connect",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Entra ID (formerly Azure Active Directory). Microsoft Entra ID, dawniej Azure Active Directory, jest główną usługą tożsamości i uwierzytelniania w Azure. To ona odpowiada za logowanie, użytkowników, grupy i kontrolę dostępu."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure DevOps. Azure DevOps zawiera usługę Pipelines, która automatyzuje budowanie, testowanie i wdrażanie kodu. Służy do tworzenia procesów CI/CD dla aplikacji i infrastruktury."
      },
      {
        "text": "GitHub",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure DevOps. Azure DevOps zawiera usługę Pipelines, która automatyzuje budowanie, testowanie i wdrażanie kodu. Służy do tworzenia procesów CI/CD dla aplikacji i infrastruktury."
      },
      {
        "text": "Virtual Machines",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure DevOps. Azure DevOps zawiera usługę Pipelines, która automatyzuje budowanie, testowanie i wdrażanie kodu. Służy do tworzenia procesów CI/CD dla aplikacji i infrastruktury."
      },
      {
        "text": "Azure DevOps",
        "explanation": "To poprawna odpowiedź. Azure DevOps zawiera usługę Pipelines, która automatyzuje budowanie, testowanie i wdrażanie kodu. Służy do tworzenia procesów CI/CD dla aplikacji i infrastruktury."
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
        "explanation": "To poprawna odpowiedź. Maszyna wirtualna jest klasycznym przykładem Infrastructure as a Service, bo klient zarządza systemem operacyjnym i oprogramowaniem, a dostawca zapewnia infrastrukturę bazową."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Infrastructure as a Service (IaaS). Maszyna wirtualna jest klasycznym przykładem Infrastructure as a Service, bo klient zarządza systemem operacyjnym i oprogramowaniem, a dostawca zapewnia infrastrukturę bazową."
      },
      {
        "text": "Platform as a Service (PaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Infrastructure as a Service (IaaS). Maszyna wirtualna jest klasycznym przykładem Infrastructure as a Service, bo klient zarządza systemem operacyjnym i oprogramowaniem, a dostawca zapewnia infrastrukturę bazową."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A compatible VPN Gateway device. Połączenie Site-to-Site VPN wymaga zgodnego urządzenia VPN Gateway po stronie lokalnej, które zakończy tunel VPN. Sama aplikacja, maszyna wirtualna czy sieć wirtualna nie zastępują tego urządzenia."
      },
      {
        "text": "An Application Gateway",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A compatible VPN Gateway device. Połączenie Site-to-Site VPN wymaga zgodnego urządzenia VPN Gateway po stronie lokalnej, które zakończy tunel VPN. Sama aplikacja, maszyna wirtualna czy sieć wirtualna nie zastępują tego urządzenia."
      },
      {
        "text": "A compatible VPN Gateway device",
        "explanation": "To poprawna odpowiedź. Połączenie Site-to-Site VPN wymaga zgodnego urządzenia VPN Gateway po stronie lokalnej, które zakończy tunel VPN. Sama aplikacja, maszyna wirtualna czy sieć wirtualna nie zastępują tego urządzenia."
      },
      {
        "text": "An Azure Virtual Network",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: A compatible VPN Gateway device. Połączenie Site-to-Site VPN wymaga zgodnego urządzenia VPN Gateway po stronie lokalnej, które zakończy tunel VPN. Sama aplikacja, maszyna wirtualna czy sieć wirtualna nie zastępują tego urządzenia."
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
        "explanation": "To poprawna odpowiedź. Azure Monitor centralizuje metryki, logi i zdarzenia z wielu zasobów. Umożliwia zapytania, wizualizacje i alerty na podstawie telemetrii."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Monitor. Azure Monitor centralizuje metryki, logi i zdarzenia z wielu zasobów. Umożliwia zapytania, wizualizacje i alerty na podstawie telemetrii."
      },
      {
        "text": "Azure Portal Dashboard",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Monitor. Azure Monitor centralizuje metryki, logi i zdarzenia z wielu zasobów. Umożliwia zapytania, wizualizacje i alerty na podstawie telemetrii."
      },
      {
        "text": "Storage Account or Event Hub",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Monitor. Azure Monitor centralizuje metryki, logi i zdarzenia z wielu zasobów. Umożliwia zapytania, wizualizacje i alerty na podstawie telemetrii."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Management Groups. Management Groups pozwalają organizować wiele subskrypcji w hierarchię i stosować centralnie polityki, zgodność oraz uprawnienia. Resource Groups działają niżej, wewnątrz subskrypcji."
      },
      {
        "text": "Microsoft Entra ID",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Management Groups. Management Groups pozwalają organizować wiele subskrypcji w hierarchię i stosować centralnie polityki, zgodność oraz uprawnienia. Resource Groups działają niżej, wewnątrz subskrypcji."
      },
      {
        "text": "Management Groups",
        "explanation": "To poprawna odpowiedź. Management Groups pozwalają organizować wiele subskrypcji w hierarchię i stosować centralnie polityki, zgodność oraz uprawnienia. Resource Groups działają niżej, wewnątrz subskrypcji."
      },
      {
        "text": "RBAC (Role-Based Access Control)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Management Groups. Management Groups pozwalają organizować wiele subskrypcji w hierarchię i stosować centralnie polityki, zgodność oraz uprawnienia. Resource Groups działają niżej, wewnątrz subskrypcji."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Deploying two or more virtual machines across different availability zones within the same region.. Najwyższą dostępność dla maszyn wirtualnych daje rozmieszczenie co najmniej dwóch VM w różnych Availability Zones w tym samym regionie. Strefy dostępności chronią przed awarią pojedynczego centrum danych."
      },
      {
        "text": "Deploying two or more virtual machines within the same data center.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Deploying two or more virtual machines across different availability zones within the same region.. Najwyższą dostępność dla maszyn wirtualnych daje rozmieszczenie co najmniej dwóch VM w różnych Availability Zones w tym samym regionie. Strefy dostępności chronią przed awarią pojedynczego centrum danych."
      },
      {
        "text": "Deploying two or more virtual machines across different availability zones within the same region.",
        "explanation": "To poprawna odpowiedź. Najwyższą dostępność dla maszyn wirtualnych daje rozmieszczenie co najmniej dwóch VM w różnych Availability Zones w tym samym regionie. Strefy dostępności chronią przed awarią pojedynczego centrum danych."
      },
      {
        "text": "Deploying two or more virtual machines within an availability set.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Deploying two or more virtual machines across different availability zones within the same region.. Najwyższą dostępność dla maszyn wirtualnych daje rozmieszczenie co najmniej dwóch VM w różnych Availability Zones w tym samym regionie. Strefy dostępności chronią przed awarią pojedynczego centrum danych."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Significant cost savings when the resources aren't needed for constant use.. Model zużyciowy pozwala płacić za realne użycie zasobów, więc daje oszczędności, gdy zasoby nie muszą działać stale. Nie oznacza jednak, że zawsze będzie tańszy w każdej sytuacji."
      },
      {
        "text": "A simpler and easier-to-understand pricing model.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Significant cost savings when the resources aren't needed for constant use.. Model zużyciowy pozwala płacić za realne użycie zasobów, więc daje oszczędności, gdy zasoby nie muszą działać stale. Nie oznacza jednak, że zawsze będzie tańszy w każdej sytuacji."
      },
      {
        "text": "It always being cheaper to pay for consumption rather than paying hourly.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Significant cost savings when the resources aren't needed for constant use.. Model zużyciowy pozwala płacić za realne użycie zasobów, więc daje oszczędności, gdy zasoby nie muszą działać stale. Nie oznacza jednak, że zawsze będzie tańszy w każdej sytuacji."
      },
      {
        "text": "Significant cost savings when the resources aren't needed for constant use.",
        "explanation": "To poprawna odpowiedź. Model zużyciowy pozwala płacić za realne użycie zasobów, więc daje oszczędności, gdy zasoby nie muszą działać stale. Nie oznacza jednak, że zawsze będzie tańszy w każdej sytuacji."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create and assign a custom policy definition in Azure Policy.. Jeśli wbudowane definicje Azure Policy nie obejmują wymagań organizacji, należy utworzyć i przypisać własną definicję polityki. Resource Locks blokują zmiany, ale nie wyrażają niestandardowych reguł zgodności."
      },
      {
        "text": "Create and assign a custom policy definition in Azure Policy.",
        "explanation": "To poprawna odpowiedź. Jeśli wbudowane definicje Azure Policy nie obejmują wymagań organizacji, należy utworzyć i przypisać własną definicję polityki. Resource Locks blokują zmiany, ale nie wyrażają niestandardowych reguł zgodności."
      },
      {
        "text": "Open a Microsoft support request to add a new built-in policy.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create and assign a custom policy definition in Azure Policy.. Jeśli wbudowane definicje Azure Policy nie obejmują wymagań organizacji, należy utworzyć i przypisać własną definicję polityki. Resource Locks blokują zmiany, ale nie wyrażają niestandardowych reguł zgodności."
      },
      {
        "text": "Deploy resources only in regions with default compliance controls.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Create and assign a custom policy definition in Azure Policy.. Jeśli wbudowane definicje Azure Policy nie obejmują wymagań organizacji, należy utworzyć i przypisać własną definicję polityki. Resource Locks blokują zmiany, ale nie wyrażają niestandardowych reguł zgodności."
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
        "explanation": "To poprawna odpowiedź. Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
      },
      {
        "text": "Speak text in an extremely realistic way",
        "explanation": "Ta opcja opisuje prawdziwą możliwość, ale nie jest najlepszą odpowiedzią samodzielnie, bo pytanie obejmuje cały zestaw możliwości. Najlepsza odpowiedź to: All of these! Azure can do it all!. Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
      },
      {
        "text": "Recognize text in an image",
        "explanation": "Ta opcja opisuje prawdziwą możliwość, ale nie jest najlepszą odpowiedzią samodzielnie, bo pytanie obejmuje cały zestaw możliwości. Najlepsza odpowiedź to: All of these! Azure can do it all!. Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
      },
      {
        "text": "Translate text from one language to another",
        "explanation": "Ta opcja opisuje prawdziwą możliwość, ale nie jest najlepszą odpowiedzią samodzielnie, bo pytanie obejmuje cały zestaw możliwości. Najlepsza odpowiedź to: All of these! Azure can do it all!. Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
      },
      {
        "text": "Create text from audio",
        "explanation": "Ta opcja opisuje prawdziwą możliwość, ale nie jest najlepszą odpowiedzią samodzielnie, bo pytanie obejmuje cały zestaw możliwości. Najlepsza odpowiedź to: All of these! Azure can do it all!. Azure AI Services obejmują między innymi mowę syntetyczną, rozpoznawanie tekstu na obrazach, tłumaczenie i transkrypcję audio. Dlatego poprawna jest odpowiedź, że Azure potrafi wykonać wszystkie wymienione działania."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The default is US$200. Nowe konto Azure Free standardowo dostaje 200 USD kredytu na okres próbny. Oprócz tego mogą być dostępne wybrane bezpłatne usługi, ale pytanie dotyczy początkowego kredytu."
      },
      {
        "text": "You are given $50 per month, for one year towards Azure services",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The default is US$200. Nowe konto Azure Free standardowo dostaje 200 USD kredytu na okres próbny. Oprócz tego mogą być dostępne wybrane bezpłatne usługi, ale pytanie dotyczy początkowego kredytu."
      },
      {
        "text": "The default is US$200",
        "explanation": "To poprawna odpowiedź. Nowe konto Azure Free standardowo dostaje 200 USD kredytu na okres próbny. Oprócz tego mogą być dostępne wybrane bezpłatne usługi, ale pytanie dotyczy początkowego kredytu."
      },
      {
        "text": "You can create 1 Linux VM, 1 Windows VM, and a number of other free services for the first year.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The default is US$200. Nowe konto Azure Free standardowo dostaje 200 USD kredytu na okres próbny. Oprócz tego mogą być dostępne wybrane bezpłatne usługi, ale pytanie dotyczy początkowego kredytu."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Capital expenditure reduction (CapEx to OpEx). Przejście z dużych zakupów sprzętu na płatność za faktyczne użycie opisuje redukcję nakładów kapitałowych i przejście z CapEx na OpEx. To jedna z podstawowych korzyści chmury."
      },
      {
        "text": "Elasticity",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Capital expenditure reduction (CapEx to OpEx). Przejście z dużych zakupów sprzętu na płatność za faktyczne użycie opisuje redukcję nakładów kapitałowych i przejście z CapEx na OpEx. To jedna z podstawowych korzyści chmury."
      },
      {
        "text": "High availability",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Capital expenditure reduction (CapEx to OpEx). Przejście z dużych zakupów sprzętu na płatność za faktyczne użycie opisuje redukcję nakładów kapitałowych i przejście z CapEx na OpEx. To jedna z podstawowych korzyści chmury."
      },
      {
        "text": "Capital expenditure reduction (CapEx to OpEx)",
        "explanation": "To poprawna odpowiedź. Przejście z dużych zakupów sprzętu na płatność za faktyczne użycie opisuje redukcję nakładów kapitałowych i przejście z CapEx na OpEx. To jedna z podstawowych korzyści chmury."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure SQL Database. Azure SQL Database to w pełni zarządzana relacyjna baza SQL w modelu PaaS. SQL Server w maszynie wirtualnej jest bliższy IaaS, a Cosmos DB jest bazą NoSQL."
      },
      {
        "text": "SQL Server in a VM",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure SQL Database. Azure SQL Database to w pełni zarządzana relacyjna baza SQL w modelu PaaS. SQL Server w maszynie wirtualnej jest bliższy IaaS, a Cosmos DB jest bazą NoSQL."
      },
      {
        "text": "Azure SQL Database",
        "explanation": "To poprawna odpowiedź. Azure SQL Database to w pełni zarządzana relacyjna baza SQL w modelu PaaS. SQL Server w maszynie wirtualnej jest bliższy IaaS, a Cosmos DB jest bazą NoSQL."
      },
      {
        "text": "Cosmos DB",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure SQL Database. Azure SQL Database to w pełni zarządzana relacyjna baza SQL w modelu PaaS. SQL Server w maszynie wirtualnej jest bliższy IaaS, a Cosmos DB jest bazą NoSQL."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Using Azure Reserved Instances for most of your virtual machines. Reserved Instances mogą znacząco obniżyć koszt maszyn wirtualnych przy przewidywalnym, dłuższym użyciu. To zwykle daje szybszą i większą oszczędność niż same ograniczenia polityką czy zmiana redundancji storage."
      },
      {
        "text": "Changing your storage accounts from globally redundant (GRS) to locally redundant (LRS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Using Azure Reserved Instances for most of your virtual machines. Reserved Instances mogą znacząco obniżyć koszt maszyn wirtualnych przy przewidywalnym, dłuższym użyciu. To zwykle daje szybszą i większą oszczędność niż same ograniczenia polityką czy zmiana redundancji storage."
      },
      {
        "text": "Auto shutdown of development and QA servers over night and on weekends",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Using Azure Reserved Instances for most of your virtual machines. Reserved Instances mogą znacząco obniżyć koszt maszyn wirtualnych przy przewidywalnym, dłuższym użyciu. To zwykle daje szybszą i większą oszczędność niż same ograniczenia polityką czy zmiana redundancji storage."
      },
      {
        "text": "Using Azure Reserved Instances for most of your virtual machines",
        "explanation": "To poprawna odpowiedź. Reserved Instances mogą znacząco obniżyć koszt maszyn wirtualnych przy przewidywalnym, dłuższym użyciu. To zwykle daje szybszą i większą oszczędność niż same ograniczenia polityką czy zmiana redundancji storage."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The only way is to remove the policy, create the resource and add the policy back. Azure Policy egzekwuje reguły niezależnie od standardowych ról, więc nie wystarczy być właścicielem lub kontrybutorem. Aby utworzyć zasób blokowany przez politykę, trzeba zmienić lub usunąć tę politykę."
      },
      {
        "text": "Use an account that has Contributor or above permissions to the resource group",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: The only way is to remove the policy, create the resource and add the policy back. Azure Policy egzekwuje reguły niezależnie od standardowych ról, więc nie wystarczy być właścicielem lub kontrybutorem. Aby utworzyć zasób blokowany przez politykę, trzeba zmienić lub usunąć tę politykę."
      },
      {
        "text": "The only way is to remove the policy, create the resource and add the policy back",
        "explanation": "To poprawna odpowiedź. Azure Policy egzekwuje reguły niezależnie od standardowych ról, więc nie wystarczy być właścicielem lub kontrybutorem. Aby utworzyć zasób blokowany przez politykę, trzeba zmienić lub usunąć tę politykę."
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
        "explanation": "To poprawna odpowiedź. Multi-Factor Authentication wymaga dodatkowego czynnika logowania poza hasłem, często przez telefon lub aplikację Microsoft Authenticator. Zmniejsza to ryzyko przejęcia konta samym hasłem."
      },
      {
        "text": "Advanced Threat Protection (ATP)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Multi-Factor Authentication. Multi-Factor Authentication wymaga dodatkowego czynnika logowania poza hasłem, często przez telefon lub aplikację Microsoft Authenticator. Zmniejsza to ryzyko przejęcia konta samym hasłem."
      },
      {
        "text": "Azure Information Protection (AIP)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Multi-Factor Authentication. Multi-Factor Authentication wymaga dodatkowego czynnika logowania poza hasłem, często przez telefon lub aplikację Microsoft Authenticator. Zmniejsza to ryzyko przejęcia konta samym hasłem."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Multi-Factor Authentication. Multi-Factor Authentication wymaga dodatkowego czynnika logowania poza hasłem, często przez telefon lub aplikację Microsoft Authenticator. Zmniejsza to ryzyko przejęcia konta samym hasłem."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: High availability and fault tolerance. Migracja do Azure w celu ograniczenia przestojów po awariach sprzętu dotyczy wysokiej dostępności i odporności na błędy. Chmura pozwala projektować rozwiązania z redundancją i szybszym przełączaniem."
      },
      {
        "text": "High availability and fault tolerance",
        "explanation": "To poprawna odpowiedź. Migracja do Azure w celu ograniczenia przestojów po awariach sprzętu dotyczy wysokiej dostępności i odporności na błędy. Chmura pozwala projektować rozwiązania z redundancją i szybszym przełączaniem."
      },
      {
        "text": "Elasticity",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: High availability and fault tolerance. Migracja do Azure w celu ograniczenia przestojów po awariach sprzętu dotyczy wysokiej dostępności i odporności na błędy. Chmura pozwala projektować rozwiązania z redundancją i szybszym przełączaniem."
      },
      {
        "text": "Capital expenditure reduction (CapEx to OpEx)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: High availability and fault tolerance. Migracja do Azure w celu ograniczenia przestojów po awariach sprzętu dotyczy wysokiej dostępności i odporności na błędy. Chmura pozwala projektować rozwiązania z redundancją i szybszym przełączaniem."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest webowym, graficznym interfejsem do zarządzania zasobami Azure. CLI, Cloud Shell i PowerShell są narzędziami wiersza poleceń lub skryptowymi."
      },
      {
        "text": "Azure Cloud Shell",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest webowym, graficznym interfejsem do zarządzania zasobami Azure. CLI, Cloud Shell i PowerShell są narzędziami wiersza poleceń lub skryptowymi."
      },
      {
        "text": "Azure PowerShell",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest webowym, graficznym interfejsem do zarządzania zasobami Azure. CLI, Cloud Shell i PowerShell są narzędziami wiersza poleceń lub skryptowymi."
      },
      {
        "text": "Azure Portal",
        "explanation": "To poprawna odpowiedź. Azure Portal jest webowym, graficznym interfejsem do zarządzania zasobami Azure. CLI, Cloud Shell i PowerShell są narzędziami wiersza poleceń lub skryptowymi."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.. Private preview oznacza ograniczony dostęp, zwykle przez zaproszenie albo zgodę Microsoft. Taka usługa nie jest jeszcze ogólnie dostępna i nie ma standardowych gwarancji jak GA."
      },
      {
        "text": "Services in private preview mode are generally available (GA) and can be used in production environments.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.. Private preview oznacza ograniczony dostęp, zwykle przez zaproszenie albo zgodę Microsoft. Taka usługa nie jest jeszcze ogólnie dostępna i nie ma standardowych gwarancji jak GA."
      },
      {
        "text": "Services in private preview mode have the same level of support and SLA guarantees as generally available services.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.. Private preview oznacza ograniczony dostęp, zwykle przez zaproszenie albo zgodę Microsoft. Taka usługa nie jest jeszcze ogólnie dostępna i nie ma standardowych gwarancji jak GA."
      },
      {
        "text": "Access to services in private preview mode is limited and usually requires approval from Microsoft or an invitation.",
        "explanation": "To poprawna odpowiedź. Private preview oznacza ograniczony dostęp, zwykle przez zaproszenie albo zgodę Microsoft. Taka usługa nie jest jeszcze ogólnie dostępna i nie ma standardowych gwarancji jak GA."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Log Analytics Workspace. Log Analytics Workspace jest kontenerem, w którym Azure Monitor zbiera i przechowuje dane telemetryczne oraz logi. Umożliwia analizę danych z wielu zasobów."
      },
      {
        "text": "Managed Storage",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Log Analytics Workspace. Log Analytics Workspace jest kontenerem, w którym Azure Monitor zbiera i przechowuje dane telemetryczne oraz logi. Umożliwia analizę danych z wielu zasobów."
      },
      {
        "text": "Azure Monitor account",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Log Analytics Workspace. Log Analytics Workspace jest kontenerem, w którym Azure Monitor zbiera i przechowuje dane telemetryczne oraz logi. Umożliwia analizę danych z wielu zasobów."
      },
      {
        "text": "Log Analytics Workspace",
        "explanation": "To poprawna odpowiedź. Log Analytics Workspace jest kontenerem, w którym Azure Monitor zbiera i przechowuje dane telemetryczne oraz logi. Umożliwia analizę danych z wielu zasobów."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Advisor. Azure Advisor analizuje użycie subskrypcji i daje spersonalizowane rekomendacje, w tym dotyczące redukcji kosztów. Azure Dashboard jest tylko widokiem, a Service Health informuje o stanie usług."
      },
      {
        "text": "Azure Advisor",
        "explanation": "To poprawna odpowiedź. Azure Advisor analizuje użycie subskrypcji i daje spersonalizowane rekomendacje, w tym dotyczące redukcji kosztów. Azure Dashboard jest tylko widokiem, a Service Health informuje o stanie usług."
      },
      {
        "text": "Microsoft Defender for Cloud",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Advisor. Azure Advisor analizuje użycie subskrypcji i daje spersonalizowane rekomendacje, w tym dotyczące redukcji kosztów. Azure Dashboard jest tylko widokiem, a Service Health informuje o stanie usług."
      },
      {
        "text": "Azure Service Health",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Advisor. Azure Advisor analizuje użycie subskrypcji i daje spersonalizowane rekomendacje, w tym dotyczące redukcji kosztów. Azure Dashboard jest tylko widokiem, a Service Health informuje o stanie usług."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.. Availability Zones pozwalają świadomie rozmieszczać zasoby w oddzielnych centrach danych w ramach regionu, aby zwiększyć dostępność. Nie są folderem zasobów ani synonimem regionu."
      },
      {
        "text": "They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.",
        "explanation": "To poprawna odpowiedź. Availability Zones pozwalają świadomie rozmieszczać zasoby w oddzielnych centrach danych w ramach regionu, aby zwiększyć dostępność. Nie są folderem zasobów ani synonimem regionu."
      },
      {
        "text": "They are synonymous with an Azure region.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.. Availability Zones pozwalają świadomie rozmieszczać zasoby w oddzielnych centrach danych w ramach regionu, aby zwiększyć dostępność. Nie są folderem zasobów ani synonimem regionu."
      },
      {
        "text": "They serve as a folder structure in Azure used for organizing resources such as databases, virtual machines, and virtual networks.",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: They allow manual selection of data centers for virtual machine placement to achieve superior availability compared to other options.. Availability Zones pozwalają świadomie rozmieszczać zasoby w oddzielnych centrach danych w ramach regionu, aby zwiększyć dostępność. Nie są folderem zasobów ani synonimem regionu."
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
        "explanation": "To poprawna odpowiedź. Dostęp do subskrypcji można nadać innym osobom przez role i RBAC bez udostępniania loginu ani hasła. To standardowy sposób bezpiecznego delegowania uprawnień."
      },
      {
        "text": "NO",
        "explanation": "Ta odpowiedź jest niepoprawna w tym scenariuszu. Poprawna odpowiedź to: YES. Dostęp do subskrypcji można nadać innym osobom przez role i RBAC bez udostępniania loginu ani hasła. To standardowy sposób bezpiecznego delegowania uprawnień."
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
        "explanation": "To poprawna odpowiedź. Azure Storage Service Encryption domyślnie szyfruje dane zapisywane w Azure Storage i odszyfrowuje je przy autoryzowanym dostępie. Key Vault zarządza sekretami i kluczami, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
      },
      {
        "text": "Azure Key Vault",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Storage Service Encryption (SSE). Azure Storage Service Encryption domyślnie szyfruje dane zapisywane w Azure Storage i odszyfrowuje je przy autoryzowanym dostępie. Key Vault zarządza sekretami i kluczami, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
      },
      {
        "text": "Azure Disk Encryption",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Storage Service Encryption (SSE). Azure Storage Service Encryption domyślnie szyfruje dane zapisywane w Azure Storage i odszyfrowuje je przy autoryzowanym dostępie. Key Vault zarządza sekretami i kluczami, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
      },
      {
        "text": "Azure Information Protection",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Storage Service Encryption (SSE). Azure Storage Service Encryption domyślnie szyfruje dane zapisywane w Azure Storage i odszyfrowuje je przy autoryzowanym dostępie. Key Vault zarządza sekretami i kluczami, ale nie jest samą domyślną funkcją szyfrowania Blob Storage."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Azure. Microsoft Azure ma bardzo szeroki globalny zasięg regionów, w których klienci mogą uruchamiać infrastrukturę. W kontekście tego pytania poprawną odpowiedzią jest Azure."
      },
      {
        "text": "Google Cloud Platform",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Microsoft Azure. Microsoft Azure ma bardzo szeroki globalny zasięg regionów, w których klienci mogą uruchamiać infrastrukturę. W kontekście tego pytania poprawną odpowiedzią jest Azure."
      },
      {
        "text": "Microsoft Azure",
        "explanation": "To poprawna odpowiedź. Microsoft Azure ma bardzo szeroki globalny zasięg regionów, w których klienci mogą uruchamiać infrastrukturę. W kontekście tego pytania poprawną odpowiedzią jest Azure."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest podstawowym graficznym interfejsem do zarządzania zasobami Azure. PowerShell jest narzędziem skryptowym, Storage Explorer służy głównie do storage, a RDP do zdalnego pulpitu."
      },
      {
        "text": "Azure Portal",
        "explanation": "To poprawna odpowiedź. Azure Portal jest podstawowym graficznym interfejsem do zarządzania zasobami Azure. PowerShell jest narzędziem skryptowym, Storage Explorer służy głównie do storage, a RDP do zdalnego pulpitu."
      },
      {
        "text": "Azure Storage Explorer",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest podstawowym graficznym interfejsem do zarządzania zasobami Azure. PowerShell jest narzędziem skryptowym, Storage Explorer służy głównie do storage, a RDP do zdalnego pulpitu."
      },
      {
        "text": "Remote Desktop Protocol (RDP)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Azure Portal. Azure Portal jest podstawowym graficznym interfejsem do zarządzania zasobami Azure. PowerShell jest narzędziem skryptowym, Storage Explorer służy głównie do storage, a RDP do zdalnego pulpitu."
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
        "explanation": "To poprawna odpowiedź. PaaS jest najlepszym modelem dla własnej aplikacji webowej bez zarządzania systemem operacyjnym i serwerem WWW. Dostawca obsługuje platformę, a deweloper wdraża aplikację."
      },
      {
        "text": "Software as a Service (SaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Platform as a Service (PaaS). PaaS jest najlepszym modelem dla własnej aplikacji webowej bez zarządzania systemem operacyjnym i serwerem WWW. Dostawca obsługuje platformę, a deweloper wdraża aplikację."
      },
      {
        "text": "Functions as a Service (FaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Platform as a Service (PaaS). PaaS jest najlepszym modelem dla własnej aplikacji webowej bez zarządzania systemem operacyjnym i serwerem WWW. Dostawca obsługuje platformę, a deweloper wdraża aplikację."
      },
      {
        "text": "Infrastructure as a Service (IaaS)",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Platform as a Service (PaaS). PaaS jest najlepszym modelem dla własnej aplikacji webowej bez zarządzania systemem operacyjnym i serwerem WWW. Dostawca obsługuje platformę, a deweloper wdraża aplikację."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Much cheaper to store your files than the hot access tier. Cool access tier w Azure Blob Storage obniża koszt przechowywania danych, które są rzadko odczytywane. Dostęp nie jest tak tani jak w hot tier, ale samo magazynowanie jest tańsze."
      },
      {
        "text": "Significant delays in accessing your data, up to several hours",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Much cheaper to store your files than the hot access tier. Cool access tier w Azure Blob Storage obniża koszt przechowywania danych, które są rzadko odczytywane. Dostęp nie jest tak tani jak w hot tier, ale samo magazynowanie jest tańsze."
      },
      {
        "text": "Most expensive option when it comes to bandwidth cost to access your files",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Much cheaper to store your files than the hot access tier. Cool access tier w Azure Blob Storage obniża koszt przechowywania danych, które są rzadko odczytywane. Dostęp nie jest tak tani jak w hot tier, ale samo magazynowanie jest tańsze."
      },
      {
        "text": "Much cheaper to store your files than the hot access tier",
        "explanation": "To poprawna odpowiedź. Cool access tier w Azure Blob Storage obniża koszt przechowywania danych, które są rzadko odczytywane. Dostęp nie jest tak tani jak w hot tier, ale samo magazynowanie jest tańsze."
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
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Application (L7) level attacks. Azure DDoS Protection na poziomie IP chroni przed atakami sieciowymi i transportowymi L3/L4. Nie mityguje ataków aplikacyjnych L7, które wymagają innych mechanizmów ochrony."
      },
      {
        "text": "Transport (L4) level attacks",
        "explanation": "To nie jest najlepsza odpowiedź w kontekście tego pytania. Poprawna odpowiedź to: Application (L7) level attacks. Azure DDoS Protection na poziomie IP chroni przed atakami sieciowymi i transportowymi L3/L4. Nie mityguje ataków aplikacyjnych L7, które wymagają innych mechanizmów ochrony."
      },
      {
        "text": "Application (L7) level attacks",
        "explanation": "To poprawna odpowiedź. Azure DDoS Protection na poziomie IP chroni przed atakami sieciowymi i transportowymi L3/L4. Nie mityguje ataków aplikacyjnych L7, które wymagają innych mechanizmów ochrony."
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
