productImage = null;
productName = 'namePlaceholder';
brand= 'brandPlaceholder';
materials = 'matsPlaceholder';

const app = new Vue ({
	el: '#soldMittenApp',
	data: {
		name: 'placeholder',
		productImage: productImage,
		brand: brand,
		materials: materials,

		items: [
			{	name: 'ESTUARY',
				productImage: './img/mittens/sold/estuary.jpg',
				materials: 'Snake & Misfortune',
			},

			{	name: 'SEAFOAM',
				productImage: './img/mittens/sold/seafoam.jpg',
				materials: 'Venti Dragon Moch & Thyme',
			},

			{	name: 'SEQUOIA',
				productImage: './img/mittens/sold/sequoia.jpg',
				materials: 'Carbon Dating & Fair Isle Sweater',
			},	

			{	name: 'MONARCH',
				productImage: './img/mittens/sold/monarch.jpg',
				materials: 'Cinnamon Dolce & Peat',
			}

			{	name: 'AUTUMN',
				productImage: './img/mittens/sold/autumn.jpg',
				materials: 'Saffron & Peat',
			},

			{	name: 'SAGEBRUSH',
				productImage: './img/mittens/sold/sagebrush.jpg',
				materials: 'Boxwood & Fair Isle',
			},	

			{	name: 'HONEY',
				productImage: './img/mittens/sold/honey.jpg',
				materials: 'Librarians Dream & Carbon Dating',
			},		

			{	name: 'ARBOREAL',
				productImage: './img/mittens/sold/arboreal.jpg',
				materials: 'Joshua Tree & W. Willow',
			},

			{	name: 'HONEY BADGER',
				productImage: './img/mittens/sold/honeybadger.jpg',
				materials: 'TChalla & TinyHouse',
				etsy: 'https://www.etsy.com/MATHIEKNITS/'
			},

			{	name: 'BONFIRE',
				productImage: './img/mittens/sold/bonfire.jpg',
				materials: 'The Red Woman & Superb',
			},

			{	name: 'BADLANDS',
				productImage: './img/mittens/sold/badlands.jpg',
				materials: 'Liquid Gold & Woodstock',
			},

			{	name: 'CAVERN',
				productImage: './img/mittens/sold/cavern.jpg',
				materials: 'TChalla & TripWire',
			},

			{	name: 'CELESTIAL',
				productImage: './img/mittens/sold/celestial.jpg',
				materials: 'Wildling & Paper',
			},	

			{	name: 'LYRETAIL',
				productImage: './img/mittens/sold/lyretail.jpg',
				materials: 'Wildling & Kitten',
			},	

			{	name: 'CHRYSOLINA',
				productImage: './img/mittens/sold/chrysolina.jpg',
				materials: 'New Moon & Misfortune',
			},	

			{	name: 'DENALI',
				productImage: './img/mittens/sold/denali.jpg',
				materials: 'Plaid Blanket & Whiskey B.',
			},

			{	name: 'DEVONIA',
				productImage: './img/mittens/sold/devonia.jpg',
				materials: 'Pecan Hull & Paper',
			},

			{	name: 'ELDERBERRY',
				productImage: './img/mittens/sold/elderberry.jpg',
				materials: 'New Moon & Sm. Orchid',
			},

			{	name: 'FALCON',
				productImage: './img/mittens/sold/falcon.jpg',
				materials: 'TinyHouse & TripWire',
			},

			{	name: 'CAVERN',
				productImage: './img/mittens/sold/cavern.jpg',
				materials: 'TChalla & TripWire',
			},

			{	name: 'FJORD',
				productImage: './img/mittens/sold/fjord.jpg',
				materials: 'TripWire & D.W.R.',
			},

			{	name: 'HONEY BADGER',
				productImage: './img/mittens/sold/honeybadger.jpg',
				materials: 'TChalla & TinyHouse',
				etsy: 'https://www.etsy.com/MATHIEKNITS/'
			},

			{	name: 'LYRETAIL',
				productImage: './img/mittens/sold/lyretail.jpg',
				materials: 'Wildling & Kitten',
			},	

			{	name: 'MARS',
				productImage: './img/mittens/sold/mars.jpg',
				materials: 'Life On Mars & Superb',
			},	

			{	name: 'PRAIRIE',
				productImage: './img/mittens/sold/prairie.jpg',
				materials: 'Thyme & Librarians Dream',
			},


			{	name: 'ARBOREAL',
				productImage: './img/mittens/sold/arboreal.jpg',
				materials: 'Joshua Tree & W. Willow',
			},

			{	name: 'CINNABAR',
				productImage: './img/mittens/sold/cinnabar2.jpg',
				materials: 'Cinnamon Dolce & Superb',
			},

			{	name: 'RHIZOME',
				productImage: './img/mittens/sold/rhizome.jpg',
				materials: 'Kitten & Leo',
			},

			{	name: 'RIPARIAN',
				productImage: './img/mittens/sold/riparian.jpg',
				materials: 'Peat & Misfortune',
			},	

			{	name: 'SANDHILL',
				productImage: './img/mittens/sold/sandhill.jpg',
				materials: 'TinyHouse & Antique Lace',
			},

			{	name: 'TIDAL WAVE',
				productImage: './img/mittens/sold/tidalwave.jpg',
				materials: 'Arch & Kitten',
			},	

			{	name: 'COASTAL',
				productImage: './img/mittens/sold/coastal.jpg',
				brand: 'MADELINETOSH',
				materials: 'Paper & Arch',
			},

			{	name: 'COPPER OXIDIZE',
				productImage: './img/mittens/sold/copperoxidize.jpg',
				brand: 'MADELINETOSH',
				materials: 'Carbon Dating & Virgo',
			},

			{	name: 'FLYING FOX',
				productImage: './img/mittens/sold/flyingfox.jpg',
				brand: 'MADELINETOSH',
				materials: 'WhiskeyB & TinyHouse',
			},

			{	name: 'GLACIER',
				productImage: './img/mittens/sold/glacier.jpg',
				brand: 'MADELINETOSH',
				materials: 'DWR & Kenobi',
			},

			{	name: 'JUNIPER',
				productImage: './img/mittens/sold/juniper.jpg',
				brand: 'MADELINETOSH',
				materials: 'Shire & TonerCartridge',
			},

			{	name: 'KINGFISHER',
				productImage: './img/mittens/sold/kingfisher.jpg',
				brand: 'MADELINETOSH',
				materials: 'WhiskeyB & Sabine',
			},

			{	name: 'MINERAL',
				productImage: './img/mittens/sold/mineral.jpg',
				brand: 'MADELINETOSH',
				materials: 'Malachite & LIT',
			},

			{	name: 'NAUTILUS',
				productImage: './img/mittens/sold/nautilus.jpg',
				brand: 'MADELINETOSH',
				materials: 'BrickDust & TinyHouse',
			},

			{	name: 'NOVA',
				productImage: './img/mittens/sold/nova.jpg',
				brand: 'MADELINETOSH',
				materials: 'Saffron & TonerCart',
			},

			{	name: 'PORCUPINE',
				productImage: './img/mittens/sold/porcupine.jpg',
				brand: 'MADELINETOSH',
				materials: 'TripWire & FallenCloud',
			},

			{	name: 'SHORELINE',
				productImage: './img/mittens/sold/shoreline.jpg',
				brand: 'MADELINETOSH',
				materials: 'Antique Lace & Arch',
			},

			{	name: 'SANDSTONE',
				productImage: './img/mittens/sold/sandstone.jpg',
				brand: 'MADELINETOSH',
				materials: 'TinyHouse & Canvas Tent',
			},

			{	name: 'TETON',
				productImage: './img/mittens/sold/teton.jpg',
				brand: 'MADELINETOSH',
				materials: 'TripWire & Kenobi',
			},

			{	name: 'TUNDRA',
				productImage: './img/mittens/sold/tundra.jpg',
				brand: 'MADELINETOSH',
				materials: 'WB, PH, AG & Paper',
			},

			{	name: 'ACADIA',
				productImage: './img/mittens/sold/acadia.jpg',
				brand: 'MADELINETOSH',
				materials: 'Shire & Pecan Hull',
			},

			{	name: 'ATLAS',
				productImage: './img/mittens/sold/atlas.jpg',
				brand: 'MADELINETOSH',
				materials: 'Fieldwork & Kitten',
			},

			{	name: 'CANYON',
				productImage: './img/mittens/sold/canyon.jpg',
				brand: 'MADELINETOSH',
				materials: 'Saffron & Astrid Grey',
			},

			{	name: 'EARTHSTAR',
				productImage: './img/mittens/sold/earthstar.jpg',
				brand: 'MADELINETOSH',
				materials: 'FirWreath & Astrid Grey',
			},

			{	name: 'FLORAN',
				productImage: './img/mittens/sold/floran.jpg',
				brand: 'MADELINETOSH',
				materials: 'FirWreath & Pecan Hull',
			},

			{	name: 'LICHEN',
				productImage: './img/mittens/sold/lichen.jpg',
				brand: 'MADELINETOSH',
				materials: 'Virgo & Astrid Grey',
			},

			{	name: 'MESOZOIC',
				productImage: './img/mittens/sold/mesozoic.jpg',
				brand: 'MADELINETOSH',
				materials: 'PlaidBlanket & Costeau',
			},

			{	name: 'PANGOLIN',
				productImage: './img/mittens/sold/pangolin.jpg',
				brand: 'MADELINETOSH',
				materials: 'Fieldwork & TonerCart',
			},

			{	name: 'RORQUAL',
				productImage: './img/mittens/sold/rorqual.jpg',
				brand: 'MADELINETOSH',
				materials: 'Costeau & Paper',
			},

			{	name: 'CINNABAR',
				productImage: './img/mittens/sold/cinnabar.jpg',
				brand: 'MADELINETOSH',
				materials: 'Leo & Woodstock',
			},

			{	name: 'COLUGO',
				productImage: './img/mittens/sold/colugo.jpg',
				brand: 'MADELINETOSH',
				materials: 'PlaidBlanket & Kitten',
			},

			{	name: 'COSMIC DEBRIS',
				productImage: './img/mittens/sold/cosmicdebris.jpg',
				brand: 'MADELINETOSH',
				materials: 'Costeau & WhiskeyB',
			},

			{	name: 'GRAND PRISMATIC',
				productImage: './img/mittens/sold/grandprismatic.jpg',
				brand: 'PATTONS',
				materials: 'Variegated',
			},

			{	name: 'MUSKOX',
				productImage: './img/mittens/sold/muskox.jpg',
				brand: 'MADELINETOSH',
				materials: 'WhiskeyB & Paper',
			},

			{	name: 'NARWHAL',
				productImage: './img/mittens/sold/narwhal.jpg',
				brand: 'MADELINETOSH',
				materials: 'Costeau & Paper',
			},

			{	name: 'ORDOVICIA',
				productImage: './img/mittens/sold/ordovicia.jpg',
				brand: 'MADELINETOSH',
				materials: 'PlaidB & PecanHull',
			},

			{	name: 'RADISH',
				productImage: './img/mittens/sold/radish.jpg',
				brand: 'MADELINETOSH',
				materials: 'Leo & Paper',
			},

				]
			}
});