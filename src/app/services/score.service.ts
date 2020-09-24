import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {StateEnum} from "../state.enum";

@Injectable({providedIn: 'root'})
export class ScoreService {

    constructor(private http: HttpClient) {
    }

    public saveScore(nom: string, score: number, state: StateEnum): Observable<void> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        let body = {name: nom, score: score, state: state.toString()};
        return this.http.post('http://gybels.ovh/endpoint/post-score.php', body, {headers: headers}).pipe(
            map(res => {})
        );
    }

}
