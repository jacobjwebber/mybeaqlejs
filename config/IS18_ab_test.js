// configure the test here
var TestConfig = {
  "TestName": "AB Demo Test",
  "RatingText": "Select the version that you prefer",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "", 
  "RequirePreference": true,
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": -1,
  "Testsets": [
    {
      "Name": "Paragraph 1",
      "TestID": "Hamlet_paragraph_05_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_05.wav",
        "B": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_05.wav"
      }
    },
    {
      "Name": "Paragraph 2",
      "TestID": "SecretGarden_paragraph_01_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/SecretGarden_paragraph_01.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_01.wav"
      }
    },
    {
      "Name": "Paragraph 3",
      "TestID": "Hamlet_paragraph_01_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_01.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_01.wav"
      }
    },
    {
      "Name": "Paragraph 4",
      "TestID": "PirateAdventures_paragraph_03_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/PirateAdventures_paragraph_03.wav",
        "B": "audio/IS18_control_space/ab_test/custom/PirateAdventures_paragraph_03.wav"
      }
    },
    {
      "Name": "Paragraph 5",
      "TestID": "StoryOfCars_paragraph_02_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/StoryOfCars_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/custom/StoryOfCars_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 6",
      "TestID": "Hamlet_paragraph_04_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 7",
      "TestID": "SecretGarden_paragraph_09_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/SecretGarden_paragraph_09.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_09.wav"
      }
    },
    {
      "Name": "Paragraph 8",
      "TestID": "Hamlet_paragraph_08_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_08.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_08.wav"
      }
    },
    {
      "Name": "Paragraph 9",
      "TestID": "StoryOfChocolate_paragraph_02_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/StoryOfChocolate_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/custom/StoryOfChocolate_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 10",
      "TestID": "Hamlet_paragraph_03_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_03.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_03.wav"
      }
    },
    {
      "Name": "Paragraph 11",
      "TestID": "StoryOfChocolate_paragraph_04_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/StoryOfChocolate_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/StoryOfChocolate_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 12",
      "TestID": "SecretGarden_paragraph_11_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_11.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/SecretGarden_paragraph_11.wav"
      }
    },
    {
      "Name": "Paragraph 13",
      "TestID": "StoryOfCars_paragraph_04_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/StoryOfCars_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/custom/StoryOfCars_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 14",
      "TestID": "Hamlet_paragraph_09_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_09.wav",
        "B": "audio/IS18_control_space/ab_test/baseline/Hamlet_paragraph_09.wav"
      }
    },
    {
      "Name": "Paragraph 15",
      "TestID": "SecretGarden_paragraph_06_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/SecretGarden_paragraph_06.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_06.wav"
      }
    },
    {
      "Name": "Paragraph 16",
      "TestID": "PirateAdventures_paragraph_02_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/PirateAdventures_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/custom/PirateAdventures_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 17",
      "TestID": "SecretGarden_paragraph_10_custom_baseline",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/baseline/SecretGarden_paragraph_10.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_10.wav"
      }
    },
    {
      "Name": "Paragraph 18",
      "TestID": "SecretGarden_paragraph_09_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_09.wav",
        "B": "audio/IS18_control_space/ab_test/random/SecretGarden_paragraph_09.wav"
      }
    },
    {
      "Name": "Paragraph 19",
      "TestID": "Hamlet_paragraph_01_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_01.wav",
        "B": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_01.wav"
      }
    },
    {
      "Name": "Paragraph 20",
      "TestID": "SecretGarden_paragraph_01_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/SecretGarden_paragraph_01.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_01.wav"
      }
    },
    {
      "Name": "Paragraph 21",
      "TestID": "Hamlet_paragraph_05_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_05.wav",
        "B": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_05.wav"
      }
    },
    {
      "Name": "Paragraph 22",
      "TestID": "Hamlet_paragraph_04_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 23",
      "TestID": "Hamlet_paragraph_03_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_03.wav",
        "B": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_03.wav"
      }
    },
    {
      "Name": "Paragraph 24",
      "TestID": "StoryOfCars_paragraph_04_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/StoryOfCars_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/random/StoryOfCars_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 25",
      "TestID": "Hamlet_paragraph_08_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_08.wav",
        "B": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_08.wav"
      }
    },
    {
      "Name": "Paragraph 26",
      "TestID": "StoryOfChocolate_paragraph_02_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/StoryOfChocolate_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/custom/StoryOfChocolate_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 27",
      "TestID": "Hamlet_paragraph_09_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/Hamlet_paragraph_09.wav",
        "B": "audio/IS18_control_space/ab_test/random/Hamlet_paragraph_09.wav"
      }
    },
    {
      "Name": "Paragraph 28",
      "TestID": "PirateAdventures_paragraph_02_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/PirateAdventures_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/custom/PirateAdventures_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 29",
      "TestID": "SecretGarden_paragraph_06_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/SecretGarden_paragraph_06.wav",
        "B": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_06.wav"
      }
    },
    {
      "Name": "Paragraph 30",
      "TestID": "StoryOfCars_paragraph_02_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/StoryOfCars_paragraph_02.wav",
        "B": "audio/IS18_control_space/ab_test/random/StoryOfCars_paragraph_02.wav"
      }
    },
    {
      "Name": "Paragraph 31",
      "TestID": "PirateAdventures_paragraph_03_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/PirateAdventures_paragraph_03.wav",
        "B": "audio/IS18_control_space/ab_test/random/PirateAdventures_paragraph_03.wav"
      }
    },
    {
      "Name": "Paragraph 32",
      "TestID": "StoryOfChocolate_paragraph_04_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/random/StoryOfChocolate_paragraph_04.wav",
        "B": "audio/IS18_control_space/ab_test/custom/StoryOfChocolate_paragraph_04.wav"
      }
    },
    {
      "Name": "Paragraph 33",
      "TestID": "SecretGarden_paragraph_11_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_11.wav",
        "B": "audio/IS18_control_space/ab_test/random/SecretGarden_paragraph_11.wav"
      }
    },
    {
      "Name": "Paragraph 34",
      "TestID": "SecretGarden_paragraph_10_custom_random",
      "Files": {
        "A": "audio/IS18_control_space/ab_test/custom/SecretGarden_paragraph_10.wav",
        "B": "audio/IS18_control_space/ab_test/random/SecretGarden_paragraph_10.wav"
      }
    }
  ]
}
