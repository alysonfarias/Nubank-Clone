import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class AppComponent implements OnInit {
  title = 'nubank-clone';

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;

  @ViewChild('cardSliderRef')
  cardSliderRef!: ElementRef<HTMLElement>;

  slider?: KeenSliderInstance
  cardSlider?: KeenSliderInstance

  isValueHidden: boolean = false;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14
      }
    });
    this.cardSlider = new KeenSlider(this.cardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14
      }
    });
  }
  ngOnInit() {

  }
  toggleValue() {
    this.isValueHidden = !this.isValueHidden;
    console.log(this.isValueHidden);
  }
}
