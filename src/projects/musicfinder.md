---
layout: layouts/project.njk
title: I wanted to cancel my Apple Music subscription. Somehow, that turned into building my first AI agent.
description: I wanted to cancel my Apple Music subscription. Somehow, that turned into building my first AI agent.
projectLabel: 01 / MusicFinder — My journey into AI agents
currentPage: projects
permalink: /projects/musicfinder/
contentProvidesTitle: true
bodyClass: article-page
---

{% from "components/story-figure.njk" import evidenceFigure, storyFigure %}

# I wanted to cancel my Apple Music subscription. Somehow, that turned into building my first AI agent.

**01 / MusicFinder — My journey into AI agents**

Hi, I'm Ellie! 👋

I'm a product designer who likes making things. Sometimes they're useful. Sometimes they're weird.

Recently, I've been exploring AI agents and how they can help me turn my ideas into actual products.

I thought I'd start sharing that journey, beginning with my first experiment: MusicFinder.

## It started with my music

I wanted to cancel my Apple Music subscription, but there was one problem: my playlists.

I didn't want to lose all those songs, and since I could listen to music on YouTube for free, I thought I'd just find them there.

But searching for every song individually? No, thanks.

Around the same time, I was curious about AI agents. I'd been reading about what they could do, and I wanted to try making one myself.

So I had an idea.

What if I could take screenshots of my music library, give them to an agent, and have it find the matching songs on YouTube?

That's how MusicFinder started.

## My first agent

Here's something funny: I built MusicFinder without inspecting a single line of code.

I wasn't trying to learn Python or understand every technical detail. I wanted to learn how to work with agents.

I used ChatGPT to help me think through the problem, prepare instructions, and plan the work. Then I used Codex to build and run the project.

My job was to explain what I wanted, test the results, and figure out what needed to change.

And obviously, things didn't work perfectly the first time.

## 13 screenshots, 13 songs

One of my first tests involved 13 screenshots from my music library.

MusicFinder returned 13 songs.

Which sounds reasonable, except each screenshot contained multiple songs!

The agent had interpreted my instructions as finding one selected song per screenshot instead of extracting every visible song.

So we went back to the instructions.

We made them more specific: extract every readable song, count the expected results, and check whether anything was missing.

Later, we also had to deal with uncertain YouTube matches.

The agent could find a video with the correct title, but that didn't always mean it had found the right song.

So I started checking the links myself.

MusicFinder also provided confidence scores, which helped me identify matches that might need another look.

{% if musicfinderEvidence.libraryScreenshots %}
{{ evidenceFigure(musicfinderEvidence.libraryScreenshots) }}
{% endif %}

I wasn't reviewing the code. I was reviewing what the code actually did.

And slowly, I started understanding something about working with agents: explaining what you want is only part of the job. You also need a way to know whether they did it correctly.

## Then something unexpected happened

Recently, I opened the original MusicFinder agent again.

I hadn't modified its code for this new task. I was just curious, so I asked:

**"What can you do?"**

It gave me a list of capabilities. Some were related to music, but others included researching information, creating documents, working with spreadsheets, and even modifying code.

That made me curious.

So I typed:

*"can you find the fc 2026 list of music from youtube and then send me a doc of list of musics"*

That was it. One prompt.

And it returned a four-page document containing all 109 songs from the EA SPORTS FC 26 soundtrack.

{% if musicfinderEvidence.soundtrackDocument %}
{{ storyFigure(musicfinderEvidence.soundtrackDocument) }}
{% endif %}

Artists, song names, a structured table, and clickable YouTube searches.

I checked the list, and the songs were correct.

There was one thing I didn't love: clicking a song opened a YouTube search instead of taking me directly to the actual music video.

So it wasn't exactly what I'd imagined.

But still.

I built this thing to recognize songs from screenshots. And now I was asking it to research an entire soundtrack and create a document for me.

I was genuinely surprised.

## What I learned

I think the most interesting part of MusicFinder wasn't the code or even the finished tool.

It was realizing how much I could do by learning to work with agents.

I started with a very specific problem. I didn't inspect the code, and I definitely didn't have a perfect workflow.

I made mistakes, changed instructions, checked results, and gradually learned how to ask for what I actually needed.

And that little agent ended up being useful in ways I hadn't originally planned.

I'm not saying it learned new skills on its own. It already had access to tools that could do more than its original music-related task.

I just hadn't thought to use them that way.

That's probably my favorite discovery from this experiment.

**Sometimes you build something for one reason, and only later discover what else you can do with it.**

{% include "content/musicfinder-reflection.md" %}

## What's next?

MusicFinder was my first experiment, but it made me curious about something bigger.

What if I tried building an actual app this way?

Not just a small agent doing one task, but something I could design, use, improve, and maybe eventually share with other people.

That's where Pantry came in.

And that's the next part of this journey.

*— Ellie*

<a class="project-source-card" href="https://github.com/git-elinit/musicfinder-agent" aria-label="Open the MusicFinder repository on GitHub">
  <span class="project-source-card__label">GitHub / Repository</span>
  <strong>Want to try MusicFinder?</strong>
  <span class="project-source-card__arrow" aria-hidden="true">↗</span>
</a>
