<template>
  <div>
    <h4 class="heading">New Sales Form</h4>
    <div class="q-pa-md example-row-equal-width">
      <div class="row">
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined type="date" v-model="date" label="Date" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="name" label="Name" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-select
              outlined
              v-model="products"
              :options="product"
              label="Product"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-select
              outlined
              v-model="payment"
              :options="options"
              label="Payment Method"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined type="number" v-model="due" label="Due" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input
              outlined
              type="number"
              v-model="total_amount"
              label="Total Amount"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input
              outlined
              type="date"
              v-model="delivery_date"
              label="Delivery Date"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="client_details" label="Client Details" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="remarks" label="Remarks" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-submit">
      <q-btn unelevated color="primary" label="Submit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNew",
  data() {
    return {
      products: null,
      payment: null,
      options: ["Cash", "Bank", "Card", "Bkash", "Nagad"],
      product: ["Webcard", "iVault", "Website", "ID-Card"],
      date: "",
      name: "",
      due: "",
      total_amount: "",
      delivery_date: "",
      client_details: "",
      remarks: "",
    };
  },
  methods: {
    async login() {
      if (!this.email && !this.password) {
        return;
      }
      this.loading = true;
      const loginData = new FormData();
      loginData.append("email", this.email);
      loginData.append("password", this.password);

      const config = {
        url: "https://icircles.app/api/auth/login",
        method: "POST",
        data: loginData,
      };
      try {
        const res = await axios(config);
        if (res.status == 200) {
          this.loading = false;
          this.$router.push({ name: "Dashboard" });
        }

        this.userInfo = res.data;
        localStorage.setItem("apiToken", this.userInfo.user.t);
        console.log(this.userInfo.user.t);
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.error = true;
      }
    },
  },
};
</script>

<style>
.heading {
  display: flex;
  justify-content: center;
  margin: 2%;
}

.btn-submit {
  display: flex;
  justify-content: center;
}
</style>
