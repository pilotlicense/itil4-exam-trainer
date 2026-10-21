/* LO7: Understand 7 ITIL practices — change enablement. */

ITIL.add("7.1", "Change enablement", [
  {
    t: "s",
    q: "What is a 'standard change'?",
    o: [
      "A low-risk, pre-authorized change that is well understood and fully documented, and can be implemented without additional authorization",
      "A change that must be implemented as soon as possible",
      "A change that needs to be scheduled, assessed, and authorized following a standard process",
      "A change requested through the service desk that always needs approval by the change authority",
    ],
    e: "Standard changes are low-risk, pre-authorized changes that are well understood and fully documented, and can be implemented without needing additional authorization.",
    w: [
      "This describes an emergency change.",
      "This describes a normal change, despite the word 'standard' in it.",
      "Standard changes are pre-authorized and need no additional authorization.",
    ],
  },
  {
    t: "s",
    q: "What is a 'normal change'?",
    o: [
      "A change that needs to be scheduled, assessed, and authorized following a standard process",
      "A low-risk, pre-authorized change that can be implemented without additional authorization",
      "A change that must be implemented as soon as possible",
      "A change that is implemented without any assessment",
    ],
    e: "Normal changes need to be scheduled, assessed, and authorized following a standard process. Change models determine who assesses and authorizes them.",
    w: [
      "This describes a standard change.",
      "This describes an emergency change.",
      "All changes, including normal changes, need appropriate assessment.",
    ],
  },
  {
    t: "s",
    q: "What is an 'emergency change'?",
    o: [
      "A change that must be implemented as soon as possible, for example to resolve an incident or implement a security patch",
      "A low-risk change that has been pre-authorized",
      "Any change that has failed and needs to be backed out",
      "A change that is implemented outside normal working hours",
    ],
    e: "Emergency changes must be implemented as soon as possible, for example to resolve an incident or implement a security patch.",
    w: [
      "This describes a standard change.",
      "A failed change is not, by definition, an emergency change.",
      "When a change is implemented does not make it an emergency change. Urgency does.",
    ],
  },
  {
    t: "s",
    q: "What is a 'change authority'?",
    o: [
      "A person or group responsible for authorizing a change",
      "The person who requested the change",
      "The team that implements the change",
      "The document that describes the change",
    ],
    e: "A change authority is the person or group who authorizes a change. It is important to assign the right change authority to each type of change.",
    w: [
      "The requester initiates the change but does not necessarily authorize it.",
      "Implementers carry out the change. The change authority authorizes it.",
      "A change request documents the change. The change authority is a person or group.",
    ],
  },
  {
    t: "s",
    q: "When should a full risk assessment and authorization be performed for a standard change?",
    o: [
      "When the procedure for the standard change is created or modified",
      "Every time the standard change is implemented",
      "Only if the standard change fails",
      "Never, because standard changes do not need risk assessment",
    ],
    e: "A full risk assessment and authorization is done when the standard change procedure is created or modified. It does not need repeating each time the change is implemented.",
    w: [
      "Repeating the assessment each time would defeat the purpose of pre-authorization.",
      "The assessment happens before the procedure is used, not after a failure.",
      "Standard changes are assessed when their procedure is created or modified.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about emergency changes are CORRECT?",
    s: [
      "It may be acceptable to defer some documentation until after the change has been implemented",
      "There may be a separate change authority for emergency changes",
      "Emergency changes are always pre-authorized",
      "Emergency changes do not need any testing or assessment",
    ],
    e: "As far as possible, emergency changes are tested, assessed, and authorized like normal changes, but some documentation may be deferred. A separate change authority, often a few senior managers, may exist for them.",
    w: [
      "Pre-authorization describes standard changes. Emergency changes are authorized through an expedited process.",
      "Emergency changes should be tested and assessed as far as possible, even if testing is reduced.",
    ],
  },
  {
    t: "s",
    q: "What is the change schedule used for?",
    o: [
      "To help plan changes, assist in communication, avoid conflicts, and assign resources",
      "To record the details of all configuration items",
      "To track improvement opportunities",
      "To authorize standard changes",
    ],
    e: "The change schedule helps plan changes, assist communication, avoid conflicts, and assign resources. After deployment, it also provides information for incident management, problem management, and improvement planning.",
    w: [
      "Configuration information is kept by service configuration management.",
      "Improvement opportunities are tracked in a continual improvement register.",
      "Standard changes are pre-authorized and do not need authorization through the schedule.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about the change schedule are CORRECT?",
    s: [
      "It helps to avoid conflicts and assign resources",
      "After changes are deployed, it can provide information needed for incident management and problem management",
      "It is only used for emergency changes",
      "It removes the need to communicate changes to stakeholders",
    ],
    e: "The change schedule supports planning, communication, conflict avoidance, and resource assignment, and later provides information for incident and problem management and improvement planning.",
    w: [
      "Emergency changes are not typically included in the change schedule.",
      "The schedule assists communication. It does not replace it.",
    ],
  },
  {
    t: "s",
    q: "Why is it important to assign the correct change authority to each type of change?",
    o: [
      "To ensure that change enablement is both efficient and effective",
      "To ensure that every change is approved by senior management",
      "To avoid the need for a change schedule",
      "To ensure that every change follows exactly the same process",
    ],
    e: "Assigning the correct change authority to each type of change keeps change enablement both efficient and effective.",
    w: [
      "Many changes can be authorized at lower levels, sometimes with automation or peer review.",
      "The change schedule is still needed for planning and communication.",
      "Different types of change need different handling.",
    ],
  },
  {
    t: "s",
    q: "Which statement about change authorization in high-velocity organizations is CORRECT?",
    o: [
      "It is common to decentralize change approval, making peer review a top predictor of high performance",
      "All changes should be approved by a central change advisory board",
      "Changes do not need to be approved at all",
      "Only emergency changes need approval",
    ],
    e: "In high-velocity organizations, change approval is often decentralized, and peer review is a top predictor of high performance.",
    w: [
      "Centralizing every approval slows delivery. High-velocity organizations decentralize.",
      "Changes are still authorized, typically through peer review.",
      "Normal changes also need authorization.",
    ],
  },
  {
    t: "s",
    q: "Which type of change is often initiated as a service request?",
    o: ["Standard change", "Normal change", "Emergency change", "Major change"],
    e: "Standard changes are often initiated as service requests, but may also be operational changes.",
    w: [
      "Normal changes are initiated by creating a change request.",
      "Emergency changes are triggered by an urgent need, such as an incident or security threat.",
      "'Major change' is not one of the three ITIL change types.",
    ],
  },
  {
    t: "s",
    q: "How is a normal change initiated?",
    o: [
      "By creating a change request",
      "By a phone call to the service desk",
      "Automatically, whenever an incident is logged",
      "By a request from the change authority",
    ],
    e: "A normal change is triggered by creating a change request. This can be manual, or automated in organizations with continuous integration and continuous deployment pipelines.",
    w: [
      "Calling the service desk may lead to a service request or incident, not directly a normal change.",
      "Incidents do not automatically trigger normal changes.",
      "The change authority authorizes changes. It does not usually initiate them.",
    ],
  },
  {
    t: "s",
    q: "Which statement about normal changes is CORRECT?",
    o: [
      "Change models based on the type of change determine the roles for assessment and authorization",
      "All normal changes must be authorized by the management board",
      "Normal changes do not need assessment",
      "Normal changes are always implemented immediately",
    ],
    e: "Change models determine the roles for assessing and authorizing normal changes. Low-risk normal changes may be authorized quickly, sometimes with automation. Very major ones may go to the management board.",
    w: [
      "Only very major normal changes might go as high as the management board.",
      "Normal changes are assessed and authorized following a standard process.",
      "Normal changes are scheduled. Emergency changes are the ones implemented as soon as possible.",
    ],
  },
  {
    t: "s",
    q: "Which balance must change enablement achieve?",
    o: [
      "Making beneficial changes that deliver additional value, while protecting customers and users from the adverse effects of changes",
      "Keeping the number of changes equal to the number of incidents",
      "Approving every change while avoiding any testing",
      "Reducing the number of changes while increasing the size of each one",
    ],
    e: "Change enablement must balance the need to make beneficial changes that deliver additional value with the need to protect customers and users from the adverse effects of changes.",
    w: [
      "There is no link between the number of changes and incidents in this balance.",
      "Testing and assessment help protect customers and users.",
      "ITIL does not recommend fewer, larger changes.",
    ],
  },
  {
    t: "s",
    q: "A security vulnerability is being actively exploited, and a patch must be applied immediately. Which type of change is this?",
    o: ["Emergency change", "Standard change", "Normal change", "Service request"],
    e: "Changes that must be implemented as soon as possible, such as an urgent security patch, are emergency changes.",
    w: [
      "Standard changes are low-risk, pre-authorized, and routine.",
      "Normal changes are scheduled, assessed, and authorized through the standard process, which is too slow here.",
      "A service request is a pre-defined, user-initiated request, not an urgent fix.",
    ],
  },
  {
    t: "s",
    q: "A team regularly increases the storage of virtual servers using a low-risk, well-understood, fully documented procedure that has been assessed and pre-authorized. Which type of change is this?",
    o: ["Standard change", "Normal change", "Emergency change", "Major change"],
    e: "Low-risk, pre-authorized, well-understood, and fully documented changes are standard changes. They can be implemented without additional authorization.",
    w: [
      "Normal changes need assessment and authorization each time.",
      "Emergency changes are urgent, not routine.",
      "'Major change' is not one of the three ITIL change types.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT one of the types of change described in ITIL?",
    o: ["Major change", "Standard change", "Normal change", "Emergency change"],
    e: "ITIL describes three types of change: standard, normal, and emergency.",
    w: [
      "Standard changes are low-risk and pre-authorized.",
      "Normal changes are scheduled, assessed, and authorized following a standard process.",
      "Emergency changes must be implemented as soon as possible.",
    ],
  },
  {
    t: "s",
    q: "What is typically included in the scope of change enablement?",
    o: [
      "IT infrastructure, applications, documentation, processes, supplier relationships, and anything else that might directly or indirectly affect a product or service",
      "Only changes to hardware and software",
      "Only changes requested by customers",
      "Only emergency changes",
    ],
    e: "Each organization defines the scope of change enablement. It typically covers infrastructure, applications, documentation, processes, supplier relationships, and anything else that could affect a product or service.",
    w: [
      "The scope is wider than hardware and software.",
      "Changes come from many sources, not only customers.",
      "Change enablement covers standard, normal, and emergency changes.",
    ],
  },
  {
    t: "m",
    q: "Emergency changes are not typically included in the change schedule, and the process for their assessment and authorization is [?].",
    o: ["expedited", "skipped", "delegated to the user", "the same as for standard changes"],
    e: "The assessment and authorization process for emergency changes is expedited so they can be implemented quickly.",
    w: [
      "Assessment and authorization still happen, just faster.",
      "Users do not authorize emergency changes. There may be a separate change authority.",
      "Standard changes are pre-authorized. Emergency changes are assessed and authorized through an expedited process.",
    ],
  },
]);
