import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64062Page } from './s64062.page';

describe('S64062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64062Page;
  let fixture: ComponentFixture<S64062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
