import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117060Page } from './s117060.page';

describe('S117060Page', () => {
  // let   
    let component:  S117060Page;
  let fixture: ComponentFixture<S117060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
