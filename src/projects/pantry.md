---
layout: layouts/project.njk
title: "I'm a Product Designer. I Built an iPhone App Without Writing Code or Opening Figma."
description: "I'm a product designer. This is how I built Pantry as a real iPhone app with ChatGPT, Codex, visual references, and physical testing."
projectLabel: 02 / Pantry — Designing with AI agents
currentPage: projects
permalink: /projects/pantry/
contentProvidesTitle: true
bodyClass: article-page pantry-article-page
---

{% from "components/pantry-figures.njk" import appFigure, workflowFigure, comparisonFigure, timelineFigure, observationFigure, featureIndex %}

# I'm a Product Designer. I Built an iPhone App Without Writing Code or Opening Figma.

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

I'm a product designer. Normally, when I have an idea for an app, I'd start exploring screens, layouts, and interactions in Figma. But this time, I wanted to try something different.

I had a problem I wanted to solve at home. Instead of opening Figma, I opened ChatGPT and started explaining it. We talked through the idea, generated visual references, and turned decisions into instructions for Codex. Codex worked inside the project, writing the Swift code and implementing the features.

I tested the results on my iPhone. No Figma files, no manually written implementation code, and definitely not a perfect app on the first try.

## It started with notes on my refrigerator

One of the annoying things about managing a home is remembering everything you need to buy. Do we have eggs? When did I open that bottle of cooking oil? How long does our detergent usually last? How much should I budget for everyday essentials next month?

I used to write reminders on notes around the refrigerator. Before shopping, I'd create another list in messages and send it to friends so we could keep track of what we needed. But I still had no idea how quickly we were using things.

And until I wrote something down, I had to keep reminding myself not to forget it.

I wanted one place to keep track of what we owned, what we were using, what needed replacing, and eventually what everyday life was costing us. That's where Pantry started.

{{ appFigure(pantryEvidence.realPantry) }}

## My little team of three

I didn't just give Codex a giant prompt and ask it to make an app. The workflow became a conversation between three participants.

**Me:** I decided what we were building, explored ideas, collected references, tested the app, and made product decisions.

**ChatGPT:** My helper. We brainstormed, looked at problems, explored solutions, and prepared instructions for Codex.

**Codex:** The coding agent. It worked inside the repository, implemented features, ran tests, and reported what changed.

Then I opened the app and tried it. If something felt wrong, I'd describe it to my helper. We'd discuss the problem, agree on an approach, and send Codex another task. Sometimes Codex came back with an issue or a question of its own, and that started another discussion.

It wasn't a perfectly automated system. But it meant I could spend more of my time experiencing the product instead of implementing every screen.

{{ workflowFigure(pantryEvidence.workflow) }}

## Sometimes a picture is a better prompt

One of my favorite discoveries was how useful visual references could be.

I spent quite a lot of time trying to get Pantry's item cards right. We explored different versions with ChatGPT, generated images, chose a direction, and then created more detailed reference sheets to explain the material, spacing, hierarchy, and behavior.

At one point, we had an approved glass-card direction with its own material specifications. Those images gave Codex something much more concrete to work from than me repeatedly describing how I imagined a card.

And the result wasn't an exact copy. The running cards evolved because they needed to show actual item states, quantities, storage information, and actions without becoming cluttered. I liked that. The reference was a starting point, not a screenshot that had to be reproduced pixel for pixel.

{{ comparisonFigure(pantryEvidence.cardTranslation) }}

Another example was the Add Item experience. I didn't like the idea of showing a form full of fields where the item name was just as visually important as optional information like an image or price.

I remembered Apple's Health app and its step-by-step wellbeing logging flow, so I recorded a video of that interaction and sent it to my helper. We used it as a reference for a more guided process: one important decision at a time, with optional details kept out of the way.

Pantry eventually had a four-step entry flow, followed by its own blurred confirmation after saving. That was one of the moments when I realized a short reference video could explain an interaction better than paragraphs of text.

{{ comparisonFigure(pantryEvidence.guidedEntry) }}

## The code worked. The swipe didn't.

Of course, Codex didn't always get everything right.

During one of our item-card redesigns, the swipe actions stopped working correctly. I knew some Swift, so I understood roughly where things might have gone wrong. I initially thought Codex had forgotten to reconnect the previous functionality when changing the interface.

