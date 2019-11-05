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
			{	name: 'WINTERBERRY',
				productImage: './img/cowls/winterberry.jpg',
				productImageB: './img/cowls/thum/winterberrya.jpg',
				productImageC: './img/cowls/thum/winterberryb.jpg',
				productImageD: './img/cowls/thum/winterberryc.jpg',
				materials: 'Saffron & Tiny House',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643132435/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639104790',
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

			{	name: 'LUNAR',
				productImage: './img/cowls/lunar.jpg',
				productImageB: './img/cowls/thum/lunara.jpg',
				productImageC: './img/cowls/thum/lunarb.jpg',
				productImageD: './img/cowls/thum/lunarc.jpg',
				materials: 'Harvest & Canvas Tent',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660325833/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639092797',
				price: '$78',
			},

			{	name: 'ABOREAL',
				productImage: './img/cowls/arboreal.jpg',
				productImageB: './img/cowls/thum/arboreala.jpg',
				productImageC: './img/cowls/thum/arborealc.jpg',
				productImageD: './img/cowls/thum/arborealb.jpg',
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

			{	name: 'AERIAL',
				productImage: './img/cowls/aerial.jpg',
				productImageB: './img/cowls/thum/aeriala.jpg',
				productImageC: './img/cowls/thum/aeriala.jpg',
				productImageD: './img/cowls/thum/aerialc.jpg',
				materials: 'Arch & Antique Lace',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629298084/herringbone-cowl-scarf-fringe-neck?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639119878',
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

			{	name: 'CAVERN',
				productImage: './img/cowls/cavern.jpg',
				productImageB: './img/cowls/thum/caverna.jpg',
				productImageC: './img/cowls/thum/cavernb.jpg',
				productImageD: './img/cowls/thum/cavernc.jpg',
				materials: 'TChalla & Tripwire',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				price: '$78',
			},	
	

			{	name: 'STURGEON',
				productImage: './img/cowls/sturgeon.jpg',
				productImageB: './img/cowls/thum/sturgeona.jpg',
				productImageC: './img/cowls/thum/sturgeonb.jpg',
				productImageD: './img/cowls/thum/sturgeonc.jpg',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/',
				brand: 'MALABRIGO',
				materials: 'Aguas',		
				price: '$40'
			},

			{	name: 'LIMNIC',
				productImage: './img/cowls/heron.jpg',
				productImageB: './img/cowls/thum/herona.jpg',
				productImageC: './img/cowls/thum/heronb.jpg',
				productImageD: './img/cowls/thum/heronc.jpg',
				brand: 'MADELINETOSH',
				materials: 'Worn Denim',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/487338193/bandana-cowl-neck-warmer-womens-knit?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639242520',
				price: '$40'
			},


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