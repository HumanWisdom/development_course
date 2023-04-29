import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110009Page } from './s110009.page';

describe('S110009Page', () => {
  // let  
    let component:  S110009Page;
  let fixture: ComponentFixture<S110009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
