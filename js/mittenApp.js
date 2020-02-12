productImage = null;
productImageB = null;
productImageC = null;
productImageD = null;
currentProductImage = null;
productName = 'namePlaceholder';
materials = 'matsPlaceholder';
etsyLink = 'etsyPlaceholder';
descript= 'Keep your hands warm & stylish with these unique fingerless gloves & hand warmers. These fingerless gloves will keep you warm, but allow full use of whatever technology you carry with you & use every day. Made from all natural, hand dyed wool. A perfect gift for nature lovers!';
size= 'SIZE: Small/Medium. Appropriate for all women & teenagers. Average mitten is 3.25" wide, 8.5” from top to bottom.';
care= 'CARE: Gently hand wash in cold water ONLY and lay flat to dry if needed. All items are constructed in a smoke free environment, and stored properly to maintain their high quality.';

const app = new Vue ({
	el: '#mittenApp',
	data: {
		name: 'placeholder',
		price: '$48',
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

			{	name: 'GRIZZLY BEAR',
				productImage: './img/mittens/grizzlybear.jpg',
				productImageB: './img/mittens/thum/grizzlybearb.jpg',
				productImageC: './img/mittens/thum/grizzlybearc.jpg',
				productImageD: './img/mittens/thum/grizzlybeard.jpg',
				materials: 'Brickdust & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629273820/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995101153'
			},

			{	name: 'ECLIPSE',
				productImage: './img/mittens/eclipse.jpg',
				productImageB: './img/mittens/thum/eclipseb.jpg',
				productImageC: './img/mittens/thum/eclipsec.jpg',
				productImageD: './img/mittens/thum/eclipsed.jpg',
				materials: 'Harvest & Canvas Tent',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629271016/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995140444'
			},

			{	name: 'ECHEVERIA',
				productImage: './img/mittens/echeveria.jpg',
				productImageB: './img/mittens/thum/echeveriab.jpg',
				productImageC: './img/mittens/thum/echeveriac.jpg',
				productImageD: './img/mittens/thum/echeveriad.jpg',
				materials: 'Thyme & Forest Floor',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746940322/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995171867'
			},		

			{	name: 'TOKAY',
				productImage: './img/mittens/tokay.jpg',
				productImageB: './img/mittens/thum/tokayb.jpg',
				productImageC: './img/mittens/thum/tokayc.jpg',
				productImageD: './img/mittens/thum/tokayd.jpg',
				materials: 'Costeau & Astrid Grey',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/504339403/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995203918'
			},	

			{	name: 'HUCKLEBERRY',
				productImage: './img/mittens/huckleberry.jpg',
				productImageB: './img/mittens/thum/huckleberryb.jpg',
				productImageC: './img/mittens/thum/huckleberryc.jpg',
				productImageD: './img/mittens/thum/huckleberryd.jpg',
				materials: 'Lost In Trees & Sabine',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643104859/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995220580'
			},

			{	name: 'ESTUARY',
				productImage: './img/mittens/estuary.jpg',
				productImageB: './img/mittens/thum/estuaryb.jpg',
				productImageC: './img/mittens/thum/estuaryc.jpg',
				productImageD: './img/mittens/thum/estuaryd.jpg',
				materials: 'Snake & Misfortune',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760817799/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995235947'
			},	

			{	name: 'WILLOW',
				productImage: './img/mittens/willow.jpg',
				productImageB: './img/mittens/thum/willowb.jpg',
				productImageC: './img/mittens/thum/willowc.jpg',
				productImageD: './img/mittens/thum/willowd.jpg',
				materials: 'Forest Floor',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760833003/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995278038'
			},		

			{	name: 'DENALI',
				productImage: './img/mittens/denali.jpg',
				productImageB: './img/mittens/thum/denalib.jpg',
				productImageC: './img/mittens/thum/denalic.jpg',
				productImageD: './img/mittens/thum/denalid.jpg',
				materials: 'Plaid Blanket & Whiskey Barrel',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/645476119/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995295098'
			},

			{	name: 'FALCON',
				productImage: './img/mittens/falcon.jpg',
				productImageB: './img/mittens/thum/falconb.jpg',
				productImageC: './img/mittens/thum/falconc.jpg',
				productImageD: './img/mittens/thum/falcond.jpg',
				materials: 'Tiny House & TripWire',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746942326/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995307376'
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