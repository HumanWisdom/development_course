import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45010Page } from './s45010.page';

describe('S45010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45010Page;
  let fixture: ComponentFixture<S45010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
