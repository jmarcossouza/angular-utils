import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'uts-scroll-to-load',
    templateUrl: './scroll-to-load.component.html',
    styles: []
})
export class ScrollToLoadComponent {

    @Input() url: string;
    @Output() data: EventEmitter<any[]> = new EventEmitter<any[]>();
    /**
     * A página deve ser mandada assim `http://localhost/url?page={{{page}}}&per_page={{{itensPerPage}}}`
     */
    private page: number = 1;
    @Input() itensPerPage: number = 20;
    private lastPage: number;
    public isLoading: boolean = false;

    constructor(private http: HttpClient) { }

    /**
     * @description Método que verifica se pode carregar mais itens ou não.
     */
    public get canLoadMore(): boolean {
        if (!this.isLoading) {
            if (this.lastPage == undefined && this.page == 1) {
                return true;
            } else if (this.page <= this.lastPage) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    /**
     * @description Url injetada aqui já com o replace das páginas.
     */
    private get urlConverted(): string {
        return `${this.url.replace("{{{page}}}", this.page.toString()).replace("{{{itensPerPage}}}", this.itensPerPage.toString())}`;
    }

    public scrolledEvent(): void {
        if (this.canLoadMore) {
            this.isLoading = true;
            this.http.get<LumenPagination>(this.urlConverted).subscribe(
                response => this.handleResult = response
                , error => this.handleError = error
            );
        }
    }

    private set handleResult(result: LumenPagination) {
        this.data.emit(result.data);
        this.lastPage = result.last_page;
        this.page++;
        this.isLoading = false;
    }

    private set handleError(error: Error) {
        this.isLoading = false;
        throw error;
    }

}

export interface LumenPagination {
    current_page: number;
    data: any[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}