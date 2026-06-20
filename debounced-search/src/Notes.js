/*
The task is not about React.

The task is about:

Performance Optimization
Imagine Amazon Search

Suppose user wants to search:

iphone

User types:

i
ip
iph
ipho
iphon
iphone

Without debounce:

i      -> API Call
ip     -> API Call
iph    -> API Call
ipho   -> API Call
iphon  -> API Call
iphone -> API Call

Total:

6 API calls

for a single search.

Now imagine:

1 million users

doing the same thing.

Suddenly your backend receives:

6 million requests

instead of:

1 million requests
What Problems Does This Cause?
1. Server Load

More requests:

More CPU
More Memory
More Database Queries

More cost.

2. Slow Application

Every API call:

Browser
↓
Network
↓
Backend
↓
Database
↓
Response

takes time.

Making 6 unnecessary requests slows everything down.

3. Wasted Database Queries

Suppose user finally wants:

react

Why search for:

r
re
rea
reac

when those results will never be used?

How Debounce Helps

User types:

r
re
rea
reac
react

Every keystroke:

Cancel previous timer
Start new timer

When user stops typing:

(wait 500ms)

Now:

API Call -> react

Only once.

Why 500ms?

Think like a human.

If I type:

react

I usually press keys every:

100-200ms

So:

500ms

means:

User has probably finished typing.

Many companies use:

300ms
500ms
800ms

depending on the use case.

Real Examples
Google Search

Type:

react

Suggestions don't request after every character.

They debounce.

Amazon

Type:

iphone

Search suggestions are debounced.

LinkedIn

Search:

software engineer

Debounced.

GitHub

Repository search.

Debounced.

Why Interviewers Ask This

Because it tests whether you understand:

Frontend Performance

not just React syntax.

They want to know:

Can you build applications that scale?

Even junior developers are expected to know:

Don't hit APIs unnecessarily.
In One Line

The purpose of debouncing is:

Wait until the user finishes typing before making an expensive operation (API call), reducing unnecessary requests and improving performance.

That's the exact explanation I'd give if an interviewer asked:

"Why are we using debounce in a search bar?"
*/