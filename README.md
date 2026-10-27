# kitchen-screen-lite

Menu, stock and shopping-list display for repurposing old screens. Everything is stored locally.

A kitchen screen for an old tablet. It shows the week's menu, what's in the fridge and freezer, and kitchen timers, plus an optional recipe book, meals list and shopping list. It needs no account and no server: everything is saved on the tablet itself.

## What's in it

| | Basic | Expanded | Primo |
|---|---|---|---|
| Weekly menu (lunch, dinner, who's cooking, notes) | ✓ | ✓ | ✓ |
| Meals list the menu picks from | ✓ | ✓ | ✓ |
| Shopping list | ✓ | ✓ | ✓ |
| Kitchen timers (several at once) | ✓ | ✓ | ✓ |
| Fridge and freezer stock, across several freezers | | ✓ | ✓ |
| Leftovers: "anything left from last night?", portions, and "Eaten" on the menu | | ✓ | ✓ |
| Recipe book, with tap-to-start timers in the steps | | ✓ | ✓ |
| Seasonal looks that change on their own | | | ✓ |
| Holiday looks: Halloween, Thanksgiving, Christmas, New Year, Valentine's, St Patrick's, Easter, Fourth of July | | | ✓ |
| Birthdays (people and pets) and anniversaries: a heads-up two weeks ahead, then a card and confetti on the day | | | ✓ |

The package is chosen in **Settings → What this kitchen has**, and each extra can be switched on or off individually.

## Setting up a customer's tablet

1. On the tablet, install **Fully Kiosk Browser** from the Play Store. Set its Start URL to the site address (below), and turn on *Keep Screen On* and *Start on Boot*.
2. The screen opens on **Set up this kitchen**. Fill in:
   - **Who cooks:** the household's names, plus options like Takeaway or Eating out.
   - **Freezers** and **Freezer headings** (Expanded only): a short code and a name for each freezer (e.g. `KF` · Kitchen freezer), and how their freezer list is grouped. A heading with "snack" or "lunch" in its name is offered when picking lunches.
   - **Package:** Basic, Expanded or Primo, and **Look:** dark or light.
   - **Birthdays & anniversaries** (Primo only): a name, the month and day, and whether it's a person, a dog, a cat or an anniversary. **Falling decorations** can be set to all year, only on special days, or off. The colours and birthday cards stay either way.
3. Tap **Done**, then go to **Settings → Save a backup** once, so the backup step has been tried before you leave.

Settings can be changed later from the Settings tab. Tapping the clock five times opens a preview of every look, which is handy for showing customers.

## Backups

The data lives only in the tablet's browser storage. **Settings → Save a backup** downloads a `kitchen-backup-DATE.json` file. **Restore from a backup** puts one back, on the same tablet or a new one. The Settings tab shows how long it has been since the last backup, and turns red after two weeks.

If the backup or restore buttons do nothing inside Fully Kiosk, check its settings for file downloads and uploads under its web-content options, or do the backup once from Chrome on the same tablet. Note that Chrome and Fully keep **separate** storage.

Clearing the browser's data, or uninstalling the kiosk app, erases the kitchen. Save a backup first.

## Recipes

Recipes are added on the screen: one ingredient per line, one step per line, and a line ending in a colon becomes a small heading. Cooking times in the steps ("bake for 30 mins") turn into tap-to-start timers.

**Settings → Import recipes from a file** also accepts an HTML recipe collection, where each recipe is an element with class `recipe` and an `h3` title, grouped under `section-header` elements.

## Hosting

It's a static site with no build step: `index.html`, `sw.js` (keeps it working offline after the first load), `manifest.json` and `icon.svg`. It's published with GitHub Pages from the `main` branch. Every customer's tablet loads the same page, so an update here reaches them all the next time their screen reloads. Their data is untouched by updates.

Nothing personal belongs in this repository. Each household's details are entered on their own tablet and never leave it.
