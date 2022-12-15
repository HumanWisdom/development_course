import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73010Page } from './s73010.page';

describe('S73010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73010Page;
  let fixture: ComponentFixture<S73010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
