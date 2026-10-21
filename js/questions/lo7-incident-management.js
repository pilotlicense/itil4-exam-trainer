/* LO7: Understand 7 ITIL practices — incident management. */

ITIL.add("7.1", "Incident management", [
  {
    t: "s",
    q: "How should incidents be prioritized?",
    o: [
      "Based on an agreed classification, so that incidents with the highest business impact are resolved first",
      "In the order in which they are reported",
      "Based on the seniority of the user who reports the incident",
      "Based on how quickly each incident can be resolved",
    ],
    e: "Incidents are prioritized based on an agreed classification, so that incidents with the highest business impact are resolved first.",
    w: [
      "First come, first served ignores business impact.",
      "Seniority is not the basis for priority. Business impact is.",
      "Ease of resolution does not reflect business impact.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about incident management are CORRECT?",
    s: [
      "Every incident should be logged and managed so that it is resolved in a time that meets the expectations of the customer and user",
      "Target resolution times should be agreed, documented, and communicated",
      "Incidents should only be logged if they cannot be resolved immediately",
      "All incidents should be managed with the same process, regardless of impact",
    ],
    e: "Every incident should be logged and managed to meet customer and user expectations. Target resolution times are agreed, documented, and communicated so expectations are realistic.",
    w: [
      "Every incident should be logged, including those resolved quickly.",
      "Incident management should be designed to handle different types of incident appropriately, and major incidents often have a separate process.",
    ],
  },
  {
    t: "s",
    q: "Which statement about managing incidents with different levels of impact is CORRECT?",
    o: [
      "Low-impact incidents must be managed efficiently so that they do not consume too many resources",
      "All incidents should receive the same level of resources",
      "Major incidents should be managed with the same process as low-impact incidents",
      "Information security incidents should always be handled by the service desk alone",
    ],
    e: "Low-impact incidents must be managed efficiently so they don't consume too many resources. Higher-impact incidents may need more resources and more complex management.",
    w: [
      "Resources should match the impact of the incident.",
      "There are usually separate processes for major incidents.",
      "Information security incidents usually have their own process.",
    ],
  },
  {
    t: "s",
    q: "Which types of incident usually have separate management processes?",
    o: [
      "Major incidents and information security incidents",
      "Incidents reported by phone and incidents reported by email",
      "Hardware incidents and software incidents",
      "Incidents raised by customers and incidents raised by users",
    ],
    e: "Organizations usually have separate processes for managing major incidents and for managing information security incidents.",
    w: [
      "The reporting channel does not determine a separate process.",
      "Hardware and software incidents are usually handled by the same process, with different categories.",
      "Who raises an incident does not determine a separate process.",
    ],
  },
  {
    t: "s",
    q: "Ideally, what should an incident management tool provide links to?",
    o: [
      "Related configuration items, changes, problems, known errors, and other knowledge",
      "Only the contact details of the user who reported the incident",
      "Only other incidents logged by the same user",
      "The continual improvement register",
    ],
    e: "Ideally, the incident tool links to related CIs, changes, problems, known errors, and other knowledge, to enable quick and efficient diagnosis and recovery.",
    w: [
      "User details alone do not support diagnosis.",
      "Links to related CIs, changes, problems, and known errors are what help diagnosis.",
      "The CIR tracks improvement ideas, not incident diagnosis.",
    ],
  },
  {
    t: "s",
    q: "What information should good-quality updates to an incident record include?",
    o: [
      "Symptoms, business impact, configuration items affected, actions completed, and actions planned",
      "Only the final resolution of the incident",
      "The names of the people who caused the incident",
      "Only the time at which the incident was logged",
    ],
    e: "People working on an incident should provide timely, good-quality updates covering symptoms, business impact, CIs affected, actions completed, and actions planned, each with a timestamp and the people involved.",
    w: [
      "Updates should be provided throughout, not just at resolution.",
      "Incident records are for managing the incident, not for blame.",
      "Much more information is needed to manage the incident.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about who resolves incidents are CORRECT?",
    s: [
      "Some incidents will be resolved by users themselves, using self-help",
      "Incidents can be escalated to suppliers or partners who support their products and services",
      "All incidents must be resolved by the service desk",
      "Incidents should never be escalated outside the service provider organization",
    ],
    e: "Incidents may be resolved by users through self-help, by the service desk, by support teams, by suppliers or partners, or by temporary teams for complex and major incidents.",
    w: [
      "Many incidents are resolved by support teams, suppliers, or users themselves.",
      "Incidents can be escalated to suppliers and partners.",
    ],
  },
  {
    t: "s",
    q: "How are more complex incidents usually routed to the right support team?",
    o: [
      "Based on the incident category, which should help to identify the correct team",
      "Randomly, to balance the workload across teams",
      "Based on the name of the user who reported the incident",
      "To whichever team has the most available staff",
    ],
    e: "Complex incidents are usually escalated to a support team. Routing is typically based on the incident category, which should help identify the correct team.",
    w: [
      "Random routing would send incidents to teams that cannot resolve them.",
      "The user's identity does not identify the right team.",
      "Availability alone does not mean the team has the right skills.",
    ],
  },
  {
    t: "s",
    q: "How are the most complex incidents, and all major incidents, often resolved?",
    o: [
      "By a temporary team working together to identify the resolution",
      "By the service desk alone",
      "By users, through self-help",
      "By problem management, after the root cause has been found",
    ],
    e: "The most complex incidents, and all major incidents, often need a temporary team that can include the service provider, suppliers, users, and other stakeholders.",
    w: [
      "Complex and major incidents need more than the service desk.",
      "Self-help suits simple incidents, not major ones.",
      "Incident management restores service. Root cause analysis is problem management and is not needed to resolve the incident.",
    ],
  },
  {
    t: "s",
    q: "What should be captured when users resolve their own incidents using self-help?",
    o: [
      "The use of specific self-help records, for measurement and improvement",
      "Nothing, because the service desk was not involved",
      "A problem record for each incident",
      "A change request for each incident",
    ],
    e: "When users resolve incidents through self-help, the use of specific self-help records should be captured for measurement and improvement activities.",
    w: [
      "Recording self-help use is valuable for measurement and improvement.",
      "Not every incident needs a problem record.",
      "Self-help resolution does not normally require a change.",
    ],
  },
  {
    t: "s",
    q: "Which technique involves many different stakeholders working together on an incident at first, until it becomes clear which of them is best placed to continue?",
    o: ["Swarming", "Escalation", "Triage", "Workaround"],
    e: "Swarming is a technique for managing incidents: many stakeholders work together initially, until it is clear who is best placed to continue and who can move on.",
    w: [
      "Escalation passes an incident to another team rather than working on it together.",
      "Triage is sorting by priority, not collaborative working.",
      "A workaround reduces the impact of an incident or problem. It is not a way of working.",
    ],
  },
  {
    t: "s",
    q: "Why might incident management need good collaboration tools?",
    o: [
      "So that the people working on an incident can collaborate effectively",
      "To replace the need for incident records",
      "To avoid having to escalate incidents",
      "To allow users to authorize changes",
    ],
    e: "Effective incident management often needs a high level of collaboration within and between teams, so good collaboration tools are important.",
    w: [
      "Incident records are still needed.",
      "Collaboration tools support escalation. They don't remove the need for it.",
      "Change authorization is part of change enablement.",
    ],
  },
  {
    t: "s",
    q: "Which statement about the impact of incidents is CORRECT?",
    o: [
      "Incidents can have an enormous impact on customer and user satisfaction, and on how they perceive the service provider",
      "Incidents only affect the internal operations of the service provider",
      "Incidents have no effect on customer perception if they are resolved within target",
      "Incidents only matter if they affect more than one user",
    ],
    e: "Incident management can have an enormous impact on customer and user satisfaction and on how customers and users perceive the service provider.",
    w: [
      "Incidents directly affect customers and users.",
      "How incidents are handled shapes perception even when targets are met.",
      "Incidents affecting a single user still matter and should be managed.",
    ],
  },
  {
    t: "s",
    q: "Which statement about modern incident management tools is CORRECT?",
    o: [
      "They can automatically match incidents to other incidents, problems, or known errors",
      "They remove the need for people to update incident records",
      "They can only be used by the service desk",
      "They automatically resolve every incident",
    ],
    e: "Modern ITSM tools can automatically match incidents to other incidents, problems, or known errors, and can analyse incident data to make recommendations.",
    w: [
      "Good-quality updates from people are still needed.",
      "Support teams, suppliers, and others also use these tools.",
      "Tools help diagnosis, but they do not resolve every incident.",
    ],
  },
  {
    t: "s",
    q: "In some extreme cases, what may be invoked to resolve an incident?",
    o: ["Disaster recovery plans", "Standard changes", "The continual improvement model", "Service level agreements"],
    e: "In some extreme cases, disaster recovery plans may be invoked to resolve an incident.",
    w: [
      "Standard changes are routine, pre-authorized changes, not an extreme measure.",
      "The continual improvement model guides improvements, not incident resolution.",
      "SLAs define service levels. They are not invoked to resolve incidents.",
    ],
  },
  {
    t: "s",
    q: "A user reports that the company's online ordering system has slowed down significantly but is still working. How should this be handled?",
    o: [
      "As an incident, because it is a reduction in the quality of a service",
      "As a service request, because the service is still available",
      "As a problem, because the cause is not yet known",
      "As a change, because the service needs to be modified",
    ],
    e: "An incident is an unplanned interruption to a service or a reduction in its quality. Significant degradation is an incident even if the service is still available.",
    w: [
      "Service requests are pre-defined, normal parts of service delivery, not degradations.",
      "A problem may be logged later to find the cause, but the user's report is an incident.",
      "A change may be needed later, but the immediate report is an incident.",
    ],
  },
  {
    t: "m",
    q: "Information about incidents should be stored in [?] in a suitable tool.",
    o: ["incident records", "the change schedule", "the continual improvement register", "service level agreements"],
    e: "Information about incidents should be stored in incident records in a suitable tool, ideally linked to related CIs, changes, problems, and known errors.",
    w: [
      "The change schedule is for planning and communicating changes.",
      "The CIR is for improvement ideas.",
      "SLAs define service levels, not individual incidents.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT a recommended approach in incident management?",
    o: [
      "Resolving incidents strictly in the order they are received, regardless of impact",
      "Agreeing, documenting, and communicating target resolution times",
      "Logging and managing every incident",
      "Providing good-quality, timely updates to incident records",
    ],
    e: "Incidents should be prioritized by an agreed classification based on business impact, not handled first come, first served.",
    w: [
      "Agreeing target resolution times is recommended.",
      "Logging and managing every incident is recommended.",
      "Timely, good-quality updates are recommended.",
    ],
  },
  {
    t: "s",
    q: "Why should target resolution times for incidents be agreed, documented, and communicated?",
    o: [
      "To ensure that expectations are realistic",
      "To ensure that every incident is resolved within one day",
      "So that users can set the priority of their own incidents",
      "To remove the need for prioritization",
    ],
    e: "Target resolution times are agreed, documented, and communicated so that expectations are realistic.",
    w: [
      "Targets vary by priority. There is no universal one-day rule.",
      "Priority is based on an agreed classification, not set by users.",
      "Prioritization is still needed to resolve the highest-impact incidents first.",
    ],
  },
]);
