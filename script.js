//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


const download = (url) =>{
	return new Promise((resolve, reject)=>{
		resolve(`<img src="${url}" />`);
	})
}
const handleDownload = ()=>{
	Promise.all([download(images[0].url), download(images[1].url), download(images[2].url)]).then((data)=>{
		data.forEach((v)=>{
			output.innerHTML += v;
		})
	})
}

btn.addEventListener('click', handleDownload);