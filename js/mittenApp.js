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

			{	name: 'AUTUMN',
				productImage: './img/mittens/autumn.jpg',
				productImageB: './img/mittens/thum/autumnb.jpg',
				productImageC: './img/mittens/thum/autumnc.jpg',
				productImageD: './img/mittens/thum/autumnd.jpg',
				materials: 'Saffron & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643097917/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995001501'
			},

			{	name: 'MONARCH',
				productImage: './img/mittens/monarch.jpg',
				productImageB: './img/mittens/thum/monarchb.jpg',
				productImageC: './img/mittens/thum/monarchc.jpg',
				productImageD: './img/mittens/thum/monarchd.jpg',
				materials: 'Cinnamon Dolce & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746943746/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995019770'
			},	

			{	name: 'REDWOOD',
				productImage: './img/mittens/redwood.jpg',
				productImageB: './img/mittens/thum/redwoodb.jpg',
				productImageC: './img/mittens/thum/redwoodc.jpg',
				productImageD: './img/mittens/thum/redwoodd.jpg',
				materials: 'Saffron & Brick Dust',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/643110481/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995044912'	
			},	

			{	name: 'SEQUOIA',
				productImage: './img/mittens/sequoia.jpg',
				productImageB: './img/mittens/thum/sequoiab.jpg',
				productImageC: './img/mittens/thum/sequoiac.jpg',
				productImageD: './img/mittens/thum/sequoiad.jpg',
				materials: 'Carbon Dating & Fair Isle Sweater',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760832051/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995082201'
			},	

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

			{	name: 'SEAFOAM',
				productImage: './img/mittens/seafoam.jpg',
				productImageB: './img/mittens/thum/seafoamb.jpg',
				productImageC: './img/mittens/thum/seafoamc.jpg',
				productImageD: './img/mittens/thum/seafoamd.jpg',
				materials: 'Venti Dragon Moch & Thyme',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746945806/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995393176'
			},

			{	name: 'ECHEVERIA',
				productImage: './img/mittens/echeveria.jpg',
				productImageB: './img/mittens/thum/echeveriab.jpg',
				productImageC: './img/mittens/thum/echeveriac.jpg',
				productImageD: './img/mittens/thum/echeveriad.jpg',
				materials: 'Thyme & Forest Floor',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746940322/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995171867'
			},

			{	name: 'DUSK',
				productImage: './img/mittens/dusk.jpg',
				productImageB: './img/mittens/thum/duskb.jpg',
				productImageC: './img/mittens/thum/duskc.jpg',
				productImageD: './img/mittens/thum/duskc.jpg',
				materials: 'Boxwood & Forest Floor',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760815699/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995187869'
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

			{	name: 'MULBERRY',
				productImage: './img/mittens/mulberry.jpg',
				productImageB: './img/mittens/thum/mulberryb.jpg',
				productImageC: './img/mittens/thum/mulberryc.jpg',
				productImageD: './img/mittens/thum/mulberryd.jpg',
				materials: 'Smokey Orchid & Forest Floor',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760820869/fingerless-gloves-fingerless-mittens?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995252272'
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