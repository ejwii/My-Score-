# MyScore

A personal semester grade tracker built for how university grading actually works — not a generic GPA calculator.

## What it does

- **Build each course your own way.** No fixed structure — add whatever components a course actually has (CATs, labs, group work, exams), each with its own real marking scale and its own weight toward the final grade.
- **Enter marks exactly as given.** A CAT marked out of 100 that counts for 10% of the course? Type 78/100 — MyScore converts it, you don't.
- **Goals are optional.** Use it as a pure mark-recorder, or set a semester target and let the system tell you exactly what you still need — per course, per component — before you've even sat the test.
- **Cross-course redistribution.** Know you'll underperform in one course? Set its target manually and MyScore recalculates what the rest need to compensate, credit-weighted.
- **Pass-mark awareness.** Flags the gap between "mathematically enough for your cumulative" and "actually enough to pass this course" — because those aren't the same thing.
- **Personal record-keeping.** Save a semester as a named, permanent snapshot — your own copy of your marks, independent of whatever the university's system shows you.

## Setup

This runs on Firebase (Auth + Firestore).

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication → Email/Password**
3. Enable **Firestore Database**
4. Copy your web app config into the `firebaseConfig` object in `index.html`
5. Add Firestore security rules restricting each user to their own data (see below)
6. Deploy via GitHub Pages

### Firestore rules
