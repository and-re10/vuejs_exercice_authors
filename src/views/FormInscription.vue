<template>
  <div class="contact">
    <!-- <h1>Formulaire d'Inscription</h1> -->
    <div style="background-color: #41ba82; width: 50%; border-radius: 4px 4px 0px 0px">
      <h1>Formulaire d'Inscription</h1>
    </div>
    <form @submit.prevent="addAccount()" class="contact-container">
        <div class="form-group w-80">
          <label for="">First Name*</label>
          <input type="text"
            class="form-control w-100" v-model="account.first_name" name="" id="" aria-describedby="helpId" placeholder="">
          <small class="error_msg" v-if="account.first_name === undefined">{{filterFormError ("first_name")}}</small>
        </div>
        <div class="form-group w-80">
          <label for="">Last Name*</label>
          <input type="text"
            class="form-control w-100" name="" v-model="account.last_name" id="" aria-describedby="helpId" placeholder="">
          <small class="error_msg" v-if="account.last_name === undefined">{{filterFormError ("last_name")}}</small>
        </div>
      <div class="form-group w-80">
        <label for="">Email*</label>
        <input type="email"
          class="form-control w-100" name="" v-model="account.email" id="" aria-describedby="helpId" placeholder="">
        <small class="error_msg" v-if="account.email === undefined">{{filterFormError ("email")}}</small>
      </div>
      <div class="form-group w-80">
        <label for="">Phone*</label>
        <input type="text"
          class="form-control w-100" name="" v-model="account.phone" id="" aria-describedby="helpId" placeholder="">
        <small class="error_msg" v-if="account.phone === undefined">{{filterFormError ("phone")}}</small>
      </div>
      <button class="btn_submit">Adicionar</button>
    </form>
    <span v-if="successMsg" style="color: #41ba82; font-weight: bold; margin: 20px 0px">Form was submitted</span>
  </div>
</template>

<script>

export default {
  name: 'FormInscription',
  props: {
  },
  data () {
    return {
      account: {
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      },
      loading: false,
      successMsg: false,
      formError: [
        {
          name: 'first_name',
          msg: 'First Name required.'
        },
        {
          name: 'last_name',
          msg: 'Last Name required.'
        },
        {
          name: 'email',
          msg: 'Email required.'
        },
        {
          name: 'phone',
          msg: 'Phone required.'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    async addAccount () {
      if (this.account.first_name && this.account.last_name && this.account.email && this.account.phone) {
        try {
          this.loading = true
          await this.$store.dispatch('addAccount', this.account)
          this.account = {
            first_name: '',
            last_name: '',
            email: '',
            phone: ''
          }
        } finally {
          this.loading = false
          console.log(this.account)
          this.successMsg = true
        }
      } else {
        for (let i = 0; i < 4; i++) {
          if (this.account.first_name === '') {
            this.account.first_name = undefined
          } else if (this.account.last_name === '') {
            this.account.last_name = undefined
          } else if (this.account.email === '') {
            this.account.email = undefined
          } else if (this.account.phone === '') {
            this.account.phone = undefined
          }
        }
        console.log(this.account)
      }
    },
    filterFormError (name) {
      for (let i = 0; i < this.formError.length; i++) {
        if (name === this.formError[i].name) {
          return this.formError[i].msg
        }
      }
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    }
    // count: {
    //   set (v) {
    //     this.$store.dispatch('addAccount', v)
    //   },
    //   get () {
    //     return this.$store.state.count
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin: 20px 0px;
  }
  .form-group>input {
    height: 40px;
    border: 2px solid lightgrey;
    border-radius: 4px;
    background-color: #e6e9eb;
  }
  .form-group>input:focus {
    outline: 2px solid #41ba82;
  }
  .form-group>textarea {
    border: 2px solid lightgrey;
    border-radius: 4px;
    background-color: #e6e9eb;
  }
  .form-group>textarea:focus {
    outline: 2px solid #41ba82;
  }
  .error_msg {
    color: red
  }
  .btn_submit {
    padding: 20px 80px;
    background-color: #41ba82;
    border: 2px solid lightgrey;
    border-radius: 8px;
    margin-top: 20px;
  }
  .btn_submit:active {
    opacity: 70%
  }
  .w-100 {
    width: 100%;
  }
  .w-80 {
    width: 80%;
  }
  .w-50 {
    width: 50%;
  }
  .w-48 {
    width: 48%;
  }
  .contact-container{
    width: 50%;
    background-color: #e6e9eb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    border-radius: 4px;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .space-between {
    justify-content: space-between;
  }
  .card_title {
    margin-right: 10px;
  }
</style>
