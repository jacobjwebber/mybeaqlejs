// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "1": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
        }
    },
    {
      "Name": "Schubert 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "1": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
        }
    },
    {
      "Name": "Schubert 3",
      "TestID": "id1_3",
      "Files": {
            "Reference": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "1": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
        }
    },
    //    
    {
       "Name": "Castanets",
       "TestID": "id2_1",
       "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "1": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
        }
    },
  ]
}
