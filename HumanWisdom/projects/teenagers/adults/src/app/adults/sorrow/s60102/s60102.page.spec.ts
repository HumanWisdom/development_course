import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60102Page } from './s60102.page';

describe('S60102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60102Page;
  let fixture: ComponentFixture<S60102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
