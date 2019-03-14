# Nike Shoe Webstore

A little custom web store for Nike shoes. Used to demonstrate a number of concepts in HTML and CSS.

## Tasks

"Fork" this repository, then "clone or download" (green button) this `store` repo and work on the tasks below.

### Week 4

#### In-Class
1. Style the `.nav` and its children to make it look a bit more like a _production-ready_ navigation menu you might see in a real web store
  * We modeled the [Apple homepage navigation](http://apple.ca)

#### Homework
1. Apply a `@media` query at the breakpoint of your choice to turn `.all-products` from a 1-column static layout of blocks, into a 2-column grid.
  * Definitely use `min-width` to determine your breakpoint, designing from smallest to largest ("mobile first")
2. Now create a bigger breakpoint and go for a 4-column grid, lining up all of the four products.
  * Do all 3 layouts co-exist nicely?

### Week 5

#### In-Class
1. Set the `.nav` to be `fixed` to the top of the `viewport`
  * Collapse the `.nav-list` so that it drops over top of the content
  * Ensure there is no content on the page that becomes _inaccessible_
2. Set the `.product-details` to overlap it's `img` within the `.product` container
  * Give it a semi-transparent background and stretch it over the entire `.product`
  * Align the text elements to the center, both vertically and horizontally
  * Use `z-index` to ensure the `.nav` always stays above our `.product-details`
3. Hide the `.product-details` using `opacity: 0;` and when someone hovers over the `.product`, set the `.product-details` of that item back to `opacity: 0;`
  * Animate it with `transition`

#### Homework
1. Apply the `reset.css` to this project by pasting a copy of it into our `/styles` folder and attaching it to `index.html`, by pasting the following `link` into the `<head>` just before our stylesheet (`styles.css`): `<link rel="stylesheet" href="styles/reset.css">`
  * Compare the _before_ and _after_ by commenting in/out the reset `<link>`
  * Make the necessary adjustments to `styles.css` to ensure the page looks _as good or better_ than it did pre-reset
2. Add a "hamburger" menu button (the three-line icon) to the `.nav`
  * Start by using an image inside of a button (an `.svg` scales well), you can find a free-use version through a google image search
  * Next, challenge yourself by drawing your own "hamburger" button only using HTML and CSS (no image)! The benefit of drawing it yourself is that you can then animate the top and bottom lines to rotate into an "X" to close the menu once open! Use the following HTML to achieve that:
  ```
  <button type="button" name="hamburger" class="btn hamburger">
    <div></div>
    <div></div>
    <div></div>
  </button>
  ```
3. Align the button to the right side of the `.nav` in your default (smallest) viewport layout, while keeping the logo in the middle
  * Try this using `position`
  * Try this using `grid`
    * If you use `grid` and apply it to the `.nav`, the `.nav-list` will now be part of the grid too! Be sure to consider that and apply `grid-column` if necessary to stretch the `.nav-list` across any columns you created to setup the `.logo` and `.hamburger`
  * _Which method do you prefer?_
4. Ensure that when the screen hits your larger breakpoints, that the `.nav` transforms better suit the available space
  * Remove the `.hamburger` button using CSS
  * Expose the `.nav-list` and align its children into a single row and align it to the right
  * Align the `.logo` over to the left
  * Do you still prefer `position` over `grid`, or `grid` over `position`?
5. Clean up and style any odds/ends that are left unstyled to date (the footer, etc) and let's call this example a wrap!
