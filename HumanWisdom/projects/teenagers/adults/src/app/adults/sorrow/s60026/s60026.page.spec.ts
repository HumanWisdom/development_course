import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60026Page } from './s60026.page';

describe('S60026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60026Page;
  let fixture: ComponentFixture<S60026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
