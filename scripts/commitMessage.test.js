const {    run, getStagedFilenames, createCommitMessage } = require('./commitMessage')

// Literals of expected results
const result1 = `Apply standardised formatter to changelog-1.md

This commit was automatically generated by the formatter github action which ran the src/format.js script

Files changed:
podcast/changelog-1.md
`

const result2 = `Apply standardised formatter to changelog-1.md and 2 other files

This commit was automatically generated by the formatter github action which ran the src/format.js script

Files changed:
podcast/changelog-1.md
podcast/changelog-2.md
podcast/changelog-3.md
`

const result3 = `Apply standardised formatter to changelog-1.md and 9 other files

This commit was automatically generated by the formatter github action which ran the src/format.js script

Files changed:
podcast/changelog-1.md
podcast/changelog-2.md
podcast/changelog-3.md
and 7 more`

// dummy filename list
const list =      [
        'podcast/changelog-1.md',
        'podcast/changelog-2.md',
        'podcast/changelog-3.md',
        'podcast/changelog-4.md',
        'podcast/changelog-5.md',
        'podcast/changelog-6.md',
        'podcast/changelog-7.md',
        'podcast/changelog-8.md',
        'podcast/changelog-9.md',
        'podcast/changelog-10.md'
      ]

test('createCommitMessage works as expected', async () => {
    
    const message1 = createCommitMessage(list.slice(0,1))
    const message2 = createCommitMessage(list.slice(0,3))
    const message3 = createCommitMessage(list, 3)

    expect(message1).toBe(result1)
    expect(message2).toBe(result2)
    expect(message3).toBe(result3)
        
})

    


