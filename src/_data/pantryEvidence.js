export default {
  realPantry: {
    id: "pantry-figure-01",
    layout: "app",
    primary: {
      label: "Running app / Inventory",
      src: "/assets/images/evidence/pantry/pantry-home-dark.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-home-dark.png",
      fullSizeLabel: "Open the full-resolution Pantry inventory screenshot",
      alt: "Pantry inventory running in dark mode with category cards and English demo items including Light Bulbs, Hand Soap, Olive Oil, and Toilet Paper.",
      width: 414,
      height: 900
    },
    secondary: {
      label: "Running app / Item detail",
      src: "/assets/images/evidence/pantry/pantry-item-detail.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-item-detail.png",
      fullSizeLabel: "Open the full-resolution Pantry Item Detail screenshot",
      alt: "Pantry Item Detail for Hand Soap showing its bathroom category, sink location, one-piece quantity, In Use state, and lifecycle actions.",
      width: 414,
      height: 900
    },
    caption: "Pantry running on iPhone with an isolated English demo inventory. The overview and Item Detail views show the real information hierarchy, item states, quantities, locations, and actions.",
    credit: "Figure 01 / Authentic app"
  },
  workflow: {
    id: "pantry-figure-02",
    label: "Conceptual workflow / Not a system architecture",
    steps: [
      {
        index: "01",
        title: "Designer",
        detail: "Decisions, references, product judgment, physical testing"
      },
      {
        index: "02",
        title: "ChatGPT Helper",
        detail: "Brainstorming, planning, prompt preparation, context"
      },
      {
        index: "03",
        title: "Codex",
        detail: "Implementation, code inspection, testing, reporting"
      },
      {
        index: "04",
        title: "Running iPhone app",
        detail: "A real product to hold, use, and assess"
      },
      {
        index: "05",
        title: "Feedback",
        detail: "Describe what felt wrong, decide what changes, repeat"
      }
    ],
    caption: "The collaboration model used for Pantry. Each loop returned to product judgment and real use rather than treating implementation as the final answer.",
    credit: "Figure 02 / Conceptual workflow"
  },
  cardTranslation: {
    id: "pantry-figure-03",
    layout: "reference",
    left: {
      label: "Approved reference / F4 + G3",
      src: "/assets/images/evidence/pantry/pantry-card-reference.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-card-reference.png",
      fullSizeLabel: "Open the full-resolution F4 and G3 Pantry item-card reference",
      alt: "Approved Pantry F4 item-card reference sheet explaining clear-glass material, scan-first hierarchy, quantity, actions, status, and future metadata.",
      width: 1280,
      height: 853
    },
    right: {
      label: "Running implementation / SwiftUI",
      src: "/assets/images/evidence/pantry/pantry-card-implementation.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-card-implementation.png",
      fullSizeLabel: "Open the full-resolution crop of implemented Pantry item cards",
      alt: "Authentic Pantry app crop showing implemented item cards for Light Bulbs, Hand Soap, Olive Oil, and Toilet Paper with state labels, quantity, and next-stock information.",
      width: 619,
      height: 900
    },
    caption: "The approved F4/G3 reference beside the running SwiftUI implementation. The reference established direction; the final cards evolved to communicate real state, quantity, storage, and actions.",
    credit: "Figure 03 / Reference → implementation"
  },
  guidedEntry: {
    id: "pantry-figure-04",
    layout: "guided",
    left: {
      label: "Step 03 / Quantity",
      src: "/assets/images/evidence/pantry/pantry-guided-quantity.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-guided-quantity.png",
      fullSizeLabel: "Open the full-resolution Pantry quantity-step screenshot",
      alt: "Pantry Add Item quantity step asking How many do you have, with a count control, optional size, progress indicator, and Next button.",
      width: 414,
      height: 900
    },
    right: {
      label: "Saved / Pantry confirmation",
      src: "/assets/images/evidence/pantry/pantry-added-confirmation.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-added-confirmation.png",
      fullSizeLabel: "Open the full-resolution Pantry Added confirmation screenshot",
      alt: "Blurred Pantry Add Item screen with a centred checkmark and the word Added.",
      width: 414,
      height: 900
    },
    caption: "Pantry's four-step entry flow keeps one primary decision on each screen, followed by its own blurred confirmation after saving. Apple's Health app influenced the progressive structure; this confirmation is Pantry's design.",
    credit: "Figure 04 / Authentic app"
  },
  swipeTimeline: {
    id: "pantry-figure-05",
    label: "Reconstructed from repository history",
    steps: [
      {
        index: "01",
        title: "Swipe actions",
        detail: "Item rows already supported swipe actions.",
        reference: "4df880a"
      },
      {
        index: "02",
        title: "Visual redesign",
        detail: "The approved card direction was implemented and the swipe code remained present.",
        reference: "330cf3c"
      },
      {
        index: "03",
        title: "Gesture conflict",
        detail: "A custom press style competed with the gesture even though the action modifier still existed.",
        reference: "Observed on device"
      },
      {
        index: "04",
        title: "Hands-on review",
        detail: "Holding and using the app revealed what code inspection alone had not.",
        reference: "Product test"
      },
      {
        index: "05",
        title: "Repair + tests",
        detail: "The interfering effect was removed, swipe behaviour restored, and interaction tests added.",
        reference: "c83fd5a"
      }
    ],
    caption: "The failure was reconstructed from verified commits and repository state. There is no screenshot of the broken gesture, and this timeline does not pretend otherwise.",
    credit: "Figure 05 / Repository reconstruction"
  },
  quickAdd: {
    id: "pantry-figure-06",
    label: "One capture session / Authentic observation",
    image: {
      src: "/assets/images/evidence/pantry/pantry-quick-add.jpg",
      fullSizeSrc: "/assets/images/evidence/pantry/full/pantry-quick-add.png",
      fullSizeLabel: "Open the full-resolution Pantry Quick Add screenshot",
      alt: "Pantry Quick Add usage step listing eight generic household items with selected and unselected Start now controls.",
      width: 414,
      height: 900
    },
    facts: [
      { label: "Task", value: "Build a privacy-safe demo inventory" },
      { label: "Choice", value: "Use the existing Add Multiple flow" },
      { label: "Reason", value: "Avoid repeating single-item entry eight times" }
    ],
    caption: "During one screenshot-preparation session, Codex chose Pantry's existing Add Multiple flow to enter eight generic household items. This is one genuine observation, not general product validation.",
    credit: "Figure 06 / Authentic observation"
  }
};
