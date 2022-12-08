import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55036Page } from './s55036.page';

describe('S55036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55036Page;
  let fixture: ComponentFixture<S55036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
