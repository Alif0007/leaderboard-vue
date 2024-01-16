<template>
  <div>
    <div class="scroll">
      <table class="table-style">
        <thead class="heading-style">
          <th>SL</th>
          <th>Date</th>
          <th>Name</th>
          <th>Product</th>
          <th>Payment Method</th>
          <th>Due</th>
          <th>Total Amount</th>
          <th>Delivery Date</th>
          <th>Client Details</th>
          <th>Remarks</th>
        </thead>
        <tr>
          <td>1</td>
          <td>08.08.2024</td>
          <td>Al Amin Alif</td>
          <td>Webcard</td>
          <td>Cash</td>
          <td>0</td>
          <td>500</td>
          <td>10.08.2024</td>
          <td>Lorem ipsumdipisicing elit. Soluta, deserunt!</td>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>

        <tr>
          <td>2</td>
          <td>08.08.2024</td>
          <td>Ms Tanisha</td>
          <td>Webcard</td>
          <td>Cash</td>
          <td>0</td>
          <td>500</td>
          <td>10.08.2024</td>
          <td>Lorem ipsum dolor sit amet consectetur</td>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>

        <tr>
          <td>2</td>
          <td>08.08.2024</td>
          <td>Al Mahmud</td>
          <td>Webcard</td>
          <td>Cash</td>
          <td>0</td>
          <td>500</td>
          <td>10.08.2024</td>
          <td>Lorem ipsum dolor sit amet consectetur</td>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  mounted() {
    let user = localStorage.getItem("apiToken");
    if (!user) {
      this.$router.push({ name: "login" });
    }
   
  },
};
</script>

<style>
.scroll {
  overflow-y: scroll;
}
.table-style {
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}

.heading-style th {
  background-color: rgb(227, 232, 236);
  min-width: 100px;
  text-align: left;
  padding: 5px;
}

.table-style tr {
  /* text-align: center; */
  padding: 5px;
}

.drop-down select {
  background-color: transparent;
  border: none;
  /* appearance: none; */
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

/* SCROLLBAR STYLE */
.scroll {
  overflow: auto;
}
/* width  */
::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(152, 146, 146);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b5a2a2;
}
</style>
