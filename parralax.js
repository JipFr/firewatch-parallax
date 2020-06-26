document.addEventListener("scroll", () => {
	let top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0) ?? 0;
	let f = 1;

	document.querySelectorAll(".layer:not(.noAni)").forEach(el => {
		let i = Number(el.id.slice(1));
		el.setAttribute("style", `transform: translate3d(0, ${(8 - i) * (top/8)}px, 0)`)
	});

});