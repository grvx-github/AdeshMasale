document.addEventListener("click", (e) => {
	const {target} = e;	
	if (!target.matches())
})
	handleLocation();


const routes = {
	404: "recipe/404.html",
  "/Chicken_Tikka_Masala": "/Chicken_Tikka_Masala.html",
  "/Aloo_Gobi": "/recipes/Aloo_Gobi.html",
  "/Chicken_Biriyani": "/recipes/Chicken_Biriyani.html",
	"/Dahl_with_spinach": "/recipes/Dahl_with_spinach.html",
	"/Tandoori_Chicken": "/recipes/Tandoori_Chicken.html",
	"/Veg_Biriyani": "/recipes/Veg_Biriyani.html",
	"/Butter_Chicken": "/recipes/Butter_Chicken.html",
	"/Matar_Paneer": "/recipes/Matar_Paneer.html",
	"/ppCurry": "/recipes/ppCurry.html"
};

const handleLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const html = await fetch(route).then((data) => data.text());
	document.getElementById("main-page")
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();