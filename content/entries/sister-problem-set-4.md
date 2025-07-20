## Упражнения для сестры, часть 4

Do not use a calculator for any of these problems. Don't Google them, either. <br>
    
Do your best to solve them, but if you get stuck and can't find an answer to all parts of a problem, don't worry. We can talk about it together, and you can always come back and try to solve it again later.

<hr>

**Problem 1.** This part is less of a "problem" and more of a small project. Think hard on this part and take a lot of care with your attempt, but do not worry if it doesn't feel "finished". I will ask you to come back and revisit this several times.

The set of integers $\\{\cdots,-1,0,1,2,3,\cdots\\}$ is sometimes written $\mathbb Z$. (This Z comes from the German word "Zahlen".)

Please make a list of things you (think you) know about the integers and their operations $+$ (addition), $\ast$ (multiplication) and $-$ (minus). And I mean the most *basic* facts about the integers. If you were going to try to describe the integers to an alien who had never used our number system before, what definitions or rules would you use to describe the integers as concisely as possible?

You should make a big list of just about all the facts you can think of that you believe to be true about the integers. But then, you should try to pick out the facts that are as "essential" as possible. Try to make a smaller list of facts that are as simple and concise as possible, while still describing completely how arithmetic with integers works (as if to an alien who is unfamiliar with them). Try to make them *irredundant* as well. That  is, if one fact can be deduced from some of the other facts that are even simpler, then you should remove it from your short list.

I realize this problem is a bit subjective. So if you have any questions for me, just ask!

**Edit.** You have already started this part of the problem. You should return to your list and write it up neatly and concisely, and then go through and see if there's anything you can eliminate, or anything you think you need to add. Take your time.

Also, read each of the following simple statements about the integers. Decide if you think each one is true or false. Then try to prove or disprove it, using the basic assumptions about $\mathbb Z$ that you have on your list. Is your list "strong enough" to prove all the things you believe to be true, and disprove all the things you believe to be false?

- $\forall x ~ 0\cdot x = 0$
- $\exists x ~ x = x + 1$
- $\forall x ~ (x+1)^2 = x^2 + 2\cdot x + 1$
- $\forall x ~ \forall y ~ x \cdot y = 0 \implies (x = 0)\lor (y = 0)$
- $\forall x ~ x - x\cdot x = 0 \implies (x = 0)\lor (x = 1)$
- $\exists x ~ 2\cdot x = 1$
- $\forall x ~ (\exists y ~ x = 2\cdot y) \lor (\exists y ~ x = 2\cdot y + 1)$ 

<hr>

**Problem 2.** Can you find a number that is both $\equiv 2\bmod 7$ and $\equiv 3\bmod 29$? What is the smallest such number? How many such numbers are there?

Now try to find solutions to these "simultaneous congruences" as well:

- $x\equiv 1\bmod 7$ and $x\equiv 2\bmod 29$
- $x\equiv 1\bmod 7$ and $x\equiv 2\bmod 29$
- $x\equiv 3\bmod 7$ and $x\equiv 4\bmod 29$
- $x\equiv 4\bmod 7$ and $x\equiv 5\bmod 29$
- $x\equiv 4\bmod 7$ and $x\equiv 6\bmod 29$
- $x\equiv 8\bmod 7$ (that is, $\equiv 1\bmod 7$) and $x\equiv 12\bmod 29$
- $x\equiv -2\bmod 7$ (that is, $\equiv 5\bmod 7$) and $x\equiv -3\bmod 29$ (that is, $\equiv 26\bmod 7$)
- $x\equiv 1\bmod 7$ and $x\equiv 0\bmod 29$
- $x\equiv 0\bmod 7$ and $x\equiv 1\bmod 29$
- $x\equiv 6\bmod 7$ and $x\equiv 3\bmod 29$
- $x\equiv 3\bmod 7$ and $x\equiv 13\bmod 29$

This might seem like a tedious exercise, but think hard about how you can make it easier on yourself to find these solutions. Once you've found a solution to one of these simultaneous congruences, can you use it to help you find solutions for the others?

<hr>

**Problem 3.** You've learned a bit about the Church numerals in Lambda calculus. You should also be familiar with the definitions of `TRUE = λx.λy.x` and `FALSE = λx.λy.y`.

Try to build lambda terms that solve the following problems. You might have already seen solutions to these before, but if you have, don't look back at your notes. Try to rebuild them for yourself.

- Make a lambda function `add` that adds two Church numerals.
- Make a lambda function `mult` that multiplies two Church numerals.
- Make a lambda function `pow` that raises one Church numeral to the power of another. ($0^0$ is not really defined, so `pow(0,0)` can return whatever you want.)
- Make a lambda function `isZero` that checks if a Church numeral is zero, returning `TRUE` or `FALSE`.
- Make a lambda function `isEven` that checks if a Church numeral is odd, returning `TRUE` or `FALSE`.
- Make a lambda function `pred` that gets the predecessor of a Church numeral. (And `pred(0)` should give `0`.)
- Make a lambda function `sub` that subtracts two Church numerals.
