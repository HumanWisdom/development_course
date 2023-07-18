import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53187Page } from './s132188.page';

describe('S53187Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53187Page;
  let fixture: ComponentFixture<S53187Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53187Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53187Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
