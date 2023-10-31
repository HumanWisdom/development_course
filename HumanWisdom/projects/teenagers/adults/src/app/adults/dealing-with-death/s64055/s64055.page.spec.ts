import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64055Page } from './s64055.page';

describe('S64055Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64055Page;
  let fixture: ComponentFixture<S64055Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64055Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64055Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
