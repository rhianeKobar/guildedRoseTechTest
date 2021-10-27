import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

	describe('Regular constraints', function(){

		it('should decrease the quality and sell by date of an item by 1', function() {
        const gildedRose = new GildedRose([ new Item("Eye ghost", 5, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(4);
        expect(items[0].sellIn).to.equal(4);
    });

		it('should decrease the quality of a normal item twice as fast once the sellIn date has passed', function() {
			const gildedRose = new GildedRose([ new Item("Eye ghost", 0, 20) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].quality).to.equal(18);
		});

		it('should never give an item a negative value for quality', function() {
			const gildedRose = new GildedRose([ new Item("Eye ghost", 0, 0) ]);
			const items = gildedRose.updateQuality();
			expect(items[0].quality).to.equal(0);
		});

	});

	describe('Specialty constraints', function(){

		describe('Sulfuras', function(){

			it('should neither increase or decrease the quality or sellIn date of Sulfuras', function() {
				const gildedRose = new GildedRose([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(80);
				expect(items[0].sellIn).to.equal(0);
			});
	
		});

		describe('Aged Brie', function(){

			it('should not increase the quality of an item above 50', function() {
				const gildedRose = new GildedRose([ new Item("Aged Brie", 2, 50) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(50);
			});
	
			it('should increase the quality of aged brie as it gets older', function() {
				const gildedRose = new GildedRose([ new Item("Aged Brie", 2, 0) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(1);
				expect(items[0].sellIn).to.equal(1);
			});

			it('should still increase the quality of aged brie after the sellIn date', function() {
				const gildedRose = new GildedRose([ new Item("Aged Brie", -10, 40) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(42);
			});
			
		});
		
		describe('Backstage passes', function(){

			it('should increase the quality of the backstage pass by 2 if there are less than 11 days to the concert', function() {
				const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(22);
			});
	
			it('should increase the quality of the backstage pass by 3 if there are less than 6 days to the concert', function() {
				const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(23);
			});

			it('should decrease the quality to 0 if the concert has passed', function() {
				const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(0);
			});

			it('should increase the quality of the backstage pass by 1 if there are more than 10 days to the concert', function() {
				const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(21);
			});
			
		});

		describe('Conjured Mana Cake', function(){

			it('should decrease quality twice as fast', function() {
				const gildedRose = new GildedRose([ new Item("Conjured Mana Cake", 3, 6) ]);
				const items = gildedRose.updateQuality();
				expect(items[0].quality).to.equal(4);
			});
	
		});

	});

});
