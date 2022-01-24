const { assert } = require("chai");

const actual = [
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Topics",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Prepare these meeting materials based on recordings",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Highlights",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Summaries and keywords",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Transcripts",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Topics",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Prepare these meeting materials based on recordings",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Highlights",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Summaries and keywords",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Transcripts",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Prepare these meeting materials based on recordings",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Transcripts"
  ];
const expected = [
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Topics",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Prepare these meeting materials based on recordings",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Highlights",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Allow meetings to be recorded",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Transcripts",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Topics",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Prepare these meeting materials based on recordings",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Highlights",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Summaries and keywords",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Allow meetings to be recorded",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Disabled Transcripts",
    "Audit Trial, Ext. 101 Audit Trial, Ext. 101 Meetings > RingCentral Video > Meeting Settings Enabled Summaries and keywords",
  ];

for (const el of a2) {
    console.log(`「${el}」 index ${a1.indexOf(el)} of a1`);
    console.log(`「${el}」 index ${a2.indexOf(el)} of a2`);
    if (a1.includes(el) && a2.includes(el)) continue;
    console.log(`「${el}」 doesn't included a1 and a2 at same time.`);
}

// assert.sameMembers(a1, a2, 'same');