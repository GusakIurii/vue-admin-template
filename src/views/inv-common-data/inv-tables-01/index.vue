<template>
  <div id="app">      
    <h2>Загальні дані</h2>
    <div class="container-fluid">
     <div class="row justify-content-center">  
    <table class="ex1 table w-75 table-bordered">
        <tbody>
        <tr>
        <td class="headings">Errors</td>
        </tr>
        <tr:empty class="text-danger" v-html="batteryLowVoltageProtection"></tr:empty>
        <tr:empty class=" text-danger" v-html="parallelError"></tr:empty>
        <tr></tr>
               
        </tbody>
    </table>   
    </div>
    </div>
    <div class="container-fluid">
     <div class="row justify-content-center">  
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="2" class="headings">Status Info</td>
        </tr>
        <tr>
            <td class="status-names">SysState</td>
            <td class="status-values">{{ inverterStatus }}</td>
        </tr>
        <tr>
            <td class="status-names">Countdown</td>
            <td class="status-values">{{ Countdown }}</td>
        </tr>
        <tr>
            <td class="status-names">Temperature Env 1</td>
            <td class="status-values">{{ Temperature_Env1 }} °C</td>
        </tr>
        <tr>
            <td class="status-names">Temperature Heat Sink 1</td>
            <td class="status-values">{{ Temperature_HeatSink1 }} °C</td>
        </tr>
        <tr>
            <td class="status-names">Temperature Inv 1</td>
            <td class="status-values">{{ Temperature_Inv1 }} °C</td>
        </tr>
        <tr>
            <td class="status-names">Generation Time Today</td>
            <td class="status-values">{{ GenerationTime_Today }} min</td>
        </tr>
        <tr>
            <td class="status-names">Generation Time Total</td>
            <td class="status-values">{{ GenerationTime_Total }} min</td>
        </tr>
        <tr>
            <td class="status-names">Service Time Total</td>
            <td class="status-values">{{ ServiceTime_Total }} min</td>
        </tr>
        <tr>
            <td class="status-names">Insulation Resistance</td>
            <td class="status-values">{{ InsulationResistance }} Ohm</td>
        </tr>
        <tr>
            <td class="status-names">SysTime Second</td>
            <td class="status-values">{{ SysTime_Date_Str }}.{{ SysTime_Month_Str }}.{{ SysTime_Year }} / {{ SysTime_Hour_Str }}:{{ SysTime_Minute_Str }}:{{ SysTime_Second_Str }}</td>
        </tr>
        </tbody>
    </table>    
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="2" class="headings">System Info</td>
        </tr>
        <tr>
            <td class="status-names">Serial Number</td>
            <td class="status-values">{{ Serial_Number }}</td>
        </tr>
        <tr>
            <td class="status-names">Hardware Version</td>
            <td class="status-values">{{ Hardware_Version }}</td>
        </tr>
        <tr>
            <td class="status-names">Software Version COM</td>
            <td class="status-values">{{ Software_Version_COM }}</td>
        </tr>
        <tr>
            <td class="status-names">Software Version Master</td>
            <td class="status-values">{{ Software_Version_Master }}</td>
        </tr>
        <tr>
            <td class="status-names">Software Version Slave</td>
            <td class="status-values">{{ Software_Version_Slave }}</td>
        </tr>
        <tr>
            <td class="status-names">Safety Version Major</td>
            <td class="status-values">{{ Safety_Version_Major }}</td>
        </tr>
        </tbody>
    </table>    
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="2" class="headings">Classified Info</td>
        </tr>
        <tr>
            <td class="status-names">GFCI</td>
            <td class="status-values">{{ GFCI }} mA</td>
        </tr>
        <tr>
            <td class="status-names">Current Bus Balance</td>
            <td class="status-values">{{ Current_Bus_Balance }} A</td>
        </tr>
        <tr>
            <td class="status-names">DCI R</td>
            <td class="status-values">{{ DCI_R }} mA</td>
        </tr>
        <tr>
            <td class="status-names">DCI S</td>
            <td class="status-values">{{ DCI_S }} mA</td>
        </tr>
        <tr>
            <td class="status-names">DCI T</td>
            <td class="status-values">{{ DCI_T }} mA</td>
        </tr>
        <tr>
            <td class="status-names">DCV R</td>
            <td class="status-values">{{ DCV_R }} mV</td>
        </tr>
        <tr>
            <td class="status-names">DCV S</td>
            <td class="status-values">{{ DCV_S }} mV</td>
        </tr>
        <tr>
            <td class="status-names">DCV T</td>
            <td class="status-values">{{ DCV_T }} mV</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus</td>
            <td class="status-values">{{ Voltage_Bus }} V</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus P</td>
            <td class="status-values">{{ Voltage_Bus_P }} V</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus N</td>
            <td class="status-values">{{ Voltage_Bus_N }} V</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus LLC</td>
            <td class="status-values">{{ Voltage_Bus_LLC }} V</td>
        </tr>
        <tr>
            <td class="status-names">Current BuckBoost</td>
            <td class="status-values">{{ Current_BuckBoost }} A</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus P Half</td>
            <td class="status-values">{{ Voltage_Bus_P_Half }} V</td>
        </tr>
        <tr>
            <td class="status-names">Voltage Bus N Half</td>
            <td class="status-values">{{ Voltage_Bus_N_Half }} V</td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
    <div class="container-fluid">    
    <div class="row justify-content-center">  
    <table style="height:20p%" class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="4" class="headings">PV Input</td>
        </tr>
        <tr>
            <th class="names">pv</th>
            <th class="names">voltage</th>
            <th class="names">current</th>
            <th class="names">power</th>
        </tr>
        <tr>
            <td class="pv-names">pv1</td>
            <td class="values">{{ Voltage_PV1 }} V</td>
            <td class="values">{{ Current_PV1 }} A</td>
            <td class="values">{{ Power_PV1 }} kW</td>
        </tr>
        <tr>
            <td class="pv-names">pv2</td>
            <td class="values">{{ Voltage_PV2 }} V</td>
            <td class="values">{{ Current_PV2 }} A</td>
            <td class="values">{{ Power_PV2 }} kW</td>
        </tr>
        </tbody>
    </table>
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="3" class="headings">Battery Input</td>
        </tr>
        <tr>
            <th class="names">item</th>
            <th class="names">bat1</th>
            <th class="names">bat2</th>
        </tr>
        <tr>
            <td class="bat-names">Voltage</td>
            <td class="values">{{ Voltage_Bat1 }} V</td>
            <td class="values">{{ Voltage_Bat2 }} V</td>
        </tr>
        <tr>
            <td class="bat-names">Current</td>
            <td class="values">{{ Current_Bat1 }} A</td>
            <td class="values">{{ Current_Bat2 }} A</td>
        </tr>
        <tr>
            <td class="bat-names">Power</td>
            <td class="values">{{ Power_Bat1 }} kW</td>
            <td class="values">{{ Power_Bat2 }} kW</td>
        </tr>
        <tr>
            <td class="bat-names">Temp</td>
            <td class="values">{{ Temperature_Env_Bat1 }} °C</td>
            <td class="values">{{ Temperature_Env_Bat2 }} °C</td>
        </tr>
        <tr>
            <td class="bat-names">SOC</td>
            <td class="values">{{ SOC_Bat1 }} %</td>
            <td class="values">{{ SOC_Bat2 }} %</td>
        </tr>
        <tr>
            <td class="bat-names">SOH</td>
            <td class="values">{{ SOH_Bat1 }} %</td>
            <td class="values">{{ SOH_Bat2 }} %</td>
        </tr>
        <tr>
            <td class="bat-names">Cycle</td>
            <td class="values">{{ ChargeCycle_Bat1 }}</td>
            <td class="values">{{ ChargeCycle_Bat2 }}</td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
    <div class="container-fluid">    
    <div class="row justify-content-center">  
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="2" class="headings">On Grid Output</td>
        </tr>
        <tr>
            <td class="names">Frequency Grid</td>
            <td class="values">{{ Frequency_Grid }} Hz</td>
        </tr>
        <tr>
            <td class="names">Active Power Output Total</td>
            <td class="values">{{ ActivePower_Output_Total }} kW</td>
        </tr>
        <tr>
            <td class="names">Active Power PCC Total</td>
            <td class="values">{{ ActivePower_PCC_Total }} kW</td>
        </tr>
        <tr>
            <td class="names">Voltage Phase R</td>
            <td class="values">{{ Voltage_Phase_R }} V</td>
        </tr>
        <tr>
            <td class="names">Current Output R</td>
            <td class="values">{{ Current_Output_R }} A</td>
        </tr>
        <tr>
            <td class="names">Current PCC R</td>
            <td class="values">{{ Current_PCC_R }} A</td>
        </tr>
        <tr>
            <td class="names">Voltage Phase S</td>
            <td class="values">{{ Voltage_Phase_S }} V</td>
        </tr>
        <tr>
            <td class="names">Current Output S</td>
            <td class="values">{{ Current_Output_S }} A</td>
        </tr>
        <tr>
            <td class="names">Current PCC S</td>
            <td class="values">{{ Current_PCC_S }} A</td>
        </tr>
        <tr>
            <td class="names">Voltage Phase T</td>
            <td class="values">{{ Voltage_Phase_T }} V</td>
        </tr>
        <tr>
            <td class="names">Current Output T</td>
            <td class="values">{{ Current_Output_T }} A</td>
        </tr>
        <tr>
            <td class="names">Current PCC T</td>
            <td class="values">{{ Current_PCC_T }} A</td>
        </tr>
        <tr>
            <td class="names">Active Power PV Ext</td>
            <td class="values">{{ ActivePower_PV_Ext }} kW</td>
        </tr>
        <tr>
            <td class="names">Active Power Load Sys</td>
            <td class="values">{{ ActivePower_Load_Sys }} kW</td>
        </tr>
        </tbody>
    </table>
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="2" class="headings">Off Grid Output</td>
        </tr>
        <tr>
            <td class="names">Active Power Load Total</td>
            <td class="values">{{ ActivePower_Load_Total }} kW</td>
        </tr>
        <tr>
            <td class="names">Frequency Output</td>
            <td class="values">{{ Frequency_Output }} Hz</td>
        </tr>
        <tr>
            <td class="names">Voltage Output R</td>
            <td class="values">{{ Voltage_Output_R }} V</td>
        </tr>
        <tr>
            <td class="names">Current Load R</td>
            <td class="values">{{ Current_Load_R }} A</td>
        </tr>
        <tr>
            <td class="names">Active Power Load R</td>
            <td class="values">{{ ActivePower_Load_R }} kW</td>
        </tr>
        <tr>
            <td class="names">Voltage Output S</td>
            <td class="values">{{ Voltage_Output_S }} V</td>
        </tr>
        <tr>
            <td class="names">Current Load S</td>
            <td class="values">{{ Current_Load_S }} A</td>
        </tr>
        <tr>
            <td class="names">Active Power Load S</td>
            <td class="values">{{ ActivePower_Load_S }} kW</td>
        </tr>
        <tr>
            <td class="names">Voltage Output T</td>
            <td class="values">{{ Voltage_Output_T }} V</td>
        </tr>
        <tr>
            <td class="names">Current Load T</td>
            <td class="values">{{ Current_Load_T }} A</td>
        </tr>
        <tr>
            <td class="names">Active Power Load T</td>
            <td class="values">{{ ActivePower_Load_T }} kW</td>
        </tr>
        </tbody>
    </table>
    <table class="table w-25 table-bordered">
        <tbody>
        <tr>
        <td colspan="3" class="headings">Electricity</td>
        </tr>
        <tr>
            <th class="names">item</th>
            <th class="names">today</th>
            <th class="names">total</th>
        </tr>
        <tr>
            <td class="el-names">PV Generation</td>
            <td class="values">{{ PV_Generation_Today }} kWh</td>
            <td class="values">{{ PV_Generation_Total }} kWh</td>
        </tr>
        <tr>
            <td class="el-names">Load Consumption</td>
            <td class="values">{{ Load_Consumption_Today }} kWh</td>
            <td class="values">{{ Load_Consumption_Total }} kWh</td>
        </tr>
        <tr>
            <td class="el-names">Energy Purchase</td>
            <td class="values">{{ Energy_Purchase_Today }} kWh</td>
            <td class="values">{{ Energy_Purchase_Total }} kWh</td>
        </tr>
        <tr>
            <td class="el-names">Energy Seiling</td>
            <td class="values">{{ Energy_Selling_Today }} kWh</td>
            <td class="values">{{ Energy_Selling_Total }} kWh</td>
        </tr>
        <tr>
            <td class="el-names">Battery Charge</td>
            <td class="values">{{ Bat_Charge_Today }} kWh</td>
            <td class="values">{{ Bat_Charge_Total }} kWh</td>
        </tr>
        <tr>
            <td class="el-names">Battery DisCharge</td>
            <td class="values">{{ Bat_Discharge_Today }} kWh</td>
            <td class="values">{{ Bat_Discharge_Total }} kWh</td>
        </tr>
        </tbody>
    </table>
    </div>
    </div> 
  </div>
