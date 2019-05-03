// configure the test here
var TestConfig = {
  "TestName": "Pairwise variation",
  "RatingText": "Choose which sentence has <strong>more varied intonation</strong>",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowScreenName": false,
  "ShowResults": false,
  "EnableABLoop": false,
  "RequirePreference": true,
  "EnableOnlineSubmission": true,
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 525,
  "BeaqleServiceURL": "/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "audio/SSW19_average_prosody/",
  "Testsets": [
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-Flat_deg2",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_zero-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_tail3-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_tail3-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_VAE_z16_tail3-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Flat_deg2-Copy_synthesis",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Flat_deg2-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Flat_deg2-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Flat_deg2-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Copy_synthesis-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Copy_synthesis-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_Copy_synthesis-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_AM_scale3-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_AM_scale3-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_AM_MDN-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-Flat_deg2",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-AM_scale3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-AM_MDN",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_zero-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_tail3-Flat_deg2",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_tail3-AM_scale3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_tail3-AM_MDN",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_VAE_z16_tail3-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Flat_deg2-Copy_synthesis",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Flat_deg2-AM_scale3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Flat_deg2-AM_MDN",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Flat_deg2-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Copy_synthesis-AM_scale3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Copy_synthesis-AM_MDN",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_Copy_synthesis-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_AM_scale3-AM_MDN",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_AM_scale3-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_AM_MDN-AM",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-Flat_deg2",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-AM_scale3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-AM_MDN",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_zero-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_tail3-Flat_deg2",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_tail3-AM_scale3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_tail3-AM_MDN",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_VAE_z16_tail3-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Flat_deg2-Copy_synthesis",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Flat_deg2-AM_scale3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Flat_deg2-AM_MDN",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Flat_deg2-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Copy_synthesis-AM_scale3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Copy_synthesis-AM_MDN",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_Copy_synthesis-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_AM_scale3-AM_MDN",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_AM_scale3-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_AM_MDN-AM",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-Flat_deg2",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-Copy_synthesis",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-AM_scale3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-AM_MDN",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_zero-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_tail3-Flat_deg2",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_tail3-AM_scale3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_tail3-AM_MDN",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_VAE_z16_tail3-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Flat_deg2-Copy_synthesis",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Flat_deg2-AM_scale3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Flat_deg2-AM_MDN",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Flat_deg2-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Copy_synthesis-AM_scale3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Copy_synthesis-AM_MDN",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_Copy_synthesis-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_AM_scale3-AM_MDN",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_AM_scale3-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_AM_MDN-AM",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-Flat_deg2",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_zero-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_tail3-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_tail3-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_VAE_z16_tail3-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Flat_deg2-Copy_synthesis",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Flat_deg2-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Flat_deg2-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Flat_deg2-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Copy_synthesis-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Copy_synthesis-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_Copy_synthesis-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_AM_scale3-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_AM_scale3-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_AM_MDN-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-AM_scale3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-AM_MDN",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_zero-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_VAE_z16_tail3-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Flat_deg2-Copy_synthesis",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Flat_deg2-AM_scale3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Flat_deg2-AM_MDN",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Flat_deg2-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Copy_synthesis-AM_scale3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Copy_synthesis-AM_MDN",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_Copy_synthesis-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_AM_scale3-AM_MDN",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_AM_scale3-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_AM_MDN-AM",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-Flat_deg2",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_zero-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_tail3-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_tail3-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_VAE_z16_tail3-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Flat_deg2-Copy_synthesis",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Flat_deg2-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Flat_deg2-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Flat_deg2-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Copy_synthesis-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Copy_synthesis-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_Copy_synthesis-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_AM_scale3-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_AM_scale3-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_AM_MDN-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-Flat_deg2",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_zero-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_tail3-Flat_deg2",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_tail3-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_tail3-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_VAE_z16_tail3-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Flat_deg2-Copy_synthesis",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Flat_deg2-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Flat_deg2-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Flat_deg2-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Copy_synthesis-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Copy_synthesis-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_Copy_synthesis-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_AM_scale3-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_AM_scale3-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_AM_MDN-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-Flat_deg2",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-Copy_synthesis",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-AM_scale3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-AM_MDN",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_zero-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_tail3-Flat_deg2",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_tail3-AM_scale3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_tail3-AM_MDN",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_VAE_z16_tail3-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Flat_deg2-Copy_synthesis",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Flat_deg2-AM_scale3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Flat_deg2-AM_MDN",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Flat_deg2-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Copy_synthesis-AM_scale3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Copy_synthesis-AM_MDN",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_Copy_synthesis-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_AM_scale3-AM_MDN",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_AM_scale3-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_AM_MDN-AM",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-Flat_deg2",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_zero-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_tail3-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_tail3-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_VAE_z16_tail3-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Flat_deg2-Copy_synthesis",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Flat_deg2-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Flat_deg2-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Flat_deg2-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Copy_synthesis-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Copy_synthesis-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_Copy_synthesis-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_AM_scale3-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_AM_scale3-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_AM_MDN-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-Flat_deg2",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_zero-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_tail3-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_tail3-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_VAE_z16_tail3-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Flat_deg2-Copy_synthesis",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Flat_deg2-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Flat_deg2-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Flat_deg2-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Copy_synthesis-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Copy_synthesis-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_Copy_synthesis-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_AM_scale3-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_AM_scale3-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_AM_MDN-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-Flat_deg2",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-Copy_synthesis",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-AM_scale3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-AM_MDN",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_zero-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_tail3-Flat_deg2",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_tail3-AM_scale3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_tail3-AM_MDN",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_VAE_z16_tail3-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Flat_deg2-Copy_synthesis",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Flat_deg2-AM_scale3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Flat_deg2-AM_MDN",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Flat_deg2-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Copy_synthesis-AM_scale3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Copy_synthesis-AM_MDN",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_Copy_synthesis-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_AM_scale3-AM_MDN",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_AM_scale3-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_AM_MDN-AM",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-Flat_deg2",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_zero-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_tail3-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_tail3-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_VAE_z16_tail3-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Flat_deg2-Copy_synthesis",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Flat_deg2-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Flat_deg2-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Flat_deg2-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Copy_synthesis-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Copy_synthesis-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_Copy_synthesis-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_AM_scale3-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_AM_scale3-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_AM_MDN-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-Flat_deg2",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-AM_scale3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-AM_MDN",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_zero-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_tail3-AM_scale3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_tail3-AM_MDN",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_VAE_z16_tail3-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Flat_deg2-Copy_synthesis",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Flat_deg2-AM_scale3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Flat_deg2-AM_MDN",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Flat_deg2-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Copy_synthesis-AM_scale3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Copy_synthesis-AM_MDN",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_Copy_synthesis-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_AM_scale3-AM_MDN",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_AM_scale3-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_AM_MDN-AM",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-Flat_deg2",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_zero-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_tail3-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_tail3-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_VAE_z16_tail3-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Flat_deg2-Copy_synthesis",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Flat_deg2-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Flat_deg2-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Flat_deg2-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Copy_synthesis-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Copy_synthesis-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_Copy_synthesis-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_AM_scale3-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_AM_scale3-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_AM_MDN-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-Flat_deg2",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-AM_scale3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-AM_MDN",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_zero-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_tail3-AM_scale3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_tail3-AM_MDN",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_VAE_z16_tail3-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Flat_deg2-Copy_synthesis",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Flat_deg2-AM_scale3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Flat_deg2-AM_MDN",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Flat_deg2-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Copy_synthesis-AM_scale3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Copy_synthesis-AM_MDN",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_Copy_synthesis-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_AM_scale3-AM_MDN",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_AM_scale3-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_AM_MDN-AM",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-Flat_deg2",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_zero-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_tail3-Flat_deg2",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_tail3-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_tail3-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_VAE_z16_tail3-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Flat_deg2-Copy_synthesis",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Flat_deg2-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Flat_deg2-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Flat_deg2-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Copy_synthesis-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Copy_synthesis-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_Copy_synthesis-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_AM_scale3-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_AM_scale3-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_AM_MDN-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-Flat_deg2",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_zero-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_tail3-Flat_deg2",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_tail3-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_tail3-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_VAE_z16_tail3-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Flat_deg2-Copy_synthesis",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Flat_deg2-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Flat_deg2-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Flat_deg2-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Copy_synthesis-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Copy_synthesis-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_Copy_synthesis-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_AM_scale3-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_AM_scale3-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_AM_MDN-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-Flat_deg2",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-AM_scale3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-AM_MDN",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_zero-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_tail3-AM_scale3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_tail3-AM_MDN",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_VAE_z16_tail3-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Flat_deg2-Copy_synthesis",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Flat_deg2-AM_scale3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Flat_deg2-AM_MDN",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Flat_deg2-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Copy_synthesis-AM_scale3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Copy_synthesis-AM_MDN",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_Copy_synthesis-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_AM_scale3-AM_MDN",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_AM_scale3-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_AM_MDN-AM",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-Flat_deg2",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-AM_scale3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-AM_MDN",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_zero-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_tail3-AM_scale3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_tail3-AM_MDN",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_VAE_z16_tail3-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Flat_deg2-Copy_synthesis",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Flat_deg2-AM_scale3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Flat_deg2-AM_MDN",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Flat_deg2-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Copy_synthesis-AM_scale3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Copy_synthesis-AM_MDN",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_Copy_synthesis-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_AM_scale3-AM_MDN",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_AM_scale3-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_AM_MDN-AM",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-Flat_deg2",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_zero-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_tail3-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_tail3-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_VAE_z16_tail3-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Flat_deg2-Copy_synthesis",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Flat_deg2-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Flat_deg2-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Flat_deg2-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Copy_synthesis-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Copy_synthesis-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_Copy_synthesis-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_AM_scale3-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_AM_scale3-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_AM_MDN-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-Flat_deg2",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-Copy_synthesis",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-AM_scale3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-AM_MDN",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_zero-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_tail3-Flat_deg2",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_tail3-AM_scale3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_tail3-AM_MDN",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_VAE_z16_tail3-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Flat_deg2-Copy_synthesis",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Flat_deg2-AM_scale3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Flat_deg2-AM_MDN",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Flat_deg2-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Copy_synthesis-AM_scale3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Copy_synthesis-AM_MDN",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_Copy_synthesis-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_AM_scale3-AM_MDN",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_AM_scale3-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_AM_MDN-AM",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-Flat_deg2",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_zero-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_tail3-Flat_deg2",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_tail3-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_tail3-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_VAE_z16_tail3-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Flat_deg2-Copy_synthesis",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Flat_deg2-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Flat_deg2-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Flat_deg2-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Copy_synthesis-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Copy_synthesis-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_Copy_synthesis-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_AM_scale3-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_AM_scale3-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_AM_MDN-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-AM_scale3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-AM_MDN",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_zero-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_VAE_z16_tail3-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Flat_deg2-Copy_synthesis",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Flat_deg2-AM_scale3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Flat_deg2-AM_MDN",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Flat_deg2-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Copy_synthesis-AM_scale3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Copy_synthesis-AM_MDN",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_Copy_synthesis-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_AM_scale3-AM_MDN",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_AM_scale3-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_AM_MDN-AM",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_zero-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_tail3-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_tail3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_VAE_z16_tail3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Flat_deg2-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Flat_deg2-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Flat_deg2-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Flat_deg2-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Copy_synthesis-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Copy_synthesis-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_Copy_synthesis-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_AM_scale3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_AM_scale3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_AM_MDN-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_zero-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_VAE_z16_tail3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Flat_deg2-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Flat_deg2-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Flat_deg2-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Flat_deg2-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Copy_synthesis-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Copy_synthesis-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_Copy_synthesis-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_AM_scale3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_AM_scale3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_AM_MDN-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-Flat_deg2",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-AM_scale3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-AM_MDN",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_zero-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_tail3-AM_scale3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_tail3-AM_MDN",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_VAE_z16_tail3-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Flat_deg2-Copy_synthesis",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Flat_deg2-AM_scale3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Flat_deg2-AM_MDN",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Flat_deg2-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Copy_synthesis-AM_scale3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Copy_synthesis-AM_MDN",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_Copy_synthesis-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_AM_scale3-AM_MDN",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_AM_scale3-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_AM_MDN-AM",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-Flat_deg2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_zero-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_tail3-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_tail3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_VAE_z16_tail3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Flat_deg2-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Flat_deg2-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Flat_deg2-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Flat_deg2-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Copy_synthesis-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Copy_synthesis-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_Copy_synthesis-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_AM_scale3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_AM_scale3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_AM_MDN-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_zero-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_tail3-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_tail3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_VAE_z16_tail3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Flat_deg2-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Flat_deg2-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Flat_deg2-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Flat_deg2-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Copy_synthesis-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Copy_synthesis-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_Copy_synthesis-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_AM_scale3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_AM_scale3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_AM_MDN-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-Flat_deg2",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-Copy_synthesis",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_zero-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_tail3-Flat_deg2",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_tail3-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_tail3-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_VAE_z16_tail3-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Flat_deg2-Copy_synthesis",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Flat_deg2-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Flat_deg2-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Flat_deg2-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Copy_synthesis-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Copy_synthesis-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_Copy_synthesis-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_AM_scale3-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_AM_scale3-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_AM_MDN-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_zero-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_tail3-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_tail3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_VAE_z16_tail3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Flat_deg2-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Flat_deg2-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Flat_deg2-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Flat_deg2-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Copy_synthesis-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Copy_synthesis-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_Copy_synthesis-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_AM_scale3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_AM_scale3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_AM_MDN-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_zero-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_VAE_z16_tail3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Flat_deg2-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Flat_deg2-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Flat_deg2-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Flat_deg2-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Copy_synthesis-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Copy_synthesis-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_Copy_synthesis-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_AM_scale3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_AM_scale3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_AM_MDN-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-Flat_deg2",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_zero-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_tail3-Flat_deg2",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_tail3-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_tail3-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_VAE_z16_tail3-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Flat_deg2-Copy_synthesis",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Flat_deg2-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Flat_deg2-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Flat_deg2-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Copy_synthesis-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Copy_synthesis-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_Copy_synthesis-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_AM_scale3-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_AM_scale3-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_AM_MDN-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-Flat_deg2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_zero-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_tail3-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_tail3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_VAE_z16_tail3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Flat_deg2-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Flat_deg2-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Flat_deg2-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Flat_deg2-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Copy_synthesis-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Copy_synthesis-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_Copy_synthesis-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_AM_scale3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_AM_scale3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_AM_MDN-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    }
  ]
}
