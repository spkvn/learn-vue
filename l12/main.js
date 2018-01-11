Vue.component('coupon',{
	template:`<input v-model="couponText" type="text" name="coupon" @blur="checkCoupon">`,
	data() {
		return {couponText: ""};
	},
	methods: {
		checkCoupon(){
			// maybe we check coupon is valid in ajax call here,
			// then if true emit event
			this.$emit('applied',this.couponText);
		}
	}
}); 

var app = new Vue({
	el:'#root', 
	methods:{
		couponApplied(message,event){
			this.applied = true;
			this.couponCode = message
		}
	},
	data:{
		couponCode : "", 
		applied: false
	}
});