import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";


@Injectable({ providedIn: 'root' })

export class ApiService {
    private apiUrl = environment.apiBaseUrl;

    buildUrl( path: string): string {
        return `${this.apiUrl}/${path}`;
    }
}