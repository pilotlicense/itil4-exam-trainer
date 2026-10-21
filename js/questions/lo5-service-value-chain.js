/* LO5: Understand the activities of the service value chain, and how they interconnect (2 marks). */

ITIL.add("5.1", "Value chain and value streams", [
  {
    t: "s",
    q: "Which statement about the service value chain is CORRECT?",
    o: [
      "Value chain activities use different combinations of ITIL practices",
      "Each value chain activity is supported by exactly one practice",
      "Value chain activities must always be performed in the same sequence",
      "The service value chain is only used when creating new services",
    ],
    e: "To convert inputs into outputs, the value chain activities use different combinations of practices. The activities can be combined in many sequences.",
    w: [
      "A practice can contribute to many activities, and each activity uses several practices.",
      "The value chain is not a fixed linear sequence.",
      "The value chain applies to all products and services, not just new ones.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about the service value chain activities are CORRECT?",
    s: [
      "Each activity transforms specific inputs into outputs",
      "The inputs to an activity can be demand from outside the value chain or outputs of other activities",
      "The activities must be performed in a fixed linear order",
      "Each activity can only be triggered by the engage activity",
    ],
    e: "Each activity transforms inputs into outputs. Inputs can be demand from outside the value chain or outputs of other activities, and each activity receives and provides triggers for further action.",
    w: [
      "The activities are interconnected and can be combined in many sequences.",
      "Any activity can receive triggers from other activities, not only from engage.",
    ],
  },
  {
    t: "s",
    q: "How does ITIL describe service value streams in relation to the service value chain?",
    o: [
      "Specific combinations of value chain activities and practices, each designed for a particular scenario",
      "A single value chain activity performed by one team",
      "The complete set of practices used by an organization",
      "The fixed order in which the six value chain activities are always performed",
    ],
    e: "Service value streams are specific combinations of activities and practices, each designed for a particular scenario.",
    w: [
      "A value stream usually spans several activities and teams.",
      "A value stream uses only the activities and practices relevant to its scenario.",
      "There is no fixed order. Each value stream combines activities as its scenario needs.",
    ],
  },
  {
    t: "s",
    q: "How do the service value chain activities interconnect?",
    o: [
      "Each activity receives and provides triggers for further action",
      "Each activity is triggered only by the previous activity in a fixed sequence",
      "Activities work independently and do not exchange inputs or outputs",
      "Activities only interact through the plan activity",
    ],
    e: "All value chain activities are interconnected, with each activity receiving and providing triggers for further action.",
    w: [
      "There is no fixed sequence of activities.",
      "Outputs of one activity are often inputs to others.",
      "Any activity can interact with any other activity.",
    ],
  },
  {
    t: "s",
    q: "Which statement about value streams is CORRECT?",
    o: [
      "An organization can have many value streams, each designed for a particular scenario",
      "Every organization has exactly one value stream",
      "Value streams do not use practices",
      "A value stream only includes the deliver and support activity",
    ],
    e: "Organizations typically have many value streams, for example one for developing a new service and another for restoring a live service.",
    w: [
      "Organizations usually have many value streams for different scenarios.",
      "Value streams are built from value chain activities and the practices that support them.",
      "Value streams can include any combination of value chain activities.",
    ],
  },
  {
    t: "s",
    q: "Which statement about practices and the service value chain is CORRECT?",
    o: [
      "A practice can contribute to many different value chain activities",
      "Each practice belongs to exactly one value chain activity",
      "Practices replace the need for value chain activities",
      "Practices are only used by the improve activity",
    ],
    e: "Practices are not tied to a single activity. One practice can contribute to many value chain activities.",
    w: [
      "Practices can be used across many activities.",
      "Practices support the activities. They do not replace them.",
      "All value chain activities draw on practices.",
    ],
  },
  {
    t: "m",
    q: "Each value chain activity contributes to the value chain by transforming specific [?] into outputs.",
    o: ["inputs", "outcomes", "practices", "risks"],
    e: "Each activity contributes to the value chain by transforming specific inputs into outputs.",
    w: [
      "Outcomes are results for stakeholders. Activities transform inputs.",
      "Practices are used by activities. They are not what activities transform.",
      "Activities transform inputs, not risks.",
    ],
  },
  {
    t: "s",
    q: "An organization designs a series of steps to handle a user's request for a new laptop, using the engage, obtain/build, and deliver and support activities. What does this represent?",
    o: ["A value stream", "A practice", "A service offering", "A governance model"],
    e: "A specific combination of value chain activities designed for a particular scenario, here fulfilling a laptop request, is a value stream.",
    w: [
      "A practice is a set of resources for performing work, not a sequence of value chain activities.",
      "A service offering is a formal description of services.",
      "Governance directs and controls the organization.",
    ],
  },
  {
    t: "s",
    q: "Which statement about the six service value chain activities is CORRECT?",
    o: [
      "They can be combined in many different sequences to create value streams",
      "They must always start with plan and end with improve",
      "Each one must be performed by a separate department",
      "Only three of them can be used in any one value stream",
    ],
    e: "The value chain is flexible: its activities can be combined in many sequences to form value streams for different scenarios.",
    w: [
      "There is no required start or end activity.",
      "Activities are not tied to departments.",
      "A value stream can use any activities it needs.",
    ],
  },
  {
    t: "s",
    q: "Which BEST describes the relationship between the service value chain and the service value system?",
    o: [
      "The service value chain is the central element of the service value system",
      "The service value system is a component of the service value chain",
      "The service value chain replaces the service value system",
      "The two models are unrelated",
    ],
    e: "The central element of the SVS is the service value chain, an operating model outlining the key activities needed to respond to demand and facilitate value realization.",
    w: [
      "This reverses the relationship: the value chain is a component of the SVS.",
      "The value chain is part of the SVS. It does not replace it.",
      "The value chain is one of the SVS components.",
    ],
  },
]);

ITIL.add("5.2", "Value chain activities", [
  {
    t: "s",
    q: "What is the purpose of the 'plan' value chain activity?",
    o: [
      "To ensure a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization",
      "To ensure continual improvement of products, services, and practices across all value chain activities and the four dimensions",
      "To provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders",
      "To ensure that services are delivered and supported according to agreed specifications and stakeholders' expectations",
    ],
    e: "Plan ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization.",
    w: [
      "This is the purpose of improve.",
      "This is the purpose of engage.",
      "This is the purpose of deliver and support.",
    ],
  },
  {
    t: "s",
    q: "Which value chain activity ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management?",
    o: ["Improve", "Plan", "Engage", "Design and transition"],
    e: "Improve ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions.",
    w: [
      "Plan ensures a shared understanding of the vision, current status, and improvement direction.",
      "Engage is about understanding stakeholder needs and maintaining relationships.",
      "Design and transition is about meeting expectations for quality, costs, and time to market.",
    ],
  },
  {
    t: "s",
    q: "What is the purpose of the 'engage' value chain activity?",
    o: [
      "To provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders",
      "To ensure that service components are available when and where they are needed, and meet agreed specifications",
      "To ensure a shared understanding of the vision, current status, and improvement direction",
      "To ensure that products and services continually meet stakeholder expectations for quality, costs, and time to market",
    ],
    e: "Engage provides a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders.",
    w: [
      "This is the purpose of obtain/build.",
      "This is the purpose of plan.",
      "This is the purpose of design and transition.",
    ],
  },
  {
    t: "m",
    q: "The purpose of the [?] value chain activity is to ensure that products and services continually meet stakeholder expectations for quality, costs, and time to market.",
    o: ["design and transition", "obtain/build", "plan", "deliver and support"],
    e: "Design and transition ensures that products and services continually meet stakeholder expectations for quality, costs, and time to market.",
    w: [
      "Obtain/build ensures service components are available when and where needed and meet agreed specifications.",
      "Plan ensures a shared understanding of the vision, current status, and improvement direction.",
      "Deliver and support ensures services are delivered and supported according to agreed specifications.",
    ],
  },
  {
    t: "s",
    q: "Which value chain activity ensures that service components are available when and where they are needed, and meet agreed specifications?",
    o: ["Obtain/build", "Design and transition", "Deliver and support", "Engage"],
    e: "Obtain/build ensures that service components are available when and where they are needed, and meet agreed specifications.",
    w: [
      "Design and transition is about meeting expectations for quality, costs, and time to market.",
      "Deliver and support is about delivering and supporting services to agreed specifications.",
      "Engage is about understanding stakeholder needs and maintaining relationships.",
    ],
  },
  {
    t: "s",
    q: "What is the purpose of the 'deliver and support' value chain activity?",
    o: [
      "To ensure that services are delivered and supported according to agreed specifications and stakeholders' expectations",
      "To ensure that service components are available when and where they are needed, and meet agreed specifications",
      "To ensure continual improvement of products, services, and practices",
      "To provide a good understanding of stakeholder needs and continual engagement with stakeholders",
    ],
    e: "Deliver and support ensures that services are delivered and supported according to agreed specifications and stakeholders' expectations.",
    w: [
      "This is the purpose of obtain/build.",
      "This is the purpose of improve.",
      "This is the purpose of engage.",
    ],
  },
  {
    t: "s",
    q: "Which value chain activity is MOST concerned with understanding the needs of stakeholders and maintaining good relationships with them?",
    o: ["Engage", "Plan", "Improve", "Deliver and support"],
    e: "Engage provides a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders.",
    w: [
      "Plan is about shared understanding of the vision, current status, and improvement direction.",
      "Improve is about continual improvement across the value chain.",
      "Deliver and support is about delivering services to agreed specifications.",
    ],
  },
  {
    t: "s",
    q: "A service provider acquires new servers from a supplier and configures them so they are ready to be used by a new service. Which value chain activity does this MOST closely describe?",
    o: ["Obtain/build", "Design and transition", "Deliver and support", "Plan"],
    e: "Acquiring or building service components so they are available when and where needed, to agreed specifications, is obtain/build.",
    w: [
      "Design and transition makes sure products and services meet expectations for quality, costs, and time to market.",
      "Deliver and support is about delivering and supporting live services.",
      "Plan is about vision, current status, and improvement direction.",
    ],
  },
  {
    t: "s",
    q: "Which value chain activity ensures that products and services meet stakeholder expectations for time to market?",
    o: ["Design and transition", "Obtain/build", "Engage", "Improve"],
    e: "Design and transition ensures products and services continually meet stakeholder expectations for quality, costs, and time to market.",
    w: [
      "Obtain/build makes service components available to agreed specifications.",
      "Engage is about stakeholder needs and relationships.",
      "Improve is about continual improvement.",
    ],
  },
  {
    t: "s",
    q: "Which value chain activity is MOST concerned with a shared understanding of the organization's vision and improvement direction?",
    o: ["Plan", "Improve", "Engage", "Design and transition"],
    e: "Plan ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services.",
    w: [
      "Improve carries out continual improvement. Plan creates the shared understanding of direction.",
      "Engage is about stakeholder needs and relationships.",
      "Design and transition is about quality, costs, and time to market.",
    ],
  },
  {
    t: "m",
    q: "The purpose of the [?] value chain activity is to ensure that services are delivered and supported according to agreed specifications and stakeholders' expectations.",
    o: ["deliver and support", "obtain/build", "design and transition", "engage"],
    e: "Deliver and support ensures services are delivered and supported according to agreed specifications and stakeholders' expectations.",
    w: [
      "Obtain/build is about making service components available.",
      "Design and transition is about quality, costs, and time to market.",
      "Engage is about stakeholder needs and relationships.",
    ],
  },
  {
    t: "s",
    q: "A service provider resolves incidents and fulfils service requests every day according to agreed service levels. Which value chain activity does this MOST closely relate to?",
    o: ["Deliver and support", "Engage", "Obtain/build", "Improve"],
    e: "Delivering and supporting live services according to agreed specifications and stakeholders' expectations is deliver and support.",
    w: [
      "Engage is about stakeholder needs and relationships.",
      "Obtain/build is about making service components available.",
      "Improve is about continual improvement.",
    ],
  },
  {
    t: "l",
    q: "Which TWO value chain activities have purposes that explicitly cover all four dimensions of service management?",
    s: ["Plan", "Improve", "Engage", "Obtain/build"],
    e: "Plan covers 'all four dimensions and all products and services', and improve covers 'all value chain activities and the four dimensions'.",
    w: [
      "Engage's purpose is about stakeholder needs and relationships.",
      "Obtain/build's purpose is about service components being available to agreed specifications.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT one of the six service value chain activities?",
    o: ["Operate", "Plan", "Engage", "Obtain/build"],
    e: "The six value chain activities are plan, improve, engage, design and transition, obtain/build, and deliver and support. 'Operate' is not one of them.",
    w: [
      "Plan is a value chain activity.",
      "Engage is a value chain activity.",
      "Obtain/build is a value chain activity.",
    ],
  },
]);
