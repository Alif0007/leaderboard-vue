<template>
  <div>
    <h4 class="heading">New Sales Form</h4>
    <div class="q-pa-md example-row-equal-width">
      <div class="row">
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Date" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Name" />
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
            <q-input outlined v-model="text" label="Due" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Total Amount" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Delivery Date" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Client Details" />
          </div>
        </div>
        <div class="col-6">
          <div class="q-ma-sm">
            <q-input outlined v-model="text" label="Remarks" />
          </div>
        </div>
      </div>
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
    };
  },
};
</script>

<style>
.heading {
  display: flex;
  justify-content: center;
  margin: 2%;
}
</style>
