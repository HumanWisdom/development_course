import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53116Page } from './s53116.page';

describe('S53116Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53116Page;
  let fixture: ComponentFixture<S53116Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53116Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53116Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
