window.Event = new Vue(); 

Vue.component('coupon',{
	template:`<input v-model="couponText" type="text" name="coupon" @blur="checkCoupon">`,
	data() {
		return {couponText: ""};
	},
	methods: {
		checkCoupon(){
			// maybe we check coupon is valid in ajax call here,
			// then if true emit event
			console.log('Emitting applied with code: '+ this.couponText);
			Event.$emit('applied',this.couponText);
		}
	}
}); 

var app = new Vue({
	el:'#root', 
	methods:{
		// couponApplied(message,event){
		// 	this.applied = true;
		// 	this.couponCode = message
		// }
	},
	created(){
		console.log('appliedListener created');
		Event.$on('applied', function(message,event){
			console.log('heard applied');
			app.applied = true; 
			app.couponCode = message;
		});
	},
	data:{
		couponCode : "", 
		applied: false
	}
});