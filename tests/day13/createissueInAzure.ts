import axios from 'axios';
import dotenv from 'dotenv'
const organization = 'Azure-Qeagle'; // e.g., 'my-org'
const project = 'Azure_Board';  // e.g., 'TestProject'
dotenv.config()
const pat = process.env.AZURE_DEVOPS_PAT||'2wsR6tDIkz7f7xFD4UptAsDGjhWYWFQGIHkHfM35a1lw9Iyq0DFbJQQJ99BEACAAAAAv7nk8AAASAZDO40VX'; // Use environment variable for security
console.log(pat)
const auth = Buffer.from(`:${pat}`).toString('base64');

export async function logIssueInAzure(title: string, description: string) {
  try {
    const response = await axios.post(
      `https://dev.azure.com/${organization}/${project}/_apis/wit/workitems/$Bug?api-version=7.0`,
      [
        {
          op: 'add',
          path: '/fields/System.Title',
          value: title
        },
        {
          op: 'add',
          path: '/fields/Microsoft.VSTS.TCM.ReproSteps',
          value: description
        },
         {
          op: 'add',
          path: '/fields/Microsoft.VSTS.Common.Priority',
          value: 1
        }
      ],
      {
        headers: {
          'Content-Type': 'application/json-patch+json',
          Authorization: `Basic ${auth}`
        }
      }
    );
    
    console.log(response.data)
 console.log(response.status)
 console.log(response.statusText)

} catch (error: any) {
    console.error('❌ Failed to create issue:', error.response?.data || error.message);
  }
}


//logIssueInAzure("bug","error")