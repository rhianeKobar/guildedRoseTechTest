# Gilded Rose Tech Test

The gilded rose tech test involves taking [pre-existing code](https://github.com/emilybache/GildedRose-Refactoring-Kata), adding tests and adding to the main method of the gilded rose class to include a new type of item. You must also make some assumptions on how the programme works based on the list of requirements given. 

## Approach

- Read through the specification.
- Chose the language to complete the test. I chose Typescript.
- Identify and understand the testing framework used. Mocha.js.
- Read through the exiting code and attempt to understand it what it's doing.
- Modify the existing test to further my understanding of the code.
- Write passing tests for the exisiting code to satify the requirements in the documentation. This also helped in understanding the code.
- Note assumptions in README.md.
- Write tests for new item.
- Modify UpdateQuality method to include new item conditions.
- Update README.md.
- Refactor 1: refactor the gildedRose class to have a new method processItem. This allows the owner of the Guilded Rose to add new types of items and set the contraints for them. 
- Refactor 2: Move the item class to a new file and test it.

## Assumptions

```
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality 
```
- The sellIn date of Sulfuras is always 0, one item has been changed to reflect this. 
- Sulfuras items can have a quality above 50.
- Sulfuras items do not increase or decrease in quality.

```
“Aged Brie” actually increases in Quality the older it gets
```
- The quality of the Aged Brie increases by 2 after the sellIn date

## Dependencies

For testing Mocha and Chai with myc as the command line interface are being used.

Follow [these instructions](https://www.npmjs.com/package/nyc) to install nyc


## Testing

To increase readability, the tests have been grouped into "Regular constraints" and "Specialty contraints" with "Specialty constraints" having several subsections. 
