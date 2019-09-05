productImage = null;
productName = 'namePlaceholder';
brand= 'brandPlaceholder';
materials = 'matsPlaceholder';

const app = new Vue ({
	el: '#soldHatApp',
	data: {
		name: 'placeholder',
		productImage: productImage,
		brand: brand,
		materials: materials,

		items: [
			{	name: 'CAMBRIAN',
				productImage: './img/hats/sold/cambrian.jpg',
				brand: 'MADELINETOSH',
				materials: 'Plaid Blanket',
			},

			{	name: 'CARIBOU',
				productImage: './img/hats/sold/caribou.jpg',
				brand: 'MADELINETOSH',
				materials: 'WB, TripWire, & CT',
			},

			{	name: 'CARDINAL',
				productImage: './img/hats/sold/cardinal.jpg',
				brand: 'MADELINETOSH',
				materials: 'Cardinal',
			},

			{	name: 'ELEMENT',
				productImage: './img/hats/sold/element.jpg',
				brand: 'MADELINETOSH',
				materials: 'Costeau',
			},

			{	name: 'GINGER',
				productImage: './img/hats/sold/ginger.jpg',
				brand: 'MADELINETOSH',
				materials: 'Glazed Pecan',
			},

			{	name: 'WILDBERRY',
				productImage: './img/hats/sold/wildberry.jpg',
				brand: 'MADELINETOSH',
				materials: 'Wildlings',
			},

			{	name: 'APOLLINARIS',
				productImage: './img/hats/sold/apollinaris.jpg',
				brand: 'MADELINETOSH',
				materials: 'Fieldwork & TonerCart',
			},

				]
			}
});