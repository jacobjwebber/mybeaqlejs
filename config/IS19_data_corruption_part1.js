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
      "Name": "Screen 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/IS19_corrputed_transcript/copysynth_ssrn500/AMidsummerNightsDream_005_001.wav",
            "1": "audio/IS19_corrputed_transcript/g_50clean/AMidsummerNightsDream_005_001.wav",
            "2": "audio/IS19_corrputed_transcript/g_50clean_50asr34.8wer/AMidsummerNightsDream_005_001.wav",
            "3": "audio/IS19_corrputed_transcript/g_50clean_50sub5words/AMidsummerNightsDream_005_001.wav",
            "4": "audio/IS19_corrputed_transcript/g_100clean/AMidsummerNightsDream_005_001.wav",
            "5": "audio/IS19_corrputed_transcript/g_50clean_50add5words/AMidsummerNightsDream_005_001.wav",
            "6": "audio/IS19_corrputed_transcript/g_50clean_50del5words/AMidsummerNightsDream_005_001.wav",
        }
    },
    {
      "Name": "Screen 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/IS19_corrputed_transcript/copysynth_ssrn500/Hamlet_00001_00007_00013.wav",
            "1": "audio/IS19_corrputed_transcript/g_50clean/Hamlet_00001_00007_00013.wav",
            "2": "audio/IS19_corrputed_transcript/g_50clean_50asr34.8wer/Hamlet_00001_00007_00013.wav",
            "3": "audio/IS19_corrputed_transcript/g_50clean_50sub5words/Hamlet_00001_00007_00013.wav",
            "4": "audio/IS19_corrputed_transcript/g_100clean/Hamlet_00001_00007_00013.wav",
            "5": "audio/IS19_corrputed_transcript/g_50clean_50add5words/Hamlet_00001_00007_00013.wav",
            "6": "audio/IS19_corrputed_transcript/g_50clean_50del5words/Hamlet_00001_00007_00013.wav",
       }
    },
  ]
}
