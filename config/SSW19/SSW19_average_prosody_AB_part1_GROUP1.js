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
  "MaxTestsPerRun": 120,
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
    }
  ]
}
