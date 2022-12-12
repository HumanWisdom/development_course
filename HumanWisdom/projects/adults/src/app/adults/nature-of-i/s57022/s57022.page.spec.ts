import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S57022Page } from './s57022.page';

describe('S57022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S57022Page;
  let fixture: ComponentFixture<S57022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S57022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S57022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
