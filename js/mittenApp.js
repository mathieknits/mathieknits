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
		price: '$45',
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
			{	name: 'AUTUMN',
				productImage: './img/mittens/autumn.jpg',
				productImageB: './img/mittens/thum/autumnb.jpg',
				productImageC: './img/mittens/thum/autumnc.jpg',
				productImageD: './img/mittens/thum/autumnd.jpg',
				materials: 'Saffron & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643097917/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638736542'
			},	

			{	name: 'RHIZOME',
				productImage: './img/mittens/rhizome.jpg',
				productImageB: './img/mittens/thum/rhizomeb.jpg',
				productImageC: './img/mittens/thum/rhizomec.jpg',
				productImageD: './img/mittens/thum/rhizomed.jpg',
				materials: 'Kitten & Leo',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/488857070/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638619739'
			},

			{	name: 'REDWOOD',
				productImage: './img/mittens/redwood.jpg',
				productImageB: './img/mittens/thum/redwoodb.jpg',
				productImageC: './img/mittens/thum/redwoodc.jpg',
				productImageD: './img/mittens/thum/redwoodd.jpg',
				materials: 'Saffron & Brick Dust',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643110481/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638662629'
			},	

			{	name: 'GRIZZLY BEAR',
				productImage: './img/mittens/grizzlybear.jpg',
				productImageB: './img/mittens/thum/grizzlybearb.jpg',
				productImageC: './img/mittens/thum/grizzlybearc.jpg',
				productImageD: './img/mittens/thum/grizzlybeard.jpg',
				materials: 'Brickdust & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629273820/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638984425'
			},

			{	name: 'BADLANDS',
				productImage: './img/mittens/badlands.jpg',
				productImageB: './img/mittens/thum/badlandsb.jpg',
				productImageC: './img/mittens/thum/badlandsc.jpg',
				productImageD: './img/mittens/thum/badlandsd.jpg',
				materials: 'Liquid Gold & Woodstock',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/480258166/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638631697'
			},

			{	name: 'ECLIPSE',
				productImage: './img/mittens/eclipse.jpg',
				productImageB: './img/mittens/thum/eclipseb.jpg',
				productImageC: './img/mittens/thum/eclipsec.jpg',
				productImageD: './img/mittens/thum/eclipsed.jpg',
				materials: 'Harvest & Canvas Tent',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629271016/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638694705'
			},	

			{	name: 'HUCKLEBERRY',
				productImage: './img/mittens/huckleberry.jpg',
				productImageB: './img/mittens/thum/huckleberryb.jpg',
				productImageC: './img/mittens/thum/huckleberryc.jpg',
				productImageD: './img/mittens/thum/huckleberryd.jpg',
				materials: 'Lost In Trees & Sabine',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643104859/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638676939'
			},

			{	name: 'FJORD',
				productImage: './img/mittens/fjord.jpg',
				productImageB: './img/mittens/thum/fjordb.jpg',
				productImageC: './img/mittens/thum/fjordc.jpg',
				productImageD: './img/mittens/thum/fjordd.jpg',
				materials: 'Tripwire & Danger Will Robinson',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643102025/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638711332'
			},	

			{	name: 'TOKAY',
				productImage: './img/mittens/tokay.jpg',
				productImageB: './img/mittens/thum/tokayb.jpg',
				productImageC: './img/mittens/thum/tokayc.jpg',
				productImageD: './img/mittens/thum/tokayd.jpg',
				materials: 'Costeau & Astrid Grey',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/504339403/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638605922'
			},

			{	name: 'TIDAL WAVE',
				productImage: './img/mittens/tidalwave.jpg',
				productImageB: './img/mittens/thum/tidalwaveb.jpg',
				productImageC: './img/mittens/thum/tidalwavec.jpg',
				productImageD: './img/mittens/thum/tidalwaved.jpg',
				materials: 'Arch & Kitten',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643116599/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638647628'
			},	

			{	name: 'LYRETAIL',
				productImage: './img/mittens/lyretail.jpg',
				productImageB: './img/mittens/thum/lyretailb.jpg',
				productImageC: './img/mittens/thum/lyretailc.jpg',
				productImageD: './img/mittens/thum/lyretaild.jpg',
				materials: 'Wilding & Kitten',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629276666/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638507894'
			},

			{	name: 'CELESTIAL',
				productImage: './img/mittens/celestial.jpg',
				productImageB: './img/mittens/thum/celestialb.jpg',
				productImageC: './img/mittens/thum/celestialc.jpg',
				productImageD: './img/mittens/thum/celestiald.jpg',
				materials: 'Wilding & Paper',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643098839/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638723550'
			},		

			{	name: 'SANDHILL',
				productImage: './img/mittens/sandhill.jpg',
				productImageB: './img/mittens/thum/sandhillb.jpg',
				productImageC: './img/mittens/thum/sandhillc.jpg',
				productImageD: './img/mittens/thum/sandhilld.jpg',
				materials: 'Tiny House & Antique Lace',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629280518/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638997587'
			},	

			{	name: 'DEVONIA',
				productImage: './img/mittens/devonia.jpg',
				productImageB: './img/mittens/thum/devoniab.jpg',
				productImageC: './img/mittens/thum/devoniac.jpg',
				productImageD: './img/mittens/thum/devoniad.jpg',
				materials: 'Pecan Hull & Paper',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/563226543/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638589962'
			},	

			{	name: 'DENALI',
				productImage: './img/mittens/denali.jpg',
				productImageB: './img/mittens/thum/denalib.jpg',
				productImageC: './img/mittens/thum/denalic.jpg',
				productImageD: './img/mittens/thum/denalid.jpg',
				materials: 'Plaid Blanket & Whiskey Barrel',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/645476119/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567638749810'
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