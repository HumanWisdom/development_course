import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53158Page } from './s53158.page';

describe('S53158Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53158Page;
  let fixture: ComponentFixture<S53158Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53158Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53158Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
