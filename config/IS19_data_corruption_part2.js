// configure the test here
var TestConfig = {
  "TestName": "Listening test – part 2",
  "RateScalePng": "img/scale_real.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/s1653112/beaqlejs/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 20,
  "RequireMaxRating": true,
  "AudioRoot": "audio/IS19_corrputed_transcript/",
  "Testsets": [
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0233.wav",
            "Reference": "copysynth_ssrn500/LJ050-0233.wav",
            "g_50clean": "g_50clean/LJ050-0233.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0233.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0233.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0233.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0233.wav"
        },
        "Annotation": "Since the assassination, the Service has experimented with the use of agents borrowed for short periods from such agencies.",
        "Name": "",
        "TestID": "id1_21"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0123.wav",
            "Reference": "copysynth_ssrn500/LJ050-0123.wav",
            "g_50clean": "g_50clean/LJ050-0123.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0123.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0123.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0123.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0123.wav"
        },
        "Annotation": "and investigative capabilities of the agencies now operating in this field but will continue",
        "Name": "",
        "TestID": "id1_22"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0278.wav",
            "Reference": "copysynth_ssrn500/LJ050-0278.wav",
            "g_50clean": "g_50clean/LJ050-0278.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0278.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0278.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0278.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0278.wav"
        },
        "Annotation": "the recommendations we have here suggested would greatly advance the security of the office without any impairment of our fundamental liberties.",
        "Name": "",
        "TestID": "id1_23"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0093.wav",
            "Reference": "copysynth_ssrn500/LJ050-0093.wav",
            "g_50clean": "g_50clean/LJ050-0093.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0093.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0093.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0093.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0093.wav"
        },
        "Annotation": "because of Oswald's demonstrated hostility toward the Secretary of the Navy in his letter of January thirty, nineteen sixty-two. Quote,",
        "Name": "",
        "TestID": "id1_24"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0038.wav",
            "Reference": "copysynth_ssrn500/LJ050-0038.wav",
            "g_50clean": "g_50clean/LJ050-0038.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0038.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0038.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0038.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0038.wav"
        },
        "Annotation": "In attempting to identify those individuals who might prove a danger to the President,",
        "Name": "",
        "TestID": "id1_25"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0099.wav",
            "Reference": "copysynth_ssrn500/LJ050-0099.wav",
            "g_50clean": "g_50clean/LJ050-0099.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0099.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0099.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0099.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0099.wav"
        },
        "Annotation": "It is apparent that a good deal of further consideration and experimentation will be required before adequate criteria can be framed.",
        "Name": "",
        "TestID": "id1_26"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0231.wav",
            "Reference": "copysynth_ssrn500/LJ050-0231.wav",
            "g_50clean": "g_50clean/LJ050-0231.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0231.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0231.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0231.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0231.wav"
        },
        "Annotation": "Before the assassination the Secret Service infrequently requested other Federal law enforcement agencies to provide personnel",
        "Name": "",
        "TestID": "id1_27"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0221.wav",
            "Reference": "copysynth_ssrn500/LJ050-0221.wav",
            "g_50clean": "g_50clean/LJ050-0221.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0221.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0221.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0221.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0221.wav"
        },
        "Annotation": "The Secret Service has now presented its recommendations to the Bureau of the Budget. The plan proposed by the Service",
        "Name": "",
        "TestID": "id1_28"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0220.wav",
            "Reference": "copysynth_ssrn500/LJ050-0220.wav",
            "g_50clean": "g_50clean/LJ050-0220.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0220.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0220.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0220.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0220.wav"
        },
        "Annotation": "and requests for additional personnel were not made because of the studies then being conducted.",
        "Name": "",
        "TestID": "id1_29"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0108.wav",
            "Reference": "copysynth_ssrn500/LJ050-0108.wav",
            "g_50clean": "g_50clean/LJ050-0108.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0108.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0108.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0108.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0108.wav"
        },
        "Annotation": "The Secret Service's liaison with the agencies that supply information to it has been too casual.",
        "Name": "",
        "TestID": "id1_30"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0039.wav",
            "Reference": "copysynth_ssrn500/LJ050-0039.wav",
            "g_50clean": "g_50clean/LJ050-0039.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0039.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0039.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0039.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0039.wav"
        },
        "Annotation": "the Secret Service has largely been the passive recipient of threatening communications to the President",
        "Name": "",
        "TestID": "id1_31"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0240.wav",
            "Reference": "copysynth_ssrn500/LJ050-0240.wav",
            "g_50clean": "g_50clean/LJ050-0240.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0240.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0240.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0240.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0240.wav"
        },
        "Annotation": "the Service had the advantage of nine thousand, five hundred hours of work by other enforcement agencies.",
        "Name": "",
        "TestID": "id1_32"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0036.wav",
            "Reference": "copysynth_ssrn500/LJ050-0036.wav",
            "g_50clean": "g_50clean/LJ050-0036.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0036.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0036.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0036.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0036.wav"
        },
        "Annotation": "is not consistent with the standards which the responsibilities of the Secret Service require it to meet.",
        "Name": "",
        "TestID": "id1_33"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0278.wav",
            "Reference": "copysynth_ssrn500/LJ050-0278.wav",
            "g_50clean": "g_50clean/LJ050-0278.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0278.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0278.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0278.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0278.wav"
        },
        "Annotation": "the recommendations we have here suggested would greatly advance the security of the office without any impairment of our fundamental liberties.",
        "Name": "",
        "TestID": "id1_34"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0058.wav",
            "Reference": "copysynth_ssrn500/LJ050-0058.wav",
            "g_50clean": "g_50clean/LJ050-0058.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0058.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0058.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0058.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0058.wav"
        },
        "Annotation": "which was the possibility of an attempt against the person or safety of the President.",
        "Name": "",
        "TestID": "id1_35"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0006.wav",
            "Reference": "copysynth_ssrn500/LJ050-0006.wav",
            "g_50clean": "g_50clean/LJ050-0006.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0006.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0006.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0006.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0006.wav"
        },
        "Annotation": "and the dissimilarity of its protective functions to most activities of the Department of the Treasury",
        "Name": "",
        "TestID": "id1_36"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0156.wav",
            "Reference": "copysynth_ssrn500/LJ050-0156.wav",
            "g_50clean": "g_50clean/LJ050-0156.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0156.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0156.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0156.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0156.wav"
        },
        "Annotation": "this money would be used to compensate consultants, to lease standard equipment or to purchase specially designed pilot equipment.",
        "Name": "",
        "TestID": "id1_37"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0212.wav",
            "Reference": "copysynth_ssrn500/LJ050-0212.wav",
            "g_50clean": "g_50clean/LJ050-0212.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0212.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0212.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0212.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0212.wav"
        },
        "Annotation": "While these statistics relate to the activities of Secret Service agents stationed in field offices and not the White House detail,",
        "Name": "",
        "TestID": "id1_38"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0122.wav",
            "Reference": "copysynth_ssrn500/LJ050-0122.wav",
            "g_50clean": "g_50clean/LJ050-0122.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0122.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0122.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0122.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0122.wav"
        },
        "Annotation": "It should be made clear that the Secret Service will in no way seek to duplicate the intelligence",
        "Name": "",
        "TestID": "id1_39"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0026.wav",
            "Reference": "copysynth_ssrn500/LJ050-0026.wav",
            "g_50clean": "g_50clean/LJ050-0026.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0026.wav",
            "g_50clean_50asr34-8wer": "g_50clean_50asr34-8wer/LJ050-0026.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0026.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0026.wav"
        },
        "Annotation": "The Commission urges that the Service continue this effort to overhaul and define its procedures.",
        "Name": "",
        "TestID": "id1_40"
    }
    ]
}
