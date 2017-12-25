//www.technozone51fr

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissGrove');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');





//-Capteurs ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Button OK
Blockly.Blocks.driss_grove_button = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT1)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_button.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT3);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_GROVE_ENTREE);
  }
};

//Grove Switch ON OK
Blockly.Blocks.driss_grove_switch_p_on = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT6)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_switch_p.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT7);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_GROVE_ENTREE);
  }
};

//Grove Switch OFF OK
Blockly.Blocks.driss_grove_switch_p_off = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT6)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_switch_p.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT8);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.DRISS_GROVE_ENTREE);
  }
};


//Grove MicroSwitch OK
Blockly.Blocks.driss_grove_microswitch = {
    category: 'driss_grove : capteurs',
    helpUrl: '',
    init: function() {
      this.setColour(Blockly.Blocks.drissGrove.HUE);
      this.appendDummyInput("")
          .appendTitle("Le microrupteur ")
          .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_MicroSwitch.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
          .appendTitle("sur l'entrée ")
          .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
          .appendTitle("est appuyé");
      this.setOutput(true, 'Boolean');
      this.setTooltip(Blockly.Msg.DRISS_GROVE_ENTREE);
    }
  };

//Grove Light Sensor OK
Blockly.Blocks.driss_grove_light_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur de luminosité mesurée par le capteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_light_sensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(valeur numérique comprise entre 0 et 1024) ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};




//Grove Temperature & humidity sensor pro mesure OK
Blockly.Blocks.driss_temperature_and_humidity_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("la valeur")
        .appendField(new Blockly.FieldDropdown([["de température","TEMPERATURE"], ["d'humidité","HUMIDITE"]]), "GRANDEUR")
        .appendField("mesurée par le capteur")
        .appendField(new Blockly.FieldDropdown([["DHT11","DHT11"], ["DHT21","DHT21"], ["DHT22","DHT22"]]), "REF");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_temperature_and_humidity_sensor_pro.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.1, "*"))
        .appendField(Blockly.Msg.DRISS_GROVE_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');

  }
};


//Grove Gaz sensor MQ5 RATIO OK
Blockly.Blocks.driss_grove_gaz_sensor_mq5_ratio = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Le rapport  RS/R0 calculé à partir de la mesure envoyée ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_gas_sensor_MQ5.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.1, "*"))
        .appendField("par le capteur de gaz relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendValueInput("R0")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Résistance du capteur dans l'air pur : R0");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Gaz sensor MQ5 RS OK
Blockly.Blocks.driss_grove_gaz_sensor_mq5_rs = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur de la résistance RS ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_gas_sensor_MQ5.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.1, "*"))
        .appendField("du capteur de gaz relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Gaz sensor MQ5 R0OK
Blockly.Blocks.driss_grove_gaz_sensor_mq5_r0 = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Ecrire la valeur de la resistance R0 ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_gas_sensor_MQ5.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.1, "*"))
        .appendField("du capteur de gaz relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .appendField("dans la console serie (9600 bauds)");
    this.setInputsInline(false);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove moisture sensor  OK
Blockly.Blocks.driss_grove_moisture_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur de l'hmidité du sol mesurée par le capteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_moisture_sensor.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.1, "*"))
        .appendField("relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(La valeur numérique renvoyée est comprise entre 0 et 1023) ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};


//Grove PIR Motion Sensor OK
Blockly.Blocks.driss_PIR_motion_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("le détecteur de mouvement PIR ")
        .appendField(Blockly.Msg.DRISS_GROVE_TEXT2)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.appendDummyInput()
        .appendField("détecte un mouvement")
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_PIR_Motion_Sensor.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.1, "*"));
    this.setOutput(true, 'Boolean');
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');

  }
};

