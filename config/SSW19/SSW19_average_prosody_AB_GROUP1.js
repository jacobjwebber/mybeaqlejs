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
  "MaxTestsPerRun": 240,
  "BeaqleServiceURL": "/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "audio/SSW19_average_prosody/",
  "Testsets": [
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_zero-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_zero-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_zero-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_tail3-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_tail3-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_VAE_z16_tail3-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_Copy_synthesis-AM_scale3",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_Copy_synthesis-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_Copy_synthesis-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_AM_scale3-AM_MDN",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_AM_scale3-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_010_002",
        "TestID": "id_0_AM_MDN-AM",
        "Annotation": "Last of all, Goldilocks tried the porridge in the tiny bowl.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_010_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_010_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_zero-Copy_synthesis",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_zero-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_zero-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_zero-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_tail3-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_tail3-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_VAE_z16_tail3-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_Copy_synthesis-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_Copy_synthesis-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_Copy_synthesis-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_AM_scale3-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_AM_scale3-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_1_AM_MDN-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_zero-Copy_synthesis",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_zero-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_zero-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_zero-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_tail3-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_tail3-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_VAE_z16_tail3-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_Copy_synthesis-AM_scale3",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_Copy_synthesis-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_Copy_synthesis-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_AM_scale3-AM_MDN",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_AM_scale3-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_000",
        "TestID": "id_2_AM_MDN-AM",
        "Annotation": "A few days later, Sam was bored again.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_zero-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_zero-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_zero-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_tail3-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_tail3-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_VAE_z16_tail3-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_Copy_synthesis-AM_scale3",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_Copy_synthesis-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_Copy_synthesis-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_AM_scale3-AM_MDN",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_AM_scale3-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_013_003",
        "TestID": "id_3_AM_MDN-AM",
        "Annotation": "But most ran up the hill to see.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_013_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_013_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_zero-AM_scale3",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_zero-AM_MDN",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_zero-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_tail3-AM_scale3",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_tail3-AM_MDN",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_VAE_z16_tail3-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Copy_synthesis-AM_scale3",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Copy_synthesis-AM_MDN",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Copy_synthesis-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_AM_scale3-AM_MDN",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_AM_scale3-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_AM_MDN-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_zero-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_zero-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_zero-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_tail3-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_tail3-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_VAE_z16_tail3-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_Copy_synthesis-AM_scale3",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_Copy_synthesis-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_Copy_synthesis-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_AM_scale3-AM_MDN",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_AM_scale3-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_006_003",
        "TestID": "id_5_AM_MDN-AM",
        "Annotation": "But they didn't have much to say.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_006_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_006_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_zero-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_zero-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_zero-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_VAE_z16_tail3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_Copy_synthesis-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_Copy_synthesis-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_Copy_synthesis-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_AM_scale3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_AM_scale3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_008_006",
        "TestID": "id_6_AM_MDN-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_008_006.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_008_006.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_zero-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_zero-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_zero-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_tail3-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_tail3-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_VAE_z16_tail3-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_Copy_synthesis-AM_scale3",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_Copy_synthesis-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_Copy_synthesis-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_AM_scale3-AM_MDN",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_AM_scale3-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_005_002",
        "TestID": "id_7_AM_MDN-AM",
        "Annotation": "Sam was lonely and he was so bored.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_005_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_005_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_zero-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_zero-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_zero-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_tail3-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_tail3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_VAE_z16_tail3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_Copy_synthesis-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_Copy_synthesis-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_Copy_synthesis-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_AM_scale3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_AM_scale3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_001",
        "TestID": "id_8_AM_MDN-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_zero-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_zero-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_zero-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_tail3-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_tail3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_VAE_z16_tail3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_Copy_synthesis-AM_scale3",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_Copy_synthesis-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_Copy_synthesis-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_AM_scale3-AM_MDN",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_AM_scale3-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_000",
        "TestID": "id_9_AM_MDN-AM",
        "Annotation": "Puffing and panting, they reached the meadow.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_zero-Copy_synthesis",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_zero-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_zero-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_zero-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_tail3-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_tail3-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_VAE_z16_tail3-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_Copy_synthesis-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_Copy_synthesis-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_Copy_synthesis-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_AM_scale3-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_AM_scale3-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_10_AM_MDN-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_zero-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_zero-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_zero-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_tail3-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_tail3-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_VAE_z16_tail3-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_Copy_synthesis-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_Copy_synthesis-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_Copy_synthesis-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_AM_scale3-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_AM_scale3-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_11_AM_MDN-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_zero-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_zero-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_zero-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_tail3-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_tail3-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_VAE_z16_tail3-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_Copy_synthesis-AM_scale3",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_Copy_synthesis-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_Copy_synthesis-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_AM_scale3-AM_MDN",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_AM_scale3-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_021_004",
        "TestID": "id_12_AM_MDN-AM",
        "Annotation": "She looked at the three bears, opened her mouth and screamed.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_021_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_021_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_zero-Copy_synthesis",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_zero-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_zero-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_zero-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_tail3-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_tail3-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_VAE_z16_tail3-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_Copy_synthesis-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_Copy_synthesis-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_Copy_synthesis-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_AM_scale3-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_AM_scale3-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_13_AM_MDN-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_zero-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_zero-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_zero-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_tail3-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_tail3-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_VAE_z16_tail3-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_Copy_synthesis-AM_scale3",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_Copy_synthesis-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_Copy_synthesis-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_AM_scale3-AM_MDN",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_AM_scale3-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_004_004",
        "TestID": "id_14_AM_MDN-AM",
        "Annotation": "Her mother always said, \"Don't go into the woods.\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_004_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_004_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_zero-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_VAE_z16_tail3-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_Copy_synthesis-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_AM_scale3-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_AM_scale3-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_15_AM_MDN-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    }
  ]
}
