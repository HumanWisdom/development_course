import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48032Page } from './s48032.page';

describe('S48032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48032Page;
  let fixture: ComponentFixture<S48032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
