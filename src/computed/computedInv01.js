export const computed = {   
    computed: {
      SysStateStr() {
        if(this.SysState === 0){
        return "waiting state";
        }else if(this.SysState === 1){
        return "Detection status";  
        }else if(this.SysState === 2){
          return "Grid-connected status"; 
        }else if(this.SysState === 3){
          return "Emergency power supply status"; 
        }else if(this.SysState === 4){
          return "Recoverable fault state"; 
        }else if(this.SysState === 5){
          return "Permanent fault status"; 
        }else if(this.SysState === 6){
          return "Upgrade status"; 
        }else if(this.SysState === 7){
          return "Self-charging status"; 
        }else{
          return "";
        }
      },
    // Fault 3
    SPIcommunicationErrorDCside() {
      if(this.fault3 & 0b0000000000000001){
      return "SPI communication error (DC side)";
      }else{
      return "";  
      }
    },
    SPIcommunicationErrorACside() {
      if(this.fault3 & 0b0000000000000010){
      return "SPI communication error (AC side)";
      }else{
      return "";  
      }
    },
    chipErrorDCside() {
      if(this.fault3 & 0b0000000000000100){
      return "Chip error (DC side)";
      }else{
      return "";  
      }
    },
    chipErrorACside() {
      if(this.fault3 & 0b0000000000001000){
      return "Chip error (AC side)";
      }else{
      return "";  
      }
    },
    auxiliaryPowerError() {
      if(this.fault3 & 0b0000000000010000){
      return "Auxiliary power error";
      }else{
      return "";  
      }
    },
    inverterSoftStartFailure() {
      if(this.fault3 & 0b0000000000100000){
      return "Inverter soft start failure";
      }else{
      return "";  
      }
    },
    relayDetectionFailure() {
      if(this.fault3 & 0b0000000100000000){
      return "Relay detection failure";
      }else{
      return "";  
      }
    },
    lowInsulationImpedance() {
      if(this.fault3 & 0b0000001000000000){
      return "Low insulation impedance";
      }else{
      return "";  
      }
    },
    groundingError() {
      if(this.fault3 & 0b0000010000000000){
      return "Grounding error";
      }else{
      return "";  
      }
    },
    inputModeSettingError() {
      if(this.fault3 & 0b0000100000000000){
      return "Input mode setting error";
      }else{
      return "";  
      }
    },
    CTerror() {
      if(this.fault3 & 0b0001000000000000){
      return "CT error";
      }else{
      return "";  
      }
    },
    inputReversalError() {
      if(this.fault3 & 0b0010000000000000){
      return "Input reversal error";
      }else{
      return "";  
      }
    },
    parallelError() {
      if(this.fault3 & 0b0100000000000000){
      return "Parallel error";
      }else{
      return "";  
      }
    },
    serialNumberError() {
      if(this.fault3 & 0b1000000000000000){
      return "Serial number error";
      }else{
      return "";  
      }
    },
    // Fault 8

    overtemperatureDerating() {
      if(this.fault8 & 0b0000000000000001){
      return "Overtemperature derating";
      }else{
      this.overtemperatureDeratingString = ""
      return "";  
      }
    },
    frequencyDownLoad() {
      if(this.fault8 & 0b0000000000000010){
      return "Frequency down load";
      }else{
      return "";  
      }
    },
    frequencyLoading() {
      if(this.fault8 & 0b0000000000000100){
      return "Frequency loading";
      }else{
      return "";  
      }
    },   
    voltageDownLoad() {
      if(this.fault8 & 0b0000000000001000){
      return "Voltage down load";
      }else{
      return "";  
      }
    },
    voltageLoading() {
      if(this.fault8 & 0b0000000000010000){
      return "Voltage loading";
      }else{
      return "";  
      }
    },
    lightningFrotectionFailureDC() {
      if(this.fault8 & 0b0000000100000000){
      return "Lightning protection failure (DC)";
      }else{
      return "";  
      }
    },
    lightningFrotectionFailureAC() {
      if(this.fault8 & 0b0000001000000000){
      return "Lightning protection failure (AC)";
      }else{
      return "";  
      }
    },
    batteryLowVoltageProtection() {
      if(this.fault8 & 0b0000100000000000){
      return "Battery low voltage protection";
      }else{
      return "";  
      }
    },
    batteryLowVoltageShutdown() {
      if(this.fault8 & 0b0001000000000000){
      return "Battery low voltage shutdown";
      }else{
      return "";  
      }
    },
    batteryLowVoltagePreAlarm() {
      if(this.fault8 & 0b0010000000000000){
      return "Battery low voltage pre-alarm";
      }else{
      return "";  
      }
    } 
  }
}