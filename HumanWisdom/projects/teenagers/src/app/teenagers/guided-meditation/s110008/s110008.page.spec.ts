import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110008Page } from './s110008.page';

describe('S110008Page', () => {
  // let  
    let component:  S110008Page;
  let fixture: ComponentFixture<S110008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
