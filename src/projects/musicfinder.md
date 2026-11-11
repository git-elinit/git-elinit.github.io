---
layout: layouts/project.njk
title: Canceling Apple Music Somehow Turned Into My First AI Agent.
description: Canceling Apple Music somehow turned into Ellie's first AI agent.
projectLabel: 01 / MusicFinder — My journey into AI agents
currentPage: projects
permalink: /projects/musicfinder/
contentProvidesTitle: true
bodyClass: article-page
---

{% from "components/story-figure.njk" import evidenceFigure, storyFigure %}

# Canceling Apple Music Somehow Turned Into My First AI Agent.

**01 / MusicFinder — My journey into AI agents**

Hi, I'm Ellie! 👋

I'm a product designer who likes making things. Sometimes they're useful. Sometimes they're weird.

Lately, experimenting with AI agents has made those little ideas much easier to explore. Instead of leaving them in my notes, I can turn some of them into things that actually run.

MusicFinder was the first experiment I decided to write about.

## It started with my music

Canceling Apple Music sounded simple until I remembered my playlists. There were a lot of songs I wanted to keep listening to, and YouTube seemed like a reasonable free alternative.

The problem was finding everything again. Searching for each track individually? No, thanks.

Around the same time, AI agents had caught my attention. I'd been reading about what they could do, and building one seemed more interesting than spending hours searching for music.

The idea was straightforward: take screenshots of my music library, give them to an agent, and ask it to find matching songs on YouTube.

That's how MusicFinder started.

## My first agent

Here's something funny: MusicFinder was built without me inspecting a single line of generated code.

The goal wasn't to learn Python or understand every implementation detail. I already wanted to explore how people could collaborate with coding agents, so this felt like a useful experiment.

ChatGPT helped me think through the problem, prepare instructions, and plan each step. Codex worked inside the project, implementing and running the tool. My part was explaining the intended behavior, examining the output, and deciding what needed to change.

Naturally, the first attempt didn't go perfectly.

## 13 screenshots, 13 songs

One of the first tests used 13 screenshots from my Apple Music library. MusicFinder returned 13 songs.

That sounded plausible for about a second. Each screenshot contained several tracks, so where had the others gone?

The agent had interpreted my instructions as finding one selected song per screenshot rather than extracting every visible song. The code had produced an answer, but not the answer I intended.

We revised the instructions to extract every readable song, check the expected count, and flag anything uncertain. A later run produced 195 result rows from the same number of screenshots.

Finding a YouTube video was another problem. A matching title didn't necessarily mean it was the right recording, so I began opening the links and listening. Confidence scores helped identify results worth checking more closely.

{% if musicfinderEvidence.libraryScreenshots %}
{{ evidenceFigure(musicfinderEvidence.libraryScreenshots) }}
{% endif %}

That distinction became one of the biggest lessons of the experiment: a successful run isn't the same as a correct result. Even without reading the implementation code, I still needed a way to judge whether the tool had done the job.

## Then something unexpected happened

Some time later, I opened MusicFinder again without changing its code. Curiosity got the better of me, so I asked a simple question:

**"What can you do?"**

The response included the music-related features I expected, but also things like research, document creation, spreadsheets, and code modification. Apparently, there was more available to this agent than I'd been using.

So I tried something different.

*"can you find the fc 2026 list of music from youtube and then send me a doc of list of musics"*

That was the entire request. The result was a four-page document containing 109 songs from the EA SPORTS FC 26 soundtrack.

{% if musicfinderEvidence.soundtrackDocument %}
{{ storyFigure(musicfinderEvidence.soundtrackDocument) }}
{% endif %}

The song names and artists were there, arranged in a structured document with clickable YouTube searches. After checking the list, I was happy with the songs themselves, although the links weren't quite what I'd imagined. They opened searches rather than taking me directly to music videos.

Still, the result surprised me. MusicFinder had started as a tool for recognizing songs in screenshots, and now I was using its available tools to research a soundtrack and create a document.

Not bad for an experiment that began with canceling a subscription. :))

## What I learned

The most interesting part of MusicFinder wasn't the code or even the finished tool. It was discovering how much of the work involved communicating a problem clearly, setting expectations, and checking the results.

There was no perfect prompt. The process involved wrong assumptions, revised instructions, confidence checks, and plenty of clicking through YouTube links.

Another surprise was that the agent could already do more than I'd originally asked of it. Those additional tools were available; I simply hadn't thought to use them in that way.

Sometimes a project teaches you something beyond the problem it was supposed to solve.

{% include "content/musicfinder-reflection.md" %}

## What's next?

MusicFinder began with a small problem and opened up a much bigger question: what else could I build by working this way?

An actual app felt like the next experiment. Something I could design, run on my phone, test in everyday life, and keep improving.

That experiment became Pantry.

And that's where the next story begins.

*— Ellie*

<a class="project-source-card" href="https://github.com/git-elinit/musicfinder-agent" aria-label="Open the MusicFinder repository on GitHub">
  <span class="project-source-card__label">GitHub / Repository</span>
  <strong>Want to try MusicFinder?</strong>
  <span class="project-source-card__arrow" aria-hidden="true">↗</span>
</a>
