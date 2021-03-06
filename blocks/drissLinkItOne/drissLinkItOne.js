//

// define blocks
'use strict';
goog.provide('Blockly.Blocks.drissLinkItOne');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');



//-Wifi ----------------------------------------------------------------------------------------------------------------------------------------
//LinkIt One  Wifi : uinitialisation 



//-GSM ----------------------------------------------------------------------------------------------------------------------------------------

//LinkIt One  GSM : uinitialisation 
Blockly.Blocks.driss_linkItOne_GSM_initialisation = {
  category: 'driss_linkIt_One : gsm',
  helpUrl: '',
  init: function() {
     this.setColour(36);
    this.appendDummyInput()
        .appendField("Initialiser le module SMS de LinkIt One");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   
    this.setTooltip('');
    this.setHelpUrl('');


    this.setTooltip("GSM");
  }
};

//LinkIt One  GSM : un SMS est-il disponible 
Blockly.Blocks.driss_linkItOne_SMS_disponible = {
  category: 'driss_linkIt_One : gsm',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Un SMS est arrivé");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setTooltip('tooltip');
    this.setHelpUrl('url');
    this.setTooltip("SMS");
  }
};

//LinkIt One  GSM : recupérer le numéro de l'expéditeur du SMS 
Blockly.Blocks.driss_linkItOne_SMS_lireNumero = {
  category: 'driss_linkIt_One : gsm',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Numéro expéditeur du SMS ");
    this.setInputsInline(true);
    this.setOutput(true, null);

    this.setTooltip("SMS");
  }
};

//LinkIt One  GSM : recupérer le message du SMS 
Blockly.Blocks.driss_linkItOne_SMS_lireMessage = {
  category: 'driss_linkIt_One : gsm',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Message contenu dans le SMS ");
    this.setInputsInline(true);
    this.setOutput(true, null);

    this.setTooltip("SMS");
  }
};



//LinkIt One  GSM : Envoyer un message  
Blockly.Blocks.driss_linkItOne_SMS_envoyerMessage = {
  category: 'driss_linkIt_One : gsm',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Envoyer SMS");
    this.appendValueInput("CONTACT_NUM")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Numéro");
    this.appendValueInput("MESSAGE_TO_SEND")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);


    this.setTooltip("SMS");
  }
};


//LinkIt One  GSM : Effacer le message  
Blockly.Blocks.driss_linkItOne_SMS_effacer = {
  category: 'driss_linkIt_One : gsm-gprs',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Effacer le SMS ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);


    this.setTooltip("SMS");
  }
};




//-GPRS ----------------------------------------------------------------------------------------------------------------------------------------

//LinkIt One  GPRS : uinitialisation 
Blockly.Blocks.driss_linkItOne_GPRS_initialisation = {
  category: 'driss_linkIt_One : gprs',
  helpUrl: '',
  init: function() {
     this.setColour(36);
    this.appendDummyInput()
        .appendField("Initialiser le module GPRS de LinkIt One");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   
    this.setTooltip('');
    this.setHelpUrl('');


    this.setTooltip("GPRS");
  }
};



/*
//LinkIt One  GPRS : driss_linkItOne_GPRS_connect_to_server
Blockly.Blocks['driss_linkItOne_GPRS_connect_to_server'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Se connecter par GPRS");
    this.appendValueInput("SERVER")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("au serveur");
    this.appendValueInput("PORT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("par le port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//LinkIt One  GPRS : driss_linkItOne_GPRS_connected_to_server
Blockly.Blocks['driss_linkItOne_GPRS_connected_to_server'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("la connexion par GPRS au serveur est établie ");
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


//LinkIt One  GPRS /  Ecriture dans le fichier  sur le serveur
Blockly.Blocks.driss_linkItOne_GPRS_writeData_on_server = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ecrire sur le serveur");
    this.appendValueInput("DATAS")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Les données");
    this.appendValueInput("FILENAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("dans le fichier");
    this.appendValueInput("PATH")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("dans le dossier");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
*/

