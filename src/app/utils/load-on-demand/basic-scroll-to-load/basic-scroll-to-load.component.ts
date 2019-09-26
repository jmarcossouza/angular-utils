import { Component, OnInit, OnDestroy, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'uts-basic-scroll-to-load',
    templateUrl: './basic-scroll-to-load.component.html',
    styles: []
})
export class BasicScrollToLoadComponent implements OnInit, OnDestroy {

    @Input() options = {
        root: null,
        rootMargin: "200px",
    };
    @Input() isLoading: boolean = false;
    @Output() scrolled: EventEmitter<number> = new EventEmitter<number>();
    @ViewChild('ancora', { static: true }) ancora: ElementRef<HTMLElement>;
    private count: number = 0;
    private observer: IntersectionObserver;

    constructor() { }

    ngOnInit() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !this.isLoading) {
                this.scrolled.emit(++this.count);
                console.log("Evento scroll", this.count);
            }
        }, this.options);

        this.observer.observe(this.ancora.nativeElement);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

}
