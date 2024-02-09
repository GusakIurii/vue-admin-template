<template>
  <div id="app">
    <h2>Сообщения WebSocket</h2>
    <button v-on:click="sendMessage(msg)">Send Message</button>
    <div class="values">
      <h3>Voltage Phase R:&nbsp; {{ Voltage_Phase_R }} V</h3>
      <h3>Voltage Phase S:&nbsp; {{ Voltage_Phase_S }} V</h3>
      <h3>Voltage Phase T:&nbsp; {{ Voltage_Phase_T }} V</h3>
      <h3>Fault 1:&nbsp;{{ fault1 }}</h3>
      <h3>Fault 2:&nbsp;{{ fault2 }}</h3>
      <h3>Fault 3:&nbsp;{{ fault3 }}</h3>
      <h5 class="text-danger" v-html="SPIcommunicationErrorDCside" />
      <h5 class="text-danger" v-html="SPIcommunicationErrorACside" />
      <h5 class="text-danger" v-html="chipErrorDCside" />
      <h5 class="text-danger" v-html="chipErrorACside" />
      <h5 class="text-danger" v-html="auxiliaryPowerError" />
      <h5 class="text-danger" v-html="inverterSoftStartFailure" />
      <h5 class="text-danger" v-html="relayDetectionFailure" />
      <h5 class="text-danger" v-html="lowInsulationImpedance" />
      <h5 class="text-danger" v-html="groundingError" />
      <h5 class="text-danger" v-html="inputModeSettingError" />
      <h5 class="text-danger" v-html="CTerror" />
      <h5 class="text-danger" v-html="inputReversalError" />
      <h5 class="text-danger" v-html="parallelError" />
      <h5 class="text-danger" v-html="serialNumberError" />
      <h3>Fault 4:&nbsp;{{ fault4 }}</h3>
      <h3>Fault 5:&nbsp;{{ fault5 }}</h3>
      <h3>Fault 6:&nbsp;{{ fault6 }}</h3>
      <h3>Fault 7:&nbsp;{{ fault7 }}</h3>
      <h3>Fault 8:&nbsp;{{ fault8 }}</h3>
      <h5 class="text-danger" v-html="overtemperatureDerating" />
      <h5 class="text-danger" v-html="frequencyDownLoad" />
      <h5 class="text-danger" v-html="frequencyLoading" />
      <h5 class="text-danger" v-html="voltageDownLoad" />
      <h5 class="text-danger" v-html="voltageLoading" />
      <h5 class="text-danger" v-html="lightningFrotectionFailureDC" />
      <h5 class="text-danger" v-html="lightningFrotectionFailureAC" />
      <h5 class="text-danger" v-html="batteryLowVoltageProtection" />
      <h5 class="text-danger" v-html="batteryLowVoltageShutdown" />
      <h5 class="text-danger" v-html="batteryLowVoltagePreAlarm" />
      <h3>Fault 9:&nbsp;{{ fault9 }}</h3>
      <h3>Fault 10:&nbsp;{{ fault10 }}</h3>
      <h3>Fault 11:&nbsp;{{ fault11 }}</h3>
      <h3>Fault 12:&nbsp;{{ fault12 }}</h3>
      <h3>Fault 13:&nbsp;{{ fault13 }}</h3>
      <h3>Fault 14:&nbsp;{{ fault14 }}</h3>
      <h3>Fault 15:&nbsp;{{ fault15 }}</h3>
      <h3>Fault 16:&nbsp;{{ fault16 }}</h3>
      <h3>Fault 17:&nbsp;{{ fault17 }}</h3>
      <h3>Fault 18:&nbsp;{{ fault18 }}</h3>
    </div>
  </div>
</template>

<script>
import { default as dataInv } from "@/components/Inverter/data-inv-01"
import { computed } from '@/computed/computedInv01.js'
export default {
  name: 'App',
  mixins: [computed],
  data() {
    return dataInv
  },
  created: function() {
    if (this.connection === null) {
      console.log("Starting connection to WebSocket Server")
      this.connection = new WebSocket("ws://35.217.51.190:1880/spe")
      console.log("connection: " + this.connection)
    }
    this.connection.onmessage = (event) => {
      const message = JSON.parse(event.data)
      //console.log('event.data: ' + event.data)
      if (event.data[2] === 'V') {
        this.Voltage_Phase_R = message.Voltage_Phase_R
        this.Voltage_Phase_S = message.Voltage_Phase_S
        this.Voltage_Phase_T = message.Voltage_Phase_T

        console.log('Voltage_Phase_R: ' + this.Voltage_Phase_R)
        console.log('Voltage_Phase_S: ' + this.Voltage_Phase_S)
        console.log('Voltage_Phase_T: ' + this.Voltage_Phase_T)
        //console.log('faultTest: ' + this.faultTest)
        //console.log('alarmTest: ' + this.alarmTest)
      }
      if (event.data[2] === 'i') {
        this.fault1 = message.errors.fault1
        this.fault2 = message.errors.fault2
        this.fault3 = message.errors.fault3
        this.fault4 = message.errors.fault4
        this.fault5 = message.errors.fault5
        this.fault6 = message.errors.fault6
        this.fault7 = message.errors.fault7
        this.fault8 = message.errors.fault8
        this.fault9 = message.errors.fault9
        this.fault10 = message.errors.fault10
        this.fault11 = message.errors.fault11
        this.fault12 = message.errors.fault12
        this.fault13 = message.errors.fault13
        this.fault14 = message.errors.fault14
        this.fault15 = message.errors.fault15
        this.fault16 = message.errors.fault16
        this.fault17 = message.errors.fault17
        this.fault18 = message.errors.fault18
      }
    }
    this.connection.onopen = function(event) {
      console.log("Successfully connected to the echo websocket server...")
    }
    this.connection.onclose = () => {
      console.log('Web Socket Connection Closed')
    }
    if (window.Closed) {
      console.log('Window Closed')
    }
  },
  methods: {
    sendMessage: function(message) {
      console.log(this.connection)
      this.connection.send(message)
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.values{
  padding-top: 50px;
  padding-bottom: 50px;
}
.alarms{
  padding-top: 50px;
  padding-bottom: 50px;

}
</style>
