// configure the test here
var TestConfig = {
  "TestName": "Forced Choice Demo Test",
  "RateScalePng": "img/choice_emotion.png",
  "RateScaleBgPng": "img/scale_abs_background_4.png",
  "ForcedChoices": ["Happy", "Sad", "Angry", "Neutral"],
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 4,
  "Testsets": [
    //
    {
      "Name": "Sentence 1",
      "TestID": "AMidsummerNightsDream_005_007",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_007.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_007.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_007.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_007.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 2",
      "TestID": "PirateAdventures_00002_00090_00225",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00090_00225.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00090_00225.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00090_00225.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00090_00225.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 3",
      "TestID": "Hamlet_00001_00011_00026",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00011_00026.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00011_00026.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00011_00026.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00011_00026.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 4",
      "TestID": "SecretGarden_00004_00071_00208",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00071_00208.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00071_00208.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00071_00208.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00071_00208.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 5",
      "TestID": "SecretGarden_00004_00066_00191",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00191.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00191.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00191.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00191.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 6",
      "TestID": "StoryOfCars_00008_00132_00331",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00008_00132_00331.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00008_00132_00331.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00008_00132_00331.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00008_00132_00331.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 7",
      "TestID": "Hamlet_00004_00048_00165",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00048_00165.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00048_00165.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00048_00165.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00048_00165.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 8",
      "TestID": "AMidsummerNightsDream_005_000",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_000.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_000.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_000.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_000.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 9",
      "TestID": "StoryOfCars_00003_00048_00118",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00048_00118.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00048_00118.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00048_00118.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00048_00118.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 10",
      "TestID": "Hamlet_00003_00041_00138",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00041_00138.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00041_00138.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00041_00138.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00041_00138.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 11",
      "TestID": "PirateAdventures_00002_00115_00283",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00115_00283.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00115_00283.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00115_00283.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00115_00283.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 12",
      "TestID": "Hamlet_00003_00041_00137",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00041_00137.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00041_00137.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00041_00137.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00041_00137.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 13",
      "TestID": "SecretGarden_00004_00061_00169",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00061_00169.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00061_00169.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00061_00169.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00061_00169.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 14",
      "TestID": "StoryOfChocolate_00003_00051_00128",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00003_00051_00128.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00003_00051_00128.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00003_00051_00128.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00003_00051_00128.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 15",
      "TestID": "SecretGarden_00005_00086_00257",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00257.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00257.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00257.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00257.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 16",
      "TestID": "Hamlet_00001_00011_00029",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00011_00029.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00011_00029.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00011_00029.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00011_00029.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 17",
      "TestID": "StoryOfCars_00006_00102_00253",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00102_00253.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00102_00253.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00102_00253.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00102_00253.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 18",
      "TestID": "PirateAdventures_00002_00120_00301",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00120_00301.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00120_00301.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00120_00301.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00120_00301.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 19",
      "TestID": "PirateAdventures_00003_00164_00423",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00164_00423.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00164_00423.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00164_00423.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00164_00423.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 20",
      "TestID": "SecretGarden_00006_00119_00372",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00119_00372.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00119_00372.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00119_00372.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00119_00372.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 21",
      "TestID": "PirateAdventures_00002_00116_00288",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00116_00288.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00116_00288.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00116_00288.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00116_00288.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 22",
      "TestID": "SecretGarden_00002_00030_00075",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00002_00030_00075.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00002_00030_00075.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00002_00030_00075.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00002_00030_00075.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 23",
      "TestID": "Hamlet_00004_00049_00170",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00049_00170.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00049_00170.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00049_00170.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00049_00170.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 24",
      "TestID": "Hamlet_00004_00049_00171",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00049_00171.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00049_00171.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00049_00171.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00049_00171.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 25",
      "TestID": "Hamlet_00005_00057_00200",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00057_00200.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00057_00200.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00057_00200.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00057_00200.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 26",
      "TestID": "Hamlet_00005_00069_00237",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00237.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00237.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00237.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00237.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 27",
      "TestID": "Hamlet_00008_00125_00432",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00125_00432.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00125_00432.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00125_00432.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00125_00432.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 28",
      "TestID": "AMidsummerNightsDream_005_008",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_008.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_008.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_008.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_008.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 29",
      "TestID": "SecretGarden_00006_00102_00310",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00102_00310.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00102_00310.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00102_00310.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00102_00310.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 30",
      "TestID": "StoryOfCars_00006_00090_00221",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00090_00221.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00090_00221.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00090_00221.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00090_00221.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 31",
      "TestID": "Hamlet_00005_00056_00195",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00056_00195.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00056_00195.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00056_00195.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00056_00195.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 32",
      "TestID": "Hamlet_00005_00069_00242",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00242.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00242.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00242.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00242.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 33",
      "TestID": "Hamlet_00008_00123_00423",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00123_00423.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00123_00423.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00123_00423.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00123_00423.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 34",
      "TestID": "SecretGarden_00005_00089_00270",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00089_00270.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00089_00270.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00089_00270.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00089_00270.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 35",
      "TestID": "PirateAdventures_00003_00165_00428",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00165_00428.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00165_00428.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00165_00428.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00165_00428.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 36",
      "TestID": "PirateAdventures_00002_00118_00294",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00118_00294.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00118_00294.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00118_00294.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00118_00294.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 37",
      "TestID": "Hamlet_00004_00048_00166",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00048_00166.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00048_00166.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00048_00166.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00048_00166.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 38",
      "TestID": "PirateAdventures_00003_00135_00343",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00135_00343.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00135_00343.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00135_00343.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00135_00343.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 39",
      "TestID": "StoryOfCars_00006_00089_00218",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00089_00218.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00089_00218.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00089_00218.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00089_00218.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 40",
      "TestID": "Hamlet_00008_00123_00424",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00123_00424.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00123_00424.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00123_00424.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00123_00424.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 41",
      "TestID": "Hamlet_00007_00103_00361",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00103_00361.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00103_00361.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00103_00361.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00103_00361.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 42",
      "TestID": "Hamlet_00005_00070_00245",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00070_00245.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00070_00245.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00070_00245.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00070_00245.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 43",
      "TestID": "SecretGarden_00006_00113_00349",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00113_00349.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00113_00349.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00113_00349.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00113_00349.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 44",
      "TestID": "Hamlet_00001_00022_00064",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00022_00064.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00022_00064.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00022_00064.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00022_00064.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 45",
      "TestID": "Hamlet_00001_00023_00072",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00072.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00072.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00072.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00072.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 46",
      "TestID": "Hamlet_00002_00027_00086",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00027_00086.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00027_00086.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00027_00086.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00027_00086.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 47",
      "TestID": "PirateAdventures_00002_00115_00284",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00115_00284.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00115_00284.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00115_00284.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00115_00284.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 48",
      "TestID": "Hamlet_00005_00070_00244",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00070_00244.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00070_00244.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00070_00244.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00070_00244.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 49",
      "TestID": "StoryOfChocolate_00001_00009_00021",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00009_00021.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00009_00021.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00009_00021.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00009_00021.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 50",
      "TestID": "SecretGarden_00005_00085_00253",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00085_00253.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00085_00253.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00085_00253.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00085_00253.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 51",
      "TestID": "Hamlet_00004_00051_00176",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00051_00176.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00051_00176.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00051_00176.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00051_00176.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 52",
      "TestID": "PirateAdventures_00003_00165_00425",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00165_00425.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00165_00425.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00165_00425.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00165_00425.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 53",
      "TestID": "PercyAndThePirates_00000_00049_00109",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00049_00109.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00049_00109.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00049_00109.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00049_00109.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 54",
      "TestID": "SecretGarden_00005_00085_00250",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00085_00250.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00085_00250.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00085_00250.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00085_00250.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 55",
      "TestID": "SecretGarden_00005_00091_00276",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00091_00276.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00091_00276.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00091_00276.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00091_00276.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 56",
      "TestID": "Hamlet_00001_00023_00074",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00074.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00074.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00074.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00074.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 57",
      "TestID": "Hamlet_00005_00058_00205",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00058_00205.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00058_00205.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00058_00205.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00058_00205.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 58",
      "TestID": "StoryOfCars_00003_00047_00114",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00047_00114.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00047_00114.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00047_00114.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00047_00114.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 59",
      "TestID": "SecretGarden_00004_00066_00187",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00187.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00187.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00187.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00187.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 60",
      "TestID": "SecretGarden_00004_00057_00156",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00057_00156.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00057_00156.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00057_00156.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00057_00156.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 61",
      "TestID": "SecretGarden_00005_00098_00300",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00098_00300.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00098_00300.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00098_00300.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00098_00300.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 62",
      "TestID": "SecretGarden_00004_00066_00189",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00189.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00189.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00189.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00189.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 63",
      "TestID": "StoryOfChocolate_00005_00100_00253",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00005_00100_00253.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00005_00100_00253.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00005_00100_00253.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00005_00100_00253.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 64",
      "TestID": "PirateAdventures_00003_00131_00334",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00131_00334.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00131_00334.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00131_00334.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00131_00334.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 65",
      "TestID": "Hamlet_00007_00103_00362",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00103_00362.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00103_00362.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00103_00362.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00103_00362.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 66",
      "TestID": "Hamlet_00001_00022_00065",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00022_00065.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00022_00065.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00022_00065.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00022_00065.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 67",
      "TestID": "SecretGarden_00004_00061_00167",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00061_00167.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00061_00167.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00061_00167.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00061_00167.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 68",
      "TestID": "StoryOfChocolate_00004_00064_00160",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00004_00064_00160.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00004_00064_00160.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00004_00064_00160.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00004_00064_00160.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 69",
      "TestID": "StoryOfCars_00009_00146_00365",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00009_00146_00365.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00009_00146_00365.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00009_00146_00365.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00009_00146_00365.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 70",
      "TestID": "PirateAdventures_00002_00079_00196",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00079_00196.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00079_00196.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00079_00196.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00079_00196.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 71",
      "TestID": "PirateAdventures_00003_00158_00403",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00158_00403.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00158_00403.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00158_00403.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00158_00403.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 72",
      "TestID": "Hamlet_00005_00057_00198",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00057_00198.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00057_00198.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00057_00198.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00057_00198.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 73",
      "TestID": "Hamlet_00004_00051_00179",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00051_00179.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00051_00179.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00051_00179.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00051_00179.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 74",
      "TestID": "SecretGarden_00004_00070_00203",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00070_00203.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00070_00203.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00070_00203.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00070_00203.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 75",
      "TestID": "Hamlet_00001_00011_00025",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00011_00025.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00011_00025.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00011_00025.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00011_00025.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 76",
      "TestID": "StoryOfChocolate_00001_00008_00019",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00008_00019.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00008_00019.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00008_00019.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00008_00019.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 77",
      "TestID": "Hamlet_00002_00027_00083",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00027_00083.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00027_00083.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00027_00083.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00027_00083.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 78",
      "TestID": "Hamlet_00008_00124_00429",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00124_00429.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00124_00429.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00124_00429.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00124_00429.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 79",
      "TestID": "Hamlet_00001_00023_00070",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00070.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00070.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00070.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00070.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 80",
      "TestID": "StoryOfCars_00006_00090_00224",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00090_00224.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00090_00224.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00090_00224.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00090_00224.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 81",
      "TestID": "PirateAdventures_00003_00163_00416",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00163_00416.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00163_00416.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00163_00416.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00163_00416.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 82",
      "TestID": "SecretGarden_00004_00072_00212",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00072_00212.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00072_00212.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00072_00212.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00072_00212.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 83",
      "TestID": "StoryOfChocolate_00001_00024_00060",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00024_00060.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00024_00060.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00024_00060.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00024_00060.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 84",
      "TestID": "Hamlet_00002_00027_00084",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00027_00084.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00027_00084.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00027_00084.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00027_00084.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 85",
      "TestID": "StoryOfCars_00003_00026_00060",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00026_00060.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00026_00060.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00026_00060.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00026_00060.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 86",
      "TestID": "PirateAdventures_00002_00120_00300",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00120_00300.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00120_00300.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00120_00300.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00120_00300.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 87",
      "TestID": "SecretGarden_00007_00126_00392",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00126_00392.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00126_00392.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00126_00392.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00126_00392.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 88",
      "TestID": "Hamlet_00008_00123_00425",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00123_00425.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00123_00425.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00123_00425.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00123_00425.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 89",
      "TestID": "PercyAndThePirates_00000_00032_00072",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00032_00072.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00032_00072.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00032_00072.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00032_00072.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 90",
      "TestID": "SecretGarden_00006_00118_00366",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00118_00366.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00118_00366.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00118_00366.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00118_00366.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 91",
      "TestID": "StoryOfCars_00009_00147_00368",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00009_00147_00368.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00009_00147_00368.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00009_00147_00368.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00009_00147_00368.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 92",
      "TestID": "PercyAndThePirates_00000_00112_00258",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00112_00258.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00112_00258.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00112_00258.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00112_00258.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 93",
      "TestID": "PirateAdventures_00003_00165_00426",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00165_00426.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00165_00426.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00165_00426.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00165_00426.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 94",
      "TestID": "SecretGarden_00007_00127_00400",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00127_00400.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00127_00400.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00127_00400.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00127_00400.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 95",
      "TestID": "PercyAndThePirates_00000_00009_00018",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00009_00018.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00009_00018.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00009_00018.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00009_00018.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 96",
      "TestID": "SecretGarden_00003_00048_00123",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00003_00048_00123.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00003_00048_00123.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00003_00048_00123.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00003_00048_00123.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 97",
      "TestID": "SecretGarden_00005_00091_00277",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00091_00277.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00091_00277.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00091_00277.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00091_00277.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 98",
      "TestID": "SecretGarden_00004_00071_00209",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00071_00209.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00071_00209.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00071_00209.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00071_00209.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 99",
      "TestID": "SecretGarden_00005_00089_00267",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00089_00267.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00089_00267.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00089_00267.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00089_00267.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 100",
      "TestID": "SecretGarden_00005_00089_00269",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00089_00269.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00089_00269.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00089_00269.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00089_00269.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 101",
      "TestID": "StoryOfChocolate_00005_00094_00237",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00005_00094_00237.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00005_00094_00237.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00005_00094_00237.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00005_00094_00237.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 102",
      "TestID": "StoryOfChocolate_00004_00063_00158",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00004_00063_00158.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00004_00063_00158.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00004_00063_00158.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00004_00063_00158.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 103",
      "TestID": "SecretGarden_00006_00118_00369",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00118_00369.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00118_00369.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00118_00369.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00118_00369.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 104",
      "TestID": "AMidsummerNightsDream_005_002",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_002.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_002.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_002.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_002.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 105",
      "TestID": "PirateAdventures_00002_00116_00289",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00116_00289.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00116_00289.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00116_00289.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00116_00289.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 106",
      "TestID": "StoryOfCars_00006_00090_00222",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00090_00222.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00090_00222.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00090_00222.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00090_00222.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 107",
      "TestID": "SecretGarden_00004_00061_00170",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00061_00170.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00061_00170.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00061_00170.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00061_00170.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 108",
      "TestID": "SecretGarden_00004_00064_00179",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00064_00179.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00064_00179.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00064_00179.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00064_00179.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 109",
      "TestID": "PirateAdventures_00002_00116_00286",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00116_00286.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00116_00286.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00116_00286.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00116_00286.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 110",
      "TestID": "Hamlet_00006_00088_00308",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00006_00088_00308.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00006_00088_00308.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00006_00088_00308.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00006_00088_00308.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 111",
      "TestID": "SecretGarden_00004_00066_00186",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00186.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00186.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00186.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00186.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 112",
      "TestID": "Hamlet_00003_00039_00130",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00039_00130.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00039_00130.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00039_00130.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00039_00130.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 113",
      "TestID": "StoryOfChocolate_00001_00007_00014",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00007_00014.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00007_00014.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00007_00014.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00007_00014.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 114",
      "TestID": "Hamlet_00001_00014_00037",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00014_00037.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00014_00037.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00014_00037.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00014_00037.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 115",
      "TestID": "Hamlet_00008_00125_00431",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00125_00431.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00125_00431.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00125_00431.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00125_00431.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 116",
      "TestID": "StoryOfCars_00007_00118_00299",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00007_00118_00299.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00007_00118_00299.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00007_00118_00299.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00007_00118_00299.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 117",
      "TestID": "PirateAdventures_00002_00119_00296",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00119_00296.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00119_00296.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00119_00296.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00119_00296.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 118",
      "TestID": "SecretGarden_00007_00127_00397",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00127_00397.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00127_00397.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00127_00397.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00127_00397.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 119",
      "TestID": "Hamlet_00005_00056_00196",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00056_00196.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00056_00196.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00056_00196.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00056_00196.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 120",
      "TestID": "SecretGarden_00004_00066_00188",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00188.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00188.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00188.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00188.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 121",
      "TestID": "StoryOfCars_00002_00015_00030",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00002_00015_00030.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00002_00015_00030.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00002_00015_00030.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00002_00015_00030.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 122",
      "TestID": "SecretGarden_00004_00065_00184",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00065_00184.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00065_00184.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00065_00184.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00065_00184.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 123",
      "TestID": "Hamlet_00004_00051_00178",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00051_00178.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00051_00178.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00051_00178.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00051_00178.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 124",
      "TestID": "PirateAdventures_00003_00163_00418",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00163_00418.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00163_00418.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00163_00418.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00163_00418.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 125",
      "TestID": "PirateAdventures_00003_00135_00344",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00135_00344.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00135_00344.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00135_00344.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00135_00344.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 126",
      "TestID": "AMidsummerNightsDream_005_003",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_003.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_003.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_003.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_003.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 127",
      "TestID": "StoryOfCars_00003_00048_00117",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00048_00117.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00048_00117.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00048_00117.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00048_00117.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 128",
      "TestID": "Hamlet_00007_00102_00356",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00102_00356.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00102_00356.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00102_00356.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00102_00356.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 129",
      "TestID": "StoryOfCars_00008_00131_00328",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00008_00131_00328.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00008_00131_00328.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00008_00131_00328.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00008_00131_00328.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 130",
      "TestID": "Hamlet_00002_00026_00081",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00026_00081.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00026_00081.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00026_00081.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00026_00081.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 131",
      "TestID": "PirateAdventures_00003_00163_00417",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00163_00417.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00163_00417.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00163_00417.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00163_00417.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 132",
      "TestID": "SecretGarden_00006_00113_00351",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00113_00351.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00113_00351.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00113_00351.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00113_00351.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 133",
      "TestID": "Hamlet_00004_00052_00182",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00052_00182.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00052_00182.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00052_00182.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00052_00182.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 134",
      "TestID": "StoryOfCars_00002_00016_00034",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00002_00016_00034.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00002_00016_00034.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00002_00016_00034.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00002_00016_00034.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 135",
      "TestID": "StoryOfChocolate_00001_00009_00023",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00009_00023.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00009_00023.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00009_00023.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00009_00023.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 136",
      "TestID": "StoryOfChocolate_00001_00009_00025",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00009_00025.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00009_00025.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00009_00025.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00009_00025.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 137",
      "TestID": "StoryOfChocolate_00004_00075_00187",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00004_00075_00187.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00004_00075_00187.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00004_00075_00187.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00004_00075_00187.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 138",
      "TestID": "PercyAndThePirates_00000_00023_00052",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00023_00052.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00023_00052.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00023_00052.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00023_00052.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 139",
      "TestID": "SecretGarden_00004_00072_00211",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00072_00211.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00072_00211.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00072_00211.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00072_00211.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 140",
      "TestID": "AMidsummerNightsDream_005_004",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_004.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_004.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_004.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_004.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 141",
      "TestID": "PirateAdventures_00002_00119_00297",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00119_00297.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00119_00297.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00119_00297.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00119_00297.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 142",
      "TestID": "SecretGarden_00006_00119_00375",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00119_00375.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00119_00375.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00119_00375.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00119_00375.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 143",
      "TestID": "Hamlet_00005_00058_00203",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00058_00203.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00058_00203.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00058_00203.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00058_00203.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 144",
      "TestID": "SecretGarden_00004_00070_00202",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00070_00202.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00070_00202.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00070_00202.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00070_00202.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 145",
      "TestID": "PirateAdventures_00002_00119_00298",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00119_00298.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00119_00298.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00119_00298.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00119_00298.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 146",
      "TestID": "SecretGarden_00005_00098_00301",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00098_00301.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00098_00301.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00098_00301.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00098_00301.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 147",
      "TestID": "StoryOfCars_00002_00016_00035",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00002_00016_00035.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00002_00016_00035.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00002_00016_00035.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00002_00016_00035.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 148",
      "TestID": "PercyAndThePirates_00000_00120_00277",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00120_00277.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00120_00277.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00120_00277.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00120_00277.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 149",
      "TestID": "StoryOfCars_00003_00047_00113",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00047_00113.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00047_00113.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00047_00113.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00047_00113.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 150",
      "TestID": "StoryOfChocolate_00001_00009_00022",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00009_00022.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00009_00022.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00009_00022.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00009_00022.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 151",
      "TestID": "PirateAdventures_00001_00027_00061",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00001_00027_00061.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00001_00027_00061.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00001_00027_00061.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00001_00027_00061.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 152",
      "TestID": "Hamlet_00001_00022_00067",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00022_00067.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00022_00067.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00022_00067.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00022_00067.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 153",
      "TestID": "Hamlet_00003_00040_00133",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00040_00133.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00040_00133.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00040_00133.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00040_00133.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 154",
      "TestID": "PercyAndThePirates_00000_00071_00163",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00071_00163.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00071_00163.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00071_00163.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00071_00163.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 155",
      "TestID": "Hamlet_00008_00123_00426",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00123_00426.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00123_00426.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00123_00426.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00123_00426.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 156",
      "TestID": "SecretGarden_00004_00064_00180",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00064_00180.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00064_00180.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00064_00180.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00064_00180.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 157",
      "TestID": "SecretGarden_00004_00065_00182",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00065_00182.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00065_00182.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00065_00182.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00065_00182.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 158",
      "TestID": "Hamlet_00004_00051_00177",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00051_00177.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00051_00177.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00051_00177.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00051_00177.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 159",
      "TestID": "PirateAdventures_00003_00134_00340",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00134_00340.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00134_00340.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00134_00340.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00134_00340.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 160",
      "TestID": "SecretGarden_00006_00119_00374",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00119_00374.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00119_00374.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00119_00374.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00119_00374.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 161",
      "TestID": "Hamlet_00004_00048_00164",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00048_00164.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00048_00164.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00048_00164.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00048_00164.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 162",
      "TestID": "SecretGarden_00005_00089_00268",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00089_00268.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00089_00268.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00089_00268.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00089_00268.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 163",
      "TestID": "Hamlet_00003_00040_00135",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00040_00135.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00040_00135.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00040_00135.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00040_00135.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 164",
      "TestID": "PirateAdventures_00003_00164_00420",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00164_00420.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00164_00420.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00164_00420.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00164_00420.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 165",
      "TestID": "SecretGarden_00001_00015_00037",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00001_00015_00037.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00001_00015_00037.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00001_00015_00037.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00001_00015_00037.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 166",
      "TestID": "AMidsummerNightsDream_005_001",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_001.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_001.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_001.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_001.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 167",
      "TestID": "Hamlet_00005_00070_00246",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00070_00246.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00070_00246.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00070_00246.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00070_00246.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 168",
      "TestID": "StoryOfCars_00004_00064_00160",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00004_00064_00160.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00004_00064_00160.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00004_00064_00160.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00004_00064_00160.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 169",
      "TestID": "Hamlet_00003_00040_00134",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00040_00134.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00040_00134.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00040_00134.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00040_00134.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 170",
      "TestID": "StoryOfCars_00008_00131_00329",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00008_00131_00329.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00008_00131_00329.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00008_00131_00329.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00008_00131_00329.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 171",
      "TestID": "Hamlet_00001_00021_00061",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00021_00061.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00021_00061.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00021_00061.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00021_00061.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 172",
      "TestID": "Hamlet_00003_00041_00140",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00041_00140.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00041_00140.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00041_00140.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00041_00140.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 173",
      "TestID": "StoryOfChocolate_00005_00095_00240",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00005_00095_00240.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00005_00095_00240.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00005_00095_00240.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00005_00095_00240.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 174",
      "TestID": "StoryOfChocolate_00001_00005_00009",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00005_00009.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00005_00009.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00005_00009.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00005_00009.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 175",
      "TestID": "StoryOfCars_00003_00048_00116",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00003_00048_00116.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00003_00048_00116.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00003_00048_00116.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00003_00048_00116.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 176",
      "TestID": "Hamlet_00004_00048_00167",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00048_00167.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00048_00167.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00048_00167.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00048_00167.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 177",
      "TestID": "Hamlet_00002_00026_00080",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00026_00080.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00026_00080.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00026_00080.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00026_00080.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 178",
      "TestID": "StoryOfChocolate_00004_00063_00157",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00004_00063_00157.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00004_00063_00157.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00004_00063_00157.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00004_00063_00157.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 179",
      "TestID": "StoryOfChocolate_00001_00008_00017",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00008_00017.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00008_00017.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00008_00017.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00008_00017.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 180",
      "TestID": "SecretGarden_00005_00086_00258",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00258.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00258.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00258.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00258.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 181",
      "TestID": "SecretGarden_00005_00091_00278",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00091_00278.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00091_00278.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00091_00278.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00091_00278.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 182",
      "TestID": "StoryOfCars_00006_00090_00223",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00090_00223.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00090_00223.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00090_00223.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00090_00223.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 183",
      "TestID": "SecretGarden_00006_00119_00373",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00119_00373.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00119_00373.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00119_00373.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00119_00373.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 184",
      "TestID": "PirateAdventures_00003_00135_00345",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00135_00345.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00135_00345.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00135_00345.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00135_00345.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 185",
      "TestID": "Hamlet_00005_00069_00239",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00239.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00239.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00239.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00239.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 186",
      "TestID": "StoryOfChocolate_00004_00064_00161",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00004_00064_00161.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00004_00064_00161.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00004_00064_00161.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00004_00064_00161.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 187",
      "TestID": "StoryOfCars_00006_00089_00219",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00006_00089_00219.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00006_00089_00219.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00006_00089_00219.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00006_00089_00219.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 188",
      "TestID": "Hamlet_00005_00056_00194",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00056_00194.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00056_00194.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00056_00194.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00056_00194.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 189",
      "TestID": "StoryOfCars_00009_00146_00366",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00009_00146_00366.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00009_00146_00366.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00009_00146_00366.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00009_00146_00366.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 190",
      "TestID": "SecretGarden_00007_00126_00391",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00126_00391.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00126_00391.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00126_00391.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00126_00391.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 191",
      "TestID": "Hamlet_00008_00119_00413",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00119_00413.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00119_00413.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00119_00413.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00119_00413.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 192",
      "TestID": "SecretGarden_00006_00102_00309",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00102_00309.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00102_00309.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00102_00309.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00102_00309.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 193",
      "TestID": "Hamlet_00002_00027_00085",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00027_00085.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00027_00085.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00027_00085.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00027_00085.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 194",
      "TestID": "SecretGarden_00005_00085_00252",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00085_00252.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00085_00252.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00085_00252.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00085_00252.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 195",
      "TestID": "SecretGarden_00006_00118_00368",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00118_00368.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00118_00368.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00118_00368.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00118_00368.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 196",
      "TestID": "SecretGarden_00007_00126_00394",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00126_00394.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00126_00394.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00126_00394.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00126_00394.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 197",
      "TestID": "StoryOfChocolate_00001_00009_00024",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00009_00024.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00009_00024.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00009_00024.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00009_00024.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 198",
      "TestID": "StoryOfChocolate_00005_00095_00241",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00005_00095_00241.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00005_00095_00241.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00005_00095_00241.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00005_00095_00241.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 199",
      "TestID": "StoryOfCars_00008_00132_00332",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00008_00132_00332.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00008_00132_00332.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00008_00132_00332.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00008_00132_00332.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 200",
      "TestID": "SecretGarden_00005_00086_00259",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00259.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00259.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00259.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00259.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 201",
      "TestID": "SecretGarden_00005_00086_00260",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00260.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00260.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00260.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00260.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 202",
      "TestID": "Hamlet_00005_00069_00241",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00241.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00241.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00241.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00241.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 203",
      "TestID": "Hamlet_00006_00077_00269",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00006_00077_00269.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00006_00077_00269.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00006_00077_00269.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00006_00077_00269.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 204",
      "TestID": "Hamlet_00001_00011_00028",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00011_00028.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00011_00028.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00011_00028.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00011_00028.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 205",
      "TestID": "Hamlet_00002_00027_00087",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00027_00087.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00027_00087.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00027_00087.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00027_00087.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 206",
      "TestID": "Hamlet_00008_00124_00428",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00124_00428.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00124_00428.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00124_00428.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00124_00428.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 207",
      "TestID": "Hamlet_00005_00069_00240",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00240.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00240.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00240.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00240.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 208",
      "TestID": "StoryOfCars_00002_00015_00032",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00002_00015_00032.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00002_00015_00032.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00002_00015_00032.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00002_00015_00032.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 209",
      "TestID": "SecretGarden_00005_00090_00274",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00090_00274.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00090_00274.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00090_00274.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00090_00274.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 210",
      "TestID": "SecretGarden_00005_00090_00273",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00090_00273.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00090_00273.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00090_00273.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00090_00273.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 211",
      "TestID": "Hamlet_00001_00023_00071",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00071.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00071.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00071.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00071.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 212",
      "TestID": "SecretGarden_00005_00086_00256",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00256.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00256.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00256.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00256.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 213",
      "TestID": "Hamlet_00007_00102_00358",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00102_00358.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00102_00358.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00102_00358.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00102_00358.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 214",
      "TestID": "Hamlet_00007_00102_00357",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00102_00357.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00102_00357.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00102_00357.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00102_00357.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 215",
      "TestID": "SecretGarden_00005_00091_00279",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00091_00279.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00091_00279.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00091_00279.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00091_00279.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 216",
      "TestID": "Hamlet_00001_00011_00027",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00011_00027.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00011_00027.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00011_00027.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00011_00027.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 217",
      "TestID": "SecretGarden_00006_00118_00367",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00118_00367.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00118_00367.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00118_00367.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00118_00367.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 218",
      "TestID": "Hamlet_00001_00018_00053",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00018_00053.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00018_00053.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00018_00053.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00018_00053.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 219",
      "TestID": "PercyAndThePirates_00000_00099_00230",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PercyAndThePirates_00000_00099_00230.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PercyAndThePirates_00000_00099_00230.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PercyAndThePirates_00000_00099_00230.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PercyAndThePirates_00000_00099_00230.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 220",
      "TestID": "SecretGarden_00005_00082_00241",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00082_00241.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00082_00241.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00082_00241.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00082_00241.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 221",
      "TestID": "Hamlet_00004_00049_00169",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00049_00169.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00049_00169.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00049_00169.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00049_00169.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 222",
      "TestID": "SecretGarden_00002_00028_00067",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00002_00028_00067.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00002_00028_00067.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00002_00028_00067.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00002_00028_00067.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 223",
      "TestID": "Hamlet_00007_00103_00360",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00103_00360.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00103_00360.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00103_00360.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00103_00360.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 224",
      "TestID": "SecretGarden_00005_00085_00251",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00085_00251.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00085_00251.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00085_00251.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00085_00251.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 225",
      "TestID": "PirateAdventures_00003_00164_00422",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00164_00422.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00164_00422.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00164_00422.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00164_00422.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 226",
      "TestID": "SecretGarden_00006_00113_00348",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00113_00348.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00113_00348.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00113_00348.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00113_00348.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 227",
      "TestID": "PirateAdventures_00002_00115_00282",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00115_00282.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00115_00282.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00115_00282.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00115_00282.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 228",
      "TestID": "SecretGarden_00005_00089_00271",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00089_00271.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00089_00271.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00089_00271.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00089_00271.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 229",
      "TestID": "Hamlet_00001_00023_00073",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00073.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00073.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00073.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00073.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 230",
      "TestID": "Hamlet_00005_00057_00199",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00057_00199.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00057_00199.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00057_00199.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00057_00199.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 231",
      "TestID": "Hamlet_00007_00102_00355",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00102_00355.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00102_00355.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00102_00355.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00102_00355.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 232",
      "TestID": "StoryOfChocolate_00005_00094_00238",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00005_00094_00238.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00005_00094_00238.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00005_00094_00238.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00005_00094_00238.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 233",
      "TestID": "SecretGarden_00005_00085_00249",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00085_00249.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00085_00249.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00085_00249.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00085_00249.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 234",
      "TestID": "StoryOfCars_00002_00015_00031",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00002_00015_00031.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00002_00015_00031.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00002_00015_00031.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00002_00015_00031.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 235",
      "TestID": "SecretGarden_00007_00127_00396",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00127_00396.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00127_00396.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00127_00396.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00127_00396.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 236",
      "TestID": "SecretGarden_00004_00066_00190",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00066_00190.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00066_00190.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00066_00190.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00066_00190.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 237",
      "TestID": "SecretGarden_00004_00061_00168",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00061_00168.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00061_00168.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00061_00168.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00061_00168.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 238",
      "TestID": "SecretGarden_00007_00127_00398",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00127_00398.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00127_00398.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00127_00398.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00127_00398.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 239",
      "TestID": "StoryOfCars_00009_00147_00369",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00009_00147_00369.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00009_00147_00369.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00009_00147_00369.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00009_00147_00369.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 240",
      "TestID": "StoryOfCars_00005_00076_00188",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00005_00076_00188.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00005_00076_00188.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00005_00076_00188.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00005_00076_00188.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 241",
      "TestID": "PirateAdventures_00003_00165_00427",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00165_00427.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00165_00427.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00165_00427.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00165_00427.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 242",
      "TestID": "SecretGarden_00004_00071_00206",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00071_00206.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00071_00206.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00071_00206.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00071_00206.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 243",
      "TestID": "Hamlet_00004_00052_00183",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00052_00183.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00052_00183.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00052_00183.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00052_00183.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 244",
      "TestID": "Hamlet_00005_00069_00238",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00069_00238.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00069_00238.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00069_00238.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00069_00238.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 245",
      "TestID": "Hamlet_00003_00041_00139",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00003_00041_00139.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00003_00041_00139.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00003_00041_00139.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00003_00041_00139.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 246",
      "TestID": "Hamlet_00005_00057_00201",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00057_00201.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00057_00201.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00057_00201.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00057_00201.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 247",
      "TestID": "Hamlet_00001_00007_00013",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00007_00013.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00007_00013.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00007_00013.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00007_00013.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 248",
      "TestID": "Hamlet_00004_00052_00184",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00052_00184.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00052_00184.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00052_00184.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00052_00184.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 249",
      "TestID": "PirateAdventures_00003_00134_00341",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00134_00341.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00134_00341.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00134_00341.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00134_00341.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 250",
      "TestID": "Hamlet_00004_00051_00180",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00004_00051_00180.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00004_00051_00180.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00004_00051_00180.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00004_00051_00180.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 251",
      "TestID": "Hamlet_00002_00031_00100",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00002_00031_00100.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00002_00031_00100.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00002_00031_00100.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00002_00031_00100.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 252",
      "TestID": "Hamlet_00006_00092_00324",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00006_00092_00324.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00006_00092_00324.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00006_00092_00324.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00006_00092_00324.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 253",
      "TestID": "AMidsummerNightsDream_005_006",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_006.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_006.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_006.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_006.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 254",
      "TestID": "Hamlet_00007_00105_00370",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00007_00105_00370.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00007_00105_00370.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00007_00105_00370.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00007_00105_00370.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 255",
      "TestID": "SecretGarden_00006_00118_00370",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00118_00370.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00118_00370.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00118_00370.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00118_00370.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 256",
      "TestID": "SecretGarden_00004_00071_00207",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00071_00207.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00071_00207.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00071_00207.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00071_00207.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 257",
      "TestID": "SecretGarden_00006_00113_00350",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00006_00113_00350.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00006_00113_00350.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00006_00113_00350.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00006_00113_00350.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 258",
      "TestID": "PirateAdventures_00003_00126_00313",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00126_00313.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00126_00313.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00126_00313.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00126_00313.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 259",
      "TestID": "SecretGarden_00005_00086_00255",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00005_00086_00255.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00005_00086_00255.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00005_00086_00255.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00005_00086_00255.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 260",
      "TestID": "PirateAdventures_00003_00164_00421",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00003_00164_00421.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00003_00164_00421.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00003_00164_00421.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00003_00164_00421.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 261",
      "TestID": "StoryOfCars_00001_00012_00024",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00001_00012_00024.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00001_00012_00024.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00001_00012_00024.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00001_00012_00024.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 262",
      "TestID": "StoryOfCars_00010_00157_00391",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfCars_00010_00157_00391.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfCars_00010_00157_00391.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfCars_00010_00157_00391.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfCars_00010_00157_00391.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 263",
      "TestID": "PirateAdventures_00002_00067_00160",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00067_00160.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00067_00160.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00067_00160.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00067_00160.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 264",
      "TestID": "StoryOfChocolate_00001_00008_00018",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00008_00018.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00008_00018.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00008_00018.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00008_00018.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 265",
      "TestID": "Hamlet_00005_00058_00204",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00005_00058_00204.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00005_00058_00204.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00005_00058_00204.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00005_00058_00204.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 266",
      "TestID": "AMidsummerNightsDream_005_005",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_005.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_005.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_005.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_005.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 267",
      "TestID": "Hamlet_00001_00023_00069",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00023_00069.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00023_00069.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00023_00069.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00023_00069.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 268",
      "TestID": "SecretGarden_00004_00060_00165",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00060_00165.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00060_00165.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00060_00165.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00060_00165.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 269",
      "TestID": "SecretGarden_00007_00126_00390",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00126_00390.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00126_00390.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00126_00390.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00126_00390.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 270",
      "TestID": "Hamlet_00008_00125_00433",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00008_00125_00433.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00008_00125_00433.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00008_00125_00433.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00008_00125_00433.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 271",
      "TestID": "StoryOfChocolate_00001_00007_00015",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/StoryOfChocolate_00001_00007_00015.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/StoryOfChocolate_00001_00007_00015.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/StoryOfChocolate_00001_00007_00015.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/StoryOfChocolate_00001_00007_00015.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 272",
      "TestID": "SecretGarden_00004_00065_00183",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00065_00183.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00065_00183.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00065_00183.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00065_00183.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 273",
      "TestID": "AMidsummerNightsDream_005_009",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/AMidsummerNightsDream_005_009.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/AMidsummerNightsDream_005_009.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/AMidsummerNightsDream_005_009.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/AMidsummerNightsDream_005_009.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 274",
      "TestID": "SecretGarden_00004_00070_00204",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00004_00070_00204.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00004_00070_00204.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00004_00070_00204.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00004_00070_00204.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 275",
      "TestID": "SecretGarden_00007_00127_00399",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00127_00399.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00127_00399.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00127_00399.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00127_00399.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 276",
      "TestID": "PirateAdventures_00002_00116_00287",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/PirateAdventures_00002_00116_00287.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/PirateAdventures_00002_00116_00287.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/PirateAdventures_00002_00116_00287.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/PirateAdventures_00002_00116_00287.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 277",
      "TestID": "Hamlet_00001_00022_00066",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/Hamlet_00001_00022_00066.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/Hamlet_00001_00022_00066.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/Hamlet_00001_00022_00066.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/Hamlet_00001_00022_00066.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
    //
    {
      "Name": "Sentence 278",
      "TestID": "SecretGarden_00007_00126_00393",
      "Files": {
            "1": "audio/IS18_control_space/forced_choice/ang/SecretGarden_00007_00126_00393.wav",
            "2": "audio/IS18_control_space/forced_choice/hap/SecretGarden_00007_00126_00393.wav",
            "3": "audio/IS18_control_space/forced_choice/neu/SecretGarden_00007_00126_00393.wav",
            "4": "audio/IS18_control_space/forced_choice/sad/SecretGarden_00007_00126_00393.wav",
        },
      "Classes": {
            "1": "ang",
            "2": "hap",
            "3": "neu",
            "4": "sad",
        }
    },
  ]
}
