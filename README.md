# Sunny's Corner Website

A beginner-friendly static website based on the original design in this README: warm colors, a hero section, a "press for joy" button, cards, and a footer.

## File structure

```txt
intern-website/
├── index.html          # Page content: words, sections, buttons, links
├── css/
│   ├── variables.css   # Design tokens: colors, fonts, spacing
│   ├── base.css        # Shared styles: reset, layout, buttons, utilities
│   ├── nav.css         # Navigation/header styles
│   ├── hero.css        # Hero intro and sun illustration styles
│   ├── learn.css       # "Wander around" card grid styles
│   ├── steps.css       # Joy section + good-things list styles
│   └── footer.css      # Footer styles
├── js/
│   └── app.js          # Small interactions: typing, reveal, joy button
└── assets/
    └── images/         # Put images here later
```

## How to edit safely

1. **Change text first:** open `index.html` and edit the words between tags.
   - Example: `<h1>Hi, come on in.</h1>`
2. **Change colors/fonts next:** open `css/variables.css`.
   - Example: change `--color-accent: #F5C518;`
3. **Change section layout last:** edit the matching section file.
   - Navigation? `css/nav.css`
   - Hero? `css/hero.css`
   - Cards? `css/learn.css`
   - Footer? `css/footer.css`

## Beginner rule

Try not to rename `class="..."` values in `index.html`. CSS uses those class names to find and style elements.

## Add a new card

In `index.html`, find `.learn__grid`, copy one block like this, paste it under the others, and change the text:

```html
<article class="learn-card reveal-on-scroll">
  <div class="learn-card__icon" aria-hidden="true">★</div>
  <h3 class="learn-card__title">New card title</h3>
  <p class="learn-card__body">New card description.</p>
</article>
```

## Change joy messages

Open `js/app.js` and edit the `messages` list. Keep quotes and commas.

## Run locally

Open `index.html` in a browser, or use a simple local server if your editor provides one.
