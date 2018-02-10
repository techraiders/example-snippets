/*Strings can create a whole host of problems within any programming language.  Whether it's a simple string, a string containing emojis, html entities, and even accented characters, if we don't scrub data or make the right string handling choices, we can be in a world of hurt.

While looking through Joel Lovera's JSTips repo, I spotted a string case that I hadn't run into yet (...I probably have but didn't notice it):  sorting accented characters to get the desired outcome.  The truth is that accented characters are handled a bit differently than you'd think during a sort:*/

// Spanish
['único','árbol', 'cosas', 'fútbol'].sort();
// ["cosas", "fútbol", "árbol", "único"] // bad order

// German
['Woche', 'wöchentlich', 'wäre', 'Wann'].sort();
// ["Wann", "Woche", "wäre", "wöchentlich"] // bad order


/*Yikes -- accented characters don't simply follow their unaccented character counterparts.  By taking an extra step, i.e. localeCompare, we can ensure that our strings are sorted in the way we likely wanted in the first place:*/

['único','árbol', 'cosas', 'fútbol'].sort(function (a, b) {
  return a.localeCompare(b);
});
// ["árbol", "cosas", "fútbol", "único"]

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort(function (a, b) {
  return a.localeCompare(b);
});
// ["Wann", "wäre", "Woche", "wöchentlich"]

// Or even use Intl.Collator!
['único','árbol', 'cosas', 'fútbol'].sort(Intl.Collator().compare);
// ["árbol", "cosas", "fútbol", "único"]

['Woche', 'wöchentlich', 'wäre', 'Wann'].sort(Intl.Collator().compare);
// ["Wann", "wäre", "Woche", "wöchentlich"]

/*Localization is already a big challenge without the added confusion that comes with accented characters.  Keep localeCompare and Intl.Collator in mind every time you want to sort strings!*/