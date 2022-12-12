import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64049Page } from './s64049.page';

describe('S64049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64049Page;
  let fixture: ComponentFixture<S64049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
