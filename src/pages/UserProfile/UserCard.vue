<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
       <img class="img" :src="cardUserImage">
    </div>

    <md-card-content>
      <h6 class="category text-gray">Software Developer</h6>
      <h4 class="card-title">Beracho</h4>
      <p class="card-description">
          "Los momentos pasan y los minutos también... y luego hasta los segundos. Luego, de segundo en segundo, agarra uno el segundo aire. Y luego tú tan chula que eres. Y uno tan enamorado"</br>Cantinflas
      </p>
      <md-button class="md-round md-success">Seguir</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/faces/beracho.jpg')
    }
  },
  data () {
    return {
    }
  }
}

</script>
<style>

</style>
