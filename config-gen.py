import json
from glob import glob

"""
Generate a list of JSON config objects for beaqlejs
and stringify them real nice
"""
# Example ----
"""
[
    //
    {
      "Name": "",
      "TestID": "a0129",
      "Files": {
            "A": "audio/standardehmm_arctic_a0129.wav",
            "B": "audio/standardlab_arctic_a0129.wav",
      }
    },
    {
      "Name": "",
      "TestID": "a0188",
      "Files": {
            "A": "audio/standardehmm_arctic_a0188.wav",
            "B": "audio/standardlab_arctic_a0188.wav",
      }
    },
  ]
"""

# Constants
A_DIR = './audio/hfc/*'
B_DIR = './audio/world/*'

class Question():
    def __init__(self, name, testID, a, b):
        self.Name = name
        self.TestID = testID
        self.Files = { 'A': a, 'B': b }

    def stringify(self):
        selfobj = self.__dict__
        return json.dumps(selfobj)

def stringify_list(questionlist):
    dictlist = [question.__dict__ for question in questionlist]
    return json.dumps(dictlist, indent=4)


def main():
    alist = glob(A_DIR)
    # Very hacky -- assume both dirs are similarly named. Rely on alphabet to match them.
    alist.sort()
    blist = glob(B_DIR)
    blist.sort()
    audio_files = zip(alist, blist)
    questionlist = []
    for i, (a, b) in enumerate(audio_files):
        name = ''
        testID = 'a{0:03}'.format(i)
        question = Question(name, testID, a, b)
        questionlist.append(question)
    print(stringify_list(questionlist))

if __name__ == "__main__":
    main()
