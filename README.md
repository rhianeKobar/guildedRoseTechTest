### Assumptions

```
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality 
```
From this constraint, I've made the assumption that the sellIn date of Sulfuras is always 0. The Sulfuras items that came with the code have a quality of 80 and I've decided to leave them at that however one came with a sellIn date of -1 and I have changed that to 0.

```
“Aged Brie” actually increases in Quality the older it gets
```
The quality of the aged brie increases by 2 after the sellIn date

### Testing

To increase readability, the tests have been grouped into "Regular constraints" and "Speciality contraints". Speciality constraints has a subsection for conjured items called "Conjured constraints"