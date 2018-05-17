<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Perfil</h4>
        <p class="category">Complete sus datos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Empresa</label>
              <md-input v-model="company" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Usuario</label>
              <md-input v-model="username" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Teléfono</label>
              <md-input v-model="telephone" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nombres</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Apellidos</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Dirección</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Contraseña</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Repita contraseña</label>
              <md-input v-model="repeatPassword" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Acerca de mi</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" v-on:click.native="completeRegister();">Actualizar perfil</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: 'edit-profile-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: 'beracho',
      company: 'Alpha Systems SRL',
      telephone: null,
      lastname: null,
      firstname: null,
      address: null,
      password: null,
      repeatPassword: null,
      aboutme: 'Yo sólo quiero apostar y ganar dinero.'
    }
  },
  mounted() {
    if (this.username) {
      axios({ method: "GET", "url": "http://localhost:5000/api/users/" + this.username }).then(result => {
        this.response = result.data;
        this.company = this.response.company;
        this.telephone = this.response.telephone;
        this.lastname = this.response.lastName;
        this.firstname = this.response.firstName;
        this.address = this.response.address;
        this.aboutme = this.response.aboutMe;
      }, error => {
        console.error(error);
      });
    } else {
      console.error('Not logged in, Baby.');
    }
  },
  methods: {
    completeRegister: function(){
      if(this.password == this.repeatPassword) {
        let sendUser = {
          username: this.username,
          company: this.company,
          telephone: this.telephone,
          lastname: this.lastname,
          firstname: this.firstname,
          address: this.address,
          password: this.password,
          aboutme: this.aboutme
        }
        axios({ method: "POST", "url": "http://localhost:5000/api/auth/CompleteRegister", "data": sendUser }).then(result => {
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
