productImage = null;
productImageB = null;
productImageC = null;
productImageD = null;
currentProductImage = null;
productName = 'namePlaceholder';
materials = 'matsPlaceholder';
etsyLink = 'etsyPlaceholder';
descript= 'Keep your neck super warm & stylish with these unique herringbone cowls this fall & winter season. These cowls are truly unique with the herringbone stitch. Fringe for added style. One of a kind! These cowls are super soft, cozy, & easy to wear! You will find yourself wanting to wear them every day.';
size= 'SIZE: Small/Medium. Appropriate for all women & teenagers.';
care= 'CARE: Gently hand wash in cold water ONLY and lay flat to dry if needed. All items are constructed in a smoke free environment, and stored properly to maintain their high quality.';



const app = new Vue ({
	el: '#cowlApp',
	data: {
		name: 'placeholder',
		price: 'placeholder',
		descript: descript,
		size: size,
		productImage: productImage,
		productImageB: productImageB,
		productImageC: productImageC,
		productImageD: productImageD,
		currentProductImage: currentProductImage,
		productName: productName,
		materials: materials,
		etsyLink: etsyLink,
		care: care,

		items: [

			{	name: 'CINNABAR',
				productImage: './img/cowls/cinnabar.jpg',
				productImageB: './img/cowls/thum/cinnabara.jpg',
				productImageC: './img/cowls/thum/cinnabarb.jpg',
				productImageD: './img/cowls/thum/cinnabarc.jpg',
				materials: 'Cinnamon Dolce & The Red Woman',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'EMBER',
				productImage: './img/cowls/ember.jpg',
				productImageB: './img/cowls/thum/embera.jpg',
				productImageC: './img/cowls/thum/emberb.jpg',
				productImageD: './img/cowls/thum/emberc.jpg',
				materials: 'Mars & Superb',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			

			{	name: 'LUNAR',
				productImage: './img/cowls/lunar.jpg',
				productImageB: './img/cowls/thum/lunara.jpg',
				productImageC: './img/cowls/thum/lunarb.jpg',
				productImageD: './img/cowls/thum/lunarc.jpg',
				materials: 'Harvest & Canvas Tent',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660325833/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639092797',
				price: '$78',
			},

			{	name: 'QUARTZ',
				productImage: './img/cowls/quartz.jpg',
				productImageB: './img/cowls/thum/quartza.jpg',
				productImageC: './img/cowls/thum/quartzb.jpg',
				productImageD: './img/cowls/thum/quartzc.jpg',
				materials: 'Harvest & Forest Floor',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'HONEY',
				productImage: './img/cowls/honey.jpg',
				productImageB: './img/cowls/thum/honeya.jpg',
				productImageC: './img/cowls/thum/honeyb.jpg',
				productImageD: './img/cowls/thum/honeyc.jpg',
				materials: 'Librarians Dream & Carbon Dating',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'ECHEVERIA',
				productImage: './img/cowls/echeveria.jpg',
				productImageB: './img/cowls/thum/echeveriaa.jpg',
				productImageC: './img/cowls/thum/echeveriab.jpg',
				productImageD: './img/cowls/thum/echeveriac.jpg',
				materials: 'Thyme & Forest Floor',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},

			{	name: 'SEAFOAM',
				productImage: './img/cowls/seafoam.jpg',
				productImageB: './img/cowls/thum/seafoama.jpg',
				productImageC: './img/cowls/thum/seafoamb.jpg',
				productImageD: './img/cowls/thum/seafoamc.jpg',
				materials: 'Venti Dragon Mocha & Thyme',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'ABOREAL',
				productImage: './img/cowls/arboreal.jpg',
				productImageB: './img/cowls/thum/arboreala.jpg',
				productImageC: './img/cowls/thum/arborealb.jpg',
				productImageD: './img/cowls/thum/arborealc.jpg',
				materials: 'Joshua Tree & Whomping Willow',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'SAGEBRUSH',
				productImage: './img/cowls/sagebrush.jpg',
				productImageB: './img/cowls/thum/sagebrusha.jpg',
				productImageC: './img/cowls/thum/sagebrushb.jpg',
				productImageD: './img/cowls/thum/sagebrushc.jpg',
				materials: 'Boxwood & Fair Isle Sweater',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'RIPARIAN',
				productImage: './img/cowls/riparian.jpg',
				productImageB: './img/cowls/thum/ripariana.jpg',
				productImageC: './img/cowls/thum/riparianb.jpg',
				productImageD: './img/cowls/thum/riparianc.jpg',
				materials: 'Misfortune & Peat',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'ESTUARY',
				productImage: './img/cowls/estuary.jpg',
				productImageB: './img/cowls/thum/estuarya.jpg',
				productImageC: './img/cowls/thum/estuaryb.jpg',
				productImageD: './img/cowls/thum/estuaryc.jpg',
				materials: 'Snake & Misfortune',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'RAIN',
				productImage: './img/cowls/rain.jpg',
				productImageB: './img/cowls/thum/raina.jpg',
				productImageC: './img/cowls/thum/rainb.jpg',
				productImageD: './img/cowls/thum/rainc.jpg',
				materials: 'New Moon & Astrid Grey',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'OCEANIC',
				productImage: './img/cowls/oceanic.jpg',
				productImageB: './img/cowls/thum/oceanica.jpg',
				productImageC: './img/cowls/thum/oceanicb.jpg',
				productImageD: './img/cowls/thum/oceanicc.jpg',
				materials: 'Arch & Sabine',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660329573/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639071273',
				price: '$78',
			},

			{	name: 'AERIAL',
				productImage: './img/cowls/aerial.jpg',
				productImageB: './img/cowls/thum/aeriala.jpg',
				productImageC: './img/cowls/thum/aeriala.jpg',
				productImageD: './img/cowls/thum/aerialc.jpg',
				materials: 'Arch & Antique Lace',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629298084/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639119878',
				price: '$78',
			},

			{	name: 'MULBERRY',
				productImage: './img/cowls/mulberry.jpg',
				productImageB: './img/cowls/thum/mulberrya.jpg',
				productImageC: './img/cowls/thum/mulberryb.jpg',
				productImageD: './img/cowls/thum/mulberryc.jpg',
				materials: 'Smokey Orchid & Forest Floor',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'HONEY BADGER',
				productImage: './img/cowls/honeybadger.jpg',
				productImageB: './img/cowls/thum/honeybadgera.jpg',
				productImageC: './img/cowls/thum/honeybadgerb.jpg',
				productImageD: './img/cowls/thum/honeybadgerc.jpg',
				materials: 'TChalla & Tiny House',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	

			{	name: 'CAVERN',
				productImage: './img/cowls/cavern.jpg',
				productImageB: './img/cowls/thum/caverna.jpg',
				productImageC: './img/cowls/thum/cavernb.jpg',
				productImageD: './img/cowls/thum/cavernc.jpg',
				materials: 'TChalla & Tripwire',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			}	

				]
			},

	methods: {
		loadItem: function(index) {
			this.productName = app.items[index].name;
			this.materials = app.items[index].materials;
			this.etsyLink = app.items[index].etsy;
			this.productImage = app.items[index].productImage;
			this.productImageB = app.items[index].productImageB;
			this.productImageC = app.items[index].productImageC;
			this.productImageD = app.items[index].productImageD;
			this.currentProductImage = app.items[index].productImage;
			this.price = app.items[index].price;
		},
		changeToProductImageA: function() {
			this.currentProductImage = this.productImage;
		},
		changeToProductImageB: function() {
			this.currentProductImage = this.productImageB;
		},
		changeToProductImageC: function() {
			this.currentProductImage = this.productImageC;
		},
		changeToProductImageD: function() {
			this.currentProductImage = this.productImageD;
		},
		addToCart: function() {
			window.open(this.etsyLink, '_blank');
		},
		showShopItem: function() {
			document.getElementById("itemInfoCont").style.display = "block";
			document.getElementById("backOverlay").style.display = "block";
			document.getElementById("backOverlay").style.position = "fixed";
		},
		closeShopItem: function() {
			document.getElementById("itemInfoCont").style.display = "none";
			document.getElementById("backOverlay").style.display = "none";
		}
	}
});