// configure the test here
var TestConfig = {
  "TestName": "Listening test – part 1",
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
            "g_100clean": "g_100clean/LJ050-0028.wav",
            "Reference": "copysynth_ssrn500/LJ050-0028.wav",
            "g_50clean": "g_50clean/LJ050-0028.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0028.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0028.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0028.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0028.wav"
        },
        "Annotation": "no sizable organization can achieve efficiency without the careful analysis and demarcation of responsibility",
        "Name": "",
        "TestID": "id1_1"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0235.wav",
            "Reference": "copysynth_ssrn500/LJ050-0235.wav",
            "g_50clean": "g_50clean/LJ050-0235.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0235.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0235.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0235.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0235.wav"
        },
        "Annotation": "It has also used other Federal law enforcement agents during Presidential visits to cities in which such agents are stationed.",
        "Name": "",
        "TestID": "id1_2"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0217.wav",
            "Reference": "copysynth_ssrn500/LJ050-0217.wav",
            "g_50clean": "g_50clean/LJ050-0217.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0217.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0217.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0217.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0217.wav"
        },
        "Annotation": "the Secret Service sought funds for twenty-five new positions, primarily in field offices. This increase has been approved by the Congress.",
        "Name": "",
        "TestID": "id1_3"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0072.wav",
            "Reference": "copysynth_ssrn500/LJ050-0072.wav",
            "g_50clean": "g_50clean/LJ050-0072.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0072.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0072.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0072.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0072.wav"
        },
        "Annotation": "that referrals to the Secret Service under the new criteria might, if not properly handled,",
        "Name": "",
        "TestID": "id1_4"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0128.wav",
            "Reference": "copysynth_ssrn500/LJ050-0128.wav",
            "g_50clean": "g_50clean/LJ050-0128.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0128.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0128.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0128.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0128.wav"
        },
        "Annotation": "Much useful information will come to the attention of local law enforcement agencies in the regular course of their activities,",
        "Name": "",
        "TestID": "id1_5"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0121.wav",
            "Reference": "copysynth_ssrn500/LJ050-0121.wav",
            "g_50clean": "g_50clean/LJ050-0121.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0121.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0121.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0121.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0121.wav"
        },
        "Annotation": "Detailed formal agreements embodying these arrangements should be worked out between the Secret Service and both of these agencies.",
        "Name": "",
        "TestID": "id1_6"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0171.wav",
            "Reference": "copysynth_ssrn500/LJ050-0171.wav",
            "g_50clean": "g_50clean/LJ050-0171.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0171.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0171.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0171.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0171.wav"
        },
        "Annotation": "but it seems to warrant further study before each agency becomes irrevocably committed to separate action.",
        "Name": "",
        "TestID": "id1_7"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0211.wav",
            "Reference": "copysynth_ssrn500/LJ050-0211.wav",
            "g_50clean": "g_50clean/LJ050-0211.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0211.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0211.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0211.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0211.wav"
        },
        "Annotation": "Chief Rowley testified that the present workload of each Secret Service agent averages one hundred ten point one cases.",
        "Name": "",
        "TestID": "id1_8"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0020.wav",
            "Reference": "copysynth_ssrn500/LJ050-0020.wav",
            "g_50clean": "g_50clean/LJ050-0020.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0020.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0020.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0020.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0020.wav"
        },
        "Annotation": "in which the Commission believes that the Secret Service has operated with insufficient planning or control.",
        "Name": "",
        "TestID": "id1_9"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0009.wav",
            "Reference": "copysynth_ssrn500/LJ050-0009.wav",
            "g_50clean": "g_50clean/LJ050-0009.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0009.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0009.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0009.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0009.wav"
        },
        "Annotation": "disclosed by the Commission's investigation. Other measures should be taken as well to improve the overall operation of the Secret Service.",
        "Name": "",
        "TestID": "id1_10"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0218.wav",
            "Reference": "copysynth_ssrn500/LJ050-0218.wav",
            "g_50clean": "g_50clean/LJ050-0218.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0218.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0218.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0218.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0218.wav"
        },
        "Annotation": "Chief Rowley explained that this would not provide enough additional manpower to take all the measures which he considers required.",
        "Name": "",
        "TestID": "id1_11"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0110.wav",
            "Reference": "copysynth_ssrn500/LJ050-0110.wav",
            "g_50clean": "g_50clean/LJ050-0110.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0110.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0110.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0110.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0110.wav"
        },
        "Annotation": "and each agency given clear understanding of the assistance which the Secret Service expects.",
        "Name": "",
        "TestID": "id1_12"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0194.wav",
            "Reference": "copysynth_ssrn500/LJ050-0194.wav",
            "g_50clean": "g_50clean/LJ050-0194.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0194.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0194.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0194.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0194.wav"
        },
        "Annotation": "and should not be relied upon to the detriment of the imaginative application of judgment in special cases.",
        "Name": "",
        "TestID": "id1_13"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0003.wav",
            "Reference": "copysynth_ssrn500/LJ050-0003.wav",
            "g_50clean": "g_50clean/LJ050-0003.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0003.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0003.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0003.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0003.wav"
        },
        "Annotation": "By The President's Commission on the Assassination of President Kennedy. Chapter eight. The Protection of the President. Part five.",
        "Name": "",
        "TestID": "id1_14"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0258.wav",
            "Reference": "copysynth_ssrn500/LJ050-0258.wav",
            "g_50clean": "g_50clean/LJ050-0258.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0258.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0258.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0258.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0258.wav"
        },
        "Annotation": "Much of the Secret Service work requires the development and use of highly sophisticated equipment,",
        "Name": "",
        "TestID": "id1_15"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0172.wav",
            "Reference": "copysynth_ssrn500/LJ050-0172.wav",
            "g_50clean": "g_50clean/LJ050-0172.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0172.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0172.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0172.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0172.wav"
        },
        "Annotation": "The Commission, therefore, recommends that the President consider ordering an inquiry into the possibility",
        "Name": "",
        "TestID": "id1_16"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0057.wav",
            "Reference": "copysynth_ssrn500/LJ050-0057.wav",
            "g_50clean": "g_50clean/LJ050-0057.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0057.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0057.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0057.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0057.wav"
        },
        "Annotation": "specifying criteria for information to be furnished to the Secret Service in addition to that covered by the former standard,",
        "Name": "",
        "TestID": "id1_17"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0224.wav",
            "Reference": "copysynth_ssrn500/LJ050-0224.wav",
            "g_50clean": "g_50clean/LJ050-0224.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0224.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0224.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0224.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0224.wav"
        },
        "Annotation": "one hundred forty-five are proposed for the field offices to handle the increased volume of security investigations",
        "Name": "",
        "TestID": "id1_18"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0260.wav",
            "Reference": "copysynth_ssrn500/LJ050-0260.wav",
            "g_50clean": "g_50clean/LJ050-0260.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0260.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0260.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0260.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0260.wav"
        },
        "Annotation": "the Secret Service has been receiving full cooperation in scientific research and technological development",
        "Name": "",
        "TestID": "id1_19"
    },
    {
        "Files": {
            "g_100clean": "g_100clean/LJ050-0008.wav",
            "Reference": "copysynth_ssrn500/LJ050-0008.wav",
            "g_50clean": "g_50clean/LJ050-0008.wav",
            "g_50clean_50add5words": "g_50clean_50add5words/LJ050-0008.wav",
            "g_50clean_50asr34.8wer": "g_50clean_50asr34.8wer/LJ050-0008.wav",
            "g_50clean_50del5words": "g_50clean_50del5words/LJ050-0008.wav",
            "g_50clean_50sub5words": "g_50clean_50sub5words/LJ050-0008.wav"
        },
        "Annotation": "The Commission believes that the recommended Cabinet-level committee will help to correct many of the major deficiencies of supervision",
        "Name": "",
        "TestID": "id1_20"
    }
    ]
}
