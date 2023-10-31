import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60024Page } from './s60024.page';

describe('S60024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60024Page;
  let fixture: ComponentFixture<S60024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
