import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110001Page } from './s110001.page';

describe('S110001Page', () => {
  // let  
    let component:  S110001Page;
  let fixture: ComponentFixture<S110001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
