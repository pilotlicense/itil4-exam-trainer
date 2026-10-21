/* LO7: Understand 7 ITIL practices — continual improvement, including the continual improvement model. */

ITIL.add("7.1", "Continual improvement", [
  {
    t: "s",
    q: "Which is the FIRST step of the continual improvement model?",
    o: ["What is the vision?", "Where are we now?", "Where do we want to be?", "How do we get there?"],
    e: "The model's steps are: What is the vision? Where are we now? Where do we want to be? How do we get there? Take action. Did we get there? How do we keep the momentum going?",
    w: [
      "'Where are we now?' is step 2: assessing the current state.",
      "'Where do we want to be?' is step 3: defining measurable targets.",
      "'How do we get there?' is step 4: planning the improvement.",
    ],
  },
  {
    t: "s",
    q: "Which step of the continual improvement model involves performing a baseline assessment of the current state?",
    o: ["Where are we now?", "What is the vision?", "Did we get there?", "Take action"],
    e: "'Where are we now?' establishes an objective, accurate baseline of the current state, covering all four dimensions.",
    w: [
      "'What is the vision?' aligns the initiative with the organization's vision and objectives.",
      "'Did we get there?' checks whether the targets have been achieved.",
      "'Take action' executes the improvement plan.",
    ],
  },
  {
    t: "s",
    q: "Which step of the continual improvement model involves defining measurable targets and performing a gap analysis?",
    o: ["Where do we want to be?", "Where are we now?", "How do we get there?", "Did we get there?"],
    e: "'Where do we want to be?' defines the target state with clear, measurable targets, using a gap analysis between the current state and the vision.",
    w: [
      "'Where are we now?' assesses the current state, the starting point for the gap analysis.",
      "'How do we get there?' plans the route to the target state.",
      "'Did we get there?' evaluates whether the targets were achieved.",
    ],
  },
  {
    t: "s",
    q: "Which step of the continual improvement model checks whether the desired outcomes have been achieved?",
    o: ["Did we get there?", "Take action", "How do we keep the momentum going?", "Where are we now?"],
    e: "'Did we get there?' evaluates whether the improvement achieved its objectives and whether the desired value has been realized.",
    w: [
      "'Take action' executes the plan. Evaluation comes next.",
      "'How do we keep the momentum going?' embeds the change and reinforces success.",
      "'Where are we now?' assesses the starting point before the improvement.",
    ],
  },
  {
    t: "s",
    q: "Which step of the continual improvement model is concerned with embedding the improvement and reinforcing its success?",
    o: ["How do we keep the momentum going?", "Did we get there?", "Take action", "What is the vision?"],
    e: "'How do we keep the momentum going?' markets the successes, reinforces new methods, and embeds the change so it is not lost.",
    w: [
      "'Did we get there?' evaluates the results. Embedding them is the final step.",
      "'Take action' executes the plan.",
      "'What is the vision?' is the first step, about alignment with organizational objectives.",
    ],
  },
  {
    t: "s",
    q: "What happens in the 'take action' step of the continual improvement model?",
    o: [
      "The improvement plan is executed, which may follow a waterfall-style or an Agile approach",
      "The current state is measured to establish a baseline",
      "The organization's vision and objectives are defined",
      "Progress is evaluated against the agreed targets",
    ],
    e: "In 'take action' the plan is acted on. This could be a traditional waterfall approach, or an Agile approach that experiments and iterates.",
    w: [
      "Establishing a baseline is 'Where are we now?'.",
      "Understanding the vision is 'What is the vision?'.",
      "Evaluating progress is 'Did we get there?'.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about the continual improvement model are CORRECT?",
    s: [
      "It can be applied to the service value system as a whole, as well as to all of its components",
      "It supports an iterative approach, dividing work into manageable pieces with separate goals",
      "It must be followed in a strict linear sequence without iteration",
      "It should only be used for large, organization-wide improvement initiatives",
    ],
    e: "The model applies to the whole SVS and to all products, services, components, and relationships. It supports an iterative approach that divides work into manageable pieces.",
    w: [
      "The model is a high-level guide that supports iteration, not a rigid sequence.",
      "It can be used for improvements of any size.",
    ],
  },
  {
    t: "s",
    q: "What is a continual improvement register (CIR) used for?",
    o: [
      "To track and manage improvement ideas from identification through to final action",
      "To record all changes that have been authorized",
      "To record details of all configuration items",
      "To track incidents until they are resolved",
    ],
    e: "A CIR is used to track and manage improvement ideas from identification through to final action.",
    w: [
      "Authorized changes are tracked through change enablement, for example in the change schedule.",
      "Configuration information is maintained by service configuration management.",
      "Incidents are tracked in incident records.",
    ],
  },
  {
    t: "l",
    q: "Which TWO statements about continual improvement registers are CORRECT?",
    s: [
      "An organization can have more than one continual improvement register",
      "Improvement ideas should be prioritized and reprioritized as new ideas are documented",
      "Only one continual improvement register is allowed in an organization",
      "Ideas should be removed from the register as soon as they have been prioritized",
    ],
    e: "CIRs can be kept at individual, team, departmental, business unit, and organizational levels. Ideas are prioritized and reprioritized as new ones are added.",
    w: [
      "Multiple CIRs can exist at different levels of the organization.",
      "Ideas stay in the register and are tracked through to final action.",
    ],
  },
  {
    t: "s",
    q: "Who is responsible for contributing to continual improvement?",
    o: [
      "Everyone in the organization, although a dedicated team may lead and coordinate the effort",
      "Only a dedicated continual improvement team",
      "Only senior management",
      "Only the service desk",
    ],
    e: "Continual improvement is everyone's responsibility. A small dedicated team can lead and coordinate the effort and act as a champion for it.",
    w: [
      "A dedicated team may lead, but everyone should contribute.",
      "Leaders are responsible for embedding continual improvement, but everyone contributes.",
      "Every team and role can contribute, not just the service desk.",
    ],
  },
  {
    t: "l",
    q: "Which TWO are key activities of the 'continual improvement' practice?",
    s: [
      "Securing time and budget for continual improvement",
      "Making business cases for improvement action",
      "Authorizing changes and managing the change schedule",
      "Restoring normal service operation as quickly as possible",
    ],
    e: "Key activities include encouraging improvement across the organization, securing time and budget, identifying and logging opportunities, assessing and prioritizing them, making business cases, planning and implementing improvements, measuring results, and coordinating improvement activities.",
    w: ["This is change enablement.", "This is incident management."],
  },
  {
    t: "s",
    q: "Which statement about improvement methods is CORRECT, according to the 'continual improvement' practice?",
    o: [
      "It is a good idea to select a few key methods that suit the types of improvement the organization typically handles",
      "The organization should use as many different methods as possible",
      "One single method must be used for every type of improvement",
      "A new method should be chosen for each individual improvement initiative",
    ],
    e: "ITIL recommends selecting a few key methods appropriate to the types of improvement the organization typically handles, and developing skill in those methods.",
    w: [
      "Using too many methods causes confusion and makes skills harder to build.",
      "Different types of improvement may need different methods.",
      "Choosing a new method every time prevents the organization from building expertise.",
    ],
  },
  {
    t: "s",
    q: "How should third-party suppliers be involved in continual improvement?",
    o: [
      "Contracts should include details of how suppliers' contributions will be measured, reported, and improved",
      "Suppliers should be excluded from improvement initiatives",
      "Suppliers are only responsible for improving their own internal processes",
      "Supplier improvement should only be addressed when an incident occurs",
    ],
    e: "When suppliers are involved in services, they should be part of the improvement effort. Contracts should cover how their contributions will be measured, reported, and improved.",
    w: [
      "Suppliers contribute to services and should be part of improvement.",
      "Improvement should cover the supplier's contribution to the organization's services.",
      "Improvement is ongoing, not triggered only by incidents.",
    ],
  },
  {
    t: "l",
    q: "Which TWO techniques can be used to support continual improvement?",
    s: ["SWOT analysis", "Balanced scorecard reviews", "Change scheduling", "Swarming"],
    e: "Techniques that support continual improvement include SWOT analysis, balanced scorecard reviews, maturity assessments, and internal and external assessments and audits.",
    w: [
      "Change scheduling belongs to change enablement.",
      "Swarming is a technique for managing incidents.",
    ],
  },
  {
    t: "s",
    q: "An improvement team has defined the target state for an initiative and identified the gap between the current and target states. Which step of the continual improvement model should the team perform NEXT?",
    o: ["How do we get there?", "Take action", "Did we get there?", "Where are we now?"],
    e: "After defining the target state ('Where do we want to be?'), the next step is 'How do we get there?': planning how to close the gap.",
    w: [
      "Action is taken after the plan has been created.",
      "Evaluation happens after action has been taken.",
      "The current state has already been assessed.",
    ],
  },
  {
    t: "m",
    q: "In the continual improvement model, the step [?] makes sure the improvement initiative is aligned with the organization's vision and objectives.",
    o: ["'What is the vision?'", "'Where do we want to be?'", "'How do we get there?'", "'Where are we now?'"],
    e: "Step 1, 'What is the vision?', aligns the initiative with the organization's vision, mission, goals, and objectives.",
    w: [
      "'Where do we want to be?' defines measurable targets for the initiative.",
      "'How do we get there?' plans the route.",
      "'Where are we now?' assesses the current state.",
    ],
  },
  {
    t: "s",
    q: "What should happen if the 'Did we get there?' step shows that the desired results have not been achieved?",
    o: [
      "Further actions should be chosen and taken, typically in a new iteration",
      "The improvement initiative should be abandoned",
      "The targets should be lowered until they are met",
      "The team should move directly to keeping the momentum going",
    ],
    e: "If the desired results have not been achieved, additional actions are chosen and undertaken in a new iteration.",
    w: [
      "The model supports iterating again, not abandoning the initiative.",
      "Lowering targets would hide the gap rather than close it.",
      "Momentum is built once results have been achieved.",
    ],
  },
  {
    t: "n",
    q: "Which is NOT a key activity of the 'continual improvement' practice?",
    o: [
      "Authorizing changes before they are implemented",
      "Encouraging continual improvement across the organization",
      "Identifying and logging improvement opportunities",
      "Measuring and evaluating improvement results",
    ],
    e: "Authorizing changes belongs to change enablement. The other options are key activities of continual improvement.",
    w: [
      "Encouraging improvement across the organization is a key activity.",
      "Identifying and logging opportunities is a key activity.",
      "Measuring and evaluating results is a key activity.",
    ],
  },
  {
    t: "s",
    q: "Which statement about the role of leaders in continual improvement is CORRECT?",
    o: [
      "Leaders should take responsibility for embedding continual improvement into the way people think and work",
      "Leaders should leave continual improvement entirely to a dedicated team",
      "Leaders should only be involved in improvements that need significant investment",
      "Leaders should approve every improvement idea before it is recorded",
    ],
    e: "Everyone contributes to continual improvement, but the organization's leaders should take responsibility for embedding it into the way people think and work.",
    w: [
      "A dedicated team can lead the effort, but leaders remain responsible for embedding it.",
      "Embedding continual improvement covers all improvement, not just large investments.",
      "Ideas should be logged freely in a CIR. Requiring approval first would discourage them.",
    ],
  },
]);
