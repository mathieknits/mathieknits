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