import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117079Page } from './s117079.page';

describe('S117079Page', () => {
  // let   
    let component:  S117079Page;
  let fixture: ComponentFixture<S117079Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117079Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117079Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
