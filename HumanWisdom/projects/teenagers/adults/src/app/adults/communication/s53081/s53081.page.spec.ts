import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53081Page } from './s53081.page';

describe('S53081Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53081Page;
  let fixture: ComponentFixture<S53081Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53081Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53081Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
