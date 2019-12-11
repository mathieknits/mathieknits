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
		price: '$62',
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

			{	name: 'SAGUARO',
				productImage: './img/hats/saguaro.jpg',
				productImageB: './img/hats/thum/saguarob.jpg',
				productImageC: './img/hats/thum/saguaroc.jpg',
				productImageD: './img/hats/thum/saguarod.jpg',
				materials: 'Joshua Tree',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746961452/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995736672'
			},

			{	name: 'LIMNIC',
				productImage: './img/hats/limnic.jpg',
				productImageB: './img/hats/thum/limnicb.jpg',
				productImageC: './img/hats/thum/limnicc.jpg',
				productImageD: './img/hats/thum/limnicd.jpg',
				materials: 'Worn Denim',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/760835567/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995751144'
			},

			{	name: 'ANEMONE',
				productImage: './img/hats/anemone.jpg',
				productImageB: './img/hats/thum/anemoneb.jpg',
				productImageC: './img/hats/thum/anemonec.jpg',
				productImageD: './img/hats/thum/anemoned.jpg',
				materials: 'New Moon',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746958644/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995761048'
			},

			{	name: 'ORCHID',
				productImage: './img/hats/orchid.jpg',
				productImageB: './img/hats/thum/orchidb.jpg',
				productImageC: './img/hats/thum/orchidc.jpg',
				productImageD: './img/hats/thum/orchidd.jpg',
				materials: 'Smokey Orchid',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746960556/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995773362'
			},

			{	name: 'VOLCANIC',
				productImage: './img/hats/volcanic.jpg',
				productImageB: './img/hats/thum/volcanicb.jpg',
				productImageC: './img/hats/thum/volcanicc.jpg',
				productImageD: './img/hats/thum/volcanicd.jpg',
				materials: 'TChalla',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/746962086/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995786995'
			},

			{	name: 'FOSSIL',
				productImage: './img/hats/fossil.jpg',
				productImageB: './img/hats/thum/fossilb.jpg',
				productImageC: './img/hats/thum/fossilc.jpg',
				productImageD: './img/hats/thum/fossild.jpg',
				materials: 'Foxhole Grey',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/646497044/winter-hat-herringbone-hat-beanie?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1575995802375'
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