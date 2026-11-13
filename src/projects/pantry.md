---
layout: layouts/project.njk
title: "Building an iPhone App Without Writing Code or Opening Figma."
description: "I'm a product designer. This is how I built Pantry as a real iPhone app with ChatGPT, Codex, visual references, and physical testing."
socialImage: https://git-elinit.github.io/assets/images/social/pantry-social.png
projectLabel: 02 / Pantry — Designing with AI agents
currentPage: projects
permalink: /projects/pantry/
contentProvidesTitle: true
bodyClass: article-page pantry-article-page
---

{% from "components/pantry-figures.njk" import appFigure, workflowFigure, comparisonFigure, timelineFigure, observationFigure, featureIndex %}

# Building an iPhone App Without Writing Code or Opening Figma.

<p class="article-story-subtitle">One product designer, ChatGPT, Codex, and a working iPhone app.</p>

*Episode 02 — Pantry / An experiment in designing with ChatGPT and Codex.*

<figure class="pantry-product-hero" aria-labelledby="pantry-product-hero-caption">
  <div class="pantry-product-hero__header">
    <span class="pantry-product-hero__identity">
      <img src="{{ '/assets/images/brand/pantry-icon.webp' | url }}" alt="" width="256" height="256" decoding="async">
      <span>Episode 02 / Pantry</span>
    </span>
    <span>Verified captures / 002</span>
  </div>
  <div class="pantry-product-hero__stage">
    <span class="pantry-product-hero__orbit" aria-hidden="true"></span>
    <img class="pantry-product-hero__device pantry-product-hero__device--primary" src="{{ '/assets/images/evidence/pantry/pantry-home-dark.jpg' | url }}" alt="Pantry inventory overview with an isolated English demo inventory." width="414" height="900" decoding="async" fetchpriority="high">
    <img class="pantry-product-hero__device pantry-product-hero__device--secondary" src="{{ '/assets/images/evidence/pantry/pantry-item-detail.jpg' | url }}" alt="Pantry item-detail screen for Hand Soap, showing its category, place, quantity, and state." width="414" height="900" decoding="async">
    <span class="pantry-product-hero__annotation pantry-product-hero__annotation--inventory" aria-hidden="true">Real item hierarchy</span>
    <span class="pantry-product-hero__annotation pantry-product-hero__annotation--detail" aria-hidden="true">State + action detail</span>
    <span class="pantry-product-hero__title" aria-hidden="true"><small>02 / Product as artifact</small><strong>Pantry</strong><small>Inventory / Rooms / Actions</small></span>
  </div>
  <figcaption id="pantry-product-hero-caption">Authentic Pantry captures from the running iPhone app. No interface reconstruction.</figcaption>
</figure>

## I usually start in Figma. This time, I didn't.

Most of my work as a product designer starts with screens, layouts, and interactions. Figma is usually where those ideas take shape, but this project began somewhere else.

There was a household problem I wanted to solve, so I opened ChatGPT and started talking about it. We explored the idea, generated visual references, and translated decisions into instructions for Codex. It handled the Swift implementation inside the project while I tested the results on my iPhone.

No Figma files, no manually written implementation code, and definitely not a perfect app on the first try.

## It started with notes on my refrigerator

Managing a home involves remembering an annoying number of little things. Do we have eggs? When did we open that bottle of cooking oil? How long does the detergent usually last? And how much should we expect to spend on essentials next month?

My system was a collection of notes around the refrigerator. Before shopping, those reminders turned into another list in a messaging app, which I'd send to friends so we could keep track of what we needed.

It worked, sort of. But there was still no clear picture of how quickly things were being used, and anything that hadn't been written down remained something I had to remember.

Pantry started with a simple ambition: keep track of what we own, what we're using, what needs replacing, and eventually what everyday household supplies cost us.

{{ appFigure(pantryEvidence.realPantry) }}

## My little team of three

The development process wasn't one giant prompt telling Codex to make an entire app. Over time, it became a conversation between three participants, each doing a different kind of work.

**Me:** I decided what we were building, explored ideas, collected references, tested the app, and made product decisions.

**ChatGPT:** My helper. We brainstormed, looked at problems, explored solutions, and prepared instructions for Codex.

**Codex:** The coding agent. It worked inside the repository, implemented features, ran tests, and reported what changed.

Every iteration eventually came back to the phone. I'd try the app, notice friction, and describe what needed attention. My helper and I would discuss the possible approaches before preparing another Codex task. Sometimes Codex returned with its own observations, and we'd work from those too.

The process wasn't fully autonomous, but it meant more time could go into experiencing the product and making design decisions instead of personally implementing every screen.

{{ workflowFigure(pantryEvidence.workflow) }}

## Sometimes a picture is a better prompt

Visual references became one of the most useful discoveries in this project.

Pantry's item cards took quite a few attempts to get right. ChatGPT generated different directions, I compared them, chose what felt appropriate, and we developed detailed reference sheets for the material, spacing, hierarchy, and actions.

