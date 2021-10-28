import { Item } from "./item";

export class GildedRose {
	
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		for (let i = 0; i < this.items.length; i++) {
			this.processItem(this.items[i])
		}
		return this.items;
	}

	private processItem(item) {
		switch (item.name) {
			case 'Aged Brie':
				if (item.quality < 50) {
					if (item.sellIn < 0) {
						item.quality++;
					}
					item.quality++;
				}
				item.sellIn--;
				break;
			case 'Backstage passes to a TAFKAL80ETC concert':
				if (item.quality < 50 && item.sellIn > 0) {
					if (item.sellIn < 11) {
						item.quality++;
					}
					if (item.sellIn < 6) {
						item.quality++;
					}
					item.quality++;
					item.sellIn--;
				} else if (item.sellIn < 1) {
					item.quality = 0;
				}
				break;
			case 'Sulfuras, Hand of Ragnaros':
				item.sellIn = 0;
				item.quality = item.quality;
				break;
			case 'Conjured Mana Cake':
				item.quality = item.quality - 2;
				item.sellIn--;
				break;
			default:
				if (item.quality != 0) {
					if (item.sellIn < 1) {
						item.quality--;
					}
					item.quality--;
				}
				item.sellIn--;
		}
	}
}
