// configure the test here
var TestConfig = {
  "TestName": "Listening test – part 1",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 100,
  "RequireMaxRating": true,
  "AudioRoot": "audio/IS19_corrputed_transcript/",
  "Testsets": [
    //    
    {
      "Name": "Screen 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "copysynth_ssrn500/LJ050-0001.wav",
            "g_50clean": "g_50clean/LJ050-0001.wav",
            "g_50clean_50asr34": "g_50clean_50asr34.8wer/LJ050-0001.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0001.wav",
            "g_100clean": "g_100clean/LJ050-0001.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0001.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0001.wav",
        }
    },
    {
      "Name": "Screen 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "copysynth_ssrn500/LJ050-0002.wav",
            "g_50clean": "g_50clean/LJ050-0002.wav",
            "g_50clean_50asr34": "g_50clean_50asr34.8wer/LJ050-0002.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0002.wav",
            "g_100clean": "g_100clean/LJ050-0002.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0002.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0002.wav",
       }
    },
  ]
}
