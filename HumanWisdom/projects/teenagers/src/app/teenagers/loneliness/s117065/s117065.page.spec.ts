import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117065Page } from './s117065.page';

describe('S117065Page', () => {
  // let   
    let component:  S117065Page;
  let fixture: ComponentFixture<S117065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
