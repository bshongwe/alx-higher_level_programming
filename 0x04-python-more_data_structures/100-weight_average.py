#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return (0)
    weight_score = sum(box[0] * box[1] for box in my_list)
    weight = sum(q[1] for q in my_list)
    return (weight_score / weight)
