import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor(private http: HttpClient) { }

  API_URL = environment.API_URL;

  get(url: string, queryData?: any) {
    // Append the query data to the URL if it is provided
    url = queryData ? this.convertToQueryParams(url, queryData) : url;

    return this.http.get(this.API_URL + url);
  }

  post(url: string, data: any, queryData?: any) {
    // Append the query data to the URL if it is provided
    url = queryData ? this.convertToQueryParams(url, queryData) : url;

    return this.http.post(this.API_URL + url, data);
  }

  patch(url: string, data: any, queryData?: any) {
    // Append the query data to the URL if it is provided
    url = queryData ? this.convertToQueryParams(url, queryData) : url;

    return this.http.patch(this.API_URL + url, data);
  }

  delete(url: string, queryData: any) {
    // Append the query data to the URL if it is provided
    url = queryData ? this.convertToQueryParams(url, queryData) : url;

    return this.http.delete(this.API_URL + url);
  }

  convertToQueryParams(url: string, queryData: any) {
    // Add a "?" to the end of the URL to start the query parameters
    url += '?';
    let i = 1;
    let key: any, value: any;
    // Loop through each key-value pair in the queryData object and append them to the URL
    for ([key, value] of Object.entries(queryData)) {
      url += `${key}=${encodeURIComponent(value)}`;
      // If there are more key-value pairs to add, append an "&" to separate them
      if (i !== Object.keys(queryData).length) {
        url += '&';
      }
      i++;
    }
    // Return the updated URL with the appended query parameters
    return url;
  }
}
