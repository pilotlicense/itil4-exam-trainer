/* LO7: Understand 7 ITIL practices — service level management. */

ITIL.add("7.1", "Service level management", [
  {
    t: "s",
    q: "What is a service level agreement (SLA)?",
    o: [
      "A documented agreement between a service provider and a customer that identifies both the services required and the expected level of service",
      "A formal description of one or more services, designed for a target consumer group",
      "A contract between a service provider and one of its suppliers",
      "A set of operational metrics used internally by the service provider",
    ],
    e: "An SLA is a documented agreement between a service provider and a customer that identifies both the services required and the expected level of service.",
    w: [
      "This is the definition of a service offering.",
      "An SLA is between a provider and a customer, not a supplier.",
      "SLAs should reflect agreed outcomes, not just internal operational metrics.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are key requirements for successful service level agreements?",
    s: [
      "They must be related to a defined service in the service catalogue",
      "They should relate to defined outcomes, not simply operational metrics",
      "They should be written in technical language to ensure precision",
      "They should be based only on operational metrics such as availability",
    ],
    e: "Successful SLAs must relate to a defined service in the catalogue, relate to defined outcomes rather than just operational metrics, reflect a real agreement, and be simply written and easy to understand.",
    w: [
      "SLAs must be simply written and easy for all parties to understand and use.",
      "Relying only on operational metrics can create the 'watermelon SLA' effect.",
    ],
  },
  {
    t: "s",
    q: "What is the 'watermelon SLA effect'?",
    o: [
      "Service level targets are reported as met, but customers are dissatisfied with the service",
      "Customers are satisfied, but SLA targets are not met",
      "SLAs are renegotiated every season",
      "An SLA is defined for a service that is not in the service catalogue",
    ],
    e: "Like a watermelon, the SLA looks green on the outside (targets met) but is red on the inside (customers unhappy). It happens when SLAs focus on narrow operational metrics.",
    w: [
      "This is the reverse of the watermelon effect.",
      "The effect has nothing to do with how often SLAs are renegotiated.",
      "SLAs should relate to catalogue services, but that is not the watermelon effect.",
    ],
  },
  {
    t: "s",
    q: "Which statement about service level agreements is CORRECT?",
    o: [
      "SLAs should reflect an agreement, based on engagement and discussion between the service provider and the service consumer",
      "SLAs should be written by the service provider and sent to the customer to sign",
      "SLAs should focus only on individual technical metrics",
      "SLAs do not need to relate to a defined service",
    ],
    e: "An SLA should reflect an 'agreement': engagement and discussion between the service provider and the service consumer, involving all relevant stakeholders.",
    w: [
      "An SLA should come from engagement and discussion, not be imposed by the provider.",
      "Individual technical metrics alone do not reflect the customer's experience.",
      "SLAs must relate to a defined service in the service catalogue.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are activities of the 'service level management' practice?",
    s: [
      "Establishing a shared view of the services and target service levels with customers",
      "Performing service reviews to make sure the current services continue to meet the needs of the organization and its customers",
      "Authorizing changes to services",
      "Restoring normal service operation after an incident",
    ],
    e: "Service level management establishes a shared view of services and targets with customers, collects and reports metrics, performs service reviews, and captures and reports on service issues.",
    w: [
      "Authorizing changes is change enablement.",
      "Restoring normal service operation is incident management.",
    ],
  },
  {
    t: "s",
    q: "Which skills and competencies does service level management need?",
    o: [
      "Relationship management, business liaison, business analysis, and commercial/supplier management",
      "Software development, testing, and deployment",
      "Network design and capacity planning",
      "Incident diagnosis and technical troubleshooting",
    ],
    e: "Service level management needs relationship management, business liaison, business analysis, and commercial/supplier management skills.",
    w: [
      "These are development and deployment skills.",
      "These are technical design skills.",
      "These are incident management skills.",
    ],
  },
  {
    t: "s",
    q: "Why should a simple metric, such as percentage system availability, not be used on its own to represent a whole service?",
    o: [
      "Because service level management needs a pragmatic focus on the whole service, not just its parts",
      "Because availability cannot be measured accurately",
      "Because customers are not interested in availability",
      "Because availability is only relevant to suppliers",
    ],
    e: "Service level management needs a pragmatic focus on the whole service. A single metric such as percentage availability should not be taken to represent the whole service.",
    w: [
      "Availability can be measured. The issue is that it gives only a partial view.",
      "Availability matters to customers, but it is not the whole picture.",
      "Availability is relevant to customers and providers alike.",
    ],
  },
  {
    t: "s",
    q: "Which is an example of an operational metric?",
    o: [
      "Incident resolution time",
      "Customer satisfaction score",
      "Revenue generated by a business process",
      "Number of orders processed by the customer's business",
    ],
    e: "Operational metrics are low-level indicators of operational activities, such as system availability, incident response and resolution times, and change implementation times.",
    w: [
      "Customer satisfaction comes from customer feedback.",
      "Revenue from a business process is a business metric.",
      "Orders processed by the customer's business is a business metric.",
    ],
  },
  {
    t: "s",
    q: "Which BEST describes business metrics in service level management?",
    o: [
      "Any business activity that the customer considers useful or valuable, used to measure the success of the service",
      "Low-level indicators of operational activities, such as system availability",
      "The cost of providing the service",
      "The number of incidents resolved within target",
    ],
    e: "Business metrics can be any business activity the customer considers useful or valuable, used to measure the success of the service. They range from simple transactions to complex end-to-end processes.",
    w: [
      "This describes operational metrics.",
      "Cost is not how ITIL describes business metrics.",
      "Incident resolution is an operational metric.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are sources of information that service level management can use to understand service performance?",
    s: [
      "Customer feedback, such as surveys",
      "Operational metrics, such as system availability",
      "Release plans",
      "The organization's guiding principles",
    ],
    e: "Sources for service level management include customer engagement and feedback (such as surveys), key business-related measures, operational metrics, and business metrics.",
    w: [
      "Release plans are not a source for measuring service performance.",
      "The guiding principles guide decisions. They are not a source of performance information.",
    ],
  },
  {
    t: "s",
    q: "Which question would be MOST useful when engaging with a customer to understand their service level requirements?",
    o: [
      "What differentiates a good day from a bad day for you?",
      "Which technology platform do you prefer?",
      "How many servers will your service need?",
      "Which change type should be used for your requests?",
    ],
    e: "Service level management engagement uses questions such as: what does your work involve, what are your key business times, what differentiates a good day from a bad day, and what is the best measure of your success?",
    w: [
      "Technology preferences do not reveal what the customer values.",
      "Server counts are a technical design detail, not a service level requirement.",
      "Change types are an internal provider concern.",
    ],
  },
  {
    t: "s",
    q: "Which statement about service level management is CORRECT?",
    o: [
      "It provides end-to-end visibility of the organization's services",
      "It focuses only on individual technical components",
      "It is only concerned with services provided by suppliers",
      "It removes the need for relationship management",
    ],
    e: "Service level management provides end-to-end visibility of the organization's services.",
    w: [
      "It focuses on the whole service, not individual components.",
      "It covers the organization's services to its customers.",
      "Relationship management is a separate, complementary practice.",
    ],
  },
  {
    t: "m",
    q: "Service level agreements must be simply written and easy to [?] for all parties.",
    o: ["understand and use", "enforce", "measure automatically", "renegotiate"],
    e: "SLAs must be simply written and easy to understand and use for all parties.",
    w: [
      "SLAs are agreements to understand and use, not mainly to enforce.",
      "Automatic measurement is not a stated requirement.",
      "Ease of renegotiation is not a stated requirement.",
    ],
  },
  {
    t: "s",
    q: "A service provider's reports show that every SLA target has been met for six months, but customer satisfaction surveys show growing dissatisfaction. What is this an example of?",
    o: ["The watermelon SLA effect", "A breach of the service level agreement", "Effective service level management", "A known error"],
    e: "Targets that look green while customers are unhappy is the watermelon SLA effect: the metrics do not reflect the customer's actual experience.",
    w: [
      "The targets were met, so there is no breach.",
      "Effective service level management would reflect customer experience.",
      "A known error is a problem that has been analysed but not resolved.",
    ],
  },
  {
    t: "s",
    q: "How can SLAs be related to defined outcomes, rather than just operational metrics?",
    o: [
      "By using balanced bundles of metrics, such as customer satisfaction and key business outcomes",
      "By including only technical availability targets",
      "By reporting the number of incidents logged",
      "By removing all metrics from the SLA",
    ],
    e: "SLAs can relate to outcomes by using balanced bundles of metrics, such as customer satisfaction and key business outcomes.",
    w: [
      "Availability alone is an operational metric.",
      "Incident counts are operational metrics.",
      "SLAs still need metrics, just balanced and outcome-focused ones.",
    ],
  },
  {
    t: "s",
    q: "How does service level management make sure the organization meets the defined service levels?",
    o: [
      "By collecting, analysing, storing, and reporting the relevant metrics for the identified services",
      "By authorizing every change to the services",
      "By resolving incidents within target times",
      "By managing the full lifecycle of IT assets",
    ],
    e: "Service level management ensures defined service levels are met by collecting, analysing, storing, and reporting the relevant metrics for the identified services.",
    w: [
      "Authorizing changes is change enablement.",
      "Resolving incidents is incident management.",
      "Managing asset lifecycles is IT asset management.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT a requirement for a successful SLA?",
    o: [
      "It should be based solely on operational metrics such as availability",
      "It must be related to a defined service in the service catalogue",
      "It should reflect an agreement between the service provider and the service consumer",
      "It must be simply written and easy to understand and use",
    ],
    e: "SLAs should relate to defined outcomes, not just operational metrics. Relying only on operational metrics leads to the watermelon SLA effect.",
    w: [
      "Relating to a defined catalogue service is a requirement.",
      "Reflecting a real agreement is a requirement.",
      "Being simply written and easy to use is a requirement.",
    ],
  },
  {
    t: "s",
    q: "What does service level management capture and report on?",
    o: [
      "Service issues, including performance against defined service levels",
      "Changes authorized by the change authority",
      "Assets purchased and disposed of",
      "Known errors and workarounds",
    ],
    e: "Service level management captures and reports on service issues, including performance against defined service levels.",
    w: [
      "Authorized changes are tracked by change enablement.",
      "Asset purchases and disposals belong to IT asset management.",
      "Known errors and workarounds belong to problem management.",
    ],
  },
]);
