import { Component, OnInit, ViewEncapsulation,
  ComponentFactoryResolver, OnDestroy, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-spin-ner',
  templateUrl: './spin-ner.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpinNerComponent implements OnInit, OnDestroy {
  auth = false;
  interval: any;

  constructor(private componentFactory: ComponentFactoryResolver,
      private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

  ngOnDestroy() {
      clearInterval(this.interval);
  }

  loadComponent() {
     const factory = this.componentFactory.resolveComponentFactory(SpinNerComponent);
     const ref =  this.viewContainerRef.createComponent(factory);
     ref.changeDetectorRef.detectChanges();

  }

  getAds() {
      this.interval = setInterval(() => {
          this.loadComponent();
      }, 3000);
  }
}
