[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/nVsM4ivD)

# RevoU Week 3 Assignment
Improves something that you have created last week with advanced HTML and CSS technique

## Assignment Information
1. I reworked my last week assignment to make it looks more modern with similar concept of [warframe website](https://warframe.com) as reference.
2. Google font is used in this project, with Roboto Sans-Serif as main font used. I also used Orokin-based language font from [warframe forum](https://forums.warframe.com/topic/339630-orokintenno-font-v2/) post.
3. Text shadow are applied for text on top of images to make it more clearer.
4. News section are made using Asymmetrical Grid, with 4x4 size. top ones are 2x4 while the bottom parts are both 2x2 height-width wise.
5. Color picker is used to change Form background and Date is added for... some reason.
6. I used Transition for button hover and Animation for loading screen.
7. Speaking of which, there is Spiral loading screen meant to hides rough performance impact from uncompressed image (my bad, im too lazy to optimize everything).

## Advanced Information
1. I managed to get 100 on both Accessibility, Best Practice, and SEO by the time of writing. It's solved by adding "aria-label" properties on links and other "invisible" elements.
2. Day and Night mode is made by hiding checkbox and adding bunch of transition magic to make it FEEL like sliding buttons.
3. Carousel is added at the bottom of News section, purely from css. I beg thee not to explain it in-depth because I made it at the dawn of night half-asleep. It Just Works:tm:.
4. And speaking of half-asleep idea, I also made pure CSS animation of devious little creature, can be found at the footer of the page. **WARNING: it might be quite loud and scary**

## Additional information
if Smooth Scrolling doesnt work, you can try enabling it by following [this tutorial](https://www.majorgeeks.com/content/page/how_to_enable_or_disable_smooth_scrolling_in_google_chrome.html#:~:text=If%20your%20Google%20Chrome%20seems,on%20the%20bottom-right%20corner.)

Media query are optimized for 1440px and 425px, with small adjustment at 1024px and 768px.
!important is used for screen above 426px to fix Mobile's burger menu sometimes hides navbar when transitioned to larger screen size.

### Deploy Link
https://musical-scone-cc855b.netlify.app

### Lighthouse Score
Mobile:
![lighthouse score all 100 mobile](/Assets/Images/Readme/mobilePerformance.png "Lighthouse score mobile")

Desktop:
![lighthouse score all 100 desktop](/Assets/Images/Readme/desktopPerformance.png "Lighthouse score desktop")
