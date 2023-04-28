import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110010Page } from './s110010.page';

describe('S110010Page', () => {
  // let  
    let component:  S110010Page;
  let fixture: ComponentFixture<S110010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
