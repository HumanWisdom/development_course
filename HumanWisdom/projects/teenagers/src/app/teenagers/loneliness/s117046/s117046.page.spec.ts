import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117046Page } from './s117046.page';

describe('S117046Page', () => {
  // let   
    let component:  S117046Page;
  let fixture: ComponentFixture<S117046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
