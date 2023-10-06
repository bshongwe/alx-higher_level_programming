#include <stdio.h>
#include "lists.h"
#include <stdlib.h>

/**
 * listint_len - func prints elements number in linked list
 * @h: list
 * Return: number of nodes
 */
size_t listint_len(const listint_t *h)
{
	int num_nodes = 0;

	for (num_nodes = 0; h != NULL; num_nodes++)
	{
		h = h->next;
	}
	return (num_nodes);
}

/**
 * is_palindrome - Checks if a linked list is palindrome or not
 * @head: Linked list
 * Return: if is not palindrome (0), otherwise return 1
 */
int is_palindrome(listint_t **head)
{
	listint_t *aux = *head;
	int length = 0, *array = NULL, num_nodes = 0, j = 0;

	if (!head || !*head)
	{
		return (1);
	}
	length = listint_len(*head);
	array = malloc(sizeof(int) * length);
	if (!array)
	{
		return (-1);
	}
	while (num_nodes < length)
	{
		array[num_nodes] = aux->n;
		aux = aux->next;
		num_nodes++;
	}
	j = length - 1;
	for (num_nodes = 0; num_nodes < (length - 1) / 2; num_nodes++, j--)
	{
		if (array[num_nodes] != array[j])
		{
			free(array);
			return (0);
		}
	}
	free(array);
	return (1);
}
