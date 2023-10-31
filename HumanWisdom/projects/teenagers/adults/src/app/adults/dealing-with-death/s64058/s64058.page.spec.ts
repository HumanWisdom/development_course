import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64058Page } from './s64058.page';

describe('S64058Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64058Page;
  let fixture: ComponentFixture<S64058Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64058Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64058Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
