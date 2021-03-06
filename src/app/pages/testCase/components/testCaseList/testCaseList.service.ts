import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
@Injectable()
export class TestCaseListService {

  private url = 'http://127.0.0.1:9090/testcase/search/all';
  constructor(private http: Http){}
  getTestCases(): Promise<any> {
    return this.http.get(this.url).toPromise().then(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body;
  }
}