</template>

<script>
import { default as dataInv } from "@/components/Inverter/data-inv-01"
import { computed } from '@/computed/computedInv01.js'
// import mainsvg from '@/components/Inverter/mnemo/mainsvg1/index.vue'
import mainsvg from '@/assets/mnemo/test.svg'
export default {
  name: 'App',
  mixins: [computed],
  data() {
    return dataInv
  },
    components: {
    mainsvg,
  },
    created: function() {
    if (this.connection === null) {
      console.log("Starting connection to WebSocket Server")
      this.connection = new WebSocket("wss://admin.spe.pp.ua/InvRead_1780240480")
      //console.log("connection: " + this.connection)
      //this.connection.send('exec=1')
    }
    this.connection.onmessage = (event) => {
      const message = JSON.parse(event.data)
        //   console.log('event.data: ' + event.data)
    // SysInfo2
    if (message.idMsg === 'SysInfo2') {
        this.loggerSN = message.loggerSN
        this.Production_Code = message.SysInfo2.Production_Code
        this.Serial_Number = message.SysInfo2.Serial_Number
        this.Hardware_Version = message.SysInfo2.Hardware_Version
        this.Software_Version_Stage_COM = message.SysInfo2.Software_Version_Stage_COM
        this.Software_Version_Major_COM = message.SysInfo2.Software_Version_Major_COM
        this.Software_Version_Custom_COM = message.SysInfo2.Software_Version_Custom_COM
        this.Software_Version_Minor_COM = message.SysInfo2.Software_Version_Minor_COM
        this.Software_Version_Stage_Master = message.SysInfo2.Software_Version_Stage_Master
        this.Software_Version_Custom_Master = message.SysInfo2.Software_Version_Custom_Master
        this.Software_Version_Minor_Master = message.SysInfo2.Software_Version_Minor_Master
        this.Software_Version_COM = message.SysInfo2.Software_Version_COM
        this.Software_Version_Master = message.SysInfo2.Software_Version_Master
        this.Software_Version_Slave = message.SysInfo2.Software_Version_Slave
        this.Safety_Version_Major = message.SysInfo2.Safety_Version_Major
    }
      // sysinfo1
      else if (message.idMsg === 'sysinfo1') {
        // console.log('loggerSN: ' + this.loggerSN)
        // const message1 = JSON.parse(event.data)
        // this.loggerSN = message.loggerSN
        this.inverterStatus = message.sysinfo1.inverterStatus
        this.Countdown = message.sysinfo1.Countdown
        this.Temperature_Env1 = message.sysinfo1.Temperature_Env1  
        this.Temperature_Env2 = message.sysinfo1.Temperature_Env2  
        this.Temperature_HeatSink1 = message.sysinfo1.Temperature_HeatSink1  
        this.Temperature_HeatSink2 = message.sysinfo1.Temperature_HeatSink2  
        this.Temperature_HeatSink3 = message.sysinfo1.Temperature_HeatSink3  
        this.Temperature_HeatSink4 = message.sysinfo1.Temperature_HeatSink4  
        this.Temperature_HeatSink5 = message.sysinfo1.Temperature_HeatSink5  
        this.Temperature_HeatSink6 = message.sysinfo1.Temperature_HeatSink6  
        this.Temperature_Inv1 = message.sysinfo1.Temperature_Inv1  
        this.Temperature_Inv2 = message.sysinfo1.Temperature_Inv2  
        this.Temperature_Inv3 = message.sysinfo1.Temperature_Inv3  
        this.Temp_Rsvd1 = message.sysinfo1.Temp_Rsvd1  
        this.Temp_Rsvd2 = message.sysinfo1.Temp_Rsvd2  
        this.Temp_Rsvd3 = message.sysinfo1.Temp_Rsvd3  
        this.GenerationTime_Today = message.sysinfo1.GenerationTime_Today  
        this.GenerationTime_Total = message.sysinfo1.GenerationTime_Total  
        this.ServiceTime_Total = message.sysinfo1.ServiceTime_Total  
        this.InsulationResistance = message.sysinfo1.InsulationResistance  
        this.SysTime_Year = message.sysinfo1.SysTime_Year  
        this.SysTime_Month = message.sysinfo1.SysTime_Month 
        this.SysTime_Date = message.sysinfo1.SysTime_Date  
        this.SysTime_Hour = message.sysinfo1.SysTime_Hour  
        this.SysTime_Minute = message.sysinfo1.SysTime_Minute  
        this.SysTime_Second = message.sysinfo1.SysTime_Second  
        this.fault1 = message.errors.fault1
        this.fault2 = message.errors.fault2
        this.fault3 = message.errors.fault3
        this.fault4 = message.errors.fault4
        this.fault5 = message.errors.fault5
        this.fault6 = message.errors.fault6
        this.fault7 = message.errors.fault7
        this.fault8 = message.errors.fault8
        // console.log("fault8: " + message.errors.fault8)
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
        this.fault19 = message.errors.fault19
        this.fault20 = message.errors.fault20
        this.fault21 = message.errors.fault21
        this.fault22 = message.errors.fault22
        this.fault23 = message.errors.fault23
        this.fault24 = message.errors.fault24
        this.fault25 = message.errors.fault25
        this.fault26 = message.errors.fault26
        this.fault27 = message.errors.fault27
    if(parseInt(this.SysTime_Month) < 10){
    this.SysTime_Month_Str = "0" + this.SysTime_Month 
    }else{
    this.SysTime_Month_Str = this.SysTime_Month    
    }
    if(parseInt(this.SysTime_Date) < 10){
       this.SysTime_Date_Str = "0" + this.SysTime_Date 
    }else{
       this.SysTime_Date_Str = this.SysTime_Date 
    }
    if(parseInt(this.SysTime_Hour) < 10){
       this.SysTime_Hour_Str = "0" + this.SysTime_Hour 
    }else{
       this.SysTime_Hour_Str = this.SysTime_Hour 
    }
    if(parseInt(this.SysTime_Minute) < 10){
       this.SysTime_Minute_Str = "0" + this.SysTime_Minute 
    }else{
       this.SysTime_Minute_Str = this.SysTime_Minute 
    }
    if(parseInt(this.SysTime_Second) < 10){
       this.SysTime_Second_Str = "0" + this.SysTime_Second 
    }else{
       this.SysTime_Second_Str = this.SysTime_Second 
    }
    }
      else if (message.idMsg === 'grid') {
        this.Frequency_Grid = message.grid.Frequency_Grid          
        this.ActivePower_Output_Total = message.grid.ActivePower_Output_Total          
        this.ReactivePower_Output_Total = message.grid.ReactivePower_Output_Total          
        this.ApparentPower_Output_Total = message.grid.ApparentPower_Output_Total          
        this.ActivePower_PCC_Total = message.grid.ActivePower_PCC_Total          
        this.ReactivePower_PCC_Total = message.grid.ReactivePower_PCC_Total          
        this.ApparentPower_PCC_Total = message.grid.ApparentPower_PCC_Total          
        this.GridOutput_Rsvd1 = message.grid.GridOutput_Rsvd1          
        this.GridOutput_Rsvd2 = message.grid.GridOutput_Rsvd2          
        this.Voltage_Phase_R = message.grid.Voltage_Phase_R          
        this.Current_Output_R = message.grid.Current_Output_R          
        this.ActivePower_Output_R = message.grid.ActivePower_Output_R          
        this.ReactivePower_Output_R = message.grid.ReactivePower_Output_R          
        this.PowerFactor_Output_R = message.grid.PowerFactor_Output_R          
        this.Current_PCC_R = message.grid.Current_PCC_R          
        this.ActivePower_PCC_R = message.grid.ActivePower_PCC_R         
        this.ReactivePower_PCC_R = message.grid.ReactivePower_PCC_R         
        this.PowerFactor_PCC_R = message.grid.PowerFactor_PCC_R         
        this.R_Rsvd1 = message.grid.R_Rsvd1         
        this.R_Rsvd2 = message.grid.R_Rsvd2         
        this.Voltage_Phase_S = message.grid.Voltage_Phase_S         
        this.Current_Output_S = message.grid.Current_Output_S         
        this.ActivePower_Output_S = message.grid.ActivePower_Output_S         
        this.ReactivePower_Output_S = message.grid.ReactivePower_Output_S         
        this.PowerFactor_Output_S = message.grid.PowerFactor_Output_S         
        this.Current_PCC_S = message.grid.Current_PCC_S         
        this.ActivePower_PCC_S = message.grid.ActivePower_PCC_S         
        this.ReactivePower_PCC_S = message.grid.ReactivePower_PCC_S         
        this.PowerFactor_PCC_S = message.grid.PowerFactor_PCC_S         
        this.S_Rsvd1 = message.grid.S_Rsvd1         
        this.S_Rsvd2 = message.grid.S_Rsvd2         
        this.Voltage_Phase_T = message.grid.Voltage_Phase_T         
        this.Current_Output_T = message.grid.Current_Output_T         
        this.ActivePower_Output_T = message.grid.ActivePower_Output_T         
        this.ReactivePower_Output_T = message.grid.ReactivePower_Output_T         
        this.PowerFactor_Output_T = message.grid.PowerFactor_Output_T         
        this.Current_PCC_T = message.grid.Current_PCC_T         
        this.ActivePower_PCC_T = message.grid.ActivePower_PCC_T         
        this.ReactivePower_PCC_T = message.grid.ReactivePower_PCC_T         
        this.PowerFactor_PCC_T = message.grid.PowerFactor_PCC_T         
        this.T_Rsvd1 = message.grid.T_Rsvd1         
        this.T_Rsvd2 = message.grid.T_Rsvd2         
        this.ActivePower_PV_Ext = message.grid.ActivePower_PV_Ext         
        this.ActivePower_Load_Sys = message.grid.ActivePower_Load_Sys         
        this.Voltage_Phase_L1N = message.grid.Voltage_Phase_L1N         
        this.Current_Output_L1N = message.grid.Current_Output_L1N         
        this.ActivePower_Output_L1N = message.grid.ActivePower_Output_L1N         
        this.Current_PCC_L1N = message.grid.Current_PCC_L1N         
        this.ActivePower_PCC_L1N = message.grid.ActivePower_PCC_L1N         
        this.Voltage_Phase_L2N = message.grid.Voltage_Phase_L2N         
        this.Current_Output_L2N = message.grid.Current_Output_L2N         
        this.ActivePower_Output_L2N = message.grid.ActivePower_Output_L2N         
        this.Current_PCC_L2N = message.grid.Current_PCC_L2N         
        this.ActivePower_PCC_L2N = message.grid.ActivePower_PCC_L2N         
        this.Voltage_Line_L1 = message.grid.Voltage_Line_L1         
        this.Voltage_Line_L2 = message.grid.Voltage_Line_L2         
        this.Voltage_Line_L3 = message.grid.Voltage_Line_L3  
        this.ActivePower_Output_TotalStr = this.ActivePower_Output_Total.toString()       
      }
            else if (message.idMsg === 'EmergencyOutput1') {
        this.ActivePower_Load_Total = message.EmergencyOutput1.ActivePower_Load_Total
        this.ReactivePower_Load_Total = message.EmergencyOutput1.ReactivePower_Load_Total
        this.ApparentPower_Load_Total = message.EmergencyOutput1.ApparentPower_Load_Total
        this.Frequency_Output = message.EmergencyOutput1.Frequency_Output
        this.ESOutput_Rsvd1 = message.EmergencyOutput1.ESOutput_Rsvd1
        this.ESOutput_Rsvd2 = message.EmergencyOutput1.ESOutput_Rsvd2
        this.Voltage_Output_R = message.EmergencyOutput1.Voltage_Output_R
        this.Current_Load_R = message.EmergencyOutput1.Current_Load_R
        this.ActivePower_Load_R = message.EmergencyOutput1.ActivePower_Load_R
        this.ReactivePower_Load_R = message.EmergencyOutput1.ReactivePower_Load_R
        this.ApparentPower_Load_R = message.EmergencyOutput1.ApparentPower_Load_R
        this.LoadPeakRatio_R = message.EmergencyOutput1.LoadPeakRatio_R
        this.ESR_Rsvd1 = message.EmergencyOutput1.ESR_Rsvd1
        this.ESR_Rsvd2 = message.EmergencyOutput1.ESR_Rsvd2
        this.Voltage_Output_S = message.EmergencyOutput1.Voltage_Output_S
        this.Current_Load_S = message.EmergencyOutput1.Current_Load_S
        this.ActivePower_Load_S = message.EmergencyOutput1.ActivePower_Load_S
        this.ReactivePower_Load_S = message.EmergencyOutput1.ReactivePower_Load_S
        this.ApparentPower_Load_S = message.EmergencyOutput1.ApparentPower_Load_S
        this.LoadPeakRatio_S = message.EmergencyOutput1.LoadPeakRatio_S
        this.ESS_Rsvd1 = message.EmergencyOutput1.ESS_Rsvd1
        this.ESS_Rsvd2 = message.EmergencyOutput1.ESS_Rsvd2
        this.Voltage_Output_T = message.EmergencyOutput1.Voltage_Output_T
        this.Current_Load_T = message.EmergencyOutput1.Current_Load_T
        this.ActivePower_Load_T = message.EmergencyOutput1.ActivePower_Load_T
        this.ReactivePower_Load_T = message.EmergencyOutput1.ReactivePower_Load_T
        this.ApparentPower_Load_T = message.EmergencyOutput1.ApparentPower_Load_T
        this.LoadPeakRatio_T = message.EmergencyOutput1.LoadPeakRatio_T
        this.EST_Rsvd2 = message.EmergencyOutput1.EST_Rsvd2
        this.Voltage_Output_L1N = message.EmergencyOutput1.Voltage_Output_L1N
        this.Current_Load_L1N = message.EmergencyOutput1.Current_Load_L1N
        this.ActivePower_Load_L1N = message.EmergencyOutput1.ActivePower_Load_L1N
        this.Voltage_Output_L2N = message.EmergencyOutput1.Voltage_Output_L2N
        this.Current_Load_L2N = message.EmergencyOutput1.Current_Load_L2N
        this.ActivePower_Load_L2N = message.EmergencyOutput1.ActivePower_Load_L2N
      }
            else if (message.idMsg === 'Input_PV1') {
        this.Voltage_PV1 = message.Input_PV1.Voltage_PV1
        this.Current_PV1 = message.Input_PV1.Current_PV1
        this.Power_PV1 = message.Input_PV1.Power_PV1
        this.Voltage_PV2 = message.Input_PV1.Voltage_PV2
        this.Current_PV2 = message.Input_PV1.Current_PV2
        this.Power_PV2 = message.Input_PV1.Power_PV2
      }
            else if (message.idMsg === 'ElectricityStatistics1') {
       this.PV_Generation_Today = message.ElectricityStatistics1.PV_Generation_Today              
       this.PV_Generation_Total = message.ElectricityStatistics1.PV_Generation_Total              
       this.Load_Consumption_Today = message.ElectricityStatistics1.Load_Consumption_Today              
       this.Load_Consumption_Total = message.ElectricityStatistics1.Load_Consumption_Total              
       this.Energy_Purchase_Today = message.ElectricityStatistics1.Energy_Purchase_Today              
       this.Energy_Purchase_Total = message.ElectricityStatistics1.Energy_Purchase_Total              
       this.Energy_Selling_Today = message.ElectricityStatistics1.Energy_Selling_Today              
       this.Energy_Selling_Total = message.ElectricityStatistics1.Energy_Selling_Total              
       this.Bat_Charge_Today = message.ElectricityStatistics1.Bat_Charge_Today              
       this.Bat_Charge_Total = message.ElectricityStatistics1.Bat_Charge_Total              
       this.Bat_Discharge_Today = message.ElectricityStatistics1.Bat_Discharge_Today              
       this.Bat_Discharge_Total = message.ElectricityStatistics1.Bat_Discharge_Total              
      }
            else if (message.idMsg === 'ClassifiedInfo1') {
       this.GFCI = message.ClassifiedInfo1.GFCI
       this.Current_Bus_Balance = message.ClassifiedInfo1.Current_Bus_Balance
       this.DCI_R = message.ClassifiedInfo1.DCI_R
       this.DCI_S = message.ClassifiedInfo1.DCI_S
       this.DCI_T = message.ClassifiedInfo1.DCI_T
       this.DCV_R = message.ClassifiedInfo1.DCV_R
       this.DCV_S = message.ClassifiedInfo1.DCV_S
       this.DCV_T = message.ClassifiedInfo1.DCV_T
       this.Voltage_Bus = message.ClassifiedInfo1.Voltage_Bus
       this.Voltage_Bus_P = message.ClassifiedInfo1.Voltage_Bus_P
       this.Voltage_Bus_N = message.ClassifiedInfo1.Voltage_Bus_N
       this.Voltage_Bus_LLC = message.ClassifiedInfo1.Voltage_Bus_LLC
       this.Current_BuckBoost = message.ClassifiedInfo1.Current_BuckBoost
       this.Voltage_Bus_P_Half = message.ClassifiedInfo1.Voltage_Bus_P_Half
       this.Voltage_Bus_N_Half = message.ClassifiedInfo1.Voltage_Bus_N_Half
      }
            else if (message.idMsg === 'Input_Bat1') {
        this.Voltage_Bat1 = message.Input_Bat1.Voltage_Bat1
        this.Current_Bat1 = message.Input_Bat1.Current_Bat1
        this.Power_Bat1 = message.Input_Bat1.Power_Bat1
        this.Temperature_Env_Bat1 = message.Input_Bat1.Temperature_Env_Bat1
        this.SOC_Bat1 = message.Input_Bat1.SOC_Bat1
        this.SOH_Bat1 = message.Input_Bat1.SOH_Bat1
        this.ChargeCycle_Bat1 = message.Input_Bat1.ChargeCycle_Bat1
      }
            else if (message.idMsg === 'Input_Bat2') {
        this.Voltage_Bat2 = message.Input_Bat2.Voltage_Bat2
        this.Current_Bat2 = message.Input_Bat2.Current_Bat2
        this.Power_Bat2 = message.Input_Bat2.Power_Bat2
        this.Temperature_Env_Bat2 = message.Input_Bat2.Temperature_Env_Bat2
        this.SOC_Bat2 = message.Input_Bat2.SOC_Bat2
        this.SOH_Bat2 = message.Input_Bat2.SOH_Bat2
        this.ChargeCycle_Bat2 = message.Input_Bat2.ChargeCycle_Bat2
      }
    }
    // this.connection.onopen = function(event) {
    //     // this.connection.onopen = () => {
    // //this.sendMessage("exec=1")
    // // this.connection.send("{'startMsg':'exec=1'}")
    // //this.sendMessage('exec=1')
    //   console.log("Successfully connected to the echo websocket server...")
    // }
    this.connection.addEventListener('open', (event) => {
    this.connection.send('exec=1')
    console.log("Successfully connected to the echo websocket server...")
    })
    this.connection.onclose = () => {
      console.log('Web Socket Connection Closed')
    }
    if (window.Closed) {
      console.log('Window Closed')
    }
  },
  methods: {
    sendMessage: function(message) {
      //console.log(this.connection)
      this.connection.send(message)
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
.vue-tabs .nav{
  margin-bottom: 10px;  
}
.values{
  padding-top: 50px;
  padding-bottom: 50px;
}
.alarms{
  padding-top: 50px;
  padding-bottom: 50px;

}
table{
margin-left: 10px;
margin-right: 10px;
}
table.ex1 {
  empty-cells: hide;
}
table, th, td {
  border: 3px solid black;
  border-collapse: collapse;
}
tr {
vertical-align: middle;
}
tr:empty { display: none; }
td.headings{
font-weight: bold;
}
td.status-names, td.status-values{
text-align: left;
padding-left:10px;
min-width: 180px;  
max-width: 180px;  
}
td.names{
text-align: left;
padding-left:10px;
min-width: 180px;  
max-width: 180px;  
}
td.pv-names{
text-align: left;
padding-left:10px;
min-width: 45px;  
max-width: 45px;  
}
td.bat-names{
text-align: left;
padding-left:10px;
min-width: 110px;  
max-width: 110px;  
}
td.el-names{
text-align: left;
padding-left:10px;
min-width: 110px;  
max-width: 110px;  
}
td.values{
text-align: left;
min-width: 90px; 
max-width: 90px;    
}
</style>