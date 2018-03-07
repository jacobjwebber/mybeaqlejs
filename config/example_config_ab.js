// configure the test here
var TestConfig = {
  "TestName": "AB Demo Test",
  "RatingText": "Please select the item you prefer (placeholder question)",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://homepages.inf.ed.ac.uk/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "", 
  "RequirePreference": false,
  "Testsets": [
    //    
    {
      "Name": "Schubert",
      "TestID": "id1",
      "Files": {
        "A": "audio/MScR_listening_test/StoryOfCars_sample_04/copy_synthesis.wav",
        "B": "audio/MScR_listening_test/StoryOfCars_sample_04/fls_blizzard_unilex.wav",
      }
    },
    //    
    {
      "Name": "Castanets",
      "TestID": "id2",
      "Files": {
        "A": "audio/MScR_listening_test/PirateAdventures_sample_01/copy_synthesis.wav",
        "B": "audio/MScR_listening_test/PirateAdventures_sample_01/fls_blizzard_unilex.wav",
      }
    },
  ]
}
