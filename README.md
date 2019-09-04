# Edible Beats Promo Bar

## Feature Requests / Bugs
Contact [Matt Wiggins](mailto:matt@consumeandcreate.co) at Consume & Create or submit a pull request.

## Install
Two easy steps.

1. Put this in your markup where you would like to place the promo and set your desired position, background color, font color and font family. Leave the height set to 40px if you don't want a jump / reflow when the promo bar renders.
```
<div id="edible-beats-promo-bar" style="height: 40px !important" data-settings='{"position": "inline", "backgroundColor": "#ff0", "fontColor": "#fff", "fontFamily": "Helvetica"}'></div>
```

2. Add the following JS embed anywhere on the page.
```
<script src="edible-beats-promo-bar.js" defer></script>
```

## Style

Optionally, you can style the promo bar yourself. To do this, remove the `data-settings` attribute and target it with your own CSS.

```
<div id="edible-beats-promo-bar" style="height: 40px !important"></div>
```
