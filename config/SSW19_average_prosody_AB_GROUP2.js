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
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "audio/SSW19_average_prosody/",
  "Testsets": [
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_zero-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_tail3-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_tail3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_VAE_z16_tail3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Flat_deg2-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Flat_deg2-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Flat_deg2-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Flat_deg2-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Copy_synthesis-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Copy_synthesis-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_Copy_synthesis-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_AM_scale3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_AM_scale3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_002",
        "TestID": "id_0_AM_MDN-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-Flat_deg2",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-AM_scale3",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-AM_MDN",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_zero-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_tail3-AM_scale3",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_tail3-AM_MDN",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_VAE_z16_tail3-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Flat_deg2-Copy_synthesis",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Flat_deg2-AM_scale3",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Flat_deg2-AM_MDN",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Flat_deg2-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Copy_synthesis-AM_scale3",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Copy_synthesis-AM_MDN",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_Copy_synthesis-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_AM_scale3-AM_MDN",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_AM_scale3-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_014_004",
        "TestID": "id_1_AM_MDN-AM",
        "Annotation": "Everyone was very angry, but Sam just laughed.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_014_004.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_014_004.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-Flat_deg2",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-Copy_synthesis",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-AM_scale3",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-AM_MDN",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_zero-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_tail3-Flat_deg2",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_tail3-AM_scale3",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_tail3-AM_MDN",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_VAE_z16_tail3-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Flat_deg2-Copy_synthesis",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Flat_deg2-AM_scale3",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Flat_deg2-AM_MDN",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Flat_deg2-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Copy_synthesis-AM_scale3",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Copy_synthesis-AM_MDN",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_Copy_synthesis-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_AM_scale3-AM_MDN",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_AM_scale3-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_000",
        "TestID": "id_2_AM_MDN-AM",
        "Annotation": "A week later, Sam was bored again.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_zero-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_tail3-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_tail3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_VAE_z16_tail3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Flat_deg2-Copy_synthesis",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Flat_deg2-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Flat_deg2-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Flat_deg2-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Copy_synthesis-AM_scale3",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Copy_synthesis-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_Copy_synthesis-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_AM_scale3-AM_MDN",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_AM_scale3-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_001",
        "TestID": "id_3_AM_MDN-AM",
        "Annotation": "He ran down the hill to the village.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_015_001.wav"
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
        "TestID": "id_4_VAE_z16_zero-Flat_deg2",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_015_007.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav"
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
        "TestID": "id_4_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_015_007.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav"
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
        "TestID": "id_4_Flat_deg2-Copy_synthesis",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Flat_deg2-AM_scale3",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Flat_deg2-AM_MDN",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_015_007.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_015_007",
        "TestID": "id_4_Flat_deg2-AM",
        "Annotation": "Just a few ran up the hill.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_015_007.wav",
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
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_zero-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_tail3-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_tail3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_VAE_z16_tail3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Flat_deg2-Copy_synthesis",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Flat_deg2-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Flat_deg2-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Flat_deg2-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Copy_synthesis-AM_scale3",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Copy_synthesis-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_Copy_synthesis-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_AM_scale3-AM_MDN",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_AM_scale3-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_016_003",
        "TestID": "id_5_AM_MDN-AM",
        "Annotation": "The sheep were quietly eating their grass.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_016_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_016_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-Flat_deg2",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-AM_scale3",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-AM_MDN",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_zero-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_tail3-AM_scale3",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_tail3-AM_MDN",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_VAE_z16_tail3-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Flat_deg2-Copy_synthesis",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Flat_deg2-AM_scale3",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Flat_deg2-AM_MDN",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Flat_deg2-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Copy_synthesis-AM_scale3",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Copy_synthesis-AM_MDN",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_Copy_synthesis-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_AM_scale3-AM_MDN",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_AM_scale3-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_017_002",
        "TestID": "id_6_AM_MDN-AM",
        "Annotation": "He ran down to the village as fast as he could.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_017_002.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_017_002.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-Flat_deg2",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-AM_scale3",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-AM_MDN",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_zero-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_tail3-AM_scale3",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_tail3-AM_MDN",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_VAE_z16_tail3-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Flat_deg2-Copy_synthesis",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Flat_deg2-AM_scale3",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Flat_deg2-AM_MDN",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Flat_deg2-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Copy_synthesis-AM_scale3",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Copy_synthesis-AM_MDN",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_Copy_synthesis-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_AM_scale3-AM_MDN",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_AM_scale3-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_003",
        "TestID": "id_7_AM_MDN-AM",
        "Annotation": "Sam begged them to come with him.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_003.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_003.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-Flat_deg2",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-Copy_synthesis",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-AM_scale3",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-AM_MDN",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_zero-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_tail3-Flat_deg2",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_tail3-AM_scale3",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_tail3-AM_MDN",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_VAE_z16_tail3-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Flat_deg2-Copy_synthesis",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Flat_deg2-AM_scale3",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Flat_deg2-AM_MDN",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Flat_deg2-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Copy_synthesis-AM_scale3",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Copy_synthesis-AM_MDN",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_Copy_synthesis-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_AM_scale3-AM_MDN",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_AM_scale3-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_018_005",
        "TestID": "id_8_AM_MDN-AM",
        "Annotation": "This time, they just laughed at him.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_018_005.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_018_005.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-Flat_deg2",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-AM_scale3",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-AM_MDN",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_zero-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_tail3-AM_scale3",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_tail3-AM_MDN",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_VAE_z16_tail3-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Flat_deg2-Copy_synthesis",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Flat_deg2-AM_scale3",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Flat_deg2-AM_MDN",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Flat_deg2-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Copy_synthesis-AM_scale3",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Copy_synthesis-AM_MDN",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_Copy_synthesis-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_AM_scale3-AM_MDN",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_AM_scale3-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_019_001",
        "TestID": "id_9_AM_MDN-AM",
        "Annotation": "The wolf had killed some of the sheep.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_019_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_019_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-Flat_deg2",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-AM_scale3",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-AM_MDN",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_zero-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_tail3-AM_scale3",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_tail3-AM_MDN",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_VAE_z16_tail3-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Flat_deg2-Copy_synthesis",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Flat_deg2-AM_scale3",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Flat_deg2-AM_MDN",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Flat_deg2-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Copy_synthesis-AM_scale3",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Copy_synthesis-AM_MDN",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_Copy_synthesis-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_AM_scale3-AM_MDN",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_AM_scale3-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_000",
        "TestID": "id_10_AM_MDN-AM",
        "Annotation": "Sam stayed in the meadow until it was dark.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-Flat_deg2",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-AM_scale3",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-AM_MDN",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_zero-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_tail3-AM_scale3",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_tail3-AM_MDN",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_VAE_z16_tail3-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Flat_deg2-Copy_synthesis",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Flat_deg2-AM_scale3",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Flat_deg2-AM_MDN",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Flat_deg2-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Copy_synthesis-AM_scale3",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Copy_synthesis-AM_MDN",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_Copy_synthesis-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_AM_scale3-AM_MDN",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_AM_scale3-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_020_001",
        "TestID": "id_11_AM_MDN-AM",
        "Annotation": "Finally, the villagers came to find him.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_020_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_020_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-AM_scale3",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-AM_MDN",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_zero-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_VAE_z16_tail3-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Flat_deg2-Copy_synthesis",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Flat_deg2-AM_scale3",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Flat_deg2-AM_MDN",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Flat_deg2-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Copy_synthesis-AM_scale3",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Copy_synthesis-AM_MDN",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_Copy_synthesis-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_AM_scale3-AM_MDN",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_AM_scale3-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_000",
        "TestID": "id_12_AM_MDN-AM",
        "Annotation": "\"Why didn't you believe me?\" he asked.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_000.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_000.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_zero-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_VAE_z16_tail3-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Flat_deg2-Copy_synthesis",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Flat_deg2-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Flat_deg2-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Flat_deg2-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Copy_synthesis-AM_scale3",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Copy_synthesis-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_Copy_synthesis-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_AM_scale3-AM_MDN",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_AM_scale3-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_021_001",
        "TestID": "id_13_AM_MDN-AM",
        "Annotation": "\"You always told lies before,\" they said.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_021_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_021_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-Flat_deg2",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-AM_scale3",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-AM_MDN",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_zero-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_tail3-AM_scale3",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_tail3-AM_MDN",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_VAE_z16_tail3-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Flat_deg2-Copy_synthesis",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Flat_deg2-AM_scale3",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Flat_deg2-AM_MDN",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Flat_deg2-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Copy_synthesis-AM_scale3",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Copy_synthesis-AM_MDN",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_Copy_synthesis-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_AM_scale3-AM_MDN",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_AM_scale3-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheBoyWhoCriedWolf_022_001",
        "TestID": "id_14_AM_MDN-AM",
        "Annotation": "The Boy who cried Wolf is one of Aesop's Fables.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheBoyWhoCriedWolf_022_001.wav",
            "AM": "systems/AM/synth/TheBoyWhoCriedWolf_022_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-Flat_deg2",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-Copy_synthesis",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_zero-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_tail3-Flat_deg2",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_tail3-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_tail3-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_VAE_z16_tail3-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Flat_deg2-Copy_synthesis",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Flat_deg2-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Flat_deg2-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Flat_deg2-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Copy_synthesis-AM_scale3",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Copy_synthesis-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_Copy_synthesis-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_AM_scale3-AM_MDN",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_AM_scale3-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_002_000",
        "TestID": "id_15_AM_MDN-AM",
        "Annotation": "One morning, the farmer went to his field.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_002_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_002_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-Flat_deg2",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_zero-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_tail3-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_tail3-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_VAE_z16_tail3-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Flat_deg2-Copy_synthesis",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Flat_deg2-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Flat_deg2-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Flat_deg2-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Copy_synthesis-AM_scale3",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Copy_synthesis-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_Copy_synthesis-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_AM_scale3-AM_MDN",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_AM_scale3-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_000",
        "TestID": "id_16_AM_MDN-AM",
        "Annotation": "He saw one turnip with very big green leaves.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-AM_scale3",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-AM_MDN",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_zero-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_VAE_z16_tail3-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Flat_deg2-Copy_synthesis",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Flat_deg2-AM_scale3",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Flat_deg2-AM_MDN",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Flat_deg2-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Copy_synthesis-AM_scale3",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Copy_synthesis-AM_MDN",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_Copy_synthesis-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_AM_scale3-AM_MDN",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_AM_scale3-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_003_002",
        "TestID": "id_17_AM_MDN-AM",
        "Annotation": "\"I'll pick this one,\" thought the farmer.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_003_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_003_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-Flat_deg2",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_zero-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_VAE_z16_tail3-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Flat_deg2-Copy_synthesis",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Flat_deg2-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Flat_deg2-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Flat_deg2-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_Copy_synthesis-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_AM_scale3-AM_MDN",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_AM_scale3-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_004_000",
        "TestID": "id_18_AM_MDN-AM",
        "Annotation": "The farmer tugged and tugged at the turnip.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_004_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_004_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-Flat_deg2",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_zero-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_VAE_z16_tail3-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Flat_deg2-Copy_synthesis",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Flat_deg2-AM_scale3",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Flat_deg2-AM_MDN",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Flat_deg2-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_Copy_synthesis-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_AM_scale3-AM_MDN",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_AM_scale3-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_005_000",
        "TestID": "id_19_AM_MDN-AM",
        "Annotation": "The farmer's wife saw the farmer puffing and panting.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_005_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_005_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-Flat_deg2",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-Copy_synthesis",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_zero-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_tail3-Flat_deg2",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_tail3-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_tail3-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_VAE_z16_tail3-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Flat_deg2-Copy_synthesis",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Flat_deg2-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Flat_deg2-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Flat_deg2-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Copy_synthesis-AM_scale3",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Copy_synthesis-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_Copy_synthesis-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_AM_scale3-AM_MDN",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_AM_scale3-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_007_000",
        "TestID": "id_20_AM_MDN-AM",
        "Annotation": "Jack saw his parents puffing and panting.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_007_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_007_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-Flat_deg2",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-Copy_synthesis",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-AM_scale3",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-AM_MDN",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_zero-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_tail3-Flat_deg2",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_tail3-AM_scale3",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_tail3-AM_MDN",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_VAE_z16_tail3-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Flat_deg2-Copy_synthesis",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Flat_deg2-AM_scale3",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Flat_deg2-AM_MDN",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Flat_deg2-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Copy_synthesis-AM_scale3",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Copy_synthesis-AM_MDN",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_Copy_synthesis-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_AM_scale3-AM_MDN",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_AM_scale3-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_011_000",
        "TestID": "id_21_AM_MDN-AM",
        "Annotation": "They all tugged and tugged as hard as they could.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_011_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_011_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-Flat_deg2",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_zero-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_VAE_z16_tail3-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Flat_deg2-Copy_synthesis",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Flat_deg2-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Flat_deg2-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Flat_deg2-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_Copy_synthesis-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_AM_scale3-AM_MDN",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_AM_scale3-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_013_000",
        "TestID": "id_22_AM_MDN-AM",
        "Annotation": "The farmer let go of the turnip leaves...",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_013_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_013_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-Flat_deg2",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_zero-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_VAE_z16_tail3-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Flat_deg2-Copy_synthesis",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Flat_deg2-AM_scale3",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Flat_deg2-AM_MDN",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Flat_deg2-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_Copy_synthesis-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_AM_scale3-AM_MDN",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_AM_scale3-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_014_000",
        "TestID": "id_23_AM_MDN-AM",
        "Annotation": "The farmer brushed the dirt off his clothes.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_014_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_014_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-Flat_deg2",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-Copy_synthesis",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-AM_scale3",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-AM_MDN",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_zero-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_tail3-Flat_deg2",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_tail3-AM_scale3",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_tail3-AM_MDN",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_VAE_z16_tail3-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Flat_deg2-Copy_synthesis",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Flat_deg2-AM_scale3",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Flat_deg2-AM_MDN",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Flat_deg2-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Copy_synthesis-AM_scale3",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Copy_synthesis-AM_MDN",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_Copy_synthesis-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_AM_scale3-AM_MDN",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_AM_scale3-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_015_000",
        "TestID": "id_24_AM_MDN-AM",
        "Annotation": "\"One, two, three, pull!\" said the farmer.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_015_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_015_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-Flat_deg2",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-Copy_synthesis",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_zero-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_tail3-Flat_deg2",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_tail3-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_tail3-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_VAE_z16_tail3-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Flat_deg2-Copy_synthesis",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Flat_deg2-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Flat_deg2-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Flat_deg2-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Copy_synthesis-AM_scale3",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Copy_synthesis-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_Copy_synthesis-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_AM_scale3-AM_MDN",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_AM_scale3-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_002",
        "TestID": "id_25_AM_MDN-AM",
        "Annotation": "The farmer grabbed the turnip and everybody tugged.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-Flat_deg2",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-Copy_synthesis",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_zero-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_tail3-Flat_deg2",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_tail3-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_tail3-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_VAE_z16_tail3-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Flat_deg2-Copy_synthesis",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Flat_deg2-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Flat_deg2-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Flat_deg2-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Copy_synthesis-AM_scale3",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Copy_synthesis-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_Copy_synthesis-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_AM_scale3-AM_MDN",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_AM_scale3-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_016_003",
        "TestID": "id_26_AM_MDN-AM",
        "Annotation": "They tugged and tugged and tugged some more.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_016_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_016_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-Flat_deg2",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-Copy_synthesis",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_zero-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_tail3-Flat_deg2",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_tail3-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_tail3-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_VAE_z16_tail3-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Flat_deg2-Copy_synthesis",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Flat_deg2-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Flat_deg2-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Flat_deg2-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Copy_synthesis-AM_scale3",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Copy_synthesis-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_Copy_synthesis-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_AM_scale3-AM_MDN",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_AM_scale3-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_019_000",
        "TestID": "id_27_AM_MDN-AM",
        "Annotation": "At last, the turnip popped out of the ground.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_019_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_019_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-Flat_deg2",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-Copy_synthesis",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-AM_scale3",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-AM_MDN",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_zero-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_tail3-Flat_deg2",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_tail3-AM_scale3",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_tail3-AM_MDN",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_VAE_z16_tail3-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Flat_deg2-Copy_synthesis",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Flat_deg2-AM_scale3",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Flat_deg2-AM_MDN",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Flat_deg2-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Copy_synthesis-AM_scale3",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Copy_synthesis-AM_MDN",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_Copy_synthesis-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_AM_scale3-AM_MDN",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_AM_scale3-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_002",
        "TestID": "id_28_AM_MDN-AM",
        "Annotation": "That night, he fell asleep with a smile on his face.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_002.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_002.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-Flat_deg2",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-Copy_synthesis",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-AM_scale3",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-AM_MDN",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_zero-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_tail3-Flat_deg2",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_tail3-AM_scale3",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_tail3-AM_MDN",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_VAE_z16_tail3-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Flat_deg2-Copy_synthesis",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Flat_deg2-AM_scale3",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Flat_deg2-AM_MDN",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Flat_deg2-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Copy_synthesis-AM_scale3",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Copy_synthesis-AM_MDN",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_Copy_synthesis-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_AM_scale3-AM_MDN",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_AM_scale3-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_020_003",
        "TestID": "id_29_AM_MDN-AM",
        "Annotation": "In the morning, Jack helped his mother chop up the turnip.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_020_003.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_020_003.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-Flat_deg2",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-Copy_synthesis",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_zero-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_tail3-Flat_deg2",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_tail3-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_tail3-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_VAE_z16_tail3-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Flat_deg2-Copy_synthesis",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Flat_deg2-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Flat_deg2-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Flat_deg2-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Copy_synthesis-AM_scale3",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Copy_synthesis-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_Copy_synthesis-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_AM_scale3-AM_MDN",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_AM_scale3-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_021_000",
        "TestID": "id_30_AM_MDN-AM",
        "Annotation": "They ate turnip soup for lunch... ...turnip soup for supper...",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_021_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_021_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-Flat_deg2",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-Copy_synthesis",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-AM_scale3",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-AM_MDN",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_zero-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_tail3-Flat_deg2",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_tail3-AM_scale3",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_tail3-AM_MDN",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_VAE_z16_tail3-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Flat_deg2-Copy_synthesis",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Flat_deg2-AM_scale3",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Flat_deg2-AM_MDN",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Flat_deg2-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Copy_synthesis-AM_scale3",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Copy_synthesis-AM_MDN",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_Copy_synthesis-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_AM_scale3-AM_MDN",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_AM_scale3-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_022_000",
        "TestID": "id_31_AM_MDN-AM",
        "Annotation": "...and turnip soup for breakfast... ...every day for a month.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_022_000.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_022_000.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-Flat_deg2",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-Copy_synthesis",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_zero-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_tail3-Flat_deg2",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_tail3-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_tail3-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_VAE_z16_tail3-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Flat_deg2-Copy_synthesis",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Flat_deg2-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Flat_deg2-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Flat_deg2-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Copy_synthesis-AM_scale3",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Copy_synthesis-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_Copy_synthesis-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_AM_scale3-AM_MDN",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_AM_scale3-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_001",
        "TestID": "id_32_AM_MDN-AM",
        "Annotation": "This story was first written by Alexei Tolstoy.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_001.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_001.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-VAE_z16_tail3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-Flat_deg2",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-Copy_synthesis",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_zero-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_zero": "systems/VAE_z16_zero/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_tail3-Flat_deg2",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_tail3-Copy_synthesis",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_tail3-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_tail3-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_VAE_z16_tail3-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "VAE_z16_tail3": "systems/VAE_z16_tail3/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Flat_deg2-Copy_synthesis",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav",
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Flat_deg2-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Flat_deg2-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Flat_deg2-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Flat_deg2": "systems/Flat_deg2/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Copy_synthesis-AM_scale3",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Copy_synthesis-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_Copy_synthesis-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "Copy_synthesis": "systems/Copy_synthesis/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_AM_scale3-AM_MDN",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav",
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_AM_scale3-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_scale3": "systems/AM_scale3/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    },
    {
        "Name": "TheEnormousTurnip_023_004",
        "TestID": "id_33_AM_MDN-AM",
        "Annotation": "He wrote long books for grown-ups and shorter books for children.",
        "Files": {
            "AM_MDN": "systems/AM_MDN/synth/TheEnormousTurnip_023_004.wav",
            "AM": "systems/AM/synth/TheEnormousTurnip_023_004.wav"
        }
    }
  ]
}
