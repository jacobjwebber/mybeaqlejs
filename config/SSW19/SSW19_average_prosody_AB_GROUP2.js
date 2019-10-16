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
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_zero-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_VAE_z16_tail3-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_Copy_synthesis-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_AM_scale3-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_AM_scale3-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_0_AM_MDN-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_zero-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_VAE_z16_tail3-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_Copy_synthesis-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_AM_scale3-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_AM_scale3-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_1_AM_MDN-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_zero-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_zero-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_zero-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_VAE_z16_tail3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_Copy_synthesis-AM_scale3",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_Copy_synthesis-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_Copy_synthesis-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_AM_scale3-AM_MDN",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_AM_scale3-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_012_007",
        "TestID": "id_2_AM_MDN-AM",
        "Annotation": "\"A wolf has come out of the forest!\"",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_012_007.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_012_007.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_zero-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_zero-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_zero-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_tail3-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_tail3-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_VAE_z16_tail3-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_Copy_synthesis-AM_scale3",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_Copy_synthesis-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_Copy_synthesis-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_AM_scale3-AM_MDN",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_AM_scale3-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_012_000",
        "TestID": "id_3_AM_MDN-AM",
        "Annotation": "Last of all Goldilocks tried the tiny chair.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_012_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_012_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_zero-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_zero-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_zero-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_tail3-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_tail3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_VAE_z16_tail3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_Copy_synthesis-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_Copy_synthesis-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_Copy_synthesis-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_AM_scale3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_AM_scale3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_010_003",
        "TestID": "id_4_AM_MDN-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_010_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_010_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_zero-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_zero-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_zero-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_tail3-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_tail3-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_VAE_z16_tail3-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_Copy_synthesis-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_Copy_synthesis-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_Copy_synthesis-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_AM_scale3-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_AM_scale3-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_5_AM_MDN-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_zero-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_zero-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_zero-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_VAE_z16_tail3-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_Copy_synthesis-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_Copy_synthesis-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_Copy_synthesis-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_AM_scale3-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_AM_scale3-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_6_AM_MDN-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_zero-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_zero-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_zero-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_tail3-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_tail3-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_VAE_z16_tail3-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_Copy_synthesis-AM_scale3",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_Copy_synthesis-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_Copy_synthesis-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_AM_scale3-AM_MDN",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_AM_scale3-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_011_000",
        "TestID": "id_7_AM_MDN-AM",
        "Annotation": "Feeling full, Goldilocks looked for somewhere to sit.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_011_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_011_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_zero-Copy_synthesis",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_zero-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_zero-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_zero-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_tail3-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_tail3-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_VAE_z16_tail3-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_Copy_synthesis-AM_scale3",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_Copy_synthesis-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_Copy_synthesis-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_AM_scale3-AM_MDN",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_AM_scale3-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_007_004",
        "TestID": "id_8_AM_MDN-AM",
        "Annotation": "But there was a delicious smell coming from inside.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_007_004.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_007_004.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_zero-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_zero-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_zero-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_tail3-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_tail3-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_VAE_z16_tail3-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_Copy_synthesis-AM_scale3",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_Copy_synthesis-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_Copy_synthesis-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_AM_scale3-AM_MDN",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_AM_scale3-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_019_002",
        "TestID": "id_9_AM_MDN-AM",
        "Annotation": "Then the three bears heard loud snores from upstairs.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_019_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_019_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_zero-Copy_synthesis",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_zero-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_zero-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_zero-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_tail3-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_tail3-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_VAE_z16_tail3-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_Copy_synthesis-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_Copy_synthesis-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_Copy_synthesis-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_AM_scale3-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_AM_scale3-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_10_AM_MDN-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_zero-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_zero-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_zero-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_tail3-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_tail3-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_VAE_z16_tail3-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_Copy_synthesis-AM_scale3",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_Copy_synthesis-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_Copy_synthesis-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_AM_scale3-AM_MDN",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_AM_scale3-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_001_000",
        "TestID": "id_11_AM_MDN-AM",
        "Annotation": "Once upon a time, there was a little girl called Goldilocks.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_001_000.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_001_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_zero-Copy_synthesis",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_zero-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_zero-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_zero-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_tail3-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_tail3-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_VAE_z16_tail3-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_Copy_synthesis-AM_scale3",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_Copy_synthesis-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_Copy_synthesis-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_AM_scale3-AM_MDN",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_AM_scale3-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_022_001",
        "TestID": "id_12_AM_MDN-AM",
        "Annotation": "She ran home as fast as she could go.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_022_001.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_022_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_zero-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_zero-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_zero-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_tail3-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_tail3-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_VAE_z16_tail3-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_Copy_synthesis-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_Copy_synthesis-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_Copy_synthesis-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_AM_scale3-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_AM_scale3-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_13_AM_MDN-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_zero-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_zero-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_zero-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_tail3-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_tail3-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_VAE_z16_tail3-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_Copy_synthesis-AM_scale3",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_Copy_synthesis-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_Copy_synthesis-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_AM_scale3-AM_MDN",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_AM_scale3-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "GoldilocksAndTheThreeBears_006_002",
        "TestID": "id_14_AM_MDN-AM",
        "Annotation": "Goldilocks skipped around a corner and saw... ,",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/GoldilocksAndTheThreeBears_006_002.wav",
            "AM": "systems/AM/synth/GoldilocksAndTheThreeBears_006_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_zero-Copy_synthesis",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_zero-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_zero-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_zero-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_tail3-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_tail3-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_VAE_z16_tail3-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_Copy_synthesis-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_Copy_synthesis-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_Copy_synthesis-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_AM_scale3-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_AM_scale3-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_15_AM_MDN-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    }
  ]
}
