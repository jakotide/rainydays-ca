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
