import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64008Page } from './s64008.page';

describe('S64008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64008Page;
  let fixture: ComponentFixture<S64008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
