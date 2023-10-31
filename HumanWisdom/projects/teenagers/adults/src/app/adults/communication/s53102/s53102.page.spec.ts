import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53102Page } from './s53102.page';

describe('S53102Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53102Page;
  let fixture: ComponentFixture<S53102Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53102Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53102Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
