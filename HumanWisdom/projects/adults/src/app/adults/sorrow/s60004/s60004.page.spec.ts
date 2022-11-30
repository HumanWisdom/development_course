import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60004Page } from './s60004.page';

describe('S60004Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60004Page;
  let fixture: ComponentFixture<S60004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
