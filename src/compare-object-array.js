const actual = [
  [
    { text: "Allow chat in meetings", status: true },
    { text: "Play sound when participants join or leave", status: false },
    {
      text: "Send email notification when meeting recording is ready",
      status: false,
    },
    {
      text: "Send email notification when meeting recording is deleted",
      status: true,
    },
    {
      text: "Send email notification when meeting recording is shared",
      status: true,
    },
    { text: "Send email notification when meeting has ended", status: false },
    { text: "Allow meetings to be recorded", status: true },
    {
      text: "Prepare these meeting materials based on recordings",
      status: true,
    },
    { text: "Transcripts", status: true },
    { text: "Summaries and keywords", status: true },
  ],
  [
    {
      text: "Use end-to-end encryption by default for new meetings",
      status: true,
      readOnly: false,
      Unlock: true,
      lockReadOnly: false,
    },
    {
      text: "Enable meeting password for scheduled meetings",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
    {
      text: "Restrict screen sharing to hosts & moderators",
      status: false,
      readOnly: false,
      Unlock: true,
      lockReadOnly: false,
    },
    {
      text: "Allow only authenticated users to join meetings",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
    {
      text: "Require participants to enter a waiting room before joining the meeting",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
  ],
];
const expected = [
  [
    { text: "Allow chat in meetings", status: true },
    { text: "Play sound when participants join or leave", status: false },
    {
      text: "Send email notification when meeting recording is ready",
      status: false,
    },
    {
      text: "Send email notification when meeting recording is deleted",
      status: true,
    },
    {
      text: "Send email notification when meeting recording is shared",
      status: true,
    },
    { text: "Send email notification when meeting has ended", status: false },
    { text: "Allow meetings to be recorded", status: true },
    { text: "Transcripts", status: true },
    {
      text: "Prepare these meeting materials based on recordings",
      status: true,
    },
    { text: "Summaries and keywords", status: true },
  ],
  [
    {
      text: "Use end-to-end encryption by default for new meetings",
      status: true,
      readOnly: false,
      Unlock: true,
      lockReadOnly: false,
    },
    {
      text: "Enable meeting password for scheduled meetings",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
    {
      text: "Restrict screen sharing to hosts & moderators",
      status: false,
      readOnly: false,
      Unlock: true,
      lockReadOnly: false,
    },
    {
      text: "Allow only authenticated users to join meetings",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
    {
      text: "Require participants to enter a waiting room before joining the meeting",
      status: true,
      readOnly: true,
      Unlock: true,
      lockReadOnly: true,
    },
  ],
];