//Grove Ultrasonic Ranger OK
Blockly.Blocks.driss_grove_ultrasonic_ranger = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La distance mesurée en")
        .appendField(new Blockly.FieldDropdown([["Cm","CM"], ["Inch","INCH"]]), "UNITE");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_ultrasonic_ranger.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize/1.4, "*"))
        .appendField("par le capteur à ultrasons relié à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove - Rotary Angle Sensor
Blockly.Blocks.driss_grove_rotary_angle_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur numérique renvoyée");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_rotary_angle_sensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("par le potentiometre rotatif à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .appendField("(La valeur numérique renvoyée est comprise entre 0 et 1023)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove - Sound Sensor
Blockly.Blocks.driss_grove_sound_sensor = {
  category: 'driss_grove : capteurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur numérique renvoyée");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_sound_sensor.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize/1.2, "*"))
        .appendField("par le capteur de son à l'entrée ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.appendDummyInput()
        .appendField("(La valeur numérique renvoyée est comprise entre 0 et 1023)");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};


//Grove driss_grove_joystick_clic
Blockly.Blocks['driss_grove_joystick_clic'] = {
  init: function() {
   
    this.appendDummyInput()
        .appendField("Le bouton du Joystick relié à l'entré analogique")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN")
        .appendField("est appuyé")
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Grove driss_grove_joystick_valeurs
Blockly.Blocks['driss_grove_joystick_valeurs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lire la position ")
        .appendField(new Blockly.FieldDropdown([["X","AXE_X"], ["Y","AXE_Y"]]), "AXE");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Thumb_Joystick.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("du Joystick relié à l'entré analogique")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Grove driss_grove_joystick_direction
Blockly.Blocks['driss_grove_joystick_direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("  l'orientation du Joystick relié à l'entrée ")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//-Actionneurs ----------------------------------------------------------------------------------------------------------------------------------------

//Grove red LED OK
Blockly.Blocks.driss_grove_red_led = {
   category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_GROVE_TEXT33, "HIGH"], [Blockly.Msg.DRISS_GROVE_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT32)
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT35)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_red_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT9)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_GROVE_SORTIE);
  }
};


//Grove White LED OK
Blockly.Blocks.driss_grove_white_led = {
   category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_GROVE_TEXT33, "HIGH"], [Blockly.Msg.DRISS_GROVE_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT32)
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT36)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_white_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT9)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_GROVE_SORTIE);
  }
};

//Grove Green LED OK
Blockly.Blocks.driss_grove_green_led = {
   category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_GROVE_TEXT33, "HIGH"], [Blockly.Msg.DRISS_GROVE_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT32)
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT37)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_green_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT9)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_GROVE_SORTIE);
  }
};

//Grove Blue LED OK
Blockly.Blocks.driss_grove_blue_led = {
   category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_GROVE_TEXT33, "HIGH"], [Blockly.Msg.DRISS_GROVE_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT32)
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT38)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_blue_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT9)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_GROVE_SORTIE);
  }
};

//Grove Purple LED OK
Blockly.Blocks.driss_grove_purple_led = {
  category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.appendDummyInput("")
        .appendTitle(new Blockly.FieldDropdown([[Blockly.Msg.DRISS_GROVE_TEXT33, "HIGH"], [Blockly.Msg.DRISS_GROVE_TEXT34, "LOW"]]), "STAT")
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT32)
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT39)
        .appendTitle(new Blockly.FieldImage("blocks/drissGrove/Grove_purple_LED.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
        .appendTitle(Blockly.Msg.DRISS_GROVE_TEXT9)
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DRISS_GROVE_SORTIE);
  }
};

//Grove driss_grove_piezo_buzzer
//Blockly.Blocks.driss_grove_piezo_buzzer = {
   
 // };



//Telecommandes -----------------------------------------------------------------
//Grove driss_grove_Telecommande_GM_IR38_init
Blockly.Blocks['driss_grove_Telecommande_GM_IR38_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Déclarer l'utilisation de la Télécommande")
            .appendField(new Blockly.FieldDropdown([["GM IR38","GM_IR38"], ["YK-001","YK_001"], ["Makeblock","Makeblock"]]), "TELECOMMANDE")
            
        this.appendValueInput("DELETE_AFTER_TIME")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage("blocks/drissGrove/Telecommande_GM_IR38.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"), "IMG_TELECOMMANDE")
            //.appendField(new Blockly.FieldImage("blocks/drissGrove/Telecommande_YK-001.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"), "YK_001")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "OPTION_DELETE")
            .appendField("Effacer le code de la touche appuyée")
            .appendField(" après  (ms)");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(36);
     this.setTooltip("");
     this.setHelpUrl("");
      },

      onchange: function(ev) {
        var telecommande = this.getTitleValue('TELECOMMANDE');
        var image = "";
        if(telecommande == "GM_IR38") image = "blocks/drissGrove/Telecommande_GM_IR38.png";
        if(telecommande == "YK_001") image = "blocks/drissGrove/Telecommande_YK-001.png";
        if(telecommande == "Makeblock") image = "blocks/drissGrove/Telecommande_Makeblock.png";
        this.getField("IMG_TELECOMMANDE").setValue(image);
       }
  };


