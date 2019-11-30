productImage = null;
productImageB = null;
productImageC = null;
productImageD = null;
currentProductImage = null;
productName = 'namePlaceholder';
materials = 'matsPlaceholder';
etsyLink = 'etsyPlaceholder';
descript= 'Keep your noggin warm & stylish with these unique herringbone hats this fall & winter season. These hats are truly unique with the herringbone stitch. Super stretchy brim keeps the hat snug, but comfortable! And who doesnt love a good pom-pom!? Made from all natural, hand dyed wool. A perfect gift for nature lovers!';
size= 'SIZE: Small/Medium. Appropriate for all women & teenagers.';
care= 'CARE: Gently hand wash in cold water ONLY and lay flat to dry if needed. All items are constructed in a smoke free environment, and stored properly to maintain their high quality.';


const app = new Vue ({
	el: '#hatApp',
	data: {
		name: 'placeholder',
		price: '$58',
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
			{	name: 'CARDINAL',
				productImage: './img/hats/cardinal.jpg',
				productImageB: './img/hats/thum/cardinalb.jpg',
				productImageC: './img/hats/thum/cardinalc.jpg',
				productImageD: './img/hats/thum/cardinald.jpg',
				materials: 'The Red Woman',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'GINGER',
				productImage: './img/hats/ginger.jpg',
				productImageB: './img/hats/thum/gingerb.jpg',
				productImageC: './img/hats/thum/gingerc.jpg',
				productImageD: './img/hats/thum/gingerd.jpg',
				materials: 'Carbon Dating',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'GINSENG',
				productImage: './img/hats/ginseng.jpg',
				productImageB: './img/hats/thum/ginsengb.jpg',
				productImageC: './img/hats/thum/ginsengc.jpg',
				productImageD: './img/hats/thum/ginsengd.jpg',
				materials: 'Librarians Dream',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'SUCCULENT',
				productImage: './img/hats/succulent.jpg',
				productImageB: './img/hats/thum/succulentb.jpg',
				productImageC: './img/hats/thum/succulentc.jpg',
				productImageD: './img/hats/thum/succulentd.jpg',
				materials: 'WHOMPING WILLOW',
				etsy: 'https://www.etsy.com/MATHIEKNITS/'
			},

			{	name: 'SAGUARO',
				productImage: './img/hats/saguaro.jpg',
				productImageB: './img/hats/thum/saguarob.jpg',
				productImageC: './img/hats/thum/saguaroc.jpg',
				productImageD: './img/hats/thum/saguarod.jpg',
				materials: 'Joshua Tree',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'SPRUCE',
				productImage: './img/hats/spruce.jpg',
				productImageB: './img/hats/thum/spruceb.jpg',
				productImageC: './img/hats/thum/sprucec.jpg',
				productImageD: './img/hats/thum/spruced.jpg',
				materials: 'Boomslang',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'BENTHIC',
				productImage: './img/hats/benthic.jpg',
				productImageB: './img/hats/thum/benthicb.jpg',
				productImageC: './img/hats/thum/benthicc.jpg',
				productImageD: './img/hats/thum/benthicd.jpg',
				materials: 'MISFORTUNE',
				etsy: 'https://www.etsy.com/MATHIEKNITS/'
			},

			{	name: 'ELEMENT',
				productImage: './img/hats/element.jpg',
				productImageB: './img/hats/thum/elementb.jpg',
				productImageC: './img/hats/thum/elementc.jpg',
				productImageD: './img/hats/thum/elementd.jpg',
				materials: 'Bluesteau',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'LIMNIC',
				productImage: './img/hats/limnic.jpg',
				productImageB: './img/hats/thum/limnicb.jpg',
				productImageC: './img/hats/thum/limnicc.jpg',
				productImageD: './img/hats/thum/limnicd.jpg',
				materials: 'Worn Denim',
				etsy: 'https://www.etsy.com/MATHIEKNITS/'
			},

			{	name: 'ANEMONE',
				productImage: './img/hats/anemone.jpg',
				productImageB: './img/hats/thum/anemoneb.jpg',
				productImageC: './img/hats/thum/anemonec.jpg',
				productImageD: './img/hats/thum/anemoned.jpg',
				materials: 'New Moon',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'ANDROMEDA',
				productImage: './img/hats/andromeda.jpg',
				productImageB: './img/hats/thum/andromedab.jpg',
				productImageC: './img/hats/thum/andromedac.jpg',
				productImageD: './img/hats/thum/andromedad.jpg',
				materials: 'Fair Isle Sweater',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'DAHLIA',
				productImage: './img/hats/dahlia.jpg',
				productImageB: './img/hats/thum/dahliab.jpg',
				productImageC: './img/hats/thum/dahliac.jpg',
				productImageD: './img/hats/thum/dahliad.jpg',
				materials: 'Tsing Tsing Pepper',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'ORCHID',
				productImage: './img/hats/orchid.jpg',
				productImageB: './img/hats/thum/orchidb.jpg',
				productImageC: './img/hats/thum/orchidc.jpg',
				productImageD: './img/hats/thum/orchidd.jpg',
				materials: 'Smokey Orchid',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'GYPSUM',
				productImage: './img/hats/gypsum.jpg',
				productImageB: './img/hats/thum/gypsumb.jpg',
				productImageC: './img/hats/thum/gypsumc.jpg',
				productImageD: './img/hats/thum/gypsumd.jpg',
				materials: 'TripWire & Antler',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'VOLCANIC',
				productImage: './img/hats/volcanic.jpg',
				productImageB: './img/hats/thum/volcanicb.jpg',
				productImageC: './img/hats/thum/volcanicc.jpg',
				productImageD: './img/hats/thum/volcanicd.jpg',
				materials: 'TChalla',
				etsy: 'https://www.etsy.com/shop/MATHIEKNITS/'
			},

			{	name: 'WOODLAND',
				productImage: './img/hats/woodland.jpg',
				productImageB: './img/hats/thum/woodlandb.jpg',
				productImageC: './img/hats/thum/woodlandc.jpg',
				productImageD: './img/hats/thum/woodlandd.jpg',
				materials: 'Woodstock',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629293516/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639361691'
			},
			
			{	name: 'ZION',
				productImage: './img/hats/zion.jpg',
				productImageB: './img/hats/thum/zionb.jpg',
				productImageC: './img/hats/thum/zionc.jpg',
				productImageD: './img/hats/thum/ziond.jpg',
				materials: 'Arya',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/629294230/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639344545'
			},

			{	name: 'FOSSIL',
				productImage: './img/hats/fossil.jpg',
				productImageB: './img/hats/thum/fossilb.jpg',
				productImageC: './img/hats/thum/fossilc.jpg',
				productImageD: './img/hats/thum/fossild.jpg',
				materials: 'Foxhole Grey',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/646497044/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639325566'
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