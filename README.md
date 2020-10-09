**Milestone Project 2: Interactive Frontend Development - Code Institute**

# League Lore.

A website for users to find more information about champions in League of Legends. The site is designed for beginner players 
to get basic information on any champion in the game.  There is an option for different languages to allow for a larger variety 
of users.

# Demo

![Responsive-Mockup](https://github.com/bob134552/LeagueLore/blob/master/assets/images/mockup/responsive_mockup.jpg)

A live version of the site can be found [here](https://bob134552.github.io/LeagueLore/). 

# UX

To make a responsive website that starter League of Legends players can use to view information on champions within the game.

Balsamiq was used to create the following wireframe:

[Balsamiq Mobile and Desktop Wireframe](https://github.com/bob134552/LeagueLore/blob/master/assets/wireframe/LeagueLoreWF.pdf)

## The Strategy Plane

The objective is to create a site with the goal to let new and experienced players of League of Legends be able to view the base information
on the champions within the game. The immediate requirements are a search bar and language option for non native speakers, a grid to display 
all current champions within the game and an information page that appears to display information on the selected champion along with a spotlight
video using the youtube API to search for the video.

## The Scope Plane

The website's requirement will be to allow as much choice to the user as possible. Therefore to acheive this a dropdown is available for the user to change language,
a search bar with autocomplete function for users to look for champions that they know the name of or part of the name, a grid that the user can browse available champions in the game
and a contact page where users can submit ideas on what else they would like to see on the site.

## The Structure Plane

The layout of the site would be a 2 page site, a champion page and contact page. Through these pages
the user will have access to a grid from which they can either use the search bar provide to find champions or
a particular champion they are looking for. On selection of a champion the grid would be cleared and filled with
information about the selected champion along with a youtube video of the champions spotlight (if available). 
There is also pagination available for mobile and tablet.

## The Skeleton Plane

The skeleton of the site was designed using Balsamiq and can be found in the link above (see UX section).

## The Surface Plane

The project is a 2 page site, a main page where the user is presented with a grid to choose a champion or a search bar to search
for a specific champion. While on the main page the user is able to click on the champions displayed and see more information
available for that champion. The second page is a contact page where users are able to submit future ideas on what could be changed
or added to the site.

The [Aquire Light font](https://befonts.com/aquire-free-font.html) is used for desktop to make the title more stylish and appeal more to
the user. If the font is not compatible for the device viewing the site, the font defaults to "fantasy".

## User Stories

- As a user, I want to be able to search for a specific champion or a champion that looks interesting.
- As a user, I want to be able to change language if I'm not a native English speaker.
- As a user, I want to be able to suggest changes that could be made to make the site more appealing in the future.
- As a user, I want the grid to be compact in mobile and tablet view to prevent having a large page.

# Features

The index page has 4 sections along with a navbar.

The sections are as follows:

- A section containing callout and site name.
- A section containing the champions grid.
- A section for the champion lore to be built in from the Riot API.
- A section for the champion spotlight video to be placed in from the Youtube API.

## Existing Features

The existing features are:

- Language selection that is remembered if page is refreshed.
- Search bar with autocomplete to display all names that match.
- Pagination for grid on mobile and tablet view to make it easier to use.
- Youtube video for selected champion (currently only available in English).
- Contact form to email site creator with site ideas and improvements.

## Features Left to Implement

- Youtube API search for other languages (search more than english riot games channel).
- Add in in depth information for champion ability cooldowns and damage.
- Add in item builder and rune/ mastery information.
- Slideshow for each champions available skins.
- Add in recommended builds for champions.

## Technologies Used

- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
  - To create functions and get data from API and external JSONs.
- [Balsamiq](https://balsamiq.com/)
  - For a basic wireframe mockup.
- [HTML](https://en.wikipedia.org/wiki/HTML)
  - To create the site.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
  - To create custom styles.
- [JQuery](https://jquery.com)
  - To simplify DOM manipulation.
- [Bootstrap](https://getbootstrap.com/)
  - For better responsiveness.
- [Font Awesome](https://fontawesome.com/)
  - To add icons to navbar.
- [Youtube API](https://developers.google.com/youtube/v3)
  - To search youtube videos.
- [EmailJS](https://www.emailjs.com/)
  - To link contact page to google email account.
- [Riot API](https://developer.riotgames.com/docs/lol)
  - To obtain data on champions and search specific champions.

# Testing

The site was tested on several devices and browsers to ensure responsiveness throughout.

Browsers: Chrome, Microsoft Edge and Safari

Devices included: Samsung Galaxy S10+, iPhone X, Samsung Galaxy Tab A, Desktop PC and MacBook Air.

The custom font "Aquire Light" only works on desktop.

## Testing based on user stories:

## As a user, I want to be able to search for a specific champion or a champion that looks interesting.

1. Filling in search bar brings up an autocomplete dropdown underneath the search bar to help narrow down a search, hitting enter fades the grid 
and builds the champions lore and video section.
    1. Searching with a blank search bar returns a warning that it is required to be filled.
    2. Searching with a name that doesn't match notifies user underneath the search bar that there is no result.

2. Clicking on a champions image in the grid, fades the grid and builds the champions lore section and video section.

3. In mobile and tablet view the grid is reduced to 20 champions with pagination below the grid.
    1. Previous button is disabled on first page.
    2. Clicking on next button moves to next 20 champions until there are no more champions to display then next button becomes disabled.

## As a user, I want to be able to change language if I'm not a native English speaker.

1. Clicking on the dropdown next to the search bar brings up a list of available language options with English as default.
    1. Changing the language rebuilds the grid to display names in selected language.
    2. Refreshing the page remembers the newly selected language.
    3. Clicking on a champion builds the champions lore in the selected language.
        - Returning from the lore to grid remembers the selected language.

## As a user, I want to be able to voice my options on changes that could be made to make the site more appealing in the future.

1. Leaving either name, email or idea box empty notifies user that they are required to be able to send.
2. After submitting form user is notified that email has been sent as the send button becomes disabled and text changes to notify user that the email has been sent.
3. After submitting the form is cleared.

## As a user, I want the grid to be compact in mobile and tablet view to prevent having a large page.



# Bugs and Problems


## Validaton and Beautify

The code for index.html, contact.html and style.css was beautified using [Code Beautify](https://codebeautify.org/).

In addition, the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [W3C HTML Validator](https://validator.w3.org/#validate_by_input+with_options) was used to validate the code.

## How the project works


# Deployment

The project was deployed through Github pages, from the master branch.

Additionally the site will be updated after any git push to the master branch.


### How to run code locally.

To run the site locally you can visit [here](https://github.com/bob134552/LeagueLore) and click on the "Code" drop down option, you then copy the HTTPS code provided into a code editor of your choice.

# Credits

## Content

Contents provided from the Riot games API and the Riot games youtube channel.

## Media



## Acknowledgements
