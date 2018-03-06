// configure the test here
var TestConfig = {
  "TestName": "Forced Choice Demo Test",
  "RateScalePng": "img/choice_emotion.png",
  "RateScaleBgPng": "img/scale_abs_background_4.png",
  "ForcedChoices": ["hap", "sad", "ang", "neu"],
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "1": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
        },
      "Classes": {
            "1": "hap",
            "2": "sad",
            "3": "ang",
            "4": "neu",
        }
    },
    {
      "Name": "Schubert 2",
      "TestID": "id1_2",
      "Files": {
            "1": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
        },
      "Classes": {
            "1": "hap",
            "2": "sad",
            "3": "ang",
            "4": "neu",
        }
    },
    {
      "Name": "Schubert 3",
      "TestID": "id1_3",
      "Files": {
            "1": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
        },
      "Classes": {
            "1": "hap",
            "2": "sad",
            "3": "ang",
            "4": "neu",
        }
    },
    //    
    {
      "Name": "Castanets",
      "TestID": "id2_1",
      "Files": {
            "1": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "2": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "3": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "4": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
        },
      "Classes": {
            "1": "hap",
            "2": "sad",
            "3": "ang",
            "4": "neu",
        }
    },
  ]
}
