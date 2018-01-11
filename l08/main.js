Vue.component("task-list", {
	template: "<div class='task-list'><task v-for='task in tasks'>{{task.desc}}</task></div>", 
	data(){
		return {
			tasks: [
				{ desc: "Go to the store", complete: true},
				{ desc: "Go to the bank", complete: false},
				{ desc: "Go to the email", complete: true},
				{ desc: "Go to the work", complete: false}
			]
		};
	}
});

Vue.component('task', {
	template: "<li><slot></slot></li>"
});


var app = new Vue({
	el: "#root", 
})