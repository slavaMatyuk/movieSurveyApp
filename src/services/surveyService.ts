import { GetResponse } from '@models/GetResponse';
import { SubmitVoteRequest } from '@models/SubmitVoteRequest';

export class SurverService {
  static async getResponse() {
    const response: GetResponse = await fetch('/api/v1/survey').then((res) => res.json());
    return response;
  }

  static async submitVote(submitData: SubmitVoteRequest) {
    const response = await fetch('/api/v1/survey/:id/answers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ film: '', review: 4 }),
    });
    const content = await response.json();
    return content;
  }
}
