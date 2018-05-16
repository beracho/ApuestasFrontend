<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Nuevo registro</h4>
        <p class="category">Complete sus datos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout md-small-size-100 md-size-100">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Usuario</label>
              <md-input v-model="user" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Contraseña</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Repita Contraseña</label>
              <md-input v-model="repeatPassword" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" v-on:click.native="register();">Registrar</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: 'new-register-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      user: null,
      password: null,
      repeatPassword: null
    }
  },
  methods: {
    register: function(){
      if(this.password == this.repeatPassword) {
        let newUser = {
          username: this.user,
          password: this.password
        }
        axios({ method: "POST", "url": "http://localhost:5000/api/auth/Register", "data": newUser }).then(result => {
          this.response = result.data;
        }, error => {
          console.error(error);
        });
      } else {
        alert('Las contraseñas no son iguales')
      }
    }
  }
}

</script>
<style>

</style>