I reported the problem to my helper, and we asked Codex to fix it without losing the approved card design. Later, when we investigated the repository history for this article, we found something interesting: the swipe code had actually been there the whole time.

A custom press effect introduced during the redesign was interfering with the gesture. Codex removed the interfering effect, preserved the visual design, and added focused interaction tests.

That incident stayed with me because it explained why I couldn't just ask an agent to build an app from beginning to end and assume everything would work. There's a lot an agent can check in code, but there's also a lot you notice when you actually hold the phone and use the app.

We had another problem where a button looked perfectly fine, but only its text was tappable, not the surrounding visible area. It's such a small thing, but imagine tapping what looks like a button and nothing happening because your finger missed the title.

Those are the moments where I realized my design experience still mattered.

{{ timelineFigure(pantryEvidence.swipeTimeline) }}

## I wanted the repository to remember things too

Another thing I learned was that writing increasingly detailed prompts wasn't enough.

As Pantry grew, I kept running into decisions we'd already made. Which reference had we approved? How should the item cards behave? What interactions should survive a redesign? What problems had we decided to revisit later?

I didn't want to explain everything again whenever an agent started working, so I began experimenting with what I called a *Living Repository*.

The idea was simple: the repository shouldn't just contain code. It should contain enough project knowledge to help an agent understand what we were trying to build.

We documented the vision, current state, handoffs, and opportunities. We also started thinking about how agents could identify problems and document them without waiting for me to notice every little thing.

I wanted to explain my intentions once and have the agents work with that context. We're still exploring how autonomous that workflow can become, but one lesson was already clear: if agents are going to work independently, they need to understand the decisions that came before them.

And I still need to be the one making the important product decisions.

## Then Codex became a Pantry user

This one happened while preparing screenshots for the article you're reading.

I asked Codex to run Pantry in a clean simulator and populate it with sample household items. It needed to enter several items, and instead of repeating the single-item flow, Codex explored the app and found the **Add Multiple** feature we'd built earlier.

It decided that using that feature was the easiest way to avoid entering everything individually.

I actually laughed when I saw its explanation.

We'd designed Add Multiple because entering groceries one by one was annoying. And now an AI agent, working on a completely different task, had encountered the same friction and chosen our solution.

That was a small but unexpectedly satisfying moment. It doesn't mean every part of Pantry is easy to use, far from it. But seeing something we'd designed become useful to the agent helping document the app? I loved that.

{{ observationFigure(pantryEvidence.quickAdd) }}

## So, do I actually use Pantry?

Here's the part I don't want to make sound better than it is.

Not as much as I'd hoped.

For a while, I had to keep running the development build on my phone because the app wasn't on TestFlight. That interrupted the experience.

And there's another problem: I buy a lot of things. Even with Add Multiple, keeping every item and its state accurate takes effort. Buying something, entering it, updating its quantity, marking it as in use or finished—it adds up.

I originally built Pantry to help me remember things, but sometimes maintaining the app became another thing to remember.

I wasn't disappointed, though. The entire project was also an experiment in learning how to build with agents. I learned how to communicate through references, how to organize agent work, how to test real software, and how to improve a repository so agents could understand it better.

I got a lot out of it, and I still love the idea of Pantry.

Later, I built another app called Pixelog. Its interaction was much simpler: write a short log and let the app organize information around it. I started enjoying that approach so much that it changed how I thought about Pantry.

Maybe I shouldn't have to find an item, open its details, and manually change its state every time. Maybe I should be able to write something like “Bought eggs and milk,” and let Pantry suggest the appropriate inventory updates—or use Siri to record something while I'm putting groceries away.

Those are ideas for the next version, not features I've finished building. But they're making me excited to return to the project.

{{ featureIndex(pantryFeatures) }}

## What this changed for me as a designer

I didn't build Pantry to prove that designers don't need developers, and I don't think AI replaces the knowledge needed to build reliable software. But this project changed the way I think about turning an idea into something real.

I could start with a problem instead of a Figma file, use words, reference images, and videos to explain what I wanted, and let Codex handle the implementation while I tested the actual experience.

Sometimes the agent noticed things I hadn't thought of. Other times, I caught things the agent missed. That's why I don't think the interesting part is simply that AI wrote the code. It's that I could spend more time understanding how the product actually worked.

Pantry isn't finished, and I don't know exactly what its next version will look like. But I know I'd approach building it differently now, and that alone made the experiment worth doing.