One approved direction even had its own glass-material specification. That gave Codex something concrete to build from rather than another long description of how I imagined the component.

The running result wasn't an exact copy, and that was fine. Real inventory cards had to communicate item states, quantities, storage information, and actions without becoming cluttered. The reference established the direction; using the app shaped the final design.

{{ comparisonFigure(pantryEvidence.cardTranslation) }}

A traditional form could present everything at once—name, category, quantity, price, image, and location—even though those decisions don't have equal importance.

Apple's Health app gave me an idea. Its step-by-step wellbeing flow was easy to understand, so I recorded the interaction and shared the video with my helper. That reference helped us design a more guided process with one primary decision at a time.

Pantry eventually used a four-step entry flow and its own blurred confirmation after saving. A short video had communicated the interaction more effectively than paragraphs of written instructions.

{{ comparisonFigure(pantryEvidence.guidedEntry) }}

## The code worked. The swipe didn't.

Of course, the implementation didn't always match the intended experience.

During an item-card redesign, the swipe actions stopped working correctly. My familiarity with Swift helped me recognize where the problem might be, and my first suspicion was that the previous functionality hadn't been reconnected to the new interface.

After reporting it to my helper, we asked Codex to repair the interaction without losing the approved card design. Later, while researching this article, we discovered that the swipe code had actually remained in place.

The problem was a custom press effect introduced during the redesign. It interfered with the gesture even though the swipe modifier still existed. Codex removed the conflict, preserved the visual treatment, and added interaction tests.

That incident reinforced something important: code can appear correct while the experience fails in someone's hands.

Another small example was a button whose title responded to taps, but whose surrounding visible background didn't. The screen looked fine until a finger landed just outside the text.

Those details are easy to overlook when reviewing static screens. Testing the actual product made them impossible to ignore.

{{ timelineFigure(pantryEvidence.swipeTimeline) }}

## I wanted the repository to remember things too

As the app grew, longer prompts stopped feeling like a good solution. Every new task depended on decisions we'd already made: approved references, existing interactions, postponed issues, and the reasons behind previous changes.

Repeating that context to each agent wasn't sustainable. That led to an experiment I called the Living Repository.

The idea was to make the repository useful as project memory, not merely a place where code lived. We documented its vision, current state, handoffs, and future opportunities, then explored ways for agents to identify and record problems more independently.

The goal was never to give agents unlimited authority over product decisions. It was to make useful context available so each new task could begin with a better understanding of the work that came before it.

## Then Codex became a Pantry user

Something funny happened while we were preparing screenshots for this very article.

Codex needed a clean simulator filled with generic household items. Instead of entering each item individually, it explored Pantry and discovered the existing Add Multiple feature.

That was the same feature we'd designed to reduce repetitive grocery entry. Now the agent documenting the app had encountered a similar problem and chosen our solution.

Seeing its explanation made me laugh. :))

It wasn't proof that Pantry had become effortless to use. But a design decision had helped with a real task in an unexpected way, and that was a satisfying little moment.

{{ observationFigure(pantryEvidence.quickAdd) }}

## So, do I actually use Pantry?

Here's the part I don't want to make sound better than it is: Pantry hasn't become an app I use as consistently as I'd hoped.

For a while, the development build had to be run on my phone repeatedly because the app wasn't on TestFlight. That interruption made everyday use harder.

The bigger challenge was maintenance. A household produces a surprising number of inventory changes. Buying items, entering them, updating quantities, marking things as in use, and recording when they finish takes effort—even with Quick Add.

An app created to reduce things I had to remember was sometimes becoming another thing to remember.

That didn't make the experiment disappointing. Alongside the product work, I was learning how to collaborate with agents, communicate through references, test real software, and preserve project knowledge in a repository.

Then Pixelog changed how I thought about the problem. Its interaction was much simpler: write a short log and let the app organize information around it. Using that approach felt more natural than manually changing every inventory state.

Now I'm wondering whether Pantry could work in a similar way. Instead of finding eggs and milk individually, perhaps I could simply write "Bought eggs and milk" and let the app suggest the appropriate updates. Siri could eventually make those little records even easier.

Those are future ideas, not features Pantry already has. But they're making me excited to return to it.

{{ featureIndex(pantryFeatures) }}

## What this changed for me as a designer

Pantry wasn't built to prove that product designers no longer need developers. Reliable software still requires technical knowledge, careful engineering, and testing. What changed was my understanding of how directly I could participate in building it.

A problem could become a conversation, a visual reference, a working implementation, and something I could test on my own phone. Codex handled the implementation while I spent more of my time making product decisions and evaluating the experience.

Sometimes an agent noticed something I'd missed. Other times, I caught details the agent hadn't considered. The important part wasn't simply that AI wrote the code; it was the feedback loop between an actual product and the people and tools building it.

Pantry still has plenty of room to improve. But the experiment has already changed how I'd approach another app, and that alone made it worth doing.
