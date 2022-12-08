import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53173Page } from './s53173.page';

describe('S53173Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53173Page;
  let fixture: ComponentFixture<S53173Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53173Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53173Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
