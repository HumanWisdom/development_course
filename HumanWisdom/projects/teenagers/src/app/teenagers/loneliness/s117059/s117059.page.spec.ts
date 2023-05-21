import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117059Page } from './s117059.page';

describe('S117059Page', () => {
  // let   
    let component:  S117059Page;
  let fixture: ComponentFixture<S117059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
