JavaScript   // Matches "Isn't JavaScript great?" 
^JavaScript  // Matches "JavaScript rules!", 
             //  not "What is JavaScript?" 
JavaScript$  // Matches "I love JavaScript",
             //  not "JavaScript is great!" 
^JavaScript$ // Matches "JavaScript", and nothing else


Obviously, you may sometimes want to use ^, $, or other special characters to represent the corresponding character in the search string rather than the special meaning implied by regular expression syntax. To remove the special meaning of a character, prefix it with a backslash:
\$\$\$      // Matches "Show me the $$$!"


[12345]     // Matches "1" and "3", but not "a" or "12"
[1-5]       // Same as the previous example 
[a-z]       // Matches any lowercase letter (from the English alphabet)
[0-9a-zA-Z] // Matches any letter or digit


By putting a ^ immediately following the opening square bracket, you can invert the set of characters, meaning the set will match any character not listed:
[^a-zA-Z]   // Matches anything except a letter



The characters ?, +, and * also have special meanings. Specifically, ? means “the preceding character is optional”, + means “one or more of the previous character”, and * means “zero or more of the previous character”.

bana?na     // Matches "banana" and "banna", 
            // but not "banaana". 
bana+na     // Matches "banana" and "banaana", 
            // but not "banna". 
bana*na     // Matches "banna", "banana", and "banaaana", 
            // but not "bnana". 
^[a-zA-Z]+$ // Matches any string of one or more 
            // letters and nothing else.
            
Parentheses may be used to group strings together to apply ?, +, or * to them as a whole.
ba(na)+na   // Matches "banana" and "banananana", 
            // but not "bana" or "banaana".
            
            
Parentheses also let you define several strings that may match, using the pipe (|) character to separate them.
^(ba|na)+$  // Matches "banana", "nababa", "baba", 
            // "nana", "ba", "na", and others.



Page Range Validation Regex: ^[0-9]+(?:(?:\s*,\s*|-)[0-9]+)*$

