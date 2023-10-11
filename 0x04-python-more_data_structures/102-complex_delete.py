#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    new_dictionary = a_dictionary.copy()
    delete = []
    for k, v in a_dictionary.items():
        if v == value:
            delete.append(k)
    if delete != []:
        for key in delete:
            del new_dictionary[key]
    return new_dictionary
