/* LO6: Know the purpose and key terms of 15 ITIL practices (7 marks). */

(function () {
  // Official purpose statements, reused as answer options across the questions below.
  const P = {
    ism: "To protect the information needed by the organization to conduct its business",
    rm: "To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels",
    sm: "To ensure that the organization's suppliers and their performances are managed appropriately to support the seamless provision of quality products and services",
    itam: "To plan and manage the full lifecycle of all IT assets",
    mem: "To systematically observe services and service components, and record and report selected changes of state identified as events",
    rel: "To make new and changed services and features available for use",
    scm: "To ensure that accurate and reliable information about the configuration of services, and the configuration items that support them, is available when and where it is needed",
    dep: "To move new or changed hardware, software, documentation, processes, or any other component to live environments",
    ci: "To align the organization's practices and services with changing business needs through the ongoing improvement of products, services, and practices",
    ce: "To maximize the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule",
    inc: "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible",
    prb: "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors",
    srm: "To support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner",
    sd: "To capture demand for incident resolution and service requests",
    slm: "To set clear business-based targets for service performance, so that the delivery of a service can be properly assessed, monitored, and managed against these targets",
  };

  const IS = (practice) => `This is the purpose of the '${practice}' practice.`;

  ITIL.add("6.1", "Information security management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'information security management' practice?",
      o: [P.ism, P.scm, P.itam, P.mem],
      e: "Information security management protects the information needed by the organization to conduct its business, including managing risks to confidentiality, integrity, and availability.",
      w: [IS("service configuration management"), IS("IT asset management"), IS("monitoring and event management")],
    },
    {
      t: "s",
      q: "Which practice includes understanding and managing risks to the confidentiality, integrity, and availability of information?",
      o: ["Information security management", "Service configuration management", "IT asset management", "Monitoring and event management"],
      e: "Information security management covers risks to confidentiality, integrity, and availability, and other aspects such as authentication and non-repudiation.",
      w: [
        "Service configuration management provides accurate information about services and CIs.",
        "IT asset management manages the lifecycle of IT assets.",
        "Monitoring and event management observes services and records events.",
      ],
    },
    {
      t: "s",
      q: "Which practice is concerned with authentication (ensuring someone is who they claim to be) and non-repudiation (ensuring someone cannot deny taking an action)?",
      o: ["Information security management", "Service desk", "Relationship management", "Change enablement"],
      e: "Beyond confidentiality, integrity, and availability, information security management also covers authentication and non-repudiation.",
      w: [
        "The service desk captures demand for incident resolution and service requests.",
        "Relationship management nurtures links with stakeholders.",
        "Change enablement assesses risk and authorizes changes.",
      ],
    },
  ]);

  ITIL.add("6.1", "Relationship management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'relationship management' practice?",
      o: [P.rm, P.sm, P.slm, P.sd],
      e: "Relationship management establishes and nurtures the links between the organization and its stakeholders at strategic and tactical levels.",
      w: [IS("supplier management"), IS("service level management"), IS("service desk")],
    },
    {
      t: "s",
      q: "Which practice includes the identification, analysis, monitoring, and continual improvement of relationships with and between stakeholders?",
      o: ["Relationship management", "Supplier management", "Service level management", "Continual improvement"],
      e: "Relationship management identifies, analyses, monitors, and continually improves relationships with and between stakeholders.",
      w: [
        "Supplier management focuses on suppliers and their performance.",
        "Service level management sets and manages service performance targets.",
        "Continual improvement improves products, services, and practices.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'relationship management' practice is to establish and nurture the links between the organization and its stakeholders at [?] levels.",
      o: ["strategic and tactical", "operational and technical", "tactical and operational", "executive"],
      e: "Relationship management works at strategic and tactical levels.",
      w: [
        "The purpose refers to strategic and tactical levels.",
        "The purpose refers to strategic and tactical levels, not operational.",
        "The purpose refers to strategic and tactical levels.",
      ],
    },
  ]);

  ITIL.add("6.1", "Supplier management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'supplier management' practice?",
      o: [P.sm, P.rm, P.itam, P.slm],
      e: "Supplier management ensures that suppliers and their performance are managed appropriately to support the seamless provision of quality products and services.",
      w: [IS("relationship management"), IS("IT asset management"), IS("service level management")],
    },
    {
      t: "s",
      q: "Which practice includes creating closer, more collaborative relationships with key suppliers to uncover and realize new value and reduce the risk of failure?",
      o: ["Supplier management", "Relationship management", "Service level management", "Change enablement"],
      e: "Supplier management includes building closer, more collaborative relationships with key suppliers to find new value and reduce the risk of failure.",
      w: [
        "Relationship management covers all stakeholders at strategic and tactical levels. Key-supplier collaboration is supplier management.",
        "Service level management sets business-based service targets.",
        "Change enablement assesses risk and authorizes changes.",
      ],
    },
    {
      t: "s",
      q: "An organization wants to make sure that its cloud hosting provider performs as required to support the seamless provision of quality services. Which practice is MOST relevant?",
      o: ["Supplier management", "Relationship management", "IT asset management", "Deployment management"],
      e: "Managing suppliers and their performance to support seamless, quality services is supplier management.",
      w: [
        "Relationship management nurtures links with stakeholders at strategic and tactical levels. Managing a supplier's performance is supplier management.",
        "IT asset management manages the lifecycle of the organization's IT assets.",
        "Deployment management moves components to live environments.",
      ],
    },
  ]);

  ITIL.add("6.1", "IT asset management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'IT asset management' practice?",
      o: [P.itam, P.scm, P.dep, P.ism],
      e: "IT asset management plans and manages the full lifecycle of all IT assets.",
      w: [IS("service configuration management"), IS("deployment management"), IS("information security management")],
    },
    {
      t: "l",
      q: "Which TWO does the 'IT asset management' practice help the organization to achieve?",
      s: ["Maximize value", "Control costs", "Restore normal service operation as quickly as possible", "Make new and changed services available for use"],
      e: "IT asset management helps the organization maximize value, control costs, manage risks, support decisions about purchase, reuse, retirement, and disposal of assets, and meet regulatory and contractual requirements.",
      w: [
        "Restoring normal service operation is the purpose of incident management.",
        "Making new and changed services available is the purpose of release management.",
      ],
    },
    {
      t: "s",
      q: "Which practice supports decision-making about the purchase, reuse, retirement, and disposal of assets?",
      o: ["IT asset management", "Service configuration management", "Supplier management", "Release management"],
      e: "IT asset management plans and manages the full lifecycle of IT assets, including decisions about purchase, reuse, retirement, and disposal.",
      w: [
        "Service configuration management provides information about services and CIs, not asset lifecycle decisions.",
        "Supplier management manages suppliers and their performance.",
        "Release management makes new and changed services available.",
      ],
    },
  ]);

  ITIL.add("6.1", "Monitoring and event management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'monitoring and event management' practice?",
      o: [P.mem, P.inc, P.scm, P.prb],
      e: "Monitoring and event management systematically observes services and service components, and records and reports selected changes of state identified as events.",
      w: [IS("incident management"), IS("service configuration management"), IS("problem management")],
    },
    {
      t: "s",
      q: "Which practice identifies and prioritizes infrastructure, services, business processes, and information security events, and establishes the appropriate response to those events?",
      o: ["Monitoring and event management", "Incident management", "Information security management", "Service desk"],
      e: "Monitoring and event management identifies and prioritizes events and establishes the appropriate response, including to conditions that could lead to faults or incidents.",
      w: [
        "Incident management restores normal service when an incident occurs.",
        "Information security management protects information. Detecting and responding to events is monitoring and event management.",
        "The service desk captures demand for incident resolution and service requests.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'monitoring and event management' practice is to systematically observe services and service components, and record and report selected changes of state identified as [?].",
      o: ["events", "incidents", "problems", "changes"],
      e: "Selected changes of state are identified as events.",
      w: [
        "An incident is an unplanned interruption or reduction in quality. Not every event is an incident.",
        "A problem is a cause, or potential cause, of incidents.",
        "A change is an addition, modification, or removal that could affect services.",
      ],
    },
  ]);

  ITIL.add("6.1", "Release management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'release management' practice?",
      o: [P.rel, P.dep, P.ce, P.scm],
      e: "Release management makes new and changed services and features available for use.",
      w: [IS("deployment management"), IS("change enablement"), IS("service configuration management")],
    },
    {
      t: "s",
      q: "Which practice makes new and changed services and features available for use?",
      o: ["Release management", "Deployment management", "Change enablement", "Service request management"],
      e: "Making new and changed services and features available for use is the purpose of release management.",
      w: [
        "Deployment management moves components to live environments. It does not make them available for use.",
        "Change enablement assesses risk and authorizes changes.",
        "Service request management handles pre-defined, user-initiated requests.",
      ],
    },
    {
      t: "s",
      q: "A new feature has been moved to the live environment but stays hidden from users until the business decides it is ready. Which practice is responsible for making the feature available for use?",
      o: ["Release management", "Deployment management", "Change enablement", "Service configuration management"],
      e: "Deployment moved the feature to the live environment, but making it available for use is release management. Deployment and release can happen at different times.",
      w: [
        "Deployment management has already moved the feature to live. Making it available for use is release.",
        "Change enablement authorizes changes. It does not make features available.",
        "Service configuration management keeps configuration information.",
      ],
    },
  ]);

  ITIL.add("6.1", "Service configuration management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'service configuration management' practice?",
      o: [P.scm, P.itam, P.ism, P.mem],
      e: "Service configuration management ensures that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed.",
      w: [IS("IT asset management"), IS("information security management"), IS("monitoring and event management")],
    },
    {
      t: "s",
      q: "Which practice provides information about how configuration items are configured and the relationships between them?",
      o: ["Service configuration management", "IT asset management", "Monitoring and event management", "Change enablement"],
      e: "Service configuration management includes information on how CIs are configured and the relationships between them.",
      w: [
        "IT asset management focuses on the lifecycle and value of assets.",
        "Monitoring and event management observes services and records events.",
        "Change enablement authorizes changes and manages the change schedule.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'service configuration management' practice is to ensure that accurate and reliable information about the configuration of services, and the [?] that support them, is available when and where it is needed.",
      o: ["configuration items", "IT assets", "suppliers", "processes"],
      e: "The purpose refers to the configuration items (CIs) that support services.",
      w: [
        "IT assets are managed by IT asset management. This purpose refers to CIs.",
        "Suppliers are managed by supplier management.",
        "The purpose refers to CIs, not processes.",
      ],
    },
  ]);

  ITIL.add("6.1", "Deployment management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'deployment management' practice?",
      o: [P.dep, P.rel, P.ce, P.itam],
      e: "Deployment management moves new or changed hardware, software, documentation, processes, or any other component to live environments.",
      w: [IS("release management"), IS("change enablement"), IS("IT asset management")],
    },
    {
      t: "s",
      q: "Which practice moves new or changed hardware, software, documentation, processes, or any other component to live environments?",
      o: ["Deployment management", "Release management", "Change enablement", "Service configuration management"],
      e: "Moving components to live environments is deployment management.",
      w: [
        "Release management makes new and changed services and features available for use.",
        "Change enablement assesses risk and authorizes changes.",
        "Service configuration management maintains information about services and CIs.",
      ],
    },
    {
      t: "s",
      q: "Which practice may also be involved in moving components to other environments for testing or staging?",
      o: ["Deployment management", "Release management", "Service request management", "IT asset management"],
      e: "Deployment management moves components to live environments, and may also deploy components to other environments for testing or staging.",
      w: [
        "Release management makes services and features available for use.",
        "Service request management handles pre-defined user requests.",
        "IT asset management manages the lifecycle of IT assets.",
      ],
    },
  ]);

  ITIL.add("6.1", "Continual improvement (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'continual improvement' practice?",
      o: [P.ci, P.prb, P.ce, P.slm],
      e: "Continual improvement aligns the organization's practices and services with changing business needs through the ongoing improvement of products, services, and practices.",
      w: [IS("problem management"), IS("change enablement"), IS("service level management")],
    },
    {
      t: "s",
      q: "Which practice aligns the organization's practices and services with changing business needs?",
      o: ["Continual improvement", "Change enablement", "Relationship management", "Service level management"],
      e: "Continual improvement aligns practices and services with changing business needs through ongoing improvement.",
      w: [
        "Change enablement maximizes successful changes by assessing risk and authorizing them.",
        "Relationship management nurtures links with stakeholders.",
        "Service level management sets business-based performance targets.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'continual improvement' practice is to align the organization's practices and services with changing [?] through the ongoing improvement of products, services, and practices.",
      o: ["business needs", "technologies", "regulations", "service levels"],
      e: "Continual improvement aligns practices and services with changing business needs.",
      w: [
        "The purpose refers to business needs, not technologies.",
        "The purpose refers to business needs, not regulations.",
        "The purpose refers to business needs, not service levels.",
      ],
    },
  ]);

  ITIL.add("6.1", "Change enablement (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'change enablement' practice?",
      o: [P.ce, P.rel, P.dep, P.ci],
      e: "Change enablement maximizes the number of successful service and product changes by ensuring risks are properly assessed, authorizing changes to proceed, and managing the change schedule.",
      w: [IS("release management"), IS("deployment management"), IS("continual improvement")],
    },
    {
      t: "s",
      q: "Which practice maximizes the number of successful service and product changes by ensuring that risks have been properly assessed?",
      o: ["Change enablement", "Release management", "Deployment management", "Problem management"],
      e: "Change enablement assesses risks, authorizes changes to proceed, and manages the change schedule.",
      w: [
        "Release management makes new and changed services available for use.",
        "Deployment management moves components to live environments.",
        "Problem management identifies causes of incidents and manages known errors.",
      ],
    },
    {
      t: "l",
      q: "Which TWO are included in the purpose of the 'change enablement' practice?",
      s: [
        "Authorizing changes to proceed",
        "Managing the change schedule",
        "Moving changed components to live environments",
        "Making new features available for use",
      ],
      e: "Change enablement ensures risks are properly assessed, authorizes changes to proceed, and manages the change schedule.",
      w: [
        "Moving components to live environments is deployment management.",
        "Making features available for use is release management.",
      ],
    },
  ]);

  ITIL.add("6.1", "Incident management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'incident management' practice?",
      o: [P.inc, P.prb, P.sd, P.mem],
      e: "Incident management minimizes the negative impact of incidents by restoring normal service operation as quickly as possible.",
      w: [IS("problem management"), IS("service desk"), IS("monitoring and event management")],
    },
    {
      t: "s",
      q: "Which practice minimizes the negative impact of incidents by restoring normal service operation as quickly as possible?",
      o: ["Incident management", "Problem management", "Service desk", "Service request management"],
      e: "Restoring normal service operation as quickly as possible is the purpose of incident management.",
      w: [
        "Problem management reduces the likelihood and impact of incidents by finding their causes.",
        "The service desk captures demand for incident resolution. Restoring service is incident management.",
        "Service request management handles pre-defined, user-initiated requests.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'incident management' practice is to minimize the negative impact of incidents by [?] as quickly as possible.",
      o: ["restoring normal service operation", "identifying the root cause", "implementing a permanent solution", "logging every incident"],
      e: "Incident management restores normal service operation as quickly as possible.",
      w: [
        "Identifying causes is problem management.",
        "Permanent solutions are found through problem management and implemented as changes.",
        "Incidents are logged, but the purpose is to restore normal service.",
      ],
    },
  ]);

  ITIL.add("6.1", "Problem management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'problem management' practice?",
      o: [P.prb, P.inc, P.ci, P.mem],
      e: "Problem management reduces the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors.",
      w: [IS("incident management"), IS("continual improvement"), IS("monitoring and event management")],
    },
    {
      t: "s",
      q: "Which practice reduces the likelihood and impact of incidents by identifying actual and potential causes of incidents?",
      o: ["Problem management", "Incident management", "Monitoring and event management", "Change enablement"],
      e: "Identifying actual and potential causes of incidents is problem management.",
      w: [
        "Incident management restores service. It does not focus on causes.",
        "Monitoring and event management observes services and records events.",
        "Change enablement assesses and authorizes changes.",
      ],
    },
    {
      t: "s",
      q: "Which practice includes managing workarounds and known errors?",
      o: ["Problem management", "Incident management", "Service desk", "Service configuration management"],
      e: "Problem management's purpose includes managing workarounds and known errors.",
      w: [
        "Incident management uses workarounds, but managing them and known errors is problem management.",
        "The service desk captures demand and is the single point of contact for users.",
        "Service configuration management maintains information about services and CIs.",
      ],
    },
  ]);

  ITIL.add("6.1", "Service request management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'service request management' practice?",
      o: [P.srm, P.sd, P.inc, P.slm],
      e: "Service request management supports the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner.",
      w: [IS("service desk"), IS("incident management"), IS("service level management")],
    },
    {
      t: "s",
      q: "Which practice supports the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner?",
      o: ["Service request management", "Service desk", "Incident management", "Relationship management"],
      e: "This is the purpose of service request management.",
      w: [
        "The service desk captures demand for service requests. Handling them is service request management.",
        "Incident management restores normal service operation.",
        "Relationship management nurtures links with stakeholders.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'service request management' practice is to support the agreed quality of a service by handling all [?] service requests in an effective and user-friendly manner.",
      o: ["pre-defined, user-initiated", "urgent, high-priority", "unplanned, customer-reported", "approved, high-risk"],
      e: "Service requests are pre-defined and user-initiated.",
      w: [
        "Service requests are defined by being pre-defined and user-initiated, not by urgency.",
        "Unplanned interruptions are incidents, not service requests.",
        "Service requests are typically low-risk and often fulfilled through standard changes.",
      ],
    },
  ]);

  ITIL.add("6.1", "Service desk (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'service desk' practice?",
      o: [P.sd, P.inc, P.srm, P.rm],
      e: "The service desk captures demand for incident resolution and service requests. It should also be the entry point and single point of contact for the service provider with all of its users.",
      w: [IS("incident management"), IS("service request management"), IS("relationship management")],
    },
    {
      t: "s",
      q: "Which practice should be the entry point and single point of contact for the service provider with all of its users?",
      o: ["Service desk", "Relationship management", "Service level management", "Incident management"],
      e: "The service desk should be the entry point and single point of contact for the service provider with all of its users.",
      w: [
        "Relationship management works with stakeholders at strategic and tactical levels.",
        "Service level management sets and manages service targets.",
        "Incident management restores service. The service desk is the point of contact.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'service desk' practice is to capture [?] for incident resolution and service requests.",
      o: ["demand", "value", "feedback", "requirements"],
      e: "The service desk captures demand for incident resolution and service requests.",
      w: [
        "The purpose refers to capturing demand, not value.",
        "The service desk may collect feedback, but its purpose refers to demand.",
        "Defining requirements is the customer's role.",
      ],
    },
  ]);

  ITIL.add("6.1", "Service level management (purpose)", [
    {
      t: "s",
      q: "What is the purpose of the 'service level management' practice?",
      o: [P.slm, P.rm, P.sm, P.ci],
      e: "Service level management sets clear business-based targets for service performance, so that delivery can be properly assessed, monitored, and managed against these targets.",
      w: [IS("relationship management"), IS("supplier management"), IS("continual improvement")],
    },
    {
      t: "s",
      q: "Which practice sets clear business-based targets for service performance?",
      o: ["Service level management", "Relationship management", "Continual improvement", "Supplier management"],
      e: "Setting clear business-based targets for service performance is service level management.",
      w: [
        "Relationship management nurtures links with stakeholders.",
        "Continual improvement aligns practices and services with changing business needs.",
        "Supplier management manages suppliers and their performance.",
      ],
    },
    {
      t: "m",
      q: "The purpose of the 'service level management' practice is to set clear [?] targets for service performance, so that the delivery of a service can be properly assessed, monitored, and managed against these targets.",
      o: ["business-based", "technology-based", "supplier-based", "cost-based"],
      e: "Service level management sets clear business-based targets.",
      w: [
        "Targets should reflect business needs, not just technology measures.",
        "The targets are for the service, based on business needs, not on suppliers.",
        "Targets are based on business needs, not cost alone.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: IT asset", [
    {
      t: "s",
      q: "What is an 'IT asset'?",
      o: [
        "Any financially valuable component that can contribute to the delivery of an IT product or service",
        "Any component that needs to be managed in order to deliver an IT service",
        "Any change of state that has significance for the management of a service",
        "A configuration of an organization's resources designed to offer value for a consumer",
      ],
      e: "An IT asset is any financially valuable component that can contribute to the delivery of an IT product or service.",
      w: ["This is the definition of a configuration item.", "This is the definition of an event.", "This is the definition of a product."],
    },
    {
      t: "m",
      q: "An IT asset is any [?] component that can contribute to the delivery of an IT product or service.",
      o: ["financially valuable", "configurable", "managed", "physical"],
      e: "An IT asset is any financially valuable component that can contribute to the delivery of an IT product or service.",
      w: [
        "The definition refers to financial value, not configurability.",
        "'Any component that needs to be managed' is the definition of a CI.",
        "IT assets can be intangible, such as software licences.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'any financially valuable component that can contribute to the delivery of an IT product or service'?",
      o: ["IT asset", "Configuration item", "Service component", "Resource"],
      e: "This is the definition of an IT asset.",
      w: [
        "A configuration item is any component that needs to be managed in order to deliver an IT service.",
        "'Service component' is not defined this way in ITIL.",
        "'Resource' is a general term, not this definition.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: event", [
    {
      t: "s",
      q: "What is an 'event'?",
      o: [
        "Any change of state that has significance for the management of a service or other configuration item",
        "An unplanned interruption to a service or reduction in the quality of a service",
        "A cause, or potential cause, of one or more incidents",
        "The addition, modification, or removal of anything that could have a direct or indirect effect on services",
      ],
      e: "An event is any change of state that has significance for the management of a service or other configuration item.",
      w: ["This is the definition of an incident.", "This is the definition of a problem.", "This is the definition of a change."],
    },
    {
      t: "s",
      q: "How are events typically recognized?",
      o: [
        "Through notifications created by an IT service, configuration item, or monitoring tool",
        "Through calls from users to the service desk",
        "Through problem analysis",
        "Through change requests",
      ],
      e: "Events are typically recognized through notifications created by an IT service, CI, or monitoring tool.",
      w: [
        "User calls usually report incidents or requests, not events.",
        "Problem analysis investigates causes of incidents.",
        "Change requests initiate normal changes.",
      ],
    },
    {
      t: "m",
      q: "An [?] is any change of state that has significance for the management of a service or other configuration item.",
      o: ["event", "incident", "alert", "change"],
      e: "This is the definition of an event.",
      w: [
        "An incident is an unplanned interruption or reduction in quality.",
        "'Alert' is not the term defined this way.",
        "A change is an addition, modification, or removal that could affect services.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: configuration item", [
    {
      t: "s",
      q: "What is a 'configuration item'?",
      o: [
        "Any component that needs to be managed in order to deliver an IT service",
        "Any financially valuable component that can contribute to the delivery of an IT product or service",
        "A record of every component owned by the organization",
        "Any component that has been recorded in an asset register",
      ],
      e: "A configuration item (CI) is any component that needs to be managed in order to deliver an IT service.",
      w: [
        "This is the definition of an IT asset.",
        "A CI is a managed component, not a record of everything owned.",
        "What matters is whether the component needs to be managed to deliver a service, not an asset register.",
      ],
    },
    {
      t: "m",
      q: "A [?] is any component that needs to be managed in order to deliver an IT service.",
      o: ["configuration item", "IT asset", "service offering", "known error"],
      e: "This is the definition of a configuration item.",
      w: [
        "An IT asset is any financially valuable component that can contribute to an IT product or service.",
        "A service offering is a formal description of one or more services.",
        "A known error is a problem that has been analysed but not resolved.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'any component that needs to be managed in order to deliver an IT service'?",
      o: ["Configuration item", "IT asset", "Event", "Known error"],
      e: "This is the definition of a configuration item.",
      w: [
        "An IT asset is defined by its financial value.",
        "An event is a significant change of state.",
        "A known error is a problem that has been analysed but not resolved.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: change", [
    {
      t: "s",
      q: "What is a 'change'?",
      o: [
        "The addition, modification, or removal of anything that could have a direct or indirect effect on services",
        "Any change of state that has significance for the management of a service",
        "A request from a user for something to be provided",
        "The authorization to modify a configuration item",
      ],
      e: "A change is the addition, modification, or removal of anything that could have a direct or indirect effect on services.",
      w: [
        "This is the definition of an event.",
        "A user request for something to be provided is a service request.",
        "Authorization is given by a change authority. It is not the definition of a change.",
      ],
    },
    {
      t: "m",
      q: "A change is the addition, modification, or [?] of anything that could have a direct or indirect effect on services.",
      o: ["removal", "authorization", "deployment", "release"],
      e: "A change is the addition, modification, or removal of anything that could have a direct or indirect effect on services.",
      w: [
        "Authorization is part of change enablement, not the definition of a change.",
        "Deployment is moving components to live environments.",
        "Release is making services and features available for use.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'the addition, modification, or removal of anything that could have a direct or indirect effect on services'?",
      o: ["Change", "Release", "Deployment", "Event"],
      e: "This is the definition of a change.",
      w: [
        "Release management makes new and changed services available for use.",
        "Deployment management moves components to live environments.",
        "An event is a significant change of state.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: incident", [
    {
      t: "s",
      q: "What is an 'incident'?",
      o: [
        "An unplanned interruption to a service or reduction in the quality of a service",
        "A cause, or potential cause, of one or more incidents",
        "Any change of state that has significance for the management of a service",
        "A problem that has been analysed but has not been resolved",
      ],
      e: "An incident is an unplanned interruption to a service or reduction in the quality of a service.",
      w: ["This is the definition of a problem.", "This is the definition of an event.", "This is the definition of a known error."],
    },
    {
      t: "m",
      q: "An incident is an unplanned [?] to a service or reduction in the quality of a service.",
      o: ["interruption", "change", "request", "event"],
      e: "An incident is an unplanned interruption to a service or reduction in the quality of a service.",
      w: [
        "A change is an addition, modification, or removal that could affect services.",
        "A request is a pre-defined, user-initiated service request.",
        "An event is a significant change of state. Not every event is an incident.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'an unplanned interruption to a service or reduction in the quality of a service'?",
      o: ["Incident", "Problem", "Event", "Known error"],
      e: "This is the definition of an incident.",
      w: [
        "A problem is a cause, or potential cause, of one or more incidents.",
        "An event is a significant change of state.",
        "A known error is a problem that has been analysed but not resolved.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: problem", [
    {
      t: "s",
      q: "What is a 'problem'?",
      o: [
        "A cause, or potential cause, of one or more incidents",
        "An unplanned interruption to a service",
        "A problem that has been analysed but has not been resolved",
        "A change of state that has significance for the management of a service",
      ],
      e: "A problem is a cause, or potential cause, of one or more incidents.",
      w: ["This describes an incident.", "This is the definition of a known error.", "This is the definition of an event."],
    },
    {
      t: "m",
      q: "A problem is a cause, or [?] cause, of one or more incidents.",
      o: ["potential", "root", "known", "major"],
      e: "A problem is a cause, or potential cause, of one or more incidents.",
      w: [
        "The definition says 'potential', not 'root'.",
        "A known error is a problem that has been analysed but not resolved.",
        "'Major' relates to incidents, not to this definition.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'a cause, or potential cause, of one or more incidents'?",
      o: ["Problem", "Known error", "Event", "Incident"],
      e: "This is the definition of a problem.",
      w: [
        "A known error is a problem that has been analysed but not resolved.",
        "An event is a significant change of state.",
        "An incident is an unplanned interruption or reduction in quality.",
      ],
    },
  ]);

  ITIL.add("6.2", "Key term: known error", [
    {
      t: "s",
      q: "What is a 'known error'?",
      o: [
        "A problem that has been analysed but has not been resolved",
        "A cause, or potential cause, of one or more incidents",
        "An incident that has been resolved using a workaround",
        "An error that has been fixed by a change",
      ],
      e: "A known error is a problem that has been analysed but has not been resolved.",
      w: [
        "This is the definition of a problem.",
        "Using a workaround for an incident does not make it a known error.",
        "A known error has not been resolved yet.",
      ],
    },
    {
      t: "m",
      q: "A known error is a problem that has been [?] but has not been resolved.",
      o: ["analysed", "logged", "prioritized", "closed"],
      e: "A known error is a problem that has been analysed but has not been resolved.",
      w: [
        "Logging alone does not make a problem a known error. It must be analysed.",
        "Prioritization alone does not make a problem a known error.",
        "A closed problem would be resolved or no longer relevant.",
      ],
    },
    {
      t: "s",
      q: "Which term is defined as 'a problem that has been analysed but has not been resolved'?",
      o: ["Known error", "Workaround", "Incident", "Event"],
      e: "This is the definition of a known error.",
      w: [
        "A workaround reduces or eliminates the impact of an incident or problem when a full resolution is not yet available.",
        "An incident is an unplanned interruption or reduction in quality.",
        "An event is a significant change of state.",
      ],
    },
  ]);
})();
