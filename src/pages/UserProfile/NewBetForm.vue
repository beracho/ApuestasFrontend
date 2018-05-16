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
                <md-checkbox v-model="teams.a.eq1.checked" :value="this.teams.a.eq1.id">{{this.teams.a.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.a.eq2.checked" :value="this.teams.a.eq2.id">{{this.teams.a.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.a.eq3.checked" :value="this.teams.a.eq3.id">{{this.teams.a.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.a.eq4.checked" :value="this.teams.a.eq4.id">{{this.teams.a.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo B</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.b.eq1.checked" :value="this.teams.b.eq1.id">{{this.teams.b.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.b.eq2.checked" :value="this.teams.b.eq2.id">{{this.teams.b.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.b.eq3.checked" :value="this.teams.b.eq3.id">{{this.teams.b.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.b.eq4.checked" :value="this.teams.b.eq4.id">{{this.teams.b.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo C</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.c.eq1.checked" :value="this.teams.c.eq1.id">{{this.teams.c.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.c.eq2.checked" :value="this.teams.c.eq2.id">{{this.teams.c.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.c.eq3.checked" :value="this.teams.c.eq3.id">{{this.teams.c.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.c.eq4.checked" :value="this.teams.c.eq4.id">{{this.teams.c.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo D</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.d.eq1.checked" :value="this.teams.d.eq1.id">{{this.teams.d.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.d.eq2.checked" :value="this.teams.d.eq2.id">{{this.teams.d.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.d.eq3.checked" :value="this.teams.d.eq3.id">{{this.teams.d.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.d.eq4.checked" :value="this.teams.d.eq4.id">{{this.teams.d.eq4.name}}</md-checkbox>
              </md-list>
            </div>
          </md-list-item>
          <md-list-item class="md-double-line">
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo E</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.e.eq1.checked" :value="this.teams.e.eq1.id">{{this.teams.e.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.e.eq2.checked" :value="this.teams.e.eq2.id">{{this.teams.e.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.e.eq3.checked" :value="this.teams.e.eq3.id">{{this.teams.e.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.e.eq4.checked" :value="this.teams.e.eq4.id">{{this.teams.e.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo F</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.f.eq1.checked" :value="this.teams.f.eq1.id">{{this.teams.f.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.f.eq2.checked" :value="this.teams.f.eq2.id">{{this.teams.f.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.f.eq3.checked" :value="this.teams.f.eq3.id">{{this.teams.f.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.f.eq4.checked" :value="this.teams.f.eq4.id">{{this.teams.f.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo G</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.g.eq1.checked" :value="this.teams.g.eq1.id">{{this.teams.g.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.g.eq2.checked" :value="this.teams.g.eq2.id">{{this.teams.g.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.g.eq3.checked" :value="this.teams.g.eq3.id">{{this.teams.g.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.g.eq4.checked" :value="this.teams.g.eq4.id">{{this.teams.g.eq4.name}}</md-checkbox>
              </md-list>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-25">
              <h3>Grupo H</h3>
              <md-list class="md-double-line">
                <md-checkbox v-model="teams.h.eq1.checked" :value="this.teams.h.eq1.id">{{this.teams.h.eq1.name}}</md-checkbox>
                <md-checkbox v-model="teams.h.eq2.checked" :value="this.teams.h.eq2.id">{{this.teams.h.eq2.name}}</md-checkbox>
                <md-checkbox v-model="teams.h.eq3.checked" :value="this.teams.h.eq3.id">{{this.teams.h.eq3.name}}</md-checkbox>
                <md-checkbox v-model="teams.h.eq4.checked" :value="this.teams.h.eq4.id">{{this.teams.h.eq4.name}}</md-checkbox>
              </md-list>
            </div>
          </md-list-item>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";

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
      teams: {
        a: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        b: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        c: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        d: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        e: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        f: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        g: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        },
        h: {
          eq1: {
            name: '',
            id: '',
            checked: false
          },
          eq2: {
            name: '',
            id: '',
            checked: false
          },
          eq3: {
            name: '',
            id: '',
            checked: false
          },
          eq4: {
            name: '',
            id: '',
            checked: false
          }
        }
      }
    }
  },
  mounted() {
    axios({ method: "GET", "url": "http://localhost:5000/api/teams" }).then(result => {
      this.response = result.data;
      // console.log(JSON.stringify(this.response));
      this.teams.a.eq1.name = this.response[0].name;
      this.teams.a.eq1.id = this.response[0].id;
      this.teams.a.eq2.name = this.response[1].name;
      this.teams.a.eq2.id = this.response[1].id;
      this.teams.a.eq3.name = this.response[2].name;
      this.teams.a.eq3.id = this.response[2].id;
      this.teams.a.eq4.name = this.response[3].name;
      this.teams.a.eq4.id = this.response[3].id;
      this.teams.b.eq1.name = this.response[4].name;
      this.teams.b.eq1.id = this.response[4].id;
      this.teams.b.eq2.name = this.response[5].name;
      this.teams.b.eq2.id = this.response[5].id;
      this.teams.b.eq3.name = this.response[6].name;
      this.teams.b.eq3.id = this.response[6].id;
      this.teams.b.eq4.name = this.response[7].name;
      this.teams.b.eq4.id = this.response[7].id;
      this.teams.c.eq1.name = this.response[8].name;
      this.teams.c.eq1.id = this.response[8].id;
      this.teams.c.eq2.name = this.response[9].name;
      this.teams.c.eq2.id = this.response[9].id;
      this.teams.c.eq3.name = this.response[10].name;
      this.teams.c.eq3.id = this.response[10].id;
      this.teams.c.eq4.name = this.response[11].name;
      this.teams.c.eq4.id = this.response[11].id;
      this.teams.d.eq1.name = this.response[12].name;
      this.teams.d.eq1.id = this.response[12].id;
      this.teams.d.eq2.name = this.response[13].name;
      this.teams.d.eq2.id = this.response[13].id;
      this.teams.d.eq3.name = this.response[14].name;
      this.teams.d.eq3.id = this.response[14].id;
      this.teams.d.eq4.name = this.response[15].name;
      this.teams.d.eq4.id = this.response[15].id;
      this.teams.e.eq1.name = this.response[16].name;
      this.teams.e.eq1.id = this.response[16].id;
      this.teams.e.eq2.name = this.response[17].name;
      this.teams.e.eq2.id = this.response[17].id;
      this.teams.e.eq3.name = this.response[18].name;
      this.teams.e.eq3.id = this.response[18].id;
      this.teams.e.eq4.name = this.response[19].name;
      this.teams.e.eq4.id = this.response[19].id;
      this.teams.f.eq1.name = this.response[20].name;
      this.teams.f.eq1.id = this.response[20].id;
      this.teams.f.eq2.name = this.response[21].name;
      this.teams.f.eq2.id = this.response[21].id;
      this.teams.f.eq3.name = this.response[22].name;
      this.teams.f.eq3.id = this.response[22].id;
      this.teams.f.eq4.name = this.response[23].name;
      this.teams.f.eq4.id = this.response[23].id;
      this.teams.g.eq1.name = this.response[24].name;
      this.teams.g.eq1.id = this.response[24].id;
      this.teams.g.eq2.name = this.response[25].name;
      this.teams.g.eq2.id = this.response[25].id;
      this.teams.g.eq3.name = this.response[26].name;
      this.teams.g.eq3.id = this.response[26].id;
      this.teams.g.eq4.name = this.response[27].name;
      this.teams.g.eq4.id = this.response[27].id;
      this.teams.h.eq1.name = this.response[28].name;
      this.teams.h.eq1.id = this.response[28].id;
      this.teams.h.eq2.name = this.response[29].name;
      this.teams.h.eq2.id = this.response[29].id;
      this.teams.h.eq3.name = this.response[30].name;
      this.teams.h.eq3.id = this.response[30].id;
      this.teams.h.eq4.name = this.response[31].name;
      this.teams.h.eq4.id = this.response[31].id;
    }, error => {
      console.error(error);
    });
  }
}

</script>
<style>

</style>
