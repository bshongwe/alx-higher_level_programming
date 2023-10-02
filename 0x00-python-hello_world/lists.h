#ifndef LISTS_H
#define LISTS_H

/* Std Lib */
#include <stdlib.h>

/* Struct */

/**
 * struct listint_s - struct for singly linked list
 * @n: integer
 * @next: points to next node
 *
 * Description: node structure for singly liked list
 */
typedef struct listint_s
{
	int n;
	struct listint_s *next;
} listint_t;

/* Prototypes */
int check_cycle(listint_t *list);

#endif /* end of LIST_H file */
