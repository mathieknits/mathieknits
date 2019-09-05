productImage = null;
productName = 'namePlaceholder';
brand= 'brandPlaceholder';
materials = 'matsPlaceholder';

const app = new Vue ({
	el: '#soldMiscApp',
	data: {
		name: 'placeholder',
		productImage: productImage,
		brand: brand,
		materials: materials,

		items: [
			{	name: 'ARCTIC GRAYLING',
				productImage: './img/misc/sold/arcticgrayling.jpg',
				brand: 'MADELINETOSH',
				materials: 'Plaid Blanket & Costeau',
			},

			{	name: 'CONIFERCONE',
				productImage: './img/misc/sold/conifercone.jpg',
				brand: 'MADELINETOSH',
				materials: 'Plaid Blanket & Kitten',
			},

			{	name: 'SLIPPERS',
				productImage: './img/misc/sold/slipper.jpg',
				brand: 'MADELINETOSH',
				materials: 'Leo & Kitten',
			},

				]
			}
});