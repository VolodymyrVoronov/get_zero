## What is it?

Package for getting zero in any form you want.

## Installation

Run `npm i get_zero` or `yarn add get_zero` etc.

## Use

import getZero from "get_zero";

#### Without parameter:

- Default: **getZero()** returns **0** (number);

#### With parameter:

- Option 1: **getZero("number")** returns **0** (number);
- Option 2: **getZero("string")** returns **"0"** (string);
- Option 3: **getZero("object")** returns **{0: 0}** (object);
- Option 4: **getZero("array_number")** returns **[0]** (number[]);
- Option 4: **getZero("array_string")** returns **["0"]** (string[]);
- Option 5: **getZero("word")** returns **"zero"** ("string");
