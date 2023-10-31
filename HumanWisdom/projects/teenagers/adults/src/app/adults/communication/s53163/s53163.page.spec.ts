import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53163Page } from './s53163.page';

describe('S53163Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53163Page;
  let fixture: ComponentFixture<S53163Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53163Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53163Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
