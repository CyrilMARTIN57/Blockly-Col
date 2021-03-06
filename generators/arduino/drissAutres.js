
//Grove Button OK 
Blockly.Arduino.driss_autres_ShieldMotors = function() {
  var dropdown_motor = this.getTitleValue('MOTOR');
  var value_Sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.includes_['define_Arduino'] = '#include <Arduino.h>'; 
  Blockly.Arduino.includes_['define_Wire'] = '#include <Wire.h>'; 
  Blockly.Arduino.includes_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
  Blockly.Arduino.includes_['define_motor'] = '#include <motor.h>';


  Blockly.Arduino.variables_['define_motor'] = 'MotorClass motor; \n ';
  
  var code = 'motor.motor_output('+dropdown_motor+',1,'+value_Sens+','+value_vitesse+');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



//
Blockly.Arduino.driss_afficheur_LED_Matrix_8x8_MAX7219 = function() {
  
  var value_msg = Blockly.Arduino.valueToCode(this, 'MSG', Blockly.Arduino.ORDER_ATOMIC);
  var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_effect = this.getFieldValue('EFFECT');
  var dropdown_align = this.getFieldValue('ALIGN');

  Blockly.Arduino.includes_['define_MD_Parola'] = '#include <MD_Parola.h>'; 
  Blockly.Arduino.includes_['define_MD_MAX72xx'] = '#include <MD_MAX72xx.h>'; 
  Blockly.Arduino.includes_['define_SPI'] = '#include <SPI.h>'; 
  
  Blockly.Arduino.definitions_['define_MD_MAX72xx_MAX_DEVICES'] = "#define MAX_DEVICES 4";
  Blockly.Arduino.definitions_['define_MD_MAX72xx_CLK_PIN'] = "#define CLK_PIN   13";
  Blockly.Arduino.definitions_['define_MD_MAX72xx_DATA_PIN'] = "#define DATA_PIN  11";
  Blockly.Arduino.definitions_['define_MD_MAX72xx_CS_PIN'] = "#define CS_PIN    10";

  Blockly.Arduino.variables_['define_MD_Parola'] = 'MD_Parola P = MD_Parola(CS_PIN, MAX_DEVICES); \n ';
  Blockly.Arduino.variables_['define_MD_Parola_scrollSpeed'] = 'uint8_t scrollSpeed = 40;    // default frame delay value \n ';
  Blockly.Arduino.variables_['define_MD_Parola_scrollEffect'] = 'textEffect_t scrollEffect ='+dropdown_effect+'; \n ';
  Blockly.Arduino.variables_['define_MD_Parola_scrollAlign'] = 'textPosition_t scrollAlign = '+dropdown_align+'; \n ';
  Blockly.Arduino.variables_['define_MD_Parola_scrollPause'] = 'uint16_t scrollPause = '+value_delay+'; // in milliseconds\n ';


  Blockly.Arduino.definitions_['define_MD_Parola_BUF_SIZE'] = '#define BUF_SIZE  200 \n ';
  Blockly.Arduino.variables_['define_MD_Parola_curMessage'] = 'char curMessage[BUF_SIZE] = { "" };\n ';
  Blockly.Arduino.variables_['define_MD_Parola_newMessage'] = 'char newMessage[BUF_SIZE] = '+value_msg+'; \n ';
  Blockly.Arduino.variables_['define_MD_Parola_newMessageAvailable'] = 'bool newMessageAvailable = true;\n ';

  //dans setup    
  Blockly.Arduino.setups_['setup_MD_Parola'] = ''+
  ' Serial.begin(57600);\n'+
  ' Serial.print("\\n[Parola Scrolling Display]\\nType a message for the scrolling display\\nEnd message line with a newline");\n'+
  ' P.begin();\n'+  
  ' P.displayText(curMessage, scrollAlign, scrollSpeed, scrollPause, scrollEffect, scrollEffect);\n';  
  
  var code = 'if (P.displayAnimate())\n'+
  '{\n'+
  '  if (newMessageAvailable)\n'+
  '    {\n'+
  '      strcpy(curMessage, newMessage);\n'+
  '      newMessageAvailable = false;\n'+
  '    }\n'+
  '  P.displayReset();\n'+
  '}\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.driss_motor_L298P_turn = function() {
  var sens = this.getFieldValue('SENS');
  var vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var moteur = this.getFieldValue('MOTEUR');

  

  switch(moteur){
    case "MOTOR1" : if(sens == "SENS_HORAIRE") {var etat_MOTA = 'HIGH'; }else{var etat_MOTA = 'LOW';} var vitesse_MOTA = vitesse; break;
    case "MOTOR2" : if(sens == "SENS_HORAIRE") {var etat_MOTB = 'HIGH'; }else{var etat_MOTB = 'LOW';} var vitesse_MOTB = vitesse; break;
    case "MOTOR12" : if(sens == "SENS_HORAIRE") {var etat_MOT = 'HIGH'; }else{var etat_MOT = 'LOW';} var vitesse_MOT = vitesse; break;
   
  }


  //dans setup    
  Blockly.Arduino.setups_['setup_motor_L298P'] = ''+
  'pinMode(10, OUTPUT);\n'+
  ' pinMode(11, OUTPUT);\n'+
  ' pinMode(12, OUTPUT);\n'+  
  ' pinMode(13, OUTPUT);';  



  var code = '';
  
  switch(moteur){
    case "MOTOR1" : code =  ''+
                            'analogWrite(10, '+vitesse_MOTA+');\n'+
                            'digitalWrite(12, '+etat_MOTA+');'; 
                            break;
    case "MOTOR2" : code = code =  ''+
                            'analogWrite(11, '+vitesse_MOTB+');\n'+
                            'digitalWrite(13, '+etat_MOTB+');'; 
                            break;
    case "MOTOR12" : code = code =  ''+
                            'analogWrite(10, '+vitesse_MOT+');\n'+
                            'digitalWrite(12, '+etat_MOT+');\n'+ 
                            'analogWrite(11, '+vitesse_MOT+');\n'+
                            'digitalWrite(13, '+etat_MOT+');'; 
                            break;

  }
  
  
   return code;//[code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.driss_motor_L298P_stop = function() {
  var moteur = this.getFieldValue('MOTEUR');

   switch(moteur){
    case "MOTOR1" : var vitesse_MOTA = 0; break;
    case "MOTOR2" : var vitesse_MOTB = 0; break;
    case "MOTOR12" : var vitesse_MOT = 0; break;
   
  }

  //dans setup    
  Blockly.Arduino.setups_['setup_motor_L298P'] = ''+
  'pinMode(10, OUTPUT);\n'+
  ' pinMode(11, OUTPUT);\n'+
  ' pinMode(12, OUTPUT);\n'+  
  ' pinMode(13, OUTPUT);';  

 var code = '';
  switch(moteur){
    case "MOTOR1" : code =  ''+
                            'analogWrite(10, '+vitesse_MOTA+');\n'+
                            'digitalWrite(12, HIGH);\n'; 
                            break;
    case "MOTOR2" : code = ''+
                            'analogWrite(11, '+vitesse_MOTB+');\n'+
                            'digitalWrite(13, HIGH);\n'; 
                            break;
    case "MOTOR12" : code = ''+
                            'analogWrite(10, '+vitesse_MOT+');\n'+
                            'digitalWrite(12, HIGH);\n'+ 
                            'analogWrite(11, '+vitesse_MOT+');\n'+
                            'digitalWrite(13, HIGH);\n'; 
                            break;

  }
   
  return code;
};