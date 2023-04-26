import numpy as np

from sudoku import Sudoku

print('Enter a difficulty between 0.1 - 0.9:')
difficulty = input('> ')

puzzle = Sudoku(3).difficulty(float(difficulty))


board = puzzle.board
for idx_row, row in enumerate(board):
    for idx_item, item in enumerate(row):
        if item is None: 
            board[idx_row][idx_item] = 0


print(np.matrix(board))

def possible(row, column, number):
    global board # Get the valuable that is outside the function and use it inside the function
    # Is the number appearing in the given row?
    for i in range(0,9):
        if board[row][i] == number:
            return False
    
    # Is the number appearing in the given column?
    for i in range(0,9):
        if board[i][column] == number:
            return False
        
    # Is the number appearing in the given square?
    x = (column//3)*3 # 0,3,6
    y = (row//3)*3 # 0,3,6

    for i in range(0,3): # Every square has 3 rows
        for j in range(0,3): #Every square has 3 columns
            if board[y+i][x+j] == number:
                return False
    return True            

def solve():
    global board
    for row in range(0,9):
        for column in range(0,9):
            if board[row][column] == 0:
                for number in range(1,10):
                    if possible(row, column, number):
                        board[row][column] = number
                        solve()
                        board[row][column] = 0
                return
                        
    
    print(np.matrix(board))
    input("Hit 'space' to check there are more solutions.")

solve()

