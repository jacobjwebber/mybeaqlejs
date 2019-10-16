// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test",
  "RatingText": "Please select the item which is closest to X!",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Schubert",
      "TestID": "id1",
      "Files": {
        "A": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
        "B": "audio/MScR_listening_test/Hamlet_sample_07/copy_synthesis.wav",
      }
    },
    //    
    {
      "Name": "Castanets",
      "TestID": "id2",
      "Files": {
        "A": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
        "B": "audio/MScR_listening_test/SecretGarden_sample_05/copy_synthesis.wav",
      }
    },
  ]
}
