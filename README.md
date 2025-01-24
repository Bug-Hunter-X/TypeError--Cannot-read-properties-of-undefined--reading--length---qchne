# JavaScript Bug: TypeError when accessing property of undefined

This repository demonstrates a common JavaScript error: a `TypeError` occurring when attempting to access a property of an undefined variable.  The bug and its solution are shown in separate JavaScript files.

**bug.js:** Contains the buggy code.  This version fails to handle the case when the input is undefined.

**bugSolution.js:** Provides a corrected version of the code, demonstrating how to robustly handle potential undefined input.

This example is useful for understanding how to write more robust and error-free JavaScript code by including checks for undefined and null values before attempting to access their properties.