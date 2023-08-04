import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  public lastQuizSubmitted = new BehaviorSubject<Quiz[]>([] as Quiz[]);
}
