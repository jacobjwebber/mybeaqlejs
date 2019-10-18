import json
from glob import glob

RESULTS_DIR = 'web_service/results/*.txt'

class Response():
    def __init__(self, num_As, num_Bs, num_None):
        self.num_As = num_As
        self.num_Bs = num_Bs
        self.num_None = num_None
        self.centA = (num_As / (num_As + num_Bs) ) * 100.
        self.centB = 100 - self.centA
        self.centNone = (num_None / (num_As+num_Bs+num_None) ) * 100.

    def __str__(self):
            return f"Person selected {self.centA}% A, {self.centB}% B, and didn't select either {self.centNone}%"

def handle_response(response_dicts):
    num_As = 0
    num_Bs = 0
    num_None = 0
    for response_dict in response_dicts:
        try:
            if response_dict['PresentationOrder'] == 'A=B, B=A':
                if response_dict['Preference'] == 'A':
                    num_Bs += 1
                elif response_dict['Preference'] == 'B':
                    num_As += 1
                else:
                    print('ERROR')
                    exit()
            elif response_dict['PresentationOrder'] == 'A=A, B=B':
                if response_dict['Preference'] == 'A':
                    num_As += 1
                elif response_dict['Preference'] == 'B':
                    num_Bs += 1
                else:
                    print('ERROR')
                    exit()
            else:
                print('lERROR')
                print(response_dict['PresentationOrder'])
                exit()
        except KeyError as error:
            # Means no preference selected 
            if error.args[0] == 'Preference':
                num_None += 1

    return Response(num_As, num_Bs, num_None)


def handle_response_list(ls):
    totA = 0
    totB = 0
    totNone = 0
    num = len(ls)
    for res in ls:
        totA += res.num_As
        totB += res.num_Bs
        totNone += res.num_None

    centA = (totA / (totA + totB)) * 100.
    centB = (totB / (totA + totB)) * 100.
    centNone = (totNone / (totA + totB + totNone)) * 100.
    print(
        f"{num} listeners selected {centA}% A, {centB}% B, and didn't select either {centNone}%"
        )
    print(
        f'{totA+totB} valid responses, {totNone} invalid'
        )

def main():
    results = glob(RESULTS_DIR)
    responses = []
    for result in results:
        with open(result, 'r') as r_f:
            parsed_result = json.load(r_f)
        response = handle_response(parsed_result)
        responses.append(response)
        print(response)

    handle_response_list(responses)

if __name__ == '__main__':
    main()
