import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64070Page } from './s64070.page';

describe('S64070Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64070Page;
  let fixture: ComponentFixture<S64070Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64070Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64070Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
