/* LO7: Understand 7 ITIL practices — problem management. */

ITIL.add("7.1", "Problem management", [
  {
    t: "s",
    q: "What are the three phases of problem management?",
    o: [
      "Problem identification, problem control, and error control",
      "Incident detection, diagnosis, and resolution",
      "Problem logging, problem resolution, and problem closure",
      "Error identification, error analysis, and change implementation",
    ],
    e: "Problem management has three phases: problem identification, problem control, and error control.",
    w: [
      "These are not the phases of problem management.",
      "These are not the phases ITIL defines.",
      "Implementing changes is outside the scope of problem management.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are problem identification activities?",
    s: [
      "Performing trend analysis of incident records",
      "Detecting duplicate and recurring issues",
      "Documenting workarounds and known errors",
      "Re-assessing the status of known errors that have not been resolved",
    ],
    e: "Problem identification includes trend analysis of incident records, detecting duplicate and recurring issues, spotting the risk of recurrence during major incidents, and analysing information from suppliers, partners, developers, test teams, and project teams.",
    w: [
      "Documenting workarounds and known errors is problem control.",
      "Re-assessing unresolved known errors is error control.",
    ],
  },
  {
    t: "s",
    q: "Which phase of problem management includes problem analysis and documenting workarounds and known errors?",
    o: ["Problem control", "Problem identification", "Error control", "Incident control"],
    e: "Problem control includes problem analysis and documenting workarounds and known errors.",
    w: [
      "Problem identification finds problems, for example through trend analysis.",
      "Error control manages known errors and potential permanent solutions.",
      "'Incident control' is not a phase of problem management.",
    ],
  },
  {
    t: "s",
    q: "Which phase of problem management manages known errors, which are problems where initial analysis has been completed?",
    o: ["Error control", "Problem control", "Problem identification", "Incident management"],
    e: "Error control manages known errors: problems where initial analysis is complete, usually meaning the faulty components have been identified.",
    w: [
      "Problem control analyses problems and documents workarounds and known errors.",
      "Problem identification finds problems.",
      "Incident management is a separate practice, not a phase of problem management.",
    ],
  },
  {
    t: "s",
    q: "How are problems prioritized for analysis?",
    o: [
      "Based on the risk that they pose",
      "In the order in which they were identified",
      "Based on the number of users who reported them",
      "Based on how easy they are to resolve",
    ],
    e: "Problems are prioritized for analysis based on the risk they pose, and are managed as risks based on their potential impact and probability.",
    w: [
      "Order of identification does not reflect risk.",
      "The number of reports is only one indicator. Priority is based on risk.",
      "Ease of resolution does not reflect risk.",
    ],
  },
  {
    t: "s",
    q: "Which statement about workarounds is CORRECT?",
    o: [
      "Every documented workaround should include a clear definition of the symptoms to which it applies",
      "Workarounds should only be documented after problem analysis is complete",
      "A workaround can never become the permanent way of dealing with a problem",
      "Workarounds must be authorized as emergency changes",
    ],
    e: "Every documented workaround should clearly define the symptoms it applies to. Workarounds can be documented at any stage and can become permanent.",
    w: [
      "Workarounds can be documented at any stage, without waiting for analysis to finish.",
      "A workaround can become permanent if resolving the problem is not viable or cost-effective.",
      "Workarounds are documented in problem records. They are not emergency changes.",
    ],
  },
  {
    t: "s",
    q: "What is a 'workaround'?",
    o: [
      "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available",
      "A permanent solution to a problem",
      "A change that must be implemented as soon as possible",
      "A problem that has been analysed but not resolved",
    ],
    e: "A workaround is a solution that reduces or eliminates the impact of an incident or problem when a full resolution is not yet available. Some workarounds also reduce the likelihood of incidents.",
    w: [
      "A workaround is used when a full resolution is not yet available.",
      "This describes an emergency change.",
      "This is the definition of a known error.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about problems and incidents are CORRECT?",
    s: [
      "Problems are the causes of incidents",
      "Incidents must be resolved so that normal business activity can take place",
      "Problems and incidents are managed in the same way",
      "Every incident must have an associated problem record",
    ],
    e: "Incidents affect users and business processes and must be resolved so that normal activity can continue. Problems are the causes of incidents and need investigation and analysis.",
    w: [
      "Problems and incidents are related, but they are managed in different ways.",
      "Not every incident needs a problem record.",
    ],
  },
  {
    t: "s",
    q: "When should a potential permanent solution identified during error control lead to a change request?",
    o: [
      "Only if it can be justified in terms of cost, risks, and benefits",
      "Always, as soon as it is identified",
      "Only if the problem has caused a major incident",
      "Only after the workaround has stopped working",
    ],
    e: "Error control identifies potential permanent solutions, which may lead to a change request, but only if this can be justified in terms of cost, risks, and benefits.",
    w: [
      "A permanent solution is only worth implementing if it is justified.",
      "Justification depends on cost, risks, and benefits, not only on major incidents.",
      "A change can be justified while the workaround still works.",
    ],
  },
  {
    t: "s",
    q: "Which statement about error control is CORRECT?",
    o: [
      "It regularly re-assesses the status of known errors that have not been resolved",
      "It implements all changes needed to resolve problems",
      "It only begins after a problem has been resolved",
      "It identifies problems by analysing incident trends",
    ],
    e: "Error control regularly re-assesses unresolved known errors, considering their impact on customers and service availability and the cost and effort of permanent resolution.",
    w: [
      "Implementing changes is outside the scope of problem management.",
      "Error control manages known errors, which are not yet resolved.",
      "Trend analysis of incidents is problem identification.",
    ],
  },
  {
    t: "s",
    q: "What is the relationship between problem management and change enablement?",
    o: [
      "Problem management initiates resolutions through change enablement, but approving and implementing changes is outside its scope",
      "Problem management approves and implements all changes needed to resolve problems",
      "Change enablement identifies the causes of incidents",
      "Problem management and change enablement do not interact",
    ],
    e: "Implementing problem resolutions is often outside problem management's scope. It initiates resolution through change enablement and takes part in the post-implementation review, but does not approve or implement changes.",
    w: [
      "Approving and implementing changes is outside problem management's scope.",
      "Identifying causes of incidents is problem management.",
      "Problem management initiates resolutions through change enablement.",
    ],
  },
  {
    t: "s",
    q: "Problem management activities can be organized as a specific case of which practice?",
    o: ["Risk management", "Service level management", "Relationship management", "Deployment management"],
    e: "Problem management activities can be organized as a specific case of risk management: they aim to identify, assess, and control risks in any of the four dimensions.",
    w: [
      "Service level management sets business-based service targets.",
      "Relationship management nurtures links with stakeholders.",
      "Deployment management moves components to live environments.",
    ],
  },
  {
    t: "s",
    q: "Which statement about the skills needed for problem management is CORRECT?",
    o: [
      "It needs an understanding of complex systems and the ability to think about how different failures might have occurred",
      "It can be performed effectively by following detailed procedures, without analytical skills",
      "It only needs technical knowledge of hardware",
      "Problem management skills are only needed by the service desk",
    ],
    e: "Problem management needs an understanding of complex systems and creative thinking about how failures might have occurred. Building these analytical and creative skills takes mentoring, time, and training.",
    w: [
      "Problem management relies on analytical and creative skills, not just procedures.",
      "Problems can occur in any of the four dimensions, not just hardware.",
      "Problem management involves technical teams, suppliers, and others.",
    ],
  },
  {
    t: "s",
    q: "Which statement about analysing problems is CORRECT?",
    o: [
      "Problem analysis should consider contributing causes in all four dimensions of service management",
      "Problem analysis should only consider technology",
      "Problems should only be analysed after a workaround has been found",
      "Problem analysis should look only for a single root cause",
    ],
    e: "Problems can have many interrelated causes, so problem analysis should consider all four dimensions of service management.",
    w: [
      "Causes can lie in people, processes, suppliers, and technology.",
      "Analysis does not have to wait for a workaround.",
      "Incidents and problems can have many interrelated causes.",
    ],
  },
  {
    t: "s",
    q: "A workaround for a problem is effective, and resolving the underlying problem is not cost-effective. What should happen?",
    o: [
      "The problem remains in known error status, and the documented workaround is applied if related incidents occur",
      "The problem record should be closed and deleted",
      "An emergency change should be raised to resolve the problem",
      "The workaround should be discarded and the problem analysed again",
    ],
    e: "An effective workaround can become the permanent way of dealing with a problem when resolution is not viable or cost-effective. The problem stays in known error status and the workaround is applied when needed.",
    w: [
      "The problem stays open as a known error so the workaround can be applied.",
      "Resolution is not cost-effective, so no change is justified, and certainly not an emergency one.",
      "An effective workaround should be kept and used.",
    ],
  },
  {
    t: "s",
    q: "Which is a source of information for problem identification?",
    o: [
      "Information received from suppliers, partners, internal software developers, test teams, and project teams",
      "Only incidents reported directly by users",
      "Only the results of customer satisfaction surveys",
      "Only alerts from monitoring tools",
    ],
    e: "Problem identification uses many sources, including incident trends, duplicate and recurring issues, major incidents, and information from suppliers, partners, developers, test teams, and project teams.",
    w: [
      "User-reported incidents are one source among many.",
      "Satisfaction surveys are not a primary source for problem identification.",
      "Monitoring is one possible source, but there are many others.",
    ],
  },
  {
    t: "s",
    q: "How can problem management contribute to continual improvement?",
    o: [
      "Problem solutions can be treated as improvement opportunities and recorded in a continual improvement register",
      "Problem management approves every improvement initiative",
      "Problem management replaces the continual improvement practice",
      "Problem management only improves technology",
    ],
    e: "Problem management can identify improvement opportunities in all four dimensions. Solutions can be treated as improvement opportunities, included in a CIR, and managed with continual improvement techniques.",
    w: [
      "Problem management does not approve improvement initiatives.",
      "The two practices work together. One does not replace the other.",
      "Improvement opportunities can be found in all four dimensions.",
    ],
  },
  {
    t: "s",
    q: "If a workaround is documented early in problem control, what should happen once problem analysis is complete?",
    o: [
      "The workaround should be reviewed and improved",
      "The workaround should be deleted",
      "The workaround should be converted into a standard change",
      "Nothing, because workarounds never change",
    ],
    e: "A workaround documented early in problem control should be reviewed and improved after problem analysis is complete.",
    w: [
      "The workaround may still be needed until the problem is resolved.",
      "Workarounds are documented in problem records. They are not standard changes.",
      "Workarounds should be reviewed and improved, including each time they are used.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT a problem identification activity?",
    o: [
      "Authorizing changes to resolve known errors",
      "Performing trend analysis of incident records",
      "Detecting duplicate and recurring issues",
      "Analysing information received from suppliers and partners",
    ],
    e: "Authorizing changes is done by a change authority in change enablement. The other options are problem identification activities.",
    w: [
      "Trend analysis of incident records is a problem identification activity.",
      "Detecting duplicate and recurring issues is a problem identification activity.",
      "Analysing information from suppliers and partners is a problem identification activity.",
    ],
  },
  {
    t: "s",
    q: "How does problem management support incident management?",
    o: [
      "By documenting workarounds and known errors that help resolve future incidents",
      "By restoring normal service operation as quickly as possible",
      "By logging and prioritizing incidents",
      "By acting as the single point of contact for users",
    ],
    e: "Problem management documents workarounds and known errors, which incident management uses to resolve incidents faster and reduce their impact.",
    w: [
      "Restoring normal service is incident management.",
      "Logging and prioritizing incidents is incident management.",
      "The service desk is the single point of contact.",
    ],
  },
  {
    t: "m",
    q: "Every service has errors, flaws, or vulnerabilities that may cause incidents. In ITIL, these errors are called [?].",
    o: ["problems", "events", "changes", "service requests"],
    e: "Errors that remain unidentified or unresolved and may cause incidents are called problems, and they are addressed by problem management.",
    w: [
      "An event is a significant change of state.",
      "A change is an addition, modification, or removal that could affect services.",
      "A service request is a pre-defined, user-initiated request.",
    ],
  },
]);
