# rainydays-ca

Course assignment

How the navigation bar works:

It is fully responsive and its only done with CSS. No javascript!
I gave the .header class a position property with the value fixed to make it stay on top of the screen.
Also gave it the z-index property with a high number to make sure it goes over everything else.

Then I floated the logo left to make it stay on the left side. I gave the .header and .menu class
(which targets the links) the property clear and value both to force the links underneath the logo on the
left side. I also gave it a max height transition of .2s ease-out to give it the animation of closing/opening
when you press the hamburger menu.

To create the hamburger menu I styled the span element inside the label element to get
a small line. Then I gave it two pseudo classes before and after to replicate that line in the same spot,
but then push the after class with top: -5px, and the before class with top: 5px. This makes three lines.
The pseudo classes also got a transition property for the open/closed animation.
When you open the hamburger the one in the middle gets display none and the two others rotate to form an X.

The input checkbox is given the display property with value none to make it hidden.

Since the label is linked to the input checkbox we can also just press the label. The input is hidden while
the label is styled to look like the hamburger menu. And when the input is in its checked state the dropdown
menu will appear (since the .menu class is the sibling of the input) and the label will form the X.
