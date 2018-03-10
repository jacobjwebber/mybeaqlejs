// configure the test here
var TestConfig = {
  "TestName": "Emotive speech listening test",
  "RateScalePng": "img/scale_cmp.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue": 0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 16,
  "RequireMaxRating": true,
  "Testsets": [
    //    
    {
      "Name": "Screen 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/StoryOfCars_sample_04/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/StoryOfCars_sample_04/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/StoryOfCars_sample_04/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/StoryOfCars_sample_04/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/StoryOfCars_sample_04/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 2",
      "TestID": "id2_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/StoryOfChocolate_sample_03/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/StoryOfChocolate_sample_03/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/StoryOfChocolate_sample_03/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/StoryOfChocolate_sample_03/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/StoryOfChocolate_sample_03/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/StoryOfChocolate_sample_03/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 3",
      "TestID": "id3_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/StoryOfChocolate_sample_02/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/StoryOfChocolate_sample_02/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/StoryOfChocolate_sample_02/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/StoryOfChocolate_sample_02/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/StoryOfChocolate_sample_02/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/StoryOfChocolate_sample_02/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 4",
      "TestID": "id4_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_01/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_01/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_01/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_01/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_01/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_01/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 5",
      "TestID": "id5_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/Hamlet_sample_07/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/Hamlet_sample_07/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/Hamlet_sample_07/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/Hamlet_sample_07/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/Hamlet_sample_07/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 6",
      "TestID": "id6_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_04/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_04/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_04/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_04/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_04/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_04/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 7",
      "TestID": "id7_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_06/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_06/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_06/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_06/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_06/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_06/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 8",
      "TestID": "id8_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/StoryOfCars_sample_03/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/StoryOfCars_sample_03/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/StoryOfCars_sample_03/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/StoryOfCars_sample_03/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/StoryOfCars_sample_03/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/StoryOfCars_sample_03/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 9",
      "TestID": "id9_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/PirateAdventures_sample_01/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/PirateAdventures_sample_01/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/PirateAdventures_sample_01/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/PirateAdventures_sample_01/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/PirateAdventures_sample_01/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 10",
      "TestID": "id10_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/Hamlet_sample_04/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/Hamlet_sample_04/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/Hamlet_sample_04/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/Hamlet_sample_04/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/Hamlet_sample_04/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/Hamlet_sample_04/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 11",
      "TestID": "id11_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_10/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_10/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_10/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_10/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_10/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_10/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 12",
      "TestID": "id12_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/Hamlet_sample_02/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/Hamlet_sample_02/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/Hamlet_sample_02/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/Hamlet_sample_02/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/Hamlet_sample_02/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/Hamlet_sample_02/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 13",
      "TestID": "id13_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/PirateAdventures_sample_02/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/PirateAdventures_sample_02/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/PirateAdventures_sample_02/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/PirateAdventures_sample_02/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/PirateAdventures_sample_02/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/PirateAdventures_sample_02/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 14",
      "TestID": "id14_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/Hamlet_sample_08/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/Hamlet_sample_08/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/Hamlet_sample_08/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/Hamlet_sample_08/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/Hamlet_sample_08/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/Hamlet_sample_08/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 15",
      "TestID": "id15_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_05/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_05/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_05/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_05/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_05/emo_t_SNE_multi_task_16x16.wav",
        }
    },
    //    
    {
      "Name": "Screen 16",
      "TestID": "id16_1",
      "Files": {
            "Reference": "audio/MScR_listening_test/SecretGarden_sample_07/copy_synthesis.wav",
            "Baseline": "audio/MScR_listening_test/SecretGarden_sample_07/fls_blizzard_unilex.wav",
            "Categorical": "audio/MScR_listening_test/SecretGarden_sample_07/emo_basic4.wav",
            "Dimensional": "audio/MScR_listening_test/SecretGarden_sample_07/emo_dimensional.wav",
            "Input_features": "audio/MScR_listening_test/SecretGarden_sample_07/emo_eGeMAPS.wav",
            "eGrid_16x16": "audio/MScR_listening_test/SecretGarden_sample_07/emo_t_SNE_multi_task_16x16.wav",
        }
    },
  ]
}
