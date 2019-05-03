// configure the test here
var TestConfig = {
  "TestName": "Naturalness rating",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 1,
  "RateMaxValue": 5,
  "RateDefaultValue": 0,
  "RateVisualOffset": 0.5,
  "ShowFileIDs": false,
  "ShowScreenName": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 10000,
  "RequireMaxRating": false,
  "AudioRoot": "audio/SSW19_average_prosody/",
  "Testsets": [
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_0",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_1",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_2",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_4",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_5",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_0_6",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_0",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_1",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_2",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_3",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_4",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_5",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_001",
        "TestID": "id_1_6",
        "Annotation": "She had lovely golden hair and looked as good as gold.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_0",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_1",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_2",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_3",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_4",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_5",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_002_003",
        "TestID": "id_2_6",
        "Annotation": "She liked to do something naughty every day.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_002_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_0",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_1",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_2",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_3",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_4",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_5",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_000",
        "TestID": "id_3_6",
        "Annotation": "And gave her little brother a haircut.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_0",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_1",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_2",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_4",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_5",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_4_6",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_0",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_1",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_2",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_3",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_4",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_5",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_001",
        "TestID": "id_5_6",
        "Annotation": "\"There aren't any bears here at all.\"",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_0",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_1",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_2",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_4",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_5",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_6_6",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_0",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_1",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_2",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_4",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_5",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_7_6",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_0",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_1",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_2",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_3",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_4",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_5",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_009_002",
        "TestID": "id_8_6",
        "Annotation": "First, Goldilocks tried the great, big bowl.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_009_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_0",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_1",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_2",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_4",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_5",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_9_6",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_0",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_1",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_2",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_4",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_5",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_10_6",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_0",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_1",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_2",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_3",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_4",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_5",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_001",
        "TestID": "id_11_6",
        "Annotation": "First, she tried the great, big chair.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_0",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_1",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_2",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_4",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_5",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_12_6",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_0",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_1",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_2",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_3",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_4",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_5",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_016_000",
        "TestID": "id_13_6",
        "Annotation": "Father Bear went straight to the table.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_016_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_0",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_1",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_2",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_4",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_5",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_14_6",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_0",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_1",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_2",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_3",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_4",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_5",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_003",
        "TestID": "id_15_6",
        "Annotation": "He cried so loudly, Goldilocks woke up.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_003.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_0",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_1",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_2",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_4",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_5",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_16_6",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_0",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_1",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_2",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_4",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_5",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_17_6",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_0",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_1",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_2",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_3",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_4",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_5",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_002_000",
        "TestID": "id_18_6",
        "Annotation": "Sam lived in a little village in the mountains.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_002_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_0",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_1",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_2",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_3",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_4",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_5",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_004_000",
        "TestID": "id_19_6",
        "Annotation": "He watched them from morning until evening.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_004_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_0",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_1",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_2",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_4",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_5",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_20_6",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_0",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_1",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_2",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_3",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_4",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_5",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_003",
        "TestID": "id_21_6",
        "Annotation": "All his friends were down in the village.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_0",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_1",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_2",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_4",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_5",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_22_6",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_0",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_1",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_2",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_3",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_4",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_5",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_007_000",
        "TestID": "id_23_6",
        "Annotation": "\"Nobody ever comes up here,\" moaned Sam.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_007_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_0",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_1",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_4",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_5",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_000",
        "TestID": "id_24_6",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_0",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_1",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_4",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_5",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_25_6",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_0",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_1",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_2",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_3",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_4",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_5",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_009_000",
        "TestID": "id_26_6",
        "Annotation": "Everyone ran up the hill with him.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_009_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_0",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_1",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_4",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_5",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_27_6",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_0",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_1",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_4",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_5",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_28_6",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_0",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_1",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_2",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_4",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_5",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_29_6",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_0",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_1",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_4",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_5",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_30_6",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_0",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_1",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_2",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_4",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_5",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_31_6",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_0",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_1",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_2",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_4",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_5",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_32_6",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_0",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_1",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_2",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_4",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_5",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_000",
        "TestID": "id_33_6",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_000.wav"
        }
    }
  ]
}
