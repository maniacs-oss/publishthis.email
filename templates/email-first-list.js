var firstListEmails = {
'en': `
<p>You've just created your first list using publishthis.email</p>
<p>To send to your list</p>
<p>1. Send an email to list@publishthis.email</p>
<p>2. We'll reply with a link to preview your email</p>
<p>3. Click "Send to list" to distribute your list to your subscribers</p>
`
}

var firstListEmailsWithPage = {
'en': `
<p>You've just created your first list using publishthis.email</p>
<p>Share this page with your audience to grow your subscribers:</p>
<p>http://www.publishthis.email/{{=it.mailObj.messageId}}</p>
<p>To send to your list</p>
<p>1. Send an email to list@publishthis.email</p>
<p>2. We'll reply with a link to preview your email</p>
<p>3. Click "Send to list" to distribute your list to your subscribers</p>
`
}

export { firstListEmails, firstListEmailsWithPage }
