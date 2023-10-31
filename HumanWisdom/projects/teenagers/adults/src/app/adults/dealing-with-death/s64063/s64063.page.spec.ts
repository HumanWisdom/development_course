import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64063Page } from './s64063.page';

describe('S64063Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64063Page;
  let fixture: ComponentFixture<S64063Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64063Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64063Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
