<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="User name">
        <el-input v-model="user.username" v-validate="'required'" name="username" :class="{ 'is-invalid': submitted && errors.has('username') }" />
        <div v-show="submitted && !user.username" class="invalid-feedback">Username is required</div>
      </el-form-item>
      <el-form-item label="Role">
        <v-select id="role" v-model="user.role" :options="['guest', 'user1', 'user2', 'user3' ]" v-validate="'required'" name="role" :class="{ 'is-invalid': submitted && errors.has('role') }"></v-select>
        <!-- <el-input v-model="user.role" v-validate="'required'" name="role" :class="{ 'is-invalid': submitted && errors.has('role') }" /> -->
        <div v-show="submitted && !user.role" class="invalid-feedback">Role is required</div>
      </el-form-item>
      <el-form-item label="First name">
        <el-input v-model="user.firstName" v-validate="'required'" name="firstName" :class="{ 'is-invalid': submitted && errors.has('firstName') }"/>
        <div v-show="submitted && !user.firstName" class="invalid-feedback">First name is required</div>
      </el-form-item>
      <el-form-item label="Last name">
        <el-input v-model="user.lastName" v-validate="'required'" name="lastName" :class="{ 'is-invalid': submitted && errors.has('lastName') }"/>
        <div v-show="submitted && !user.lastName" class="invalid-feedback">Last name is required</div>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="user.password" type="password" v-validate="{ required: true, min: 6 }" name="password" :class="{ 'is-invalid': submitted && errors.has('password') }"/>
        <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
      </el-form-item>
      <!--
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item> -->
      <el-form-item>
        <!-- <el-button type="primary" @click="handleSubmit">Register</el-button> -->
        <el-button type="primary" @click.native.prevent="handleSubmit">Register</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import { extend } from 'vee-validate'
import store from '@/store'
// import vSelect from "vue-select"

export default {
  data() {
    return {
      submitted: false,
      user: {
        // name: '',
        // region: '',
        // date1: '',
        // date2: '',
        // delivery: false,
        // type: [],
        // resource: '',
        // desc: ''
        username: '',
        role: '',
        firstName: '',
        lastName: '',
        password: ''
      }
    }
  },
  computed: {
            ...mapState({
            // user: state => state.user,
            users: state => state.users.all
        })
        // ...mapState('user',  ['state']),
            // user: state => state.user,
            // users: state => state.users.all
        // function msg() {
        //   return this.$store.state.alert.message
        // }
  },
  methods: {
            msg: function () {
          return this.$store.state.alert.message
        },
    resetInputs() {
      this.user.username = '',
      this.user.role = '',
      this.user.firstName = '',
      this.user.lastName = '',
      this.user.password = ''
      // this.$refs["password"].value = "";
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.resetInputs(),
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
        ...mapActions('user', ['register']
        ),
        handleSubmit(e) {
            this.msg
            this.submitted = true
            console.log('store: ' + this.msg)
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.register(this.user)
                    // resetInputs()
                      setTimeout(() => {
                          this.$alert(this.msg())
                          // resetInputs()
                      }, 1000)
                      setTimeout(() => {
                      this.resetInputs()
                      // this.userpassword = ''
                      }, 3000)
                      
                        //   this.$message({
                        //   message: this.msg,
                        //   type: 'warning'
                        // })
                      // this.$alert(store.alert.state.message)
                    
                    
                    // console.log('this.$store.user.state.registrationSuccess: ' + user.state.registrationSuccess)
                    // if(user.state.registrationSuccess){
                    //   this.$alert('Register succeful')
                    // }
                    // this.$store.dispatch('alert/success', response.message, { root: true })
                    // this.$alert('Register succeful')
                //     this.$message({
                //   message: 'Registration succefull!',
                //   type: 'warning'
                // })
                }
            })
        }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.vs__dropdown-toggle{
  height: 40px;
}
</style>

