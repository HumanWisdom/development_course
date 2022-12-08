import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53177Page } from './s53177.page';

describe('S53177Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53177Page;
  let fixture: ComponentFixture<S53177Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53177Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53177Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
