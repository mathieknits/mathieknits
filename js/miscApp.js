productImage = null;
productImageB = null;
productImageC = null;
productImageD = null;
currentProductImage = null;
price = 'pricePlaceholder';
productName = 'namePlaceholder';
materials = 'matsPlaceholder';
etsyLink = 'etsyPlaceholder';
descript= 'descriptPlaceholder';
size= 'sizePlaceholder';
care= 'CARE: Gently hand wash in cold water ONLY and lay flat to dry if needed. All items are constructed in a smoke free environment, and stored properly to maintain their high quality.';

const app = new Vue ({
	el: '#miscApp',
	data: {
		name: 'placeholder',
		price: price,
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
			{	name: 'OLINGO',
				size: 'SIZE: Small/Medium. Appropriate for all women & teenagers.',
				price: '$88',
				descript: 'This trendy hand-knit triangle shawl is the perfect accessory to spruce up any outfit, may it be everyday wear, a night out, a holiday family gathering, or a cozy day inside. Keep warm & stylish with this unqiue triangle shawl this fall & winter. Made from all natural, hand dyed wool. A perfect gift for nature lovers!',
				productImage: './img/misc/olingo.jpg',
				productImageB: './img/misc/thum/olingob.jpg',
				productImageC: './img/misc/thum/olingoc.jpg',
				productImageD: './img/misc/thum/olingod.jpg',
				materials: 'Toner Cartridge, Carbon Dating, & Cardinal',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/549434246/triangle-shawl-bandana-cowl-knit-unique?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639606641'
			},
			
			{	name: 'WILD',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/wild.jpg',
				productImageB: './img/misc/wild.jpg',
				productImageC: './img/misc/wild.jpg',
				productImageD: './img/misc/wild.jpg',
				materials: 'Saffron',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660337343/coasters-knit-home-decor-leaves-wild?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639414914'
			},

			{	name: 'FALL',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/fall.jpg',
				productImageB: './img/misc/fall.jpg',
				productImageC: './img/misc/fall.jpg',
				productImageD: './img/misc/fall.jpg',
				materials: 'Saffron, Brick Dust, & Peat',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/646500922/coasters-knit-home-decor-leaves-fall?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639503691'
			},

			{	name: 'BROOK',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/brook.jpg',
				productImageB: './img/misc/brook.jpg',
				productImageC: './img/misc/brook.jpg',
				productImageD: './img/misc/brook.jpg',
				materials: 'Danger Will Robinson, Peat, & Lost in Trees',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660336297/coasters-knit-home-decor-leaves-brook?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639516570'
			},

			{	name: 'POND',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/pond.jpg',
				productImageB: './img/misc/pond.jpg',
				productImageC: './img/misc/pond.jpg',
				productImageD: './img/misc/pond.jpg',
				materials: 'Danger Will Robinson & Lost in Trees',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660337081/coasters-knit-home-decor-leaves-pond?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639443300'
			},

			{	name: 'FIELD',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/field.jpg',
				productImageB: './img/misc/field.jpg',
				productImageC: './img/misc/field.jpg',
				productImageD: './img/misc/field.jpg',
				materials: 'Fieldwork',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/646501168/coasters-knit-home-decor-leaves-xl-field?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639476757'
			},

			{	name: 'FOG',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/fog.jpg',
				productImageB: './img/misc/fog.jpg',
				productImageC: './img/misc/fog.jpg',
				productImageD: './img/misc/fog.jpg',
				materials: 'Plaid Blanket & Kitten',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660336925/coasters-knit-home-decor-leaves-fog?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639491010'
			},

			{	name: 'VIOLET',
				price: '$12',
				size: 'SIZE: One size fits all ;)',
				descript: 'These high quality, multi purpose coasters are a unique addition to your home. No more leaving rings behind! Made from all natural, hand dyed wool, sourced ethically & using natural dyes to create majestic colorways. Carefully selected combination of colors allow for an easy way to excite your home.',
				productImage: './img/misc/violet.jpg',
				productImageB: './img/misc/violet.jpg',
				productImageC: './img/misc/violet.jpg',
				productImageD: './img/misc/violet.jpg',
				materials: 'Wildlings & Kitten',
				etsy: 'https://www.etsy.com/MATHIEKNITS/listing/660337213/coasters-knit-home-decor-leaves-violet?utm_source=Copy&utm_medium=ListingManager&utm_campaign=Share&utm_term=so.lmsm&share_time=1567639456506'
			},
				]
			},

	methods: {
		loadItem: function(index) {
			this.productName = app.items[index].name;
			this.materials = app.items[index].materials;
			this.price = app.items[index].price;
			this.size = app.items[index].size;
			this.descript = app.items[index].descript;
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