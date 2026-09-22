import type { WindowId } from '@/lib/desktop';

export type WindowParagraph = string | Array<string | { emphasis: string } | { text: string; href: string }>;

// Jon's revised copy, approved for publication on September 22, 2026.
// These additions appear only when a window is maximized.
// The approved compact-view copy remains in site.ts and its components.
export const windowDetails: Record<WindowId, { heading: string; paragraphs: WindowParagraph[] }> = {
  intro: {
    heading: 'More room. Good.',
    paragraphs: [
      "The ‘for myself’ part of that headline is no joke. I think it’s natural that the people who care most about a problem are the people having it, and they should always be involved in its resolution whenever possible. There are a million things that I wish worked a little differently, but time is limited so I’ve had to select a few to focus on.",
      "The most rewarding thing is when a tool I made for myself starts being worthwhile to someone else. I’m ever aware that others won't have my mental map of where things live, and I feel strongly that they shouldn't need it. A name, a default, or the order of two steps can make a massive difference. I enjoy working through those things, especially when the result feels a little more considerate.",
      [
        "I use AI tools heavily in building these apps. A lot of my work is deciding what should happen, working through the weird cases, and checking that what comes back actually does the job correctly, will continue to do its job correctly at reasonable scale, and won’t cost me a billion dollars, ",
        { emphasis: 'ever' },
        ". Getting something onto a screen is a lovely start, but there's usually quite a bit left to figure out."
      ]
    ]
  },
  paytogether: {
    heading: 'Yes, splitting bills really is that fun',
    paragraphs: [
      "I made PayTogether as a disgruntled former user of an app that shall certainly not be named here. It was important for me that someone can be part of a group without having an account. If you've paid for dinner, you can include everyone in the expense; they don't all have to register before you can keep track of it, because the last thing people want to do is download another app.",
      [
        "Splitting bills has lots of interesting problems to solve, like what to do with all the pennies! Split $10 three ways and somebody needs to owe $3.34. Who should it be? The app uses the details of the expense to pick a starting point in the group, then hands out the leftover pennies from there. The same bill gets the same split, but the starting point can change from bill to bill, so being first on the list doesn't automatically make you the extra-penny person. For percentage splits, it uses the ",
        { text: 'largest remainder method', href: 'https://www.census.gov/about/history/historical-censuses-and-surveys/census-programs-surveys/decennial-census/methods.html' },
        ": round each share down to whole cents, then give the leftover pennies to the shares that lost the biggest fractions. Either way, the total still adds up."
      ],
      "Once a group has a few expenses, paying back every person separately can mean sending money in circles. The settle-up suggestions work out a shorter set of payments that gets everyone settled up. Those are the decisions I enjoy working on here: let people get on with their evening, and have the app keep track of the fiddly bits."
    ]
  },
  myfpl: {
    heading: 'This one is to help me win my work league (and help you win yours)',
    paragraphs: [
      "Fantasy football gives you plenty to think about before a deadline, and plenty of time to regret all your decisions afterward. I wanted the live points, transfer planning, and weekly analysis all in one place so I could at least make those decisions informed, and without having to consult a ton of different sources.",
      "A good player isn't automatically a good transfer for your team. There's your budget, the players you already have, the fixtures coming up, and whether making a move is worth the cost at all. myFPL uses a shared player-scoring model for its lineup, captain, and transfer suggestions, then accounts for the different constraints of each decision. Sometimes keeping the player you have is a perfectly reasonable answer.",
      "Before the AI gets involved, the app calculates the gameweek figures, ranks the captain options, and evaluates transfers using rules I can inspect and test. I've spent a lot of time on that part, because I want to be able to follow how it got to an answer. The model then works from those results to write the weekly report and explain the trade-offs, with room to argue for a different choice when it can give a reason. I want the explanation to give you something you can question and think through. A recommendation is much more useful to me when I can see what it's based on.",
      "All of that said, the most complete data in the world couldn’t tell you, oh, that Manchester United will lose 2-0 to a newly promoted Hull City side in their season opener, with Bruno Fernandes, one of last season’s top scorers, registering a measly 2 points (for example). Therefore, the goal is not to help you top the global leaderboard, but rather to do better on average than you would have without the app."
    ]
  },
  about: {
    heading: 'A few more things about me',
    paragraphs: [
      "When I say I care about details, I mean things like whether a button says what it actually does, whether the next step is obvious, and whether someone can use the thing without a mouse. None of those is a particularly grand feature to put on a project page, but they still materially affect every visit.",
      "When I say I’m probably playing guitar, I mean... the odds are good that I’m playing guitar (if I’m not working). I sing and play piano as well, and I've recorded and soft-launched a couple of albums. I mix my own recordings and film and edit my own videos, so a music project tends to become several projects before I'm done with it.",
      "When I say my most defining trait is so on and so on, I mean that I like having something to make that asks different things of me. You can spend a long time adjusting a recording, then hear something new as soon as you play it back the next morning (or the next hour). At some point you do have to let other people hear it, which is its own sort of exercise."
    ]
  },
  experience: {
    heading: 'Different kinds of detail',
    paragraphs: [
      "At Droit, I turn financial regulations into executable decision logic. That means taking a rule written in prose and getting specific about which conditions lead to which obligations. The decisions link back to the relevant source text, and I write test scenarios that exercise the different paths through the logic. A sentence can seem perfectly clear until you have to decide exactly what should happen in a particular case.",
      "At YRCI, I worked with data extracted from lease agreements. Quality checks involved going through spreadsheets cell by cell, but some mistakes were visible in the relationship between fields. A row might say no additional property was included, then go on to describe the additional property. I wrote Excel macros to flag those contradictions, and running them against work we'd already delivered found errors the manual reviews had missed.",
      "I think about that fairly often when I'm building my own tools. A useful check can be quite simple once you've worked out what to check. Getting to that point usually means spending time with the task and the people doing it. MajaLabs gives me room to keep following those questions through in applications of my own."
    ]
  },
  education: {
    heading: 'Economics and quite a lot of code',
    paragraphs: [
      "My degree is in economics, from George Mason. After working at YRCI, I went to Flatiron School to study software engineering. So there was a bit of a route between the degree and the job title at the top of this page.",
      "The Major League Hacking fellowship came after that. I worked on AWS Amplify's open-source tooling, triaging and resolving issues raised by people using it. Working from somebody else's bug report is a different ballgame from triaging issues you’ve encountered yourself, because in the latter case you’ve done almost half of the job of fixing said bug. Causing it.",
      "I find explaining things useful when I'm learning. Writing down the steps is where I discover which part I had only understood well enough to nod along to. Some of those attempts are in the Writing window."
    ]
  },
  writing: {
    heading: 'The explanation is part of learning it',
    paragraphs: [
      "These are notes from learning my way around JavaScript and React. Scope, navigation, and theme switching all look fairly contained until you start trying to explain what happens, in what order, and why.",
      "I like having to slow down enough to do that. An example can run perfectly while my explanation of it still has a hole in the middle. Putting the steps into words is a good way of finding the hole.",
      "All of these were written in 2022 during bootcamp (they were assigned writing, which I’ve discovered since then is an important motivator for me). There is almost certainly probably more to come. I enjoy thinking about ways to make something feel straightforward for the next person trying to learn it."
    ]
  },
  footer: {
    heading: 'You maximized the footer',
    paragraphs: [
      "I didn't have a great deal to add down here, but I do appreciate the curiosity. This seemed like a good place to leave a little room for whatever I make next.",
      "Thanks for having a look around. I hope something here struck your fancy."
    ]
  }
};
