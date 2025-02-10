---
routerMode: 'hash'
# You can also start simply with 'default'
theme: geist
colorSchema: dark
# some information about your slides (markdown enabled)
title: RSS
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
export:
  format: pdf
  timeout: 60000
  dark: false
  withClicks: false
  withToc: true
---

# RSS - it's not dead, it's gone underground

<div class="flex gap-16">

<div class="flex-basis-5/8">

<h2>Why Content Sharing, Open Data & Chronological
feeds <em class='underline text-rose-600 inline-block m-be-6'>still
matter</em></h2>

**Bart Delrue** – Odisee 2025

</div>

![](https://media1.tenor.com/m/ctveG5gjgvsAAAAC/pbell.gif){.w-2/3 v-click}

</div>

---

## Content advisory slide

::v-clicks{.flex.flex-wrap.gap-1.*:m-0}
- Contains load noises,
- flashes of light,
- strong language,
- political content,
- robotic aggression towards women,
- gun shots,
- and most dangerous of all:
- **ideals**
  ::

---
layout: two-cols
transition: slide-up
---

## The web is broken{class='m-be-0'}
### "Your feed is not your own anymore."{class='m-bs-0 m-be-24'}

- 🤖 _The algorithm_ decides, not you
- 💊 Built for addiction, not knowledge
- 🤑 Access comes at a cost - your money, your data, your trust
- 🌀 Content appears when _they_ decide, not when it's posted

::right::

![](https://media1.tenor.com/m/7T0EYxwXSmEAAAAd/algorithm-terminator.gif){.h-2/3}

---
layout: center
transition: slide-up
---

:Youtube{id=r98HbsaN9nw .w-screen.aspect-16/9}

---
layout: two-cols
transition: slide-up
layout-class: gap-8
class: content-center
---

## YouTube Regrets

In 2019, Mozilla collected countless stories from people whose lives
were impacted by YouTube’s recommendation algorithm. People had been
exposed to **misinformation**, developed **unhealthy body images**,
and became
trapped in **bizarre rabbit holes**. The more stories we read, the
more we
realized how central YouTube has become to the lives of so many
people — and just how much YouTube recommendations can impact their
wellbeing.

::right::

[![youtube regrets](/youtube_regrets.png)](https://foundation.mozilla.org/en/youtube/findings/)

[Download the report - 2021](https://mzl.la/regrets-research)  
[Watch TheirTube](https://www.their.tube/)

---
layout: center
transition: slide-up
---

![why medium is bad](/medium.png){.w-2/3.block.m-auto.fixed.inset-0}

::v-clicks
![facebook - login to see more](/facebook.png){.fixed.inset-0.w-2/3.block.m-auto}

![doomscrolling](/doomscrolling.png){.fixed.inset-0.w-2/3.block.m-auto}
::

---
transition: slide-up
class: flex gap-2
---

![Mark zuckerberg testifies in senate](https://media1.tenor.com/m/xTuvS7VJTz0AAAAd/mark-zuckerberg.gif)

![Elon Musk at the Trump inauguration](https://media1.tenor.com/m/SbrLoFPUiHMAAAAC/elon-musk-musk.gif)

![Sundar Pichai](https://media1.tenor.com/m/OFKzVWYCW4YAAAAd/smiling-nailed-it.gif)

---
layout: center
transition: slide-up
---
<script setup>
import video from '/ratm.mp4'
</script>

:video-player{autoPlay=true :src=video @next=$nav.next .w-screen}

---
layout: center
---

![fuck the system](https://media1.tenor.com/m/bZxskz7HU1IAAAAd/teletubbies-fuck-the-system.gif){.w-screen}

---
layout: center
transition: slide-up
---

# The Web Before the Algorithm{.m-be-24}

![welcome to the old internet](https://media1.tenor.com/m/41J3A6rJl0wAAAAC/internet.gif){.h-2/3}

---
layout: split
transition: slide-up
---

::v-clicks{.flex.flex-col.gap-4
- 📰 **Personal blogs** for content sharing  
  → Not power-hungry, data-tracking, privacy-violating, ad-selling corporations
- 📝 **Public forums**  
  → Not private Discord servers
- ⌚ **Chronological feeds**  
  → Not manipulated for engagement and influence
- 👀 **Following content _by choice_**  
  → Not what the deciders have decided you should follow
- 📻 **Podcasts were independent**  
  → Not owned by the labels
- 📺 **YouTube was for creators**  
  → For the fans, not the brands
  ::

![dancing baby, early internet meme](https://media1.tenor.com/m/AYtmgkOTh3QAAAAC/dancing-baby-dance.gif){.h-8/10.opacity-70}

---
transition: slide-up
---

## And then we asked ourselves{class='m-be-0'}
### if only there was a way...{class='m-bs-0 m-be-24'}

<div class="flex justify-between">

::v-clicks
- to share and distribute our content,
- to '**syndicate**' it, so to speak
- a simple way,{class='m-bs-8'}
- preferably even a **really simple** way...
  ::

::v-clicks
- to follow content **chronologically**
- without **ads** and **trackers**
- without **paywalls** and **subscriptions**
- without **influencers** and **brands**
- without **data mining** and **privacy violations**
- without **engagement** and **addiction**
- without **manipulation** and **censorship**
- without **recommendations** and **trending**
  ::

</div>

---
layout: center
---

![Curt Cobain looks directly in the camera with a hinting smile](https://media1.tenor.com/m/wVCFY25qVfMAAAAd/kurt-cobain-nirvana.gif)

A **Really**, **Simple** way  
::v-click
to **Syndicate** content...
::

---

<script setup>
import video from '/rhps.mp4'
</script>


:video-player{autoPlay=true :src=video @next=$nav.next .w-screen}

---
transition: slide-up
class: max-h-full overflow-hidden
---

# Really Simple Syndication
- Fetches new content **chronologically, without bias**
- Works for **blogs, podcasts, news, even YouTube**

<div class="relative max-h-1/4 text-right overflow-hidden">
<img class="inline w-1/2" src="https://media1.tenor.com/m/yr5E037WWKUAAAAC/mosh-pit-terror.gif" alt="">
</div>

---
layout: quote
class: text-2xl text-white h-full flex align-center
transition: slide-up
---

>**Imagine** you’re following 12 blogs, 4 newsletters, 15 YouTube channels, and 3 news channels.

::v-clicks

>Instead of checking each one daily, RSS collects all new posts in one place.{class='m-is-24 m-bs-12'}

>No ads, no distractions, just content.{class='m-is-0 m-bs-12'}

::

---
transition: slide-up
---

## How It Works – RSS Basics
### RSS is Just a Web Feed

1️⃣ Websites provide an **RSS feed**

```html
<link rel="alternate" type="application/rss+xml" title="Anarchy in the UK" href="example.com/feed.xml">
```

2️⃣ A **feed reader** (e.g., Feedly, Feedbro, Livemarks... ) periodically fetches updates

💻 **Example (RSS 2.0 XML):**

```xml {*}{maxHeight:'200px'}
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>RSS Title</title>
    <description>This is an example of an RSS feed</description>
    <link>http://www.example.com/main.html</link>
    <copyright>2020 Example.com All rights reserved</copyright>
    <lastBuildDate>Mon, 6 Sep 2010 00:01:00 +0000</lastBuildDate>
    <pubDate>Sun, 6 Sep 2009 16:20:00 +0000</pubDate>
    <ttl>1800</ttl>

    <item>
      <title>Example entry</title>
      <description>Here is some text containing an interesting description.</description>
      <link>http://www.example.com/blog/post/1</link>
      <guid isPermaLink="false">7bd204c6-1655-4c27-aeee-53f933c5395f</guid>
      <pubDate>Sun, 6 Sep 2009 16:20:00 +0000</pubDate>
    </item>

  </channel>
</rss>
```

---
transition: slide-up
---

## Time for history
yes, it's old, yes it's XML  
but it could have been worse...

<div class="flex gap-8">

::v-clicks

- **1999**: Netscape creates RSS 0.90  
  **RDF** **S**ite **S**ummary  
  RDF is ... pretty hardcore

- Also **1999**: RSS 0.91  
  **Rich** **S**ite **S**ummary  
  no more RDF, but still pretty hardcore

- **2000**: RSS 1.0  
  **RDF** **S**ite **S**ummary  
  RDF is back bitches!

- **2002**: RSS 2.0  
  **Really** **S**imple **S**yndication  
  XML FTW!

::

::v-clicks

- **2003-05**: Atom under IETF  
  **Atom**ic **S**yndication  
  still XML, just 'better'  
  Widely used, but never really replaced RSS

- **2017**: **JSON** **F**eed  
  JSON! But never really took off

::

</div>

![it's history](https://media1.tenor.com/m/eNLQOvPhejEAAAAC/history-lincoln.gif){.w-40.absolute.top-0.right-0}

---
transition: slide-up
---
## Baked into the (good) browsers

![firefox live bookmarks](/live_bookmarks.png)

Image source: [mozilla.org](https://support.mozilla.org/en-US/kb/live-bookmarks)
---
transition: slide-up
---

## Supported by _not yet evil_ corporations

![google reader](https://platform.theverge.com/wp-content/uploads/sites/2/chorus/assets/2147505/20130211-10455160-4-IMG_3044.JPG?quality=90&strip=all&crop=0,0,100,100){.w-1/2}

Image source: [theverge.com](https://www.theverge.com/23778253/google-reader-death-2013-rss-social)
---
transition: slide-up
---

## So... how come I never heard of it?

![sad Cobain](https://media1.tenor.com/m/9q5hjOu2lRAAAAAC/kurt-cobain-smile.gif)

---
transition: slide-up
---

<v-clicks>

### Google killed reader in 2013 🔫

>"Lack of interest"

or ... because they released google plus in 2011?

### Facebook and Twitter gradually dropped support 🔫

>"Declining popularity"

or ... because they wanted to keep you on their platform?

### Firefox removed live bookmarks in 2018 ⚰️

>"Focus on other things"

</v-clicks>

---
layout: center
---
<script setup>
import video from '/shot_me_down.mp4'
</script>

:video-player{:src=video autoPlay=true .w-screen @next=$nav.next}

---
transition: slide-up
---

## And yet...

Hope remains{v-click}

Because{v-click}

---
transition: slide-up
---

# RSS is not dead!
# It's gone underground.{v-click}

![underground](https://media1.tenor.com/m/dkEBvhaDmjAAAAAd/party-diplo.gif){v-click .absolute.inset-0.w-full.z--1 fade}

---
transition: slide-up
---

## It's still implemented

- [hln.be](https://www.hln.be/)
- [gitlab.com/ikdoeict/public/vakken](https://gitlab.com/ikdoeict/public/vakken/)
- [css-weekly.com](https://css-weekly.com/)
- [npr.org](https://www.npr.org/)
- [indieweb.org](https://indieweb.org/)
- [theverge.com](https://www.theverge.com/)
- [techcrunch.com](https://techcrunch.com/)
- ...

Even YouTube never really dropped it

---
transition: slide-up
layout: two-cols
---

## People still want

- to follow content **chronologically**
- without **ads** and **trackers**
- without **paywalls** and **subscriptions**
- without **influencers** and **brands**
- without **data mining** and **privacy violations**
- without **engagement** and **addiction**
- without **manipulation** and **censorship**
- without **recommendations** and **trending**

::right::

<div class="flex flex-wrap gap-4">

![Internet for the people](/internet_for_the_people.png){.w-28}

![Indieweb](/indieweb.png){.w-48}

![Mozilla](https://www.mozilla.org/media/img/foundation/annualreport/2024/articles/1-3-brand-logo.b6f37611bc45.gif){.w-48}

![Tor](https://blog.torproject.org/there-are-many-ways-help-tor-take-back-internet/lead.png){.w-48}

![Mastodon](https://upload.wikimedia.org/wikipedia/commons/d/d5/Mastodon_logotype_%28simple%29_new_hue.svg){.w-28}

![Lemmy](https://upload.wikimedia.org/wikipedia/commons/5/52/Lemmy_logo.svg){.w-28}

</div>

---
transition: slide-up
layout: image-right
image: https://media1.tenor.com/m/KAEd2ywSnmQAAAAd/bernie-stand-up-and-change-the-damn-system-bernie-change.gif
---

## So, what can you do?

- **Publish your own RSS-feed**
- Subscribe to others
- Support aggregators
- Spread the word
- Rage against the machine

**👀 Demo Time**{class='m-bs-28 block'}

---

## Further reading

### Specifications & Validation
- [**RSS** 2.0 Specification](https://cyber.harvard.edu/rss/rss.html)
- [**Atom** Syndication Format](https://datatracker.ietf.org/doc/html/rfc4287)
- [RSS **Validation** service](https://validator.w3.org/feed/)

### Browser Addons
- [**Feedbro** addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/)
- [**Livemarks** addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/livemarks/)

### Articles
- [**Lifewire** - What is an RSS feed?](https://www.lifewire.com/what-is-an-rss-feed-4684568)
- [**OpenRSS.org** - What are RSS feeds](https://openrss.org/guides/what-are-rss-feeds)

---
layout: center
---

:Youtube{id=8de2W3rtZsA .w-screen.aspect-16/9}