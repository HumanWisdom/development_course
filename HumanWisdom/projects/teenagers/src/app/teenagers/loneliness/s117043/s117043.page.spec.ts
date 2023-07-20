import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117043Page } from './s117043.page';

describe('S117043Page', () => {
  // let   
    let component:  S117043Page;
  let fixture: ComponentFixture<S117043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
