<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Apostando</h4>
        <p class="category">Elige los 2 equipos de cada grupo que pasarán a la siguiente fase.</p>
      </md-card-header>

      <md-card-content>
        <div class="viewport">
          <md-list-item class="md-double-line">
            <div class="md-layout-item md-small-size-100 md-size-25" layout="column">
              <h3>Grupo A</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedA" :value="this.teams.a.eq1.id">{{this.teams.a.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedA" :value="this.teams.a.eq2.id">{{this.teams.a.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedA" :value="this.teams.a.eq3.id">{{this.teams.a.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedA" :value="this.teams.a.eq4.id">{{this.teams.a.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo B</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedB" :value="this.teams.b.eq1.id">{{this.teams.b.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedB" :value="this.teams.b.eq2.id">{{this.teams.b.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedB" :value="this.teams.b.eq3.id">{{this.teams.b.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedB" :value="this.teams.b.eq4.id">{{this.teams.b.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo C</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedC" :value="this.teams.c.eq1.id">{{this.teams.c.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedC" :value="this.teams.c.eq2.id">{{this.teams.c.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedC" :value="this.teams.c.eq3.id">{{this.teams.c.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedC" :value="this.teams.c.eq4.id">{{this.teams.c.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo D</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedD" :value="this.teams.d.eq1.id">{{this.teams.d.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedD" :value="this.teams.d.eq2.id">{{this.teams.d.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedD" :value="this.teams.d.eq3.id">{{this.teams.d.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedD" :value="this.teams.d.eq4.id">{{this.teams.d.eq4.name}}</md-checkbox>
              </md-list>
            </div>
          </md-list-item>
          <md-list-item class="md-double-line">
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo E</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedE" :value="this.teams.e.eq1.id">{{this.teams.e.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedE" :value="this.teams.e.eq2.id">{{this.teams.e.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedE" :value="this.teams.e.eq3.id">{{this.teams.e.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedE" :value="this.teams.e.eq4.id">{{this.teams.e.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo F</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedF" :value="this.teams.f.eq1.id">{{this.teams.f.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedF" :value="this.teams.f.eq2.id">{{this.teams.f.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedF" :value="this.teams.f.eq3.id">{{this.teams.f.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedF" :value="this.teams.f.eq4.id">{{this.teams.f.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo G</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedG" :value="this.teams.g.eq1.id">{{this.teams.g.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedG" :value="this.teams.g.eq2.id">{{this.teams.g.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedG" :value="this.teams.g.eq3.id">{{this.teams.g.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedG" :value="this.teams.g.eq4.id">{{this.teams.g.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo H</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="checkedH" :value="this.teams.h.eq1.id">{{this.teams.h.eq1.name}}</md-checkbox>
                <md-checkbox v-model="checkedH" :value="this.teams.h.eq2.id">{{this.teams.h.eq2.name}}</md-checkbox>
                <md-checkbox v-model="checkedH" :value="this.teams.h.eq3.id">{{this.teams.h.eq3.name}}</md-checkbox>
                <md-checkbox v-model="checkedH" :value="this.teams.h.eq4.id">{{this.teams.h.eq4.name}}</md-checkbox>
              </md-list>
            </div>
          </md-list-item>
        </div>
        <div class="md-layout-item md-size-100 text-right">
          <md-button class="md-raised md-success" v-on:click.native="endBet();">Finalizar Apuesta</md-button>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'new-bet-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: 'beracho',
      checkedBackA: [],
      checkedBackB: [],
      checkedBackC: [],
      checkedBackD: [],
      checkedBackE: [],
      checkedBackF: [],
      checkedBackG: [],
      checkedBackH: [],
      checkedA: [],
      checkedB: [],
      checkedC: [],
      checkedD: [],
      checkedE: [],
      checkedF: [],
      checkedG: [],
      checkedH: [],
      teams: {
        a: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        b: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        c: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        d: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        e: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        f: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        g: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        },
        h: {
          eq1: {name: '', id: ''},
          eq2: {name: '', id: ''},
          eq3: {name: '', id: ''},
          eq4: {name: '', id: ''}
        }
      }
    }
  },
  mounted () {
    axios({ method: 'GET', 'url': 'http://localhost:5000/api/teams' }).then(result => {
      this.response = result.data
      // console.log(JSON.stringify(this.response))
      this.teams.a.eq1.name = this.response[0].name
      this.teams.a.eq1.id = this.response[0].id
      this.teams.a.eq2.name = this.response[1].name
      this.teams.a.eq2.id = this.response[1].id
      this.teams.a.eq3.name = this.response[2].name
      this.teams.a.eq3.id = this.response[2].id
      this.teams.a.eq4.name = this.response[3].name
      this.teams.a.eq4.id = this.response[3].id
      this.teams.b.eq1.name = this.response[4].name
      this.teams.b.eq1.id = this.response[4].id
      this.teams.b.eq2.name = this.response[5].name
      this.teams.b.eq2.id = this.response[5].id
      this.teams.b.eq3.name = this.response[6].name
      this.teams.b.eq3.id = this.response[6].id
      this.teams.b.eq4.name = this.response[7].name
      this.teams.b.eq4.id = this.response[7].id
      this.teams.c.eq1.name = this.response[8].name
      this.teams.c.eq1.id = this.response[8].id
      this.teams.c.eq2.name = this.response[9].name
      this.teams.c.eq2.id = this.response[9].id
      this.teams.c.eq3.name = this.response[10].name
      this.teams.c.eq3.id = this.response[10].id
      this.teams.c.eq4.name = this.response[11].name
      this.teams.c.eq4.id = this.response[11].id
      this.teams.d.eq1.name = this.response[12].name
      this.teams.d.eq1.id = this.response[12].id
      this.teams.d.eq2.name = this.response[13].name
      this.teams.d.eq2.id = this.response[13].id
      this.teams.d.eq3.name = this.response[14].name
      this.teams.d.eq3.id = this.response[14].id
      this.teams.d.eq4.name = this.response[15].name
      this.teams.d.eq4.id = this.response[15].id
      this.teams.e.eq1.name = this.response[16].name
      this.teams.e.eq1.id = this.response[16].id
      this.teams.e.eq2.name = this.response[17].name
      this.teams.e.eq2.id = this.response[17].id
      this.teams.e.eq3.name = this.response[18].name
      this.teams.e.eq3.id = this.response[18].id
      this.teams.e.eq4.name = this.response[19].name
      this.teams.e.eq4.id = this.response[19].id
      this.teams.f.eq1.name = this.response[20].name
      this.teams.f.eq1.id = this.response[20].id
      this.teams.f.eq2.name = this.response[21].name
      this.teams.f.eq2.id = this.response[21].id
      this.teams.f.eq3.name = this.response[22].name
      this.teams.f.eq3.id = this.response[22].id
      this.teams.f.eq4.name = this.response[23].name
      this.teams.f.eq4.id = this.response[23].id
      this.teams.g.eq1.name = this.response[24].name
      this.teams.g.eq1.id = this.response[24].id
      this.teams.g.eq2.name = this.response[25].name
      this.teams.g.eq2.id = this.response[25].id
      this.teams.g.eq3.name = this.response[26].name
      this.teams.g.eq3.id = this.response[26].id
      this.teams.g.eq4.name = this.response[27].name
      this.teams.g.eq4.id = this.response[27].id
      this.teams.h.eq1.name = this.response[28].name
      this.teams.h.eq1.id = this.response[28].id
      this.teams.h.eq2.name = this.response[29].name
      this.teams.h.eq2.id = this.response[29].id
      this.teams.h.eq3.name = this.response[30].name
      this.teams.h.eq3.id = this.response[30].id
      this.teams.h.eq4.name = this.response[31].name
      this.teams.h.eq4.id = this.response[31].id
    }, error => {
      console.error(error)
    })
  },
  watch: {
    'checkedA': function (val) {
      if (this.checkedA.length > 2) {
        this.checkedA.length = 2
      } else {
        console.log(this.checkedA.length + ', ' + this.checkedBackA.length)
        console.log(this.checkedA.length > this.checkedBackA.length)
        if (this.checkedA.length > this.checkedBackA.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedA[this.checkedA.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackA.push(this.checkedA[this.checkedA.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackA.filter(x => !this.checkedA.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackA.indexOf(aElim)
          this.checkedBackA.splice(index, 1)
        }
      }
    },
    'checkedB': function () {
      if (this.checkedB.length > 2) {
        this.checkedB.length = 2
      } else {
        console.log(this.checkedB.length + ', ' + this.checkedBackB.length)
        console.log(this.checkedB.length > this.checkedBackB.length)
        if (this.checkedB.length > this.checkedBackB.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedB[this.checkedB.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackB.push(this.checkedB[this.checkedB.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackB.filter(x => !this.checkedB.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackB.indexOf(aElim)
          this.checkedBackB.splice(index, 1)
        }
      }
    },
    'checkedC': function () {
      if (this.checkedC.length > 2) {
        this.checkedC.length = 2
      } else {
        console.log(this.checkedC.length + ', ' + this.checkedBackC.length)
        console.log(this.checkedC.length > this.checkedBackC.length)
        if (this.checkedC.length > this.checkedBackC.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedC[this.checkedC.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackC.push(this.checkedC[this.checkedC.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackC.filter(x => !this.checkedC.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackC.indexOf(aElim)
          this.checkedBackC.splice(index, 1)
        }
      }
    },
    'checkedD': function () {
      if (this.checkedD.length > 2) {
        this.checkedD.length = 2
      } else {
        console.log(this.checkedD.length + ', ' + this.checkedBackD.length)
        console.log(this.checkedD.length > this.checkedBackD.length)
        if (this.checkedD.length > this.checkedBackD.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedD[this.checkedA.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackD.push(this.checkedD[this.checkedA.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackD.filter(x => !this.checkedD.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackD.indexOf(aElim)
          this.checkedBackD.splice(index, 1)
        }
      }
    },
    'checkedE': function () {
      if (this.checkedE.length > 2) {
        this.checkedE.length = 2
      } else {
        console.log(this.checkedE.length + ', ' + this.checkedBackE.length)
        console.log(this.checkedE.length > this.checkedBackE.length)
        if (this.checkedE.length > this.checkedBackE.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedE[this.checkedE.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackE.push(this.checkedE[this.checkedE.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackE.filter(x => !this.checkedE.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackE.indexOf(aElim)
          this.checkedBackE.splice(index, 1)
        }
      }
    },
    'checkedF': function () {
      if (this.checkedF.length > 2) {
        this.checkedF.length = 2
      } else {
        console.log(this.checkedF.length + ', ' + this.checkedBackF.length)
        console.log(this.checkedF.length > this.checkedBackF.length)
        if (this.checkedF.length > this.checkedBackF.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedF[this.checkedA.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackF.push(this.checkedF[this.checkedA.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackF.filter(x => !this.checkedF.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackF.indexOf(aElim)
          this.checkedBackF.splice(index, 1)
        }
      }
    },
    'checkedG': function () {
      if (this.checkedG.length > 2) {
        this.checkedG.length = 2
      } else {
        console.log(this.checkedG.length + ', ' + this.checkedBackG.length)
        console.log(this.checkedG.length > this.checkedBackG.length)
        if (this.checkedG.length > this.checkedBackG.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedG[this.checkedA.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackG.push(this.checkedG[this.checkedA.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackG.filter(x => !this.checkedG.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackG.indexOf(aElim)
          this.checkedBackG.splice(index, 1)
        }
      }
    },
    'checkedH': function () {
      if (this.checkedH.length > 2) {
        this.checkedH.length = 2
      } else {
        console.log(this.checkedH.length + ', ' + this.checkedBackH.length)
        console.log(this.checkedH.length > this.checkedBackH.length)
        if (this.checkedH.length > this.checkedBackH.length) {
          // agrega apuesta
          axios({ method: 'POST', 'url': 'http://localhost:5000/api/bets/newBet', 'data': { username: this.username, teamId: this.checkedH[this.checkedA.length - 1] } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          this.checkedBackH.push(this.checkedH[this.checkedA.length - 1])
        } else {
          // elimina apuesta
          let aElim = this.checkedBackH.filter(x => !this.checkedH.includes(x))[0]
          axios({ method: 'DELETE', 'url': 'http://localhost:5000/api/bets/cancelBet', 'data': { username: this.username, teamId: aElim } }).then(result => {
            this.response = result.data
          }, error => {
            console.error(error)
          })
          let index = this.checkedBackH.indexOf(aElim)
          this.checkedBackH.splice(index, 1)
        }
      }
    }
  }
}

</script>
<style>

</style>
