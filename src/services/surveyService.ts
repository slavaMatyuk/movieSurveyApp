import { GetResponse } from '@models/GetResponse';
import { SubmitResponse } from '@models/SubmitResponse';
import { SubmitVoteRequest } from '@models/SubmitVoteRequest';
import { FetchService } from './FetchService';

export class SurveyService {
  static async getResponse() {
    const response: GetResponse = await FetchService.request('/survey');
    return response;
  }

  static async submitVote(submitData: Pick<SubmitVoteRequest, 'data'>, id: string) {
    const response: SubmitResponse = await FetchService.request(`/survey${id}/answers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    });
    return response;
  }
}
