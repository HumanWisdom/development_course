import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64005Page } from './s64005.page';

describe('S64005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64005Page;
  let fixture: ComponentFixture<S64005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