//Grove driss_grove_Telecommande_GM_IR38_test_touche 
Blockly.Blocks['driss_grove_Telecommande_GM_IR38_test_touche'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("le récepteur infrarouge relié à l'entrée")
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
            .appendField("détecte que ")
        this.appendDummyInput()
            .appendField("la touche")
            .appendField(new Blockly.FieldDropdown([["ON/OFF","POWER"], ["MENU","MENU"], ["TEST","TEST"], ["+","PLUS"], ["retour rapide","RETOUR_RAPIDE"], ["lecture","LECTURE"], ["avance rapide","AVANCE_RAPIDE"], ["0","0"], ["-","MOINS"], ["C","C"], ["1","1"], ["2","2"], ["3","3"], [" 4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "TOUCHES")
            .appendField("est appuyée sur la télécommande GM IR38");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Telecommande_GM_IR38.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
            .appendField("(ce bloc retourne Vrai ou Faux)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.drissGrove.HUE);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };

//Grove driss_grove_Telecommande_YK_001_test_touche 
Blockly.Blocks['driss_grove_Telecommande_YK_001_test_touche'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("le récepteur infrarouge relié à l'entrée")
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
            .appendField("détecte que ")
        this.appendDummyInput()
            .appendField("la touche")
            .appendField(new Blockly.FieldDropdown([["ON/OFF","POWER"], ["MODE","MODE"], ["VOLUME OFF","VOLUME_OFF"], ["PREV","PREV"], ["NEXT","NEXT"], ["PLAY/PAUSE","PLAY_PAUSE"], ["Vol-","VOL-"], ["Vol+","VOL+"], ["EQ","EQ"], ["0","0"], ["100+","100+"], ["Annuler","ANNULER"], ["1","1"], ["2","2"], ["3","3"], [" 4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "TOUCHES")
            .appendField("est appuyée sur la télécommande YK-001");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Telecommande_YK-001.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
            .appendField("(ce bloc retourne Vrai ou Faux)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.drissGrove.HUE);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };

  //Grove driss_grove_Telecommande_Makeblock_test_touche 
Blockly.Blocks['driss_grove_Telecommande_Makeblock_test_touche'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("le récepteur infrarouge relié à l'entrée")
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN")
            .appendField("détecte que ")
        this.appendDummyInput()
            .appendField("la touche")
            .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["E","E"], ["F","F"], ["haut","HAUT"], ["bas","BAS"], ["gauche","GAUCHE"], ["Droite","DROITE"], ["Roue dentée","ROUE_DENTEE"], ["0","0"], ["1","1"], ["2","2"], ["3","3"], [" 4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"]]), "TOUCHES")
            .appendField("est appuyée sur la télécommande Makeblock");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Telecommande_Makeblock.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
            .appendField("(ce bloc retourne Vrai ou Faux)");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.drissGrove.HUE);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };

  //Grove driss_grove_Infrared_Receiver_read_code
  Blockly.Blocks['driss_grove_Infrared_Receiver_read_code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("le code lu par le recépteur infrarouge ");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Infrared_Receiver.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize))
            .appendField("relié à l'entrée")
            .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
        //this.appendDummyInput()
        //    .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Infrared_Receiver.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize));
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Blocks.drissGrove.HUE);
     this.setTooltip("");
     this.setHelpUrl("");
      }
  };

//Moteurs -----------------------------------------------------------------

//Grove Servo setPosition OK
Blockly.Blocks.driss_grove_servo_setPosition = {
  category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Positionner le servomoteur");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_servo.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à la sortie ")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur l'angle ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(l'angle doit être compris entre 0° et 180°)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



/*
//Grove I2C Motor OK
Blockly.Blocks.driss_grove_I2C_Motor_run = {
  category: 'driss_grove : actionneurs',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner le moteur ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "MOTOR");
    this.appendDummyInput()
        .appendField(" branché sur la broche d'adresse I2C")
        .appendField(new Blockly.FieldTextInput("0x0f"), "I2C_ADRESS");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_I2C_Motor_Driver_V1-3.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
    this.appendValueInput("SENS_HORAIRE")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Sens horaire");
    this.appendValueInput("VITESSE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vitesse [0 - 255]");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};
*/

// Grove : driss_grove_dc_motor_turn
Blockly.Blocks['driss_grove_dc_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner le moteur ")
        .appendField(new Blockly.FieldDropdown([["1","MOTOR1"], ["2","MOTOR2"]]), "MOTEUR")
        .appendField("dans le sens")
        .appendField(new Blockly.FieldDropdown([["horaire","SENS_HORAIRE"], ["anti-horaire","SENS_ANTI_HORAIRE"]]), "SENS");
    this.appendValueInput("VITESSE")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vitesse de rotation");
    this.appendValueInput("ADRESSE_I2C")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_I2C_MotorCC_Driver.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize, "*"))
        .appendField("adresse du circuit de commande sur le bus I2C");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



// Grove : driss_grove_dc_motor_stop 
Blockly.Blocks['driss_grove_dc_motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêrer le moteur")
        .appendField(new Blockly.FieldDropdown([["1","MOTOR1"], ["2","MOTOR2"]]), "MOTEUR");
    this.appendValueInput("ADRESSE_I2C")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("adresse du circuit de commande sur le bus I2C");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
 

//Grove : driss_grove_step_motor_turn
Blockly.Blocks['driss_grove_step_motor_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire tourner le moteur  Pas à Pas")
        .appendField("dans le sens")
        .appendField(new Blockly.FieldDropdown([["horaire","SENS_HORAIRE"], ["anti-horaire","SENS_ANTI_HORAIRE"]]), "SENS");
    this.appendValueInput("NBRE_PAS")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nombre de pas");
    this.appendValueInput("ADRESSE_I2C")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_I2C_MotorSTEPER_Driver.png", Blockly.Arduino.imageSize*2,  Blockly.Arduino.imageSize, "*"))
        .appendField("adresse du circuit de commande sur le bus I2C");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// Claviers   KeyPad -----------------------------------------------------------------------------------------------------------------------------

// Grove driss_grove_keypad_12_init
Blockly.Blocks['driss_grove_keypad_12_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Définir le branchement du clavier 12 touches");
      this.appendDummyInput()
          .appendField("Lig 0")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "ROW0")
          .appendField("-  Lig 1")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "ROW1")
          .appendField("-  Lig 2")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "ROW2")
          .appendField("-  Lig 3")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "ROW3");
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_keyPad_12.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
          .appendField("Col 0")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "COL0")
          .appendField("-  Col 1")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "COL1")
          .appendField("-  Col 2")
          .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownIRQPins), "COL2");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(36);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  
  
  // Grove driss_grove_keypad_12_getkey
  Blockly.Blocks['driss_grove_keypad_12_getkey'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Touche appuyée sur le clavier 12 touches");
      this.setOutput(true, null);
      this.setColour(Blockly.Blocks.drissGrove.HUE);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  

//-Communication ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Serial Bluetooth v3.0 OK
Blockly.Blocks.driss_grove_bluetooth_v30_bt_init = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser le module Bluetooth");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Serial_Bluetoothv30.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"));
    this.appendDummyInput()
        .appendField("Nom du module Bluetooth")
        .appendField(new Blockly.FieldTextInput("Grove_BT_01"), "BT_NAME");
    this.appendDummyInput()
        .appendField("Code PIN du module Bluetooth")
        .appendField(new Blockly.FieldTextInput("0000"), "BT_PINCODE");
    this.appendValueInput("PIN_RX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Rx");
    this.appendValueInput("PIN_TX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tx");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
    this.setTooltip('');
    this.setHelpUrl('');
  }


};


