// configure the test here
var TestConfig = {
  "TestName": "Forced Choice Demo Test",
  "RateScalePng": "img/choice_emotion.png",
  "RateScaleBgPng": "img/scale_abs_background_4.png",
  "ForcedChoices": ["hap", "sad", "ang", "neu"],
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 4,
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "1": "audio/IS18_control_space/dummy/AMidsummerNightsDream_005_000/hap.wav",
            "2": "audio/IS18_control_space/dummy/AMidsummerNightsDream_005_000/sad.wav",
            "3": "audio/IS18_control_space/dummy/AMidsummerNightsDream_005_000/ang.wav",
            "4": "audio/IS18_control_space/dummy/AMidsummerNightsDream_005_000/neu.wav",
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
            "1": "audio/IS18_control_space/dummy/Hamlet_00001_00023_00071/hap.wav",
            "2": "audio/IS18_control_space/dummy/Hamlet_00001_00023_00071/sad.wav",
            "3": "audio/IS18_control_space/dummy/Hamlet_00001_00023_00071/ang.wav",
            "4": "audio/IS18_control_space/dummy/Hamlet_00001_00023_00071/neu.wav",
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
            "1": "audio/IS18_control_space/dummy/PercyAndThePirates_00000_00049_00109/hap.wav",
            "2": "audio/IS18_control_space/dummy/PercyAndThePirates_00000_00049_00109/sad.wav",
            "3": "audio/IS18_control_space/dummy/PercyAndThePirates_00000_00049_00109/ang.wav",
            "4": "audio/IS18_control_space/dummy/PercyAndThePirates_00000_00049_00109/neu.wav",
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
            "1": "audio/IS18_control_space/dummy/PirateAdventures_00002_00115_00282/hap.wav",
            "2": "audio/IS18_control_space/dummy/PirateAdventures_00002_00115_00282/sad.wav",
            "3": "audio/IS18_control_space/dummy/PirateAdventures_00002_00115_00282/ang.wav",
            "4": "audio/IS18_control_space/dummy/PirateAdventures_00002_00115_00282/neu.wav",
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
