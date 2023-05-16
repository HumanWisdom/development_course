import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116008Page } from './s116008.page';

describe('S116008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116008Page;
  let fixture: ComponentFixture<S116008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
