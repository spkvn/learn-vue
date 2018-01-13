new Vue({
	el: "#app",
	data: {
		dogs : [],
		header: "Laravel"
	}, 
	mounted(){
		var vm = this;
		axios.get("/l18/public/dogs").then(function(response){vm.dogs = response.data});
	}
});