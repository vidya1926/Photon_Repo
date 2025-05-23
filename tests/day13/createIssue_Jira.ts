
//documentation
let endpoint = "https://vidya-bharathi.atlassian.net/rest/api/2/issue"
//auth details -->username with apikey
//project key 

import axios from "axios"



export async function createIssue(summary: string, desc: string) {

  const issueBody = {
    "fields": {
      "project": {
        "key": "PPW"
      },
      "summary": summary,
      "description": desc,
      "issuetype": {
        "name": "Bug"
      }
    }
  }

  const response = await axios.post(endpoint, issueBody,
    {
      headers: {
        "Content-Type": "application/json"
      },
      auth: {
        "username": "vidyar1926@gmail.com",
        "password": "ATATT3xFfGF0UBOdglqPRTeQZLJdr_ZTVAy1quQQ9FILbnC-BHxi88mk7yKVEEXRaCXUsdDZl-5v39T3wmMij58N4WI-nJXLIWFickbQCk6GBXlH6zNjgZCOk3gTJqmodi5n1NZlqBOgrC6j_Vb_g2Mt1xdnCdmYt3mo_4_LdZG5Aok7bqF2ogQ=077EB7A0"
      }

    })
  console.log(response.status)

}


createIssue("Login is not function", "Loginissue")