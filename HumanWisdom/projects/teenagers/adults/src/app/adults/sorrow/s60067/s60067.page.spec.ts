import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60067Page } from './s60067.page';

describe('S60067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60067Page;
  let fixture: ComponentFixture<S60067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
