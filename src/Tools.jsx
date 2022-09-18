 let TopTools = [
 	{
		name:"Unsplash",
		description:"Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos",
		image:"unsplash.png",
		link:"https://unsplash.com/"
		},
		{
			name:"Animista",
			description:"Animista is a CSS animation library and a place where you can play with a collection of ready-made CSS animations and download only those you will use",
			image:"animista.png",
			link:"https://animista.net/"
		},
		{
			name:"Google Fonts",
			description:"Google Fonts is a library of 1,442 open source font families and APIs for convenient use via CSS and Android",
			image:"google-fonts.png",
			link:"https://fonts.google.com/"
		},
		{
			name:"Sublime text",
			description:"Sublime Text is a shareware cross-platform source code editor. It natively supports many programming languages and markup languages",
			image:"sublime-text.png",
			link:"https://www.sublimetext.com/"
		},
		{
			name:"CSS Tricks",
			description:"Daily articles about CSS, HTML, JavaScript, and all things related to web design and development",
			image:"css-tricks.png",
			link:"https://css-tricks.com/"
		},		
		{
			name:"VS Code",
			description:"Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS",
			image:"vscode.png",
			link:"https://code.visualstudio.com/"
		}
 ];

 let Tools = [
		{
		name:"Unsplash",
		description:"Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos",
		image:"unsplash.png",
		link:"https://unsplash.com/"
		},
		{
			name:"Animista",
			description:"Animista is a CSS animation library and a place where you can play with a collection of ready-made CSS animations and download only those you will use",
			image:"animista.png",
			link:"https://animista.net/"
		},
		{
			name:"Google Fonts",
			description:"Google Fonts is a library of 1,442 open source font families and APIs for convenient use via CSS and Android",
			image:"google-fonts.png",
			link:"https://fonts.google.com/"
		},
		{
			name:"Sublime text",
			description:"Sublime Text is a shareware cross-platform source code editor. It natively supports many programming languages and markup languages",
			image:"sublime-text.png",
			link:"https://www.sublimetext.com/"
		},
		{
			name:"CSS Tricks",
			description:"Daily articles about CSS, HTML, JavaScript, and all things related to web design and development",
			image:"css-tricks.png",
			link:"https://css-tricks.com/"
		},		
		{
			name:"VS Code",
			description:"Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS",
			image:"vscode.png",
			link:"https://code.visualstudio.com/"
		},
		{
			name:"Tachyons",
			description:"Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible",
			image:"T.png",
			link:"https://tachyons.io/"
		},
		{
			name:"Undraw",
			description:"Open-source illustrations for any idea you can imagine and create. · A constantly updated design project with beautiful SVG images that you can use",
			image:"undraw.png",
			link:"https://undraw.co/"
		},		
		{
			name:"Webflow",
			description:"Create professional, custom websites in a completely visual canvas with no code. Learn how to create a website by trying Webflow for free!",
			image:"webflow.png",
			link:"https://webflow.com/"
		},		
		{
			name:"Uppbeat",
			description:"Download the best copyright-free music for YouTube, TikTok, streaming, social media, podcasts and more",
			image:"uppbeat.png",
			link:"https://uppbeat.io/"
		},		
		{
			name:"Threejs",
			description:"Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL",
			image:"threejs.png",
			link:"https://threejs.org/"
		},
		{
			name:"Spline",
			description:"Spline, a place to design and collaborate in 3D. · Designing in 3D has never been easier · Tools to express your creativity · And there is more! ",
			image:"spline.png",
			link:"https://spline.design/"
		},
		{
			name:"Pixlr",
			description:" Edit photos and create stunning designs right in your browser, on your phone or desktop for free",
			image:"pixlr.png",
			link:"https://pixlr.com/"
		},
		{
			name:"Formik",
			description:"Third party React form library. It provides basic form programming and validation. It is based on controlled component and greatly reduces the time to do form programming.",
			image:"formik.png",
			link:"https://formik.org/"
		},
		{
			name:"Photopea",
			description:"Photopea Online Photo Editor lets you edit photos, apply effects, filters, add text, crop or resize pictures",
			image:"photopea.png",
			link:"https://www.photopea.com/"
		},
		{
			name:"Shape divider",
			description:"Generate vertical, responsive & animated shape dividers easily with this SVG Shape Dividers Generator",
			image:"shape-divider.png",
			link:"https://www.shapedivider.app/"
		},
		{
			name:"Haikei",
			description:"Haikei is a web app to generate stunning visual content – ready to use with your design tools and workflow",
			image:"haikei.png",
			link:"https://app.haikei.app/"
		},
		{
			name:"Jotform",
			description:"Jotform is a powerful online application that allows anyone to quickly create custom online forms",
			image:"jotform.png",
			link:"https://www.jotform.com/"
		},
]

function checkDuplicate(name){
	Tools.forEach(obj=>{
		if(obj.name.toLowerCase().includes(name.toLowerCase())){
				alert("Sorry, this tool already exists")
		}
	})
}

checkDuplicate('Name of tool you want to add');


export {Tools, TopTools};