//LinkIt One  GPRS /  Ecriture dans le fichier  sur le serveur
Blockly.Blocks['driss_linkItOne_GPRS_writeData_on_server'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Utiliser la liaison GPRS pour écrire");
    this.appendValueInput("DATAS")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("les données");
    this.appendValueInput("FILENAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("dans le fichier");
    this.appendValueInput("PATH")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("situé dans le dossier");
    this.appendValueInput("SERVER")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sur le serveur Web");
    this.appendValueInput("PORT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("port");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};




//-GPS ----------------------------------------------------------------------------------------------------------------------------------------

//LinkIt One  GPS : initialisation 
Blockly.Blocks.driss_linkItOne_GPS_initialisation = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(36);
    this.appendDummyInput()
        .appendField("Initialiser le module GPS de LinkIt One");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   
    this.setTooltip('');
    this.setHelpUrl('');


    this.setTooltip("GPS");
  }
};


//LinkIt One  GPS : lecture des donnees 
Blockly.Blocks.driss_linkItOne_GPS_lireDonnees = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Lire les données en provenance des satellites");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("GPS");
  }
};


//LinkIt One  GPS : Nombre de satellites
Blockly.Blocks.driss_linkItOne_GPS_NbreSatellites = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Nombre de Satellites captés");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Date
Blockly.Blocks.driss_linkItOne_GPS_getDate = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("la date (jj-mm-aaaa)");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Time
Blockly.Blocks.driss_linkItOne_GPS_getTime = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("heure (hh:mm:ss)");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Latitude
Blockly.Blocks.driss_linkItOne_GPS_getLatitude = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Latitude");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Longitude
Blockly.Blocks.driss_linkItOne_GPS_getLongitude = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Longitude");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Altitude
Blockly.Blocks.driss_linkItOne_GPS_getAltitude = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Altitude");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Vitesse
Blockly.Blocks.driss_linkItOne_GPS_getVitesse = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Vitesse");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};

//LinkIt One  GPS : Vitesse
Blockly.Blocks.driss_linkItOne_GPS_get_GGA_GPRMC_Trame = {
  category: 'driss_linkIt_One : gps',
  helpUrl: '',
  init: function() {
     this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .appendField("Trame de données : ");
    this.appendDummyInput()
        .appendField("date, heure, latitude, longitude,")
        .appendField("altitude, vitesse, nombre de satellites");
    this.setOutput(true, null);
    this.setTooltip("GPS");
  }
};


//-STOCKAGE ----------------------------------------------------------------------------------------------------------------------------------------

//LinkIt One  Carte SD : initialisation 
Blockly.Blocks.driss_linkItOne_SDCard_initialisation = {
  category: 'driss_linkIt_One : Stockage',
  helpUrl: '',
  init: function() {
     this.setColour(36);
    this.appendDummyInput()
        .appendField("Initialiser la carte SD de LinkIt One");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   
    this.setTooltip('');
    this.setHelpUrl('');


    this.setTooltip("Stockage carte SD");
  }
};


//LinkIt One  Flash Mem : initialisation 
Blockly.Blocks.driss_linkItOne_FalshMem_initialisation = {
  category: 'driss_linkIt_One : Stockage',
  helpUrl: '',
  init: function() {
     this.setColour(36);
    this.appendDummyInput()
        .appendField("Initialiser la mémoire Interne de LinkIt One");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   
    this.setTooltip('');
    this.setHelpUrl('');


    this.setTooltip("Stockage Memoire interne");
  }
};





//LinkIt One  Carte SD /  Flash Mem : Ecriture dans le fichier  
Blockly.Blocks.driss_linkItOne_WriteDataOnSDCard = {
  category: 'driss_linkIt_One : Stockage',
  helpUrl: '',
  init: function() {
    this.setColour(Blockly.Blocks.drissLinkItOne.HUE);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Ecrire sur la carte SD ");
    this.appendValueInput("DATA_TO_SAVE")
        .setCheck("String")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("les données");
    this.appendValueInput("FILE_NAME")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("dans le fichier");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    

    this.setTooltip("Ecriture sur le support de stockage");
  }
};