//Grove Serial Bluetooth Un message  est disponible OK
Blockly.Blocks.driss_grove_bluetooth_v30_bt_available = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Un message Bluetooth est disponible");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Serial Bluetooth Message recu OK
Blockly.Blocks.driss_grove_bluetooth_v30_bt_read = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Le message reçu par Bluetooth");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};


//Grove Serial Bluetooth Envoyer message OK
Blockly.Blocks.driss_grove_bluetooth_v30_bt_send = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Envoyer le message  suivant");
    this.appendDummyInput()
        .appendField("par la liaison Bluetooth");
    this.appendValueInput("BT_MESSAGE_TO_SEND")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Message");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};


//Grove RFID Init
Blockly.Blocks.driss_grove_rfid_int = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser le module RFID");
    this.appendValueInput("PIN_RX")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_rfid.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("Le pin Tx du module RFID est relié à l'entrée");
    this.appendDummyInput()
        .appendField("Attention : Pins utilisables  sur arduino Mega :");
    this.appendDummyInput()
        .appendField("10, 11, 12, 13, 14, 15, 50, 51, 52, 53, A8 (62), A9 (63),");
    this.appendDummyInput()
        .appendField("A10 (64), A11 (65), A12 (66), A13 (67), A14 (68), A15 (69). ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//Grove RFID tag available
Blockly.Blocks.driss_grove_rfid_available = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Un tag ou une carte est détectée par le lecteur RFID");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//Grove RFID read
Blockly.Blocks.driss_grove_rfid_read = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Lire les données en provenance du Tag ou de la carte ");
    this.appendDummyInput()
        .appendField("située devant le lecteur RFID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove RFID ID et RAW
Blockly.Blocks.driss_grove_rfid_id_raw = {
  category: 'driss_grove : communication',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["L'identifiant (ID)","ID"], ["Le numéro","RAW"]]), "ITEM")
        .appendField(" du tag détecté par ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove//tag_rfid.png", Blockly.Arduino.imageSize/1.3,  Blockly.Arduino.imageSize/1.7, "*"))
        .appendField("le lecteur RFID ");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};




