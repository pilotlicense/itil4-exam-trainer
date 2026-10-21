/* LO7: Understand 7 ITIL practices — service request management. */

ITIL.add("7.1", "Service request management", [
  {
    t: "l",
    q: "Which TWO are examples of service requests?",
    s: [
      "A request for information, such as how to create a document",
      "A request for access to a file or folder",
      "A report that a printer has stopped working",
      "A request to redesign the architecture of a production database",
    ],
    e: "Service requests include service delivery actions, requests for information, provision of a resource or service, access to a resource or service, and feedback, compliments, and complaints.",
    w: [
      "A device that has stopped working is an unplanned interruption: an incident.",
      "A major architectural change is not a pre-defined request. It would be managed as a change.",
    ],
  },
  {
    t: "s",
    q: "Which statement about service requests is CORRECT?",
    o: [
      "Service requests are a normal part of service delivery, not a failure or degradation of service",
      "Service requests are a type of incident",
      "Service requests always need authorization from a change authority",
      "Service requests can only be raised by customers, not users",
    ],
    e: "Service requests are a normal part of service delivery. Failures and degradations are handled as incidents.",
    w: [
      "Incidents are failures or degradations. Service requests are a normal part of service delivery.",
      "Some requests need authorization under organizational policies, and many need none. Change authorities are for changes.",
      "Service requests are user-initiated.",
    ],
  },
  {
    t: "s",
    q: "Why can service requests usually be formalized with a clear, standard procedure?",
    o: [
      "Because they are pre-defined and pre-agreed as a normal part of service delivery",
      "Because they are always simple",
      "Because they always have a low priority",
      "Because they never need approval",
    ],
    e: "Service requests are pre-defined and pre-agreed, so they can usually be formalized with a clear, standard procedure for initiation, approval, fulfilment, and management.",
    w: [
      "Some service requests, such as setting up a new employee, can be quite complex.",
      "Priority is not why requests can be formalized.",
      "Some service requests do need approval.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are guidelines for service request management?",
    s: [
      "Service requests and their fulfilment should be standardized and automated to the greatest degree possible",
      "User expectations about fulfilment times should be clearly set, based on what the organization can realistically deliver",
      "Every service request should need a manager's approval",
      "Requests that should be managed as incidents should be fulfilled as service requests to avoid delays",
    ],
    e: "The guidelines include: standardize and automate as much as possible, set policies for which requests need little or no approval, set realistic fulfilment time expectations, improve fulfilment times and automation, and redirect requests that should be incidents or changes.",
    w: [
      "Policies should define which requests can be fulfilled with limited or no additional approval.",
      "Requests that are really incidents or changes should be documented and redirected.",
    ],
  },
  {
    t: "s",
    q: "Fulfilling a service request may involve changes to services or their components. What type of change is usually involved?",
    o: ["Standard change", "Normal change", "Emergency change", "Major change"],
    e: "Fulfilment of service requests may include changes to services or their components. These are usually standard changes.",
    w: [
      "Normal changes need assessment and authorization each time. Request fulfilment usually uses pre-authorized standard changes.",
      "Emergency changes are urgent fixes, not routine requests.",
      "'Major change' is not one of the ITIL change types.",
    ],
  },
  {
    t: "s",
    q: "Which statement about the complexity of service requests is CORRECT?",
    o: [
      "However complex the request, the steps to fulfil it should be well known and proven",
      "Complex service requests should be handled as incidents",
      "Only simple requests should be handled by service request management",
      "Complex service requests should always be managed as projects",
    ],
    e: "Some service requests are simple, and others, such as setting up a new employee, are complex. Either way, the fulfilment steps should be well known and proven.",
    w: [
      "Complexity does not make a request an incident.",
      "Service request management handles both simple and complex pre-defined requests.",
      "Complex requests can still follow a known, proven workflow.",
    ],
  },
  {
    t: "s",
    q: "Which service request is MOST suitable for complete automation from submission to closure, giving a full self-service experience?",
    o: [
      "Installing client software",
      "Resolving a network outage",
      "Investigating the cause of recurring incidents",
      "Negotiating a new supplier contract",
    ],
    e: "Some service requests, such as installing client software or providing virtual servers, can be fulfilled entirely through automation.",
    w: [
      "A network outage is an incident.",
      "Investigating causes of incidents is problem management.",
      "Negotiating contracts is supplier management, not a pre-defined request.",
    ],
  },
  {
    t: "s",
    q: "Which statement about approvals for service requests is CORRECT?",
    o: [
      "Some service requests need authorization under financial, information security, or other policies, and others need none",
      "Every service request must be approved by the service desk manager",
      "Service requests never need approval",
      "Approval is only needed for service requests that involve emergency changes",
    ],
    e: "Some service requests need authorization according to financial, information security, or other policies. Others may not need any.",
    w: [
      "Approval requirements depend on policies, not a blanket rule.",
      "Some requests do need approval.",
      "Service requests do not usually involve emergency changes.",
    ],
  },
  {
    t: "s",
    q: "Which guideline for service request management relates to approvals?",
    o: [
      "Policies should define which service requests will be fulfilled with limited or even no additional approval",
      "Policies should require approval for every service request",
      "Policies should prevent users from initiating service requests",
      "Policies should require every service request to be handled as a normal change",
    ],
    e: "Policies should establish which requests can be fulfilled with limited or no additional approvals, so fulfilment can be streamlined.",
    w: [
      "Requiring approval for everything slows fulfilment unnecessarily.",
      "Service requests are user-initiated by definition.",
      "Request fulfilment usually uses standard changes, not normal changes.",
    ],
  },
  {
    t: "s",
    q: "What should happen to requests that are submitted as service requests but should actually be managed as incidents or changes?",
    o: [
      "Policies and workflows should be in place to document and redirect them",
      "They should be rejected and the user asked to resubmit",
      "They should be fulfilled as service requests anyway",
      "They should be escalated directly to the change authority",
    ],
    e: "Policies and workflows should be in place for documenting and redirecting requests that should actually be managed as incidents or changes.",
    w: [
      "Rejecting them creates a poor user experience. They should be redirected.",
      "Incidents and changes need their own handling.",
      "Not every redirected request is a change, so they are not all escalated to the change authority.",
    ],
  },
  {
    t: "s",
    q: "Which is an example of a service request for provision of a resource?",
    o: [
      "Providing a laptop to a new employee",
      "Restoring access to an email service that has failed",
      "Diagnosing the cause of slow performance",
      "Authorizing a change to a production system",
    ],
    e: "Requests for provision of a resource or service include providing a phone or laptop to a user, or a virtual server for a development team.",
    w: [
      "Restoring a failed service is incident management.",
      "Diagnosing causes is problem management.",
      "Authorizing changes is change enablement.",
    ],
  },
  {
    t: "s",
    q: "What does service request management depend on to maximize efficiency?",
    o: [
      "Well-designed processes and procedures, put into operation through tracking and automation tools",
      "Highly skilled technical specialists for every request",
      "Individual approval of each request by senior management",
      "Manual handling of each request to ensure a personal service",
    ],
    e: "Service request management depends on well-designed processes and procedures, operationalized through tracking and automation tools to maximize efficiency.",
    w: [
      "Many requests are simple and can be automated.",
      "Senior approval for every request would reduce efficiency.",
      "Automation is encouraged wherever possible.",
    ],
  },
  {
    t: "s",
    q: "When new service requests are added to the service catalogue, what should be done?",
    o: [
      "Existing workflow models should be reused wherever possible",
      "A completely new workflow should be designed for each request",
      "Each request should be approved by the management board",
      "Requests should be added without any defined workflow",
    ],
    e: "When new service requests are added to the service catalogue, existing workflow models should be leveraged wherever possible.",
    w: [
      "Reusing existing workflows is more efficient.",
      "Adding requests to the catalogue does not need board approval.",
      "Each request should have a known, proven workflow.",
    ],
  },
  {
    t: "s",
    q: "A user sends a compliment about the support team through the service portal. How should this be handled?",
    o: [
      "As a service request, since feedback, compliments, and complaints can be handled as service requests",
      "As an incident",
      "As a problem",
      "It should be ignored, as it needs no action",
    ],
    e: "Service requests can include feedback, compliments, and complaints, such as complaints about a new interface or compliments to a support team.",
    w: [
      "A compliment is not an interruption or reduction in service quality.",
      "A compliment is not a cause of incidents.",
      "Feedback should be captured and handled.",
    ],
  },
  {
    t: "m",
    q: "Service requests are [?] as a normal part of service delivery.",
    o: ["pre-defined and pre-agreed", "unplanned and urgent", "individually negotiated", "authorized by a change authority"],
    e: "Service requests are pre-defined and pre-agreed as a normal part of service delivery, so they can usually be formalized.",
    w: [
      "Unplanned interruptions are incidents.",
      "Service requests follow pre-agreed workflows, not individual negotiation.",
      "Change authorities authorize changes. Service requests follow their own policies.",
    ],
  },
  {
    t: "n",
    q: "Which would NOT normally be handled as a service request?",
    o: [
      "An unplanned reduction in the quality of a service",
      "A request for information",
      "A request for access to a resource",
      "A complaint about a new interface",
    ],
    e: "An unplanned reduction in the quality of a service is an incident. The others are typical service requests.",
    w: [
      "Requests for information are service requests.",
      "Requests for access are service requests.",
      "Feedback, compliments, and complaints can be service requests.",
    ],
  },
  {
    t: "s",
    q: "Which is an example of a request for a service delivery action?",
    o: [
      "Replacing a toner cartridge",
      "Reporting that an application has crashed",
      "Asking for a new feature to be developed",
      "Investigating recurring network failures",
    ],
    e: "Requests for a service delivery action include providing a report or replacing a toner cartridge.",
    w: [
      "An application crash is an incident.",
      "Developing a new feature is not a pre-defined request. It would go through change enablement.",
      "Investigating recurring failures is problem management.",
    ],
  },
]);
