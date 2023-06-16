import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117044Page } from './s117044.page';

describe('S117044Page', () => {
  // let   
    let component:  S117044Page;
  let fixture: ComponentFixture<S117044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
