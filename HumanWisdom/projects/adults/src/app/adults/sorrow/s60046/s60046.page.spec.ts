import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60046Page } from './s60046.page';

describe('S60046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60046Page;
  let fixture: ComponentFixture<S60046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
