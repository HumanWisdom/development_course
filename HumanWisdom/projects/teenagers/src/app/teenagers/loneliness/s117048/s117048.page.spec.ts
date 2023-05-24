import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117048Page } from './s117048.page';

describe('S117048Page', () => {
  // let   
    let component:  S117048Page;
  let fixture: ComponentFixture<S117048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117048Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