//-OLED 96x96 ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Ecran OLED 96x96 init OK
Blockly.Blocks.driss_grove_oled_96x96_init = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Initialiser l'écran OLED 96x96");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(36);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Grove Ecran OLED 96x96 show text at XY OK
Blockly.Blocks.driss_grove_oled_96x96_show_text_at_XY = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher le texte sur l'écran OLED 96x96");
    this.appendValueInput("OLED_96x96_TEXTE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texte");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_OLED_Display_96x96.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"));
    this.appendValueInput("OLED_96x96_LIG")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Commencer l'écrirure à la position :")
        .appendField("Ligne");
    this.appendValueInput("OLED_96x96_COL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};



//Grove Ecran OLED 96x96 set cursor at xy OK
Blockly.Blocks.driss_grove_oled_96x96_set_cursot_at_XY = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Déplacer le curseur sur l'écran");
    this.appendDummyInput()
        .appendField("OLED 96x96 à la position");
    this.appendValueInput("OLED_96x96_LIG")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Ligne");
    this.appendValueInput("OLED_96x96_COL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Colonne");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Ecran OLED 96x96 show text OK
Blockly.Blocks.driss_grove_oled_96x96_show_text = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher le texte sur l'écran OLED 96x96");
    this.appendValueInput("OLED_96x96_TEXTE")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Texte");
    //this.appendDummyInput()
    //    .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_OLED_Display_96x96.png", 70, 60, "*"));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Ecran OLED 96x96 show number OK
Blockly.Blocks.driss_grove_oled_96x96_show_number = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher le nombre sur l'écran OLED 96x96");
    this.appendValueInput("OLED_96x96_NUMBER")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nombre");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};

//Grove Ecran OLED 96x96 show logo OK
Blockly.Blocks.driss_grove_oled_96x96_show_logo = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Afficher le logo sur l'écran OLED 96x96");
    this.appendValueInput("OLED_96x96_LOGO")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Logo");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Grove Ecran OLED 96x96 clear screen OK
Blockly.Blocks.driss_grove_oled_96x96_clear_screen = {
  category: 'driss_grove : Afficheur OLED 96x96',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Effacer l'ecran OLED 96x96");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//-Afficheur Grove - LCD ----------------------------------------------------------------------------------------------------------------------------------------
//Grove Grove - driss_grove_lcd_rgb_power
Blockly.Blocks['driss_grove_lcd_rgb_power'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Allumer", "ON"], ["Eteindre", "OFF"]]), "STAT")
        .appendField("L'ecran LCD RGB")
        .appendField("Relié à la sortie I2C");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove _LCD_40.png", Blockly.Arduino.imageSize*1.5,  Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove Grove - driss_grove_lcd_rgb_cursor_to
Blockly.Blocks['driss_grove_lcd_rgb_cursor_to'] = {
  init: function() {
    this.appendValueInput("LCD_LIG")
        .setCheck("Number")
        .appendField("Placer le curseur de  l'ecran LCD RGB")
        .appendField("sur la ligne");
    this.appendValueInput("LCD_COL")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("et la colonne");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Grove Grove - driss_grove_lcd_rgb_clean
Blockly.Blocks['driss_grove_lcd_rgb_clean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Effacer l'ecran LCD RGB");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


//Grove Grove - driss_grove_lcd_rgb_go_to_col_lig
Blockly.Blocks['driss_grove_lcd_rgb_go_to_col_lig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Placer le curseur de  l'ecran LCD RGB");
    this.appendDummyInput()
        .appendField("sur la ligne")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "LCD_LIG")
        .appendField("à la colonne")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]]), "LCD_COL");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove Grove - driss_grove_lcd_rgb_write_row
Blockly.Blocks['driss_grove_lcd_rgb_write_row'] = {
  init: function() {
    this.appendValueInput("LCD_L1")
        .setCheck(null)
        .appendField("Ecrire sur l'ecran LCD RGB")
        .appendField("Ligne 1");
    this.appendValueInput("LCD_L2")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("relié à la sortie I2C")
        .appendField("Ligne 2");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove _LCD_40.png", Blockly.Arduino.imageSize*1.5,  Blockly.Arduino.imageSize));
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Grove Grove - driss_grove_lcd_rgb_scroll
Blockly.Blocks['driss_grove_lcd_rgb_scroll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Faire défiler l'affichage du LCD RGB");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["à gauche", "LEFT"], ["à  droite", "RIGHT"]]), "DIRECTION");
    this.appendValueInput("NBRE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("nombre de fois");
    this.appendValueInput("DELAY")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("avec un délai de (en ms)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove Grove - driss_grove_lcd_rgb_set_retro_color
Blockly.Blocks['driss_grove_lcd_rgb_set_retro_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mettre le rétroéclairage du LCD RGB sur ")
        .appendField(new Blockly.FieldDropdown([["Rouge","RED"], ["Vert","GREEN"], ["Bleu","BLUE"], ["Blanc","WHITE"], ["Noir","BLACK"]]), "LCD_RGB_COLOR");
    this.setColour(Blockly.Blocks.drissGrove.HUE);

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

 this.setTooltip("");
 this.setHelpUrl("");
  }
};
 


//Grove Grove - driss_grove_lcd_rgb_color 
Blockly.Blocks['driss_grove_lcd_rgb_color'] = {
  init: function() {
    this.appendValueInput("RED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Mettre la couleur de l'afficheur LCD RGB à")
        .appendField("Rouge");
    this.appendValueInput("GREEN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Vert");
    this.appendValueInput("BLUE")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Bleu");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};



//-Afficheur Grove - 4-Digit Display ----------------------------------------------------------------------------------------------------------------------------------------


//Grove Grove - 4-Digit Display  displayDigits
Blockly.Blocks.driss_grove_4_digit_display_displayDigits = {
  category: 'driss_grove : Afficheur 4 Digits',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Ecrire sur l'afficheur 4 digits");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_4_digit_display.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à la sortie CLK")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_CLK")
        .appendField("et DIO")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_DIO");
    this.appendValueInput("DIGIT_1")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Digit 1");
    this.appendValueInput("DIGIT_2")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Digit 2");
    this.appendValueInput("DIGIT_3")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Digit 3");
    this.appendValueInput("DIGIT_4")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Digit 4");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

//Grove Grove - 4-Digit Display  displayNumber
Blockly.Blocks.driss_grove_4_digit_display_displayNumber = {
  category: 'driss_grove : Afficheur 4 Digits',
  helpUrl: '',
  init: function() { 
    this.appendDummyInput()
        .appendField("Ecrire sur l'afficheur 4 digits");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_4_digit_display.png", 70, 59, "*"))
        .appendField("relié à la sortie CLK")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_CLK")
        .appendField("et DIO")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_DIO");
    this.appendValueInput("NUMBER")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Nombre");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "ZEROS")
        .appendField("Avec des '0' devant");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


//Grove Grove - 4-Digit Display  DigitsOnOff
Blockly.Blocks.driss_grove_4_digit_display_digitsOnOff = {
  category: 'driss_grove : Afficheur 4 Digits',
  helpUrl: '',
  init: function() {
    this.appendDummyInput()
        .appendField("Allumer les segments de l'afficheur 4 digits");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_4_digit_display.png", Blockly.Arduino.imageSize*1.1,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à la sortie CLK")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_CLK")
        .appendField("et DIO")
        .appendTitle(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownDigitalPins), "PIN_DIO");
    this.appendDummyInput()
        .appendField("Digit 1")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_A")
        .appendField("A  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_B")
        .appendField("B  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_C")
        .appendField("C  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_D")
        .appendField("D  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_E")
        .appendField("E  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_F")
        .appendField("F  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_1_G")
        .appendField("G");
    this.appendDummyInput()
        .appendField("Digit 2")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_A")
        .appendField("A  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_B")
        .appendField("B  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_C")
        .appendField("C  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_D")
        .appendField("D  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_E")
        .appendField("E  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_F")
        .appendField("F  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_2_G")
        .appendField("G");
    this.appendDummyInput()
        .appendField("Digit 3")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_A")
        .appendField("A  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_B")
        .appendField("B  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_C")
        .appendField("C  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_D")
        .appendField("D  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_E")
        .appendField("E  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_F")
        .appendField("F  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_3_G")
        .appendField("G");
    this.appendDummyInput()
        .appendField("Digit 4")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_A")
        .appendField("A  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_B")
        .appendField("B  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_C")
        .appendField("C  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_D")
        .appendField("D  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_E")
        .appendField("E  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_F")
        .appendField("F  ")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DIGIT_4_G")
        .appendField("G");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
    this.setTooltip('');
    this.setHelpUrl('');
  }

};


//  Biométrie ----------------------------------------------------------------------------------------------------------------------------------


//Grove : driss_grove_finger_clip_heart_begin
Blockly.Blocks['driss_grove_finger_clip_heart_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lancer une mesure du rythme cardiaque ");
    this.appendDummyInput()
        .appendField("par le capteur de pouls");
    this.appendValueInput("ADRESSE_I2C")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("accessible par le bus I2C à l'adresse");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Finger-clip_Heart_Rate.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



//Grove : driss_grove_finger_clip_heart_pouls_dispo
Blockly.Blocks['driss_grove_finger_clip_heart_pouls_dispo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Un pouls est présent au niveau du capteur");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Grove : driss_grove_finger_clip_heart_rate
Blockly.Blocks['driss_grove_finger_clip_heart_rate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("nombre de battements du cœur par minute   ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_Finger-clip_Heart_Rate.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("(rythme cardiaque)");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//Grove : driss_grove_gsr_read
Blockly.Blocks['driss_grove_gsr_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("La valeur renvoyée par le capteur GSR ");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("blocks/drissGrove/Grove_GSR.png", Blockly.Arduino.imageSize,  Blockly.Arduino.imageSize, "*"))
        .appendField("relié à l'entrée analogique")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.getDropDownAnalogPins), "PIN");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.drissGrove.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

